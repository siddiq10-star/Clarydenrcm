"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  MotionConfig,
  useInView,
  useReducedMotion,
} from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Check,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  KeyRound,
  LineChart,
  ReceiptText,
  RefreshCw,
  ShieldCheck,
  Stethoscope,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  category: string;
};

type OperationStep = {
  label: string;
  detail: string;
  icon: LucideIcon;
};

type MotionProps = {
  reduceMotion: boolean;
};

const services: Service[] = [
  {
    title: "Medical Billing",
    description:
      "Structured charge entry, claim validation and submission workflows designed to keep reimbursement moving.",
    icon: FileCheck2,
    href: "/services/medical-billing",
    category: "Core RCM",
  },
  {
    title: "A/R Management",
    description:
      "Prioritized follow-up across aging receivables with clear ownership, payer action and escalation.",
    icon: RefreshCw,
    href: "/services/ar-management",
    category: "Recovery",
  },
  {
    title: "Denial Management",
    description:
      "Root-cause analysis, correction, appeal when appropriate and prevention workflows for denied claims.",
    icon: FileSearch,
    href: "/services/denial-management",
    category: "Recovery",
  },
  {
    title: "Payment Posting",
    description:
      "ERA, EOB, adjustment and payment posting with disciplined reconciliation.",
    icon: ReceiptText,
    href: "/services/payment-posting",
    category: "Payments",
  },
  {
    title: "Eligibility Verification",
    description:
      "Coverage, benefits and patient responsibility verification to support informed front-end workflows.",
    icon: ShieldCheck,
    href: "/services/eligibility-verification",
    category: "Front End",
  },
  {
    title: "Prior Authorization",
    description:
      "Authorization support designed to reduce pre-service friction and help prevent avoidable denials.",
    icon: KeyRound,
    href: "/services/prior-authorization",
    category: "Front End",
  },
  {
    title: "Credentialing",
    description:
      "Provider enrollment and payer credentialing support across onboarding and maintenance workflows.",
    icon: ClipboardCheck,
    href: "/services/credentialing",
    category: "Provider Ops",
  },
  {
    title: "Medical Coding",
    description:
      "Coding support aligned with clinical documentation, payer requirements and billing workflows.",
    icon: Stethoscope,
    href: "/services/medical-coding",
    category: "Clinical",
  },
];

const operationSteps: OperationStep[] = [
  {
    label: "Capture",
    detail: "Eligibility + encounter",
    icon: ClipboardCheck,
  },
  {
    label: "Validate",
    detail: "Coding + claim rules",
    icon: BadgeCheck,
  },
  {
    label: "Submit",
    detail: "Clearinghouse + payer",
    icon: Workflow,
  },
  {
    label: "Resolve",
    detail: "Rejections + denials",
    icon: FileSearch,
  },
  {
    label: "Collect",
    detail: "Payments + A/R",
    icon: Banknote,
  },
];

const queueItems = [
  { label: "Denials", value: "High" },
  { label: "90+ A/R", value: "Priority" },
  { label: "Rejections", value: "Daily" },
] as const;

const visibilityItems = [
  { label: "Claims", value: "Tracked" },
  { label: "A/R", value: "Aged" },
  { label: "Denials", value: "Analyzed" },
  { label: "Payments", value: "Posted" },
] as const;

function reveal(
  reduceMotion: boolean,
  distance = 24,
  delay = 0,
) {
  return {
    initial: reduceMotion
      ? (false as const)
      : { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  };
}

export function ServicesArchitecture() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion() === true;

  const isVisible = useInView(sectionRef, {
    amount: "some",
    margin: "0px 0px 80px 0px",
  });

  const animateDetails = isVisible && !reduceMotion;

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={sectionRef}
        id="services-architecture"
        aria-labelledby="services-architecture-title"
        className="relative isolate overflow-hidden bg-white py-20 sm:py-28 lg:py-36"
      >
        <Background />

        <Container width="wide">
          <div className="relative min-w-0">
            <Header reduceMotion={reduceMotion} />

            <div className="mt-12 grid min-w-0 gap-5 sm:mt-16 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <ServiceStack reduceMotion={reduceMotion} />

              <OperationsConsole
                reduceMotion={reduceMotion}
                animateDetails={animateDetails}
              />
            </div>
          </div>
        </Container>
      </section>
    </MotionConfig>
  );
}

function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-64 top-40 size-[620px] rounded-full bg-[#15c8bb]/[0.055] blur-[160px]" />

      <div className="absolute -right-56 top-[18%] size-[620px] rounded-full bg-[#4c8dff]/[0.06] blur-[160px]" />

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(7,23,34,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(7,23,34,0.018)_1px,transparent_1px)]
          bg-[size:72px_72px]
          opacity-60
          [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]
        "
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/[0.055] to-transparent" />
    </div>
  );
}

