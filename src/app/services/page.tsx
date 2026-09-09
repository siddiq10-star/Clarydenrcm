import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  KeyRound,
  ReceiptText,
  ShieldCheck,
  Stethoscope,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import {
  services,
  type ServiceSlug,
} from "@/features/services/services-data";

const pageTitle =
  "Revenue Cycle Management Services | claryden rcm";

const pageDescription =
  "Explore claryden rcm revenue cycle management services, including medical billing, A/R management, denial management, payment posting, eligibility verification, prior authorization, credentialing and medical coding support.";

const pageUrl = new URL("/services", siteConfig.url).toString();

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
    siteName: "claryden rcm",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
};

const serviceIcons: Record<
  ServiceSlug,
  typeof FileCheck2
> = {
  "medical-billing": FileCheck2,
  "ar-management": Banknote,
  "denial-management": FileSearch,
  "payment-posting": ReceiptText,
  "eligibility-verification": ShieldCheck,
  "prior-authorization": KeyRound,
  credentialing: ClipboardCheck,
  "medical-coding": Stethoscope,
};


const servicesPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: pageTitle,
  description: pageDescription,
  url: pageUrl,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: new URL(`/services/${service.slug}`, siteConfig.url).toString(),
      name: service.shortTitle,
      description: service.description,
    })),
  },
};

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-[#f7fafb] pb-24 pt-[132px] sm:pt-[142px] lg:pb-32 lg:pt-[152px]">
      <PageBackground />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesPageJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Container width="wide">
        <div className="relative">
          <Hero />

          <ServiceDirectory />

          <OperatingModel />

          <EngagementSafeguard />

          <AssessmentCTA />
        </div>
      </Container>
    </main>
  );
}

function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-60 top-20 size-[600px] rounded-full bg-[#16c8bb]/[0.065] blur-[160px]" />

      <div className="absolute -right-56 top-36 size-[620px] rounded-full bg-[#4c8dff]/[0.065] blur-[170px]" />

      <div
        className="
          absolute inset-0 opacity-50
          bg-[linear-gradient(rgba(7,23,34,0.019)_1px,transparent_1px),linear-gradient(90deg,rgba(7,23,34,0.019)_1px,transparent_1px)]
          bg-[size:68px_68px]
          [mask-image:radial-gradient(circle_at_top,black,transparent_82%)]
        "
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-[1050px] text-center">
      <div
        className="
          inline-flex items-center gap-2.5
          rounded-full
          border border-black/[0.07]
          bg-white/75
          px-3 py-2
          text-[10px] font-bold uppercase
          tracking-[0.16em]
          text-[#35515c]
          shadow-[inset_0_1px_rgba(255,255,255,0.9)]
          backdrop-blur-xl
        "
      >
        <Workflow
          className="size-3.5 text-[#0b958b]"
          strokeWidth={1.8}
        />

        Revenue Cycle Services
      </div>

      <h1
        className="
          mt-6
          text-[clamp(3.2rem,6vw,6.7rem)]
          font-semibold
          leading-[0.92]
          tracking-[-0.068em]
          text-[#071722]
        "
      >
        Every part of the revenue cycle
        <span className="mt-2 block bg-gradient-to-r from-[#104d59] via-[#078e94] to-[#357be4] bg-clip-text text-transparent">
          should work together.
        </span>
      </h1>

      <p className="mx-auto mt-7 max-w-[760px] text-[15px] leading-8 text-[#657a84] sm:text-[17px]">
        claryden rcm supports healthcare practices
        across front-end workflows, claim operations,
        payer follow-up, payment posting and revenue
        recovery through a coordinated RCM operating
        model.
      </p>

      <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3">
        <HeroTrustItem text="Structured workflows" />
        <HeroTrustItem text="Defined responsibilities" />
        <HeroTrustItem text="Connected handoffs" />
      </div>
    </section>
  );
}

function HeroTrustItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-[12px] font-medium text-[#657a84]">
      <span className="flex size-6 items-center justify-center rounded-lg bg-[#15c8bb]/[0.07] text-[#0b948a]">
        <BadgeCheck
          className="size-3.5"
          strokeWidth={1.8}
        />
      </span>

      {text}
    </div>
  );
}

