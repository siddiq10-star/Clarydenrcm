"use client";

import { useRef } from "react";
import {
  motion,
  MotionConfig,
  useInView,
  useReducedMotion,
} from "motion/react";
import {
  BadgeCheck,
  CircleDollarSign,
  CreditCard,
  FileCheck2,
  FileSearch,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Stage = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "cyan" | "blue";
};

const stages: Stage[] = [
  {
    number: "01",
    title: "Patient Access",
    description:
      "Eligibility, benefits and authorization workflows begin before the claim is ever created.",
    icon: ShieldCheck,
    accent: "cyan",
  },
  {
    number: "02",
    title: "Clinical Encounter",
    description:
      "Provider documentation and coding establish the foundation for accurate reimbursement.",
    icon: Stethoscope,
    accent: "blue",
  },
  {
    number: "03",
    title: "Claim Submission",
    description:
      "Claims move through validation, clearinghouse processing and payer submission.",
    icon: FileCheck2,
    accent: "cyan",
  },
  {
    number: "04",
    title: "Payer Adjudication",
    description:
      "Payers process claims, apply coverage and contract rules, and return payment, adjustment or denial information.",
    icon: FileSearch,
    accent: "blue",
  },
  {
    number: "05",
    title: "Payment & Posting",
    description:
      "Payments, adjustments and patient responsibility are posted and reconciled to support accurate account balances.",
    icon: CreditCard,
    accent: "cyan",
  },
  {
    number: "06",
    title: "Denials & A/R",
    description:
      "Unpaid and denied claims are investigated, worked, appealed when appropriate, and followed through resolution.",
    icon: TrendingUp,
    accent: "blue",
  },
];

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

export function RevenueCycleStory() {
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
        aria-labelledby="revenue-cycle-title"
        className="relative isolate overflow-hidden bg-[#06141f] py-20 text-white sm:py-28 lg:py-36"
      >
        <Background />

        <Container width="wide">
          <div className="relative min-w-0">
            <Header reduceMotion={reduceMotion} />

            <ol className="mt-12 grid list-none gap-4 sm:mt-16 md:grid-cols-2 xl:grid-cols-3">
              {stages.map((stage, index) => (
                <StageCard
                  key={stage.number}
                  {...stage}
                  index={index}
                  reduceMotion={reduceMotion}
                  animateDetails={animateDetails}
                />
              ))}
            </ol>

            <RevenueStrip
              reduceMotion={reduceMotion}
              animateDetails={animateDetails}
            />
          </div>
        </Container>
      </section>
    </MotionConfig>
  );
}

function Header({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="grid min-w-0 items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)]">
      <motion.div
        {...reveal(reduceMotion, 25)}
        className="min-w-0"
      >
        <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-left text-[10px] leading-5 font-bold uppercase tracking-[0.13em] text-[#8cece5] backdrop-blur-xl sm:tracking-[0.17em]">
          <span
            aria-hidden="true"
            className="size-1.5 shrink-0 rounded-full bg-[#4fe4d8] shadow-[0_0_15px_rgba(79,228,216,0.8)]"
          />
          The Revenue Journey
        </div>

        <h2
          id="revenue-cycle-title"
          className="mt-6 max-w-[900px] text-[clamp(2.45rem,5vw,5.7rem)] leading-[1.05] font-semibold tracking-[-0.055em] sm:leading-[0.98] lg:leading-[0.96] lg:tracking-[-0.06em]"
        >
          Revenue doesn&apos;t move in a straight line.
          <span className="mt-2 block bg-gradient-to-r from-[#ffffff] via-[#9df0e9] to-[#77aaff] bg-clip-text pb-1 text-transparent">
            We manage every handoff.
          </span>
        </h2>
      </motion.div>

      <motion.div
        {...reveal(reduceMotion, 20, 0.15)}
        className="min-w-0 max-w-[560px] lg:justify-self-end"
      >
        <p className="text-[15px] leading-7 text-white/75 sm:text-base sm:leading-8">
          Medical billing and revenue cycle management involve connected
          steps, from eligibility through final payment. Each stage can
          create delays, denials or lost revenue. Kinz HealthOps brings
          those stages into one disciplined operating model with clear
          accountability and continuous follow-up.
        </p>

        <div className="mt-6 flex items-center gap-3 text-[12px] leading-5 font-medium text-white/70">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-[#42d9cd]/15 bg-[#42d9cd]/[0.07] text-[#68e5dc]">
            <BadgeCheck
              aria-hidden="true"
              className="size-4"
              strokeWidth={1.8}
            />
          </span>
          <span>One revenue cycle. One operating view.</span>
        </div>
      </motion.div>
    </div>
  );
}

function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-56 top-20 size-[600px] rounded-full bg-[#15c8bb]/[0.10] blur-[150px]" />
      <div className="absolute -right-60 top-72 size-[650px] rounded-full bg-[#4c8dff]/[0.10] blur-[160px]" />

      <div
        className="
          absolute inset-0 opacity-35
          bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)]
          bg-[size:64px_64px]
          [mask-image:linear-gradient(to_bottom,black,transparent_95%)]
        "
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-1/2 top-[41%] h-px w-[76%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#36ddcf]/15 to-transparent blur-[0.5px]" />
    </div>
  );
}

type StageCardProps = Stage & {
  index: number;
  reduceMotion: boolean;
  animateDetails: boolean;
};

