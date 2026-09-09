import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileText,
  LockKeyhole,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

// Keep the public origin in siteConfig. Do not hard-code a deployment URL.
const pageUrl = new URL("/how-it-works", siteConfig.url).toString();
const pageTitle = "RCM Engagement Process & Onboarding | claryden rcm";
const pageDescription =
  "Learn how claryden rcm approaches medical billing and revenue cycle management, from practice discovery and scope definition to onboarding, operations and reporting.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "claryden rcm",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
};

// This describes the visible page and breadcrumb only. Organization details,
// certifications, ratings, and service-area claims belong in verified data.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "en",
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: new URL("/", siteConfig.url).toString(),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "How It Works",
          item: pageUrl,
        },
      ],
    },
  ],
};

const engagementSteps = [
  {
    number: "01",
    eyebrow: "Discovery",
    title: "Understand your practice.",
    description:
      "We begin with your current billing model, specialty, systems, payer environment and revenue-cycle challenges. The goal is to understand where support may be useful before recommending a service scope.",
    icon: SearchCheck,
    points: [
      "Practice and specialty overview",
      "Current workflow and challenge review",
      "Initial service-fit discussion",
    ],
  },
  {
    number: "02",
    eyebrow: "Scope & Agreement",
    title: "Define the engagement.",
    description:
      "We agree on the services, responsibilities, commercial terms and operating expectations. Any required coding, credentialing or specialty-specific capabilities are confirmed before they are included in the scope.",
    icon: FileText,
    points: [
      "Service scope and responsibilities",
      "Commercial terms and reporting expectations",
      "Required agreements and security review",
    ],
  },
  {
    number: "03",
    eyebrow: "Onboarding",
    title: "Prepare the operating environment.",
    description:
      "Before work begins, we coordinate the approved systems, access requirements, workflows and communication channels needed for the engagement. Required privacy and security arrangements must be established before protected health information is accessed.",
    icon: LockKeyhole,
    points: [
      "Approved access and system coordination",
      "Workflow and escalation configuration",
      "Privacy, security and training requirements",
    ],
  },
  {
    number: "04",
    eyebrow: "Operations",
    title: "Execute the agreed workflow.",
    description:
      "The assigned team carries out the services defined in the engagement, with documented responsibilities, quality checks and escalation procedures. Clinical decisions and medical-necessity determinations remain with appropriately qualified healthcare professionals.",
    icon: Workflow,
    points: [
      "Defined operational responsibilities",
      "Quality checks and issue escalation",
      "Coordination with the practice team",
    ],
  },
  {
    number: "05",
    eyebrow: "Reporting & Improvement",
    title: "Review, communicate, improve.",
    description:
      "We review agreed operational indicators, outstanding issues and recurring workflow challenges with the practice. Findings help guide priorities and identify opportunities to improve the revenue-cycle process.",
    icon: ClipboardCheck,
    points: [
      "Agreed operational reporting",
      "Regular issue and performance reviews",
      "Workflow improvement recommendations",
    ],
  },
] as const;

const operatingPrinciples = [
  {
    icon: ShieldCheck,
    title: "Security before access",
    description:
      "Required agreements, approved access and applicable privacy safeguards are established before handling protected health information.",
  },
  {
    icon: BadgeCheck,
    title: "Defined responsibilities",
    description:
      "The engagement identifies who owns each workflow, how issues are escalated and where the practice retains responsibility.",
  },
  {
    icon: MessageSquareText,
    title: "Clear communication",
    description:
      "Communication channels, reporting expectations and review arrangements are agreed with the practice during onboarding.",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <section
        aria-labelledby="how-it-works-title"
        className="relative isolate overflow-hidden bg-[#f7fafb] pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-36"
      >
        <PageBackground />
        <Container width="wide">
          <div className="relative mx-auto max-w-[1440px]">
            <Breadcrumbs />
            <Hero />
            <EngagementProcess />
            <OperatingPrinciples />
            <AssessmentCTA />
          </div>
        </Container>
      </section>
    </>
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

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="mb-10 sm:mb-12">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#526b76]">
        <li>
          <Link
            href="/"
            className="rounded-sm transition-colors hover:text-[#087e77] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087e77]"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="size-3.5 text-[#82969e]" />
        </li>
        <li aria-current="page" className="text-[#0b2732]">
          How It Works
        </li>
      </ol>
    </nav>
  );
}

