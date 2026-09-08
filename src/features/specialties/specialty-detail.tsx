import Link from "next/link";

import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Bone,
  Brain,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import {
  getServiceBySlug,
  type ServiceDefinition,
} from "@/features/services/services-data";

import type { SpecialtyDefinition } from "./specialties-data";

const specialtyIcons: Record<string, LucideIcon> = {
  "behavioral-health": Brain,
  "family-medicine": UserRound,
  "internal-medicine": Stethoscope,
  dermatology: Sparkles,
  cardiology: HeartPulse,
  orthopedics: Bone,
  "physical-therapy": Activity,
  "pain-management": ShieldCheck,
};

interface SpecialtyDetailProps {
  specialty: SpecialtyDefinition;
}

export function SpecialtyDetail({
  specialty,
}: SpecialtyDetailProps) {
  const Icon =
    specialtyIcons[specialty.slug] ?? Stethoscope;

  const relatedServices = specialty.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter(
      (service): service is ServiceDefinition =>
        service !== undefined
    );

  return (
    <section className="relative overflow-hidden bg-[#f7fafb] pb-24 pt-[132px] sm:pt-[142px] lg:pb-32 lg:pt-[152px]">
      <PageBackground />

      <Container width="wide">
        <div className="relative">
          <Hero specialty={specialty} icon={Icon} />

          <Overview specialty={specialty} />

          <FocusAreas specialty={specialty} />

          <OperatingApproach />

          <RelatedServices services={relatedServices} />

          <AssessmentCTA specialty={specialty} />
        </div>
      </Container>
    </section>
  );
}

function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-56 top-16 size-[580px] rounded-full bg-[#15c8bb]/[0.06] blur-[155px]" />

      <div className="absolute -right-56 top-32 size-[620px] rounded-full bg-[#4c8dff]/[0.06] blur-[165px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(7,23,34,0.019)_1px,transparent_1px),linear-gradient(90deg,rgba(7,23,34,0.019)_1px,transparent_1px)] bg-[size:68px_68px] opacity-45 [mask-image:radial-gradient(circle_at_top,black,transparent_82%)]" />
    </div>
  );
}

function Hero({
  specialty,
  icon: Icon,
}: {
  specialty: SpecialtyDefinition;
  icon: LucideIcon;
}) {
  return (
    <section>
      <Link
        href="/specialties"
        className="group inline-flex items-center gap-2 text-[11px] font-semibold text-[#71858e] transition-colors hover:text-[#17343f]"
      >
        <ArrowLeft
          className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1"
          strokeWidth={1.8}
        />
        All Specialties
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-black/[0.07] bg-white/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#35515c] shadow-[inset_0_1px_rgba(255,255,255,0.9)] backdrop-blur-xl">
            <Icon
              className="size-3.5 text-[#0b958b]"
              strokeWidth={1.8}
            />
            {specialty.category}
          </div>

          <h1 className="mt-6 max-w-[900px] text-[clamp(3rem,5.5vw,6rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[#071722]">
            {specialty.title}
          </h1>

          <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-[#627781]">
            {specialty.heroDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteConfig.routes.assessment}
              className="group inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-[15px] bg-[#071c27] px-6 text-[13px] font-semibold !text-white shadow-[0_16px_42px_rgba(5,28,38,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(5,28,38,0.24)]"
            >
              Request an RCM Assessment
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.8}
              />
            </Link>

            <Link
              href={siteConfig.routes.contact}
              className="inline-flex min-h-[54px] items-center justify-center rounded-[15px] border border-black/[0.075] bg-white/75 px-6 text-[13px] font-semibold text-[#23414c] backdrop-blur-xl transition-all hover:bg-white"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>

        <HeroPanel specialty={specialty} icon={Icon} />
      </div>
    </section>
  );
}