function Header({ reduceMotion }: MotionProps) {
  return (
    <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.65fr)] lg:items-end">
      <motion.div
        {...reveal(reduceMotion, 24)}
        className="min-w-0"
      >
        <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-black/[0.07] bg-[#f8fbfc]/90 px-3 py-2 text-left text-[10px] leading-5 font-bold uppercase tracking-[0.13em] text-[#314b56] shadow-[inset_0_1px_rgba(255,255,255,0.9)] backdrop-blur-xl sm:tracking-[0.16em]">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#15c8bb]/[0.07] text-[#0b9187]">
            <Workflow
              aria-hidden="true"
              className="size-3.5"
              strokeWidth={1.8}
            />
          </span>

          RCM Operating System
        </div>

        <h2
          id="services-architecture-title"
          className="mt-6 max-w-[950px] text-[clamp(2.45rem,5vw,5.7rem)] leading-[1.05] font-semibold tracking-[-0.055em] text-[#071722] sm:leading-[0.98] lg:leading-[0.96] lg:tracking-[-0.06em]"
        >
          Not isolated billing tasks.

          <span className="mt-2 block bg-gradient-to-r from-[#104d5b] via-[#0b9093] to-[#397de5] bg-clip-text pb-1 text-transparent">
            One connected revenue operation.
          </span>
        </h2>
      </motion.div>

      <motion.div
        {...reveal(reduceMotion, 20, 0.12)}
        className="min-w-0 max-w-[540px] lg:justify-self-end"
      >
        <p className="text-[15px] leading-7 text-[#526b76] sm:text-base sm:leading-8">
          Kinz HealthOps connects medical billing and revenue cycle
          management (RCM) services—from front-end verification and billing
          to payer follow-up, payments and recovery—into one coordinated
          operating model.
        </p>

        <Link
          href={siteConfig.routes.services}
          className="group mt-6 inline-flex min-h-11 items-center gap-2 rounded-md text-[13px] font-semibold text-[#153946] underline-offset-4 hover:underline"
        >
          Explore all services

          <ArrowRight
            aria-hidden="true"
            className="size-4 shrink-0 transition-transform duration-300 motion-safe:group-hover:translate-x-1"
            strokeWidth={1.8}
          />
        </Link>
      </motion.div>
    </div>
  );
}

function ServiceStack({ reduceMotion }: MotionProps) {
  return (
    <ul
      aria-label="Kinz HealthOps services"
      className="grid min-w-0 list-none gap-3 sm:grid-cols-2"
    >
      {services.map((service, index) => (
        <ServiceCard
          key={service.href}
          {...service}
          index={index}
          reduceMotion={reduceMotion}
        />
      ))}
    </ul>
  );
}

type ServiceCardProps = Service & {
  index: number;
  reduceMotion: boolean;
};

