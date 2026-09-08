import type { Metadata } from "next";

import { RcmAssessment } from "@/features/assessment/rcm-assessment";
import { siteConfig } from "@/config/site";

const pageTitle =
  "Revenue Cycle Management Assessment | Kinz HealthOps";

const pageDescription =
  "Request a structured revenue cycle management assessment from Kinz HealthOps. Discuss your practice's medical billing, denial management, accounts receivable, and RCM priorities.";

const pageUrl = new URL(
  "/rcm-assessment",
  siteConfig.url,
).toString();

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },

  description: pageDescription,

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Kinz HealthOps",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function RcmAssessmentPage() {
  return <RcmAssessment />;
}