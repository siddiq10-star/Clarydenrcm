/* -------------------------------------------------------------------------- */
/* Environment helpers                                                        */
/* -------------------------------------------------------------------------- */

function readEnv(
  value: string | undefined,
  fallback = ""
): string {
  const trimmed = value?.trim();

  return trimmed || fallback;
}

/**
 * Validate the public site origin used for canonical URLs,
 * Open Graph URLs, sitemaps, and structured data.
 *
 * NEXT_PUBLIC_SITE_URL should be a complete origin:
 * https://www.clarydenrcm.com
 *
 * Do not include a path, query string, or trailing route.
 */
function resolveSiteUrl(
  value: string | undefined
): string {
  const raw = readEnv(
    value,
    "https://www.clarydenrcm.com"
  );

  let url: URL;

  try {
    url = new URL(raw);
  } catch {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be a valid absolute URL."
    );
  }

  if (
    url.protocol !== "https:" &&
    url.protocol !== "http:"
  ) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must use http or https."
    );
  }

  if (
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    url.pathname !== "/"
  ) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must contain only the site origin, without a path, query, fragment, or credentials."
    );
  }

  return url.origin;
}

/* -------------------------------------------------------------------------- */
/* Brand                                                                      */
/* -------------------------------------------------------------------------- */

const brandName = "Claryden RCM";

const contactEmail = readEnv(
  process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  "hello@clarydenrcm.com"
);

/* -------------------------------------------------------------------------- */
/* Site configuration                                                         */
/* -------------------------------------------------------------------------- */

export const siteConfig = {
  name: brandName,

  shortName: brandName,

  /**
   * This must be replaced with the verified registered
   * legal entity name if it differs from the brand.
   *
   * Do not assume the trading brand is the legal entity.
   */
  legalName: readEnv(
    process.env.NEXT_PUBLIC_LEGAL_NAME,
    brandName
  ),

  tagline:
    "Every claim. Every dollar. Clearly managed.",

  positioning:
    "Revenue Cycle Management for Modern Healthcare Practices",

  description:
    "Claryden RCM provides revenue cycle management and medical billing support for healthcare practices, including denial management, insurance accounts receivable follow-up, eligibility verification, payment posting, prior authorization, credentialing, and medical coding workflows.",

  shortDescription:
    "Structured revenue cycle management and medical billing support for healthcare practices.",

  url: resolveSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL
  ),

  locale: "en_US",

  language: "en",

  /* ------------------------------------------------------------------------ */
  /* Contact                                                                  */
  /* ------------------------------------------------------------------------ */

  contact: {
    email: contactEmail,

    phone: readEnv(
      process.env.NEXT_PUBLIC_PHONE_NUMBER
    ),

    salesEmail: readEnv(
      process.env.NEXT_PUBLIC_SALES_EMAIL,
      contactEmail
    ),
  },

  /* ------------------------------------------------------------------------ */
  /* Location                                                                 */
  /* ------------------------------------------------------------------------ */

  location: {
    country: "India",

    market: "United States",
  },

  /* ------------------------------------------------------------------------ */
  /* Social                                                                   */
  /* ------------------------------------------------------------------------ */

  social: {
    linkedin: readEnv(
      process.env.NEXT_PUBLIC_LINKEDIN_URL
    ),
  },

  /* ------------------------------------------------------------------------ */
  /* Routes                                                                   */
  /* ------------------------------------------------------------------------ */

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

  /* ------------------------------------------------------------------------ */
  /* SEO                                                                      */
  /* ------------------------------------------------------------------------ */

  seo: {
    titleTemplate: "%s | Claryden RCM",

    defaultTitle:
      "Claryden RCM | Revenue Cycle Management & Medical Billing",

    defaultDescription:
      "Explore medical billing and revenue cycle management support for healthcare practices, including claims, denials, insurance A/R, eligibility, payment posting, and related revenue operations.",

    keywords: [
      "revenue cycle management",
      "RCM services",
      "medical billing services",
      "medical billing company",
      "healthcare revenue cycle management",
      "insurance accounts receivable management",
      "denial management services",
      "payment posting services",
      "eligibility verification services",
      "prior authorization support",
      "provider credentialing services",
      "medical coding support",
      "US medical billing",
    ],
  },
} as const;

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type SiteConfig = typeof siteConfig;