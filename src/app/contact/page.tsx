import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardCheck,
  LockKeyhole,
  Mail,
  MessageSquareText,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/features/contact/contact-form";

const siteUrl = siteConfig.url.replace(/\/+$/, "");
const contactUrl = `${siteUrl}/contact`;
const pageTitle = "Contact Kinz HealthOps | Medical Billing & RCM";
const pageDescription =
  "Contact Kinz HealthOps to discuss medical billing, revenue cycle management, denial management and A/R follow-up for your healthcare practice.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: contactUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: contactUrl,
    siteName: "Kinz HealthOps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
};

// This is a public business contact, not a channel for patient information.
// CONTACT_EMAIL is preferred; the existing public variable remains supported.
const configuredEmail = (
  process.env.CONTACT_EMAIL ??
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
  ""
).trim();

// Syntax validation is not proof that an address exists or is monitored.
const contactEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(configuredEmail)
  ? configuredEmail
  : "";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: pageTitle,
  description: pageDescription,
  url: contactUrl,
  inLanguage: "en",
  mainEntity: {
    "@type": "Organization",
    name: "Kinz HealthOps",
    url: siteUrl,
    ...(contactEmail ? { email: contactEmail } : {}),
  },
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087f78]";

const focusRingOnDark =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8ae9e1]";

const cardClassName =
  "group block rounded-[22px] border border-[#dce8eb] bg-white/90 p-5 shadow-[0_12px_40px_rgba(7,23,34,0.035)] transition-colors duration-200 hover:border-[#9dcfca] hover:bg-white sm:p-6 motion-safe:hover:-translate-y-0.5 motion-safe:transition-transform motion-reduce:transform-none";

const iconClassName =
  "flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-[#e8f7f5] text-[#087f78]";

const eyebrowClassName =
  "text-xs font-bold uppercase tracking-[0.13em] text-[#087f78]";

export default function ContactPage() {
  return (
    <section
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden bg-[#f7fafb] pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-36"
    >
      <PageBackground />

      <Container width="wide">
        <div className="relative z-10 min-w-0">
          <Hero />

          <div className="mt-12 grid min-w-0 grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-12 xl:gap-16">
            <ContactInformation />

            <div id="contact-inquiry" className="min-w-0 scroll-mt-28">
              <ContactForm contactEmail={contactEmail} />
            </div>
          </div>

          <SecurityNote />
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema).replace(/</g, "\\u003c"),
        }}
      />
    </section>
  );
}

function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-56 top-16 size-[590px] rounded-full bg-[#15c8bb]/[0.06] blur-[160px]" />
      <div className="absolute -right-60 top-36 size-[630px] rounded-full bg-[#4c8dff]/[0.06] blur-[170px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(7,23,34,0.019)_1px,transparent_1px),linear-gradient(90deg,rgba(7,23,34,0.019)_1px,transparent_1px)] bg-[size:68px_68px] opacity-45 [mask-image:radial-gradient(circle_at_top,black,transparent_82%)]" />
    </div>
  );
}

function Hero() {
  return (
    <header className="mx-auto max-w-[1020px] text-center">
      <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#dce8eb] bg-white/85 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#35515c] shadow-[inset_0_1px_rgba(255,255,255,0.9)] backdrop-blur-xl">
        <MessageSquareText
          aria-hidden="true"
          className="size-4 shrink-0 text-[#087f78]"
          strokeWidth={1.8}
        />
        Contact Kinz HealthOps
      </div>

      <h1
        id="contact-title"
        className="mt-7 text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.04] tracking-[-0.055em] text-[#071722]"
      >
        Talk to us about your
        <span className="mt-2 block bg-gradient-to-r from-[#104d59] via-[#087f78] to-[#357be4] bg-clip-text text-transparent">
          revenue cycle.
        </span>
      </h1>

      <p className="mx-auto mt-7 max-w-[750px] text-base leading-7 text-[#49616b] sm:text-lg sm:leading-8">
        Tell us about your practice and what you need help with. Whether it is
        medical billing, denial management, A/R follow-up or a broader RCM
        requirement, we can discuss the right scope and next steps.
      </p>

      <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        <Link
          href="#contact-inquiry"
          className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#087f78] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(8,127,120,0.16)] transition-colors hover:bg-[#076b65] ${focusRing}`}
        >
          Discuss your requirements
          <ArrowRight
            aria-hidden="true"
            className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
            strokeWidth={1.8}
          />
        </Link>

        <Link
          href={siteConfig.routes.assessment}
          className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#d0e0e4] bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#17343f] transition-colors hover:border-[#9dcfca] hover:bg-white ${focusRing}`}
        >
          Explore the RCM assessment
          <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.8} />
        </Link>
      </div>

      <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3" role="list">
        <TrustItem text="Practice-focused discussions" />
        <TrustItem text="Defined service scope" />
        <TrustItem text="Business information only" />
      </ul>
    </header>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-xs font-medium text-[#49616b] sm:text-sm">
      <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#e8f7f5] text-[#087f78]">
        <Check aria-hidden="true" className="size-3.5" strokeWidth={1.8} />
      </span>
      {text}
    </li>
  );
}

