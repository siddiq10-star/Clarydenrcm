export const siteConfig = {
  name: "claryden rcm",

  shortName: "claryden rcm",

  legalName: "claryden rcm",

  tagline: "Every claim. Every dollar. Clearly managed.",

  positioning:
    "Revenue Cycle Management for Modern Healthcare Practices",

  description:
    "claryden rcm provides revenue cycle management, medical billing, denial management, accounts receivable follow-up, eligibility verification, payment posting, credentialing, and healthcare revenue operations for medical practices.",

  shortDescription:
    "Modern revenue cycle management for healthcare practices.",

  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://www.clarydenrcm.com",

  contact: {
    email:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
      "hello@clarydenrcm.com",

    phone:
      process.env.NEXT_PUBLIC_PHONE_NUMBER ??
      "",

    salesEmail:
      process.env.NEXT_PUBLIC_SALES_EMAIL ??
      "hello@clarydenrcm.com",
  },

  location: {
    country: "India",
    market: "United States",
  },

  social: {
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ??
      "",
  },

  routes: {
    home: "/",
    about: "/about",
    services: "/services",
    specialties: "/specialties",
    howItWorks: "/how-it-works",
    security: "/security",
    assessment: "/rcm-assessment",
    insights: "/insights",
    contact: "/contact",
    privacy: "/privacy-policy",
    terms: "/terms",
  },

  seo: {
    titleTemplate: "%s | claryden rcm",

    defaultTitle:
      "claryden rcm | Revenue Cycle Management for Healthcare Practices",

    keywords: [
      "revenue cycle management",
      "RCM services",
      "medical billing services",
      "denial management",
      "accounts receivable management",
      "medical billing company",
      "healthcare revenue cycle",
      "payment posting",
      "eligibility verification",
      "credentialing services",
      "medical coding",
      "US medical billing",
      "healthcare billing services",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;