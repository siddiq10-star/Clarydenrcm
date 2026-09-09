import type { ServiceSlug } from "@/features/services/services-data";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/* Specialty content                                                          */
/* -------------------------------------------------------------------------- */

export const specialties = [
  {
    slug: "behavioral-health",
    title: "Behavioral Health Revenue Cycle Management",
    shortTitle: "Behavioral Health",
    category: "Specialty RCM",

    description:
      "Behavioral health medical billing and RCM support, including eligibility, authorization coordination, claim preparation, denials and payer follow-up.",

    heroDescription:
      "Bring structure to behavioral health billing with coordinated eligibility, authorization, claim preparation and payer follow-up workflows.",

    overview:
      "Behavioral health revenue cycle management requires attention to service-specific coverage, authorization rules, documentation requirements and payer reimbursement policies. Depending on the practice and services provided, billing workflows may involve different benefit structures, visit requirements and claim-processing rules. Claryden RCM supports the administrative revenue cycle through defined workflows for verifying available coverage information, coordinating authorization requirements, preparing claims and following up on unresolved payer responses. Documentation and coding questions are directed to appropriately qualified personnel, while the scope of support is established around the practice's actual services, systems and payer requirements.",

    focusAreas: [
      {
        title: "Eligibility & Benefits",
        description:
          "Review available coverage, benefit and service-related information to identify applicable payer requirements before billing activity proceeds.",
      },
      {
        title: "Authorization Coordination",
        description:
          "Coordinate administrative authorization requests, status tracking and follow-up where required by the payer or health plan.",
      },
      {
        title: "Documentation & Coding",
        description:
          "Coordinate billing-related documentation and coding questions with appropriately qualified clinical or coding personnel.",
      },
      {
        title: "Denials & A/R",
        description:
          "Investigate outstanding claims, review denial reasons and coordinate payer follow-up, corrections or appeals where appropriate.",
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
      "Family medicine medical billing and RCM support across eligibility, claim preparation, payment posting and insurance accounts receivable.",

    heroDescription:
      "Keep family medicine revenue workflows organized from patient access and claim preparation through payment posting and insurance A/R follow-up.",

    overview:
      "Family medicine practices manage a broad range of patient encounters, preventive services and ongoing care. Revenue-cycle operations require coordination between registration, eligibility verification, clinical documentation, coding, charge entry, claim submission and payment follow-up. Claryden RCM supports these administrative workflows through defined responsibilities, claim-quality checks and consistent account resolution processes. The operating scope is configured around the practice's services, approved systems and payer requirements, with clinical and coding decisions remaining with appropriately qualified personnel.",

    focusAreas: [
      {
        title: "Patient Access",
        description:
          "Support eligibility and benefits verification before scheduled services and coordinate follow-up when available coverage information requires clarification.",
      },
      {
        title: "Claim Preparation",
        description:
          "Coordinate charge entry, claim validation and submission using the practice's approved documentation and billing workflows.",
      },
      {
        title: "Payment Operations",
        description:
          "Support insurance payment posting, contractual adjustments and identification of remaining balances requiring additional review.",
      },
      {
        title: "Insurance A/R",
        description:
          "Track outstanding insurance claims, investigate payer responses and coordinate follow-up or escalation through defined workflows.",
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
      "Internal medicine medical billing and RCM support for claim preparation, documentation coordination, denial management and insurance A/R.",

    heroDescription:
      "Support internal medicine billing with coordinated claim preparation, documentation workflows, denial resolution and revenue-cycle reporting.",

    overview:
      "Internal medicine practices may manage a wide range of office-based services, chronic-condition care and ongoing patient encounters. Accurate billing depends on appropriate documentation, coding, payer requirements and timely coordination between clinical and administrative teams. Claryden RCM supports structured revenue-cycle workflows designed to keep billing activity visible and unresolved accounts moving through the appropriate follow-up process. Services may include claim preparation, documentation coordination, denial investigation and agreed operational reporting, with responsibilities and access requirements defined during discovery.",

    focusAreas: [
      {
        title: "Billing Coordination",
        description:
          "Support charge entry, claim validation and submission through approved practice systems and established billing procedures.",
      },
      {
        title: "Documentation Workflow",
        description:
          "Route billing-related documentation or coding questions to appropriately qualified personnel for review and resolution.",
      },
      {
        title: "Denial Resolution",
        description:
          "Investigate payer denials, identify available resolution options and coordinate corrections, appeals or follow-up where appropriate.",
      },
      {
        title: "Revenue Visibility",
        description:
          "Support agreed reporting on claims, payments, aging receivables and unresolved issues to help the practice review revenue-cycle activity.",
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
      "Dermatology medical billing and RCM support for coverage review, procedure billing coordination, claim validation and denial follow-up.",

    heroDescription:
      "Coordinate dermatology revenue workflows across coverage requirements, clinical documentation, claim preparation and payer resolution.",

    overview:
      "Dermatology revenue-cycle workflows may involve office visits, procedures and other services with different coverage, documentation and reimbursement requirements. Billing teams must distinguish applicable payer policies and coordinate claim preparation with the practice's approved clinical documentation and coding processes. Claryden RCM supports the administrative revenue cycle through coverage review, billing coordination, claim validation and payer follow-up. Clinical decisions and coding responsibilities remain with appropriately qualified personnel, and the service scope is defined around the practice's actual procedures, systems and payer requirements.",

    focusAreas: [
      {
        title: "Coverage Review",
        description:
          "Support verification of available benefits and applicable payer requirements for scheduled dermatology services.",
      },
      {
        title: "Procedure Billing",
        description:
          "Coordinate claim preparation and billing-related coding questions for documented services using approved practice workflows.",
      },
      {
        title: "Claim Validation",
        description:
          "Review claims for required billing information, applicable edits and issues that may require clarification before submission.",
      },
      {
        title: "Denial Follow-Up",
        description:
          "Investigate payer denials and coordinate appropriate corrections, appeals or additional follow-up within the agreed service scope.",
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
      "Cardiology medical billing and RCM support across eligibility, authorization, documentation coordination, claims and insurance A/R.",

    heroDescription:
      "Bring structured coordination to cardiology billing, from coverage and authorization requirements through claim processing and payer follow-up.",

    overview:
      "Cardiology practices may provide evaluation, diagnostic and procedural services with differing payer, authorization and documentation requirements. Revenue-cycle support requires careful coordination between patient access, clinical teams, qualified coding personnel and billing operations. Claryden RCM supports defined administrative workflows for coverage verification, authorization coordination, claim preparation and payer follow-up. The engagement scope is established around the practice's services and approved systems, while clinical decisions and coding responsibilities remain with appropriately qualified professionals.",

    focusAreas: [
      {
        title: "Eligibility & Authorization",
        description:
          "Coordinate coverage verification, available benefit information and administrative authorization requirements where applicable.",
      },
      {
        title: "Documentation Coordination",
        description:
          "Route billing-related documentation and coding questions to appropriately qualified clinical or coding personnel.",
      },
      {
        title: "Claim Processing",
        description:
          "Support claim preparation, validation and submission through approved systems and established billing workflows.",
      },
      {
        title: "A/R & Denials",
        description:
          "Investigate outstanding insurance balances, review payer responses and coordinate appropriate resolution or escalation activities.",
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
      "Orthopedic medical billing and RCM support for authorization coordination, documentation, claim management, denials and insurance A/R.",

    heroDescription:
      "Support orthopedic revenue workflows with coordinated authorization, documentation, claim management and payer follow-up processes.",

    overview:
      "Orthopedic practices may manage office visits, procedures and other services with distinct documentation, authorization and reimbursement considerations. Effective revenue-cycle operations require coordination across patient access, clinical documentation, qualified coding personnel, claim preparation and payer follow-up. Claryden RCM supports the administrative workflow through defined responsibilities and structured account resolution processes. Clinical and coding decisions remain with appropriately qualified professionals, and the service scope is configured around the practice's actual services, systems and payer requirements.",

    focusAreas: [
      {
        title: "Authorization Support",
        description:
          "Coordinate administrative authorization requirements, track pending requests and follow up on available payer responses.",
      },
      {
        title: "Coding & Documentation",
        description:
          "Support billing-related coordination with qualified coding and clinical personnel when documentation or coding questions require review.",
      },
      {
        title: "Claim Management",
        description:
          "Support claim validation, submission and rejection resolution through approved practice systems and defined billing workflows.",
      },
      {
        title: "Revenue Recovery",
        description:
          "Investigate denials and aging insurance receivables, then coordinate appropriate payer follow-up, corrections or escalation.",
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
      "Physical therapy medical billing and RCM support for benefits, visit information, authorization tracking, claims and denial follow-up.",

    heroDescription:
      "Coordinate physical therapy revenue workflows from benefits and visit information through authorization tracking, billing and claim resolution.",

    overview:
      "Physical therapy billing can involve visit limits, authorization requirements, plan-specific benefits and documentation considerations. These requirements vary by payer, plan and service, making coordination between patient access, clinical teams and billing operations important. Claryden RCM supports administrative verification, authorization tracking, claim preparation and payer follow-up workflows within the agreed service scope. Clinical documentation, treatment decisions and medical-necessity determinations remain with appropriately qualified professionals.",

    focusAreas: [
      {
        title: "Benefits & Visit Information",
        description:
          "Review available therapy benefits, visit limitations and applicable coverage information to identify requirements requiring follow-up.",
      },
      {
        title: "Authorization Tracking",
        description:
          "Support administrative authorization coordination, status tracking and follow-up where required by the payer or health plan.",
      },
      {
        title: "Billing Coordination",
        description:
          "Support claim preparation using approved clinical documentation and established workflows involving appropriately qualified coding personnel.",
      },
      {
        title: "Denials & A/R",
        description:
          "Investigate unpaid claims, review payer responses and coordinate appropriate corrections, appeals or account follow-up.",
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
      "Pain management medical billing and RCM support across coverage, authorization, documentation coordination, claims and payer resolution.",

    heroDescription:
      "Bring structure to pain management billing with coordinated coverage review, authorization, documentation and payer follow-up workflows.",

    overview:
      "Pain management practices may provide evaluation and procedural services with differing coverage, authorization and documentation requirements. Revenue-cycle operations require coordination with clinical teams and appropriately qualified coding personnel, careful attention to payer policies and consistent follow-up on unresolved claims. Claryden RCM supports administrative workflows for coverage review, authorization coordination, claim preparation and payer resolution within the agreed service scope. Clinical decisions, medical-necessity determinations and coding responsibilities remain with appropriately qualified professionals.",

    focusAreas: [
      {
        title: "Coverage & Authorization",
        description:
          "Support benefit verification and administrative authorization coordination where applicable to the practice's services and payer requirements.",
      },
      {
        title: "Documentation Coordination",
        description:
          "Route billing-related documentation and coding questions to appropriately qualified clinical or coding personnel.",
      },
      {
        title: "Claim Processing",
        description:
          "Support claim preparation, validation and submission through approved practice systems and established billing workflows.",
      },
      {
        title: "Denial & A/R Follow-Up",
        description:
          "Investigate payer responses, review outstanding insurance balances and coordinate appropriate resolution or escalation activities.",
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

/* -------------------------------------------------------------------------- */
/* Types & helpers                                                            */
/* -------------------------------------------------------------------------- */

export type SpecialtySlug =
  (typeof specialties)[number]["slug"];

export function getSpecialtyBySlug(
  slug: string
): SpecialtyDefinition | undefined {
  return specialties.find(
    (specialty) => specialty.slug === slug
  );
}