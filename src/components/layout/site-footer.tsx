import Link from "next/link";

import {
  ArrowUpRight,
  Mail,
  ShieldCheck,
} from "lucide-react";

import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#041019] text-white">
      <FooterBackground />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <div className="border-b border-white/[0.07] py-14 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_1.45fr]">
            <BrandColumn />

            <NavigationColumns />
          </div>
        </div>

        <BottomBar />
      </div>
    </footer>
  );
}

function FooterBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-56 top-0 size-[520px] rounded-full bg-[#23d4c7]/[0.08] blur-[150px]" />

      <div className="absolute -right-56 bottom-[-180px] size-[600px] rounded-full bg-[#4c8dff]/[0.07] blur-[170px]" />

      <div
        className="
          absolute inset-0 opacity-30
          bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)]
          bg-[size:64px_64px]
          [mask-image:linear-gradient(to_bottom,black,transparent_95%)]
        "
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#53e2d6]/20 to-transparent" />
    </div>
  );
}

function BrandColumn() {
  return (
    <div className="max-w-[520px]">
      <Link
        href={siteConfig.routes.home}
        aria-label={`${siteConfig.name} home`}
        className="inline-flex items-center gap-3"
      >
        <div className="relative flex size-11 items-center justify-center overflow-hidden rounded-[14px] border border-white/[0.08] bg-white/[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(54,221,207,0.2),transparent_55%)]" />

          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            className="relative size-6"
          >
            <path
              d="M8 7V25"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <path
              d="M22.5 7.5L9 20.3"
              stroke="#62E9DF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <path
              d="M14.2 15.5L23.3 25"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div>
          <div className="text-[17px] font-extrabold tracking-[-0.04em]">
            KINZ
            <span className="ml-1 font-medium text-white/55">
              HEALTHOPS
            </span>
          </div>

          <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/32">
            Revenue Cycle Management
          </div>
        </div>
      </Link>

      <h2 className="mt-7 max-w-[480px] text-[clamp(2rem,3vw,3.4rem)] font-semibold leading-[1] tracking-[-0.055em]">
        Revenue operations built around
        <span className="block bg-gradient-to-r from-[#9cf0e9] to-[#77aaff] bg-clip-text text-transparent">
          clarity and accountability.
        </span>
      </h2>

      <p className="mt-5 max-w-[500px] text-[14px] leading-7 text-white/45">
        Kinz HealthOps supports healthcare practices across billing,
        denials, A/R, payment workflows and revenue-cycle operations.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        {siteConfig.contact.email ? (
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="
              group inline-flex items-center gap-2
              rounded-xl border border-white/[0.08]
              bg-white/[0.035] px-4 py-3
              text-[12px] font-medium text-white/60
              transition-colors
              hover:bg-white/[0.06]
              hover:text-white
            "
          >
            <Mail
              className="size-4 text-[#69e3da]"
              strokeWidth={1.8}
            />

            {siteConfig.contact.email}
          </a>
        ) : null}

        {siteConfig.social.linkedin ? (
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kinz HealthOps on LinkedIn"
            className="
              inline-flex size-11 items-center justify-center
              rounded-xl border border-white/[0.08]
              bg-white/[0.035]
              text-white/50
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-white/[0.07]
              hover:text-white
            "
          >
            <LinkedInIcon className="size-4" />
          </a>
        ) : null}
      </div>
    </div>
  );
}

function NavigationColumns() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
      <FooterColumn
        title="Company"
        items={footerNavigation.company}
      />

      <FooterColumn
        title="Services"
        items={footerNavigation.services}
      />

      <FooterColumn
        title="Resources"
        items={footerNavigation.resources}
      />

      <FooterColumn
        title="Legal"
        items={footerNavigation.legal}
      />
    </div>
  );
}

interface FooterColumnProps {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
}

function FooterColumn({
  title,
  items,
}: FooterColumnProps) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#69ded6]">
        {title}
      </p>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="
              group flex items-center gap-1.5
              text-[13px] text-white/45
              transition-colors
              hover:text-white
            "
          >
            {item.label}

            <ArrowUpRight
              className="
                size-3 opacity-0
                transition-all duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
                group-hover:opacity-100
              "
              strokeWidth={1.8}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <p className="text-[11px] text-white/28">
          © {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>

        <div className="flex items-center gap-2 text-[10px] text-white/25">
          <ShieldCheck
            className="size-3.5 text-[#63ddd5]"
            strokeWidth={1.8}
          />

          Security-conscious healthcare operations
        </div>
      </div>

      <p className="max-w-[520px] text-[9px] leading-5 text-white/22 sm:text-right">
        This website is intended for business inquiries only. Do not
        submit patient information or Protected Health Information
        through public website forms.
      </p>
    </div>
  );
}

interface LinkedInIconProps {
  className?: string;
}

function LinkedInIcon({
  className,
}: LinkedInIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M5.338 3.5C5.338 4.88 4.23 6 2.86 6 1.49 6 .382 4.88.382 3.5S1.49 1 2.86 1c1.37 0 2.478 1.12 2.478 2.5ZM.72 7.95H5v13.69H.72V7.95Zm6.9 0h4.1v1.87h.06c.57-1.09 1.97-2.24 4.05-2.24 4.33 0 5.13 2.88 5.13 6.62v7.44h-4.27v-6.6c0-1.57-.03-3.6-2.17-3.6-2.17 0-2.5 1.72-2.5 3.49v6.71H7.62V7.95Z" />
    </svg>
  );
}