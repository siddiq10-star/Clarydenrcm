"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import {
  serviceNavigation,
  specialtyNavigation,
} from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type OpenMenu = "services" | "specialties" | null;

export function SiteHeader() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "pt-3" : "pt-4 lg:pt-5"
        )}
      >
        <div className="kinz-container-wide">
          <motion.div
            animate={{
              y: scrolled ? 0 : 2,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn(
              "relative mx-auto flex h-[68px] items-center justify-between rounded-[20px] border px-4 transition-all duration-500 lg:h-[72px] lg:px-5",
              scrolled
                ? "border-black/[0.08] bg-white/88 shadow-[0_18px_60px_rgba(7,23,34,0.10)] backdrop-blur-2xl"
                : "border-black/[0.06] bg-white/60 shadow-[0_8px_30px_rgba(7,23,34,0.04)] backdrop-blur-xl"
            )}
          >
            <Brand />

            <DesktopNavigation
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              pathname={pathname}
            />

            <div className="hidden items-center gap-2 lg:flex">
              <Link
                href={siteConfig.routes.contact}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#29434f] transition-colors hover:bg-black/[0.04] hover:text-[#071722]"
              >
                Contact
              </Link>

              <Link
                href={siteConfig.routes.assessment}
                className="group relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-[13px] bg-[#071c27] px-4 text-sm font-semibold !text-white shadow-[0_10px_28px_rgba(5,28,38,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(5,28,38,0.24)]"
              >
                <span>RCM Assessment</span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.8}
                />

                <span
                  aria-hidden="true"
                  className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-[#55e8dc] to-transparent opacity-80"
                />
              </Link>
            </div>

            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((value) => !value)}
              className="inline-flex size-11 items-center justify-center rounded-xl border border-black/[0.07] bg-white/70 text-[#071722] transition-colors hover:bg-white lg:hidden"
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </motion.div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <MobileNavigation
            pathname={pathname}
            onClose={() => setMobileOpen(false)}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

function Brand() {
  return (
    <Link
      href={siteConfig.routes.home}
      aria-label={`${siteConfig.name} home`}
      className="group flex shrink-0 items-center gap-3"
    >
      <div className="relative flex size-10 items-center justify-center overflow-hidden rounded-[13px] border border-[#0e6f72]/15 bg-[#071c27] shadow-[inset_0_1px_rgba(255,255,255,0.10),0_8px_24px_rgba(7,28,39,0.16)]">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(54,221,207,0.22),transparent_55%)]" />

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

        <span className="absolute inset-x-2 bottom-0 h-px bg-gradient-to-r from-transparent via-[#5bf0e4] to-transparent opacity-80" />
      </div>

      <div className="flex flex-col">
        <span className="text-[15px] font-extrabold leading-none tracking-[-0.035em] text-[#071722] sm:text-[16px]">
          CLARYDEN
          <span className="ml-1 font-medium text-[#48606c]">
            RCM
          </span>
        </span>

        <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.17em] text-[#7c9099] sm:block">
          Revenue Cycle Management
        </span>
      </div>
    </Link>
  );
}

interface DesktopNavigationProps {
  openMenu: OpenMenu;
  setOpenMenu: (menu: OpenMenu) => void;
  pathname: string;
}

