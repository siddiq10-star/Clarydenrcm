import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Mail,
  ShieldCheck,
} from "lucide-react";

import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

/* -------------------------------------------------------------------------- */
/* Configuration                                                              */
/* -------------------------------------------------------------------------- */

const BRAND_NAME = "Claryden RCM";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#79e5dc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#041019]";

/* -------------------------------------------------------------------------- */
/* Site Footer                                                                */
/* -------------------------------------------------------------------------- */

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#041019] text-white">
      <FooterBackground />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <div className="border-b border-white/10 py-14 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_1.45fr] lg:gap-16">
            <BrandColumn />

            <NavigationColumns />
          </div>
        </div>

        <BottomBar />
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/* Background                                                                 */
/* -------------------------------------------------------------------------- */

function FooterBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-56 top-0 size-[520px] rounded-full bg-[#23d4c7]/[0.07] blur-[150px]" />

      <div className="absolute -right-56 bottom-[-180px] size-[600px] rounded-full bg-[#4c8dff]/[0.06] blur-[170px]" />

      <div
        className="
          absolute inset-0 opacity-30
          bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)]
          bg-[size:64px_64px]
          [mask-image:linear-gradient(to_bottom,black,transparent_95%)]
        "
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#53e2d6]/25 to-transparent" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Brand Column                                                               */
/* -------------------------------------------------------------------------- */

