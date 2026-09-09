/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/* Service content                                                            */
/* -------------------------------------------------------------------------- */

export const services = [
  /* ------------------------------------------------------------------------ */
  /* Medical Billing                                                          */
  /* ------------------------------------------------------------------------ */

  {
    slug: "medical-billing",
    title: "Medical Billing Services",
    shortTitle: "Medical Billing",
    category: "Core RCM",
    eyebrow: "Medical Billing",

    description:
      "Medical billing services for healthcare practices, including charge entry, claim validation, submission, rejection management and payer follow-up.",

    heroDescription:
      "Bring structure to your medical billing process with coordinated claim preparation, submission, rejection management and payer follow-up.",

    overview:
      "Medical billing involves more than submitting claims. It requires coordination between patient information, clinical documentation, coding, payer requirements and payment workflows. Claryden RCM supports healthcare practices with structured administrative billing operations, from charge entry and claim validation through submission and unresolved claim follow-up. The engagement is configured around the practice's specialty, approved systems, payer mix and existing responsibilities. Billing-related documentation and coding questions are coordinated with appropriately qualified personnel, while agreed quality checks and reporting help the practice maintain visibility into its revenue-cycle activity.",

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
          "Prepare charges using approved encounter information, documented services and the practice's established billing workflow.",
      },
      {
        title: "Claim Validation",
        description:
          "Review claims for required demographic, insurance, billing and other applicable information before submission.",
      },
      {
        title: "Claim Submission",
        description:
          "Submit claims through the agreed practice management system and clearinghouse workflow, with submission activity recorded as required.",
      },
      {
        title: "Rejection Management",
        description:
          "Identify clearinghouse or payer-front-end rejections, investigate the stated issues and coordinate corrections and resubmission.",
      },
      {
        title: "Billing Follow-Up",
        description:
          "Track unresolved claims, review available claim-status information and coordinate the next required action with the appropriate team.",
      },
      {
        title: "Operational Reporting",
        description:
          "Provide agreed visibility into billing activity, rejected claims, outstanding issues and relevant operational performance indicators.",
      },
    ],

    process: [
      {
        title: "Review",
        description:
          "Understand the practice's specialty, billing system, payer mix, existing workflows and current operational challenges.",
      },
      {
        title: "Configure",
        description:
          "Define responsibilities, approved system access, billing procedures, quality checks and escalation requirements.",
      },
      {
        title: "Operate",
        description:
          "Execute the agreed billing workflow with documented ownership, appropriate quality controls and coordinated follow-up.",
      },
      {
        title: "Improve",
        description:
          "Review recurring issues and agreed reporting to identify opportunities for workflow refinement and reduced avoidable rework.",
      },
    ],

    relatedServices: [
      "denial-management",
      "ar-management",
      "payment-posting",
    ],
  },

  /* ------------------------------------------------------------------------ */
  /* Accounts Receivable Management                                          */
  /* ------------------------------------------------------------------------ */

  {
    slug: "ar-management",
    title: "Accounts Receivable Management",
    shortTitle: "A/R Management",
    category: "Revenue Recovery",
    eyebrow: "Accounts Receivable",

    description:
      "Insurance accounts receivable management for healthcare practices, including A/R aging review, outstanding claim investigation, payer follow-up and escalation.",

    heroDescription:
      "Give outstanding insurance receivables a clearer resolution path through structured prioritization, payer follow-up and documented next actions.",

    overview:
      "Insurance accounts receivable management requires more than repeatedly checking claim status. Outstanding claims may involve payer processing delays, denials, missing information, payment discrepancies or other unresolved issues. Claryden RCM supports practices with structured A/R workflows that help identify the reason an account remains open, prioritize follow-up and coordinate the appropriate next action. Work is organized around agreed aging, balance, payer and time-sensitive criteria, with account activity and unresolved issues documented through approved systems. Historical receivables may require a separate assessment and recovery approach based on their age, available documentation and applicable payer requirements.",

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
          "Review outstanding insurance receivables using agreed aging, balance, payer and priority criteria to organize follow-up activity.",
      },
      {
        title: "Payer Follow-Up",
        description:
          "Use approved payer portals, communication channels or practice systems to investigate unresolved claims and obtain available status information.",
      },
      {
        title: "Account Resolution",
        description:
          "Identify available reasons for non-payment and coordinate corrections, documentation, appeals or other appropriate resolution actions.",
      },
      {
        title: "Escalation Management",
        description:
          "Track accounts requiring provider, payer or management intervention and communicate the information needed for the next decision.",
      },
      {
        title: "Old A/R Support",
        description:
          "Assess historical receivables and define a separate follow-up approach where appropriate, considering account age, documentation and applicable payer deadlines.",
      },
      {
        title: "A/R Reporting",
        description:
          "Report on aging, follow-up activity, unresolved account categories and agreed recovery indicators to support operational review.",
      },
    ],

    process: [
      {
        title: "Assess",
        description:
          "Review the available A/R inventory, aging distribution, payer mix and existing account follow-up procedures.",
      },
      {
        title: "Prioritize",
        description:
          "Segment accounts using agreed criteria such as aging, balance, payer, denial status and applicable filing or appeal deadlines.",
      },
      {
        title: "Work",
        description:
          "Investigate outstanding claims, document findings and coordinate the appropriate next action or escalation.",
      },
      {
        title: "Report",
        description:
          "Review account movement, unresolved issues and recurring patterns to identify opportunities for more effective follow-up.",
      },
    ],

    relatedServices: [
      "denial-management",
      "medical-billing",
      "payment-posting",
    ],
  },

  /* ------------------------------------------------------------------------ */
  /* Denial Management                                                        */
  /* ------------------------------------------------------------------------ */

  {
    slug: "denial-management",
    title: "Denial Management Services",
    shortTitle: "Denial Management",
    category: "Revenue Recovery",
    eyebrow: "Denial Management",

    description:
      "Medical claim denial management services, including denial investigation, root-cause analysis, correction and appeal coordination, and recurring-denial reporting.",

    heroDescription:
      "Move denied claims into organized resolution workflows with clear reasons, defined ownership and coordinated corrective action.",

    overview:
      "Medical claim denials can arise from eligibility, authorization, coding, documentation, payer policy and other billing-related issues. Effective denial management begins with understanding the payer's stated reason for non-payment and determining the appropriate response. Claryden RCM supports structured administrative workflows for denial identification, investigation, correction, appeal coordination and follow-up. Applicable payer deadlines and documentation requirements are considered throughout the process, while clinical and coding questions are directed to appropriately qualified personnel. Recurring denial patterns can also be reviewed with the practice to identify opportunities for workflow improvement and prevention.",

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
          "Review payer denial information, adjustment details and available claim history to identify the stated reason for non-payment.",
      },
      {
        title: "Root-Cause Analysis",
        description:
          "Investigate relevant eligibility, authorization, billing, documentation or coding-related issues and coordinate clarification where required.",
      },
      {
        title: "Correction & Resubmission",
        description:
          "Coordinate corrected claims or other appropriate billing actions in accordance with applicable payer requirements.",
      },
      {
        title: "Appeal Coordination",
        description:
          "Prepare and coordinate administrative appeals within the agreed scope using supporting information supplied through approved workflows.",
      },
      {
        title: "Deadline Tracking",
        description:
          "Track applicable payer reconsideration, appeal and timely-filing requirements and escalate time-sensitive issues as appropriate.",
      },
      {
        title: "Denial Reporting",
        description:
          "Organize recurring denial categories and communicate findings that may help the practice review preventable workflow issues.",
      },
    ],

    process: [
      {
        title: "Identify",
        description:
          "Capture the payer's denial reason, relevant claim information and available supporting details.",
      },
      {
        title: "Investigate",
        description:
          "Review the underlying issue, applicable payer requirements and available resolution options.",
      },
      {
        title: "Resolve",
        description:
          "Coordinate the appropriate correction, appeal, documentation request or other payer action within the agreed scope.",
      },
      {
        title: "Prevent",
        description:
          "Review recurring denial patterns and communicate opportunities for process refinement and improved coordination.",
      },
    ],

    relatedServices: [
      "ar-management",
      "medical-billing",
      "eligibility-verification",
    ],
  },

  /* ------------------------------------------------------------------------ */
  /* Payment Posting                                                          */
  /* ------------------------------------------------------------------------ */

  {
    slug: "payment-posting",
    title: "Payment Posting Services",
    shortTitle: "Payment Posting",
    category: "Payment Operations",
    eyebrow: "Payment Posting",

    description:
      "Medical payment posting services for insurance remittances, ERA and EOB processing, adjustments, patient responsibility and reconciliation support.",

    heroDescription:
      "Keep payment records organized with accurate remittance posting, visible adjustments and timely identification of unresolved balances.",

    overview:
      "Payment posting connects payer adjudication with the practice's financial records. Insurance remittances may include payments, contractual adjustments, patient responsibility, denials and other information that affects the remaining account balance. Claryden RCM supports payment posting through approved ERA, EOB and practice management workflows, with attention to accurate allocation, appropriate adjustments and exception identification. Unmatched payments, posting discrepancies and unresolved balances are coordinated through the agreed review process. Reconciliation responsibilities and financial controls are defined with the practice, while payment handling and access remain subject to its approved procedures.",

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
          "Process electronic remittance advice or approved manual explanation-of-benefits information through the practice's established systems.",
      },
      {
        title: "Payment Allocation",
        description:
          "Post insurance payments to the appropriate claims and accounts using available remittance information and approved procedures.",
      },
      {
        title: "Adjustment Posting",
        description:
          "Apply contractual and other approved adjustments according to payer adjudication details and the practice's posting rules.",
      },
      {
        title: "Patient Responsibility",
        description:
          "Record deductible, copay, coinsurance and other patient responsibility amounts as indicated by the available adjudication information.",
      },
      {
        title: "Exception Review",
        description:
          "Identify unmatched payments, posting discrepancies, denials or unresolved remittance items requiring additional investigation.",
      },
      {
        title: "Reconciliation Support",
        description:
          "Support agreed reconciliation procedures and communicate outstanding discrepancies to the appropriate practice or financial team.",
      },
    ],

    process: [
      {
        title: "Receive",
        description:
          "Access remittance information through approved practice systems and established administrative workflows.",
      },
      {
        title: "Post",
        description:
          "Apply payments, adjustments and patient responsibility according to the relevant remittance details and practice rules.",
      },
      {
        title: "Review",
        description:
          "Identify posting exceptions, denials and remaining balances that require additional action.",
      },
      {
        title: "Reconcile",
        description:
          "Support the practice's agreed reconciliation, exception-resolution and reporting procedures.",
      },
    ],

    relatedServices: [
      "medical-billing",
      "ar-management",
      "denial-management",
    ],
  },

  /* ------------------------------------------------------------------------ */
  /* Eligibility Verification                                                 */
  /* ------------------------------------------------------------------------ */

  {
    slug: "eligibility-verification",
    title: "Eligibility Verification Services",
    shortTitle: "Eligibility Verification",
    category: "Front-End RCM",
    eyebrow: "Patient Access",

    description:
      "Insurance eligibility and benefits verification services, including coverage review, patient responsibility information and front-end exception coordination.",

    heroDescription:
      "Start the revenue cycle with clearer coverage information, coordinated benefits review and timely communication of verification issues.",

    overview:
      "Insurance eligibility and benefits verification helps healthcare practices identify available coverage information before scheduled services. Depending on the payer, plan and service, the process may involve checking active coverage, relevant benefits, patient responsibility and additional administrative requirements. Claryden RCM supports approved verification workflows and communicates findings that require practice or patient follow-up. Verification is based on information available through the applicable payer or practice systems and does not guarantee coverage, authorization or payment. The scope of review is defined around the practice's services, scheduling process and payer requirements.",

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
          "Check available insurance eligibility information through approved payer portals, clearinghouse tools or practice systems.",
      },
      {
        title: "Benefits Review",
        description:
          "Review available benefit information relevant to the scheduled service and identify requirements that may need additional clarification.",
      },
      {
        title: "Patient Responsibility",
        description:
          "Identify available copay, deductible, coinsurance and other relevant patient responsibility information for practice review.",
      },
      {
        title: "Coverage Exceptions",
        description:
          "Flag inactive coverage, mismatched information, missing details or other verification issues requiring follow-up.",
      },
      {
        title: "Practice Coordination",
        description:
          "Communicate findings that require patient, scheduling, clinical or other practice-team action before the encounter.",
      },
      {
        title: "Verification Tracking",
        description:
          "Maintain agreed records of verification activity, available payer responses and unresolved exceptions through approved workflows.",
      },
    ],

    process: [
      {
        title: "Receive",
        description:
          "Receive scheduled encounter and insurance information through the practice's approved systems.",
      },
      {
        title: "Verify",
        description:
          "Check available eligibility and relevant benefit information using the applicable payer or approved verification channel.",
      },
      {
        title: "Communicate",
        description:
          "Flag coverage issues, missing information or additional administrative requirements to the appropriate practice team.",
      },
      {
        title: "Document",
        description:
          "Record verification findings and unresolved exceptions through the agreed administrative workflow.",
      },
    ],

    relatedServices: [
      "prior-authorization",
      "medical-billing",
      "denial-management",
    ],
  },

  /* ------------------------------------------------------------------------ */
  /* Prior Authorization                                                      */
  /* ------------------------------------------------------------------------ */

  {
    slug: "prior-authorization",
    title: "Prior Authorization Support",
    shortTitle: "Prior Authorization",
    category: "Front-End RCM",
    eyebrow: "Prior Authorization",

    description:
      "Administrative prior authorization support for healthcare practices, including requirement review, submission coordination, payer follow-up and status tracking.",

    heroDescription:
      "Bring structure to prior authorization workflows with coordinated requirement checks, administrative submissions and clear status communication.",

    overview:
      "Prior authorization requirements vary by payer, health plan and service. Practices may need to coordinate coverage information, supporting documentation, submission requirements and payer responses before a planned service. Claryden RCM supports the administrative authorization process using information supplied through approved practice workflows. This may include requirement review, submission coordination, status follow-up and communication of outstanding requests. Clinical decisions, medical-necessity determinations and supporting clinical documentation remain the responsibility of appropriately qualified professionals. Authorization approval and reimbursement are not guaranteed, and the scope of support is established around the practice's actual services and payer requirements.",

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
          "Review available payer and plan requirements to identify whether authorization may be required for the planned service.",
      },
      {
        title: "Submission Coordination",
        description:
          "Coordinate administrative authorization requests using approved practice information and supporting materials supplied by the appropriate team.",
      },
      {
        title: "Status Follow-Up",
        description:
          "Track pending requests, review available payer updates and communicate additional information requirements.",
      },
      {
        title: "Documentation Coordination",
        description:
          "Identify requests for additional clinical or administrative documentation and route them to appropriately qualified practice personnel.",
      },
      {
        title: "Authorization Tracking",
        description:
          "Record available reference numbers, authorization statuses, validity dates and other relevant information through agreed systems.",
      },
      {
        title: "Escalation Support",
        description:
          "Flag pending, denied or time-sensitive requests that require provider, clinical or management review and further action.",
      },
    ],

    process: [
      {
        title: "Check",
        description:
          "Review available payer requirements and determine whether administrative authorization coordination may be needed.",
      },
      {
        title: "Coordinate",
        description:
          "Prepare and submit approved administrative information through the appropriate payer or practice channel.",
      },
      {
        title: "Follow Up",
        description:
          "Track payer status, additional information requests and relevant time-sensitive requirements.",
      },
      {
        title: "Communicate",
        description:
          "Report available outcomes, authorization details and unresolved requirements to the appropriate practice team.",
      },
    ],

    relatedServices: [
      "eligibility-verification",
      "medical-billing",
      "denial-management",
    ],
  },

  /* ------------------------------------------------------------------------ */
  /* Provider Credentialing                                                   */
  /* ------------------------------------------------------------------------ */

  {
    slug: "credentialing",
    title: "Provider Credentialing Services",
    shortTitle: "Credentialing",
    category: "Provider Operations",
    eyebrow: "Provider Operations",

    description:
      "Administrative provider credentialing and payer enrollment support, including application coordination, document tracking, payer follow-up and revalidation.",

    heroDescription:
      "Organize provider credentialing and payer enrollment with coordinated applications, document management and clear follow-up on outstanding requirements.",

    overview:
      "Provider credentialing and payer enrollment involve collecting accurate provider information, coordinating applications and tracking payer-specific requirements. These administrative processes may include provider data review, document collection, application submission, follow-up and maintenance activities. Claryden RCM can support these workflows where the required expertise and resources are available, with the engagement scope confirmed during discovery. Credentialing, payer enrollment and contracting are distinct processes, and the responsibilities for each should be clearly defined. Payer approval, network participation and processing timelines depend on the applicable payer and are not guaranteed.",

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
          "Coordinate required provider and practice information, including applicable administrative documents, through approved channels.",
      },
      {
        title: "Application Support",
        description:
          "Prepare and coordinate credentialing or payer enrollment applications within the agreed scope and applicable payer requirements.",
      },
      {
        title: "Payer Follow-Up",
        description:
          "Track application status, review available payer responses and communicate outstanding requirements to the practice.",
      },
      {
        title: "Document Coordination",
        description:
          "Identify missing, incomplete or expiring administrative documents and route requests to the appropriate provider or practice team.",
      },
      {
        title: "Maintenance Tracking",
        description:
          "Support agreed revalidation, renewal and provider-information maintenance workflows where applicable.",
      },
      {
        title: "Status Reporting",
        description:
          "Provide agreed visibility into application progress, pending items, payer responses and administrative follow-up activity.",
      },
    ],

    process: [
      {
        title: "Review",
        description:
          "Understand the provider's credentialing or enrollment needs, applicable payer requirements and the agreed service scope.",
      },
      {
        title: "Prepare",
        description:
          "Coordinate the provider information and administrative documentation required for the relevant application.",
      },
      {
        title: "Submit",
        description:
          "Support application submission through the appropriate payer, enrollment or approved practice channel.",
      },
      {
        title: "Track",
        description:
          "Follow up on application status, communicate outstanding requirements and coordinate agreed maintenance activities.",
      },
    ],

    relatedServices: [
      "medical-billing",
      "eligibility-verification",
      "ar-management",
    ],
  },

  /* ------------------------------------------------------------------------ */
  /* Medical Coding                                                           */
  /* ------------------------------------------------------------------------ */

  {
    slug: "medical-coding",
    title: "Medical Coding Support",
    shortTitle: "Medical Coding",
    category: "Clinical Revenue Operations",
    eyebrow: "Medical Coding",

    description:
      "Medical coding support for healthcare practices, including documentation review, applicable code-set workflows, coding quality checks and billing coordination.",

    heroDescription:
      "Connect clinical documentation and qualified coding workflows with organized claim preparation and clear resolution of coding-related questions.",

    overview:
      "Medical coding translates clinical documentation into the codes used for healthcare billing and reimbursement. Requirements vary by specialty, service, code set and payer, and accurate code assignment depends on appropriate documentation and qualified review. Claryden RCM can support medical coding workflows where appropriately qualified personnel and the required quality controls are available. The scope may include documentation review, code assignment support, coding quality checks and coordination of provider clarification requests. Clinical documentation and medical decision-making remain the responsibility of the treating provider, while coding activities are performed within the agreed scope and applicable requirements.",

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
          "Review the practice's specialty, documentation process, applicable coding requirements and existing quality-control procedures.",
      },
      {
        title: "Code Assignment Support",
        description:
          "Support code assignment using applicable code sets and available clinical documentation through appropriately qualified personnel.",
      },
      {
        title: "Coding Quality Review",
        description:
          "Apply agreed coding quality checks and coordinate review or escalation when documentation or code selection requires clarification.",
      },
      {
        title: "Documentation Queries",
        description:
          "Coordinate clarification requests with the appropriate provider or clinical team when available documentation is incomplete or insufficient.",
      },
      {
        title: "Billing Coordination",
        description:
          "Communicate coding-related issues that may affect charge entry, claim preparation, submission or subsequent billing follow-up.",
      },
      {
        title: "Issue Reporting",
        description:
          "Identify recurring documentation or coding workflow issues and communicate findings for practice review and process improvement.",
      },
    ],

    process: [
      {
        title: "Assess",
        description:
          "Confirm specialty requirements, coding scope, personnel qualifications and applicable quality-control expectations.",
      },
      {
        title: "Review",
        description:
          "Review available clinical documentation and relevant coding information through approved practice systems.",
      },
      {
        title: "Code",
        description:
          "Perform agreed coding activities using applicable code sets, qualified personnel and appropriate quality controls.",
      },
      {
        title: "Coordinate",
        description:
          "Resolve documentation questions through the appropriate clinical team and communicate coding-related issues affecting billing.",
      },
    ],

    relatedServices: [
      "medical-billing",
      "denial-management",
      "prior-authorization",
    ],
  },
] as const satisfies readonly ServiceDefinition[];

/* -------------------------------------------------------------------------- */
/* Types & helpers                                                            */
/* -------------------------------------------------------------------------- */

export type ServiceSlug =
  (typeof services)[number]["slug"];

export function getServiceBySlug(
  slug: string
): ServiceDefinition | undefined {
  return services.find(
    (service) => service.slug === slug
  );
}