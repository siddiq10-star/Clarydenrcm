import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

import { privacyPolicy } from "@/features/legal/privacy-policy.data";

import { services } from "@/features/services/services-data";

import { specialties } from "@/features/specialties/specialties-data";

/* -------------------------------------------------------------------------- */
/* URL helpers                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Build absolute URLs using the configured production origin.
 *
 * Example:
 * /services/medical-billing
 * -> https://www.clarydenrcm.com/services/medical-billing
 */
function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

/**
 * Use only genuine, valid publication/update dates.
 * Never generate a new lastModified date on every build.
 */
function validDate(
  value: string | null | undefined
): Date | undefined {
  if (!value) return undefined;

  const date = new Date(value);

  return Number.isNaN(date.getTime())
    ? undefined
    : date;
}

/* -------------------------------------------------------------------------- */
/* Sitemap                                                                    */
/* -------------------------------------------------------------------------- */

export default function sitemap(): MetadataRoute.Sitemap {
  /* ------------------------------------------------------------------------ */
  /* Static pages                                                             */
  /* ------------------------------------------------------------------------ */

  const staticRoutes = [
    siteConfig.routes.home,
    siteConfig.routes.about,
    siteConfig.routes.services,
    siteConfig.routes.specialties,
    siteConfig.routes.howItWorks,
    siteConfig.routes.security,
    siteConfig.routes.assessment,
    siteConfig.routes.contact,
  ] as const;

  const staticPages: MetadataRoute.Sitemap =
    staticRoutes.map((route) => ({
      url: absoluteUrl(route),
    }));

  /* ------------------------------------------------------------------------ */
  /* Service pages                                                            */
  /* ------------------------------------------------------------------------ */

  const servicePages: MetadataRoute.Sitemap =
    services.map((service) => ({
      url: absoluteUrl(
        `${siteConfig.routes.services}/${service.slug}`
      ),
    }));

  /* ------------------------------------------------------------------------ */
  /* Specialty pages                                                          */
  /* ------------------------------------------------------------------------ */

  const specialtyPages: MetadataRoute.Sitemap =
    specialties.map((specialty) => ({
      url: absoluteUrl(
        `${siteConfig.routes.specialties}/${specialty.slug}`
      ),
    }));

  /* ------------------------------------------------------------------------ */
  /* Privacy Policy                                                           */
  /* ------------------------------------------------------------------------ */

  /**
   * Include the Privacy Policy only after the actual
   * policy has been approved and given an effective date.
   *
   * This matches the noindex safeguard currently used
   * by the Privacy Policy page.
   */
  const privacyPages: MetadataRoute.Sitemap =
    privacyPolicy.approved &&
    privacyPolicy.effectiveDate
      ? [
          {
            url: absoluteUrl(
              siteConfig.routes.privacy
            ),

            lastModified: validDate(
              privacyPolicy.lastUpdated ??
                privacyPolicy.effectiveDate
            ),
          },
        ]
      : [];

  /* ------------------------------------------------------------------------ */
  /* Final sitemap                                                            */
  /* ------------------------------------------------------------------------ */

  return [
    ...staticPages,
    ...servicePages,
    ...specialtyPages,
    ...privacyPages,
  ];
}