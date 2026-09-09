import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  FileText,
  Mail,
  ShieldCheck,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { privacyPolicy } from "@/features/legal/privacy-policy.data";

/* -------------------------------------------------------------------------- */
/* Configuration                                                              */
/* -------------------------------------------------------------------------- */

const POLICY_PATH = "/privacy-policy";

const isApproved =
  privacyPolicy.approved &&
  Boolean(privacyPolicy.effectiveDate);

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b7775] focus-visible:ring-offset-2";

const bodyText =
  "text-base leading-8 text-[#405966] sm:text-[17px]";

const sectionTitle =
  "text-[clamp(1.5rem,2.2vw,1.875rem)] font-semibold leading-[1.25] tracking-[-0.035em] text-[#0b2732]";

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: {
    absolute: `${privacyPolicy.title} | Claryden RCM`,
  },

  description: privacyPolicy.description,

  alternates: {
    canonical: POLICY_PATH,
  },

  robots: isApproved
    ? {
        index: true,
        follow: true,
      }
    : {
        index: false,
        follow: true,
      },
};

/* -------------------------------------------------------------------------- */
/* Date helper                                                                */
/* -------------------------------------------------------------------------- */

function formatPolicyDate(value: string) {
  const date = new Date(
    value.length === 10
      ? `${value}T00:00:00Z`
      : value
  );

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

/* -------------------------------------------------------------------------- */
/* Privacy Policy Page                                                        */
/* -------------------------------------------------------------------------- */

export default function PrivacyPolicyPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#f7fafb] pb-16 pt-[124px] sm:pb-20 sm:pt-[136px] lg:pb-28 lg:pt-[152px]">
      <PageBackground />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <Breadcrumbs />

        <PageHero />

        <div className="mt-10 grid min-w-0 gap-8 lg:mt-14 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:items-start lg:gap-12 xl:gap-16">
          <PolicySidebar />

          <article
            aria-labelledby="privacy-page-title"
            className="min-w-0"
          >
            <div className="space-y-5">
              <MobileContents />

              <PolicyIntroduction />

              <PolicySections />

              <ContactPanel />
            </div>
          </article>
        </div>
      </div>
       </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Background                                                                 */
/* -------------------------------------------------------------------------- */

function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-56 top-16 size-[520px] rounded-full bg-[#15c8bb]/[0.05] blur-[150px]" />

      <div className="absolute -right-56 top-48 size-[600px] rounded-full bg-[#4c8dff]/[0.04] blur-[160px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(7,23,34,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(7,23,34,0.018)_1px,transparent_1px)] bg-[size:68px_68px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_65%)]" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Breadcrumbs                                                                */
/* -------------------------------------------------------------------------- */

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-6 text-[#526b77]">
        <li>
          <Link
            href={siteConfig.routes.home}
            className={`rounded-sm transition-colors hover:text-[#075e63] ${focusRing}`}
          >
            Home
          </Link>
        </li>

        <li aria-hidden="true">
          <ChevronRight
            className="size-3.5"
            strokeWidth={1.8}
          />
        </li>

        <li>
          <span
            aria-current="page"
            className="font-medium text-[#17343f]"
          >
            Privacy Policy
          </span>
        </li>
      </ol>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/* Page Hero                                                                  */
/* -------------------------------------------------------------------------- */

function PageHero() {
  return (
    <header className="mt-10 max-w-[900px] sm:mt-12">
      <div className="inline-flex items-center gap-2.5 rounded-full border border-[#17343f]/10 bg-white px-3.5 py-2 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-[#31505d] shadow-sm">
        <FileText
          aria-hidden="true"
          className="size-4 text-[#0b7775]"
          strokeWidth={1.8}
        />

        Legal & Privacy
      </div>

      <h1
        id="privacy-page-title"
        className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-[#071722]"
      >
        Privacy Policy
      </h1>

      <p className="mt-6 max-w-[760px] text-base leading-8 text-[#405966] sm:text-lg sm:leading-8">
        {privacyPolicy.description}
      </p>

      <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#17343f]/10 pt-5 text-sm leading-6 text-[#526b77]">
        {privacyPolicy.effectiveDate ? (
          <p>
            <span className="font-semibold text-[#17343f]">
              Effective:
            </span>{" "}
            <time dateTime={privacyPolicy.effectiveDate}>
              {formatPolicyDate(
                privacyPolicy.effectiveDate
              )}
            </time>
          </p>
        ) : null}

        {privacyPolicy.lastUpdated ? (
          <p>
            <span className="font-semibold text-[#17343f]">
              Last updated:
            </span>{" "}
            <time dateTime={privacyPolicy.lastUpdated}>
              {formatPolicyDate(
                privacyPolicy.lastUpdated
              )}
            </time>
          </p>
        ) : null}

        <p>
          <span className="font-semibold text-[#17343f]">
            Applies to:
          </span>{" "}
          Public website and business inquiries
        </p>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* Table of Contents                                                          */
/* -------------------------------------------------------------------------- */

function PolicyContents() {
  return (
    <ol className="space-y-1">
      {privacyPolicy.sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className={`block rounded-xl px-3 py-2.5 text-sm leading-6 text-[#405966] transition-colors hover:bg-[#eaf5f4] hover:text-[#075e63] ${focusRing}`}
          >
            {section.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

/* -------------------------------------------------------------------------- */
/* Desktop Sidebar                                                            */
/* -------------------------------------------------------------------------- */

function PolicySidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 max-h-[calc(100dvh-8rem)] overflow-y-auto overscroll-contain rounded-[22px] border border-[#17343f]/10 bg-white p-4 shadow-[0_10px_32px_rgba(7,23,34,0.025)]">
        <div className="border-b border-[#17343f]/10 px-3 pb-4 pt-2">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0b716e]">
            On this page
          </p>

          <p className="mt-2 text-sm leading-6 text-[#526b77]">
            Navigate the policy
          </p>
        </div>

        <nav
          aria-label="Privacy policy contents"
          className="mt-3"
        >
          <PolicyContents />
        </nav>
      </div>
    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/* Mobile Table of Contents                                                   */
/* -------------------------------------------------------------------------- */

function MobileContents() {
  return (
    <details className="group overflow-hidden rounded-[20px] border border-[#17343f]/10 bg-white shadow-sm lg:hidden">
      <summary
        className={`flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-base font-semibold text-[#17343f] [&::-webkit-details-marker]:hidden ${focusRing}`}
      >
        <span>On this page</span>

        <ChevronDown
          aria-hidden="true"
          className="size-5 shrink-0 text-[#526b77] transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
          strokeWidth={1.8}
        />
      </summary>

      <nav
        aria-label="Mobile privacy policy contents"
        className="border-t border-[#17343f]/10 px-2 py-3"
      >
        <PolicyContents />
      </nav>
    </details>
  );
}

/* -------------------------------------------------------------------------- */
/* Introduction                                                               */
/* -------------------------------------------------------------------------- */

function PolicyIntroduction() {
  return (
    <div className="rounded-[22px] border border-[#17343f]/10 bg-white p-5 shadow-[0_12px_36px_rgba(7,23,34,0.025)] sm:p-7 lg:p-8">
      <div className="flex items-start gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8f7f5] text-[#0b7775]">
          <ShieldCheck
            aria-hidden="true"
            className="size-5"
            strokeWidth={1.8}
          />
        </span>

        <div className="min-w-0">
          <h2 className="text-xl font-semibold leading-snug tracking-[-0.025em] text-[#17343f] sm:text-2xl">
            About this policy
          </h2>

          <p className={`mt-3 max-w-[70ch] ${bodyText}`}>
            This policy explains how Claryden RCM handles
            personal information associated with its public
            website and business-inquiry activities.
          </p>

          <p className={`mt-3 max-w-[70ch] ${bodyText}`}>
            Public inquiry forms are intended for business
            information only. Please do not submit patient
            records or Protected Health Information (PHI)
            through these forms.
          </p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Policy Sections                                                            */
/* -------------------------------------------------------------------------- */

function PolicySections() {
  return (
    <div className="space-y-5">
      {privacyPolicy.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-title`}
          className="scroll-mt-32 rounded-[22px] border border-[#17343f]/10 bg-white p-5 shadow-[0_12px_36px_rgba(7,23,34,0.025)] sm:p-7 lg:p-8"
        >
          <h2
            id={`${section.id}-title`}
            className={sectionTitle}
          >
            {section.title}
          </h2>

          <div className="mt-5 space-y-5">
            {section.paragraphs.map((paragraph, index) => (
              <p
                key={`${section.id}-paragraph-${index}`}
                className={`max-w-[72ch] ${bodyText}`}
              >
                {paragraph}
              </p>
            ))}

            {section.bullets &&
            section.bullets.length > 0 ? (
              <ul className="max-w-[72ch] list-disc space-y-3 pl-5 marker:text-[#0b7775]">
                {section.bullets.map((bullet, index) => (
                  <li
                    key={`${section.id}-bullet-${index}`}
                    className={`pl-1 ${bodyText}`}
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Contact Panel                                                              */
/* -------------------------------------------------------------------------- */

function ContactPanel() {
  const email = siteConfig.contact.email;

  return (
    <section
      aria-labelledby="privacy-contact-title"
      className="relative overflow-hidden rounded-[24px] border border-[#17343f] bg-[#071c27] p-5 text-white sm:p-7 lg:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-[#23d4c7]/10 blur-[90px]"
      />

      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8ce9e1]">
          Privacy & Support
        </p>

        <h2
          id="privacy-contact-title"
          className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.04em] !text-white"
        >
          Have a privacy-related question?
        </h2>

        <p className="mt-4 max-w-[620px] text-base leading-8 !text-white/80">
          Contact our team for questions about this policy
          or information you have submitted through the
          public website. Please do not include patient
          information in ordinary email or public forms.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {email ? (
            <a
              href={`mailto:${email}`}
              className={`inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-[#b8f4ee] px-5 py-3 text-center text-sm font-semibold !text-[#06252d] transition-colors hover:bg-[#d4faf6] sm:w-auto sm:text-base ${focusRing}`}
            >
              <Mail
                aria-hidden="true"
                className="size-4 shrink-0 !text-[#06252d]"
                strokeWidth={1.8}
              />

              <span className="!text-[#06252d]">
                Email Our Team
              </span>
            </a>
          ) : null}

          <Link
            href={siteConfig.routes.contact}
            className={`group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/[0.04] px-5 py-3 text-center text-sm font-semibold !text-white transition-colors hover:bg-white/[0.09] sm:w-auto sm:text-base ${focusRing}`}
          >
            <span className="!text-white">
              Contact Page
            </span>

            <ArrowRight
              aria-hidden="true"
              className="size-4 shrink-0 !text-white transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
              strokeWidth={1.8}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}