function StageCard({
  number,
  title,
  description,
  icon: Icon,
  accent,
  index,
  reduceMotion,
  animateDetails,
}: StageCardProps) {
  const isBlue = accent === "blue";
  const titleId = `rcm-stage-${number}`;

  return (
    <li className="min-w-0">
      <motion.article
        {...reveal(reduceMotion, 28, index * 0.07)}
        whileHover={
          reduceMotion
            ? undefined
            : { y: -4, transition: { duration: 0.25, ease } }
        }
        aria-labelledby={titleId}
        className="
          group relative flex h-full min-h-[285px] min-w-0 flex-col
          overflow-hidden rounded-[24px]
          border border-white/[0.075]
          bg-white/[0.035]
          p-6 backdrop-blur-xl
          transition-[border-color,background-color,box-shadow] duration-500
          hover:border-white/[0.13]
          hover:bg-white/[0.055]
          hover:shadow-[0_28px_80px_rgba(0,0,0,0.22)]
          sm:p-7
        "
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute right-[-70px] top-[-70px] size-[190px] rounded-full blur-[90px] transition-opacity duration-500 group-hover:opacity-100 ${
            isBlue
              ? "bg-[#4c8dff]/[0.12]"
              : "bg-[#36ddcf]/[0.12]"
          }`}
        />

        <div className="relative flex items-start justify-between">
          <span
            aria-hidden="true"
            className="text-[11px] font-semibold tracking-[0.15em] text-white/55"
          >
            {number}
          </span>

          <span
            className={`flex size-11 shrink-0 items-center justify-center rounded-[14px] border ${
              isBlue
                ? "border-[#679fff]/15 bg-[#4c8dff]/[0.08] text-[#76a8ff]"
                : "border-[#36ddcf]/15 bg-[#36ddcf]/[0.08] text-[#66e8dd]"
            }`}
          >
            <Icon
              aria-hidden="true"
              className="size-[18px]"
              strokeWidth={1.7}
            />
          </span>
        </div>

        <div className="relative mt-10 sm:mt-14">
          <h3
            id={titleId}
            className="text-[clamp(1.25rem,2vw,1.4375rem)] leading-[1.25] font-semibold tracking-[-0.035em] text-white"
          >
            {title}
          </h3>

          <p className="mt-3 max-w-[420px] text-[14px] leading-7 text-white/70">
            {description}
          </p>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-7 bottom-0 h-px overflow-hidden bg-white/[0.05]"
        >
          <motion.div
            initial={false}
            animate={
              animateDetails
                ? { x: ["-100%", "200%"], opacity: 1 }
                : { x: "-100%", opacity: 0 }
            }
            transition={
              animateDetails
                ? {
                    duration: 3,
                    delay: index * 0.15,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "linear",
                  }
                : { duration: 0.2 }
            }
            className={`h-full w-24 bg-gradient-to-r from-transparent ${
              isBlue ? "via-[#6a9fff]" : "via-[#58e6db]"
            } to-transparent`}
          />
        </div>
      </motion.article>
    </li>
  );
}

function RevenueStrip({
  reduceMotion,
  animateDetails,
}: {
  reduceMotion: boolean;
  animateDetails: boolean;
}) {
  return (
    <motion.div
      {...reveal(reduceMotion, 24)}
      className="relative mt-5 overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.04] p-5 backdrop-blur-xl sm:p-6"
    >
      <div className="grid min-w-0 items-center gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="flex min-w-0 items-center gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-[15px] border border-[#44d9cd]/15 bg-[#44d9cd]/[0.08] text-[#6be7dd]">
            <CircleDollarSign
              aria-hidden="true"
              className="size-5"
              strokeWidth={1.7}
            />
          </span>

          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#72dfd6]">
              Revenue Continuity
            </p>

            <p className="mt-1 text-[15px] leading-7 text-white/75">
              Keep unresolved accounts visible and the next action clear.
            </p>
          </div>
        </div>

        <div className="relative min-w-0 py-1">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[8px] h-px bg-white/[0.08]"
          />

          <motion.div
            aria-hidden="true"
            initial={false}
            animate={
              animateDetails
                ? { left: ["0%", "calc(100% - 8px)"], opacity: 1 }
                : { left: "0%", opacity: 0 }
            }
            transition={
              animateDetails
                ? {
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "linear",
                  }
                : { duration: 0.2 }
            }
            className="pointer-events-none absolute top-[4px] size-2 rounded-full bg-[#5eeadd] shadow-[0_0_18px_rgba(94,234,221,0.9)]"
          />

          <ol
            aria-label="Revenue continuity stages"
            className="relative grid list-none grid-cols-5 gap-1"
          >
            {["Verify", "Submit", "Process", "Post", "Recover"].map(
              (item) => (
                <li
                  key={item}
                  className="flex min-w-0 flex-col items-center gap-2 text-center"
                >
                  <span
                    aria-hidden="true"
                    className="size-2 shrink-0 rounded-full border border-white/20 bg-[#0b1e29]"
                  />
                  <span className="text-[10px] leading-4 font-semibold uppercase tracking-[0.03em] text-white/65 sm:text-[11px] sm:tracking-[0.09em]">
                    {item}
                  </span>
                </li>
              ),
            )}
          </ol>
        </div>
      </div>
    </motion.div>
  );
}