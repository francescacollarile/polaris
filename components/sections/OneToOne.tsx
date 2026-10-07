import { MapPin } from "lucide-react";

import { BrandImage } from "@/components/media/BrandImage";
import { IMAGES } from "@/data/images";
import { GYM } from "@/data/site";

import { CoachingSplit, type CoachingPoint } from "./CoachingSplit";

const POINTS: CoachingPoint[] = [
  {
    title: "Correzione in tempo reale",
    body: "La tecnica si aggiusta mentre la stai eseguendo.",
  },
  {
    title: "Carichi gestiti insieme",
    body: "Scelta del carico, dei recuperi e dell'intensità decisa sul momento, su come stai andando quel giorno.",
  },
  {
    title: "Cosa impari davvero in sala",
    body: "Come un movimento va fatto in modo da percepirlo tuo, e come tu devi muovere quel carico.",
  },
];

export function OneToOne() {
  return (
    <CoachingSplit
      id="one-to-one"
      eyebrow="Coaching dal vivo"
      title={
        <>
          Affiancamento
          <br />
          <span className="text-gold-gradient">1 to 1</span>
        </>
      }
      intro={
        <>
          Oltre al percorso online seguo anche sessioni individuali in sala,
          presso {GYM.name} a {GYM.city}. Stesso metodo, stessa attenzione ai
          dettagli — con il vantaggio di poter intervenire mentre il movimento
          sta accadendo.
        </>
      }
      points={POINTS}
      image={
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
      }
    />
  );
}
