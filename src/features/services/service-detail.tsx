import Link from "next/link";

import {
  ArrowRight,
  Banknote,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  KeyRound,
  ReceiptText,
  ShieldCheck,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

import {
  getServiceBySlug,
  type ServiceDefinition,
  type ServiceSlug,
} from "./services-data";

/* -------------------------------------------------------------------------- */
/* Shared styles                                                              */
/* -------------------------------------------------------------------------- */

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b7775] focus-visible:ring-offset-2";

const eyebrow =
  "text-xs font-bold uppercase leading-5 tracking-[0.14em] text-[#0b716e]";

const sectionTitle =
  "text-[clamp(2rem,3.4vw,3.5rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#0b2732]";

const bodyText =
  "text-base leading-7 text-[#405966] sm:text-lg sm:leading-8";

const cardText =
  "text-base leading-7 text-[#405966]";

const primaryAction =
  "group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-2xl bg-[#071c27] px-6 py-3.5 text-center text-base font-semibold !text-white shadow-[0_12px_30px_rgba(5,28,38,0.14)] transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#103744] hover:shadow-[0_16px_36px_rgba(5,28,38,0.20)] sm:w-auto motion-reduce:transform-none motion-reduce:transition-none " +
  focusRing;

const secondaryAction =
  "inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-[#17343f]/15 bg-white px-6 py-3.5 text-center text-base font-semibold !text-[#17343f] transition-[border-color,background-color] duration-200 hover:border-[#0b7775]/30 hover:bg-[#edf7f6] sm:w-auto motion-reduce:transition-none " +
  focusRing;

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

const serviceIcons: Record<ServiceSlug, LucideIcon> = {
  "medical-billing": FileCheck2,
  "ar-management": Banknote,
  "denial-management": FileSearch,
  "payment-posting": ReceiptText,
  "eligibility-verification": ShieldCheck,
  "prior-authorization": KeyRound,
  credentialing: ClipboardCheck,
  "medical-coding": Stethoscope,
};

function getServiceIcon(slug: string): LucideIcon {
  return serviceIcons[slug as ServiceSlug] ?? FileCheck2;
}

/* -------------------------------------------------------------------------- */
/* Service detail                                                             */
/* -------------------------------------------------------------------------- */

interface ServiceDetailProps {
  service: ServiceDefinition;
}

