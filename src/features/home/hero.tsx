"use client";

import Link from "next/link";

import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  CircleDollarSign,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const workflow = [
  {
    label: "Eligibility",
    status: "Verified",
  },
  {
    label: "Claim",
    status: "Created",
  },
  {
    label: "Clearinghouse",
    status: "Accepted",
  },
  {
    label: "Payer",
    status: "Processing",
  },
  {
    label: "Payment",
    status: "Posted",
  },
];

const activityItems = [
  {
    icon: FileCheck2,
    label: "Claim accepted",
    value: "#KH-28419",
    tone: "cyan" as const,
  },
  {
    icon: CircleDollarSign,
    label: "ERA received",
    value: "+$1,284",
    tone: "blue" as const,
  },
  {
    icon: BadgeCheck,
    label: "Denial resolved",
    value: "CO-16",
    tone: "cyan" as const,
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7fafb] pt-[105px] sm:pt-[112px] lg:pt-[116px]">
      <HeroBackground />

      <Container width="wide">
        <div className="relative grid min-h-[calc(100vh-116px)] items-center gap-12 pb-16 lg:grid-cols-[0.94fr_1.06fr] lg:gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:gap-12">
          <HeroContent />

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.975,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.18,
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <RevenueCommandCenter />
          </motion.div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white"
      />
    </section>
  );
}

