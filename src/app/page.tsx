import type { Metadata } from "next";

import { Hero } from "@/features/home/hero";
import { RevenueCycleStory } from "@/features/home/revenue-cycle-story";
import { RevenueLeakage } from "@/features/home/revenue-leakage";
import { ServicesArchitecture } from "@/features/home/services-architecture";
import { SpecialtiesPreview } from "@/features/home/specialties-preview";

import { siteConfig } from "@/config/site";

const homeTitle =
  "Medical Billing & Revenue Cycle Management | claryden rcm";

const homeDescription =
  "claryden rcm provides medical billing and revenue cycle management solutions for healthcare practices. Explore our RCM services, revenue cycle approach, and specialty-focused support.";

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
    locale: "en_US",
    url: "/",
    siteName: siteConfig.name,
    title: homeTitle,
    description: homeDescription,
    images: [
      {
        url: "/og/claryden-rcm-og.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.positioning}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/og/claryden-rcm-og.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <RevenueCycleStory />
      <RevenueLeakage />
      <ServicesArchitecture />
      <SpecialtiesPreview />
    </>
  );
}