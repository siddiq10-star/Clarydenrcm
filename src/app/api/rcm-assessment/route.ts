import "server-only";

import { createHash, randomUUID } from "node:crypto";
import { isIP } from "node:net";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

import { revenueChallenges } from "@/features/assessment/assessment-data";
import { rcmAssessmentSchema } from "@/lib/validations/rcm-assessment";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 16 * 1024;

const TEST_TURNSTILE_SECRET =
  "1x0000000000000000000000000000000AA";

const requestSchema = z.object({
  assessment: rcmAssessmentSchema,

  submissionId: z.string().uuid(),

  turnstileToken: z
    .string()
    .min(1)
    .max(2048),
});

const turnstileResponseSchema = z.object({
  success: z.boolean(),
  hostname: z.string().optional(),
  action: z.string().optional(),
});

type Assessment = z.infer<
  typeof rcmAssessmentSchema
>;

type ServerConfig = {
  origin: string;
  from: string;
  to: string;
  resendKey: string;
  turnstileSecret: string;
  redisUrl: string;
  redisToken: string;
};

class PayloadTooLargeError extends Error {}

function json(
  body: Record<string, unknown>,
  status = 200,
  extraHeaders: Record<string, string> = {}
) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
      ...extraHeaders,
    },
  });
}

function getConfig(): ServerConfig | null {
  const {
    APP_ORIGIN,
    RESEND_API_KEY,
    RESEND_FROM_EMAIL,
    RESEND_NOTIFY_EMAIL,
    TURNSTILE_SECRET_KEY,
    UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN,
  } = process.env;

  if (
    !APP_ORIGIN ||
    !RESEND_API_KEY ||
    !RESEND_FROM_EMAIL ||
    !RESEND_NOTIFY_EMAIL ||
    !TURNSTILE_SECRET_KEY ||
    !UPSTASH_REDIS_REST_URL ||
    !UPSTASH_REDIS_REST_TOKEN
  ) {
    return null;
  }

  const fromValid = z
    .string()
    .email()
    .safeParse(RESEND_FROM_EMAIL).success;

  const toValid = z
    .string()
    .email()
    .safeParse(RESEND_NOTIFY_EMAIL).success;

  if (!fromValid || !toValid) {
    return null;
  }

  try {
    const origin = new URL(APP_ORIGIN).origin;

    if (
      process.env.NODE_ENV === "production" &&
      (!origin.startsWith("https://") ||
        TURNSTILE_SECRET_KEY === TEST_TURNSTILE_SECRET)
    ) {
      return null;
    }

    return {
      origin,
      from: RESEND_FROM_EMAIL,
      to: RESEND_NOTIFY_EMAIL,
      resendKey: RESEND_API_KEY,
      turnstileSecret: TURNSTILE_SECRET_KEY,
      redisUrl: UPSTASH_REDIS_REST_URL,
      redisToken: UPSTASH_REDIS_REST_TOKEN,
    };
  } catch {
    return null;
  }
}

function getClientKey(request: Request) {
  // Vercel overwrites X-Forwarded-For to prevent
  // client IP spoofing. For another host, configure
  // its trusted-proxy/IP handling before deployment.
  const candidate = request.headers
    .get("x-forwarded-for")
    ?.split(",")[0]
    ?.trim();

  const ip = candidate && isIP(candidate)
    ? candidate
    : "unknown";

  // Store a hash in Redis rather than a raw IP address.
  return createHash("sha256")
    .update(ip)
    .digest("hex");
}

function createLimiters(config: ServerConfig) {
  const redis = new Redis({
    url: config.redisUrl,
    token: config.redisToken,
  });

  return {
    ip: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "15 m"),
      prefix: "kinz:rcm-assessment:ip",
    }),

    email: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, "1 d"),
      prefix: "kinz:rcm-assessment:email",
    }),
  };
}

async function readBody(request: Request): Promise<unknown> {
  const declaredLength = Number(
    request.headers.get("content-length") ?? 0
  );

  if (declaredLength > MAX_BODY_BYTES) {
    throw new PayloadTooLargeError();
  }

  if (!request.body) {
    return null;
  }

  const reader = request.body.getReader();
  const chunks: Buffer[] = [];

  let total = 0;

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    total += value.byteLength;

    if (total > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new PayloadTooLargeError();
    }

    chunks.push(Buffer.from(value));
  }

  try {
    return JSON.parse(
      Buffer.concat(chunks).toString("utf8")
    );
  } catch {
    return null;
  }
}

async function verifyTurnstile(
  token: string,
  config: ServerConfig
): Promise<"valid" | "invalid" | "unavailable"> {
  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },

        body: new URLSearchParams({
          secret: config.turnstileSecret,
          response: token,
          idempotency_key: randomUUID(),
        }),

        signal: AbortSignal.timeout(8000),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return "unavailable";
    }

    const parsed = turnstileResponseSchema.safeParse(
      await response.json()
    );

    if (!parsed.success || !parsed.data.success) {
      return "invalid";
    }

    const result = parsed.data;

    const expectedHostname = new URL(
      config.origin
    ).hostname;

    const isLocalTest =
      process.env.NODE_ENV !== "production" &&
      config.turnstileSecret ===
        TEST_TURNSTILE_SECRET;

    if (isLocalTest) {
      return result.action === "test"
        ? "valid"
        : "invalid";
    }

    if (
      result.hostname !== expectedHostname ||
      result.action !== "rcm_assessment"
    ) {
      return "invalid";
    }

    return "valid";
  } catch {
    return "unavailable";
  }
}

