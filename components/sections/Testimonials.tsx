"use client";

import { AnimatePresence, motion } from "motion/react";
import { Quote, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { InstagramIcon } from "@/components/ui/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS, type Testimonial } from "@/data/testimonials";
import { EASE_POLARIS } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/useSafeReducedMotion";

/** Righe visibili prima del troncamento. */
const CLAMP_LINES = 6;

export function Testimonials() {
  const hasTestimonials = TESTIMONIALS.length > 0;
  const isDev = process.env.NODE_ENV === "development";
  const [expanded, setExpanded] = useState<Testimonial | null>(null);

  // In produzione la sezione non compare finché non ci sono recensioni reali.
  if (!hasTestimonials && !isDev) return null;

  return (
    <Section
      id="testimonianze"
      labelledBy="testimonianze-title"
      className="overflow-hidden border-t border-hairline"
    >
      <div
        aria-hidden="true"
        className="halo-violet pointer-events-none absolute left-1/2 top-0 h-[50vh] w-[80vh] -translate-x-1/2 opacity-25"
      />

      <div className="shell relative">
        <SectionHeading
          id="testimonianze-title"
          eyebrow="Testimonianze"
          title={
            <>
              Le parole
              <br />
              <span className="text-gold-gradient">di chi mi ha seguita.</span>
            </>
          }
          className="max-w-3xl"
        />

        {hasTestimonials ? (
          <TestimonialGrid items={TESTIMONIALS} onExpand={setExpanded} />
        ) : (
          <EmptyStateForDev />
        )}
      </div>

      <TestimonialModal
        testimonial={expanded}
        onClose={() => setExpanded(null)}
      />
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Griglia                                                             */
/* ------------------------------------------------------------------ */

/**
 * Le recensioni stanno tutte in pagina: nessuno scorrimento, nessuna
 * freccia. Con tre voci riempiono la riga su desktop e si impilano
 * sotto i 1024px.
 */
function TestimonialGrid({
  items,
  onExpand,
}: {
  items: Testimonial[];
  onExpand: (item: Testimonial) => void;
}) {
  return (
    <RevealGroup
      className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3"
      stagger={0.12}
    >
      {items.map((item, index) => (
        <RevealItem key={`${item.name}-${index}`} className="h-full">
          <TestimonialCard item={item} onExpand={() => onExpand(item)} />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */

function TestimonialCard({
  item,
  onExpand,
}: {
  item: Testimonial;
  onExpand: () => void;
}) {
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const [isClamped, setIsClamped] = useState(false);

  /**
   * Il testo viene tagliato a sei righe via CSS. Qui si verifica se il
   * contenuto reale supera lo spazio visibile: solo in quel caso compare
   * "Leggi di più". La misura avviene dentro il ResizeObserver, che scatta
   * anche alla prima osservazione e a ogni cambio di larghezza o di font.
   */
  useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      setIsClamped(el.scrollHeight - el.clientHeight > 1);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="flex h-full flex-col rounded-lg border border-hairline bg-surface-900/60 p-7 transition-colors duration-700 hover:border-violet-400/30 sm:p-8">
      <figcaption className="flex items-center gap-4 border-b border-hairline pb-6">
        <TestimonialAvatar item={item} />

        <div className="min-w-0">
          <p className="truncate text-sm font-bold uppercase tracking-[0.08em] text-cream">
            {item.name}
          </p>
          {(item.category || item.duration) && (
            <p className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.66rem] uppercase tracking-[0.14em] text-muted">
              {item.category && <span>{item.category}</span>}
              {item.category && item.duration && (
                <span aria-hidden="true" className="text-gold-600/70">
                  ·
                </span>
              )}
              {item.duration && <span>{item.duration}</span>}
            </p>
          )}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          {item.instagram && (
            <a
              href={`https://www.instagram.com/${item.instagram.replace("@", "")}/`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Profilo Instagram di ${item.name}`}
              className="text-muted transition-colors duration-300 hover:text-cream"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          )}
          <Quote className="h-5 w-5 text-gold-500/70" aria-hidden="true" />
        </div>
      </figcaption>

      <blockquote className="mt-6 flex-1">
        <p
          ref={quoteRef}
          className="overflow-hidden font-display text-xl font-light italic leading-snug text-cream sm:text-2xl"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: CLAMP_LINES,
          }}
        >
          «{item.quote}»
        </p>

        {isClamped && (
          <button
            type="button"
            onClick={onExpand}
            className="mt-3 rounded-sm text-sm font-semibold text-link underline decoration-link/40 underline-offset-4 transition-colors duration-300 hover:text-link-hover hover:decoration-link-hover/60"
          >
            Leggi di più
          </button>
        )}
      </blockquote>

      {item.result && (
        <p className="mt-6 rounded-md border border-gold-600/30 bg-gold-500/[0.06] px-4 py-3 text-[0.78rem] leading-relaxed text-gold-200">
          {item.result}
        </p>
      )}
    </figure>
  );
}

/** Mostrato solo se la recensione ha una foto: senza, niente segnaposto. */
function TestimonialAvatar({ item }: { item: Testimonial }) {
  if (!item.image) return null;
  return (
    <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-hairline-strong">
      <Image src={item.image} alt="" fill sizes="44px" className="object-cover" />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Modale con la recensione integrale                                  */
/* ------------------------------------------------------------------ */

function TestimonialModal({
  testimonial,
  onClose,
}: {
  testimonial: Testimonial | null;
  onClose: () => void;
}) {
  const reduced = useSafeReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!testimonial) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [testimonial, onClose]);

  return (
    <AnimatePresence>
      {testimonial && (
        <motion.div
          /* Il padding superiore tiene il pannello sempre sotto la navbar:
             senza, a viewport basse la modale ci finiva a filo. */
          className="fixed inset-0 z-[70] flex items-end justify-center p-4 pt-24 sm:items-center sm:p-6 sm:pt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE_POLARIS }}
        >
          {/* Sfondo cliccabile */}
          <button
            type="button"
            aria-label="Chiudi"
            tabIndex={-1}
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-ink-950/85 backdrop-blur-md"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="recensione-titolo"
            initial={reduced ? false : { y: 24, scale: 0.985 }}
            animate={{ y: 0, scale: 1 }}
            exit={reduced ? undefined : { y: 16, scale: 0.99, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE_POLARIS }}
            /* overflow-x-hidden: l'alone decorativo sborda a destra e, con
               l'asse Y scrollabile, il browser attiverebbe anche la barra
               orizzontale. */
            className="relative max-h-[74svh] w-full max-w-2xl overflow-y-auto overflow-x-hidden rounded-lg border border-hairline-strong bg-[linear-gradient(155deg,var(--color-surface-800),var(--color-ink-900)_70%)] p-7 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.95)] sm:p-10"
          >
            <div
              aria-hidden="true"
              className="halo-violet pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-50"
            />

            <div className="relative flex items-center gap-4 border-b border-hairline pb-6">
              <TestimonialAvatar item={testimonial} />
              <div className="min-w-0">
                <p
                  id="recensione-titolo"
                  className="text-sm font-bold uppercase tracking-[0.08em] text-cream"
                >
                  {testimonial.name}
                </p>
                {(testimonial.category || testimonial.duration) && (
                  <p className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.66rem] uppercase tracking-[0.14em] text-muted">
                    {testimonial.category && <span>{testimonial.category}</span>}
                    {testimonial.category && testimonial.duration && (
                      <span aria-hidden="true" className="text-gold-600/70">
                        ·
                      </span>
                    )}
                    {testimonial.duration && <span>{testimonial.duration}</span>}
                  </p>
                )}
              </div>

              <div className="ml-auto flex shrink-0 items-center gap-3">
                <Quote className="hidden h-5 w-5 text-gold-500/70 sm:block" aria-hidden="true" />
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Chiudi la recensione"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-cream transition-colors duration-300 hover:border-violet-400/45 hover:bg-white/[0.04]"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <blockquote className="relative mt-7">
              <p className="font-display text-xl font-light italic leading-relaxed text-cream sm:text-2xl">
                «{testimonial.quote}»
              </p>
            </blockquote>

            {testimonial.result && (
              <p className="relative mt-7 rounded-md border border-gold-600/30 bg-gold-500/[0.06] px-4 py-3 text-[0.82rem] leading-relaxed text-gold-200">
                {testimonial.result}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/* Anteprima visibile solo in sviluppo                                 */
/* ------------------------------------------------------------------ */

function EmptyStateForDev() {
  return (
    <div className="mt-14">
      <Reveal>
        <div className="rounded-lg border border-dashed border-violet-400/30 bg-violet-500/[0.04] px-6 py-6">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
            Visibile solo in sviluppo
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ash">
            Nessuna recensione è stata inserita, quindi in produzione questa
            sezione non viene mostrata. Aggiungi le recensioni reali in{" "}
            <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.78rem] text-cream">
              data/testimonials.ts
            </code>{" "}
            e il carosello qui sotto si popola da solo.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