function DesktopNavigation({
  openMenu,
  setOpenMenu,
  pathname,
}: DesktopNavigationProps) {
  return (
    <nav
      aria-label="Primary navigation"
      className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex"
    >
      <DesktopDropdownTrigger
        label="Services"
        active={
          pathname.startsWith("/services") ||
          openMenu === "services"
        }
        open={openMenu === "services"}
        onOpen={() => setOpenMenu("services")}
        onClose={() => setOpenMenu(null)}
      >
        <MegaMenu
          eyebrow="Revenue Operations"
          title="End-to-end RCM infrastructure."
          description="From eligibility and claims to denials, A/R and payment reconciliation."
          items={serviceNavigation.items}
          highlight={{
            icon: Sparkles,
            label: "Explore all services",
            description:
              "See the complete claryden rcm revenue-cycle operating model.",
            href: siteConfig.routes.services,
          }}
        />
      </DesktopDropdownTrigger>

      <DesktopDropdownTrigger
        label="Specialties"
        active={
          pathname.startsWith("/specialties") ||
          openMenu === "specialties"
        }
        open={openMenu === "specialties"}
        onOpen={() => setOpenMenu("specialties")}
        onClose={() => setOpenMenu(null)}
      >
        <MegaMenu
          eyebrow="Specialty Expertise"
          title="RCM built around how practices actually operate."
          description="Specialty-aware workflows without forcing every practice into the same process."
          items={specialtyNavigation.items}
          highlight={{
            icon: ShieldCheck,
            label: "View specialties",
            description:
              "Explore revenue-cycle support across medical specialties.",
            href: siteConfig.routes.specialties,
          }}
        />
      </DesktopDropdownTrigger>

      <DesktopLink
        href={siteConfig.routes.howItWorks}
        active={pathname.startsWith(
          siteConfig.routes.howItWorks
        )}
      >
        How It Works
      </DesktopLink>

      <DesktopLink
        href={siteConfig.routes.security}
        active={pathname.startsWith(
          siteConfig.routes.security
        )}
      >
        Security
      </DesktopLink>

      <DesktopLink
        href={siteConfig.routes.about}
        active={pathname.startsWith(siteConfig.routes.about)}
      >
        About
      </DesktopLink>
    </nav>
  );
}

