"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { WhatsappIcon } from "@/components/ui/icons";
import { CONTACTS, CTA } from "@/data/site";
import { EASE_POLARIS } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/useSafeReducedMotion";

/**
 * CTA sticky su mobile.
 *
 * Compare solo dopo la hero e sparisce quando la CTA finale entra in
 * viewport, così non copre mai contenuti né si duplica.
 */
export function MobileCTABar() {
  const [visible, setVisible] = useState(false);
  const [nearFinalCta, setNearFinalCta] = useState(false);
  const reduced = useSafeReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const finalCta = document.getElementById("contatti");
    if (!finalCta) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearFinalCta(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px" },
    );
    observer.observe(finalCta);
    return () => observer.disconnect();
  }, []);

  const show = visible && !nearFinalCta;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.5, ease: EASE_POLARIS }}
          className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="border-t border-hairline bg-ink-950/88 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-2.5">
              <a
                href={CTA.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[linear-gradient(100deg,var(--color-gold-200)_0%,var(--color-gold-300)_44%,var(--color-gold-500)_100%)] text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-950 shadow-[0_10px_30px_-12px_rgba(228,196,122,0.6)] active:scale-[0.98]"
              >
                Prenota la call gratuita
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={CONTACTS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Scrivi su WhatsApp"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-hairline-strong text-cream transition-colors duration-300 active:scale-[0.98]"
              >
                <WhatsappIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
