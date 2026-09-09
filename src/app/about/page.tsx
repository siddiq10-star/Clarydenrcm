import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ClipboardCheck,
  HeartPulse,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const aboutTitle = "About claryden rcm";

const aboutDescription =
  "Learn about claryden rcm, our approach to medical billing and revenue cycle management, and our focus on structured workflows, clear communication and responsible healthcare operations.";

export const metadata: Metadata = {
  title: aboutTitle,

  description: aboutDescription,

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/about",
    siteName: siteConfig.name,
    title: aboutTitle,
    description: aboutDescription,
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
    title: aboutTitle,
    description: aboutDescription,
    images: ["/og/claryden-rcm-og.jpg"],
  },
};

const principles = [
  {
    number: "01",
    icon: Workflow,
    title: "Process before promises.",
    description:
      "We believe reliable revenue-cycle operations begin with defined workflows, clear responsibilities and a practical understanding of the practice's requirements.",
  },
  {
    number: "02",
    icon: MessageSquareText,
    title: "Clarity in every handoff.",
    description:
      "Billing, payer follow-up and practice coordination work better when ownership, escalation paths and communication expectations are clearly established.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Responsibility by design.",
    description:
      "Healthcare information requires appropriate safeguards. We approach privacy, security and access as essential engagement requirements, not marketing claims.",
  },
] as const;

const capabilities = [
  {
    icon: ClipboardCheck,
    title: "Revenue-cycle operations",
    description:
      "Practical medical billing and RCM experience informs how we approach workflows, payer follow-up and operational challenges.",
  },
  {
    icon: Layers3,
    title: "Technology & systems",
    description:
      "Technology and software development experience supports our approach to organized processes, reporting and operational efficiency.",
  },
  {
    icon: HeartPulse,
    title: "Practice-centered service",
    description:
      "We aim to understand each practice's specialty, systems and business requirements before defining the appropriate engagement.",
  },
] as const;

const pillars = [
  {
    number: "01",
    title: "People",
    description: "Practical RCM experience",
    icon: HeartPulse,
  },
  {
    number: "02",
    title: "Process",
    description: "Defined operational workflows",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Technology",
    description: "Systems-minded thinking",
    icon: Layers3,
  },
] as const;

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-[#f7fafb] pb-20 pt-[calc(var(--nav-height)+42px)] sm:pb-24 sm:pt-[calc(var(--nav-height)+54px)] lg:pb-32 lg:pt-[calc(var(--nav-height)+64px)]">
      <PageBackground />

      <Container width="wide">
        <div className="relative min-w-0">
          <Hero />
          <WhoWeAre />
          <OurPrinciples />
          <OurFoundation />
          <AssessmentCTA />
        </div>
      </Container>
    </div>
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
    <section
      aria-labelledby="about-page-title"
      className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-16"
    >
      <div className="min-w-0">
        <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-black/[0.07] bg-white/75 px-3 py-2 text-left text-[10px] leading-5 font-bold uppercase tracking-[0.13em] text-[#35515c] shadow-[inset_0_1px_rgba(255,255,255,0.9)] backdrop-blur-xl sm:tracking-[0.16em]">
          <HeartPulse
            aria-hidden="true"
            className="size-3.5 shrink-0 text-[#0b958b]"
            strokeWidth={1.8}
          />

          About claryden rcm
        </div>

        <h1
          id="about-page-title"
          className="mt-6 max-w-[850px] text-[clamp(2.75rem,5.8vw,6.4rem)] leading-[1.02] font-semibold tracking-[-0.058em] text-[#071722] sm:leading-[0.97] sm:tracking-[-0.064em] lg:leading-[0.93] lg:tracking-[-0.068em]"
        >
          Built for

          <span className="block bg-gradient-to-r from-[#104d59] via-[#078e94] to-[#357be4] bg-clip-text pb-1 text-transparent">
            clearer revenue
          </span>

          cycle operations.
        </h1>

        <p className="mt-7 max-w-[700px] text-[15px] leading-7 text-[#526b76] sm:text-[17px] sm:leading-8">
          claryden rcm is a medical billing and revenue cycle management
          business focused on helping U.S. healthcare practices organize
          billing, payer follow-up and related revenue workflows through
          structured processes and clear communication.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href={siteConfig.routes.assessment}
            className="group inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-[15px] bg-[#071c27] px-6 py-3 text-center text-[13px] leading-5 font-semibold !text-white shadow-[0_16px_42px_rgba(5,28,38,0.18)] transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_22px_54px_rgba(5,28,38,0.24)] sm:w-auto"
          >
            Request an RCM Assessment

            <ArrowRight
              aria-hidden="true"
              className="size-4 shrink-0 transition-transform duration-300 motion-safe:group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>

          <Link
            href={siteConfig.routes.services}
            className="group inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-[15px] border border-black/[0.075] bg-white/75 px-6 py-3 text-center text-[13px] leading-5 font-semibold text-[#23414c] backdrop-blur-xl transition-[background-color,border-color] hover:border-black/[0.12] hover:bg-white sm:w-auto"
          >
            Explore Our Services

            <ArrowUpRight
              aria-hidden="true"
              className="size-3.5 shrink-0 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
              strokeWidth={1.8}
            />
          </Link>
        </div>
      </div>

      <AboutPanel />
    </section>
  );
}

