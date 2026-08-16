import { ArrowUpRight, Check } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMark } from "@/components/ui/StarMark";
import { PROGRAMS } from "@/data/programs";
import { CTA } from "@/data/site";
import { cn } from "@/lib/utils";

export function Programs() {
  return (
    <Section
      id="percorsi"
      labelledBy="percorsi-title"
      className="border-y border-hairline bg-ink-900/50"
    >
      <div
        aria-hidden="true"
        className="halo-violet pointer-events-none absolute right-0 top-1/4 h-[60vh] w-[60vh] opacity-25"
      />

      <div className="shell relative">
        <SectionHeading
          id="percorsi-title"
          eyebrow="I percorsi"
          title={
            <>
              Due modi di
              <br />
              <span className="text-gold-gradient">essere seguiti.</span>
            </>
          }
          className="max-w-3xl"
        />

        {/* ---- Full vs Ridotto ---- */}
        <RevealGroup className="mt-16 grid gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-7">
          {PROGRAMS.map((program) => (
            <RevealItem key={program.id} as="article" className="h-full">
              <div
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-lg border p-7 transition-[transform,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 sm:p-9",
                  program.featured
                    ? "border-gold-600/45 bg-[linear-gradient(150deg,var(--color-surface-800),var(--color-ink-900)_70%)]"
                    : "border-hairline bg-surface-900/60 hover:border-violet-400/30",
                )}
              >
                {program.featured && (
                  <div
                    aria-hidden="true"
                    className="halo-gold pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-70"
                  />
                )}

                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="eyebrow text-muted">{program.kicker}</p>
                    {program.featured && (
                      <span className="flex items-center gap-2 rounded-full border border-gold-600/40 bg-gold-500/10 px-3.5 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-gold-200">
                        <StarMark className="h-2 w-2" />
                        Consigliato
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-sans text-3xl font-extrabold uppercase leading-none tracking-[-0.02em] text-cream sm:text-[2.6rem]">
                    {program.name}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-ash">
                    {program.description}
                  </p>
                </div>

                <ul className="relative mt-8 space-y-3.5 border-t border-hairline pt-8">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          program.featured ? "text-gold-400" : "text-violet-400",
                        )}
                        aria-hidden="true"
                      />
                      <span className="text-[0.9rem] leading-relaxed text-fog">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-auto pt-9">
                  <div className="rounded-md border border-hairline bg-white/[0.02] px-5 py-4">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted">
                      Investimento
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-fog">
                      {program.price ?? program.priceNote}
                    </p>
                  </div>

                  <Button
                    href={CTA.talk.href}
                    variant={program.featured ? "primary" : "secondary"}
                    size="md"
                    className="mt-5 w-full"
                    icon={<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
                  >
                    Parliamone in call
                  </Button>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

      </div>
    </Section>
  );
}
