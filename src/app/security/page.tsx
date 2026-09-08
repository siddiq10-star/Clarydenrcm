import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ClipboardCheck,
  FileKey2,
  FileText,
  Fingerprint,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
  ShieldHalf,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const pageTitle =
  "HIPAA, Security & Privacy for RCM Operations | Kinz HealthOps";

const pageDescription =
  "Review Kinz HealthOps' approach to HIPAA-related responsibilities, Business Associate Agreements (BAAs), privacy, security safeguards, minimum-necessary access, incident response and responsible revenue-cycle operations.";

const pageUrl = new URL("/security", siteConfig.url).toString();

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

const securityAreas = [
  {
    number: "01",
    icon: FileText,
    title: "Contractual safeguards",
    description:
      "Required agreements, including a Business Associate Agreement where applicable, must be established before protected health information is accessed.",
    detail: "Agreements & permitted use",
  },
  {
    number: "02",
    icon: Fingerprint,
    title: "Controlled access",
    description:
      "Access should be limited to authorized personnel with a legitimate operational need, using approved accounts, appropriate authentication and defined access responsibilities.",
    detail: "Access & authentication",
  },
  {
    number: "03",
    icon: LockKeyhole,
    title: "Secure information handling",
    description:
      "Protected information must be handled through approved systems and communication channels, with appropriate safeguards for transmission, storage and access.",
    detail: "Approved systems & channels",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Workforce readiness",
    description:
      "Personnel must receive appropriate privacy and security training, understand their responsibilities and follow the procedures established for the engagement.",
    detail: "Training & accountability",
  },
  {
    number: "05",
    icon: ShieldHalf,
    title: "Monitoring & incident response",
    description:
      "Engagements require defined procedures for identifying, escalating and responding to security incidents, including applicable notification responsibilities.",
    detail: "Response & escalation",
  },
  {
    number: "06",
    icon: FileKey2,
    title: "Vendor & data governance",
    description:
      "Third-party access, retention, disposal and other information-handling requirements must be reviewed and addressed through appropriate agreements and controls.",
    detail: "Oversight & data lifecycle",
  },
] as const;

const readinessSteps = [
  {
    number: "01",
    title: "Understand the environment",
    description:
      "Review the practice's systems, service scope, information flows and applicable privacy and security requirements.",
  },
  {
    number: "02",
    title: "Establish agreements",
    description:
      "Complete the required contractual arrangements and define permitted uses, responsibilities and relevant subcontractor requirements.",
  },
  {
    number: "03",
    title: "Confirm safeguards",
    description:
      "Review approved access, workforce readiness, communication channels and the safeguards required for the engagement.",
  },
  {
    number: "04",
    title: "Authorize operations",
    description:
      "Begin handling protected information only after the necessary arrangements and access requirements have been established.",
  },
] as const;


const hipaaResponsibilities = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "HIPAA Security Rule safeguards",
    description:
      "Where HIPAA applies, electronic protected health information must be protected through appropriate administrative, physical and technical safeguards designed to preserve confidentiality, integrity and availability.",
    detail: "Administrative • Physical • Technical",
  },
  {
    number: "02",
    icon: Fingerprint,
    title: "Minimum-necessary access",
    description:
      "Access, use, disclosure and requests for protected health information should be limited to the minimum necessary for the authorized purpose, subject to applicable HIPAA exceptions and the covered entity's policies.",
    detail: "Role-based need • Limited access",
  },
  {
    number: "03",
    icon: FileText,
    title: "Business Associate Agreement",
    description:
      "When Kinz HealthOps acts as a Business Associate and PHI will be involved, the parties should execute the required BAA before PHI is created, received, maintained or transmitted for the engagement.",
    detail: "BAA before PHI access",
  },
  {
    number: "04",
    icon: Workflow,
    title: "Subcontractor obligations",
    description:
      "A subcontractor that creates, receives, maintains or transmits PHI on behalf of a Business Associate must be subject to the applicable downstream restrictions, conditions and safeguards through an appropriate BAA.",
    detail: "Downstream safeguards",
  },
  {
    number: "05",
    icon: ClipboardCheck,
    title: "Risk analysis & risk management",
    description:
      "Security readiness should include identifying reasonably anticipated risks and vulnerabilities to electronic PHI and implementing appropriate measures to reduce identified risks to a reasonable and appropriate level.",
    detail: "Assess • Document • Mitigate",
  },
  {
    number: "06",
    icon: ShieldHalf,
    title: "Incident & breach response",
    description:
      "Security incidents and potential breaches require documented escalation, investigation and notification procedures. A Business Associate must notify the covered entity of a breach of unsecured PHI as required by applicable HIPAA rules and the BAA.",
    detail: "Detect • Escalate • Notify",
  },
  {
    number: "07",
    icon: FileKey2,
    title: "PHI lifecycle controls",
    description:
      "Retention, return, destruction, media handling and termination procedures should be defined so PHI is not retained or exposed beyond authorized business, legal and contractual requirements.",
    detail: "Retention • Return • Disposal",
  },
  {
    number: "08",
    icon: MessageSquareText,
    title: "Individual-rights support",
    description:
      "Where the engagement requires it, the BAA should define how Kinz HealthOps supports the covered entity with access, amendment and accounting-of-disclosures obligations for PHI maintained on the covered entity's behalf.",
    detail: "Access • Amendment • Accounting",
  },
] as const;

