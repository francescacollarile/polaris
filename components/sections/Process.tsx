import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMark } from "@/components/ui/StarMark";
import { PROCESS_STEPS } from "@/data/process";
import { CTA } from "@/data/site";

export function Process() {
  return (
    <Section
      id="metodo"
      labelledBy="metodo-title"
      className="overflow-hidden"
    >
      <div aria-hidden="true" className="fine-grid absolute inset-0 opacity-30" />
      <div
        aria-hidden="true"
        className="halo-gold pointer-events-none absolute left-1/2 top-0 h-[50vh] w-[80vh] -translate-x-1/2 opacity-30"
      />

      <div className="shell relative">
        <SectionHeading
          id="metodo-title"
          eyebrow="Il metodo"
          title={
            <>
              Dal primo contatto
              <br />
              <span className="text-gold-gradient">alla progressione.</span>
            </>
          }
          lead="Sei passaggi, nell'ordine in cui accadono davvero. Nessuno di questi è una formalità: ognuno esiste perché serve a prendere una decisione migliore su di te."
          align="center"
          className="mx-auto max-w-3xl"
        />

        <RevealGroup
          className="mt-16 grid gap-px overflow-hidden rounded-lg border border-hairline bg-[var(--color-hairline)] sm:mt-20 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.09}
        >
          {PROCESS_STEPS.map((step, index) => (
            <RevealItem
              key={step.index}
              as="article"
              className="group relative flex flex-col bg-ink-950 p-7 transition-colors duration-700 hover:bg-surface-900/70 sm:p-9"
            >
              {/* Numero in filigrana */}
              <span
                aria-hidden="true"
                className="stroke-text tabular pointer-events-none absolute right-5 top-4 font-sans text-[3.4rem] font-extrabold leading-none opacity-25 transition-opacity duration-700 group-hover:opacity-45"
              >
                {step.index}
              </span>

              <div className="relative flex items-center gap-3">
                <StarMark className="h-3 w-3 shrink-0 text-gold-400" />
                <span className="tabular font-mono text-[0.7rem] tracking-[0.2em] text-gold-500">
                  Step {step.index}
                </span>
              </div>

              <h3 className="relative mt-5 font-sans text-2xl font-extrabold uppercase leading-none tracking-[-0.02em] text-cream">
                {step.title}
              </h3>

              <p className="relative mt-4 text-[0.92rem] leading-relaxed text-fog">
                {step.summary}
              </p>

              <ul className="relative mt-6 space-y-2.5 border-t border-hairline pt-6">
                {step.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[0.82rem] leading-relaxed text-ash"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.55em] h-px w-3 shrink-0 bg-gold-600/70"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              {index === 0 && (
                <div className="relative mt-7">
                  <Button
                    href={CTA.primary.href}
                    size="sm"
                    className="w-full"
                    icon={<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
                  >
                    Prenota la call gratuita
                  </Button>
                </div>
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
