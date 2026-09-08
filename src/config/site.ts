export const siteConfig = {
  name: "Kinz HealthOps",

  shortName: "Kinz HealthOps",

  legalName: "Kinz HealthOps",

  tagline: "Every claim. Every dollar. Clearly managed.",

  positioning:
    "Revenue Cycle Management for Modern Healthcare Practices",

  description:
    "Kinz HealthOps provides revenue cycle management, medical billing, denial management, accounts receivable follow-up, eligibility verification, payment posting, credentialing, and healthcare revenue operations for medical practices.",

  shortDescription:
    "Modern revenue cycle management for healthcare practices.",

  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://www.kinzhealthops.com",

  contact: {
    email:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
      "hello@kinzhealthops.com",

    phone:
      process.env.NEXT_PUBLIC_PHONE_NUMBER ??
      "",

    salesEmail:
      process.env.NEXT_PUBLIC_SALES_EMAIL ??
      "hello@kinzhealthops.com",
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
    titleTemplate: "%s | Kinz HealthOps",

    defaultTitle:
      "Kinz HealthOps | Revenue Cycle Management for Healthcare Practices",

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