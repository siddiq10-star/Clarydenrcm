"use client";

import Link from "next/link";
import {
  motion,
  MotionConfig,
  useReducedMotion,
} from "motion/react";
import {
  Activity,
  ArrowRight,
  Brain,
  HeartPulse,
  Hospital,
  PersonStanding,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const ease: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

type Specialty = {
  name: string;
  href: string;
  icon: LucideIcon;
};

type MotionProps = {
  reduceMotion: boolean;
};

const specialties: Specialty[] = [
  {
    name: "Behavioral Health",
    href: "/specialties/behavioral-health",
    icon: Brain,
  },
  {
    name: "Family Medicine",
    href: "/specialties/family-medicine",
    icon: Stethoscope,
  },
  {
    name: "Internal Medicine",
    href: "/specialties/internal-medicine",
    icon: Hospital,
  },
  {
    name: "Cardiology",
    href: "/specialties/cardiology",
    icon: HeartPulse,
  },
  {
    name: "Orthopedics",
    href: "/specialties/orthopedics",
    icon: PersonStanding,
  },
  {
    name: "Physical Therapy",
    href: "/specialties/physical-therapy",
    icon: Activity,
  },
];

function reveal(
  reduceMotion: boolean,
  distance = 22,
  delay = 0,
) {
  return {
    initial: reduceMotion
      ? (false as const)
      : { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
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

export function SpecialtiesPreview() {
  const reduceMotion = useReducedMotion() === true;

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="specialties"
        aria-labelledby="specialties-preview-title"
        className="relative isolate overflow-hidden bg-[#f7fafb] py-20 sm:py-28 lg:py-32"
      >
        <Background />

        <Container width="wide">
          <div className="relative min-w-0">
            <Header reduceMotion={reduceMotion} />

            <ul className="mt-12 grid min-w-0 list-none gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {specialties.map((specialty, index) => (
                <SpecialtyCard
                  key={specialty.href}
                  {...specialty}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </ul>

            <AssessmentCTA reduceMotion={reduceMotion} />
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
      <div className="absolute -left-52 top-10 size-[520px] rounded-full bg-[#15c8bb]/[0.06] blur-[150px]" />

      <div className="absolute -right-48 top-[40%] size-[500px] rounded-full bg-[#4c8dff]/[0.06] blur-[150px]" />

      <div
        className="
          absolute inset-0 opacity-40
          bg-[linear-gradient(rgba(7,23,34,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(7,23,34,0.018)_1px,transparent_1px)]
          bg-[size:72px_72px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]
        "
      />
    </div>
  );
}

function Header({ reduceMotion }: MotionProps) {
  return (
    <div className="grid min-w-0 gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.65fr)] lg:items-end">
      <motion.div
        {...reveal(reduceMotion)}
        className="min-w-0"
      >
        <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-black/[0.07] bg-white/75 px-3 py-2 text-left text-[10px] leading-5 font-bold uppercase tracking-[0.13em] text-[#344d58] backdrop-blur-xl sm:tracking-[0.16em]">
          <span
            aria-hidden="true"
            className="size-1.5 shrink-0 rounded-full bg-[#15c8bb] shadow-[0_0_12px_rgba(21,200,187,0.7)]"
          />

          Specialty-Aware RCM
        </div>

        <h2
          id="specialties-preview-title"
          className="mt-6 max-w-[840px] text-[clamp(2.35rem,4.5vw,5rem)] leading-[1.06] font-semibold tracking-[-0.055em] text-[#071722] sm:leading-[1] lg:leading-[0.97] lg:tracking-[-0.06em]"
        >
          Different practices.

          <span className="mt-2 block bg-gradient-to-r from-[#124e59] via-[#0a9093] to-[#347be4] bg-clip-text pb-1 text-transparent forced-colors:bg-none forced-colors:text-[CanvasText]">
            Different revenue cycles.
          </span>
        </h2>
      </motion.div>

      <motion.div
        {...reveal(reduceMotion, 18, 0.1)}
        className="min-w-0 max-w-[520px] lg:justify-self-end"
      >
        <p className="text-[15px] leading-7 text-[#526b76]">
          Medical billing and revenue cycle management workflows vary by
          specialty, payer environment and practice structure. Our
          operating model adapts around those differences.
        </p>

        <Link
          href={siteConfig.routes.specialties}
          className="group mt-5 inline-flex min-h-11 items-center gap-2 rounded-md text-[13px] font-semibold text-[#173a46] underline-offset-4 hover:underline"
        >
          Explore all specialties

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

type SpecialtyCardProps = Specialty & {
  index: number;
  reduceMotion: boolean;
};

function SpecialtyCard({
  name,
  href,
  icon: Icon,
  index,
  reduceMotion,
}: SpecialtyCardProps) {
  return (
    <motion.li
      {...reveal(reduceMotion, 18, index * 0.05)}
      className="min-w-0"
    >
      <Link
        href={href}
        className="
          group flex h-full min-h-[92px] min-w-0
          items-center justify-between gap-4
          rounded-[20px]
          border border-black/[0.065]
          bg-white/80 p-4
          shadow-[0_12px_35px_rgba(7,23,34,0.035)]
          backdrop-blur-xl
          transition-[transform,border-color,background-color,box-shadow] duration-300
          motion-safe:hover:-translate-y-0.5
          hover:border-[#15c8bb]/20
          hover:bg-white
          motion-safe:hover:shadow-[0_18px_45px_rgba(7,23,34,0.065)]
          focus-visible:outline-2 focus-visible:outline-offset-4
        "
      >
        <div className="flex min-w-0 items-center gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] border border-[#15c8bb]/12 bg-[#15c8bb]/[0.055] text-[#0c948a]">
            <Icon
              aria-hidden="true"
              className="size-[18px]"
              strokeWidth={1.7}
            />
          </span>

          <h3 className="min-w-0 text-[14px] leading-5 font-semibold tracking-[-0.02em] text-[#17323d]">
            {name}
          </h3>
        </div>

        <ArrowRight
          aria-hidden="true"
          className="size-4 shrink-0 text-[#8a9ca4] transition-[color,transform] duration-300 group-hover:text-[#0b9188] motion-safe:group-hover:translate-x-1 group-focus-visible:text-[#0b9188]"
          strokeWidth={1.8}
        />
      </Link>
    </motion.li>
  );
}

function AssessmentCTA({ reduceMotion }: MotionProps) {
  return (
    <motion.div
      {...reveal(reduceMotion, 24)}
      className="
        relative mt-16 min-w-0 overflow-hidden
        rounded-[30px]
        border border-[#0b2935]
        bg-[#071722]
        px-6 py-10 text-white
        shadow-[0_32px_90px_rgba(7,23,34,0.16)]
        sm:px-8
        lg:px-10 lg:py-12
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-[-100px] size-[300px] rounded-full bg-[#25d7ca]/[0.12] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-[-130px] size-[340px] rounded-full bg-[#4c8dff]/[0.11] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 opacity-30
          bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
          bg-[size:58px_58px]
        "
      />

      <div className="relative grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="min-w-0">
          <p className="text-[10px] leading-5 font-bold uppercase tracking-[0.14em] text-[#71e6dd] sm:tracking-[0.16em]">
            Revenue Cycle Assessment
          </p>

          <h3 className="mt-4 max-w-[760px] text-[clamp(2rem,3.5vw,4rem)] leading-[1.06] font-semibold tracking-[-0.05em] sm:leading-[1] sm:tracking-[-0.055em]">
            Before changing your billing operation,

            <span className="mt-1 block text-white/70">
              understand where it is losing momentum.
            </span>
          </h3>

          <p className="mt-5 max-w-[680px] text-[14px] leading-7 text-white/75">
            Start with a structured conversation around A/R, denials,
            claim workflow and revenue-cycle visibility.
          </p>
        </div>

        <Link
          href={siteConfig.routes.assessment}
          className="
            group inline-flex min-h-[56px] w-full
            items-center justify-center gap-2.5
            rounded-[16px]
            bg-white px-6 py-3
            text-center text-[14px] leading-5 font-semibold
            text-[#071722]
            shadow-[0_18px_50px_rgba(0,0,0,0.15)]
            transition-[transform,box-shadow] duration-300
            motion-safe:hover:-translate-y-0.5
            motion-safe:hover:shadow-[0_24px_60px_rgba(0,0,0,0.2)]
            lg:w-auto
          "
        >
          Request an RCM Assessment

          <ArrowRight
            aria-hidden="true"
            className="size-4 shrink-0 transition-transform duration-300 motion-safe:group-hover:translate-x-1"
            strokeWidth={1.8}
          />
        </Link>
      </div>
    </motion.div>
  );
}