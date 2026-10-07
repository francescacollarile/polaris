"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useRef } from "react";

import { BrandImage } from "@/components/media/BrandImage";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { OrbitField } from "@/components/ui/OrbitField";
import { StarMark } from "@/components/ui/StarMark";
import { IMAGES } from "@/data/images";
import { BRAND, CTA } from "@/data/site";
import { EASE_POLARIS } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/useSafeReducedMotion";

const HEADLINE = ["Forza.", "Estetica.", "Controllo."];
const MICRO = ["Online", "One To One", "Forza", "Ipertrofia", "Calisthenics"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useSafeReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-24 pt-28 sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-36"
    >
      {/* ---- Fondo ambientale ---- */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="fine-grid absolute inset-0 opacity-60" />
        <div className="halo-violet animate-drift absolute -right-[18%] -top-[22%] h-[85vh] w-[85vh] opacity-70" />
        <div className="halo-gold absolute -bottom-[28%] -left-[14%] h-[62vh] w-[62vh] opacity-50" />
        <OrbitField className="opacity-90" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <div className="shell w-full">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* ---- Colonna testo ---- */}
          <motion.div
            style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
            className="lg:col-span-7"
          >
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_POLARIS }}
              className="eyebrow flex items-center gap-3 text-gold-400/90"
            >
              <StarMark className="h-3 w-3" />
              {BRAND.wordmark}
              <span className="h-px w-8 bg-gold-600/50" aria-hidden="true" />
              {BRAND.coach}
            </motion.p>

            <h1
              id="hero-title"
              className="mt-7 font-sans text-[clamp(2.75rem,7.6vw,6.75rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.035em]"
            >
              {HEADLINE.map((word, index) => (
                <span key={word} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    initial={reduced ? false : { y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 1.05,
                      delay: 0.18 + index * 0.11,
                      ease: EASE_POLARIS,
                    }}
                    className={
                      index === 2
                        ? "text-gold-gradient block"
                        : "block text-cream"
                    }
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.62, ease: EASE_POLARIS }}
              className="mt-8 max-w-xl text-base leading-relaxed text-fog sm:text-lg"
            >
              Programmazione strutturata per costruire forza, ipertrofia e
              performance attraverso un percorso progettato{" "}
              <span className="text-cream">intorno a te</span>.
            </motion.p>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.74, ease: EASE_POLARIS }}
              className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            >
              <MagneticButton className="w-full sm:w-auto">
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
                href={CTA.coaching.href}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                icon={<ArrowDown className="h-4 w-4" aria-hidden="true" />}
              >
                Scopri il coaching
              </Button>
            </motion.div>

            <motion.ul
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.95, ease: EASE_POLARIS }}
              className="mt-11 hidden flex-wrap items-center gap-x-3 sm:flex gap-y-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted"
            >
              {MICRO.map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  {index > 0 && (
                    <span aria-hidden="true" className="text-gold-600/70">
                      ·
                    </span>
                  )}
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ---- Colonna immagine ---- */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.3, ease: EASE_POLARIS }}
            className="relative lg:col-span-5 lg:col-start-8"
          >
            <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
              {/* Orbita che circonda il soggetto */}
              <div
                aria-hidden="true"
                className="animate-orbit-slow pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[124%] -translate-x-1/2 -translate-y-1/2"
              >
                <svg viewBox="0 0 500 500" className="h-full w-full text-gold-400/20">
                  <circle cx="250" cy="250" r="242" stroke="currentColor" fill="none" />
                  <circle cx="250" cy="8" r="4.5" fill="currentColor" />
                </svg>
              </div>

              <div
                aria-hidden="true"
                className="halo-violet pointer-events-none absolute -inset-10 opacity-70 blur-2xl"
              />

              <motion.div
                style={reduced ? undefined : { y: imageY }}
                className="relative"
              >
                <BrandImage
                  src={IMAGES.hero}
                  alt="Francesca Collarile, coach di forza, ipertrofia e calisthenics"
                  placeholderLabel="Ritratto principale di Francesca"
                  priority
                  quality={88}
                  sizes="(max-width: 1024px) 92vw, 44vw"
                  className="aspect-[4/5] w-full rounded-lg border border-hairline shadow-[0_50px_120px_-40px_rgba(0,0,0,0.9)] sm:aspect-[3/4]"
                  imageClassName="object-center brightness-[0.9] contrast-[1.08] saturate-[0.92]"
                />

                {/* Vignettatura: i bordi chiari della foto si fondono nel nero
                    della pagina, il volto resta pulito al centro */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-lg bg-[radial-gradient(125%_100%_at_50%_30%,transparent_16%,rgba(5,5,5,0.34)_54%,rgba(5,5,5,0.88)_100%)]"
                />

                {/* Sfumatura che fonde l'immagine nel fondo */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-lg bg-[linear-gradient(to_top,rgba(5,5,5,0.8),transparent_45%)]"
                />

              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---- Indicatore di scroll ---- */}
      <motion.a
        href="#coaching"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        aria-label="Scorri per scoprire il coaching"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 text-muted transition-colors duration-500 hover:text-gold-300 lg:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.32em]">Scorri</span>
        <span
          aria-hidden="true"
          className="mask-fade-y block h-12 w-px bg-gradient-to-b from-gold-400/70 to-transparent"
        />
      </motion.a>
    </section>
  );
}
