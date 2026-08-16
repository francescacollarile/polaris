import type { Transition, Variants } from "motion/react";

/**
 * Grammatica di movimento Polaris.
 * Lenta, controllata, mai rimbalzante. Le durate sono volutamente
 * lunghe: il movimento deve leggersi come precisione, non come effetto.
 */

export const EASE_POLARIS = [0.22, 1, 0.36, 1] as const;
export const EASE_GLIDE = [0.65, 0.05, 0.36, 1] as const;

export const transition: Transition = {
  duration: 0.85,
  ease: EASE_POLARIS,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: EASE_POLARIS } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: EASE_POLARIS },
  },
};

export const revealMask: Variants = {
  hidden: { opacity: 0, clipPath: "inset(14% 0% 14% 0%)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 1.1, ease: EASE_POLARIS },
  },
};

/** Contenitore con ingresso scaglionato dei figli. */
export const stagger = (staggerChildren = 0.12, delayChildren = 0.05): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Viewport di default: parte quando la sezione è entrata per un quarto. */
export const viewport = { once: true, amount: 0.25 } as const;
export const viewportSoft = { once: true, amount: 0.15 } as const;
