import type { ServiceSlug } from "@/features/services/services-data";

export interface SpecialtyDefinition {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  heroDescription: string;
  overview: string;
  focusAreas: readonly {
    title: string;
    description: string;
  }[];
  relatedServices: readonly ServiceSlug[];
}

export const specialties = [
  {
    slug: "behavioral-health",
    title: "Behavioral Health Revenue Cycle Management",
    shortTitle: "Behavioral Health",
    category: "Specialty RCM",
    description:
      "Revenue cycle support for behavioral health practices, with attention to eligibility, authorization, documentation, claims and payer follow-up.",
    heroDescription:
      "Support behavioral health revenue workflows with clear coordination across patient access, billing and reimbursement.",
    overview:
      "Behavioral health billing can involve service-specific coverage requirements, authorization rules, documentation considerations and payer-specific reimbursement policies. claryden rcm supports structured revenue-cycle workflows that help practices identify requirements, coordinate billing activity and follow unresolved claims through the appropriate resolution process.",
    focusAreas: [
      {
        title: "Eligibility & Benefits",
        description:
          "Review available coverage and benefit information relevant to behavioral health services.",
      },
      {
        title: "Authorization Coordination",
        description:
          "Support administrative authorization workflows where required by the payer or plan.",
      },
      {
        title: "Documentation & Coding",
        description:
          "Coordinate billing-related documentation and coding questions with appropriately qualified personnel.",
      },
      {
        title: "Denials & A/R",
        description:
          "Investigate outstanding claims and denial reasons through structured payer follow-up.",
      },
    ],
    relatedServices: [
      "eligibility-verification",
      "prior-authorization",
      "medical-billing",
      "denial-management",
    ],
  },
  {
    slug: "family-medicine",
    title: "Family Medicine Revenue Cycle Management",
    shortTitle: "Family Medicine",
    category: "Primary Care",
    description:
      "Revenue cycle support for family medicine practices across patient access, claim preparation, payment posting and insurance A/R.",
    heroDescription:
      "Keep primary care billing workflows organized across everyday encounters, payer requirements and outstanding receivables.",
    overview:
      "Family medicine practices manage a broad range of patient encounters and services. Revenue-cycle operations require coordination between registration, eligibility, documentation, coding, claim submission and payment follow-up. claryden rcm supports these workflows through defined responsibilities, quality checks and consistent account resolution.",
    focusAreas: [
      {
        title: "Patient Access",
        description:
          "Support eligibility and benefits verification before scheduled services.",
      },
      {
        title: "Claim Preparation",
        description:
          "Coordinate charge entry and claim validation using the practice's approved documentation and billing workflows.",
      },
      {
        title: "Payment Operations",
        description:
          "Support insurance payment posting, adjustments and identification of remaining balances.",
      },
      {
        title: "Insurance A/R",
        description:
          "Track outstanding claims and coordinate payer follow-up and escalation.",
      },
    ],
    relatedServices: [
      "medical-billing",
      "eligibility-verification",
      "payment-posting",
      "ar-management",
    ],
  },
  {
    slug: "internal-medicine",
    title: "Internal Medicine Revenue Cycle Management",
    shortTitle: "Internal Medicine",
    category: "Primary Care",
    description:
      "Structured billing and revenue-cycle support for internal medicine practices, including claims, denials, payments and A/R follow-up.",
    heroDescription:
      "Bring consistent billing operations and payer follow-through to internal medicine revenue workflows.",
    overview:
      "Internal medicine practices may manage a wide range of office-based services and ongoing patient care. Accurate billing depends on appropriate documentation, coding, payer requirements and coordinated follow-up. claryden rcm supports practices with structured workflows designed to keep billing activity visible and unresolved accounts moving toward resolution.",
    focusAreas: [
      {
        title: "Billing Coordination",
        description:
          "Support charge entry, claim validation and submission through approved practice systems.",
      },
      {
        title: "Documentation Workflow",
        description:
          "Route documentation or coding-related questions to the appropriate qualified team.",
      },
      {
        title: "Denial Resolution",
        description:
          "Investigate payer denials and coordinate corrections or appeals where appropriate.",
      },
      {
        title: "Revenue Visibility",
        description:
          "Provide agreed reporting on claims, payments, aging receivables and unresolved issues.",
      },
    ],
    relatedServices: [
      "medical-billing",
      "medical-coding",
      "denial-management",
      "ar-management",
    ],
  },
  {
    slug: "dermatology",
    title: "Dermatology Revenue Cycle Management",
    shortTitle: "Dermatology",
    category: "Specialty RCM",
    description:
      "Revenue cycle support for dermatology practices, with attention to documentation, coding, payer requirements and claims follow-up.",
    heroDescription:
      "Coordinate dermatology billing workflows across clinical documentation, claim preparation and payer resolution.",
    overview:
      "Dermatology revenue-cycle workflows may involve office visits, procedures and services with different coverage and documentation requirements. Billing teams must distinguish applicable payer requirements and coordinate coding and claim preparation appropriately. claryden rcm supports the administrative revenue cycle while clinical decisions and coding responsibilities remain with qualified personnel.",
    focusAreas: [
      {
        title: "Coverage Review",
        description:
          "Support verification of applicable benefits and payer requirements for scheduled services.",
      },
      {
        title: "Procedure Billing",
        description:
          "Coordinate claim preparation and coding-related questions for documented services.",
      },
      {
        title: "Claim Validation",
        description:
          "Review claims for required billing information and applicable edits.",
      },
      {
        title: "Denial Follow-Up",
        description:
          "Investigate denials and coordinate the appropriate correction, appeal or payer action.",
      },
    ],
    relatedServices: [
      "medical-billing",
      "medical-coding",
      "eligibility-verification",
      "denial-management",
    ],
  },
  {
    slug: "cardiology",
    title: "Cardiology Revenue Cycle Management",
    shortTitle: "Cardiology",
    category: "Specialty RCM",
    description:
      "Revenue cycle support for cardiology practices across eligibility, authorization, documentation, billing and insurance A/R.",
    heroDescription:
      "Bring structured coordination to cardiology billing and reimbursement workflows.",
    overview:
      "Cardiology practices may perform a range of evaluation, diagnostic and procedural services with differing payer and documentation requirements. Revenue-cycle support requires careful coordination between clinical teams, coding personnel, authorization workflows and billing operations. claryden rcm supports defined administrative workflows and payer follow-up within the agreed scope.",
    focusAreas: [
      {
        title: "Eligibility & Authorization",
        description:
          "Coordinate coverage verification and administrative authorization requirements where applicable.",
      },
      {
        title: "Documentation Coordination",
        description:
          "Route billing-related documentation and coding questions to appropriately qualified personnel.",
      },
      {
        title: "Claim Processing",
        description:
          "Support claim preparation, validation and submission through approved systems.",
      },
      {
        title: "A/R & Denials",
        description:
          "Investigate outstanding balances and coordinate payer resolution activities.",
      },
    ],
    relatedServices: [
      "prior-authorization",
      "medical-coding",
      "medical-billing",
      "ar-management",
    ],
  },
  {
    slug: "orthopedics",
    title: "Orthopedic Revenue Cycle Management",
    shortTitle: "Orthopedics",
    category: "Specialty RCM",
    description:
      "Revenue cycle support for orthopedic practices, including authorization coordination, billing, denials and insurance receivables.",
    heroDescription:
      "Support orthopedic revenue workflows with coordinated authorization, claim and payer follow-up processes.",
    overview:
      "Orthopedic practices may manage office visits, procedures and other services with distinct documentation, authorization and reimbursement considerations. Effective revenue-cycle operations require coordination across patient access, clinical documentation, coding and payer follow-up. claryden rcm supports the administrative workflow while clinical and coding decisions remain with appropriately qualified professionals.",
    focusAreas: [
      {
        title: "Authorization Support",
        description:
          "Coordinate administrative authorization requirements and track pending requests.",
      },
      {
        title: "Coding & Documentation",
        description:
          "Support billing-related coordination with qualified coding and clinical personnel.",
      },
      {
        title: "Claim Management",
        description:
          "Support claim validation, submission and rejection resolution.",
      },
      {
        title: "Revenue Recovery",
        description:
          "Investigate denials and aging insurance receivables through defined follow-up workflows.",
      },
    ],
    relatedServices: [
      "prior-authorization",
      "medical-coding",
      "denial-management",
      "ar-management",
    ],
  },
  {
    slug: "physical-therapy",
    title: "Physical Therapy Revenue Cycle Management",
    shortTitle: "Physical Therapy",
    category: "Specialty RCM",
    description:
      "Revenue cycle support for physical therapy practices, with attention to benefits, authorization, documentation and payer follow-up.",
    heroDescription:
      "Coordinate therapy revenue workflows from coverage verification through billing and outstanding claim resolution.",
    overview:
      "Physical therapy billing can involve visit limits, authorization requirements, plan-specific benefits and documentation considerations. These requirements vary by payer and service. claryden rcm supports administrative verification, billing and follow-up workflows while clinical documentation and medical-necessity decisions remain with qualified professionals.",
    focusAreas: [
      {
        title: "Benefits & Visit Information",
        description:
          "Review available therapy benefits, visit limitations and applicable coverage information.",
      },
      {
        title: "Authorization Tracking",
        description:
          "Support administrative authorization coordination and status tracking where required.",
      },
      {
        title: "Billing Coordination",
        description:
          "Support claim preparation using approved documentation and qualified coding workflows.",
      },
      {
        title: "Denials & A/R",
        description:
          "Investigate unpaid claims and coordinate payer follow-up and appropriate resolution.",
      },
    ],
    relatedServices: [
      "eligibility-verification",
      "prior-authorization",
      "medical-billing",
      "denial-management",
    ],
  },
  {
    slug: "pain-management",
    title: "Pain Management Revenue Cycle Management",
    shortTitle: "Pain Management",
    category: "Specialty RCM",
    description:
      "Revenue cycle support for pain management practices across authorization, documentation coordination, billing and payer resolution.",
    heroDescription:
      "Bring structure to complex pain management billing workflows and payer follow-through.",
    overview:
      "Pain management practices may provide evaluation and procedural services with differing coverage, authorization and documentation requirements. Revenue-cycle operations require coordination with clinical and qualified coding teams, careful attention to payer requirements and consistent follow-up on unresolved claims. claryden rcm supports these administrative workflows within the agreed service scope.",
    focusAreas: [
      {
        title: "Coverage & Authorization",
        description:
          "Support benefit verification and administrative authorization coordination where applicable.",
      },
      {
        title: "Documentation Coordination",
        description:
          "Route billing-related documentation and coding questions to qualified personnel.",
      },
      {
        title: "Claim Processing",
        description:
          "Support claim preparation, validation and submission through approved systems.",
      },
      {
        title: "Denial & A/R Follow-Up",
        description:
          "Investigate payer responses and coordinate appropriate resolution activities.",
      },
    ],
    relatedServices: [
      "prior-authorization",
      "medical-coding",
      "denial-management",
      "ar-management",
    ],
  },
] as const satisfies readonly SpecialtyDefinition[];

export type SpecialtySlug =
  (typeof specialties)[number]["slug"];

export function getSpecialtyBySlug(
  slug: string
): SpecialtyDefinition | undefined {
  return specialties.find(
    (specialty) => specialty.slug === slug
  );
}