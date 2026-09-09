import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { SpecialtyDetail } from "@/features/specialties/specialty-detail";
import {
  getSpecialtyBySlug,
  specialties,
  type SpecialtyDefinition,
} from "@/features/specialties/specialties-data";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

interface SpecialtyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* -------------------------------------------------------------------------- */
/* Configuration                                                              */
/* -------------------------------------------------------------------------- */

const SPECIALTY_BASE_PATH = siteConfig.routes.specialties;

const SOCIAL_IMAGE = {
  url: "/og/claryden-rcm-og.jpg",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.positioning}`,
} as const;

/* -------------------------------------------------------------------------- */
/* URL helpers                                                                */
/* -------------------------------------------------------------------------- */

function getAbsoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

function getSpecialtyPath(slug: string): string {
  return `${SPECIALTY_BASE_PATH}/${slug}`;
}

/* -------------------------------------------------------------------------- */
/* Static generation                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Generate all known specialty pages at build time.
 *
 * Unknown slugs return 404 instead of creating
 * additional dynamic pages.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return specialties.map((specialty) => ({
    slug: specialty.slug,
  }));
}

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({
  params,
}: SpecialtyPageProps): Promise<Metadata> {
  const { slug } = await params;

  const specialty = getSpecialtyBySlug(slug);

  if (!specialty) {
    notFound();
  }

  const canonical = getSpecialtyPath(specialty.slug);
  const absoluteUrl = getAbsoluteUrl(canonical);

  const title = `${specialty.title} | ${siteConfig.name}`;

  return {
    /*
     * The root layout already applies:
     * "%s | Claryden RCM"
     *
     * Do not append the brand to this title again.
     */
    title: specialty.title,

    description: specialty.description,

    alternates: {
      canonical,
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,

      title,
      description: specialty.description,
      url: absoluteUrl,

      images: [
        {
          ...SOCIAL_IMAGE,
          url: getAbsoluteUrl(SOCIAL_IMAGE.url),
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,
      description: specialty.description,

      images: [
        getAbsoluteUrl(SOCIAL_IMAGE.url),
      ],
    },
  };
}

/* -------------------------------------------------------------------------- */
/* Structured data                                                            */
/* -------------------------------------------------------------------------- */

function SpecialtyStructuredData({
  specialty,
}: {
  specialty: SpecialtyDefinition;
}) {
  const canonical = getSpecialtyPath(specialty.slug);
  const absoluteUrl = getAbsoluteUrl(canonical);

  const breadcrumbId = `${absoluteUrl}#breadcrumb`;
  const serviceId = `${absoluteUrl}#service`;
  const webpageId = `${absoluteUrl}#webpage`;

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      /* -------------------------------------------------------------------- */
      /* Breadcrumbs                                                          */
      /* -------------------------------------------------------------------- */

      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Specialties",
            item: getAbsoluteUrl(
              siteConfig.routes.specialties
            ),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: specialty.shortTitle,
            item: absoluteUrl,
          },
        ],
      },

      /* -------------------------------------------------------------------- */
      /* Specialty RCM service                                                */
      /* -------------------------------------------------------------------- */

      {
        "@type": "Service",
        "@id": serviceId,

        name: specialty.title,
        description: specialty.description,

        serviceType:
          "Specialty Revenue Cycle Management",

        category: specialty.category,

        url: absoluteUrl,

        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },

        areaServed: {
          "@type": "Country",
          name: siteConfig.location.market,
        },
      },

      /* -------------------------------------------------------------------- */
      /* Web page                                                             */
      /* -------------------------------------------------------------------- */

      {
        "@type": "WebPage",
        "@id": webpageId,

        url: absoluteUrl,
        name: specialty.title,
        description: specialty.description,

        inLanguage: siteConfig.language,

        breadcrumb: {
          "@id": breadcrumbId,
        },

        about: {
          "@id": serviceId,
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
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default async function SpecialtyPage({
  params,
}: SpecialtyPageProps) {
  const { slug } = await params;

  const specialty = getSpecialtyBySlug(slug);

  if (!specialty) {
    notFound();
  }

  return (
    <>
      <SpecialtyStructuredData specialty={specialty} />

      <SpecialtyDetail specialty={specialty} />
    </>
  );
}