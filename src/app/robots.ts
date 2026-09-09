import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/* -------------------------------------------------------------------------- */
/* Robots.txt                                                                 */
/* -------------------------------------------------------------------------- */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",

      // Allow crawling of public website pages and assets.
      allow: "/",

      // API endpoints are not intended for search indexing.
      disallow: ["/api/"],
    },

    sitemap: new URL(
      "/sitemap.xml",
      siteConfig.url
    ).toString(),
  };
}