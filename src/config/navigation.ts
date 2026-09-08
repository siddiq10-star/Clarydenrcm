import { siteConfig } from "@/config/site";

export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationGroup = {
  label: string;
  items: NavigationItem[];
};

export const mainNavigation = [
  {
    label: "Services",
    href: siteConfig.routes.services,
  },
  {
    label: "Specialties",
    href: siteConfig.routes.specialties,
  },
  {
    label: "How It Works",
    href: siteConfig.routes.howItWorks,
  },
  {
    label: "Security",
    href: siteConfig.routes.security,
  },
  {
    label: "About",
    href: siteConfig.routes.about,
  },
] satisfies NavigationItem[];

export const serviceNavigation: NavigationGroup = {
  label: "Services",

  items: [
    {
      label: "Medical Billing",
      href: "/services/medical-billing",
      description:
        "End-to-end professional billing and claims management.",
    },
    {
      label: "A/R Management",
      href: "/services/ar-management",
      description:
        "Structured follow-up for outstanding insurance receivables.",
    },
    {
      label: "Denial Management",
      href: "/services/denial-management",
      description:
        "Identify, resolve, appeal, and reduce preventable denials.",
    },
    {
      label: "Payment Posting",
      href: "/services/payment-posting",
      description:
        "Accurate ERA, EOB, adjustment, and payment reconciliation.",
    },
    {
      label: "Eligibility Verification",
      href: "/services/eligibility-verification",
      description:
        "Verify coverage, benefits, and patient responsibility.",
    },
    {
      label: "Prior Authorization",
      href: "/services/prior-authorization",
      description:
        "Support authorization workflows before services are delivered.",
    },
    {
      label: "Credentialing",
      href: "/services/credentialing",
      description:
        "Provider enrollment and payer credentialing support.",
    },
    {
      label: "Medical Coding",
      href: "/services/medical-coding",
      description:
        "Coding support aligned with documentation and billing requirements.",
    },
  ],
};

export const specialtyNavigation: NavigationGroup = {
  label: "Specialties",

  items: [
    {
      label: "Behavioral Health",
      href: "/specialties/behavioral-health",
    },
    {
      label: "Family Medicine",
      href: "/specialties/family-medicine",
    },
    {
      label: "Internal Medicine",
      href: "/specialties/internal-medicine",
    },
    {
      label: "Dermatology",
      href: "/specialties/dermatology",
    },
    {
      label: "Cardiology",
      href: "/specialties/cardiology",
    },
    {
      label: "Orthopedics",
      href: "/specialties/orthopedics",
    },
    {
      label: "Physical Therapy",
      href: "/specialties/physical-therapy",
    },
    {
      label: "Pain Management",
      href: "/specialties/pain-management",
    },
  ],
};

export const footerNavigation = {
  company: [
    {
      label: "About",
      href: siteConfig.routes.about,
    },
    {
      label: "How It Works",
      href: siteConfig.routes.howItWorks,
    },
    {
      label: "Security",
      href: siteConfig.routes.security,
    },
    {
      label: "Contact",
      href: siteConfig.routes.contact,
    },
  ],

  services: serviceNavigation.items.slice(0, 6),

  resources: [
    {
      label: "RCM Assessment",
      href: siteConfig.routes.assessment,
    },
    {
      label: "Insights",
      href: siteConfig.routes.insights,
    },
  ],

  legal: [
    {
      label: "Privacy Policy",
      href: siteConfig.routes.privacy,
    },
    {
      label: "Terms",
      href: siteConfig.routes.terms,
    },
  ],
};