function ServiceDirectory() {
  return (
    <section className="mt-20 lg:mt-24">
      <div className="flex flex-col gap-5 border-b border-black/[0.065] pb-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0a9188]">
            Service Architecture
          </p>

          <h2 className="mt-3 text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1] tracking-[-0.055em] text-[#0b2732]">
            Connected RCM capabilities.
          </h2>
        </div>

        <p className="max-w-[500px] text-[13px] leading-6 text-[#748790] sm:text-right">
          Engagement scope is configured around the
          practice&apos;s workflow, specialty,
          systems and operational requirements.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            service={service}
          />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const Icon =
    serviceIcons[service.slug as ServiceSlug];

  return (
    <Link
      href={`/services/${service.slug}`}
      className="
        group relative flex min-h-[330px]
        flex-col overflow-hidden
        rounded-[24px]
        border border-black/[0.07]
        bg-white/80
        p-5
        shadow-[0_16px_50px_rgba(7,23,34,0.035)]
        backdrop-blur-xl
        transition-all duration-500
        hover:-translate-y-1
        hover:border-[#15c8bb]/20
        hover:bg-white
        hover:shadow-[0_26px_75px_rgba(7,23,34,0.075)]
        sm:p-6
      "
    >
      <div className="absolute -right-16 -top-16 size-[180px] rounded-full bg-[#15c8bb]/[0.065] blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <span className="flex size-11 items-center justify-center rounded-[14px] border border-[#15c8bb]/12 bg-[#15c8bb]/[0.055] text-[#0b958a]">
          <Icon
            className="size-[18px]"
            strokeWidth={1.7}
          />
        </span>

        <span className="rounded-full border border-black/[0.055] bg-[#f8fafb] px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#71858e]">
          {service.category}
        </span>
      </div>

      <div className="relative mt-9">
        <h3 className="text-[21px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#112e39]">
          {service.shortTitle}
        </h3>

        <p className="mt-4 text-[12px] leading-6 text-[#70848d]">
          {service.description}
        </p>
      </div>

      <div className="relative mt-auto pt-8">
        <div className="flex items-center justify-between border-t border-black/[0.055] pt-4">
          <span className="text-[10px] font-semibold text-[#49616b]">
            Explore service
          </span>

          <span className="flex size-8 items-center justify-center rounded-xl bg-[#071c27] text-white transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight
              className="size-3.5"
              strokeWidth={1.8}
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

function OperatingModel() {
  const stages = [
    {
      number: "01",
      title: "Front-End",
      description:
        "Eligibility, benefits and authorization support.",
    },
    {
      number: "02",
      title: "Billing",
      description:
        "Claim preparation, validation and submission.",
    },
    {
      number: "03",
      title: "Adjudication",
      description:
        "Payer responses, rejections and denials.",
    },
    {
      number: "04",
      title: "Recovery",
      description:
        "Payments, outstanding A/R and follow-up.",
    },
  ];

  return (
    <section className="mt-20 lg:mt-24">
      <div
        className="
          relative overflow-hidden
          rounded-[30px]
          border border-[#0d2934]
          bg-[#071722]
          p-6 text-white
          shadow-[0_32px_100px_rgba(7,23,34,0.15)]
          sm:p-8 lg:p-10
        "
      >
        <div className="absolute -left-28 -top-24 size-[320px] rounded-full bg-[#1dd1c4]/[0.12] blur-[115px]" />

        <div className="absolute -right-32 bottom-[-100px] size-[360px] rounded-full bg-[#4c8dff]/[0.10] blur-[125px]" />

        <div
          className="
            absolute inset-0 opacity-35
            bg-[linear-gradient(rgba(255,255,255,0.023)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.023)_1px,transparent_1px)]
            bg-[size:58px_58px]
          "
        />

        <div className="relative">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#71e6dd]">
                Operating Model
              </p>

              <h2 className="mt-4 max-w-[650px] text-[clamp(2.5rem,4vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.06em]">
                One revenue cycle.
                <span className="block text-white/50">
                  Connected handoffs.
                </span>
              </h2>
            </div>

            <p className="max-w-[600px] text-[14px] leading-7 text-white/65 lg:justify-self-end">
              Services can operate individually or as
              part of a broader revenue-cycle
              engagement. Responsibilities, access,
              escalation paths and reporting are
              established during onboarding.
            </p>
          </div>

          <div className="relative mt-10">
            <div className="absolute left-[8%] right-[8%] top-[25px] hidden h-px bg-white/[0.08] lg:block" />

            <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {stages.map((stage) => (
                <div
                  key={stage.number}
                  className="
                    relative rounded-[19px]
                    border border-white/[0.07]
                    bg-white/[0.035]
                    p-5
                    backdrop-blur-xl
                  "
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-8 items-center justify-center rounded-xl border border-[#4be0d4]/12 bg-[#4be0d4]/[0.07] text-[9px] font-bold text-[#6fe6dd]">
                      {stage.number}
                    </span>

                    <span className="size-1.5 rounded-full bg-[#4ee0d5] shadow-[0_0_12px_rgba(78,224,213,0.7)]" />
                  </div>

                  <h3 className="mt-7 text-[15px] font-semibold tracking-[-0.025em] text-white/85">
                    {stage.title}
                  </h3>

                  <p className="mt-2 text-[12px] leading-6 text-white/65">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function EngagementSafeguard() {
  return (
    <section className="mt-14 lg:mt-16" aria-labelledby="service-security-note">
      <div className="flex flex-col gap-5 rounded-[22px] border border-[#dce8eb] bg-white/70 p-5 shadow-[0_14px_42px_rgba(7,23,34,0.025)] sm:flex-row sm:items-start sm:justify-between sm:p-6">
        <div className="flex max-w-[900px] items-start gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-[#15c8bb]/[0.06] text-[#0b958a]">
            <ShieldCheck className="size-[18px]" strokeWidth={1.7} />
          </span>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0a9188]">
              Security & Engagement Readiness
            </p>

            <h2
              id="service-security-note"
              className="mt-2 text-[17px] font-semibold tracking-[-0.025em] text-[#17343f]"
            >
              Service scope comes before sensitive-data access.
            </h2>

            <p className="mt-3 text-[13px] leading-6 text-[#657a84]">
              Where an engagement involves protected health information,
              required agreements, approved access, security responsibilities
              and appropriate information-handling arrangements should be
              established before operational PHI access begins.
            </p>
          </div>
        </div>

        <Link
          href="/security"
          className="group inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 rounded-[13px] border border-black/[0.07] bg-white px-4 text-[12px] font-semibold text-[#23414c] transition-colors hover:bg-[#f9fbfb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b958a]/35 focus-visible:ring-offset-2"
        >
          Security & Privacy
          <ArrowRight
            className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            strokeWidth={1.8}
          />
        </Link>
      </div>
    </section>
  );
}

function AssessmentCTA() {
  return (
    <section className="mt-20 text-center lg:mt-24">
      <div className="mx-auto max-w-[760px]">
        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0b9188]">
          Not Sure Where To Start?
        </p>

        <h2 className="mt-4 text-[clamp(2.4rem,4.3vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.058em] text-[#0a2631]">
          Start with the revenue cycle,
          <span className="block text-[#71868f]">
            not a service list.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-7 text-[#71858e]">
          Share your current operating model and
          revenue-cycle challenges so we can
          understand where support may be most useful.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={siteConfig.routes.assessment}
            className="
              group inline-flex min-h-[54px]
              items-center justify-center
              gap-2.5 rounded-[15px]
              bg-[#071c27] px-6
              text-[13px] font-semibold
              !text-white
              shadow-[0_16px_42px_rgba(5,28,38,0.18)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_22px_54px_rgba(5,28,38,0.24)]
            "
          >
            Request an RCM Assessment

            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>

          <Link
            href={siteConfig.routes.contact}
            className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-[15px] border border-black/[0.075] bg-white/75 px-6 text-[13px] font-semibold text-[#23414c] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b958a]/35 focus-visible:ring-offset-2"
          >
            Contact claryden rcm
          </Link>
        </div>

        <p className="mx-auto mt-5 max-w-[620px] text-[11px] leading-5 text-[#84969e]">
          Please do not submit patient records or protected health information
          through public website forms.
        </p>
      </div>
    </section>
  );
}