function AboutPanel() {
  return (
    <aside
      aria-labelledby="about-foundation-panel-title"
      className="relative min-w-0 overflow-hidden rounded-[30px] border border-[#0c2934] bg-[#071722] p-6 text-white shadow-[0_32px_100px_rgba(7,23,34,0.16)] sm:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 size-[350px] rounded-full bg-[#4c8dff]/[0.12] blur-[115px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-[-100px] size-[300px] rounded-full bg-[#15c8bb]/[0.11] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.023)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.023)_1px,transparent_1px)] bg-[size:52px_52px] opacity-35"
      />

      <div className="relative min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-[15px] border border-[#55e1d6]/12 bg-[#55e1d6]/[0.07] text-[#70e7de]">
            <Layers3
              aria-hidden="true"
              className="size-5"
              strokeWidth={1.7}
            />
          </span>

          <span className="rounded-full border border-white/[0.07] bg-white/[0.04] px-3 py-1.5 text-[10px] leading-4 font-semibold uppercase tracking-[0.1em] text-white/65">
            Our Foundation
          </span>
        </div>

        <p className="mt-8 text-[10px] leading-5 font-bold uppercase tracking-[0.15em] text-[#6de3da]">
          claryden rcm
        </p>

        <h2
          id="about-foundation-panel-title"
          className="mt-3 text-[clamp(1.6rem,3vw,1.9rem)] leading-[1.08] font-semibold tracking-[-0.045em]"
        >
          People. Process.

          <span className="block text-white/65">
            Technology.
          </span>
        </h2>

        <p className="mt-4 max-w-[420px] text-[12px] leading-6 text-white/70">
          A practical foundation for building coordinated revenue-cycle
          services.
        </p>

        <ol
          aria-label="claryden rcm foundation"
          className="mt-8 list-none space-y-2.5"
        >
          {pillars.map((pillar) => {
            const Icon: LucideIcon = pillar.icon;

            return (
              <li
                key={pillar.number}
                className="flex min-w-0 items-center gap-3.5 rounded-[15px] border border-white/[0.06] bg-white/[0.035] px-4 py-3.5"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#45ddd1]/[0.08] text-[#70e7de]">
                  <Icon
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.7}
                  />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-[12px] leading-5 font-semibold text-white/85">
                    {pillar.title}
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/65">
                    {pillar.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="shrink-0 text-[10px] font-bold text-white/45"
                >
                  {pillar.number}
                </span>
              </li>
            );
          })}
        </ol>

        <div className="mt-6 flex items-start gap-2.5 border-t border-white/[0.07] pt-5">
          <span
            aria-hidden="true"
            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#4ee0d5] shadow-[0_0_12px_rgba(78,224,213,0.6)]"
          />

          <p className="text-[11px] leading-5 text-white/65">
            Every engagement begins with understanding the practice and
            defining the appropriate scope.
          </p>
        </div>
      </div>
    </aside>
  );
}

