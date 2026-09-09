import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

import { Hero } from "@/features/home/hero";
import { RevenueCycleStory } from "@/features/home/revenue-cycle-story";
import { RevenueLeakage } from "@/features/home/revenue-leakage";
import { ServicesArchitecture } from "@/features/home/services-architecture";
import { SpecialtiesPreview } from "@/features/home/specialties-preview";

/* -------------------------------------------------------------------------- */
/* Homepage SEO                                                               */
/* -------------------------------------------------------------------------- */

const homeTitle =
  "Medical Billing & RCM Services | Claryden RCM";

const homeDescription =
  "Claryden RCM supports healthcare practices with medical billing, denial management, insurance A/R, eligibility verification, payment posting, and specialty-focused revenue cycle management.";

const homeUrl = new URL("/", siteConfig.url).toString();

const socialImage = {
  url: new URL(
    "/og/claryden-rcm-og.jpg",
    siteConfig.url
  ).toString(),
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.positioning}`,
} as const;

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: {
    absolute: homeTitle,
  },

  description: homeDescription,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: homeUrl,
    siteName: siteConfig.name,
    title: homeTitle,
    description: homeDescription,
    images: [socialImage],
  },

  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [socialImage.url],
  },
};

/* -------------------------------------------------------------------------- */
/* Homepage structured data                                                   */
/* -------------------------------------------------------------------------- */

function HomeStructuredData() {
  const organizationId = `${homeUrl}#organization`;
  const websiteId = `${homeUrl}#website`;
  const webpageId = `${homeUrl}#webpage`;

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,

        name: siteConfig.name,
        url: homeUrl,

        description: siteConfig.description,
      },

      {
        "@type": "WebSite",
        "@id": websiteId,

        name: siteConfig.name,
        url: homeUrl,

        description: siteConfig.shortDescription,

        inLanguage: siteConfig.language,

        publisher: {
          "@id": organizationId,
        },
      },

      {
        "@type": "WebPage",
        "@id": webpageId,

        url: homeUrl,
        name: homeTitle,
        description: homeDescription,

        inLanguage: siteConfig.language,

        isPartOf: {
          "@id": websiteId,
        },

        about: {
          "@id": organizationId,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Homepage                                                                   */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  return (
    <>
      <HomeStructuredData />

      <Hero />

      <RevenueCycleStory />

      <RevenueLeakage />

      <ServicesArchitecture />

      <SpecialtiesPreview />
    </>
  );
}