function BrandColumn() {
  const email = siteConfig.contact.email;
  const linkedin = siteConfig.social.linkedin;

  return (
    <div className="min-w-0 max-w-[520px]">
      <FooterBrand />

      <h2 className="mt-8 max-w-[500px] text-[clamp(2rem,3vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-white">
        Revenue operations built around
        <span className="mt-1 block bg-gradient-to-r from-[#9cf0e9] to-[#86b4ff] bg-clip-text text-transparent">
          clarity and accountability.
        </span>
      </h2>

      <p className="mt-5 max-w-[480px] text-sm leading-7 text-white/70">
        Claryden RCM supports healthcare practices with
        structured medical billing, denial management, A/R
        follow-up, payment workflows, and revenue-cycle
        operations.
      </p>

      <Link
        href={siteConfig.routes.assessment}
        className={`
          group mt-7 inline-flex min-h-12 items-center
          justify-center gap-2 rounded-xl bg-[#b8f4ee]
          px-5 py-3 text-[13px] font-semibold
          !text-[#06252d]
          shadow-[0_8px_28px_rgba(35,212,199,0.10)]
          transition-[background-color,transform,box-shadow]
          duration-200 hover:-translate-y-0.5
          hover:bg-[#d4faf6]
          hover:shadow-[0_12px_32px_rgba(35,212,199,0.15)]
          motion-reduce:transform-none
          motion-reduce:transition-none
          ${focusRing}
        `}
      >
        <span className="!text-[#06252d]">
          Request an RCM Assessment
        </span>

        <ArrowUpRight
          aria-hidden="true"
          className="size-4 shrink-0 !text-[#06252d]"
          strokeWidth={1.8}
        />
      </Link>

      {(email || linkedin) && (
        <div className="mt-7 flex flex-wrap items-center gap-3">
          {email ? (
            <a
              href={`mailto:${email}`}
              className={`
                group inline-flex min-h-11 max-w-full
                items-center gap-2.5 rounded-xl border
                border-white/10 bg-white/[0.035]
                px-4 py-3 text-[13px] font-medium
                text-white/75 transition-colors
                hover:border-white/20 hover:bg-white/[0.06]
                hover:text-white motion-reduce:transition-none
                ${focusRing}
              `}
            >
              <Mail
                aria-hidden="true"
                className="size-4 shrink-0 text-[#81e8df]"
                strokeWidth={1.8}
              />

              <span className="break-all">{email}</span>
            </a>
          ) : null}

          {linkedin ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${BRAND_NAME} on LinkedIn (opens in a new tab)`}
              className={`
                inline-flex size-11 shrink-0 items-center
                justify-center rounded-xl border border-white/10
                bg-white/[0.035] text-white/75
                transition-[background-color,color,transform]
                duration-200 hover:-translate-y-0.5
                hover:border-white/20 hover:bg-white/[0.07]
                hover:text-white motion-reduce:transform-none
                motion-reduce:transition-none
                ${focusRing}
              `}
            >
              <LinkedInIcon className="size-4" />
            </a>
          ) : null}
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Actual Claryden RCM Logo                                                   */
/* -------------------------------------------------------------------------- */

function FooterBrand() {
  return (
    <Link
      href={siteConfig.routes.home}
      aria-label={`${BRAND_NAME} home`}
      className={`
        group inline-flex max-w-full items-center gap-3
        rounded-2xl border border-white/10 bg-white
        px-3.5 py-3
        shadow-[0_12px_36px_rgba(0,0,0,0.10)]
        transition-[box-shadow,transform] duration-200
        hover:-translate-y-0.5
        hover:shadow-[0_16px_44px_rgba(0,0,0,0.16)]
        motion-reduce:transform-none
        motion-reduce:transition-none
        ${focusRing}
      `}
    >
      <Image
        src="/brand/claryden-mark.png"
        alt=""
        aria-hidden="true"
        width={568}
        height={472}
        sizes="48px"
        className="h-auto w-11 shrink-0 object-contain sm:w-12"
      />

      <span className="flex min-w-0 flex-col justify-center">
        <Image
          src="/brand/claryden-wordmark.png"
          alt=""
          aria-hidden="true"
          width={1100}
          height={193}
          sizes="(max-width: 639px) 154px, 174px"
          className="h-auto w-[154px] max-w-full object-contain sm:w-[174px]"
        />

        <span className="mt-1 block text-[8px] font-semibold uppercase leading-none tracking-[0.12em] text-[#516774]">
          Revenue Cycle Management
        </span>
      </span>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Navigation Columns                                                         */
/* -------------------------------------------------------------------------- */

function NavigationColumns() {
  return (
    <div className="grid min-w-0 grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:gap-x-8">
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
  items: readonly {
    label: string;
    href: string;
  }[];
}

function FooterColumn({
  title,
  items,
}: FooterColumnProps) {
  return (
    <nav aria-label={`${title} footer navigation`}>
      <h2 className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8ce9e1]">
        {title}
      </h2>

      <ul className="mt-5 space-y-3.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`
                group inline-flex items-start gap-1.5
                rounded-sm text-[13px] leading-6
                text-white/70 transition-colors
                hover:text-white motion-reduce:transition-none
                ${focusRing}
              `}
            >
              <span>{item.label}</span>

              <ArrowUpRight
                aria-hidden="true"
                className="
                  mt-1 size-3 shrink-0 text-[#8ce9e1]
                  opacity-0 transition-[opacity,transform]
                  duration-200 group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5 group-hover:opacity-100
                  group-focus-visible:opacity-100
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
                strokeWidth={1.8}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/* Bottom Bar                                                                 */
/* -------------------------------------------------------------------------- */

function BottomBar() {
  return (
    <div className="flex flex-col gap-5 py-6 sm:py-7 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
      <div className="flex flex-col gap-3">
        <p className="text-xs leading-5 text-white/60">
          © {new Date().getFullYear()} {BRAND_NAME}.
          All rights reserved.
        </p>

        <div className="flex items-start gap-2 text-xs leading-5 text-white/55">
          <ShieldCheck
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-[#81e8df]"
            strokeWidth={1.8}
          />

          <span>
            Security-conscious healthcare operations
          </span>
        </div>
      </div>

      <p className="max-w-[510px] text-[11px] leading-5 text-white/55 lg:text-right">
        This website is intended for business inquiries only.
        Please do not submit patient information or Protected
        Health Information (PHI) through public website forms.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* LinkedIn Icon                                                              */
/* -------------------------------------------------------------------------- */

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
      <path d="M5.338 3.5C5.338 4.88 4.23 6 2.86 6 1.49 6 .382 4.88.382 3.5S1.49 1 2.86 1c1.37 0 2.478 1.12 2.478 2.5ZM.72 7.95H5v13.69H.72V7.95Zm6.9 0h4.1v1.87h.06c.57-1.09 1.97-2.24 4.05-2.24 4.33 0 5.13 6.62v7.44h-4.27v-6.6c0-1.57-.03-3.6-2.17-3.6-2.17 0-2.5 1.72-2.5 3.49v6.71H7.62V7.95Z" />
    </svg>
  );
}