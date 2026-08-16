import type { ReactNode } from "react";

import { StarMark } from "@/components/ui/StarMark";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  withStar = true,
}: {
  children: ReactNode;
  className?: string;
  withStar?: boolean;
}) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-2.5 text-gold-400/90",
        className,
      )}
    >
      {withStar && <StarMark className="h-2.5 w-2.5 shrink-0" />}
      <span>{children}</span>
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  id,
  className,
  titleClassName,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  id?: string;
  className?: string;
  titleClassName?: string;
  as?: "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal delay={0.05}>
          <Eyebrow className={align === "center" ? "justify-center" : undefined}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}

      <Reveal delay={0.12}>
        <Tag
          id={id}
          className={cn(
            "font-sans text-[clamp(2rem,5.2vw,3.75rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.02em] text-cream",
            titleClassName,
          )}
        >
          {title}
        </Tag>
      </Reveal>

      {lead && (
        <Reveal delay={0.2}>
          <div
            className={cn(
              "max-w-2xl text-base leading-relaxed text-ash sm:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {lead}
          </div>
        </Reveal>
      )}
    </div>
  );
}
