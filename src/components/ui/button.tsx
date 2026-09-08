import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "dark"
  | "outline-light";

type ButtonSize = "sm" | "md" | "lg";

interface SharedButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: boolean;
}

interface ButtonAsButtonProps
  extends SharedButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: never;
}

interface ButtonAsLinkProps
  extends SharedButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href"> {
  href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(135deg,#071c27,#0a3340_58%,#0a4b50)] text-white shadow-[inset_0_1px_rgba(255,255,255,0.12),0_12px_30px_rgba(5,28,38,0.18)] hover:shadow-[inset_0_1px_rgba(255,255,255,0.13),0_18px_42px_rgba(5,28,38,0.24)]",

  secondary:
    "border border-black/[0.08] bg-white/75 text-[#071722] shadow-[inset_0_1px_rgba(255,255,255,0.9)] backdrop-blur-xl hover:border-black/[0.14] hover:bg-white",

  ghost:
    "bg-transparent text-[#173746] hover:bg-black/[0.04]",

  dark:
    "border border-white/[0.08] bg-white/[0.08] text-white backdrop-blur-xl hover:border-white/[0.15] hover:bg-white/[0.12]",

  "outline-light":
    "border border-white/[0.14] bg-transparent text-white hover:bg-white/[0.07]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-10 rounded-xl px-4 text-sm",
  md: "min-h-[50px] rounded-[14px] px-5 text-[0.92rem]",
  lg: "min-h-14 rounded-2xl px-6 text-[0.95rem]",
};

function ButtonContent({
  children,
  icon,
}: {
  children: ReactNode;
  icon: boolean;
}) {
  return (
    <>
      <span className="relative z-10">{children}</span>

      {icon ? (
        <ArrowUpRight
          aria-hidden="true"
          className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.8}
        />
      ) : null}
    </>
  );
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  icon = false,
  ...props
}: ButtonProps) {
  const styles = cn(
    "group relative inline-flex shrink-0 items-center justify-center gap-2.5 overflow-hidden font-semibold tracking-[-0.015em] transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;

    return (
      <Link href={href} className={styles} {...linkProps}>
        <ButtonContent icon={icon}>{children}</ButtonContent>
      </Link>
    );
  }

  return (
    <button
      className={styles}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <ButtonContent icon={icon}>{children}</ButtonContent>
    </button>
  );
}