function WhoWeAre() {
  return (
    <section
      aria-labelledby="who-we-are-title"
      className="mt-20 border-y border-black/[0.065] py-14 lg:mt-24 lg:py-16"
    >
      <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-14">
        <div className="min-w-0">
          <p className="text-[10px] leading-5 font-bold uppercase tracking-[0.16em] text-[#0b9188]">
            Who We Are
          </p>

          <h2
            id="who-we-are-title"
            className="mt-3 max-w-[430px] text-[clamp(2rem,3.2vw,3.6rem)] leading-[1.05] font-semibold tracking-[-0.05em] text-[#0b2732] sm:leading-[1]"
          >
            A practical approach to healthcare revenue.
          </h2>
        </div>

        <div className="min-w-0 space-y-5">
          <p className="text-[15px] leading-8 text-[#526b76]">
            claryden rcm brings together practical revenue-cycle experience
            with technology and business development. Our focus is on building
            a service organization that understands the operational realities
            of healthcare billing while maintaining clear processes and
            responsible information handling.
          </p>

          <p className="text-[14px] leading-8 text-[#607781]">
            We approach each practice as a distinct operating environment.
            Specialty, payer mix, practice management systems, team
            responsibilities and existing workflows all influence the services
            that may be appropriate.
          </p>

          <div className="flex items-start gap-3 rounded-[16px] border border-[#15c8bb]/12 bg-[#15c8bb]/[0.035] p-4">
            <BadgeCheck
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-[#0b958a]"
              strokeWidth={1.8}
            />

            <p className="text-[12px] leading-6 text-[#526b76]">
              Our goal is to establish the right operating foundation before
              making commitments about scope, timelines or performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurPrinciples() {
  return (
    <section
      aria-labelledby="principles-title"
      className="mt-20 lg:mt-24"
    >
      <div className="flex min-w-0 flex-col gap-5 border-b border-black/[0.065] pb-7 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <p className="text-[10px] leading-5 font-bold uppercase tracking-[0.16em] text-[#0a9188]">
            What Guides Us
          </p>

          <h2
            id="principles-title"
            className="mt-3 max-w-[800px] text-[clamp(2.2rem,4vw,4.5rem)] leading-[1.05] font-semibold tracking-[-0.052em] text-[#0b2732] sm:leading-[1] sm:tracking-[-0.058em]"
          >
            Principles that shape our work.
          </h2>
        </div>

        <p className="max-w-[450px] text-[13px] leading-6 text-[#607781]">
          We believe sustainable revenue-cycle support depends on sound
          processes, transparent communication and appropriate operational
          safeguards.
        </p>
      </div>

      <ol className="mt-6 grid list-none gap-4 md:grid-cols-3">
        {principles.map((principle) => {
          const Icon: LucideIcon = principle.icon;

          return (
            <li
              key={principle.number}
              className="min-w-0"
            >
              <article className="relative flex h-full min-h-[290px] min-w-0 flex-col overflow-hidden rounded-[23px] border border-black/[0.065] bg-white/80 p-6 shadow-[0_16px_50px_rgba(7,23,34,0.03)] backdrop-blur-xl">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 size-[180px] rounded-full bg-[#15c8bb]/[0.05] blur-[80px]"
                />

                <div className="relative flex items-center justify-between">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] border border-[#15c8bb]/12 bg-[#15c8bb]/[0.055] text-[#0b958a]">
                    <Icon
                      aria-hidden="true"
                      className="size-[18px]"
                      strokeWidth={1.7}
                    />
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-[10px] font-bold tracking-[0.12em] text-[#7c9099]"
                  >
                    {principle.number}
                  </span>
                </div>

                <div className="relative mt-7">
                  <h3 className="text-[21px] leading-[1.15] font-semibold tracking-[-0.035em] text-[#112e39]">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-6 text-[#607781]">
                    {principle.description}
                  </p>
                </div>

                <div className="relative mt-auto pt-7">
                  <div className="flex items-center gap-2 border-t border-black/[0.055] pt-4">
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-[#0b958a]"
                    />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#71858e]">
                      claryden rcm
                    </span>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function OurFoundation() {
  return (
    <section
      aria-labelledby="our-foundation-title"
      className="mt-20 lg:mt-24"
    >
      <div className="relative min-w-0 overflow-hidden rounded-[30px] border border-[#0c2934] bg-[#071722] p-6 text-white shadow-[0_32px_100px_rgba(7,23,34,0.14)] sm:p-8 lg:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 -top-24 size-[320px] rounded-full bg-[#1dd1c4]/[0.11] blur-[115px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 bottom-[-100px] size-[360px] rounded-full bg-[#4c8dff]/[0.09] blur-[125px]"
        />

        <div className="relative min-w-0">
          <div className="grid min-w-0 gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
            <div className="min-w-0">
              <p className="text-[10px] leading-5 font-bold uppercase tracking-[0.16em] text-[#71e6dd]">
                Our Foundation
              </p>

              <h2
                id="our-foundation-title"
                className="mt-4 text-[clamp(2.2rem,4vw,4.4rem)] leading-[1.04] font-semibold tracking-[-0.055em] sm:leading-[0.98] sm:tracking-[-0.06em]"
              >
                Different strengths.

                <span className="block text-white/65">
                  One operating focus.
                </span>
              </h2>
            </div>

            <p className="max-w-[570px] text-[13px] leading-7 text-white/70 lg:justify-self-end">
              Our team combines experience in revenue-cycle operations,
              technology and business development. These complementary
              perspectives help shape how we approach service delivery and
              practice relationships.
            </p>
          </div>

          <ul className="mt-9 grid list-none gap-3 md:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon: LucideIcon = capability.icon;

              return (
                <li
                  key={capability.title}
                  className="min-w-0 rounded-[20px] border border-white/[0.07] bg-white/[0.035] p-5 backdrop-blur-xl sm:p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-[14px] border border-[#4ee1d5]/12 bg-[#4ee1d5]/[0.07] text-[#6de7dd]">
                    <Icon
                      aria-hidden="true"
                      className="size-[18px]"
                      strokeWidth={1.7}
                    />
                  </span>

                  <h3 className="mt-6 text-[16px] leading-6 font-semibold tracking-[-0.025em] text-white/90">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-white/70">
                    {capability.description}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex items-start gap-3 rounded-[15px] border border-[#6de7dd]/10 bg-[#6de7dd]/[0.035] p-4">
            <LockKeyhole
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-[#70e7de]"
              strokeWidth={1.7}
            />

            <p className="text-[11px] leading-6 text-white/70">
              Specific service capabilities, personnel qualifications and
              security arrangements are confirmed as part of each engagement.
              We do not represent planned capabilities as already implemented
              or certified.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AssessmentCTA() {
  return (
    <section
      aria-labelledby="about-assessment-title"
      className="mt-20 lg:mt-24"
    >
      <div className="relative min-w-0 overflow-hidden rounded-[28px] border border-black/[0.07] bg-white/80 px-6 py-10 text-center shadow-[0_22px_70px_rgba(7,23,34,0.06)] backdrop-blur-xl sm:px-8 lg:py-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-[-100px] size-[280px] rounded-full bg-[#15c8bb]/[0.07] blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-[-100px] size-[300px] rounded-full bg-[#4c8dff]/[0.07] blur-[110px]"
        />

        <div className="relative mx-auto max-w-[760px]">
          <p className="text-[10px] leading-5 font-bold uppercase tracking-[0.16em] text-[#0a9188]">
            Start a Conversation
          </p>

          <h2
            id="about-assessment-title"
            className="mt-4 text-[clamp(2.1rem,4vw,4.3rem)] leading-[1.04] font-semibold tracking-[-0.054em] text-[#0b2732] sm:leading-[0.98] sm:tracking-[-0.058em]"
          >
            Let&apos;s understand

            <span className="block text-[#607781]">
              your practice.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[13px] leading-7 text-[#607781]">
            Tell us about your current billing model, operational challenges
            and service requirements. We can then discuss whether Kinz
            HealthOps is the right fit.
          </p>

          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.routes.assessment}
              className="group inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-[15px] bg-[#071c27] px-6 py-3 text-center text-[13px] leading-5 font-semibold !text-white shadow-[0_16px_42px_rgba(5,28,38,0.18)] transition-transform duration-300 motion-safe:hover:-translate-y-0.5 sm:w-auto"
            >
              Request an RCM Assessment

              <ArrowRight
                aria-hidden="true"
                className="size-4 shrink-0 transition-transform duration-300 motion-safe:group-hover:translate-x-1"
                strokeWidth={1.8}
              />
            </Link>

            <Link
              href={siteConfig.routes.contact}
              className="inline-flex min-h-[54px] w-full items-center justify-center rounded-[15px] border border-black/[0.075] bg-white px-6 py-3 text-center text-[13px] leading-5 font-semibold text-[#23414c] transition-colors hover:bg-[#f4f8f9] sm:w-auto"
            >
              Contact Our Team
            </Link>
          </div>

          <p className="mt-5 text-[10px] leading-5 text-[#71858e]">
            Please do not submit patient information or protected health
            information through public website forms.
          </p>
        </div>
      </div>
    </section>
  );
}