"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Turnstile,
  type TurnstileInstance,
} from "@marsidev/react-turnstile";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  HeartPulse,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
  Workflow,
} from "lucide-react";
import {
  Controller,
  useForm,
  type FieldErrors,
  type FieldPath,
} from "react-hook-form";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import {
  rcmAssessmentSchema,
  type RcmAssessmentFormData,
} from "@/lib/validations/rcm-assessment";

import {
  assessmentSteps,
  billingModels,
  contactRoles,
  monthlyCollectionRanges,
  providerCounts,
  revenueChallenges,
  specialties,
} from "./assessment-data";

const stepFields: Record<
  number,
  FieldPath<RcmAssessmentFormData>[]
> = {
  1: [
    "practiceName",
    "practiceWebsite",
    "specialty",
    "state",
    "providerCount",
  ],

  2: [
    "billingModel",
    "monthlyCollections",
    "ehr",
  ],

  3: [
    "challenges",
    "challengeDetails",
  ],

  4: [
    "firstName",
    "lastName",
    "role",
    "workEmail",
    "phone",
    "preferredContact",
    "consent",
  ],
};

type SubmissionResponse = {
  success?: boolean;
  message?: string;
  submissionId?: string;
};

const TEST_TURNSTILE_SITE_KEY =
  "1x00000000000000000000AA";

const turnstileSiteKey =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

const turnstileConfigured = Boolean(turnstileSiteKey) && (
  process.env.NODE_ENV !== "production" ||
  turnstileSiteKey !== TEST_TURNSTILE_SITE_KEY
);

const turnstileOptions = {
  action:
    process.env.NODE_ENV !== "production" &&
    turnstileSiteKey === TEST_TURNSTILE_SITE_KEY
      ? "test"
      : "rcm_assessment",
  theme: "light" as const,
  size: "flexible" as const,
  refreshExpired: "manual" as const,
};

