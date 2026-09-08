import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { services } from "@/features/services/services-data";
import { specialties } from "@/features/specialties/specialties-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/specialties",
    "/how-it-works",
    "/security",
    "/rcm-assessment",
    "/contact",
  ];

  const staticPages: MetadataRoute.Sitemap =
    staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.7,
    }));

  const servicePages: MetadataRoute.Sitemap =
    services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const specialtyPages: MetadataRoute.Sitemap =
    specialties.map((specialty) => ({
      url: `${baseUrl}/specialties/${specialty.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [
    ...staticPages,
    ...servicePages,
    ...specialtyPages,
  ];
}