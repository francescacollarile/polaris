import { BrandImage } from "@/components/media/BrandImage";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { StarMark } from "@/components/ui/StarMark";
import { IMAGES } from "@/data/images";
import { BRAND } from "@/data/site";

export function AboutFrancesca() {
  return (
    <Section
      id="chi-sono"
      labelledBy="chi-sono-title"
      className="overflow-hidden border-t border-hairline"
    >
      <div
        aria-hidden="true"
        className="halo-violet pointer-events-none absolute -left-1/3 top-1/4 h-[80vh] w-[80vh] opacity-25"
      />

      <div className="shell relative">
        {/* Griglia esplicita: su mobile l'ordine è nome → ruolo →
            fotografie → racconto; su desktop le foto tornano a sinistra,
            affiancate al testo. */}
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[5fr_7fr]">
          {/* ---- Nome e ruolo ---- */}
          <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1 lg:pl-4">
            <Reveal>
              <Eyebrow>Chi sono</Eyebrow>
            </Reveal>

            <Reveal delay={0.08}>
              <h2
                id="chi-sono-title"
                className="mt-7 font-sans text-[clamp(2.1rem,5.2vw,3.9rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.03em] text-cream"
              >
                Francesca
                <br />
                <span className="text-gold-gradient">Collarile</span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted">
                {BRAND.role}
              </p>
            </Reveal>
          </div>

          {/* ---- Composizione fotografica asimmetrica ---- */}
          <div className="order-2 lg:order-none lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <div className="relative">
              <Reveal>
                <div className="relative">
                  <BrandImage
                    src={IMAGES.francesca02}
                    alt="Francesca Collarile, coach Polaris"
                    placeholderLabel="Ritratto editoriale"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="aspect-[4/5] w-full rounded-lg border border-hairline"
                    imageClassName="object-left brightness-[0.92] contrast-[1.06] saturate-[0.95]"
                  />
                  {/* I fondi chiari si fondono nel nero della pagina */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-lg bg-[radial-gradient(130%_105%_at_35%_35%,transparent_20%,rgba(5,5,5,0.3)_58%,rgba(5,5,5,0.82)_100%)]"
                  />
                </div>
              </Reveal>

              {/* Coppia di dettagli sfalsata: premiazione a sinistra,
                  allenamento a destra. La didascalia riguarda la medaglia. */}
              <Reveal delay={0.16}>
                <div className="relative -mt-16 grid grid-cols-2 gap-3 sm:-mt-24 sm:gap-4">
                  <div className="relative">
                    <div
                      aria-hidden="true"
                      className="halo-gold pointer-events-none absolute -inset-6 opacity-80 blur-xl"
                    />
                    <BrandImage
                      src={IMAGES.medaglia}
                      alt="Premiazione del 3° posto al Calisthenics Endurance di Alessandria 2024"
                      placeholderLabel="Premiazione — medaglia"
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      className="relative aspect-square w-full rounded-lg border border-gold-600/45 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.95)]"
                      /* Foto molto verticale: ancorata in alto, altrimenti il
                         ritaglio quadrato taglierebbe testa e medaglia. */
                      imageClassName="object-[50%_22%] brightness-[0.94] contrast-[1.05] saturate-[0.95]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-lg bg-[radial-gradient(120%_120%_at_50%_45%,transparent_35%,rgba(5,5,5,0.6)_100%)]"
                    />

                    <p className="mt-4 flex gap-2.5 text-[0.62rem] font-semibold uppercase leading-snug tracking-[0.12em] text-fog">
                      <StarMark className="mt-0.5 h-2.5 w-2.5 shrink-0 text-gold-300" />
                      <span>
                        3° posto · Calisthenics Endurance
                        <span className="mt-1 block font-normal tracking-[0.08em] text-muted">
                          Alessandria 2024 — Avanzato Femminile
                        </span>
                      </span>
                    </p>
                  </div>

                  <div className="relative">
                    <BrandImage
                      src={IMAGES.francesca03}
                      alt="Francesca Collarile durante un allenamento a corpo libero"
                      placeholderLabel="Dettaglio — allenamento"
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      className="relative aspect-square w-full rounded-lg border border-hairline-strong shadow-[0_40px_90px_-30px_rgba(0,0,0,0.95)]"
                      imageClassName="brightness-[0.94] contrast-[1.05] saturate-[0.95]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-lg bg-[radial-gradient(120%_120%_at_50%_45%,transparent_30%,rgba(5,5,5,0.68)_100%)]"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Orbita decorativa */}
              <div
                aria-hidden="true"
                className="animate-orbit-slower pointer-events-none absolute -left-16 top-1/3 hidden aspect-square w-56 lg:block"
              >
                <svg viewBox="0 0 200 200" className="h-full w-full text-gold-400/20">
                  <circle cx="100" cy="100" r="96" stroke="currentColor" fill="none" />
                  <circle cx="100" cy="4" r="3" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          {/* ---- Racconto ---- */}
          <div className="order-3 lg:order-none lg:col-start-2 lg:row-start-2 lg:pl-4">
            <Reveal delay={0.2}>
              <div className="space-y-6 text-base leading-relaxed text-ash sm:text-lg">
                <p>
                  Sono arrivata alla programmazione dalla parte pratica: la sala
                  pesi, il corpo libero, le persone da seguire una alla volta.
                  Il calisthenics è la mia specializzazione, ma non è mai stato
                  un recinto — è il posto da cui ho imparato quanto conta la
                  qualità di un movimento prima ancora del carico che ci metti
                  sopra.
                </p>
                <p>
                  Lavorare in sala mi ha insegnato una cosa che difficilmente si
                  impara altrove: due persone che eseguono lo stesso esercizio
                  quasi mai stanno facendo lo stesso lavoro. Cambia la leva,
                  cambia l&apos;esperienza, cambia la storia che quel corpo si
                  porta dietro. Da lì nasce il modo in cui programmo.
                </p>
                <p className="text-cream">
                  Non ti do una scheda e ti auguro buona fortuna. Analizzo,
                  costruisco, guardo come ti muovi e correggo. Poi ricomincio,
                  un livello più in alto.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <blockquote className="mt-11 border-l border-gold-600/50 pl-7">
                <p className="font-display text-2xl font-light italic leading-snug text-cream sm:text-3xl">
                  «Polaris è la stella che non si sposta. In un percorso di
                  allenamento serve esattamente questo: un punto di riferimento
                  mentre tutto il resto cambia.»
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
