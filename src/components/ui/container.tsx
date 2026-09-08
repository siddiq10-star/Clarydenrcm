import type { ElementType, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerWidth = "default" | "wide" | "narrow";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
  width?: ContainerWidth;
}

const widths: Record<ContainerWidth, string> = {
  default: "max-w-[1240px]",
  wide: "max-w-[1440px]",
  narrow: "max-w-[920px]",
};

export function Container({
  children,
  as: Component = "div",
  width = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        widths[width],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}