const baaRequirements = [
  "Permitted and required uses and disclosures of PHI",
  "Prohibition on unauthorized use or further disclosure",
  "Appropriate safeguards and applicable Security Rule obligations",
  "Reporting of unauthorized uses, disclosures, security incidents and breaches",
  "Applicable subcontractor Business Associate Agreements",
  "Support for access, amendment and accounting obligations where required",
  "Availability of relevant practices, books and records to HHS as required",
  "Return or destruction of PHI at termination when feasible",
  "Termination rights for a material breach of the BAA",
] as const;

export default function SecurityPage() {
  return (
    <section className="relative overflow-hidden bg-[#f7fafb] pb-24 pt-[132px] sm:pt-[142px] lg:pb-32 lg:pt-[152px]">
      <PageBackground />

      <Container width="wide">
        <div className="relative">
          <Hero />
          <SecurityFramework />
          <HipaaResponsibilities />
          <BaaFramework />
          <EngagementReadiness />
          <SharedResponsibilities />
          <ComplianceBoundary />
          <ContactCTA />
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
      <div className="absolute -left-56 top-16 size-[590px] rounded-full bg-[#15c8bb]/[0.06] blur-[160px]" />

      <div className="absolute -right-60 top-36 size-[630px] rounded-full bg-[#4c8dff]/[0.06] blur-[170px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(7,23,34,0.019)_1px,transparent_1px),linear-gradient(90deg,rgba(7,23,34,0.019)_1px,transparent_1px)] bg-[size:68px_68px] opacity-45 [mask-image:radial-gradient(circle_at_top,black,transparent_82%)]" />
    </div>
  );
}

function Hero() {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
      <div>
        <div className="inline-flex items-center gap-2.5 rounded-full border border-black/[0.07] bg-white/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#35515c] shadow-[inset_0_1px_rgba(255,255,255,0.9)] backdrop-blur-xl">
          <ShieldCheck
            className="size-3.5 text-[#0b958b]"
            strokeWidth={1.8}
          />
          Security & Privacy
        </div>

        <h1 className="mt-6 max-w-[850px] text-[clamp(3.2rem,5.8vw,6.4rem)] font-semibold leading-[0.93] tracking-[-0.068em] text-[#071722]">
          Responsible
          <span className="block bg-gradient-to-r from-[#104d59] via-[#078e94] to-[#357be4] bg-clip-text text-transparent">
            revenue operations
          </span>
          start with
          <span className="block text-[#71858e]">
            responsible access.
          </span>
        </h1>

        <p className="mt-7 max-w-[700px] text-[15px] leading-8 text-[#657a84] sm:text-[17px]">
          Healthcare revenue-cycle work can involve
          sensitive information. Our approach is to
          establish the required agreements,
          safeguards and operating responsibilities
          before protected health information is
          accessed.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={siteConfig.routes.contact}
            className="group inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-[15px] bg-[#071c27] px-6 text-[13px] font-semibold !text-white shadow-[0_16px_42px_rgba(5,28,38,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(5,28,38,0.24)]"
          >
            Discuss Security Requirements
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>

          <Link
            href={siteConfig.routes.howItWorks}
            className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-[15px] border border-black/[0.075] bg-white/75 px-6 text-[13px] font-semibold text-[#23414c] backdrop-blur-xl transition-all hover:bg-white"
          >
            How We Work
            <ArrowUpRight
              className="size-3.5"
              strokeWidth={1.8}
            />
          </Link>
        </div>
      </div>

      <SecurityPanel />
    </section>
  );
}