export function RcmAssessment() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [acceptedReference, setAcceptedReference] = useState<string | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [verificationError, setVerificationError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");

  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const attemptRef = useRef<{
    id: string;
    payload: string;
  } | null>(null);

    const {
    register,
    control,
    trigger,
    handleSubmit,
    watch,
    getFieldState,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<RcmAssessmentFormData>({
    resolver: zodResolver(rcmAssessmentSchema),

    defaultValues: {
      practiceName: "",
      practiceWebsite: "",
      specialty: "",
      state: "",
      providerCount: "",

      billingModel: "",
      monthlyCollections: "",
      ehr: "",

      challenges: [],
      challengeDetails: "",

      firstName: "",
      lastName: "",
      role: "",
      workEmail: "",
      phone: "",
      preferredContact: "either",

      consent: false,
    },
  });

  const formValues = watch();

  const progress = useMemo(() => {
    return (currentStep / assessmentSteps.length) * 100;
  }, [currentStep]);

  async function handleNext() {
    const valid = await trigger(stepFields[currentStep], {
      shouldFocus: true,
    });

    if (!valid) {
      return;
    }

    setSubmissionError(null);
    setCurrentStep((step) =>
      Math.min(step + 1, assessmentSteps.length)
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleBack() {
    if (currentStep === assessmentSteps.length) {
      resetVerification();
    }

    setSubmissionError(null);
    setVerificationError(null);
    setCurrentStep((step) => Math.max(step - 1, 1));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function resetVerification() {
    setTurnstileToken("");
    turnstileRef.current?.reset();
  }

    function handleInvalid(fields: FieldErrors<RcmAssessmentFormData>) {
    const firstInvalidStep = assessmentSteps.find((step) =>
      stepFields[step.number].some(
        (field) => getFieldState(field).invalid
      )
    );

    if (firstInvalidStep) {
      setCurrentStep(firstInvalidStep.number);
    }

    setSubmissionError(
      "Please review the highlighted fields before submitting."
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function onSubmit(values: RcmAssessmentFormData) {
    setSubmissionError(null);

    const token = turnstileRef.current?.getResponse() || turnstileToken;

    if (!turnstileConfigured || !token) {
      setVerificationError(
        "Please complete the security verification before submitting."
      );
      return;
    }

    // Reuse the same idempotency key when retrying unchanged data.
    // A changed assessment gets a new key.
    const payload = JSON.stringify(values);

    if (!attemptRef.current || attemptRef.current.payload !== payload) {
      attemptRef.current = {
        id: crypto.randomUUID(),
        payload,
      };
    }

    const submissionId = attemptRef.current.id;
    let accepted = false;

    try {
      const response = await fetch("/api/rcm-assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          assessment: values,
          submissionId,
          turnstileToken: token,
        }),
      });

      const result: SubmissionResponse | null = await response
        .json()
        .catch(() => null);

      if (!response.ok || result?.success !== true) {
        throw new Error(
          typeof result?.message === "string"
            ? result.message
            : "We couldn't submit your assessment. Please try again."
        );
      }

      accepted = true;
      setAcceptedReference(result.submissionId ?? submissionId);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      // A token may have been consumed even if email delivery failed.
      // Never retry with the same Turnstile token.
      if (!accepted) {
        resetVerification();
      }
    }
  }

  if (submitted) {
    return <AssessmentSuccess reference={acceptedReference} />;
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f6fafb] pb-24 pt-[128px] sm:pt-[140px] lg:pb-32 lg:pt-[150px]">
      <AssessmentBackground />

      <Container width="wide">
        <div className="relative">
          <AssessmentHero />

          <ProgressNavigation
            currentStep={currentStep}
            progress={progress}
          />

          <div className="mt-8 grid items-start gap-5 lg:grid-cols-[1.12fr_0.72fr] xl:gap-7">
            <form
              onSubmit={handleSubmit(onSubmit, handleInvalid)}
              noValidate
              className="
                relative overflow-hidden
                rounded-[28px]
                border border-black/[0.07]
                bg-white/82
                shadow-[0_28px_85px_rgba(7,23,34,0.08)]
                backdrop-blur-2xl
              "
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#19c9bb]/35 to-transparent" />

              <div className="p-5 sm:p-7 lg:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{
                      opacity: 0,
                      x: 18,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -18,
                    }}
                    transition={{
                      duration: 0.28,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {currentStep === 1 ? (
                      <PracticeStep
                        register={register}
                        errors={errors}
                      />
                    ) : null}

                    {currentStep === 2 ? (
                      <RevenueCycleStep
                        register={register}
                        errors={errors}
                      />
                    ) : null}

                    {currentStep === 3 ? (
                      <ChallengesStep
                        control={control}
                        register={register}
                        errors={errors}
                      />
                    ) : null}

                    {currentStep === 4 ? (
                      <ContactStep
                        register={register}
                        errors={errors}
                      />
                    ) : null}
                  </motion.div>
                </AnimatePresence>

                {currentStep === assessmentSteps.length ? (
                  <div className="mt-6 rounded-[18px] border border-black/[0.065] bg-[#fbfdfd] p-4 sm:p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-xl bg-[#15c8bb]/[0.07] text-[#0b9389]">
                        <ShieldCheck className="size-4" strokeWidth={1.8} />
                      </span>
                      <div>
                        <p className="text-[12px] font-semibold text-[#294550]">
                          Security verification
                        </p>
                        <p className="mt-1 text-[10px] leading-5 text-[#82949c]">
                          Complete this check before sending your request.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 min-h-[65px]">
                      {turnstileConfigured ? (
                        <Turnstile
                          ref={turnstileRef}
                          siteKey={turnstileSiteKey}
                          options={turnstileOptions}
                          onSuccess={(token) => {
                            setTurnstileToken(token);
                            setVerificationError(null);
                          }}
                          onExpire={() => {
                            resetVerification();
                          }}
                          onError={() => {
                            setTurnstileToken("");
                            setVerificationError(
                              "Verification couldn't load. Please try again."
                            );
                          }}
                        />
                      ) : (
                        <p role="alert" className="text-[11px] leading-5 text-[#b74750]">
                          Verification is temporarily unavailable.
                        </p>
                      )}
                    </div>

                    {verificationError ? (
                      <div role="alert" className="mt-3 flex flex-wrap items-center gap-3">
                        <p className="text-[11px] leading-5 text-[#b74750]">
                          {verificationError}
                        </p>
                        {turnstileConfigured ? (
                          <button
                            type="button"
                            onClick={() => {
                              setVerificationError(null);
                              resetVerification();
                            }}
                            className="text-[11px] font-semibold text-[#0b9188] underline underline-offset-4"
                          >
                            Retry verification
                          </button>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>

              {submissionError ? (
                <div role="alert" className="mx-5 mb-2 rounded-[14px] border border-[#d75a63]/15 bg-[#d75a63]/[0.045] px-4 py-3 sm:mx-7 lg:mx-8">
                  <p className="text-[11px] font-medium leading-5 text-[#b74750]">
                    {submissionError}
                  </p>
                </div>
              ) : null}

              <div className="flex flex-col-reverse gap-3 border-t border-black/[0.06] bg-[#fbfdfd]/80 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:px-8">
                <div>
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="
                        inline-flex min-h-11 items-center
                        justify-center gap-2 rounded-xl
                        px-4 text-[13px] font-semibold
                        text-[#526974]
                        transition-colors
                        hover:bg-black/[0.035]
                        hover:text-[#132f3a]
                      "
                    >
                      <ArrowLeft
                        className="size-4"
                        strokeWidth={1.8}
                      />

                      Back
                    </button>
                  ) : (
                    <p className="text-[10px] leading-5 text-[#8a9ca4]">
                      Step {currentStep} of{" "}
                      {assessmentSteps.length}
                    </p>
                  )}
                </div>

                {currentStep <
                assessmentSteps.length ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="
                      group inline-flex min-h-[50px]
                      items-center justify-center gap-2.5
                      rounded-[14px]
                      bg-[#071c27] px-5
                      text-[13px] font-semibold
                      !text-white
                      shadow-[0_14px_36px_rgba(5,28,38,0.18)]
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:shadow-[0_18px_45px_rgba(5,28,38,0.24)]
                    "
                  >
                    Continue

                    <ArrowRight
                      className="size-4"
                      strokeWidth={1.8}
                    />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !turnstileConfigured || !turnstileToken}
                    className="
                      group inline-flex min-h-[50px]
                      items-center justify-center gap-2.5
                      rounded-[14px]
                      bg-[#071c27] px-6
                      text-[13px] font-semibold
                      !text-white
                      shadow-[0_14px_36px_rgba(5,28,38,0.18)]
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:shadow-[0_18px_45px_rgba(5,28,38,0.24)]
                      disabled:pointer-events-none
                      disabled:opacity-60
                    "
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : "Request My Assessment"}

                    {!isSubmitting ? (
                      <ArrowRight
                        className="size-4"
                        strokeWidth={1.8}
                      />
                    ) : null}
                  </button>
                )}
              </div>
            </form>

            <AssessmentSummary
              step={currentStep}
              values={formValues}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function AssessmentBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-52 top-16 size-[560px] rounded-full bg-[#15c8bb]/[0.065] blur-[150px]" />

      <div className="absolute -right-48 top-20 size-[600px] rounded-full bg-[#4c8dff]/[0.07] blur-[160px]" />

      <div
        className="
          absolute inset-0 opacity-45
          bg-[linear-gradient(rgba(7,23,34,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(7,23,34,0.02)_1px,transparent_1px)]
          bg-[size:62px_62px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_88%)]
        "
      />
    </div>
  );
}

function AssessmentHero() {
  return (
    <div className="mx-auto max-w-[900px] text-center">
      <motion.div
        initial={{
          opacity: 0,
          y: 14,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.55,
        }}
        className="
          inline-flex items-center gap-2.5
          rounded-full border border-black/[0.07]
          bg-white/75 px-3 py-2
          text-[10px] font-bold uppercase
          tracking-[0.16em] text-[#35515c]
          shadow-[inset_0_1px_rgba(255,255,255,0.9)]
          backdrop-blur-xl
        "
      >
        <Sparkles
          className="size-3.5 text-[#0b958b]"
          strokeWidth={1.8}
        />

        Revenue Cycle Assessment
      </motion.div>

      <motion.h1
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.05,
          duration: 0.65,
        }}
        className="
          mt-6 text-[clamp(3rem,5.7vw,6.2rem)]
          font-semibold leading-[0.94]
          tracking-[-0.065em]
          text-[#071722]
        "
      >
        Understand where your
        <span className="mt-1 block bg-gradient-to-r from-[#104f5b] via-[#078e94] to-[#337ce5] bg-clip-text text-transparent">
          revenue cycle needs attention.
        </span>
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
          y: 14,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.12,
          duration: 0.6,
        }}
        className="mx-auto mt-6 max-w-[720px] text-[15px] leading-7 text-[#687d87] sm:text-[16px]"
      >
        Share a few business-level details about your
        practice and current RCM challenges. No patient
        information is required.
      </motion.p>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.6,
        }}
        className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3"
      >
        <HeroTrustItem
          icon={LockKeyhole}
          label="No PHI requested"
        />

        <HeroTrustItem
          icon={ShieldCheck}
          label="Business inquiry only"
        />

        <HeroTrustItem
          icon={Clock3}
          label="Takes a few minutes"
        />
      </motion.div>
    </div>
  );
}

function HeroTrustItem({
  icon: Icon,
  label,
}: {
  icon: typeof ShieldCheck;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 text-[11px] font-medium text-[#71858e]">
      <span className="flex size-7 items-center justify-center rounded-lg bg-[#15c8bb]/[0.06] text-[#0b9389]">
        <Icon
          className="size-3.5"
          strokeWidth={1.8}
        />
      </span>

      {label}
    </div>
  );
}

function ProgressNavigation({
  currentStep,
  progress,
}: {
  currentStep: number;
  progress: number;
}) {
  return (
    <div className="mx-auto mt-12 max-w-[1000px]">
      <div className="relative">
        <div className="absolute left-[7%] right-[7%] top-[18px] hidden h-px bg-black/[0.07] sm:block" />

        <motion.div
          animate={{
            width: `${Math.max(
              0,
              ((currentStep - 1) /
                (assessmentSteps.length - 1)) *
                86
            )}%`,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute left-[7%] top-[18px]
            hidden h-px
            bg-gradient-to-r
            from-[#15c8bb]
            to-[#4c8dff]
            sm:block
          "
        />

        <div className="relative grid grid-cols-4 gap-2">
          {assessmentSteps.map((step) => {
            const active =
              step.number === currentStep;

            const complete =
              step.number < currentStep;

            return (
              <div
                key={step.number}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  animate={{
                    scale: active ? 1.08 : 1,
                  }}
                  className={`
                    relative z-10
                    flex size-9 items-center justify-center
                    rounded-full border
                    text-[10px] font-bold
                    transition-colors duration-300
                    ${
                      active
                        ? "border-[#0aa89d]/20 bg-[#071c27] text-white shadow-[0_8px_24px_rgba(5,28,38,0.18)]"
                        : complete
                          ? "border-[#15c8bb]/20 bg-[#15c8bb]/[0.08] text-[#078d83]"
                          : "border-black/[0.07] bg-[#f7fafb] text-[#8b9ca4]"
                    }
                  `}
                >
                  {complete ? (
                    <Check
                      className="size-4"
                      strokeWidth={2}
                    />
                  ) : (
                    step.number
                  )}
                </motion.div>

                <span
                  className={`
                    mt-2 hidden text-[10px]
                    font-semibold sm:block
                    ${
                      active
                        ? "text-[#17343f]"
                        : "text-[#8a9ca4]"
                    }
                  `}
                >
                  {step.label}
                </span>

                <span
                  className={`
                    mt-2 text-[9px]
                    font-semibold sm:hidden
                    ${
                      active
                        ? "text-[#17343f]"
                        : "text-[#8a9ca4]"
                    }
                  `}
                >
                  {step.shortLabel}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-5 h-1 overflow-hidden rounded-full bg-black/[0.045] sm:hidden">
          <motion.div
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 0.4,
            }}
            className="h-full rounded-full bg-gradient-to-r from-[#15c8bb] to-[#4c8dff]"
          />
        </div>
      </div>
    </div>
  );
}

interface StepProps {
  register: ReturnType<
    typeof useForm<RcmAssessmentFormData>
  >["register"];

  errors: ReturnType<
    typeof useForm<RcmAssessmentFormData>
  >["formState"]["errors"];
}

function PracticeStep({
  register,
  errors,
}: StepProps) {
  return (
    <>
      <StepHeader
        icon={Building2}
        eyebrow="Practice Profile"
        title="Tell us about your practice."
        description="This gives us basic context around your operating environment."
      />

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field
          label="Practice name"
          required
          error={errors.practiceName?.message}
        >
          <input
            {...register("practiceName")}
            type="text"
            autoComplete="organization"
            placeholder="ABC Medical Group"
            className={inputStyles}
          />
        </Field>

        <Field
          label="Practice website"
          error={errors.practiceWebsite?.message}
          optional
        >
          <input
            {...register("practiceWebsite")}
            type="text"
            inputMode="url"
            placeholder="yourpractice.com"
            className={inputStyles}
          />
        </Field>

        <Field
          label="Primary specialty"
          required
          error={errors.specialty?.message}
        >
          <SelectWrapper>
            <select
              {...register("specialty")}
              className={selectStyles}
              defaultValue=""
            >
              <option value="" disabled>
                Select specialty
              </option>

              {specialties.map(
                (specialty) => (
                  <option
                    key={specialty}
                    value={specialty}
                  >
                    {specialty}
                  </option>
                )
              )}
            </select>
          </SelectWrapper>
        </Field>

        <Field
          label="State"
          required
          error={errors.state?.message}
        >
          <input
            {...register("state")}
            type="text"
            placeholder="e.g. Florida"
            className={inputStyles}
          />
        </Field>

        <Field
          label="Number of providers"
          required
          error={errors.providerCount?.message}
          className="sm:col-span-2"
        >
          <SelectWrapper>
            <select
              {...register("providerCount")}
              className={selectStyles}
              defaultValue=""
            >
              <option value="" disabled>
                Select practice size
              </option>

              {providerCounts.map(
                (count) => (
                  <option
                    key={count}
                    value={count}
                  >
                    {count}
                  </option>
                )
              )}
            </select>
          </SelectWrapper>
        </Field>
      </div>
    </>
  );
}

function RevenueCycleStep({
  register,
  errors,
}: StepProps) {
  return (
    <>
      <StepHeader
        icon={Workflow}
        eyebrow="Current RCM"
        title="How is billing managed today?"
        description="A few operational details help us understand your current revenue-cycle model."
      />

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field
          label="Current billing model"
          required
          error={errors.billingModel?.message}
          className="sm:col-span-2"
        >
          <SelectWrapper>
            <select
              {...register("billingModel")}
              className={selectStyles}
              defaultValue=""
            >
              <option value="" disabled>
                Select billing model
              </option>

              {billingModels.map(
                (model) => (
                  <option
                    key={model}
                    value={model}
                  >
                    {model}
                  </option>
                )
              )}
            </select>
          </SelectWrapper>
        </Field>

        <Field
          label="Approx. monthly collections"
          optional
          error={
            errors.monthlyCollections?.message
          }
        >
          <SelectWrapper>
            <select
              {...register(
                "monthlyCollections"
              )}
              className={selectStyles}
              defaultValue=""
            >
              <option value="">
                Select range
              </option>

              {monthlyCollectionRanges.map(
                (range) => (
                  <option
                    key={range}
                    value={range}
                  >
                    {range}
                  </option>
                )
              )}
            </select>
          </SelectWrapper>
        </Field>

        <Field
          label="Current EHR / PM system"
          optional
          error={errors.ehr?.message}
        >
          <input
            {...register("ehr")}
            type="text"
            placeholder="e.g. Athenahealth, eClinicalWorks"
            className={inputStyles}
          />
        </Field>
      </div>

      <div className="mt-7 rounded-[18px] border border-[#15c8bb]/10 bg-[#15c8bb]/[0.035] p-4">
        <div className="flex gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#15c8bb]/[0.07] text-[#0d9188]">
            <CircleDollarSign
              className="size-4"
              strokeWidth={1.8}
            />
          </span>

          <div>
            <p className="text-[12px] font-semibold text-[#25434e]">
              Why we ask
            </p>

            <p className="mt-1 text-[11px] leading-5 text-[#748991]">
              Practice size, billing model and
              revenue volume help determine the
              appropriate RCM operating structure.
              Collection information is optional.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

interface ChallengesStepProps {
  control: ReturnType<
    typeof useForm<RcmAssessmentFormData>
  >["control"];

  register: ReturnType<
    typeof useForm<RcmAssessmentFormData>
  >["register"];

  errors: ReturnType<
    typeof useForm<RcmAssessmentFormData>
  >["formState"]["errors"];
}

function ChallengesStep({
  control,
  register,
  errors,
}: ChallengesStepProps) {
  return (
    <>
      <StepHeader
        icon={HeartPulse}
        eyebrow="Revenue Challenges"
        title="Where is your revenue cycle feeling friction?"
        description="Select every area you would like us to understand."
      />

      <Controller
        name="challenges"
        control={control}
        render={({ field }) => (
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {revenueChallenges.map(
              (challenge) => {
                const selected =
                  field.value.includes(
                    challenge.id
                  );

                return (
                  <button
                    key={challenge.id}
                    type="button"
                    onClick={() => {
                      if (selected) {
                        field.onChange(
                          field.value.filter(
                            (value) =>
                              value !==
                              challenge.id
                          )
                        );
                      } else {
                        field.onChange([
                          ...field.value,
                          challenge.id,
                        ]);
                      }
                    }}
                    className={`
                      group relative min-h-[118px]
                      rounded-[18px] border
                      p-4 text-left
                      transition-all duration-300
                      ${
                        selected
                          ? "border-[#15c8bb]/25 bg-[#15c8bb]/[0.045] shadow-[0_12px_30px_rgba(21,200,187,0.06)]"
                          : "border-black/[0.065] bg-[#fbfdfd] hover:-translate-y-0.5 hover:border-black/[0.11] hover:bg-white"
                      }
                    `}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[13px] font-semibold tracking-[-0.015em] text-[#17343f]">
                          {challenge.label}
                        </p>

                        <p className="mt-2 text-[10px] leading-5 text-[#7a8d95]">
                          {challenge.description}
                        </p>
                      </div>

                      <span
                        className={`
                          flex size-7 shrink-0
                          items-center justify-center
                          rounded-lg border
                          transition-colors
                          ${
                            selected
                              ? "border-[#15c8bb]/20 bg-[#15c8bb]/10 text-[#078f85]"
                              : "border-black/[0.07] bg-white text-transparent"
                          }
                        `}
                      >
                        <Check
                          className="size-3.5"
                          strokeWidth={2}
                        />
                      </span>
                    </div>
                  </button>
                );
              }
            )}
          </div>
        )}
      />

      {errors.challenges?.message ? (
        <p className="mt-3 text-[11px] font-medium text-[#d4515b]">
          {errors.challenges.message}
        </p>
      ) : null}

      <Field
        label="Anything else we should know?"
        optional
        error={errors.challengeDetails?.message}
        className="mt-6"
      >
        <textarea
          {...register("challengeDetails")}
          rows={5}
          placeholder="Share any additional business-level context about your revenue-cycle challenges. Please do not include patient information."
          className={`${inputStyles} min-h-[130px] resize-y py-3`}
        />
      </Field>

      <NoPhiNotice />
    </>
  );
}

function ContactStep({
  register,
  errors,
}: StepProps) {
  return (
    <>
      <StepHeader
        icon={UserRound}
        eyebrow="Contact"
        title="Who should we speak with?"
        description="We’ll use this information only to follow up about your RCM assessment."
      />

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field
          label="First name"
          required
          error={errors.firstName?.message}
        >
          <input
            {...register("firstName")}
            type="text"
            autoComplete="given-name"
            placeholder="First name"
            className={inputStyles}
          />
        </Field>

        <Field
          label="Last name"
          required
          error={errors.lastName?.message}
        >
          <input
            {...register("lastName")}
            type="text"
            autoComplete="family-name"
            placeholder="Last name"
            className={inputStyles}
          />
        </Field>

        <Field
          label="Your role"
          required
          error={errors.role?.message}
          className="sm:col-span-2"
        >
          <SelectWrapper>
            <select
              {...register("role")}
              className={selectStyles}
              defaultValue=""
            >
              <option value="" disabled>
                Select role
              </option>

              {contactRoles.map(
                (role) => (
                  <option
                    key={role}
                    value={role}
                  >
                    {role}
                  </option>
                )
              )}
            </select>
          </SelectWrapper>
        </Field>

        <Field
          label="Work email"
          required
          error={errors.workEmail?.message}
        >
          <div className="relative">
            <Mail
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#8b9ca4]"
              strokeWidth={1.7}
            />

            <input
              {...register("workEmail")}
              type="email"
              autoComplete="email"
              placeholder="you@practice.com"
              className={`${inputStyles} pl-11`}
            />
          </div>
        </Field>

        <Field
          label="Phone"
          required
          error={errors.phone?.message}
        >
          <div className="relative">
            <Phone
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#8b9ca4]"
              strokeWidth={1.7}
            />

            <input
              {...register("phone")}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+1..."
              className={`${inputStyles} pl-11`}
            />
          </div>
        </Field>
      </div>

      <div className="mt-6">
        <p className="text-[11px] font-semibold text-[#38515c]">
          Preferred contact method
        </p>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {[
            {
              value: "email",
              label: "Email",
            },
            {
              value: "phone",
              label: "Phone",
            },
            {
              value: "either",
              label: "Either",
            },
          ].map((option) => (
            <label
              key={option.value}
              className="
                flex cursor-pointer items-center
                gap-3 rounded-[14px]
                border border-black/[0.065]
                bg-[#fbfdfd] px-4 py-3
                transition-colors
                hover:bg-white
              "
            >
              <input
                {...register(
                  "preferredContact"
                )}
                type="radio"
                value={option.value}
                className="size-4 accent-[#0c978c]"
              />

              <span className="text-[11px] font-medium text-[#4f6670]">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-[18px] border border-black/[0.065] bg-[#fbfdfd] p-4">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            {...register("consent")}
            type="checkbox"
            className="mt-0.5 size-4 shrink-0 accent-[#0b968b]"
          />

          <span>
            <span className="block text-[11px] font-semibold leading-5 text-[#3e5863]">
              I confirm that I am submitting
              business information only.
            </span>

            <span className="mt-1 block text-[10px] leading-5 text-[#82949c]">
              Do not include patient information,
              medical records or Protected Health
              Information in this assessment.
            </span>
          </span>
        </label>

        {errors.consent?.message ? (
          <p className="mt-2 pl-7 text-[10px] font-medium text-[#d4515b]">
            {errors.consent.message}
          </p>
        ) : null}
      </div>
    </>
  );
}

function StepHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
}: {
  icon: typeof Building2;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-[13px] border border-[#15c8bb]/12 bg-[#15c8bb]/[0.055] text-[#0b958b]">
          <Icon
            className="size-[17px]"
            strokeWidth={1.8}
          />
        </span>

        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#6b7f88]">
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-5 text-[clamp(2rem,3.2vw,3.6rem)] font-semibold leading-[1] tracking-[-0.055em] text-[#0b2732]">
        {title}
      </h2>

      <p className="mt-3 max-w-[640px] text-[13px] leading-6 text-[#758992]">
        {description}
      </p>
    </div>
  );
}

function Field({
  label,
  required = false,
  optional = false,
  error,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div className="mb-2 flex items-center gap-2">
        <label className="text-[11px] font-semibold text-[#405963]">
          {label}
        </label>

        {required ? (
          <span className="text-[9px] text-[#ca5660]">
            Required
          </span>
        ) : null}

        {optional ? (
          <span className="text-[9px] text-[#9aabb2]">
            Optional
          </span>
        ) : null}
      </div>

      {children}

      {error ? (
        <p className="mt-2 text-[10px] font-medium text-[#d4515b]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {children}

      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#80939b]"
        strokeWidth={1.7}
      />
    </div>
  );
}

const inputStyles = `
  w-full min-h-[48px]
  rounded-[13px]
  border border-black/[0.075]
  bg-[#fbfdfd]
  px-4
  text-[12px]
  text-[#19343f]
  outline-none
  transition-all duration-200
  placeholder:text-[#a2b0b6]
  focus:border-[#15c8bb]/35
  focus:bg-white
  focus:ring-4
  focus:ring-[#15c8bb]/[0.055]
`;

const selectStyles = `
  w-full min-h-[48px]
  appearance-none
  rounded-[13px]
  border border-black/[0.075]
  bg-[#fbfdfd]
  px-4 pr-11
  text-[12px]
  text-[#19343f]
  outline-none
  transition-all duration-200
  focus:border-[#15c8bb]/35
  focus:bg-white
  focus:ring-4
  focus:ring-[#15c8bb]/[0.055]
`;

function NoPhiNotice() {
  return (
    <div className="mt-5 flex gap-3 rounded-[17px] border border-[#4c8dff]/10 bg-[#4c8dff]/[0.035] p-4">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#4c8dff]/[0.07] text-[#3475d7]">
        <LockKeyhole
          className="size-4"
          strokeWidth={1.8}
        />
      </span>

      <div>
        <p className="text-[11px] font-semibold text-[#395463]">
          Please keep this business-level.
        </p>

        <p className="mt-1 text-[10px] leading-5 text-[#7e9199]">
          Do not include patient names, dates of
          birth, medical records, insurance member
          IDs, diagnoses or any other PHI.
        </p>
      </div>
    </div>
  );
}

function AssessmentSummary({
  step,
  values,
}: {
  step: number;
  values: Partial<RcmAssessmentFormData>;
}) {
  return (
    <aside className="sticky top-[110px] hidden lg:block">
      <div
        className="
          relative overflow-hidden
          rounded-[28px]
          border border-[#0c2733]
          bg-[#061722]
          p-6 text-white
          shadow-[0_30px_90px_rgba(7,23,34,0.14)]
        "
      >
        <div className="absolute -right-28 -top-24 size-[280px] rounded-full bg-[#4c8dff]/[0.11] blur-[100px]" />

        <div className="absolute -left-24 bottom-[-100px] size-[260px] rounded-full bg-[#15c8bb]/[0.11] blur-[100px]" />

        <div
          className="
            absolute inset-0 opacity-35
            bg-[linear-gradient(rgba(255,255,255,0.023)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.023)_1px,transparent_1px)]
            bg-[size:52px_52px]
          "
        />

        <div className="relative">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#6de5dc]">
                Assessment Overview
              </p>

              <p className="mt-2 text-[21px] font-semibold tracking-[-0.04em]">
                RCM diagnostic context
              </p>
            </div>

            <span className="flex size-10 items-center justify-center rounded-[13px] border border-white/[0.07] bg-white/[0.04] text-[#6ce6dd]">
              <FileCheck2
                className="size-[17px]"
                strokeWidth={1.8}
              />
            </span>
          </div>

          <div className="mt-6 space-y-2">
            <SummaryRow
              label="Practice"
              value={
                values.practiceName ||
                "Not provided yet"
              }
            />

            <SummaryRow
              label="Specialty"
              value={
                values.specialty ||
                "Not provided yet"
              }
            />

            <SummaryRow
              label="Providers"
              value={
                values.providerCount ||
                "Not provided yet"
              }
            />

            <SummaryRow
              label="Billing"
              value={
                values.billingModel ||
                "Not provided yet"
              }
            />

            <SummaryRow
              label="Challenges"
              value={
                values.challenges?.length
                  ? `${values.challenges.length} selected`
                  : "Not selected yet"
              }
            />
          </div>

          <div className="mt-6 rounded-[18px] border border-white/[0.07] bg-white/[0.035] p-4">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/30">
                Current Step
              </span>

              <span className="text-[9px] font-semibold text-[#71e5dd]">
                {step}/4
              </span>
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.055]">
              <motion.div
                animate={{
                  width: `${(step / 4) * 100}%`,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="h-full rounded-full bg-gradient-to-r from-[#15c8bb] to-[#4c8dff]"
              />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <SummaryBenefit
              icon={ShieldCheck}
              title="No PHI requested"
              description="Business and operational information only."
            />

            <SummaryBenefit
              icon={Workflow}
              title="Structured discovery"
              description="Context first, proposal later."
            />

            <SummaryBenefit
              icon={BadgeCheck}
              title="No obligation"
              description="An assessment request does not commit your practice."
            />
          </div>
        </div>
      </div>
    </aside>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-5 rounded-[13px] border border-white/[0.05] bg-white/[0.025] px-3.5 py-3">
      <span className="text-[9px] text-white/30">
        {label}
      </span>

      <span className="max-w-[190px] truncate text-right text-[9px] font-semibold text-white/65">
        {value}
      </span>
    </div>
  );
}

function SummaryBenefit({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof ShieldCheck;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#4bdcd0]/[0.07] text-[#69e3da]">
        <Icon
          className="size-3.5"
          strokeWidth={1.8}
        />
      </span>

      <div>
        <p className="text-[10px] font-semibold text-white/72">
          {title}
        </p>

        <p className="mt-0.5 text-[8px] leading-4 text-white/30">
          {description}
        </p>
      </div>
    </div>
  );
}

function AssessmentSuccess({
  reference,
}: {
  reference: string | null;
}) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#f6fafb] px-5 pb-20 pt-[130px]">
      <AssessmentBackground />

      <div className="relative mx-auto w-full max-w-[760px]">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative overflow-hidden
            rounded-[30px]
            border border-black/[0.07]
            bg-white/86
            px-6 py-12
            text-center
            shadow-[0_35px_100px_rgba(7,23,34,0.10)]
            backdrop-blur-2xl
            sm:px-10 sm:py-14
          "
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#15c8bb]/40 to-transparent" />

          <motion.div
            initial={{
              scale: 0.7,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="mx-auto flex size-16 items-center justify-center rounded-[20px] border border-[#15c8bb]/15 bg-[#15c8bb]/[0.07] text-[#0a958a]"
          >
            <CheckCircle2
              className="size-7"
              strokeWidth={1.7}
            />
          </motion.div>

          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0c9289]">
            Assessment Received
          </p>

          <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-[#071722]">
            Thank you.
            <span className="block text-[#71858e]">
              We&apos;ll take it from here.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[570px] text-[14px] leading-7 text-[#6e828b]">
            Your revenue-cycle assessment request
            has been submitted. Our team will review
            the business-level information you
            provided and follow up using your
            preferred contact method.
          </p>

          {reference ? (
            <p className="mx-auto mt-4 max-w-[570px] break-all text-[10px] leading-5 text-[#82949c]">
              Reference: {reference}
            </p>
          ) : null}

          <div className="mx-auto mt-8 max-w-[520px] rounded-[18px] border border-[#4c8dff]/10 bg-[#4c8dff]/[0.03] p-4 text-left">
            <div className="flex gap-3">
              <LockKeyhole
                className="mt-0.5 size-4 shrink-0 text-[#3977d4]"
                strokeWidth={1.8}
              />

              <p className="text-[10px] leading-5 text-[#738891]">
                If additional information is needed,
                our team will establish an
                appropriate workflow before
                requesting anything involving
                patient data.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="
                inline-flex min-h-[50px]
                items-center justify-center
                rounded-[14px]
                bg-[#071c27] px-5
                text-[13px] font-semibold
                !text-white
                shadow-[0_14px_36px_rgba(5,28,38,0.18)]
              "
            >
              Return Home
            </Link>

            <Link
              href={siteConfig.routes.services}
              className="
                inline-flex min-h-[50px]
                items-center justify-center gap-2
                rounded-[14px]
                border border-black/[0.075]
                bg-white px-5
                text-[13px] font-semibold
                text-[#25434e]
              "
            >
              Explore Services

              <ArrowRight
                className="size-4"
                strokeWidth={1.8}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}