function HeroPanel({
  specialty,
  icon: Icon,
}: {
  specialty: SpecialtyDefinition;
  icon: LucideIcon;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[#0c2934] bg-[#071722] p-6 text-white shadow-[0_32px_90px_rgba(7,23,34,0.15)] sm:p-7">
      <div className="absolute -right-24 -top-24 size-[270px] rounded-full bg-[#4c8dff]/[0.11] blur-[100px]" />

      <div className="absolute -left-24 bottom-[-100px] size-[250px] rounded-full bg-[#15c8bb]/[0.11] blur-[100px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.023)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.023)_1px,transparent_1px)] bg-[size:52px_52px] opacity-35" />

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <span className="flex size-12 items-center justify-center rounded-[15px] border border-[#55e1d6]/12 bg-[#55e1d6]/[0.07] text-[#70e7de]">
            <Icon className="size-5" strokeWidth={1.7} />
          </span>

          <span className="rounded-full border border-white/[0.07] bg-white/[0.04] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-white/38">
            Specialty RCM
          </span>
        </div>

        <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.15em] text-[#6de3da]">
          Workflow Focus
        </p>

        <h2 className="mt-3 text-[26px] font-semibold leading-[1.05] tracking-[-0.045em]">
          Specialty context.
          <span className="block text-white/45">
            Connected operations.
          </span>
        </h2>

        <div className="mt-7 space-y-2.5">
          {specialty.focusAreas.map((area) => (
            <div
              key={area.title}
              className="flex items-center gap-3 rounded-[14px] border border-white/[0.055] bg-white/[0.03] px-3.5 py-3"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#45ddd1]/[0.08] text-[#67e4db]">
                <BadgeCheck
                  className="size-3.5"
                  strokeWidth={1.8}
                />
              </span>

              <span className="text-[11px] font-medium text-white/58">
                {area.title}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[10px] leading-5 text-white/30">
          Service scope and personnel requirements are
          confirmed during discovery.
        </p>
      </div>
    </div>
  );
}

function Overview({
  specialty,
}: {
  specialty: SpecialtyDefinition;
}) {
  return (
    <section className="mt-20 border-y border-black/[0.065] py-14 lg:mt-24 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0b9188]">
            Specialty Overview
          </p>

          <h2 className="mt-3 max-w-[430px] text-[clamp(2.1rem,3.2vw,3.6rem)] font-semibold leading-[1] tracking-[-0.055em] text-[#0b2732]">
            Built around the practice.
          </h2>
        </div>

        <p className="max-w-[850px] text-[15px] leading-8 text-[#657a84]">
          {specialty.overview}
        </p>
      </div>
    </section>
  );
}

function FocusAreas({
  specialty,
}: {
  specialty: SpecialtyDefinition;
}) {
  return (
    <section className="mt-20 lg:mt-24">
      <div className="grid gap-7 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0b9188]">
            Revenue Cycle Focus
          </p>

          <h2 className="mt-4 text-[clamp(2.3rem,3.8vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.058em] text-[#0b2732]">
            Where workflows
            <span className="block text-[#71858e]">
              need attention.
            </span>
          </h2>

          <p className="mt-5 max-w-[430px] text-[13px] leading-7 text-[#748891]">
            The operating scope is configured around
            the practice&apos;s actual services, payer
            requirements, systems and available
            expertise.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {specialty.focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="relative min-h-[210px] overflow-hidden rounded-[21px] border border-black/[0.065] bg-white/80 p-5 shadow-[0_14px_42px_rgba(7,23,34,0.03)] backdrop-blur-xl sm:p-6"
            >
              <div className="absolute -right-14 -top-14 size-[150px] rounded-full bg-[#15c8bb]/[0.05] blur-[70px]" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex size-8 items-center justify-center rounded-xl bg-[#15c8bb]/[0.065] text-[9px] font-bold text-[#0a958a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <BadgeCheck
                    className="size-4 text-[#0c9b90]"
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="mt-7 text-[16px] font-semibold tracking-[-0.025em] text-[#17343f]">
                  {area.title}
                </h3>

                <p className="mt-3 text-[11px] leading-6 text-[#748891]">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OperatingApproach() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description:
        "Review the specialty, practice systems, payer mix and current revenue-cycle challenges.",
    },
    {
      number: "02",
      title: "Define",
      description:
        "Agree on service scope, responsibilities, access requirements and escalation procedures.",
    },
    {
      number: "03",
      title: "Coordinate",
      description:
        "Establish the administrative workflows and handoffs required for the engagement.",
    },
    {
      number: "04",
      title: "Review",
      description:
        "Use agreed reporting and operational reviews to identify unresolved issues and improvement opportunities.",
    },
  ];

  return (
    <section className="mt-20 lg:mt-24">
      <div className="relative overflow-hidden rounded-[28px] border border-[#0c2934] bg-[#071722] p-6 text-white shadow-[0_30px_90px_rgba(7,23,34,0.14)] sm:p-8 lg:p-10">
        <div className="absolute -left-24 -top-20 size-[280px] rounded-full bg-[#19cabb]/[0.11] blur-[105px]" />

        <div className="absolute -right-24 bottom-[-100px] size-[320px] rounded-full bg-[#4c8dff]/[0.09] blur-[115px]" />

        <div className="relative">
          <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6fe5dc]">
                Operating Approach
              </p>

              <h2 className="mt-4 text-[clamp(2.4rem,4vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.06em]">
                Defined around
                <span className="block text-white/45">
                  your workflow.
                </span>
              </h2>
            </div>

            <p className="max-w-[570px] text-[13px] leading-7 text-white/43 lg:justify-self-end">
              We begin by understanding the
              practice&apos;s requirements before
              defining the appropriate service scope
              and operating responsibilities.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[19px] border border-white/[0.07] bg-white/[0.035] p-5 backdrop-blur-xl"
              >
                <span className="flex size-8 items-center justify-center rounded-xl border border-[#4ee1d5]/12 bg-[#4ee1d5]/[0.07] text-[9px] font-bold text-[#6de7dd]">
                  {step.number}
                </span>

                <h3 className="mt-7 text-[14px] font-semibold text-white/82">
                  {step.title}
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-white/40">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedServices({
  services,
}: {
  services: ServiceDefinition[];
}) {
  if (services.length === 0) return null;

  return (
    <section className="mt-20 lg:mt-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0b9188]">
            Connected Services
          </p>

          <h2 className="mt-3 text-[clamp(2rem,3vw,3.4rem)] font-semibold tracking-[-0.055em] text-[#0b2732]">
            Explore relevant capabilities.
          </h2>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#58707a]"
        >
          All services
          <ArrowRight className="size-3.5" strokeWidth={1.8} />
        </Link>
      </div>

      <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group flex flex-col rounded-[20px] border border-black/[0.065] bg-white/75 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#15c8bb]/20 hover:bg-white"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-[13px] bg-[#15c8bb]/[0.06] text-[#0b958a]">
                <BadgeCheck
                  className="size-[17px]"
                  strokeWidth={1.7}
                />
              </span>

              <ArrowRight
                className="size-4 text-[#91a1a8] transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.7}
              />
            </div>

            <h3 className="mt-6 text-[15px] font-semibold tracking-[-0.025em] text-[#17343f]">
              {service.shortTitle}
            </h3>

            <p className="mt-2 text-[11px] leading-5 text-[#7b8e96]">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function AssessmentCTA({
  specialty,
}: {
  specialty: SpecialtyDefinition;
}) {
  return (
    <section className="mt-20 text-center lg:mt-24">
      <div className="mx-auto max-w-[760px]">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0b9188]">
          Practice Assessment
        </p>

        <h2 className="mt-4 text-[clamp(2.4rem,4.3vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.058em] text-[#0a2631]">
          Let&apos;s understand
          <span className="block text-[#71868f]">
            your revenue cycle.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-7 text-[#71858e]">
          Share your current billing model and
          challenges in {specialty.shortTitle.toLowerCase()}.
          We can then discuss which RCM workflows may
          benefit from additional support.
        </p>

        <Link
          href={siteConfig.routes.assessment}
          className="group mt-7 inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-[15px] bg-[#071c27] px-6 text-[13px] font-semibold !text-white shadow-[0_16px_42px_rgba(5,28,38,0.18)] transition-all duration-300 hover:-translate-y-0.5"
        >
          Request an RCM Assessment
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={1.8}
          />
        </Link>
      </div>
    </section>
  );
}