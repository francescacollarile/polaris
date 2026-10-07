import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/Button";
import { WhatsappIcon } from "@/components/ui/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { StarMark } from "@/components/ui/StarMark";
import { CTA } from "@/data/site";

export type CoachingPoint = { title: string; body: string };

/**
 * Impaginazione comune a Coaching online e Coaching dal vivo: foto a
 * sinistra, a destra titolo, introduzione, elenco e pulsanti. Le due
 * sezioni devono restare identiche, quindi la struttura sta qui sola.
 *
 * Su mobile l'ordine è titolo → punti → immagine → pulsanti.
 */
export function CoachingSplit({
  id,
  eyebrow,
  title,
  intro,
  points,
  image,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  points: CoachingPoint[];
  image: ReactNode;
}) {
  const titleId = `${id}-title`;

  return (
    <Section id={id} labelledBy={titleId} className="overflow-hidden">
      <div className="shell relative">
        <div className="grid items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          {/* ---- Immagine ---- */}
          <div className="order-3 lg:order-none lg:col-start-1 lg:row-span-3 lg:row-start-1">
            <Reveal>{image}</Reveal>
          </div>

          {/* ---- Titolo ---- */}
          <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1">
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                id={titleId}
                className="mt-7 font-sans text-[clamp(2.2rem,5.6vw,4.2rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.03em] text-cream"
              >
                {title}
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ash sm:text-lg">
                {intro}
              </p>
            </Reveal>
          </div>

          {/* ---- Punti ---- */}
          <div className="order-2 lg:order-none lg:col-start-2 lg:row-start-2">
            <RevealGroup as="ul" className="space-y-0" stagger={0.1}>
              {points.map((point) => (
                <RevealItem
                  as="li"
                  key={point.title}
                  className="flex gap-4 border-b border-hairline py-5 first:border-t"
                >
                  <StarMark className="mt-1.5 h-3 w-3 shrink-0 text-gold-400" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.06em] text-cream">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ash">
                      {point.body}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* ---- Pulsanti ---- */}
          <div className="order-4 lg:order-none lg:col-start-2 lg:row-start-3">
            <Reveal delay={0.2}>
              <div className="flex flex-col gap-3.5 sm:flex-row">
                <Button
                  href={CTA.info.href}
                  size="md"
                  icon={<WhatsappIcon className="h-3.5 w-3.5" />}
                >
                  Richiedi informazioni
                </Button>
                <Button
                  href={CTA.primary.href}
                  variant="secondary"
                  size="md"
                  icon={<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
                >
                  Prenota la call
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
