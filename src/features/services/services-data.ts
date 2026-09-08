export interface ServiceDefinition {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  eyebrow: string;
  description: string;
  heroDescription: string;
  overview: string;
  highlights: readonly string[];
  deliverables: readonly {
    title: string;
    description: string;
  }[];
  process: readonly {
    title: string;
    description: string;
  }[];
  relatedServices: readonly string[];
}

export const services = [
  {
    slug: "medical-billing",
    title: "Medical Billing Services",
    shortTitle: "Medical Billing",
    category: "Core RCM",
    eyebrow: "Medical Billing",
    description:
      "Structured medical billing support for healthcare practices, from charge entry and claim validation through submission and payer follow-up.",
    heroDescription:
      "Move claims through the revenue cycle with accurate workflows, clear ownership and disciplined follow-through.",
    overview:
      "Medical billing is more than submitting claims. It requires coordination between patient information, clinical documentation, coding, payer requirements and payment workflows. Kinz HealthOps supports practices with structured billing operations designed to reduce avoidable rework and keep claims moving toward resolution.",
    highlights: [
      "Charge entry and claim preparation",
      "Claim validation and submission",
      "Clearinghouse rejection management",
      "Payer follow-up coordination",
    ],
    deliverables: [
      {
        title: "Charge Entry",
        description:
          "Prepare charges using the information and documentation supplied through the practice's approved workflow.",
      },
      {
        title: "Claim Validation",
        description:
          "Review claims for required information and applicable billing edits before submission.",
      },
      {
        title: "Claim Submission",
        description:
          "Submit claims through the agreed practice management system and clearinghouse workflow.",
      },
      {
        title: "Rejection Management",
        description:
          "Identify and correct clearinghouse or payer-front-end rejections and coordinate resubmission.",
      },
      {
        title: "Billing Follow-Up",
        description:
          "Track unresolved claims and coordinate the next required action with the appropriate team.",
      },
      {
        title: "Operational Reporting",
        description:
          "Provide visibility into billing activity, outstanding issues and agreed performance indicators.",
      },
    ],
    process: [
      {
        title: "Review",
        description:
          "Understand the practice's billing system, specialty, payer mix and existing workflows.",
      },
      {
        title: "Configure",
        description:
          "Establish responsibilities, access, billing rules and escalation procedures.",
      },
      {
        title: "Operate",
        description:
          "Execute the agreed billing workflow with quality checks and defined ownership.",
      },
      {
        title: "Improve",
        description:
          "Review recurring issues and reporting to identify opportunities for operational improvement.",
      },
    ],
    relatedServices: [
      "denial-management",
      "ar-management",
      "payment-posting",
    ],
  },
  {
    slug: "ar-management",
    title: "Accounts Receivable Management",
    shortTitle: "A/R Management",
    category: "Revenue Recovery",
    eyebrow: "Accounts Receivable",
    description:
      "Structured insurance A/R follow-up to investigate outstanding claims, prioritize unresolved balances and coordinate payer action.",
    heroDescription:
      "Bring ownership, prioritization and consistent follow-up to outstanding insurance receivables.",
    overview:
      "A/R management requires more than repeatedly checking claim status. Each outstanding account needs an understood reason for non-payment, a documented next action and appropriate follow-up. Kinz HealthOps supports practices with organized A/R workflows that help teams focus on unresolved claims and reimbursement delays.",
    highlights: [
      "Insurance A/R aging review",
      "Payer claim-status follow-up",
      "Outstanding balance investigation",
      "Escalation and resolution tracking",
    ],
    deliverables: [
      {
        title: "A/R Aging Review",
        description:
          "Review outstanding insurance receivables using agreed aging, balance and priority criteria.",
      },
      {
        title: "Payer Follow-Up",
        description:
          "Contact payers or use approved payer channels to investigate unresolved claims.",
      },
      {
        title: "Account Resolution",
        description:
          "Identify the reason for non-payment and coordinate corrections, documentation or other required actions.",
      },
      {
        title: "Escalation Management",
        description:
          "Track accounts requiring provider, payer or management intervention.",
      },
      {
        title: "Old A/R Support",
        description:
          "Review historical receivables and define a separate recovery approach where appropriate.",
      },
      {
        title: "A/R Reporting",
        description:
          "Report on aging, follow-up activity, unresolved categories and agreed recovery indicators.",
      },
    ],
    process: [
      {
        title: "Assess",
        description:
          "Review the available A/R inventory, aging and existing follow-up process.",
      },
      {
        title: "Prioritize",
        description:
          "Segment accounts using agreed criteria such as aging, balance, payer and timely-filing risk.",
      },
      {
        title: "Work",
        description:
          "Investigate outstanding claims and document the required next action.",
      },
      {
        title: "Report",
        description:
          "Review account movement, unresolved issues and opportunities to improve the follow-up process.",
      },
    ],
    relatedServices: [
      "denial-management",
      "medical-billing",
      "payment-posting",
    ],
  },
  {
    slug: "denial-management",
    title: "Denial Management Services",
    shortTitle: "Denial Management",
    category: "Revenue Recovery",
    eyebrow: "Denial Management",
    description:
      "Investigate denied claims, identify root causes and coordinate corrections, appeals and prevention workflows.",
    heroDescription:
      "Turn denied claims into organized resolution workflows with clear reasons, ownership and next actions.",
    overview:
      "Denials can arise from eligibility, authorization, coding, documentation, payer rules and other issues. Effective denial management requires understanding the reason for the denial and selecting the appropriate response. Kinz HealthOps supports structured denial workflows that connect investigation, correction, appeal coordination and recurring-issue analysis.",
    highlights: [
      "Denial identification and categorization",
      "Root-cause investigation",
      "Correction and appeal coordination",
      "Recurring-denial analysis",
    ],
    deliverables: [
      {
        title: "Denial Review",
        description:
          "Review payer denial information and identify the stated reason for non-payment.",
      },
      {
        title: "Root-Cause Analysis",
        description:
          "Investigate relevant billing, documentation, eligibility or authorization issues.",
      },
      {
        title: "Correction & Resubmission",
        description:
          "Coordinate corrected claims when appropriate under payer requirements.",
      },
      {
        title: "Appeal Coordination",
        description:
          "Prepare and coordinate appeals within the agreed scope, using supporting information supplied through approved workflows.",
      },
      {
        title: "Deadline Tracking",
        description:
          "Track applicable payer reconsideration, appeal and timely-filing requirements.",
      },
      {
        title: "Denial Reporting",
        description:
          "Identify recurring denial categories and communicate opportunities for prevention.",
      },
    ],
    process: [
      {
        title: "Identify",
        description:
          "Capture the denial reason and relevant payer information.",
      },
      {
        title: "Investigate",
        description:
          "Determine the underlying issue and appropriate resolution path.",
      },
      {
        title: "Resolve",
        description:
          "Coordinate correction, appeal or other payer action as applicable.",
      },
      {
        title: "Prevent",
        description:
          "Review recurring patterns and recommend workflow improvements.",
      },
    ],
    relatedServices: [
      "ar-management",
      "medical-billing",
      "eligibility-verification",
    ],
  },
  {
    slug: "payment-posting",
    title: "Payment Posting Services",
    shortTitle: "Payment Posting",
    category: "Payment Operations",
    eyebrow: "Payment Posting",
    description:
      "Accurate posting support for insurance payments, adjustments and patient responsibility using approved ERA and EOB workflows.",
    heroDescription:
      "Keep payment records accurate, adjustments visible and unresolved balances ready for the next action.",
    overview:
      "Payment posting connects payer adjudication with the practice's financial records. Accurate posting helps identify remaining patient responsibility, contractual adjustments, denials and unresolved balances. Kinz HealthOps supports payment workflows with attention to accuracy, reconciliation and timely identification of exceptions.",
    highlights: [
      "ERA and EOB posting",
      "Insurance payment allocation",
      "Adjustment and patient responsibility posting",
      "Payment exception identification",
    ],
    deliverables: [
      {
        title: "ERA / EOB Processing",
        description:
          "Process electronic or approved manual remittance information through the practice's system.",
      },
      {
        title: "Payment Allocation",
        description:
          "Post insurance payments to the appropriate accounts and claims.",
      },
      {
        title: "Adjustment Posting",
        description:
          "Apply contractual and other approved adjustments according to payer and practice rules.",
      },
      {
        title: "Patient Responsibility",
        description:
          "Record deductible, copay, coinsurance and other patient responsibility as indicated by adjudication.",
      },
      {
        title: "Exception Review",
        description:
          "Identify posting discrepancies, unmatched payments or unresolved remittance items.",
      },
      {
        title: "Reconciliation Support",
        description:
          "Support agreed reconciliation procedures and communicate outstanding discrepancies.",
      },
    ],
    process: [
      {
        title: "Receive",
        description:
          "Access remittance information through approved practice workflows.",
      },
      {
        title: "Post",
        description:
          "Apply payments and adjustments according to the relevant remittance details.",
      },
      {
        title: "Review",
        description:
          "Identify exceptions, denials and remaining balances requiring action.",
      },
      {
        title: "Reconcile",
        description:
          "Support the practice's agreed reconciliation and reporting procedures.",
      },
    ],
    relatedServices: [
      "medical-billing",
      "ar-management",
      "denial-management",
    ],
  },
  {
    slug: "eligibility-verification",
    title: "Eligibility Verification Services",
    shortTitle: "Eligibility Verification",
    category: "Front-End RCM",
    eyebrow: "Patient Access",
    description:
      "Insurance eligibility and benefits verification support to help practices identify coverage and patient responsibility before services are delivered.",
    heroDescription:
      "Start the revenue cycle with clearer coverage information and fewer avoidable front-end surprises.",
    overview:
      "Eligibility and benefits verification helps practices understand whether coverage is active and what information may affect reimbursement or patient responsibility. Kinz HealthOps supports approved verification workflows and communicates findings to the practice so appropriate action can be taken before the encounter.",
    highlights: [
      "Coverage status verification",
      "Benefits and patient responsibility review",
      "Payer information validation",
      "Verification exception coordination",
    ],
    deliverables: [
      {
        title: "Coverage Verification",
        description:
          "Check insurance eligibility through approved payer or practice systems.",
      },
      {
        title: "Benefits Review",
        description:
          "Review available benefit information relevant to the scheduled service.",
      },
      {
        title: "Patient Responsibility",
        description:
          "Identify available copay, deductible and coinsurance information.",
      },
      {
        title: "Coverage Exceptions",
        description:
          "Flag inactive coverage, mismatched information or other verification issues.",
      },
      {
        title: "Practice Coordination",
        description:
          "Communicate findings requiring patient or practice follow-up.",
      },
      {
        title: "Verification Tracking",
        description:
          "Maintain agreed records of verification activity and unresolved exceptions.",
      },
    ],
    process: [
      {
        title: "Receive",
        description:
          "Receive the scheduled encounter information through approved systems.",
      },
      {
        title: "Verify",
        description:
          "Check eligibility and relevant benefits with the payer.",
      },
      {
        title: "Communicate",
        description:
          "Flag coverage issues or additional requirements to the practice.",
      },
      {
        title: "Document",
        description:
          "Record verification findings through the agreed workflow.",
      },
    ],
    relatedServices: [
      "prior-authorization",
      "medical-billing",
      "denial-management",
    ],
  },
  {
    slug: "prior-authorization",
    title: "Prior Authorization Support",
    shortTitle: "Prior Authorization",
    category: "Front-End RCM",
    eyebrow: "Prior Authorization",
    description:
      "Administrative prior authorization support to help practices coordinate payer requirements, submissions and authorization status.",
    heroDescription:
      "Bring structure and visibility to authorization workflows before services reach the claim stage.",
    overview:
      "Prior authorization requirements vary by payer, plan and service. Missing or incomplete authorization can create treatment delays and reimbursement issues. Kinz HealthOps supports the administrative authorization process using information supplied by the practice, while clinical decisions and medical-necessity determinations remain with appropriately qualified professionals.",
    highlights: [
      "Authorization requirement checks",
      "Administrative submission support",
      "Payer status follow-up",
      "Authorization tracking and escalation",
    ],
    deliverables: [
      {
        title: "Requirement Review",
        description:
          "Check available payer requirements for the relevant service and plan.",
      },
      {
        title: "Submission Coordination",
        description:
          "Coordinate administrative authorization requests using approved practice information.",
      },
      {
        title: "Status Follow-Up",
        description:
          "Track pending requests and communicate payer updates.",
      },
      {
        title: "Documentation Coordination",
        description:
          "Identify requests for additional documentation and route them to the appropriate practice team.",
      },
      {
        title: "Authorization Tracking",
        description:
          "Record reference numbers, statuses, validity dates and other relevant authorization information.",
      },
      {
        title: "Escalation Support",
        description:
          "Flag pending, denied or time-sensitive requests requiring provider or management action.",
      },
    ],
    process: [
      {
        title: "Check",
        description:
          "Review whether authorization may be required for the planned service.",
      },
      {
        title: "Coordinate",
        description:
          "Prepare and submit administrative information through approved channels.",
      },
      {
        title: "Follow Up",
        description:
          "Track payer status and additional information requests.",
      },
      {
        title: "Communicate",
        description:
          "Report the outcome and relevant authorization details to the practice.",
      },
    ],
    relatedServices: [
      "eligibility-verification",
      "medical-billing",
      "denial-management",
    ],
  },
  {
    slug: "credentialing",
    title: "Provider Credentialing Services",
    shortTitle: "Credentialing",
    category: "Provider Operations",
    eyebrow: "Provider Operations",
    description:
      "Administrative provider credentialing and payer enrollment support for healthcare practices.",
    heroDescription:
      "Organize provider enrollment, payer applications and credentialing follow-up with clear administrative workflows.",
    overview:
      "Provider credentialing and payer enrollment involve collecting accurate provider information, coordinating applications and tracking payer requirements. Kinz HealthOps can support these administrative workflows based on the team's verified expertise and the agreed service scope. Credentialing, enrollment and contracting are distinct processes, and payer approval timelines are not guaranteed.",
    highlights: [
      "Provider information coordination",
      "Payer enrollment application support",
      "Application status follow-up",
      "Revalidation and maintenance tracking",
    ],
    deliverables: [
      {
        title: "Provider Information",
        description:
          "Coordinate required provider and practice information through approved channels.",
      },
      {
        title: "Application Support",
        description:
          "Prepare and coordinate payer enrollment or credentialing applications within the agreed scope.",
      },
      {
        title: "Payer Follow-Up",
        description:
          "Track application status and communicate outstanding requirements.",
      },
      {
        title: "Document Coordination",
        description:
          "Identify missing or expiring administrative documents and route requests appropriately.",
      },
      {
        title: "Maintenance Tracking",
        description:
          "Support agreed revalidation, renewal and maintenance workflows.",
      },
      {
        title: "Status Reporting",
        description:
          "Provide visibility into application progress, pending items and payer responses.",
      },
    ],
    process: [
      {
        title: "Review",
        description:
          "Understand the provider's enrollment needs and applicable payer requirements.",
      },
      {
        title: "Prepare",
        description:
          "Coordinate information and documentation required for the application.",
      },
      {
        title: "Submit",
        description:
          "Support submission through the appropriate payer or enrollment channel.",
      },
      {
        title: "Track",
        description:
          "Follow up on application status and communicate outstanding requirements.",
      },
    ],
    relatedServices: [
      "medical-billing",
      "eligibility-verification",
      "ar-management",
    ],
  },
  {
    slug: "medical-coding",
    title: "Medical Coding Support",
    shortTitle: "Medical Coding",
    category: "Clinical Revenue Operations",
    eyebrow: "Medical Coding",
    description:
      "Medical coding support aligned with clinical documentation, applicable code sets and payer requirements.",
    heroDescription:
      "Connect documentation and coding workflows with accurate, compliant claim preparation.",
    overview:
      "Medical coding translates clinical documentation into the codes used for billing and reimbursement. Coding requirements vary by specialty, service and payer. Kinz HealthOps can support coding workflows where appropriately qualified personnel and the required quality controls are available. Clinical documentation and medical decision-making remain the responsibility of the treating provider.",
    highlights: [
      "Documentation-to-code workflow support",
      "Applicable code-set review",
      "Coding quality checks",
      "Provider documentation query coordination",
    ],
    deliverables: [
      {
        title: "Coding Workflow Review",
        description:
          "Understand the practice's specialty, documentation process and coding requirements.",
      },
      {
        title: "Code Assignment Support",
        description:
          "Support coding using applicable code sets and available clinical documentation within the agreed scope.",
      },
      {
        title: "Coding Quality Review",
        description:
          "Apply agreed quality checks and escalation procedures.",
      },
      {
        title: "Documentation Queries",
        description:
          "Coordinate clarification requests with the appropriate provider or clinical team when documentation is insufficient.",
      },
      {
        title: "Billing Coordination",
        description:
          "Communicate coding-related issues that affect claim preparation or submission.",
      },
      {
        title: "Issue Reporting",
        description:
          "Identify recurring documentation or coding workflow issues for practice review.",
      },
    ],
    process: [
      {
        title: "Assess",
        description:
          "Confirm specialty requirements, coding scope and personnel qualifications.",
      },
      {
        title: "Review",
        description:
          "Review available documentation through approved practice systems.",
      },
      {
        title: "Code",
        description:
          "Perform agreed coding activities with appropriate quality controls.",
      },
      {
        title: "Coordinate",
        description:
          "Resolve documentation questions and communicate billing-related issues.",
      },
    ],
    relatedServices: [
      "medical-billing",
      "denial-management",
      "prior-authorization",
    ],
  },
] as const satisfies readonly ServiceDefinition[];

export type ServiceSlug = (typeof services)[number]["slug"];

export function getServiceBySlug(
  slug: string
): ServiceDefinition | undefined {
  return services.find((service) => service.slug === slug);
}