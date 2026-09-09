"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import type {
  KeyboardEvent,
  ReactNode,
  Ref,
} from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type MenuName = "services" | "specialties";

type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};

type NavigationGroup = {
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  items: readonly NavigationItem[];
  overviewLabel: string;
  overviewDescription: string;
  overviewHref: string;
};

/* -------------------------------------------------------------------------- */
/* Navigation configuration                                                   */
/* -------------------------------------------------------------------------- */

const NAVIGATION: Record<MenuName, NavigationGroup> = {
  services: {
    label: "Services",
    eyebrow: "Revenue Operations",
    title: "End-to-end RCM infrastructure.",
    description:
      "From eligibility and claims to denials, A/R and payment reconciliation.",
    items: serviceNavigation.items,
    overviewLabel: "Explore all services",
    overviewDescription:
      "See the complete Claryden RCM revenue-cycle operating model.",
    overviewHref: siteConfig.routes.services,
  },

  specialties: {
    label: "Specialties",
    eyebrow: "Specialty Expertise",
    title: "RCM built around how practices actually operate.",
    description:
      "Specialty-aware workflows without forcing every practice into the same process.",
    items: specialtyNavigation.items,
    overviewLabel: "View all specialties",
    overviewDescription:
      "Explore revenue-cycle support across medical specialties.",
    overviewHref: siteConfig.routes.specialties,
  },
};

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#138e91] focus-visible:ring-offset-2";

/* -------------------------------------------------------------------------- */
/* Route helpers                                                              */
/* -------------------------------------------------------------------------- */

function normalizePath(path: string) {
  return path.replace(/\/+$/, "") || "/";
}

function isCurrentPage(pathname: string, href: string) {
  return normalizePath(pathname) === normalizePath(href);
}

function isActiveRoute(pathname: string, href: string) {
  const current = normalizePath(pathname);
  const target = normalizePath(href);

  return (
    current === target ||
    (target !== "/" && current.startsWith(`${target}/`))
  );
}

/* -------------------------------------------------------------------------- */
/* Site Header                                                                */
/* -------------------------------------------------------------------------- */

