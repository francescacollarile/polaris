import { ArrowUpRight, MapPin } from "lucide-react";

import { BrandImage } from "@/components/media/BrandImage";
import { Button } from "@/components/ui/Button";
import { WhatsappIcon } from "@/components/ui/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { StarMark } from "@/components/ui/StarMark";
import { IMAGES } from "@/data/images";
import { CTA, GYM } from "@/data/site";

const POINTS = [
  {
    title: "Correzione in tempo reale",
    body: "La tecnica si aggiusta mentre stai eseguendo, non tre giorni dopo davanti a un video.",
  },
  {
    title: "Carichi gestiti insieme",
    body: "Scelta del carico, dei recuperi e dell'intensità decisa sul momento, su come stai andando quel giorno.",
  },
  {
    title: "Stessa logica di programmazione",
    body: "Anche dal vivo il lavoro segue una struttura: analisi, strategia, progressione. Non sessioni scollegate tra loro.",
  },
];

export function OneToOne() {
  return (
    <Section id="one-to-one" labelledBy="one-to-one-title" className="overflow-hidden">
      <div className="shell relative">
        {/* Griglia esplicita: su mobile l'ordine è titolo → punti →
            immagine → pulsanti; su desktop l'immagine torna a sinistra,
            a tutta altezza. */}
        <div className="grid items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          {/* ---- Immagine ---- */}
          <div className="order-3 lg:order-none lg:col-start-1 lg:row-span-3 lg:row-start-1">
            <Reveal>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="halo-violet pointer-events-none absolute -inset-10 opacity-50 blur-2xl"
                />
                <BrandImage
                  src={IMAGES.academy}
                  alt={`Affiancamento individuale presso ${GYM.name}, ${GYM.city}`}
                  placeholderLabel="Sala pesi — GPC Power Academy"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  /* Foto molto verticale: riquadro verticale anche su mobile,
                     altrimenti il taglio mangerebbe la parte alta. */
                  className="relative aspect-[4/5] w-full rounded-lg border border-hairline lg:aspect-[5/6]"
                  imageClassName="object-[50%_12%] brightness-[0.95] contrast-[1.05]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-lg bg-[linear-gradient(to_top,rgba(5,5,5,0.7),transparent_50%)]"
                />

                {/* Targhetta sede */}
                <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-auto">
                  <div className="glass flex items-center gap-3.5 rounded-full border border-hairline-strong px-5 py-3">
                    <MapPin className="h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
                    <p className="text-[0.68rem] font-semibold uppercase leading-tight tracking-[0.12em] text-cream">
                      {GYM.name}
                      <span className="mt-0.5 block font-normal tracking-[0.08em] text-muted">
                        {GYM.city}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ---- Titolo ---- */}
          <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1">
            <Reveal>
              <Eyebrow>Coaching dal vivo</Eyebrow>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                id="one-to-one-title"
                className="mt-7 font-sans text-[clamp(2.2rem,5.6vw,4.2rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.03em] text-cream"
              >
                Affiancamento
                <br />
                <span className="text-gold-gradient">1 to 1</span>
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ash sm:text-lg">
                Oltre al percorso online seguo anche sessioni individuali in
                sala, presso {GYM.name} a {GYM.city}. Stesso metodo, stessa
                attenzione ai dettagli — con il vantaggio di poter intervenire
                mentre il movimento sta accadendo.
              </p>
            </Reveal>
          </div>

          {/* ---- Punti ---- */}
          <div className="order-2 lg:order-none lg:col-start-2 lg:row-start-2">
            <RevealGroup as="ul" className="space-y-0" stagger={0.1}>
              {POINTS.map((point) => (
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
