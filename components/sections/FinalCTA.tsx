import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { WhatsappIcon } from "@/components/ui/icons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { OrbitField } from "@/components/ui/OrbitField";
import { Reveal } from "@/components/ui/Reveal";
import { StarMark } from "@/components/ui/StarMark";
import { CONTACTS, CTA } from "@/data/site";

export function FinalCTA() {
  return (
    <section
      id="contatti"
      aria-labelledby="contatti-title"
      className="relative isolate overflow-hidden border-t border-hairline py-28 sm:py-36 lg:py-44"
    >
      {/* Fondo */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="fine-grid absolute inset-0 opacity-50" />
        <div className="halo-violet animate-drift absolute left-1/2 top-1/2 h-[110vh] w-[110vh] -translate-x-1/2 -translate-y-1/2 opacity-45" />
        <OrbitField variant="full" className="opacity-80" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="shell relative text-center">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-2.5 text-gold-400/90">
            <StarMark className="h-2.5 w-2.5" />
            Il primo passo
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            id="contatti-title"
            className="mx-auto mt-8 max-w-5xl font-sans text-[clamp(2.6rem,8.5vw,6.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.035em] text-cream"
          >
            Inizia il tuo
            <br />
            <span className="text-gold-gradient">percorso.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-9 max-w-2xl text-base leading-relaxed text-ash sm:text-lg">
            Una chiamata conoscitiva gratuita, senza impegno. Ci parliamo, capisco
            da dove parti e valutiamo insieme se questo percorso è adatto a te.
            Se non lo è, te lo dico.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <MagneticButton className="w-full sm:w-auto" strength={0.22}>
              <Button
                href={CTA.primary.href}
                size="lg"
                className="w-full sm:w-auto"
                icon={<ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
              >
                Prenota la call gratuita
              </Button>
            </MagneticButton>

            <Button
              href={CONTACTS.whatsapp}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              icon={<WhatsappIcon className="h-4 w-4" />}
            >
              Scrivimi su WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
