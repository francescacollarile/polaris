"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Alone che segue il puntatore, con un leggerissimo ritardo.
 *
 * Scelte volute:
 * — il cursore di sistema resta SEMPRE visibile (nessun `cursor: none`),
 *   quindi usabilità e accessibilità non vengono toccate;
 * — attivo solo con puntatore fine (mai su touch);
 * — spento del tutto con `prefers-reduced-motion`.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 320, damping: 32, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 320, damping: 32, mass: 0.35 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => setEnabled(finePointer.matches && !reduced.matches);
    sync();

    finePointer.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    return () => {
      finePointer.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);

      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, [role='button'], summary, input, label")));
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden lg:block"
      style={{ x: springX, y: springY }}
    >
      <motion.span
        className="block rounded-full border border-gold-300/45 bg-gold-200/[0.05]"
        animate={{
          width: active ? 46 : 26,
          height: active ? 46 : 26,
          opacity: visible ? (active ? 0.9 : 0.55) : 0,
          x: active ? -23 : -13,
          y: active ? -23 : -13,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}
