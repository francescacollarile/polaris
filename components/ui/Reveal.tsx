"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { EASE_POLARIS } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/useSafeReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Ritardo in secondi. */
  delay?: number;
  /** Spostamento verticale iniziale in px. */
  y?: number;
  duration?: number;
  amount?: number;
  as?: "div" | "span" | "li" | "section" | "figure";
};

/**
 * Ingresso in scroll: fade + risalita, una sola volta.
 * Con `prefers-reduced-motion` il contenuto viene reso subito, senza moto.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  duration = 0.85,
  amount = 0.25,
  as = "div",
}: RevealProps) {
  const reduced = useSafeReducedMotion();
  const Comp = motion[as];

  if (reduced) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE_POLARIS }}
    >
      {children}
    </Comp>
  );
}

/**
 * Contenitore che scaglione l'ingresso dei figli.
 * I figli diretti devono essere `RevealItem`.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  delay = 0.05,
  amount = 0.2,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
  as?: "div" | "ul" | "ol";
}) {
  const reduced = useSafeReducedMotion();
  const Comp = motion[as];

  if (reduced) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </Comp>
  );
}

export function RevealItem({
  children,
  className,
  y = 24,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li" | "article" | "figure";
}) {
  const reduced = useSafeReducedMotion();
  const Comp = motion[as];

  if (reduced) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Comp
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: EASE_POLARIS },
        },
      }}
    >
      {children}
    </Comp>
  );
}