interface DesktopDropdownTriggerProps {
  label: string;
  active: boolean;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

function DesktopDropdownTrigger({
  label,
  active,
  open,
  onOpen,
  onClose,
  children,
}: DesktopDropdownTriggerProps) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => {
          if (open) {
            onClose();
          } else {
            onOpen();
          }
        }}
        className={cn(
          "flex items-center gap-1 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-colors",
          active
            ? "bg-[#071722]/[0.05] text-[#071722]"
            : "text-[#4a616c] hover:bg-[#071722]/[0.04] hover:text-[#071722]"
        )}
      >
        {label}

        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-3.5 transition-transform duration-300",
            open && "rotate-180"
          )}
          strokeWidth={1.8}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
              scale: 0.985,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 8,
              scale: 0.99,
            }}
            transition={{
              duration: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-1/2 top-[calc(100%+18px)] w-[760px] -translate-x-1/2"
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

interface MegaMenuProps {
  eyebrow: string;
  title: string;
  description: string;
  items: {
    label: string;
    href: string;
    description?: string;
  }[];
  highlight: {
    icon: React.ComponentType<{
      className?: string;
      strokeWidth?: number;
    }>;
    label: string;
    description: string;
    href: string;
  };
}

function MegaMenu({
  eyebrow,
  title,
  description,
  items,
  highlight,
}: MegaMenuProps) {
  const HighlightIcon = highlight.icon;

  return (
    <div className="overflow-hidden rounded-[24px] border border-black/[0.08] bg-white/96 shadow-[0_30px_90px_rgba(7,23,34,0.14)] backdrop-blur-2xl">
      <div className="grid grid-cols-[0.76fr_1.24fr]">
        <div className="relative overflow-hidden border-r border-black/[0.06] bg-[#071722] p-7 !text-white">
          <div className="kinz-data-grid opacity-40" />

          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6fe9df]">
              {eyebrow}
            </p>

            <h3 className="mt-4 max-w-[260px] text-[24px] font-semibold leading-[1.08] tracking-[-0.04em]">
              {title}
            </h3>

            <p className="mt-4 max-w-[285px] text-sm leading-6 !text-white/55">
              {description}
            </p>

            <Link
              href={highlight.href}
              className="group mt-8 flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.045] p-4 transition-colors hover:bg-white/[0.075]"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#55dfd4]/10 text-[#69e9df]">
                <HighlightIcon
                  className="size-4"
                  strokeWidth={1.8}
                />
              </span>

              <span>
                <span className="flex items-center gap-1.5 text-sm font-semibold !text-white">
                  {highlight.label}

                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.8}
                  />
                </span>

                <span className="mt-1 block text-xs leading-5 !text-white/45">
                  {highlight.description}
                </span>
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1 p-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl p-4 transition-colors hover:bg-[#071722]/[0.035]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold tracking-[-0.01em] text-[#132b36]">
                  {item.label}
                </span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 shrink-0 text-[#8ba0aa] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  strokeWidth={1.8}
                />
              </div>

              {item.description ? (
                <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-[#71858f]">
                  {item.description}
                </p>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

interface DesktopLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

function DesktopLink({
  href,
  active,
  children,
}: DesktopLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-colors",
        active
          ? "bg-[#071722]/[0.05] text-[#071722]"
          : "text-[#4a616c] hover:bg-[#071722]/[0.04] hover:text-[#071722]"
      )}
    >
      {children}
    </Link>
  );
}

interface MobileNavigationProps {
  pathname: string;
  onClose: () => void;
}

function MobileNavigation({
  pathname,
  onClose,
}: MobileNavigationProps) {
  const [section, setSection] = useState<OpenMenu>(null);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className="fixed inset-0 z-40 bg-[#f5f9fa]/96 pt-[96px] backdrop-blur-2xl lg:hidden"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -14,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -10,
        }}
        transition={{
          duration: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="kinz-container flex h-[calc(100dvh-110px)] flex-col overflow-y-auto pb-8"
      >
        <div className="space-y-2">
          <MobileAccordion
            label="Services"
            open={section === "services"}
            onClick={() =>
              setSection(
                section === "services"
                  ? null
                  : "services"
              )
            }
            items={serviceNavigation.items}
          />

          <MobileAccordion
            label="Specialties"
            open={section === "specialties"}
            onClick={() =>
              setSection(
                section === "specialties"
                  ? null
                  : "specialties"
              )
            }
            items={specialtyNavigation.items}
          />

          <MobileLink
            href={siteConfig.routes.howItWorks}
            active={pathname.startsWith(
              siteConfig.routes.howItWorks
            )}
            onClick={onClose}
          >
            How It Works
          </MobileLink>

          <MobileLink
            href={siteConfig.routes.security}
            active={pathname.startsWith(
              siteConfig.routes.security
            )}
            onClick={onClose}
          >
            Security
          </MobileLink>

          <MobileLink
            href={siteConfig.routes.about}
            active={pathname.startsWith(
              siteConfig.routes.about
            )}
            onClick={onClose}
          >
            About
          </MobileLink>

          <MobileLink
            href={siteConfig.routes.contact}
            active={pathname.startsWith(
              siteConfig.routes.contact
            )}
            onClick={onClose}
          >
            Contact
          </MobileLink>
        </div>

        <div className="mt-auto pt-10">
          <div className="overflow-hidden rounded-[24px] bg-[#071722] p-5 !text-white">
            <div className="kinz-eyebrow kinz-eyebrow-dark">
              Revenue Cycle Review
            </div>

            <h3 className="mt-4 text-[25px] font-semibold leading-tight tracking-[-0.04em]">
              Find where your revenue cycle is losing momentum.
            </h3>

            <p className="mt-3 text-sm leading-6 !text-white/55">
              Start with a structured RCM assessment before discussing a service transition.
            </p>

            <Link
              href={siteConfig.routes.assessment}
              onClick={onClose}
              className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-[#071722]"
            >
              Request Assessment

              <ArrowUpRight
                className="size-4"
                strokeWidth={1.8}
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface MobileAccordionProps {
  label: string;
  open: boolean;
  onClick: () => void;
  items: {
    label: string;
    href: string;
    description?: string;
  }[];
}

function MobileAccordion({
  label,
  open,
  onClick,
  items,
}: MobileAccordionProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white/55">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-5 py-4 text-left text-[16px] font-semibold text-[#102933]"
      >
        {label}

        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-300",
            open && "rotate-180"
          )}
          strokeWidth={1.8}
        />
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="border-t border-black/[0.05] px-2 py-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-3 transition-colors hover:bg-black/[0.035]"
                >
                  <span className="block text-sm font-semibold text-[#19333e]">
                    {item.label}
                  </span>

                  {item.description ? (
                    <span className="mt-1 block text-xs leading-5 text-[#758892]">
                      {item.description}
                    </span>
                  ) : null}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

interface MobileLinkProps {
  href: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function MobileLink({
  href,
  active,
  onClick,
  children,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex min-h-14 items-center rounded-2xl border px-5 text-[16px] font-semibold transition-colors",
        active
          ? "border-[#15c8bb]/20 bg-[#15c8bb]/[0.06] text-[#083f43]"
          : "border-black/[0.06] bg-white/55 text-[#102933]"
      )}
    >
      {children}
    </Link>
  );
}