export function ServiceDetail({
  service,
}: ServiceDetailProps) {
  const Icon = getServiceIcon(service.slug);

  const relatedServices = service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter(
      (item): item is ServiceDefinition =>
        item !== undefined
    );

  return (
   <div className="relative isolate overflow-hidden ...">
      <PageBackground />

      <Container width="wide">
        <div className="relative min-w-0">
          <Hero service={service} icon={Icon} />

          <Overview service={service} />

          <Capabilities service={service} />

          <Process service={service} />

          <RelatedServices services={relatedServices} />

          <AssessmentCTA service={service} />
        </div>
      </Container>
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
      <div className="absolute -left-56 top-16 size-[580px] rounded-full bg-[#15c8bb]/[0.05] blur-[155px]" />

      <div className="absolute -right-56 top-32 size-[620px] rounded-full bg-[#4c8dff]/[0.05] blur-[165px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(7,23,34,0.019)_1px,transparent_1px),linear-gradient(90deg,rgba(7,23,34,0.019)_1px,transparent_1px)] bg-[size:68px_68px] opacity-40 [mask-image:radial-gradient(circle_at_top,black,transparent_82%)]" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Shared assessment button                                                   */
/* -------------------------------------------------------------------------- */

function AssessmentButton() {
  return (
    <Link
      href={siteConfig.routes.assessment}
      className={primaryAction}
    >
      <span className="!text-white">
        Request an RCM Assessment
      </span>

      <ArrowRight
        aria-hidden="true"
        className="size-4 shrink-0 !text-white transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
        strokeWidth={1.8}
      />
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

function Hero({
  service,
  icon: Icon,
}: {
  service: ServiceDefinition;
  icon: LucideIcon;
}) {
  return (
    <section aria-labelledby="service-page-title">
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
            <Link
              href={siteConfig.routes.services}
              className={`rounded-sm transition-colors hover:text-[#075e63] ${focusRing}`}
            >
              Services
            </Link>
          </li>

          <li aria-hidden="true">
            <ChevronRight
              className="size-3.5"
              strokeWidth={1.8}
            />
          </li>

          <li className="min-w-0 font-medium text-[#17343f]">
            <span aria-current="page">
              {service.shortTitle}
            </span>
          </li>
        </ol>
      </nav>

      <div className="mt-8 grid min-w-0 gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-12 xl:gap-16">
        <div className="min-w-0">
          <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#17343f]/10 bg-white/90 px-3.5 py-2 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-[#31505d] shadow-sm">
            <Icon
              aria-hidden="true"
              className="size-4 shrink-0 text-[#0b7775]"
              strokeWidth={1.8}
            />

            <span>{service.eyebrow}</span>
          </div>

          <h1
            id="service-page-title"
            className="mt-6 max-w-[900px] text-[clamp(2.25rem,5vw,4.75rem)] font-semibold leading-[1.06] tracking-[-0.05em] text-[#071722] [overflow-wrap:break-word]"
          >
            {service.title}
          </h1>

          <p
            className={`mt-6 max-w-[680px] ${bodyText}`}
          >
            {service.heroDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <AssessmentButton />

            <Link
              href={siteConfig.routes.contact}
              className={secondaryAction}
            >
              Talk to Our Team
            </Link>
          </div>
        </div>

        <HeroPanel service={service} icon={Icon} />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Service focus panel                                                        */
/* -------------------------------------------------------------------------- */

function HeroPanel({
  service,
  icon: Icon,
}: {
  service: ServiceDefinition;
  icon: LucideIcon;
}) {
  return (
    <aside
      aria-label={`${service.shortTitle} service focus`}
      className="relative min-w-0 overflow-hidden rounded-[24px] border border-[#17343f] bg-[#071c27] p-5 text-white shadow-[0_24px_70px_rgba(7,23,34,0.12)] sm:rounded-[28px] sm:p-7 lg:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-[270px] rounded-full bg-[#4c8dff]/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-[-100px] size-[250px] rounded-full bg-[#15c8bb]/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.023)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.023)_1px,transparent_1px)] bg-[size:52px_52px] opacity-35"
      />

      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="flex size-12 items-center justify-center rounded-2xl border border-[#55e1d6]/15 bg-[#55e1d6]/10 text-[#8ce9e1]">
            <Icon
              aria-hidden="true"
              className="size-5"
              strokeWidth={1.7}
            />
          </span>

          <span className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold leading-5 text-white/80">
            {service.category}
          </span>
        </div>

        <p className="mt-8 text-xs font-bold uppercase leading-5 tracking-[0.14em] text-[#8ce9e1]">
          Service Focus
        </p>

        <h2 className="mt-3 text-[clamp(1.65rem,2.4vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.04em] !text-white">
          Structured execution.
          <span className="mt-1 block !text-white/80">
            Clear ownership.
          </span>
        </h2>

        <ul className="mt-7 space-y-2.5">
          {service.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5"
            >
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#45ddd1]/10 text-[#8ce9e1]">
                <Check
                  aria-hidden="true"
                  className="size-4"
                  strokeWidth={1.8}
                />
              </span>

              <span className="min-w-0 text-base font-medium leading-6 !text-white/85">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/* Overview                                                                   */
/* -------------------------------------------------------------------------- */

function Overview({
  service,
}: {
  service: ServiceDefinition;
}) {
  return (
    <section
      id="service-overview"
      aria-labelledby="service-overview-title"
      className="mt-16 border-y border-[#17343f]/10 py-12 sm:mt-20 sm:py-14 lg:mt-24 lg:py-16"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-12">
        <div>
          <p className={eyebrow}>
            Service Overview
          </p>

          <h2
            id="service-overview-title"
            className={`mt-4 max-w-[480px] ${sectionTitle}`}
          >
            Built around the workflow.
          </h2>
        </div>

        <p className={`max-w-[850px] ${bodyText}`}>
          {service.overview}
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Capabilities                                                               */
/* -------------------------------------------------------------------------- */

function Capabilities({
  service,
}: {
  service: ServiceDefinition;
}) {
  return (
    <section
      id="service-capabilities"
      aria-labelledby="service-capabilities-title"
      className="mt-16 sm:mt-20 lg:mt-24"
    >
      <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-12">
        <div>
          <p className={eyebrow}>
            What We Support
          </p>

          <h2
            id="service-capabilities-title"
            className={`mt-4 max-w-[540px] ${sectionTitle}`}
          >
            Operational
            <span className="block text-[#526b77]">
              capabilities.
            </span>
          </h2>

          <p className="mt-5 max-w-[480px] text-base leading-7 text-[#405966]">
            Final responsibilities are defined during discovery
            and onboarding based on the practice&apos;s systems,
            specialty and service scope.
          </p>
        </div>

        <ul className="grid min-w-0 gap-4 sm:grid-cols-2">
          {service.deliverables.map((item, index) => (
            <li
              key={item.title}
              className="min-w-0"
            >
              <article className="relative h-full overflow-hidden rounded-[22px] border border-[#17343f]/10 bg-white p-5 shadow-[0_12px_36px_rgba(7,23,34,0.035)] sm:p-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-14 -top-14 size-[150px] rounded-full bg-[#15c8bb]/[0.05] blur-[70px]"
                />

                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-[#e8f7f5] text-sm font-bold text-[#0b716e]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <Check
                      aria-hidden="true"
                      className="size-5 text-[#0b7775]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold leading-snug tracking-[-0.025em] text-[#17343f]">
                    {item.title}
                  </h3>

                  <p className={`mt-3 ${cardText}`}>
                    {item.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Process                                                                    */
/* -------------------------------------------------------------------------- */

function Process({
  service,
}: {
  service: ServiceDefinition;
}) {
  return (
    <section
      id="service-process"
      aria-labelledby="service-process-title"
      className="mt-16 sm:mt-20 lg:mt-24"
    >
      <div className="relative overflow-hidden rounded-[24px] border border-[#17343f] bg-[#071c27] p-5 text-white shadow-[0_24px_70px_rgba(7,23,34,0.12)] sm:rounded-[28px] sm:p-8 lg:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-20 size-[280px] rounded-full bg-[#19cabb]/10 blur-[105px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-[-100px] size-[320px] rounded-full bg-[#4c8dff]/[0.08] blur-[115px]"
        />

        <div className="relative">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-12">
            <div>
              <p className="text-xs font-bold uppercase leading-5 tracking-[0.14em] text-[#8ce9e1]">
                How It Works
              </p>

              <h2
                id="service-process-title"
                className="mt-4 text-[clamp(2rem,3.7vw,3.8rem)] font-semibold leading-[1.12] tracking-[-0.045em] !text-white"
              >
                A defined operating
                <span className="block !text-white/80">
                  workflow.
                </span>
              </h2>
            </div>

            <p className="max-w-[570px] text-base leading-7 !text-white/80 lg:justify-self-end">
              Scope, responsibilities, access, escalation procedures
              and reporting are established before ongoing operations
              begin.
            </p>
          </div>

          <ol className="mt-8 grid gap-4 sm:grid-cols-2 xl:mt-10 xl:grid-cols-4">
            {service.process.map((step, index) => (
              <li
                key={`${index}-${step.title}`}
                className="min-w-0 rounded-[20px] border border-white/10 bg-white/[0.045] p-5 sm:p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-xl border border-[#4ee1d5]/15 bg-[#4ee1d5]/10 text-sm font-bold text-[#8ce9e1]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-lg font-semibold !text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-base leading-7 !text-white/80">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Related services                                                           */
/* -------------------------------------------------------------------------- */

function RelatedServices({
  services,
}: {
  services: ServiceDefinition[];
}) {
  if (services.length === 0) return null;

  return (
    <section
      id="service-related"
      aria-labelledby="service-related-title"
      className="mt-16 sm:mt-20 lg:mt-24"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className={eyebrow}>
            Related Services
          </p>

          <h2
            id="service-related-title"
            className={`mt-4 ${sectionTitle}`}
          >
            Connected capabilities.
          </h2>
        </div>

        <Link
          href={siteConfig.routes.services}
          className={`group inline-flex min-h-11 w-fit items-center gap-2 rounded-sm text-sm font-semibold text-[#075e63] transition-colors hover:text-[#071c27] ${focusRing}`}
        >
          All services

          <ArrowRight
            aria-hidden="true"
            className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
            strokeWidth={1.8}
          />
        </Link>
      </div>

      <ul className="mt-7 grid min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((related) => {
          const Icon = getServiceIcon(related.slug);

          return (
            <li
              key={related.slug}
              className="min-w-0"
            >
              <Link
                href={`/services/${related.slug}`}
                className={`group flex h-full min-w-0 flex-col rounded-[22px] border border-[#17343f]/10 bg-white p-5 shadow-[0_10px_30px_rgba(7,23,34,0.025)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[#0b7775]/30 hover:shadow-[0_16px_40px_rgba(7,23,34,0.06)] sm:p-6 motion-reduce:transform-none motion-reduce:transition-none ${focusRing}`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-[#e8f7f5] text-[#0b7775]">
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.8}
                    />
                  </span>

                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 shrink-0 text-[#526b77] transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
                    strokeWidth={1.8}
                  />
                </span>

                <h3 className="mt-6 text-lg font-semibold leading-snug tracking-[-0.025em] text-[#17343f]">
                  {related.shortTitle}
                </h3>

                <p className={`mt-3 ${cardText}`}>
                  {related.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#075e63]">
                  Explore service

                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
                    strokeWidth={1.8}
                  />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Assessment CTA                                                             */
/* -------------------------------------------------------------------------- */

function AssessmentCTA({
  service,
}: {
  service: ServiceDefinition;
}) {
  return (
    <section
      id="service-assessment"
      aria-labelledby="service-assessment-title"
      className="mt-16 sm:mt-20 lg:mt-24"
    >
      <div className="relative overflow-hidden rounded-[24px] border border-[#17343f]/10 bg-white px-5 py-10 text-center shadow-[0_18px_55px_rgba(7,23,34,0.04)] sm:rounded-[28px] sm:px-8 sm:py-12 lg:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 size-[280px] rounded-full bg-[#15c8bb]/[0.06] blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -bottom-24 size-[300px] rounded-full bg-[#4c8dff]/[0.05] blur-[110px]"
        />

        <div className="relative mx-auto max-w-[760px]">
          <p className={eyebrow}>
            Revenue Cycle Assessment
          </p>

          <h2
            id="service-assessment-title"
            className="mt-4 text-[clamp(2rem,4vw,4rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#0b2732]"
          >
            Need help with{" "}
            {service.shortTitle.toLowerCase()}?
          </h2>

          <p
            className={`mx-auto mt-5 max-w-[620px] ${bodyText}`}
          >
            Start with your current workflow, challenges and operating
            model. We can then determine whether this service fits
            the practice&apos;s requirements.
          </p>

          <div className="mt-8 flex justify-center">
            <AssessmentButton />
          </div>
        </div>
      </div>
    </section>
  );
}