function formatAssessment(
  assessment: Assessment,
  reference: string
) {
  const challengeLabels = assessment.challenges.map(
    (id) =>
      revenueChallenges.find(
        (item) => item.id === id
      )?.label ?? id
  );

  const value = (text?: string) =>
    text?.trim() || "Not provided";

  return [
    "NEW RCM ASSESSMENT",
    `Reference: ${reference}`,
    "",
    "PRACTICE",
    `Practice: ${assessment.practiceName}`,
    `Website: ${value(assessment.practiceWebsite)}`,
    `Specialty: ${assessment.specialty}`,
    `State: ${assessment.state}`,
    `Providers: ${assessment.providerCount}`,
    "",
    "REVENUE CYCLE",
    `Billing model: ${assessment.billingModel}`,
    `Monthly collections: ${value(assessment.monthlyCollections)}`,
    `EHR / PM: ${value(assessment.ehr)}`,
    "",
    "CHALLENGES",
    ...challengeLabels.map((label) => `- ${label}`),
    "",
    "ADDITIONAL BUSINESS CONTEXT",
    value(assessment.challengeDetails),
    "",
    "CONTACT",
    `Name: ${assessment.firstName} ${assessment.lastName}`,
    `Role: ${assessment.role}`,
    `Email: ${assessment.workEmail}`,
    `Phone: ${assessment.phone}`,
    `Preferred contact: ${assessment.preferredContact}`,
    "",
    "This is an untrusted public business inquiry.",
    "If patient information is inadvertently included,",
    "follow the company's privacy/incident-handling procedure.",
  ].join("\n");
}

export async function POST(request: Request) {
  const reference = randomUUID();

  try {
    const config = getConfig();

    if (!config) {
      return json(
        {
          success: false,
          message:
            "Assessment submissions are temporarily unavailable.",
        },
        503
      );
    }

    // Defense in depth. This does not replace Turnstile
    // or rate limiting.
    if (
      request.headers.get("origin") !== config.origin
    ) {
      return json(
        {
          success: false,
          message: "Invalid request origin.",
        },
        403
      );
    }

    const contentType =
      request.headers.get("content-type") ?? "";

    if (
      !contentType
        .toLowerCase()
        .startsWith("application/json")
    ) {
      return json(
        {
          success: false,
          message: "JSON content is required.",
        },
        415
      );
    }

    const limiters = createLimiters(config);

    const ipLimit = await limiters.ip.limit(
      getClientKey(request)
    );

    if (!ipLimit.success) {
      const retryAfter = Math.max(
        1,
        Math.ceil(
          (ipLimit.reset - Date.now()) / 1000
        )
      );

      return json(
        {
          success: false,
          message:
            "Too many requests. Please try again later.",
        },
        429,
        {
          "Retry-After": String(retryAfter),
        }
      );
    }

    const body = await readBody(request);

    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return json(
        {
          success: false,
          message:
            "Please review the assessment details and try again.",
          errors: parsed.error.flatten().fieldErrors,
        },
        400
      );
    }

    const {
      assessment,
      submissionId,
      turnstileToken,
    } = parsed.data;

    const verification = await verifyTurnstile(
      turnstileToken,
      config
    );

    if (verification === "unavailable") {
      return json(
        {
          success: false,
          message:
            "Verification is temporarily unavailable. Please try again.",
        },
        503
      );
    }

    if (verification !== "valid") {
      return json(
        {
          success: false,
          message:
            "Verification expired or failed. Please complete it again.",
        },
        400
      );
    }

    const emailKey = createHash("sha256")
      .update(assessment.workEmail.toLowerCase())
      .digest("hex");

    const emailLimit = await limiters.email.limit(
      emailKey
    );

    if (!emailLimit.success) {
      return json(
        {
          success: false,
          message:
            "Too many assessment requests have been submitted for this email address. Please try again later.",
        },
        429
      );
    }

    const resend = new Resend(config.resendKey);

    const { data, error } = await resend.emails.send(
      {
        from: `claryden rcm <${config.from}>`,
        to: [config.to],

        replyTo: assessment.workEmail,

        subject:
          "New RCM Assessment | claryden rcm",

        text: formatAssessment(
          assessment,
          submissionId
        ),
      },
      {
        idempotencyKey:
          `rcm-assessment/${submissionId}`,
      }
    );

        if (error || !data?.id) {
      // Do not log submitted form data, provider error
      // details, tokens, or other potentially sensitive data.
      console.error("RCM assessment delivery failed", {
        reference,
        category: error?.name ?? "missing_email_id",
      });

      return json(
        {
          success: false,
          message:
            "We couldn't submit your assessment right now. Please try again.",
        },
        502
      );
    }

    // Resend has accepted the email. This is not a
    // guarantee of inbox delivery or database persistence.
    return json(
      {
        success: true,
        submissionId,
      },
      200
    );
  } catch (error) {
    if (error instanceof PayloadTooLargeError) {
      return json(
        {
          success: false,
          message:
            "The assessment is too large. Please shorten your responses and try again.",
        },
        413
      );
    }

    // Fail closed if Redis, Resend, or another dependency
    // is unavailable. Never return raw exception details.
    console.error("RCM assessment request failed", {
      reference,
      category:
        error instanceof Error ? error.name : "unknown",
    });

    return json(
      {
        success: false,
        message:
          "Assessment submissions are temporarily unavailable. Please try again later.",
      },
      503
    );
  }
}