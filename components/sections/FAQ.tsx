"use client";

import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "@/data/faq";
import { EASE_POLARIS } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useSafeReducedMotion } from "@/lib/useSafeReducedMotion";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <Section id="faq" labelledBy="faq-title" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="halo-gold pointer-events-none absolute -left-1/4 top-1/4 h-[55vh] w-[55vh] opacity-25"
      />

      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ---- Intestazione ---- */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>Domande frequenti</Eyebrow>
              </Reveal>

              <Reveal delay={0.1}>
                <h2
                  id="faq-title"
                  className="mt-7 font-sans text-[clamp(2.1rem,5.2vw,3.9rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.03em] text-cream"
                >
                  Prima che
                  <br />
                  <span className="text-gold-gradient">tu me lo chieda.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mt-7 max-w-md text-base leading-relaxed text-ash">
                  Se la tua domanda non è qui, la risposta migliore te la do in
                  call: dura poco, è gratuita e serve esattamente a questo.
                </p>
              </Reveal>
            </div>
          </div>

          {/* ---- Accordion ---- */}
          <div className="lg:col-span-7">
            <ul className="border-t border-hairline">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  index={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={open === index}
                  onToggle={() => setOpen(open === index ? null : index)}
                  baseId={`${baseId}-${index}`}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function AccordionItem({
  index,
  question,
  answer,
  isOpen,
  onToggle,
  baseId,
}: {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  baseId: string;
}) {
  const reduced = useSafeReducedMotion();
  const buttonId = `${baseId}-button`;
  const panelId = `${baseId}-panel`;

  return (
    <li className="border-b border-hairline">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-start justify-between gap-6 py-6 text-left"
        >
          <span className="flex gap-4 sm:gap-5">
            <span className="tabular mt-1 shrink-0 font-mono text-[0.68rem] text-gold-600/80">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={cn(
                "text-base font-semibold leading-snug transition-colors duration-500 sm:text-lg",
                isOpen ? "text-cream" : "text-fog group-hover:text-cream",
              )}
            >
              {question}
            </span>
          </span>

          <span
            aria-hidden="true"
            className={cn(
              "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-500",
              isOpen
                ? "border-gold-600/50 bg-gold-500/10 text-gold-300"
                : "border-hairline text-ash group-hover:border-violet-400/40 group-hover:text-cream",
            )}
          >
            {isOpen ? (
              <Minus className="h-3.5 w-3.5" />
            ) : (
              <Plus className="h-3.5 w-3.5" />
            )}
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE_POLARIS }}
            className="overflow-hidden"
          >
            <p className="pb-7 pl-8 pr-12 text-[0.95rem] leading-relaxed text-ash sm:pl-10">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
