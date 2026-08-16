import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { OrbitField } from "@/components/ui/OrbitField";
import { StarMark } from "@/components/ui/StarMark";
import { CTA } from "@/data/site";

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-[86svh] items-center overflow-hidden py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="fine-grid absolute inset-0 opacity-40" />
        <div className="halo-violet absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 opacity-35" />
        <OrbitField />
      </div>

      <div className="shell relative text-center">
        <p className="eyebrow flex items-center justify-center gap-2.5 text-gold-400/90">
          <StarMark className="h-2.5 w-2.5" />
          Errore 404
        </p>

        <h1 className="mx-auto mt-8 max-w-3xl font-sans text-[clamp(2.4rem,7vw,5rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.035em] text-cream">
          Questa rotta
          <br />
          <span className="text-gold-gradient">non porta da nessuna parte.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ash">
          La pagina che cercavi non esiste o è stata spostata. Torna al punto di
          riferimento e riparti da lì.
        </p>

        <div className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/" size="lg" className="w-full sm:w-auto">
            Torna alla home
          </Button>
          <Button
            href={CTA.primary.href}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Prenota la call gratuita
          </Button>
        </div>

        <p className="mt-10 text-xs text-muted">
          Oppure vai direttamente al{" "}
          <Link
            href="/#metodo"
            className="underline decoration-gold-600/50 underline-offset-4 transition-colors duration-300 hover:text-cream"
          >
            metodo
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