export function SiteHeader() {
  const pathname = usePathname();

  const headerRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const mobileDialogId = useId();

  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuName | null>(
    null
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  /* Scroll appearance */

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

  /* Close navigation after route changes */

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  /* Close desktop menus on outside click or Escape */

  useEffect(() => {
    if (!openMenu) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        !headerRef.current?.contains(event.target as Node)
      ) {
        setOpenMenu(null);
      }
    };

    const handleKeyDown = (
      event: globalThis.KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    };

    document.addEventListener(
      "pointerdown",
      handlePointerDown
    );
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [openMenu]);

  /* Reset navigation when crossing the desktop breakpoint */

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 1280px)"
    );

    const handleBreakpointChange = () => {
      setOpenMenu(null);
      setMobileOpen(false);
    };

    media.addEventListener(
      "change",
      handleBreakpointChange
    );

    return () => {
      media.removeEventListener(
        "change",
        handleBreakpointChange
      );
    };
  }, []);

  /* Native mobile dialog */

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (!mobileOpen) {
      if (dialog.open) dialog.close();
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    if (!dialog.open) {
      dialog.showModal();
    }

    return () => {
      if (dialog.open) dialog.close();

      document.body.style.overflow =
        previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50 pt-3 transition-[padding] duration-300 motion-reduce:transition-none",
          !scrolled && "sm:pt-4 xl:pt-5"
        )}
      >
        <div className="kinz-container-wide">
          <div
            className={cn(
              "relative mx-auto grid min-h-[68px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-[20px] border px-3 shadow-sm transition-[background-color,border-color,box-shadow] duration-300 sm:px-4 xl:min-h-[76px] xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:gap-4 xl:px-5 motion-reduce:transition-none",
              scrolled
                ? "border-[#102b36]/10 bg-white/95 shadow-[0_16px_48px_rgba(7,23,34,0.10)] backdrop-blur-2xl"
                : "border-[#102b36]/[0.07] bg-white/90 shadow-[0_8px_30px_rgba(7,23,34,0.05)] backdrop-blur-xl"
            )}
          >
            <Brand />

            <DesktopNavigation
              pathname={pathname}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />

            <div className="hidden items-center justify-self-end gap-1.5 xl:flex">
              <HeaderLink
                href={siteConfig.routes.contact}
                pathname={pathname}
              >
                Contact
              </HeaderLink>

              <AssessmentLink />
            </div>

            <button
              type="button"
              aria-label="Open navigation"
              aria-controls={mobileDialogId}
              aria-expanded={mobileOpen}
              onClick={() => {
                setOpenMenu(null);
                setMobileOpen(true);
              }}
              className={cn(
                "inline-flex size-11 items-center justify-center justify-self-end rounded-xl border border-[#102b36]/10 bg-white text-[#071722] transition-colors hover:bg-[#f1f7f7] xl:hidden motion-reduce:transition-none",
                FOCUS_RING
              )}
            >
              <Menu
                aria-hidden="true"
                className="size-5"
                strokeWidth={1.8}
              />
            </button>
          </div>
        </div>
      </header>

      <dialog
        ref={dialogRef}
        id={mobileDialogId}
        aria-label="Claryden RCM navigation"
        onCancel={(event) => {
          event.preventDefault();
          closeMobile();
        }}
        onClose={() => {
          if (!dialogRef.current?.open) {
            closeMobile();
          }
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden border-0 bg-[#f5f9fa] p-0 text-[#071722] backdrop:bg-[#071722]/30 xl:hidden"
      >
        <MobileNavigation
          pathname={pathname}
          open={mobileOpen}
          onClose={closeMobile}
        />
      </dialog>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Brand                                                                      */
/* -------------------------------------------------------------------------- */

function Brand({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <Link
      href={siteConfig.routes.home}
      onClick={onClick}
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "group flex w-fit min-w-0 items-center gap-2.5 rounded-lg sm:gap-3",
        FOCUS_RING
      )}
    >
      <Image
        src="/brand/claryden-mark.png"
        alt=""
        aria-hidden="true"
        width={568}
        height={472}
        sizes="48px"
        loading="eager"
        className="h-auto w-10 shrink-0 object-contain sm:w-12"
      />

      <span className="flex min-w-0 flex-col justify-center">
        <Image
          src="/brand/claryden-wordmark.png"
          alt="Claryden RCM"
          width={1100}
          height={193}
          sizes="(max-width: 639px) 146px, 166px"
          priority
          className="h-auto w-[146px] max-w-full object-contain sm:w-[166px]"
        />

        <span className="mt-1 hidden whitespace-nowrap text-[8px] font-semibold uppercase leading-none tracking-[0.115em] text-[#516774] sm:block">
          Revenue Cycle Management
        </span>
      </span>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Shared navigation links                                                    */
/* -------------------------------------------------------------------------- */

function HeaderLink({
  href,
  pathname,
  children,
}: {
  href: string;
  pathname: string;
  children: ReactNode;
}) {
  const active = isActiveRoute(pathname, href);

  return (
    <Link
      href={href}
      aria-current={
        isCurrentPage(pathname, href)
          ? "page"
          : undefined
      }
      className={cn(
        "inline-flex min-h-11 items-center rounded-xl px-3 text-[13px] font-semibold transition-colors hover:bg-[#071722]/[0.04] hover:text-[#071722] motion-reduce:transition-none",
        active
          ? "bg-[#071722]/[0.05] text-[#071722]"
          : "text-[#405966]",
        FOCUS_RING
      )}
    >
      {children}
    </Link>
  );
}

function AssessmentLink({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <Link
      href={siteConfig.routes.assessment}
      onClick={onClick}
      className={cn(
        "group relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-[13px] bg-[#071c27] px-4 text-[13px] font-semibold !text-white shadow-[0_10px_26px_rgba(5,28,38,0.16)] transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#103744] hover:shadow-[0_14px_32px_rgba(5,28,38,0.22)] motion-reduce:transform-none motion-reduce:transition-none",
        FOCUS_RING
      )}
    >
      <span>RCM Assessment</span>

      <ArrowUpRight
        aria-hidden="true"
        className="size-4 shrink-0"
        strokeWidth={1.8}
      />

      <span
        aria-hidden="true"
        className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-[#55e8dc] to-transparent"
      />
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Desktop Navigation                                                         */
/* -------------------------------------------------------------------------- */

function DesktopNavigation({
  pathname,
  openMenu,
  setOpenMenu,
}: {
  pathname: string;
  openMenu: MenuName | null;
  setOpenMenu: (menu: MenuName | null) => void;
}) {
  return (
    <nav
      aria-label="Primary navigation"
      className="relative hidden items-center justify-center gap-0 xl:flex"
    >
      <DesktopDisclosure
        name="services"
        pathname={pathname}
        open={openMenu === "services"}
        onOpen={() => setOpenMenu("services")}
        onClose={() => setOpenMenu(null)}
      />

      <DesktopDisclosure
        name="specialties"
        pathname={pathname}
        open={openMenu === "specialties"}
        onOpen={() => setOpenMenu("specialties")}
        onClose={() => setOpenMenu(null)}
      />

      <HeaderLink
        href={siteConfig.routes.howItWorks}
        pathname={pathname}
      >
        How It Works
      </HeaderLink>

      <HeaderLink
        href={siteConfig.routes.security}
        pathname={pathname}
      >
        Security
      </HeaderLink>

      <HeaderLink
        href={siteConfig.routes.about}
        pathname={pathname}
      >
        About
      </HeaderLink>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/* Desktop Dropdown                                                           */
/* -------------------------------------------------------------------------- */

function DesktopDisclosure({
  name,
  pathname,
  open,
  onOpen,
  onClose,
}: {
  name: MenuName;
  pathname: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const group = NAVIGATION[name];

  const panelId = useId();

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const active = isActiveRoute(
    pathname,
    group.overviewHref
  );

  const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === "Escape" && open) {
      event.preventDefault();
      event.stopPropagation();

      onClose();
      triggerRef.current?.focus();
    }

    if (
      event.key === "ArrowDown" &&
      event.target === triggerRef.current
    ) {
      event.preventDefault();

      onOpen();

      window.requestAnimationFrame(() => {
        firstLinkRef.current?.focus();
      });
    }
  };

  return (
    <div
      ref={rootRef}
      className="static"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          onOpen();
        }
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") {
          onClose();
        }
      }}
      onBlur={(event) => {
        if (
          !rootRef.current?.contains(
            event.relatedTarget as Node | null
          )
        ) {
          onClose();
        }
      }}
      onKeyDown={handleKeyDown}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          if (open) {
            onClose();
          } else {
            onOpen();
          }
        }}
        className={cn(
          "inline-flex min-h-11 items-center gap-1 rounded-xl px-3 text-[13px] font-semibold transition-colors hover:bg-[#071722]/[0.04] hover:text-[#071722] motion-reduce:transition-none",
          active || open
            ? "bg-[#071722]/[0.05] text-[#071722]"
            : "text-[#405966]",
          FOCUS_RING
        )}
      >
        {group.label}

        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-3.5 transition-transform duration-200 motion-reduce:transition-none",
            open && "rotate-180"
          )}
          strokeWidth={1.8}
        />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute left-1/2 top-full z-50 w-[min(920px,calc(100vw-48px))] -translate-x-1/2 pt-4"
      >
        <MegaMenu
          group={group}
          pathname={pathname}
          firstLinkRef={firstLinkRef}
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Mega Menu                                                                  */
/* -------------------------------------------------------------------------- */

function MegaMenu({
  group,
  pathname,
  firstLinkRef,
}: {
  group: NavigationGroup;
  pathname: string;
  firstLinkRef: Ref<HTMLAnchorElement>;
}) {
  return (
    <div className="max-h-[calc(100dvh-124px)] overflow-y-auto overscroll-contain rounded-[24px] border border-[#102b36]/10 bg-white shadow-[0_28px_80px_rgba(7,23,34,0.16)]">
      <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* Left feature panel */}

        <div className="relative overflow-hidden bg-[#071c27] p-7 text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-[#47d8ce]/10 blur-3xl"
          />

          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#91e8e0]">
              {group.eyebrow}
            </p>

            <h2 className="mt-4 max-w-[310px] text-[25px] font-semibold leading-[1.12] tracking-[-0.04em] !text-white">
              {group.title}
            </h2>

            <p className="mt-4 max-w-[320px] text-[13px] leading-6 !text-white/75">
              {group.description}
            </p>

            <Link
              ref={firstLinkRef}
              href={group.overviewHref}
              aria-current={
                isCurrentPage(
                  pathname,
                  group.overviewHref
                )
                  ? "page"
                  : undefined
              }
              className={cn(
                "group mt-7 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-colors hover:bg-white/[0.09] motion-reduce:transition-none",
                FOCUS_RING
              )}
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#55dfd4]/10 text-[#91e8e0]">
                {group === NAVIGATION.services ? (
                  <Sparkles
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.8}
                  />
                ) : (
                  <ShieldCheck
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.8}
                  />
                )}
              </span>

              <span className="min-w-0">
                <span className="flex items-center gap-1.5 text-sm font-semibold !text-white">
                  {group.overviewLabel}

                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3.5 shrink-0"
                  />
                </span>

                <span className="mt-1 block text-xs leading-5 !text-white/70">
                  {group.overviewDescription}
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Navigation links */}

        <div className="grid grid-cols-2 content-start gap-1 p-4">
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                isCurrentPage(pathname, item.href)
                  ? "page"
                  : undefined
              }
              className={cn(
                "group rounded-2xl p-4 transition-colors hover:bg-[#eef6f6] motion-reduce:transition-none",
                FOCUS_RING
              )}
            >
              <span className="flex items-start justify-between gap-2">
                <span className="text-[13px] font-semibold leading-5 text-[#132b36]">
                  {item.label}
                </span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-0.5 size-3.5 shrink-0 text-[#637c88] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                  strokeWidth={1.8}
                />
              </span>

              {item.description ? (
                <span className="mt-1.5 block text-xs leading-5 text-[#516774]">
                  {item.description}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Mobile Navigation                                                          */
/* -------------------------------------------------------------------------- */

function MobileNavigation({
  pathname,
  open,
  onClose,
}: {
  pathname: string;
  open: boolean;
  onClose: () => void;
}) {
  const [section, setSection] = useState<MenuName | null>(
    null
  );

  useEffect(() => {
    if (!open) {
      setSection(null);
    }
  }, [open]);

  return (
    <div className="mx-auto flex h-full w-full max-w-3xl flex-col">
      {/* Mobile header */}

      <div className="flex min-h-[80px] shrink-0 items-center justify-between gap-3 border-b border-[#102b36]/[0.07] px-5 sm:px-7">
        <Brand onClick={onClose} />

        <button
          type="button"
          autoFocus
          aria-label="Close navigation"
          onClick={onClose}
          className={cn(
            "inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#102b36]/10 bg-white text-[#071722] transition-colors hover:bg-[#edf5f5] motion-reduce:transition-none",
            FOCUS_RING
          )}
        >
          <X
            aria-hidden="true"
            className="size-5"
            strokeWidth={1.8}
          />
        </button>
      </div>

      {/* Scrollable navigation content */}

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-[max(28px,env(safe-area-inset-bottom))] pt-5 sm:px-7">
        <nav
          aria-label="Mobile navigation"
          className="space-y-2"
        >
          <MobileAccordion
            name="services"
            pathname={pathname}
            open={section === "services"}
            onToggle={() =>
              setSection(
                section === "services"
                  ? null
                  : "services"
              )
            }
            onNavigate={onClose}
          />

          <MobileAccordion
            name="specialties"
            pathname={pathname}
            open={section === "specialties"}
            onToggle={() =>
              setSection(
                section === "specialties"
                  ? null
                  : "specialties"
              )
            }
            onNavigate={onClose}
          />

          <MobileLink
            href={siteConfig.routes.howItWorks}
            pathname={pathname}
            onClick={onClose}
          >
            How It Works
          </MobileLink>

          <MobileLink
            href={siteConfig.routes.security}
            pathname={pathname}
            onClick={onClose}
          >
            Security
          </MobileLink>

          <MobileLink
            href={siteConfig.routes.about}
            pathname={pathname}
            onClick={onClose}
          >
            About
          </MobileLink>

          <MobileLink
            href={siteConfig.routes.contact}
            pathname={pathname}
            onClick={onClose}
          >
            Contact
          </MobileLink>
        </nav>

        {/* Mobile conversion CTA */}

        <div className="relative mt-7 overflow-hidden rounded-[24px] bg-[#071c27] p-5 text-white sm:p-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-14 -top-20 size-48 rounded-full bg-[#47d8ce]/10 blur-3xl"
          />

          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#91e8e0]">
              Revenue Cycle Review
            </p>

            <h2 className="mt-4 max-w-md text-[24px] font-semibold leading-tight tracking-[-0.04em] !text-white">
              Find where your revenue cycle is losing
              momentum.
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 !text-white/75">
              Start with a structured RCM assessment
              before discussing a service transition.
            </p>

            <Link
              href={siteConfig.routes.assessment}
              onClick={onClose}
              className={cn(
                "mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold !text-[#071c27] transition-colors hover:bg-[#e7f7f5] motion-reduce:transition-none",
                FOCUS_RING
              )}
            >
              Request Assessment

              <ArrowUpRight
                aria-hidden="true"
                className="size-4"
                strokeWidth={1.8}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Mobile Accordion                                                           */
/* -------------------------------------------------------------------------- */

function MobileAccordion({
  name,
  pathname,
  open,
  onToggle,
  onNavigate,
}: {
  name: MenuName;
  pathname: string;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const group = NAVIGATION[name];
  const panelId = useId();

  const active = isActiveRoute(
    pathname,
    group.overviewHref
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-[#102b36]/[0.07] bg-white">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className={cn(
          "flex min-h-14 w-full items-center justify-between gap-3 px-5 py-3.5 text-left text-[15px] font-semibold transition-colors hover:bg-[#f1f7f7] motion-reduce:transition-none",
          active || open
            ? "text-[#075e63]"
            : "text-[#102933]",
          FOCUS_RING
        )}
      >
        {group.label}

        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-4 shrink-0 transition-transform duration-200 motion-reduce:transition-none",
            open && "rotate-180"
          )}
          strokeWidth={1.8}
        />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="border-t border-[#102b36]/[0.06] px-2 py-2"
      >
        <Link
          href={group.overviewHref}
          onClick={onNavigate}
          aria-current={
            isCurrentPage(pathname, group.overviewHref)
              ? "page"
              : undefined
          }
          className={cn(
            "flex min-h-12 items-center justify-between gap-3 rounded-xl bg-[#edf7f6] px-3 py-3 text-sm font-semibold text-[#075e63]",
            FOCUS_RING
          )}
        >
          {group.overviewLabel}

          <ArrowUpRight
            aria-hidden="true"
            className="size-4 shrink-0"
          />
        </Link>

        {group.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={
              isCurrentPage(pathname, item.href)
                ? "page"
                : undefined
            }
            className={cn(
              "block rounded-xl px-3 py-3 transition-colors hover:bg-[#f1f7f7] motion-reduce:transition-none",
              FOCUS_RING
            )}
          >
            <span className="block text-sm font-semibold text-[#19333e]">
              {item.label}
            </span>

            {item.description ? (
              <span className="mt-1 block text-xs leading-5 text-[#516774]">
                {item.description}
              </span>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Mobile Link                                                                */
/* -------------------------------------------------------------------------- */

function MobileLink({
  href,
  pathname,
  onClick,
  children,
}: {
  href: string;
  pathname: string;
  onClick: () => void;
  children: ReactNode;
}) {
  const active = isActiveRoute(pathname, href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={
        isCurrentPage(pathname, href)
          ? "page"
          : undefined
      }
      className={cn(
        "flex min-h-14 items-center rounded-2xl border px-5 py-3.5 text-[15px] font-semibold transition-colors hover:bg-[#f1f7f7] motion-reduce:transition-none",
        active
          ? "border-[#138e91]/20 bg-[#eaf7f5] text-[#075e63]"
          : "border-[#102b36]/[0.07] bg-white text-[#102933]",
        FOCUS_RING
      )}
    >
      {children}
    </Link>
  );
}