function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(7,23,34,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(7,23,34,0.022)_1px,transparent_1px)]
          bg-[size:56px_56px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]
        "
      />

      <div className="absolute -left-40 top-28 h-[500px] w-[500px] rounded-full bg-[#38dfd1]/[0.10] blur-[120px]" />

      <div className="absolute -right-32 top-10 h-[600px] w-[600px] rounded-full bg-[#4c8dff]/[0.10] blur-[135px]" />

      <div className="absolute left-[45%] top-[38%] h-[350px] w-[350px] rounded-full bg-[#27c9bb]/[0.055] blur-[110px]" />

      <motion.div
        animate={{
          y: ["-150%", "650%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-transparent via-[#41d9cc]/[0.07] to-transparent opacity-60"
      />
    </div>
  );
}

function HeroContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 28,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-10 max-w-[700px]"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.08,
          duration: 0.6,
        }}
        className="
          inline-flex min-h-8 items-center gap-2.5
          rounded-full border border-black/[0.08]
          bg-white/70 px-3
          text-[10px] font-bold uppercase
          tracking-[0.16em] text-[#29434f]
          shadow-[inset_0_1px_rgba(255,255,255,0.85)]
          backdrop-blur-xl
          sm:text-[11px]
        "
      >
        <span className="relative flex size-2 items-center justify-center">
          <span className="absolute size-2 rounded-full bg-[#18c8bb]/25" />

          <span className="relative size-1.5 rounded-full bg-[#18c8bb] shadow-[0_0_12px_rgba(24,200,187,0.7)]" />
        </span>

        End-to-End Revenue Cycle Management
      </motion.div>

      <h1
        className="
          mt-7
          max-w-[680px]
          font-semibold
          text-[clamp(3.2rem,4.5vw,5rem)]
          leading-[0.93]
          tracking-[-0.065em]
          text-[#071722]
        "
      >
        <span className="block whitespace-nowrap">
          Every claim.
        </span>

        <span className="mt-1 block whitespace-nowrap">
          Every dollar.
        </span>

        <span
          className="
            mt-1 block whitespace-nowrap
            bg-gradient-to-r
            from-[#123e4c]
            via-[#078b91]
            to-[#367ce8]
            bg-clip-text
            text-transparent
          "
        >
          Clearly managed.
        </span>
      </h1>

      <p className="mt-7 max-w-[620px] text-[clamp(1rem,1.1vw,1.12rem)] leading-[1.75] text-[#536b76]">
        claryden rcm brings structured billing, denial management,
        A/R follow-up and revenue-cycle visibility into one disciplined
        operating model built for modern healthcare practices.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link
          href={siteConfig.routes.assessment}
          className="
            group relative inline-flex min-h-[54px]
            items-center justify-center gap-2.5
            overflow-hidden rounded-[15px]
            bg-[#071c27] px-6
            text-[14px] font-semibold !text-white
            shadow-[0_16px_42px_rgba(5,28,38,0.19)]
            transition-all duration-300
            hover:-translate-y-0.5
            hover:shadow-[0_22px_54px_rgba(5,28,38,0.25)]
          "
        >
          <span className="relative z-10 text-white">
            Request an RCM Assessment
          </span>

          <ArrowUpRight
            className="relative z-10 size-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.8}
          />

          <span className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#55e8dc] to-transparent opacity-90" />

          <span className="absolute -left-20 top-[-100%] h-[300%] w-12 rotate-[20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-all duration-700 group-hover:left-[120%]" />
        </Link>

        <Link
          href={siteConfig.routes.services}
          className="
            group inline-flex min-h-[54px]
            items-center justify-center gap-2.5
            rounded-[15px]
            border border-black/[0.08]
            bg-white/72 px-6
            text-[14px] font-semibold
            text-[#17333f]
            shadow-[inset_0_1px_rgba(255,255,255,0.9)]
            backdrop-blur-xl
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-black/[0.14]
            hover:bg-white
            hover:shadow-[0_14px_35px_rgba(7,23,34,0.07)]
          "
        >
          Explore Our Services

          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={1.8}
          />
        </Link>
      </div>

      <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
        <TrustItem
          icon={ShieldCheck}
          label="Security-first operations"
        />

        <TrustItem
          icon={Activity}
          label="Structured RCM workflows"
        />

        <TrustItem
          icon={Sparkles}
          label="Transparent reporting"
        />
      </div>
    </motion.div>
  );
}

function TrustItem({
  icon: Icon,
  label,
}: {
  icon: typeof ShieldCheck;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 text-[12px] font-medium text-[#607781] sm:text-[13px]">
      <span className="flex size-7 items-center justify-center rounded-lg border border-[#15c8bb]/15 bg-[#15c8bb]/[0.06] text-[#0f8d86]">
        <Icon
          className="size-3.5"
          strokeWidth={1.9}
        />
      </span>

      {label}
    </div>
  );
}

function RevenueCommandCenter() {
  return (
    <div className="relative mx-auto w-full max-w-[690px] xl:max-w-[715px]">
      <div
        aria-hidden="true"
        className="absolute inset-12 -z-10 rounded-[60px] bg-[#37d9cd]/10 blur-[90px]"
      />

      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute right-2 -top-7 z-20 hidden
          w-[200px] rounded-[18px]
          border border-white/70
          bg-white/85 p-3.5
          shadow-[0_18px_50px_rgba(7,23,34,0.12)]
          backdrop-blur-2xl
          xl:block
        "
      >
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#19c8b7]/10 text-[#0c9588]">
            <Check className="size-4" />
          </span>

          <div>
            <p className="text-[11px] font-semibold text-[#132f3a]">
              Claim accepted
            </p>

            <p className="mt-0.5 text-[9px] leading-4 text-[#80939b]">
              Clearinghouse validation complete
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 6.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
        className="
          absolute -bottom-5 -left-5 z-20 hidden
          w-[190px] rounded-[17px]
          border border-white/70
          bg-white/88 p-3.5
          shadow-[0_18px_50px_rgba(7,23,34,0.12)]
          backdrop-blur-2xl
          xl:block
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#82949c]">
              A/R Recovery
            </p>

            <p className="mt-1 text-[20px] font-semibold tracking-[-0.04em] text-[#102c37]">
              +$8,920
            </p>
          </div>

          <span className="flex size-9 items-center justify-center rounded-xl bg-[#4c8dff]/10 text-[#3875d8]">
            <TrendingUp className="size-4" />
          </span>
        </div>
      </motion.div>

      <div
        className="
          relative overflow-hidden
          rounded-[28px]
          border border-black/[0.075]
          bg-white/[0.86]
          shadow-[0_38px_100px_rgba(7,23,34,0.13)]
          backdrop-blur-[30px]
        "
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent" />

        <div
          className="
            pointer-events-none absolute inset-0 opacity-[0.16]
            bg-[linear-gradient(rgba(7,23,34,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(7,23,34,0.04)_1px,transparent_1px)]
            bg-[size:50px_50px]
            [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]
          "
        />

        <DashboardHeader />

        <div className="relative px-5 pt-5 sm:px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#82949c]">
                Monthly Collections
              </p>

              <div className="mt-2 flex items-end gap-3">
                <span className="text-[clamp(2.45rem,4vw,3.7rem)] font-semibold leading-none tracking-[-0.06em] text-[#071722]">
                  $412,640
                </span>

                <span className="mb-1 flex items-center gap-1 rounded-full bg-[#16b89e]/[0.08] px-2 py-1 text-[9px] font-semibold text-[#0b967f]">
                  <TrendingUp className="size-3" />
                  8.4%
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[9px] text-[#7f929a]">
              <span className="relative flex size-2 items-center justify-center">
                <span className="absolute size-2 rounded-full bg-[#20c8b8]/20" />
                <span className="relative size-1.5 rounded-full bg-[#20c8b8]" />
              </span>

              Operational overview
            </div>
          </div>

          <RevenueChart />
        </div>

        <div className="relative grid grid-cols-2 border-y border-black/[0.06] md:grid-cols-4">
          <Metric
            label="Claims"
            value="2,841"
            detail="Submitted"
          />

          <Metric
            label="Accepted"
            value="97.4%"
            detail="First pass"
            positive
          />

          <Metric
            label="Denials"
            value="3.2%"
            detail="Current"
            positive
          />

          <Metric
            label="A/R"
            value="$284K"
            detail="12.8% lower"
            positive
          />
        </div>

        <div className="relative p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#82949c]">
                Revenue Cycle Flow
              </p>

              <p className="mt-1 text-[10px] text-[#9aabb2]">
                Claim lifecycle visibility
              </p>
            </div>

            <span className="rounded-lg border border-[#15c8bb]/15 bg-[#15c8bb]/[0.05] px-2.5 py-1.5 text-[8px] font-semibold text-[#0a8b82]">
              Active
            </span>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-5">
            {workflow.map((step, index) => (
              <WorkflowStep
                key={step.label}
                label={step.label}
                status={step.status}
                index={index}
              />
            ))}
          </div>

          <div className="mt-4 rounded-[17px] border border-black/[0.06] bg-[#f7fafb]/80 p-3.5">
            <div className="mb-2.5 flex items-center justify-between">
              <p className="text-[10px] font-semibold text-[#38515c]">
                Recent activity
              </p>

              <span className="text-[8px] text-[#94a4ab]">
                Illustrative
              </span>
            </div>

            <div className="space-y-1.5">
              {activityItems.map((item, index) => (
                <ActivityRow
                  key={item.label}
                  {...item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardHeader() {
  return (
    <div className="relative flex items-center justify-between border-b border-black/[0.06] px-5 py-4 sm:px-6">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-[12px] bg-[#071c27] shadow-[0_8px_22px_rgba(5,28,38,0.18)]">
          <Activity
            className="size-[17px] text-[#5be5da]"
            strokeWidth={1.8}
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-[13px] font-semibold tracking-[-0.015em] text-[#102b36]">
              Revenue Command Center
            </h2>

            <span className="size-1.5 rounded-full bg-[#29cabb] shadow-[0_0_9px_rgba(41,202,187,0.8)]" />
          </div>

          <p className="mt-0.5 text-[9px] text-[#81939b]">
            Illustrative RCM performance interface
          </p>
        </div>
      </div>

      <span className="hidden rounded-lg border border-black/[0.06] bg-white/70 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-[#82949c] sm:block">
        Operations
      </span>
    </div>
  );
}

function RevenueChart() {
  return (
    <div className="relative mt-5 h-[96px] overflow-hidden">
      <div className="absolute inset-0 flex flex-col justify-between">
        {[0, 1, 2, 3].map((line) => (
          <div
            key={line}
            className="h-px w-full bg-black/[0.045]"
          />
        ))}
      </div>

      <svg
        viewBox="0 0 640 110"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="revenue-area"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#29cbbb"
              stopOpacity="0.2"
            />

            <stop
              offset="100%"
              stopColor="#29cbbb"
              stopOpacity="0"
            />
          </linearGradient>

          <linearGradient
            id="revenue-line"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor="#3d8cf3"
            />

            <stop
              offset="55%"
              stopColor="#18c3b5"
            />

            <stop
              offset="100%"
              stopColor="#52ded3"
            />
          </linearGradient>
        </defs>

        <motion.path
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.6,
            delay: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          d="M0 94 C55 88,80 91,120 75 C160 60,184 70,222 59 C265 46,296 58,335 42 C374 26,404 37,440 28 C480 17,514 29,550 16 C585 6,610 12,640 3"
          fill="none"
          stroke="url(#revenue-line)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <motion.path
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 0.7,
          }}
          d="M0 94 C55 88,80 91,120 75 C160 60,184 70,222 59 C265 46,296 58,335 42 C374 26,404 37,440 28 C480 17,514 29,550 16 C585 6,610 12,640 3 L640 110 L0 110 Z"
          fill="url(#revenue-area)"
        />
      </svg>
    </div>
  );
}

function Metric({
  label,
  value,
  detail,
  positive = false,
}: {
  label: string;
  value: string;
  detail: string;
  positive?: boolean;
}) {
  return (
    <div className="border-black/[0.06] p-4 odd:border-r md:border-r md:last:border-r-0">
      <p className="text-[8px] font-semibold uppercase tracking-[0.13em] text-[#8b9ca3]">
        {label}
      </p>

      <p className="mt-1 text-[19px] font-semibold tracking-[-0.035em] text-[#17323d]">
        {value}
      </p>

      <div
        className={`mt-1 flex items-center gap-1 text-[8px] ${
          positive
            ? "text-[#0b9883]"
            : "text-[#92a2a9]"
        }`}
      >
        {positive ? (
          <TrendingDown className="size-2.5" />
        ) : null}

        {detail}
      </div>
    </div>
  );
}

function WorkflowStep({
  label,
  status,
  index,
}: {
  label: string;
  status: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.7 + index * 0.08,
      }}
      className="relative overflow-hidden rounded-[13px] border border-black/[0.06] bg-white/80 p-2.5"
    >
      <div className="flex items-center gap-2">
        <span className="flex size-5.5 items-center justify-center rounded-lg bg-[#16bfae]/[0.08] text-[#079887]">
          <Check
            className="size-3"
            strokeWidth={2.2}
          />
        </span>

        <span className="truncate text-[8px] font-semibold text-[#2d4854]">
          {label}
        </span>
      </div>

      <p className="mt-2 text-[7px] uppercase tracking-[0.08em] text-[#9aabb1]">
        {status}
      </p>

      <motion.div
        initial={{
          x: "-120%",
        }}
        animate={{
          x: "220%",
        }}
        transition={{
          duration: 2.8,
          delay: 1 + index * 0.28,
          repeat: Infinity,
          repeatDelay: 3.5,
        }}
        className="absolute inset-y-0 w-10 bg-gradient-to-r from-transparent via-[#4fe1d5]/10 to-transparent"
      />
    </motion.div>
  );
}

function ActivityRow({
  icon: Icon,
  label,
  value,
  tone,
  index,
}: {
  icon: typeof WalletCards;
  label: string;
  value: string;
  tone: "cyan" | "blue";
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 10,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 1 + index * 0.12,
      }}
      className="flex items-center justify-between rounded-xl bg-white/65 px-3 py-2"
    >
      <div className="flex items-center gap-2.5">
        <span
          className={`flex size-7 items-center justify-center rounded-lg ${
            tone === "blue"
              ? "bg-[#4c8dff]/[0.08] text-[#3474d7]"
              : "bg-[#15c8bb]/[0.08] text-[#0d988c]"
          }`}
        >
          <Icon
            className="size-3.5"
            strokeWidth={1.8}
          />
        </span>

        <span className="text-[9px] font-medium text-[#435d68]">
          {label}
        </span>
      </div>

      <span className="text-[8px] font-semibold text-[#6e838c]">
        {value}
      </span>
    </motion.div>
  );
}