function Hero() {
  return (
    <header className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-12 xl:gap-16">
      <div className="min-w-0">
        <p className="inline-flex items-center gap-2.5 rounded-full border border-[#dce8eb] bg-white/85 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#31505c] shadow-sm">
          <Workflow aria-hidden="true" className="size-4 shrink-0 text-[#087e77]" strokeWidth={1.8} />
          Our Engagement Approach
        </p>

        <h1 id="how-it-works-title" className="mt-6 max-w-[850px] text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[1.04] tracking-[-0.055em] text-[#071722] [text-wrap:balance] sm:leading-[1.02]">
          A structured approach to{" "}
          <span className="bg-gradient-to-r from-[#104d59] via-[#078e94] to-[#357be4] bg-clip-text text-transparent">
            revenue cycle management.
          </span>
        </h1>

        <p className="mt-6 max-w-[670px] text-base leading-8 text-[#4d6672] sm:text-lg sm:leading-8">
          Every practice operates differently. Our approach begins with
          understanding your revenue cycle, defining the right scope and
          establishing the responsibilities needed for a structured engagement.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href={siteConfig.routes.assessment}
            className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-2xl bg-[#071c27] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(5,28,38,0.14)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#103746] hover:shadow-[0_20px_48px_rgba(5,28,38,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087e77] motion-reduce:transform-none motion-reduce:transition-none"
          >
            Request an RCM Assessment
            <ArrowRight aria-hidden="true" className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" strokeWidth={1.8} />
          </Link>
          <Link
            href={siteConfig.routes.services}
            className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-2xl border border-[#d4e1e6] bg-white/85 px-6 py-3.5 text-sm font-semibold text-[#23414c] transition-colors hover:border-[#a8c7cf] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087e77]"
          >
            Explore Our Services
            <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.8} />
          </Link>
        </div>
        <p className="mt-4 max-w-[590px] text-sm leading-6 text-[#526b76]">
          An initial discussion helps establish service fit and scope. It does
          not require you to share patient information.
        </p>
      </div>

      <EngagementPanel />
    </header>
  );
}

function EngagementPanel() {
  return (
    <aside
      aria-labelledby="framework-title"
      className="relative min-w-0 overflow-hidden rounded-[28px] border border-[#183743] bg-[#071722] p-5 text-white shadow-[0_32px_100px_rgba(7,23,34,0.14)] sm:p-8"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-28 size-[350px] rounded-full bg-[#4c8dff]/[0.12] blur-[115px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-[-100px] size-[300px] rounded-full bg-[#15c8bb]/[0.11] blur-[110px]" />
      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="flex size-11 items-center justify-center rounded-2xl border border-[#55e1d6]/20 bg-[#55e1d6]/[0.08] text-[#70e7de]">
            <Workflow aria-hidden="true" className="size-5" strokeWidth={1.7} />
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/75">
            Engagement Framework
          </span>
        </div>

        <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.14em] text-[#70e7de]">
          From First Conversation
        </p>
        <h2 id="framework-title" className="mt-3 text-[clamp(1.75rem,2.4vw,2.35rem)] font-semibold leading-[1.15] tracking-[-0.04em]">
          Five connected stages.
          <span className="mt-1 block text-[#b9cbd2]">One defined scope.</span>
        </h2>

        <ol className="mt-7 space-y-2.5">
          {engagementSteps.map((step) => {
            const Icon: LucideIcon = step.icon;
            return (
              <li
                key={step.number}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3.5"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#45ddd1]/10 text-[11px] font-bold text-[#70e7de]">
                  {step.number}
                </span>
                <span className="min-w-0 flex-1 text-sm font-medium text-[#e0eaee]">
                  {step.eyebrow}
                </span>
                <Icon aria-hidden="true" className="size-4 shrink-0 text-[#8bded7]" strokeWidth={1.7} />
              </li>
            );
          })}
        </ol>

        <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-7 text-[#b9cbd2]">
          Scope and onboarding requirements are confirmed before operational
          work begins. Activities and timelines depend on the engagement.
        </p>
      </div>
    </aside>
  );
}

function EngagementProcess() {
  return (
    <section aria-labelledby="process-title" className="mt-20 lg:mt-28">
      <div className="border-b border-[#dce8eb] pb-7">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#087e77]">
          The Engagement Process
        </p>
        <h2 id="process-title" className="mt-4 max-w-[850px] text-[clamp(2rem,4vw,4rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-[#0b2732] [text-wrap:balance]">
          From discovery to ongoing operations.
        </h2>
        <p className="mt-5 max-w-[760px] text-base leading-8 text-[#526b76]">
          The exact timeline and activities depend on the practice, selected
          services and onboarding requirements. Each stage establishes the
          foundation for the next.
        </p>
      </div>

      <ol className="mt-8 space-y-4">
        {engagementSteps.map((step) => (
          <li key={step.number}>
            <ProcessStep step={step} />
          </li>
        ))}
      </ol>
    </section>
  );
}

function ProcessStep({
  step,
}: {
  step: (typeof engagementSteps)[number];
}) {
  const Icon: LucideIcon = step.icon;
  const headingId = `engagement-step-${step.number}`;

  return (
    <article
      aria-labelledby={headingId}
      className="grid min-w-0 gap-6 rounded-[24px] border border-[#dce8eb] bg-white/85 p-5 shadow-[0_14px_45px_rgba(7,23,34,0.025)] sm:p-7 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)] lg:gap-12 lg:p-8"
    >
      <div className="flex min-w-0 items-start gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-[#cce8e5] bg-[#eaf7f5] text-[#087e77]">
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
        </span>
        <div className="min-w-0 pt-0.5">
          <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#087e77]">
            Step {step.number}
          </p>
          <p className="mt-2 text-sm font-semibold leading-6 text-[#526b76]">
            {step.eyebrow}
          </p>
        </div>
      </div>

      <div className="min-w-0">
        <h3 id={headingId} className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.04em] text-[#102d38] [text-wrap:balance]">
          {step.title}
        </h3>
        <p className="mt-4 max-w-[790px] text-sm leading-7 text-[#526b76] sm:text-base sm:leading-8">
          {step.description}
        </p>
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {step.points.map((point) => (
            <li
              key={point}
              className="flex min-w-0 items-start gap-3 rounded-xl border border-[#e5edef] bg-[#f8fafb] px-4 py-3.5"
            >
              <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#087e77]" strokeWidth={2} />
              <span className="text-sm leading-6 text-[#405b67]">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function OperatingPrinciples() {
  return (
    <section aria-labelledby="principles-title" className="mt-20 lg:mt-24">
      <div className="relative overflow-hidden rounded-[28px] border border-[#183743] bg-[#071722] p-5 text-white shadow-[0_32px_100px_rgba(7,23,34,0.12)] sm:p-8 lg:p-10">
        <div aria-hidden="true" className="pointer-events-none absolute -left-28 -top-24 size-[320px] rounded-full bg-[#1dd1c4]/[0.11] blur-[115px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-[-100px] size-[360px] rounded-full bg-[#4c8dff]/[0.09] blur-[125px]" />
        <div className="relative">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-10">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#70e7de]">
                Operating Principles
              </p>
              <h2 id="principles-title" className="mt-4 text-[clamp(2rem,4vw,4rem)] font-semibold leading-[1.08] tracking-[-0.05em] [text-wrap:balance]">
                The foundation comes first.
              </h2>
            </div>
            <p className="max-w-[600px] text-sm leading-7 text-[#c4d3d9] sm:text-base sm:leading-8 lg:justify-self-end">
              Revenue-cycle work depends on reliable handoffs, appropriate
              access and a shared understanding of responsibilities. These
              requirements are addressed as part of the engagement, not assumed.
            </p>
          </div>

          <div className="mt-9 grid gap-3 md:grid-cols-3">
            {operatingPrinciples.map((principle) => {
              const Icon: LucideIcon = principle.icon;
              return (
                <article
                  key={principle.title}
                  className="min-w-0 rounded-[20px] border border-white/10 bg-white/[0.045] p-5 sm:p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-2xl border border-[#4ee1d5]/20 bg-[#4ee1d5]/[0.08] text-[#70e7de]">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold leading-7 tracking-[-0.025em] text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#c4d3d9]">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function AssessmentCTA() {
  return (
    <section aria-labelledby="assessment-title" className="mt-20 text-center lg:mt-24">
      <div className="mx-auto max-w-[820px]">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#087e77]">
          Start With Discovery
        </p>
        <h2 id="assessment-title" className="mt-4 text-[clamp(2rem,4.3vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-[#0a2631] [text-wrap:balance]">
          Tell us where your revenue cycle stands.
        </h2>
        <p className="mx-auto mt-5 max-w-[660px] text-base leading-8 text-[#526b76]">
          Share your practice information, current billing model and operational
          challenges so we can understand your requirements and discuss the
          appropriate next steps.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href={siteConfig.routes.assessment}
            className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-2xl bg-[#071c27] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(5,28,38,0.14)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#103746] hover:shadow-[0_20px_48px_rgba(5,28,38,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087e77] motion-reduce:transform-none motion-reduce:transition-none"
          >
            Request an RCM Assessment
            <ArrowRight aria-hidden="true" className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" strokeWidth={1.8} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-2xl border border-[#d4e1e6] bg-white/85 px-6 py-3.5 text-sm font-semibold text-[#23414c] transition-colors hover:border-[#a8c7cf] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087e77]"
          >
            Contact Our Team
            <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.8} />
          </Link>
        </div>
        <p className="mx-auto mt-5 max-w-[650px] text-sm leading-7 text-[#526b76]">
          Please do not submit patient information or protected health
          information through public forms or ordinary email. Required
          agreements and approved information channels must be established
          before sensitive information is shared.
        </p>
      </div>
    </section>
  );
}
