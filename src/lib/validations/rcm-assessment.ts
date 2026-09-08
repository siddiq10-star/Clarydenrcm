import { z } from "zod";

import {
  billingModels,
  contactRoles,
  monthlyCollectionRanges,
  providerCounts,
  revenueChallenges,
  specialties,
} from "@/features/assessment/assessment-data";

function requiredOption(
  options: readonly string[],
  message: string
) {
  return z
    .string()
    .trim()
    .min(1, message)
    .refine((value) => options.includes(value), message);
}

const optionalWebsite = z
  .string()
  .trim()
  .max(2048, "Website is too long")
  .optional()
  .refine((value) => {
    if (!value) return true;

    try {
      const url = new URL(
        /^[a-z][a-z\d+.-]*:\/\//i.test(value)
          ? value
          : `https://${value}`
      );

      return (
        ["http:", "https:"].includes(url.protocol) &&
        url.hostname.includes(".")
      );
    } catch {
      return false;
    }
  }, "Enter a valid website");

const challengeIds = new Set<string>(
  revenueChallenges.map((challenge) => challenge.id)
);

const collectionRanges = new Set<string>(
  monthlyCollectionRanges
);

export const rcmAssessmentSchema = z.object({
  practiceName: z
    .string()
    .trim()
    .min(2, "Practice name is required")
    .max(120, "Practice name is too long"),

  practiceWebsite: optionalWebsite,

  specialty: requiredOption(
    specialties,
    "Select a specialty"
  ),

  state: z
    .string()
    .trim()
    .min(2, "State is required")
    .max(80, "State is too long"),

  providerCount: requiredOption(
    providerCounts,
    "Select number of providers"
  ),

  billingModel: requiredOption(
    billingModels,
    "Select your current billing model"
  ),

  monthlyCollections: z
    .string()
    .trim()
    .refine(
      (value) => !value || collectionRanges.has(value),
      "Select a valid collection range"
    )
    .optional(),

  ehr: z
    .string()
    .trim()
    .max(100, "EHR name is too long")
    .optional(),

  challenges: z
    .array(
      z.string().refine(
        (value) => challengeIds.has(value),
        "Invalid challenge"
      )
    )
    .min(1, "Select at least one revenue-cycle challenge")
    .max(10, "Too many challenges selected")
    .refine(
      (values) => new Set(values).size === values.length,
      "Select each challenge only once"
    ),

  challengeDetails: z
    .string()
    .trim()
    .max(
      1500,
      "Please keep additional details under 1,500 characters"
    )
    .optional(),

  firstName: z
    .string()
    .trim()
    .min(2, "First name is required")
    .max(80, "First name is too long"),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name is required")
    .max(80, "Last name is too long"),

  role: requiredOption(
    contactRoles,
    "Select your role"
  ),

  workEmail: z
    .string()
    .trim()
    .email("Enter a valid work email")
    .max(254, "Email is too long"),

  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(25, "Phone number is too long")
    .regex(
      /^[+\d][\d\s().-]*$/,
      "Enter a valid phone number"
    ),

  preferredContact: z.enum([
    "email",
    "phone",
    "either",
  ]),

  consent: z
    .boolean()
    .refine(
      (value) => value,
      "Please confirm before submitting"
    ),
});

export type RcmAssessmentFormData = z.infer<
  typeof rcmAssessmentSchema
>;