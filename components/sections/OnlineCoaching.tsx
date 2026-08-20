import {
  Eye,
  Mic,
  MonitorPlay,
  SlidersHorizontal,
  Video,
} from "lucide-react";

import { BrandImage } from "@/components/media/BrandImage";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMark } from "@/components/ui/StarMark";
import { IMAGES } from "@/data/images";
import { CTA } from "@/data/site";

const ANALYSIS = [
  "Obiettivi",
  "Caratteristiche individuali",
  "Esperienza di allenamento",
  "Esigenze e priorità",
  "Eventuali problematiche dichiarate",
  "Disponibilità reale",
  "Modalità e luogo di allenamento",
];

const DELIVERABLES = [
  {
    icon: MonitorPlay,
    title: "Programmazione personalizzata",
    body: "Costruita sui dati raccolti, non adattata da un modello esistente.",
  },
  {
    icon: Video,
    title: "Video esecutivi",
    body: "Ogni esercizio con la sua esecuzione, per non lasciare spazio ai dubbi.",
  },
  {
    icon: Mic,
    title: "Audio esplicativi",
    body: "Il perché delle scelte fatte e i dettagli da tenere sotto controllo.",
  },
  {
    icon: Eye,
    title: "Osservazione",
    body: "I tuoi video di allenamento analizzati per capire come ti muovi davvero.",
  },
  {
    icon: SlidersHorizontal,
    title: "Adattamento",
    body: "Le variabili vengono regolate sulla base di quello che il corpo restituisce.",
  },
];

export function OnlineCoaching() {
  return (
    <Section id="coaching" labelledBy="coaching-title" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="halo-violet pointer-events-none absolute -left-1/4 top-0 h-[60vh] w-[60vh] opacity-25"
      />

      <div className="shell relative">
        {/* Il titolo sta dentro la colonna di sinistra: così l'immagine
            parte dalla stessa altezza, non sotto. */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <SectionHeading
              id="coaching-title"
              eyebrow="Coaching online"
              title={
                <>
                  Non una scheda.
                  <br />
                  <span className="text-gold-gradient">Un percorso.</span>
                </>
              }
            />

            <Reveal>
              <p className="eyebrow mt-14 text-muted">Cosa viene analizzato</p>
            </Reveal>

            <RevealGroup
              as="ul"
              className="mt-7 flex flex-wrap gap-2.5"
              stagger={0.06}
            >
              {ANALYSIS.map((item) => (
                <RevealItem as="li" key={item} y={12}>
                  <span className="flex items-center gap-2.5 rounded-full border border-hairline bg-white/[0.02] px-4 py-2.5 text-[0.78rem] text-fog transition-colors duration-500 hover:border-violet-400/35 hover:text-cream">
                    <StarMark className="h-2 w-2 shrink-0 text-gold-500" />
                    {item}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.15}>
              <div className="mt-10 border-l border-gold-600/40 pl-6">
                <p className="font-display text-2xl font-light italic leading-snug text-cream sm:text-[1.7rem]">
                  Da qui nasce la programmazione. Non prima.
                </p>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-ash">
                  Due persone con lo stesso obiettivo possono ricevere due
                  programmi completamente diversi. È esattamente il punto: il
                  programma è una conseguenza della persona, non il contrario.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10">
                <Button href={CTA.talk.href} variant="secondary" size="md">
                  Parliamone in call
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              {/* Nessun alone dietro: con la fusione "screen" traspariva
                  attraverso il nero della foto disegnando un rettangolo. */}
              <div className="relative">
                <BrandImage
                  src={IMAGES.training01}
                  alt="Coaching online: la programmazione preparata da Francesca Collarile arriva dal telefono mentre ti alleni"
                  placeholderLabel="Coaching online"
                  sizes="(max-width: 1024px) 80vw, 42vw"
                  contain
                  /* Riquadro con le proporzioni reali del ritaglio: il
                     montaggio lo riempie esattamente, senza bande vuote né
                     tagli. La larghezza massima ne governa l'altezza. */
                  className="relative mx-auto aspect-[2048/1966] w-full max-w-[340px] sm:max-w-[430px] lg:max-w-[520px]"
                  /* Il fondo del montaggio e stato portato a #050505, lo stesso
                     nero della pagina: si fonde senza mostrare il rettangolo. */
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---- Cosa ricevi ---- */}
        <div className="mt-20 sm:mt-28">
          <Reveal>
            <div className="flex items-center gap-5">
              <p className="eyebrow shrink-0 text-gold-400/90">Cosa ricevi</p>
              <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
            </div>
          </Reveal>

          <RevealGroup
            className="mt-10 grid gap-px overflow-hidden rounded-lg border border-hairline bg-[var(--color-hairline)] sm:grid-cols-2 lg:grid-cols-5"
            stagger={0.09}
          >
            {DELIVERABLES.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem
                  key={item.title}
                  className="group relative bg-ink-950 p-6 transition-colors duration-700 hover:bg-surface-900 sm:p-7"
                >
                  <Icon
                    className="h-5 w-5 text-gold-400 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-sm font-bold uppercase leading-snug tracking-[0.06em] text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[0.82rem] leading-relaxed text-ash">
                    {item.body}
                  </p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </Section>
  );
}