function SecurityPanel() {
  const principles = [
    {
      icon: FileText,
      title: "Agreements first",
      description: "Define the permitted scope.",
    },
    {
      icon: Fingerprint,
      title: "Authorized access",
      description: "Limit access to operational need.",
    },
    {
      icon: Workflow,
      title: "Approved workflows",
      description: "Establish secure information handling.",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-[#0c2934] bg-[#071722] p-6 text-white shadow-[0_32px_100px_rgba(7,23,34,0.16)] sm:p-8">
      <div className="absolute -right-28 -top-28 size-[350px] rounded-full bg-[#4c8dff]/[0.12] blur-[115px]" />

      <div className="absolute -left-24 bottom-[-100px] size-[300px] rounded-full bg-[#15c8bb]/[0.11] blur-[110px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.023)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.023)_1px,transparent_1px)] bg-[size:52px_52px] opacity-35" />

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <span className="flex size-12 items-center justify-center rounded-[15px] border border-[#55e1d6]/12 bg-[#55e1d6]/[0.07] text-[#70e7de]">
            <ShieldCheck
              className="size-5"
              strokeWidth={1.7}
            />
          </span>

          <span className="rounded-full border border-white/[0.07] bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60">
            Engagement Standards
          </span>
        </div>

        <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.15em] text-[#6de3da]">
          Before Protected Information
        </p>

        <h2 className="mt-3 text-[27px] font-semibold leading-[1.08] tracking-[-0.045em]">
          Establish the foundation.
          <span className="block text-white/45">
            Then authorize the work.
          </span>
        </h2>

        <div className="mt-8 space-y-2.5">
          {principles.map((principle) => {
            const Icon: LucideIcon = principle.icon;

            return (
              <div
                key={principle.title}
                className="flex items-center gap-3.5 rounded-[15px] border border-white/[0.06] bg-white/[0.035] px-4 py-3.5"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#45ddd1]/[0.08] text-[#70e7de]">
                  <Icon
                    className="size-4"
                    strokeWidth={1.7}
                  />
                </span>

                <div>
                  <p className="text-[12px] font-semibold text-white/75">
                    {principle.title}
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/60">
                    {principle.description}
                  </p>
                </div>

                <Check
                  className="ml-auto size-3.5 shrink-0 text-[#6de3da]/45"
                  strokeWidth={1.8}
                />
              </div>
            );
          })}
        </div>

        <p className="mt-6 border-t border-white/[0.07] pt-5 text-[11px] leading-6 text-white/60">
          This framework describes intended
          engagement standards. Specific controls
          and readiness must be confirmed for each
          engagement.
        </p>
      </div>
    </div>
  );
}

function SecurityFramework() {
  return (
    <section className="mt-20 lg:mt-28">
      <div className="flex flex-col gap-5 border-b border-black/[0.065] pb-7 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0a9188]">
            Security Framework
          </p>

          <h2 className="mt-3 max-w-[800px] text-[clamp(2.4rem,4vw,4.5rem)] font-semibold leading-[1] tracking-[-0.058em] text-[#0b2732]">
            Safeguards across the engagement.
          </h2>
        </div>

        <p className="max-w-[470px] text-[13px] leading-6 text-[#748790]">
          These are the areas we intend to address
          through appropriate policies, agreements
          and technical and administrative controls.
          They are not a claim that every control is
          currently implemented or independently
          certified.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {securityAreas.map((area) => (
          <SecurityCard
            key={area.number}
            area={area}
          />
        ))}
      </div>
    </section>
  );
}

function SecurityCard({
  area,
}: {
  area: (typeof securityAreas)[number];
}) {
  const Icon: LucideIcon = area.icon;

  return (
    <article className="relative flex min-h-[290px] flex-col overflow-hidden rounded-[23px] border border-black/[0.065] bg-white/80 p-6 shadow-[0_16px_50px_rgba(7,23,34,0.03)] backdrop-blur-xl">
      <div className="absolute -right-16 -top-16 size-[180px] rounded-full bg-[#15c8bb]/[0.05] blur-[80px]" />

      <div className="relative flex items-center justify-between">
        <span className="flex size-11 items-center justify-center rounded-[14px] border border-[#15c8bb]/12 bg-[#15c8bb]/[0.055] text-[#0b958a]">
          <Icon
            className="size-[18px]"
            strokeWidth={1.7}
          />
        </span>

        <span className="text-[10px] font-bold tracking-[0.12em] text-[#a1b0b7]">
          {area.number}
        </span>
      </div>

      <div className="relative mt-7">
        <h3 className="text-[20px] font-semibold leading-[1.1] tracking-[-0.035em] text-[#112e39]">
          {area.title}
        </h3>

        <p className="mt-4 text-[12px] leading-6 text-[#70848d]">
          {area.description}
        </p>
      </div>

      <div className="relative mt-auto pt-7">
        <div className="flex items-center gap-2 border-t border-black/[0.055] pt-4">
          <span className="size-1.5 rounded-full bg-[#0b958a]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#71868f]">
            {area.detail}
          </span>
        </div>
      </div>
    </article>
  );
}


function HipaaResponsibilities() {
  return (
    <section className="mt-20 lg:mt-24" aria-labelledby="hipaa-responsibilities">
      <div className="flex flex-col gap-5 border-b border-black/[0.065] pb-7 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0a9188]">
            HIPAA Responsibility Framework
          </p>

          <h2
            id="hipaa-responsibilities"
            className="mt-3 max-w-[900px] text-[clamp(2.4rem,4vw,4.5rem)] font-semibold leading-[1] tracking-[-0.058em] text-[#0b2732]"
          >
            What must be addressed when PHI is involved.
          </h2>
        </div>

        <p className="max-w-[500px] text-[14px] leading-7 text-[#657a84]">
          HIPAA obligations depend on the parties, services and information
          involved. These areas describe requirements that should be evaluated
          and implemented where applicable; they are not a certification or a
          representation that every control is already operational.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {hipaaResponsibilities.map((item) => {
          const Icon: LucideIcon = item.icon;

          return (
            <article
              key={item.number}
              className="flex min-h-[310px] flex-col rounded-[23px] border border-black/[0.065] bg-white/80 p-6 shadow-[0_16px_50px_rgba(7,23,34,0.03)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-[14px] border border-[#15c8bb]/12 bg-[#15c8bb]/[0.055] text-[#0b958a]">
                  <Icon className="size-[18px]" strokeWidth={1.7} />
                </span>

                <span className="text-[11px] font-bold tracking-[0.12em] text-[#91a3aa]">
                  {item.number}
                </span>
              </div>

              <h3 className="mt-7 text-[19px] font-semibold leading-[1.15] tracking-[-0.035em] text-[#112e39]">
                {item.title}
              </h3>

              <p className="mt-4 text-[13px] leading-6 text-[#657a84]">
                {item.description}
              </p>

              <div className="mt-auto border-t border-black/[0.055] pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#71868f]">
                  {item.detail}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function BaaFramework() {
  return (
    <section className="mt-20 lg:mt-24" aria-labelledby="baa-framework">
      <div className="relative overflow-hidden rounded-[30px] border border-[#0c2934] bg-[#071722] p-6 text-white shadow-[0_32px_100px_rgba(7,23,34,0.14)] sm:p-8 lg:p-10">
        <div className="absolute -left-28 -top-24 size-[320px] rounded-full bg-[#1dd1c4]/[0.11] blur-[115px]" />
        <div className="absolute -right-32 bottom-[-100px] size-[360px] rounded-full bg-[#4c8dff]/[0.09] blur-[125px]" />

        <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <span className="flex size-12 items-center justify-center rounded-[15px] border border-[#55e1d6]/12 bg-[#55e1d6]/[0.07] text-[#70e7de]">
              <FileText className="size-5" strokeWidth={1.7} />
            </span>

            <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.15em] text-[#71e6dd]">
              Business Associate Agreement
            </p>

            <h2
              id="baa-framework"
              className="mt-4 text-[clamp(2.4rem,4vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.06em]"
            >
              A BAA is more than
              <span className="block text-white/55">
                a signature page.
              </span>
            </h2>

            <p className="mt-6 max-w-[520px] text-[14px] leading-7 text-white/65">
              When a Business Associate relationship exists, the agreement
              should define the permitted PHI use, safeguards, incident
              obligations, downstream subcontractor requirements and what
              happens to PHI when the relationship ends.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {baaRequirements.map((requirement, index) => (
              <div
                key={requirement}
                className="flex items-start gap-3 rounded-[16px] border border-white/[0.08] bg-white/[0.045] p-4"
              >
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#4ee1d5]/[0.09] text-[9px] font-bold text-[#7ce9e1]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-[12px] leading-6 text-white/72">
                  {requirement}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-8 border-t border-white/[0.08] pt-6">
          <p className="max-w-[1040px] text-[11px] leading-6 text-white/50">
            The BAA should be aligned with the actual services and reviewed
            with qualified legal or compliance counsel. Website language does
            not replace a signed BAA, a security risk analysis, required
            policies or implementation of appropriate safeguards.
          </p>
        </div>
      </div>
    </section>
  );
}

function EngagementReadiness() {
  return (
    <section className="mt-20 lg:mt-24">
      <div className="relative overflow-hidden rounded-[30px] border border-[#0c2934] bg-[#071722] p-6 text-white shadow-[0_32px_100px_rgba(7,23,34,0.14)] sm:p-8 lg:p-10">
        <div className="absolute -left-28 -top-24 size-[320px] rounded-full bg-[#1dd1c4]/[0.11] blur-[115px]" />

        <div className="absolute -right-32 bottom-[-100px] size-[360px] rounded-full bg-[#4c8dff]/[0.09] blur-[125px]" />

        <div className="relative">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#71e6dd]">
                Engagement Readiness
              </p>

              <h2 className="mt-4 text-[clamp(2.4rem,4vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.06em]">
                Establish access
                <span className="block text-white/45">
                  the right way.
                </span>
              </h2>
            </div>

            <p className="max-w-[570px] text-[14px] leading-7 text-white/65 lg:justify-self-end">
              The exact requirements depend on the
              services, systems, information involved
              and contractual responsibilities.
              Protected information should not be
              transferred simply because a commercial
              discussion has begun.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {readinessSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[19px] border border-white/[0.07] bg-white/[0.035] p-5 backdrop-blur-xl"
              >
                <span className="flex size-8 items-center justify-center rounded-xl border border-[#4ee1d5]/12 bg-[#4ee1d5]/[0.07] text-[9px] font-bold text-[#6de7dd]">
                  {step.number}
                </span>

                <h3 className="mt-7 text-[14px] font-semibold leading-5 text-white/82">
                  {step.title}
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-white/65">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-[15px] border border-[#6de7dd]/10 bg-[#6de7dd]/[0.035] p-4">
            <BadgeCheck
              className="mt-0.5 size-4 shrink-0 text-[#70e7de]"
              strokeWidth={1.7}
            />

            <p className="text-[12px] leading-6 text-white/70">
              We do not treat a signed agreement alone
              as proof that an environment is ready.
              Appropriate operational and security
              arrangements must also be established.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SharedResponsibilities() {
  return (
    <section className="mt-20 lg:mt-24">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0b9188]">
            Shared Responsibilities
          </p>

          <h2 className="mt-4 text-[clamp(2.3rem,3.8vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.058em] text-[#0b2732]">
            Clear roles.
            <span className="block text-[#71858e]">
              Appropriate boundaries.
            </span>
          </h2>

          <p className="mt-5 max-w-[440px] text-[13px] leading-7 text-[#748891]">
            Privacy and security responsibilities
            depend on the services being provided
            and the applicable agreements. We define
            those responsibilities before operational
            access is authorized.
          </p>
        </div>

        <div className="space-y-3">
          <ResponsibilityCard
            icon={FileText}
            title="Business Associate responsibilities"
            description="When providing services involving protected health information on behalf of a US covered entity, Kinz HealthOps would generally operate as a Business Associate. Applicable obligations, permitted uses and responsibilities must be addressed through the required agreements and safeguards."
          />

          <ResponsibilityCard
            icon={ShieldCheck}
            title="Practice and provider responsibilities"
            description="The practice retains responsibility for clinical care, medical decision-making and the information it supplies. Responsibilities for documentation, coding, authorizations, patient communication and other workflows are defined in the engagement."
          />

          <ResponsibilityCard
            icon={MessageSquareText}
            title="Security review and questions"
            description="Prospective clients may request information about the safeguards relevant to their engagement. We will distinguish controls that are implemented and verified from requirements that remain part of onboarding or future development."
          />
        </div>
      </div>
    </section>
  );
}

function ResponsibilityCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <article className="flex gap-4 rounded-[21px] border border-black/[0.065] bg-white/80 p-5 shadow-[0_14px_42px_rgba(7,23,34,0.025)] backdrop-blur-xl sm:p-6">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-[#15c8bb]/[0.06] text-[#0b958a]">
        <Icon
          className="size-[18px]"
          strokeWidth={1.7}
        />
      </span>

      <div>
        <h3 className="text-[16px] font-semibold tracking-[-0.025em] text-[#17343f]">
          {title}
        </h3>

        <p className="mt-3 text-[12px] leading-6 text-[#748891]">
          {description}
        </p>
      </div>
    </article>
  );
}


function ComplianceBoundary() {
  return (
    <section className="mt-20 lg:mt-24" aria-labelledby="compliance-boundary">
      <div className="rounded-[24px] border border-[#d9e7ea] bg-[#eef7f7] p-6 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-[900px] items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-white text-[#0b958a] shadow-sm">
              <ShieldCheck className="size-[18px]" strokeWidth={1.7} />
            </span>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0a9188]">
                Important Compliance Boundary
              </p>

              <h2
                id="compliance-boundary"
                className="mt-3 text-[22px] font-semibold tracking-[-0.035em] text-[#16343f]"
              >
                Compliance is operational, not a website badge.
              </h2>

              <p className="mt-4 text-[13px] leading-7 text-[#607780]">
                Kinz HealthOps should describe itself as “HIPAA compliant” or
                make equivalent categorical claims only after the applicable
                requirements, policies, risk analysis, workforce training,
                vendor arrangements and safeguards have actually been
                implemented and can be supported. Until then, this page should
                describe the framework, responsibilities and readiness
                requirements accurately.
              </p>
            </div>
          </div>

          <Link
            href={siteConfig.routes.contact}
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-[14px] border border-black/[0.07] bg-white px-5 text-[12px] font-semibold text-[#23414c] transition-colors hover:bg-[#f9fbfb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b958a]/40 focus-visible:ring-offset-2"
          >
            Discuss requirements
            <ArrowRight className="size-3.5" strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="mt-20 lg:mt-24">
      <div className="relative overflow-hidden rounded-[28px] border border-black/[0.07] bg-white/80 px-6 py-10 text-center shadow-[0_22px_70px_rgba(7,23,34,0.06)] backdrop-blur-xl sm:px-8 lg:py-12">
        <div className="absolute -left-24 top-[-100px] size-[280px] rounded-full bg-[#15c8bb]/[0.07] blur-[100px]" />

        <div className="absolute -right-24 bottom-[-100px] size-[300px] rounded-full bg-[#4c8dff]/[0.07] blur-[110px]" />

        <div className="relative mx-auto max-w-[760px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0a9188]">
            Security & Engagement Questions
          </p>

          <h2 className="mt-4 text-[clamp(2.3rem,4vw,4.3rem)] font-semibold leading-[0.98] tracking-[-0.058em] text-[#0b2732]">
            Discuss your requirements
            <span className="block text-[#71868f]">
              before sharing sensitive data.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[13px] leading-7 text-[#71858e]">
            Tell us about your practice, required
            services and security review needs. We
            can discuss the appropriate next steps
            and information required for an
            engagement.
          </p>

          <Link
            href={siteConfig.routes.contact}
            className="group mt-7 inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-[15px] bg-[#071c27] px-6 text-[13px] font-semibold !text-white shadow-[0_16px_42px_rgba(5,28,38,0.18)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Kinz HealthOps
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>

          <p className="mt-5 text-[10px] leading-5 text-[#91a1a8]">
            Do not submit patient records, PHI, ePHI, insurance documents or other sensitive patient data through public website forms or ordinary email. Approved secure channels should be established before sensitive information is exchanged.
          </p>
        </div>
      </div>
    </section>
  );
}