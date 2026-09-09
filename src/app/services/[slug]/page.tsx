import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { ServiceDetail } from "@/features/services/service-detail";
import {
  getServiceBySlug,
  services,
  type ServiceDefinition,
} from "@/features/services/services-data";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* -------------------------------------------------------------------------- */
/* Configuration                                                              */
/* -------------------------------------------------------------------------- */

const SERVICE_BASE_PATH = "/services";

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

function getServicePath(slug: string): string {
  return `${SERVICE_BASE_PATH}/${slug}`;
}

/* -------------------------------------------------------------------------- */
/* Static generation                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Generate the known service pages at build time.
 *
 * Since services are currently defined in a static data file,
 * unknown slugs should not create additional dynamic pages.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const canonical = getServicePath(service.slug);
  const absoluteUrl = getAbsoluteUrl(canonical);

  const title = `${service.title} | ${siteConfig.name}`;

  return {
    /*
     * The root layout applies:
     * "%s | Claryden RCM"
     *
     * Therefore, use the service title here without
     * appending the brand a second time.
     */
    title: service.title,

    description: service.description,

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
      description: service.description,
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
      description: service.description,

      images: [
        getAbsoluteUrl(SOCIAL_IMAGE.url),
      ],
    },
  };
}

/* -------------------------------------------------------------------------- */
/* Structured data                                                            */
/* -------------------------------------------------------------------------- */

function ServiceStructuredData({
  service,
}: {
  service: ServiceDefinition;
}) {
  const canonical = getServicePath(service.slug);
  const absoluteUrl = getAbsoluteUrl(canonical);

  const breadcrumbId = `${absoluteUrl}#breadcrumb`;
  const serviceId = `${absoluteUrl}#service`;
  const webpageId = `${absoluteUrl}#webpage`;

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
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
            name: "Services",
            item: getAbsoluteUrl(
              siteConfig.routes.services
            ),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.shortTitle,
            item: absoluteUrl,
          },
        ],
      },

      {
        "@type": "Service",
        "@id": serviceId,

        name: service.title,
        description: service.description,

        serviceType: service.shortTitle,
        category: service.category,

        url: absoluteUrl,

        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },

        areaServed: {
          "@type": "Country",
          name: "United States",
        },
      },

      {
        "@type": "WebPage",
        "@id": webpageId,

        url: absoluteUrl,
        name: service.title,
        description: service.description,

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
        __html: JSON.stringify(
          structuredData
        ).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceStructuredData service={service} />

      <ServiceDetail service={service} />
    </>
  );
}