function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  category,
  index,
  reduceMotion,
}: ServiceCardProps) {
  return (
    <motion.li
      {...reveal(reduceMotion, 20, index * 0.045)}
      className="min-w-0"
    >
      <Link
        href={href}
        className="
          group relative flex h-full min-h-[240px] min-w-0 flex-col
          overflow-hidden rounded-[22px]
          border border-black/[0.07]
          bg-[#fbfdfd]/90
          p-5
          shadow-[0_16px_50px_rgba(7,23,34,0.035)]
          transition-[transform,border-color,background-color,box-shadow] duration-500
          motion-safe:hover:-translate-y-1
          hover:border-[#15c8bb]/20
          hover:bg-white
          motion-safe:hover:shadow-[0_24px_70px_rgba(7,23,34,0.07)]
          focus-visible:outline-2 focus-visible:outline-offset-4
          sm:p-6
        "
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 -top-14 size-[160px] rounded-full bg-[#16c9bb]/[0.055] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="relative flex min-w-0 items-start justify-between gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] border border-[#15c8bb]/12 bg-[#15c8bb]/[0.055] text-[#0b9388]">
            <Icon
              aria-hidden="true"
              className="size-[18px]"
              strokeWidth={1.7}
            />
          </span>

          <span className="rounded-full border border-black/[0.05] bg-white px-2.5 py-1.5 text-[10px] leading-4 font-semibold uppercase tracking-[0.08em] text-[#607781]">
            {category}
          </span>
        </div>

        <div className="relative mt-9 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <h3 className="min-w-0 text-[20px] leading-[1.3] font-semibold tracking-[-0.035em] text-[#112c37]">
              {title}
            </h3>

            <ArrowRight
              aria-hidden="true"
              className="mt-1 size-4 shrink-0 text-[#81939b] opacity-0 transition-all duration-300 group-hover:opacity-100 motion-safe:group-hover:translate-x-1 group-focus-visible:opacity-100"
              strokeWidth={1.8}
            />
          </div>

          <p className="mt-3 text-[13px] leading-6 text-[#526b76]">
            {description}
          </p>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[#15c8bb]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </Link>
    </motion.li>
  );
}

function OperationsConsole({
  reduceMotion,
  animateDetails,
}: MotionProps & {
  animateDetails: boolean;
}) {
  return (
    <motion.div
      {...reveal(reduceMotion, 24)}
      className="
        relative min-h-[720px] min-w-0
        overflow-hidden rounded-[28px]
        border border-[#0d2934]
        bg-[#071722]
        p-5 text-white
        shadow-[0_34px_100px_rgba(7,23,34,0.16)]
        sm:p-6 lg:p-7
      "
    >
      <ConsoleBackground />

      <div className="relative min-w-0">
        <div className="flex min-w-0 flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-[13px] border border-[#3ee0d3]/12 bg-[#3ee0d3]/[0.07] text-[#69e7de]">
              <LineChart
                aria-hidden="true"
                className="size-[18px]"
                strokeWidth={1.8}
              />
            </span>

            <div className="min-w-0">
              <h3
                id="rcm-operations-console-title"
                className="text-[13px] leading-5 font-semibold tracking-[-0.01em] sm:text-sm"
              >
                RCM Operations Console
              </h3>

              <p className="mt-0.5 text-[11px] leading-4 text-white/65">
                Illustrative operational view
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[#4fe0d4]/10 bg-[#4fe0d4]/[0.05] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#78e7df]">
            <span
              aria-hidden="true"
              className="size-1.5 shrink-0 rounded-full bg-[#53e1d6] shadow-[0_0_10px_rgba(83,225,214,0.75)]"
            />
            Workflow Concept
          </div>
        </div>

        <RevenueOverview reduceMotion={reduceMotion} />

        <div className="mt-5 grid min-w-0 gap-3 sm:grid-cols-2">
          <QueueCard />
          <PerformanceCard />
        </div>

        <WorkflowMonitor
          reduceMotion={reduceMotion}
          animateDetails={animateDetails}
        />

        <ActionPanel />

        <p className="mt-4 text-center text-[11px] leading-5 text-white/55">
          Concept illustration only. No live patient, claim or financial
          data is displayed.
        </p>
      </div>
    </motion.div>
  );
}

function ConsoleBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-24 top-20 size-[330px] rounded-full bg-[#13c7bb]/[0.11] blur-[115px]" />

      <div className="absolute -right-20 bottom-24 size-[350px] rounded-full bg-[#4d8cff]/[0.10] blur-[125px]" />

      <div
        className="
          absolute inset-0 opacity-40
          bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
          bg-[size:54px_54px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]
        "
      />
    </div>
  );
}

function RevenueOverview({ reduceMotion }: MotionProps) {
  return (
    <div className="mt-6 min-w-0 overflow-hidden rounded-[20px] border border-white/[0.07] bg-white/[0.035] p-4 backdrop-blur-xl sm:p-5">
      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/65">
            Revenue Workflow Coverage
          </h4>

          <p className="mt-2 text-[clamp(1.75rem,3vw,2.125rem)] leading-tight font-semibold tracking-[-0.055em] text-white">
            End-to-End
          </p>
        </div>

        <div className="flex items-center gap-2 text-[11px] leading-5 text-[#72ddd4]">
          <BadgeCheck
            aria-hidden="true"
            className="size-3.5 shrink-0"
            strokeWidth={1.8}
          />
          Coordinated operations
        </div>
      </div>

      <div
        aria-hidden="true"
        className="relative mt-6 h-2 overflow-hidden rounded-full bg-white/[0.06]"
      >
        <motion.div
          initial={reduceMotion ? false : { width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 1.8,
            ease,
          }}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#3e8df4] via-[#19c6b8] to-[#55e1d6]"
        />
      </div>

      <div className="mt-3 flex justify-between gap-3 text-[10px] leading-4 font-medium uppercase tracking-[0.05em] text-white/60">
        <span>Patient Access</span>
        <span className="text-right">Collections</span>
      </div>

      <p className="mt-3 text-[11px] leading-5 text-white/55">
        Illustrative process flow—not a measured performance result.
      </p>
    </div>
  );
}

function QueueCard() {
  return (
    <div className="min-w-0 rounded-[20px] border border-white/[0.07] bg-white/[0.035] p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/65">
            Work Queue
          </h4>

          <p className="mt-1 text-[clamp(1.25rem,2vw,1.4375rem)] leading-tight font-semibold tracking-[-0.04em]">
            Prioritized
          </p>
        </div>

        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#44dfd2]/[0.08] text-[#67e6dd]">
          <ClipboardCheck
            aria-hidden="true"
            className="size-4"
            strokeWidth={1.8}
          />
        </span>
      </div>

      <ul aria-label="Example work priorities" className="mt-5 space-y-2">
        {queueItems.map((item) => (
          <li
            key={item.label}
            className="flex min-w-0 flex-wrap items-center justify-between gap-2 rounded-xl border border-white/[0.045] bg-white/[0.025] px-3 py-2.5"
          >
            <span className="text-[11px] leading-5 text-white/75">
              {item.label}
            </span>

            <span className="text-[10px] leading-4 font-semibold text-[#6ee4dc]">
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PerformanceCard() {
  return (
    <div className="min-w-0 rounded-[20px] border border-white/[0.07] bg-white/[0.035] p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/65">
            Visibility
          </h4>

          <p className="mt-1 text-[clamp(1.25rem,2vw,1.4375rem)] leading-tight font-semibold tracking-[-0.04em]">
            Continuous
          </p>
        </div>

        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#4c8dff]/[0.09] text-[#79a9ff]">
          <LineChart
            aria-hidden="true"
            className="size-4"
            strokeWidth={1.8}
          />
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        {visibilityItems.map((item) => (
          <MiniMetric key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}

function MiniMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0 rounded-xl border border-white/[0.045] bg-white/[0.025] p-3">
      <p className="text-[10px] leading-4 uppercase tracking-[0.06em] text-white/60">
        {label}
      </p>

      <p className="mt-1 text-[11px] leading-5 font-semibold text-white/80">
        {value}
      </p>
    </div>
  );
}

function WorkflowMonitor({
  reduceMotion,
  animateDetails,
}: MotionProps & {
  animateDetails: boolean;
}) {
  return (
    <div className="mt-3 min-w-0 rounded-[20px] border border-white/[0.07] bg-white/[0.035] p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/65">
            Workflow Monitor
          </h4>

          <p className="mt-1 text-[11px] leading-5 text-white/70">
            Every handoff remains visible.
          </p>
        </div>

        <span className="text-[10px] font-semibold text-[#68e2da]">
          Example Flow
        </span>
      </div>

      <div className="relative mt-6 min-w-0">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-4 right-4 top-[21px] hidden h-px bg-white/[0.07] xl:block"
        >
          <motion.div
            initial={false}
            animate={
              animateDetails
                ? { left: ["0%", "calc(100% - 8px)"], opacity: 1 }
                : { left: "0%", opacity: 0 }
            }
            transition={
              animateDetails
                ? {
                    duration: 5.2,
                    repeat: Infinity,
                    ease: "linear",
                  }
                : { duration: 0.2 }
            }
            className="absolute -top-[3px] size-2 rounded-full bg-[#63e8de] shadow-[0_0_18px_rgba(99,232,222,0.9)]"
          />
        </div>

        <ol
          aria-label="Example RCM operating stages"
          className="relative grid list-none grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5"
        >
          {operationSteps.map((step, index) => (
            <WorkflowStep
              key={step.label}
              {...step}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

function WorkflowStep({
  label,
  detail,
  icon: Icon,
  index,
  reduceMotion,
}: OperationStep & {
  index: number;
} & MotionProps) {
  return (
    <motion.li
      {...reveal(reduceMotion, 10, index * 0.08)}
      className="relative min-w-0 rounded-[15px] border border-white/[0.055] bg-[#091d29]/90 p-3"
    >
      <span className="flex size-7 items-center justify-center rounded-lg bg-[#39d8cc]/[0.07] text-[#65e3da]">
        <Icon
          aria-hidden="true"
          className="size-3.5"
          strokeWidth={1.8}
        />
      </span>

      <p className="mt-4 text-[11px] leading-5 font-semibold text-white/85">
        {label}
      </p>

      <p className="mt-1 text-[10px] leading-4 text-white/60">
        {detail}
      </p>
    </motion.li>
  );
}

function ActionPanel() {
  return (
    <div className="mt-3 min-w-0 rounded-[20px] border border-[#3ddacd]/10 bg-gradient-to-r from-[#38d5c8]/[0.06] to-[#4c8dff]/[0.05] p-4 sm:p-5">
      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-[13px] bg-white/[0.05] text-[#73e8df]">
            <Check
              aria-hidden="true"
              className="size-[18px]"
              strokeWidth={1.8}
            />
          </span>

          <div className="min-w-0">
            <p className="text-[11px] leading-5 font-semibold text-white/85">
              Next action defined
            </p>

            <p className="mt-1 text-[11px] leading-5 text-white/65">
              Clear ownership, status and next steps for unresolved accounts.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#69ddd5]">
          Accountability

          <ArrowRight
            aria-hidden="true"
            className="size-3.5"
            strokeWidth={1.8}
          />
        </div>
      </div>
    </div>
  );
}