import type { Metadata } from "next";
import Link from "next/link";

import {
  Activity,
  ArrowRight,
  Bone,
  Brain,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import {
  specialties,
  type SpecialtySlug,
} from "@/features/specialties/specialties-data";

export const metadata: Metadata = {
  title: "Medical Billing & RCM by Specialty",

  description:
    "Explore claryden rcm revenue cycle management support for behavioral health, family medicine, internal medicine, dermatology, cardiology, orthopedics, physical therapy and pain management practices.",

  alternates: {
    canonical: "/specialties",
  },

  openGraph: {
    title:
      "Medical Billing & RCM by Specialty | claryden rcm",

    description:
      "Specialty-focused revenue cycle support for modern healthcare practices.",

    url: `${siteConfig.url}/specialties`,

    type: "website",
  },
};

const specialtyIcons: Record<
  SpecialtySlug,
  typeof Stethoscope
> = {
  "behavioral-health": Brain,
  "family-medicine": UserRound,
  "internal-medicine": Stethoscope,
  dermatology: Sparkles,
  cardiology: HeartPulse,
  orthopedics: Bone,
  "physical-therapy": Activity,
  "pain-management": ShieldCheck,
};

export default function SpecialtiesPage() {
  return (
    <main className="relative overflow-hidden bg-[#f7fafb] pb-24 pt-[132px] sm:pt-[142px] lg:pb-32 lg:pt-[152px]">
      <PageBackground />

      <Container width="wide">
        <div className="relative">
          <Hero />

          <SpecialtyDirectory />

          <SupportModel />

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
      <div className="absolute -left-56 top-16 size-[590px] rounded-full bg-[#15c8bb]/[0.06] blur-[160px]" />

      <div className="absolute -right-60 top-36 size-[630px] rounded-full bg-[#4c8dff]/[0.06] blur-[170px]" />

      <div
        className="
          absolute inset-0 opacity-45
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
    <section className="mx-auto max-w-[1040px] text-center">
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
        <Stethoscope
          className="size-3.5 text-[#0b958b]"
          strokeWidth={1.8}
        />

        Specialty Revenue Cycle
      </div>

      <h1
        className="
          mt-6
          text-[clamp(3.2rem,6vw,6.6rem)]
          font-semibold
          leading-[0.92]
          tracking-[-0.068em]
          text-[#071722]
        "
      >
        Revenue cycle support shaped
        <span className="mt-2 block bg-gradient-to-r from-[#104d59] via-[#078e94] to-[#357be4] bg-clip-text text-transparent">
          around specialty workflows.
        </span>
      </h1>

      <p className="mx-auto mt-7 max-w-[780px] text-[15px] leading-8 text-[#657a84] sm:text-[17px]">
        Different specialties face different payer,
        documentation, authorization and billing
        requirements. Our operating approach is
        configured around the practice&apos;s actual
        workflow and service scope.
      </p>
    </section>
  );
}

function SpecialtyDirectory() {
  return (
    <section className="mt-20 lg:mt-24">
      <div className="flex flex-col gap-5 border-b border-black/[0.065] pb-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0a9188]">
            Practice Specialties
          </p>

          <h2 className="mt-3 text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1] tracking-[-0.055em] text-[#0b2732]">
            Specialty-focused workflows.
          </h2>
        </div>

        <p className="max-w-[520px] text-[13px] leading-6 text-[#748790] sm:text-right">
          Service scope depends on the practice,
          payer mix, systems and the capabilities
          confirmed during discovery.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {specialties.map((specialty) => (
          <SpecialtyCard
            key={specialty.slug}
            specialty={specialty}
          />
        ))}
      </div>
    </section>
  );
}

function SpecialtyCard({
  specialty,
}: {
  specialty: (typeof specialties)[number];
}) {
  const Icon =
    specialtyIcons[
      specialty.slug as SpecialtySlug
    ];

  return (
    <Link
      href={`/specialties/${specialty.slug}`}
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

        <span className="rounded-full border border-black/[0.055] bg-[#f8fafb] px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-[#83969e]">
          {specialty.category}
        </span>
      </div>

      <div className="relative mt-9">
        <h3 className="text-[21px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#112e39]">
          {specialty.shortTitle}
        </h3>

        <p className="mt-4 text-[12px] leading-6 text-[#70848d]">
          {specialty.description}
        </p>
      </div>

      <div className="relative mt-auto pt-8">
        <div className="flex items-center justify-between border-t border-black/[0.055] pt-4">
          <span className="text-[10px] font-semibold text-[#49616b]">
            Explore specialty
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

function SupportModel() {
  const areas = [
    {
      number: "01",
      title: "Patient Access",
      description:
        "Eligibility, benefits and authorization workflows.",
    },
    {
      number: "02",
      title: "Documentation",
      description:
        "Billing coordination around approved clinical information.",
    },
    {
      number: "03",
      title: "Claims",
      description:
        "Claim preparation, validation and payer submission.",
    },
    {
      number: "04",
      title: "Resolution",
      description:
        "Payments, denials and outstanding A/R follow-up.",
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
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#71e6dd]">
                Specialty Operating Model
              </p>

              <h2 className="mt-4 max-w-[650px] text-[clamp(2.5rem,4vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.06em]">
                Specialty context.
                <span className="block text-white/50">
                  One connected cycle.
                </span>
              </h2>
            </div>

            <p className="max-w-[600px] text-[13px] leading-7 text-white/45 lg:justify-self-end">
              We align administrative RCM workflows
              around the practice&apos;s specialty,
              payer environment and existing systems.
              Clinical decision-making remains with
              qualified healthcare professionals.
            </p>
          </div>

          <div className="relative mt-10">
            <div className="absolute left-[8%] right-[8%] top-[25px] hidden h-px bg-white/[0.08] lg:block" />

            <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {areas.map((area) => (
                <div
                  key={area.number}
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
                      {area.number}
                    </span>

                    <span className="size-1.5 rounded-full bg-[#4ee0d5] shadow-[0_0_12px_rgba(78,224,213,0.7)]" />
                  </div>

                  <h3 className="mt-7 text-[15px] font-semibold tracking-[-0.025em] text-white/85">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-white/35">
                    {area.description}
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

function AssessmentCTA() {
  return (
    <section className="mt-20 text-center lg:mt-24">
      <div className="mx-auto max-w-[760px]">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0b9188]">
          Practice Assessment
        </p>

        <h2 className="mt-4 text-[clamp(2.4rem,4.3vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.058em] text-[#0a2631]">
          Your specialty is only
          <span className="block text-[#71868f]">
            part of the picture.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-7 text-[#71858e]">
          Tell us about your practice, billing model
          and revenue-cycle challenges so we can
          understand where support may be useful.
        </p>

        <div className="mt-7">
          <Link
            href={siteConfig.routes.assessment}
            className="
              group inline-flex min-h-[54px]
              items-center justify-center gap-2.5
              rounded-[15px]
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
        </div>
      </div>
    </section>
  );
}