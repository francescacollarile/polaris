import Link from "next/link";
import type { ReactNode } from "react";

import { cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
  "aria-label"?: string;
  /** Forza l'apertura in una nuova scheda (default: automatico sui link esterni). */
  newTab?: boolean;
};

const base =
  "group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-semibold uppercase leading-none tracking-[0.16em] transition-[transform,box-shadow,border-color,background-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform active:scale-[0.98] disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[linear-gradient(100deg,var(--color-gold-200)_0%,var(--color-gold-300)_44%,var(--color-gold-500)_100%)] text-ink-950 shadow-[0_14px_44px_-16px_rgba(228,196,122,0.55)] hover:shadow-[0_18px_54px_-14px_rgba(228,196,122,0.7)] hover:-translate-y-0.5",
  secondary:
    "border border-hairline-strong bg-white/[0.02] text-cream backdrop-blur-sm hover:border-violet-400/45 hover:bg-violet-500/[0.07] hover:-translate-y-0.5",
  ghost:
    "text-fog hover:text-cream after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold-400/70 after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:origin-left hover:after:scale-x-100",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.65rem]",
  md: "h-12 px-6 text-[0.7rem] sm:px-7",
  // px ridotto sotto i 640px: a 320px la CTA più lunga resta su una riga.
  lg: "h-14 px-5 text-[0.72rem] sm:h-15 sm:px-9 sm:text-[0.78rem]",
};

const ghostSizes: Record<Size, string> = {
  sm: "h-auto px-0 text-[0.65rem]",
  md: "h-auto px-0 text-[0.7rem]",
  lg: "h-auto px-0 text-[0.74rem]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  newTab,
  ...rest
}: ButtonProps) {
  const external = isExternal(href);
  const openInNewTab = newTab ?? (external && !href.startsWith("tel:") && !href.startsWith("mailto:"));

  const classes = cn(
    base,
    variants[variant],
    variant === "ghost" ? ghostSizes[size] : sizes[size],
    variant === "ghost" && "rounded-none",
    className,
  );

  const content = (
    <>
      {/* Riflesso che attraversa il bottone al passaggio del mouse */}
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/45 opacity-0 transition-none group-hover/btn:animate-[polaris-sheen_1.1s_ease-out] group-hover/btn:opacity-100 motion-reduce:hidden"
        />
      )}
      <span className="relative z-10">{children}</span>
      {icon ? (
        <span className="relative z-10 flex shrink-0 items-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </>
  );

  if (external || href.startsWith("#")) {
    return (
      <a
        href={href}
        className={classes}
        {...(openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
