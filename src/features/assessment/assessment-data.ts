export const specialties = [
  "Behavioral Health",
  "Family Medicine",
  "Internal Medicine",
  "Cardiology",
  "Dermatology",
  "Orthopedics",
  "Physical Therapy",
  "Pain Management",
  "Pediatrics",
  "Neurology",
  "Gastroenterology",
  "OB/GYN",
  "Urgent Care",
  "Other",
] as const;

export const providerCounts = [
  "1 provider",
  "2–5 providers",
  "6–10 providers",
  "11–25 providers",
  "26–50 providers",
  "50+ providers",
] as const;

export const billingModels = [
  "In-house billing team",
  "Outsourced billing company",
  "Hybrid model",
  "Provider-managed billing",
  "Not sure",
] as const;

export const monthlyCollectionRanges = [
  "Under $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "$250,000 – $500,000",
  "$500,000+",
  "Prefer not to say",
] as const;

export const revenueChallenges = [
  {
    id: "denials",
    label: "Denial Management",
    description:
      "High denial volume or slow resolution.",
  },
  {
    id: "aging-ar",
    label: "Aging A/R",
    description:
      "Outstanding balances remain unresolved.",
  },
  {
    id: "claim-rejections",
    label: "Claim Rejections",
    description:
      "Claims fail validation or submission.",
  },
  {
    id: "eligibility",
    label: "Eligibility",
    description:
      "Coverage and benefits verification issues.",
  },
  {
    id: "prior-auth",
    label: "Prior Authorization",
    description:
      "Authorization delays or missing approvals.",
  },
  {
    id: "payment-posting",
    label: "Payment Posting",
    description:
      "ERA, EOB or reconciliation bottlenecks.",
  },
  {
    id: "credentialing",
    label: "Credentialing",
    description:
      "Provider enrollment and payer delays.",
  },
  {
    id: "reporting",
    label: "Reporting & Visibility",
    description:
      "Limited insight into revenue performance.",
  },
  {
    id: "staffing",
    label: "Billing Staffing",
    description:
      "Capacity, turnover or productivity concerns.",
  },
  {
    id: "other",
    label: "Other",
    description:
      "Another revenue-cycle issue.",
  },
] as const;

export const contactRoles = [
  "Physician / Practice Owner",
  "Practice Administrator",
  "Practice Manager",
  "Office Manager",
  "Revenue Cycle Manager",
  "Billing Manager",
  "Finance / Operations",
  "Other",
] as const;

export const assessmentSteps = [
  {
    number: 1,
    label: "Practice",
    shortLabel: "Practice",
  },
  {
    number: 2,
    label: "Revenue Cycle",
    shortLabel: "RCM",
  },
  {
    number: 3,
    label: "Challenges",
    shortLabel: "Challenges",
  },
  {
    number: 4,
    label: "Contact",
    shortLabel: "Contact",
  },
] as const;