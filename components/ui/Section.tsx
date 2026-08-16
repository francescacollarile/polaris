import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Ritmo verticale condiviso da tutte le sezioni. */
export function Section({
  id,
  children,
  className,
  labelledBy,
  size = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
  size?: "default" | "tight" | "loose";
}) {
  const padding = {
    tight: "py-16 sm:py-20 lg:py-24",
    default: "py-24 sm:py-32 lg:py-40",
    loose: "py-28 sm:py-40 lg:py-52",
  }[size];

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative isolate", padding, className)}
    >
      {children}
    </section>
  );
}

/** Filetto divisorio che tiene insieme il ritmo tra i blocchi. */
export function Divider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("rule-gold mx-auto w-full max-w-6xl opacity-40", className)}
    />
  );
}
