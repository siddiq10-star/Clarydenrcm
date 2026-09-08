"use client";

import { useRef } from "react";
import {
  motion,
  MotionConfig,
  useInView,
  useReducedMotion,
} from "motion/react";
import {
  AlertTriangle,
  ArrowDownRight,
  BadgeAlert,
  Clock3,
  FileWarning,
  ShieldAlert,
  Stethoscope,
  TrendingDown,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type LeakagePoint = {
  title: string;
  description: string;
  icon: LucideIcon;
  label: string;
};

const leakagePoints: LeakagePoint[] = [
  {
    title: "Eligibility Gaps",
    description:
      "Inactive coverage, incomplete benefit verification and unclear patient responsibility can create problems before care is delivered.",
    icon: ShieldAlert,
    label: "Front-end risk",
  },
  {
    title: "Authorization Delays",
    description:
      "Missing or incomplete authorization workflows can contribute to avoidable denials, rescheduling and reimbursement delays.",
    icon: Clock3,
    label: "Pre-service friction",
  },
  {
    title: "Coding & Documentation",
    description:
      "Incomplete documentation or coding errors can weaken claim accuracy and trigger rework, delays or additional payer review.",
    icon: Stethoscope,
    label: "Clinical-to-claim",
  },
  {
    title: "Claim Rejections",
    description:
      "Demographic, payer, coding or formatting issues can stop claims before they reach payer adjudication.",
    icon: FileWarning,
    label: "Submission risk",
  },
  {
    title: "Denials",
    description:
      "Denied claims require structured root-cause analysis, correction, appeal when appropriate and payer follow-up before reimbursement can continue.",
    icon: BadgeAlert,
    label: "Revenue interruption",
  },
  {
    title: "Aging A/R",
    description:
      "Outstanding claims can lose momentum when follow-up is inconsistent, ownership is unclear or payer action is not tracked.",
    icon: TrendingDown,
    label: "Cash-flow drag",
  },
];

const recoverySteps = [
  {
    label: "Detect",
    description: "Identify the issue",
  },
  {
    label: "Prioritize",
    description: "Rank by revenue risk",
  },
  {
    label: "Resolve",
    description: "Take the next action",
  },
  {
    label: "Recover",
    description: "Drive toward resolution",
  },
] as const;

function reveal(
  reduceMotion: boolean,
  distance = 24,
  delay = 0,
) {
  return {
    initial: reduceMotion
      ? (false as const)
      : {
          opacity: 0,
          y: distance,
        },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  };
}

export function RevenueLeakage() {
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
        aria-labelledby="revenue-leakage-title"
        className="relative isolate overflow-hidden bg-[#f7fafb] py-20 sm:py-28 lg:py-36"
      >
        <Background />

        <Container width="wide">
          <div className="relative min-w-0">
            <Header reduceMotion={reduceMotion} />

            <ul className="mt-12 grid list-none gap-4 sm:mt-16 md:grid-cols-2 xl:grid-cols-3">
              {leakagePoints.map((item, index) => (
                <LeakageCard
                  key={item.title}
                  {...item}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </ul>

            <RecoveryPanel
              reduceMotion={reduceMotion}
              animateDetails={animateDetails}
            />
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
      <div className="absolute -left-60 top-16 size-[620px] rounded-full bg-[#15c8bb]/[0.07] blur-[150px]" />

      <div className="absolute -right-64 top-[35%] size-[650px] rounded-full bg-[#4c8dff]/[0.07] blur-[160px]" />

      <div
        className="
          absolute inset-0 opacity-[0.45]
          bg-[linear-gradient(rgba(7,23,34,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(7,23,34,0.022)_1px,transparent_1px)]
          bg-[size:64px_64px]
          [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
        "
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />

      <div className="absolute left-1/2 top-[46%] h-px w-[74%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#21c7bb]/10 to-transparent" />
    </div>
  );
}

function Header({
  reduceMotion,
}: {
  reduceMotion: boolean;
}) {
  return (
    <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,0.72fr)] lg:items-end">
      <motion.div
        {...reveal(reduceMotion, 24)}
        className="min-w-0"
      >
        <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-black/[0.07] bg-white/75 px-3 py-2 text-left text-[10px] leading-5 font-bold uppercase tracking-[0.13em] text-[#344d58] shadow-[inset_0_1px_rgba(255,255,255,0.9)] backdrop-blur-xl sm:tracking-[0.16em]">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#ffb84d]/10 text-[#cf8421]">
            <AlertTriangle
              aria-hidden="true"
              className="size-3.5"
              strokeWidth={1.8}
            />
          </span>

          Revenue Leakage
        </div>

        <h2
          id="revenue-leakage-title"
          className="mt-6 max-w-[900px] text-[clamp(2.45rem,5vw,5.7rem)] leading-[1.05] font-semibold tracking-[-0.055em] text-[#071722] sm:leading-[0.98] lg:leading-[0.96] lg:tracking-[-0.06em]"
        >
          Revenue rarely disappears all at once.

          <span className="mt-2 block bg-gradient-to-r from-[#0f5961] via-[#098f94] to-[#327de6] bg-clip-text pb-1 text-transparent">
            It leaks through small failures.
          </span>
        </h2>
      </motion.div>

      <motion.div
        {...reveal(reduceMotion, 20, 0.12)}
        className="min-w-0 max-w-[560px] lg:justify-self-end"
      >
        <p className="text-[15px] leading-7 text-[#526b76] sm:text-base sm:leading-8">
          Every missed verification, delayed follow-up or unresolved denial
          creates friction across the medical billing and revenue cycle
          management process. Our role is to make those leakage points
          visible, owned and continuously worked.
        </p>
      </motion.div>
    </div>
  );
}

type LeakageCardProps = LeakagePoint & {
  index: number;
  reduceMotion: boolean;
};

function LeakageCard({
  title,
  description,
  icon: Icon,
  label,
  index,
  reduceMotion,
}: LeakageCardProps) {
  const titleId = `leakage-${index + 1}`;

  return (
    <li className="min-w-0">
      <motion.article
        {...reveal(reduceMotion, 28, index * 0.06)}
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -4,
                transition: {
                  duration: 0.25,
                  ease,
                },
              }
        }
        aria-labelledby={titleId}
        className="
          group relative flex h-full min-h-[275px] min-w-0 flex-col
          overflow-hidden rounded-[24px]
          border border-black/[0.07]
          bg-white/78 p-6
          shadow-[0_18px_55px_rgba(7,23,34,0.045)]
          backdrop-blur-xl
          transition-[border-color,box-shadow,background-color] duration-500
          hover:border-[#0bb4aa]/20
          hover:shadow-[0_28px_75px_rgba(7,23,34,0.08)]
          sm:min-h-[290px] sm:p-7
        "
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 size-[210px] rounded-full bg-[#ffb851]/[0.08] blur-[90px]"
        />

        <div className="relative flex items-start justify-between gap-4">
          <span className="inline-flex max-w-[72%] rounded-full border border-black/[0.06] bg-[#f8fafb] px-2.5 py-1.5 text-[9px] leading-4 font-semibold uppercase tracking-[0.1em] text-[#71838c] sm:text-[10px] sm:tracking-[0.12em]">
            {label}
          </span>

          <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] border border-[#f3a94e]/15 bg-[#f3a94e]/[0.08] text-[#d18829]">
            <Icon
              aria-hidden="true"
              className="size-[18px]"
              strokeWidth={1.7}
            />
          </span>
        </div>

        <div className="relative mt-10 sm:mt-12">
          <h3
            id={titleId}
            className="text-[clamp(1.25rem,2vw,1.4375rem)] leading-[1.25] font-semibold tracking-[-0.035em] text-[#102b36]"
          >
            {title}
          </h3>

          <p className="mt-3 max-w-[430px] text-[14px] leading-7 text-[#5f747e]">
            {description}
          </p>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f0b564]/30 to-transparent"
        />
      </motion.article>
    </li>
  );
}

function RecoveryPanel({
  reduceMotion,
  animateDetails,
}: {
  reduceMotion: boolean;
  animateDetails: boolean;
}) {
  return (
    <motion.div
      {...reveal(reduceMotion, 26)}
      className="
        relative mt-5 min-w-0 overflow-hidden
        rounded-[28px]
        border border-[#0c7b80]/10
        bg-[#071722]
        p-6 text-white
        shadow-[0_30px_90px_rgba(7,23,34,0.13)]
        sm:p-7 lg:p-8
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 size-[270px] rounded-full bg-[#26d5c7]/[0.11] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-[-120px] size-[320px] rounded-full bg-[#4c8dff]/[0.10] blur-[110px]"
      />

      <div className="relative grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center">
        <div className="min-w-0">
          <p className="text-[10px] leading-5 font-bold uppercase tracking-[0.14em] text-[#73e9df] sm:tracking-[0.16em]">
            The Kinz HealthOps Response
          </p>

          <h3 className="mt-4 max-w-[620px] text-[clamp(2rem,3.6vw,4.1rem)] leading-[1.05] font-semibold tracking-[-0.05em] sm:leading-[1] sm:tracking-[-0.055em]">
            Find the leak.

            <span className="mt-1 block text-white/65">
              Own the next action.
            </span>
          </h3>

          <p className="mt-5 max-w-[600px] text-[14px] leading-7 text-white/70">
            Revenue-cycle performance becomes easier to manage when every
            unresolved account has a clear owner, status, priority and next
            step.
          </p>
        </div>

        <RecoveryFlow
          reduceMotion={reduceMotion}
          animateDetails={animateDetails}
        />
      </div>
    </motion.div>
  );
}

function RecoveryFlow({
  reduceMotion,
  animateDetails,
}: {
  reduceMotion: boolean;
  animateDetails: boolean;
}) {
  return (
    <div className="relative min-w-0">
      <div
        aria-hidden="true"
        className="absolute left-[9%] right-[9%] top-[28px] hidden h-px bg-white/[0.08] sm:block"
      />

      <motion.div
        aria-hidden="true"
        initial={false}
        animate={
          animateDetails
            ? {
                left: ["8%", "90%"],
                opacity: 1,
              }
            : {
                left: "8%",
                opacity: 0,
              }
        }
        transition={
          animateDetails
            ? {
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }
            : {
                duration: 0.2,
              }
        }
        className="pointer-events-none absolute top-[25px] hidden size-2 rounded-full bg-[#61ece0] shadow-[0_0_20px_rgba(97,236,224,0.9)] sm:block"
      />

      <ol
        aria-label="Revenue leakage recovery workflow"
        className="grid list-none gap-3 sm:grid-cols-2 xl:grid-cols-4"
      >
        {recoverySteps.map((step, index) => (
          <motion.li
            key={step.label}
            {...reveal(
              reduceMotion,
              14,
              0.15 + index * 0.08,
            )}
            className="relative min-w-0 rounded-[18px] border border-white/[0.07] bg-white/[0.04] p-4 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#45dfd3]/[0.08] text-[#6be9df]">
                {index === recoverySteps.length - 1 ? (
                  <TrendingDown
                    aria-hidden="true"
                    className="size-4 rotate-180"
                    strokeWidth={1.8}
                  />
                ) : (
                  <ArrowDownRight
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.8}
                  />
                )}
              </span>

              <span
                aria-hidden="true"
                className="text-[10px] font-semibold tracking-[0.12em] text-white/45"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <p className="mt-6 text-[13px] leading-5 font-semibold text-white">
              {step.label}
            </p>

            <p className="mt-1 text-[11px] leading-5 text-white/65">
              {step.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}