function ContactInformation() {
  return (
    <div className="min-w-0 space-y-6">
      <div>
        <p className={eyebrowClassName}>Get in touch</p>

        <h2
          id="contact-options-title"
          className="mt-4 max-w-[490px] text-[clamp(2rem,3.7vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-[#0b2732]"
        >
          The right starting point for your practice.
        </h2>

        <p className="mt-5 max-w-[480px] text-sm leading-7 text-[#49616b] sm:text-base">
          Reviewing your current billing operation, exploring outsourced RCM
          support or discussing a specific workflow? We begin by understanding
          your requirements before recommending a scope of work.
        </p>
      </div>

      <div className="space-y-3">
        <ContactMethod
          icon={ClipboardCheck}
          eyebrow="Revenue Cycle Assessment"
          title="Explore your RCM requirements"
          description="Share your practice information and current challenges through our assessment experience."
          href={siteConfig.routes.assessment}
          action="View assessment"
        />

        {contactEmail ? (
          <ContactMethod
            icon={Mail}
            eyebrow="Business Email"
            title={contactEmail}
            description="For general business inquiries and initial service discussions. Please do not send patient information."
            href={`mailto:${contactEmail}`}
            action="Send email"
          />
        ) : (
          <ContactMethod
            icon={Mail}
            eyebrow="Business Inquiries"
            title="Send us an inquiry"
            description="Use the form to introduce your practice and tell us what you would like to discuss."
            href="#contact-inquiry"
            action="Go to inquiry form"
          />
        )}

        <ContactMethod
          icon={ShieldCheck}
          eyebrow="Security & Privacy"
          title="Discuss engagement requirements"
          description="Review our approach to information handling, access and privacy responsibilities."
          href="/security"
          action="Security information"
        />
      </div>

      <div className="relative overflow-hidden rounded-[24px] border border-[#0c2934] bg-[#071722] p-6 text-white shadow-[0_24px_70px_rgba(7,23,34,0.1)] sm:p-7">
        <div aria-hidden="true" className="absolute -right-20 -top-20 size-[220px] rounded-full bg-[#4c8dff]/[0.12] blur-[85px]" />
        <div aria-hidden="true" className="absolute -left-20 bottom-[-90px] size-[230px] rounded-full bg-[#15c8bb]/[0.1] blur-[90px]" />

        <div className="relative">
          <span className="flex size-11 items-center justify-center rounded-[14px] border border-[#55e1d6]/20 bg-[#55e1d6]/[0.08] text-[#70e7de]">
            <Workflow aria-hidden="true" className="size-5" strokeWidth={1.7} />
          </span>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.13em] text-[#8ae9e1]">
            Before an engagement
          </p>

          <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-[28px]">
            Understand. Define.
            <span className="block text-white/70">Then move forward.</span>
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/75">
            We review the practice&apos;s requirements, agree on the appropriate
            scope and establish the necessary arrangements before operational
            work begins.
          </p>

          <Link
            href="/how-it-works"
            className={`group mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#8ae9e1] transition-colors hover:text-white ${focusRingOnDark}`}
          >
            How our engagement process works
            <ArrowRight
              aria-hidden="true"
              className="size-4 shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

type ContactMethodProps = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  action: string;
};

function ContactMethod({
  icon: Icon,
  eyebrow,
  title,
  description,
  href,
  action,
}: ContactMethodProps) {
  const isEmail = href.startsWith("mailto:");
  const className = `${cardClassName} ${focusRing}`;

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className={iconClassName}>
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
        </span>
        {isEmail ? (
          <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-[#617b85]" strokeWidth={1.7} />
        ) : (
          <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-[#617b85]" strokeWidth={1.7} />
        )}
      </div>

      <p className={`mt-5 ${eyebrowClassName}`}>{eyebrow}</p>

      <h3 className="mt-2 break-words [overflow-wrap:anywhere] text-lg font-semibold leading-snug tracking-[-0.025em] text-[#17343f]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#49616b]">{description}</p>

      <div className="mt-5 flex items-center gap-2 border-t border-[#e6eef0] pt-4">
        <span className="text-sm font-semibold text-[#17343f]">{action}</span>
        <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-[#087f78]" strokeWidth={1.8} />
      </div>
    </>
  );

  return isEmail ? (
    <a href={href} className={className}>
      {content}
    </a>
  ) : (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

function SecurityNote() {
  return (
    <section aria-labelledby="contact-security-title" className="mt-16 border-t border-[#dce8eb] pt-8 lg:mt-20">
      <div className="flex flex-col gap-6 rounded-[22px] border border-[#dce8eb] bg-white/80 p-5 sm:p-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex min-w-0 max-w-[850px] items-start gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-[#e8f7f5] text-[#087f78]">
            <LockKeyhole aria-hidden="true" className="size-5" strokeWidth={1.7} />
          </span>

          <div className="min-w-0">
            <h2 id="contact-security-title" className="text-base font-semibold leading-6 text-[#17343f]">
              Please keep initial inquiries free of patient information.
            </h2>

            <p className="mt-2 text-sm leading-7 text-[#49616b]">
              Public website forms and ordinary email are not intended for
              patient records or protected health information. Required
              agreements and approved information channels must be established
              before sensitive information is shared. Please use the form only
              for general business and practice-level information.
            </p>
          </div>
        </div>

        <Link
          href="/security"
          className={`inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm font-semibold text-[#087f78] transition-colors hover:text-[#076b65] ${focusRing}`}
        >
          Security & Privacy
          <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.8} />
        </Link>
      </div>
    </section>
  );
}
