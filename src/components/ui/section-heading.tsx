import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  const dark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col",
        centered
          ? "mx-auto max-w-3xl items-center text-center"
          : "max-w-3xl items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "kinz-eyebrow",
            dark && "kinz-eyebrow-dark"
          )}
        >
          {eyebrow}
        </div>
      ) : null}

      <h2
        className={cn(
          "kinz-heading mt-5 text-[clamp(2.35rem,5vw,4.9rem)]",
          dark ? "text-white" : "text-[#071722]"
        )}
      >
        {title}
      </h2>

      {description ? (
        <div
          className={cn(
            "mt-6 max-w-2xl text-[clamp(1rem,1.3vw,1.125rem)] leading-8",
            dark
              ? "text-white/60"
              : "text-[#526975]"
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}