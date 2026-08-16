"use client";

import Image from "next/image";

import { StarMark } from "@/components/ui/StarMark";
import { cn } from "@/lib/utils";

import { useImageSrc } from "./ImageManifestProvider";

type BrandImageProps = {
  /** Percorso pubblico, es. `/immagini/hero.jpg`. */
  src: string;
  alt: string;
  /** Classi del contenitore: qui va impostato l'aspect-ratio. */
  className?: string;
  /** Classi applicate all'immagine (es. object-position). */
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  /** Etichetta mostrata nel placeholder quando il file non esiste ancora. */
  placeholderLabel?: string;
  /** Adatta l'immagine senza ritagliarla (utile per i confronti prima/dopo). */
  contain?: boolean;
};

/**
 * Immagine di brand con fallback curato.
 *
 * Se il file non è ancora dentro `public/immagini/`, al suo posto compare
 * un placeholder coerente con la direzione artistica che indica il nome
 * esatto del file da inserire. Nessun 404, nessuna immagine rotta.
 */
export function BrandImage({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  quality = 82,
  placeholderLabel,
  contain = false,
}: BrandImageProps) {
  const resolved = useImageSrc(src);

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden",
        // In modalità `contain` l'immagine non riempie il riquadro: un fondo
        // pieno si vedrebbe ai lati. Serve trasparente (ritagli su PNG,
        // confronti prima/dopo).
        contain ? "bg-transparent" : "bg-surface-900",
        className,
      )}
    >
      {resolved ? (
        <Image
          src={resolved}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          className={cn(
            "drag-none",
            contain ? "object-contain" : "object-cover",
            imageClassName,
          )}
        />
      ) : (
        <ImagePlaceholder src={src} label={placeholderLabel ?? alt} />
      )}
    </div>
  );
}

function ImagePlaceholder({ src, label }: { src: string; label: string }) {
  const filename = src.split("/").pop() ?? src;

  return (
    <div
      role="img"
      aria-label={label}
      className="grain absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[linear-gradient(155deg,var(--color-surface-800)_0%,var(--color-ink-900)_55%,var(--color-ink-950)_100%)] px-6 text-center"
    >
      {/* Alone viola profondo */}
      <div
        aria-hidden="true"
        className="halo-violet pointer-events-none absolute -top-1/4 left-1/2 h-[130%] w-[130%] -translate-x-1/2 opacity-40"
      />

      {/* Orbite sottilissime */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 text-white/[0.07]"
      >
        <circle cx="200" cy="200" r="120" stroke="currentColor" fill="none" />
        <circle cx="200" cy="200" r="176" stroke="currentColor" fill="none" />
        <circle cx="200" cy="200" r="60" stroke="currentColor" fill="none" />
      </svg>

      <StarMark className="relative h-5 w-5 text-gold-400/80" />

      <div className="relative space-y-1.5">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-ash">
          Immagine in arrivo
        </p>
        <p className="font-mono text-[0.68rem] tracking-tight text-muted">
          /immagini/{filename}
        </p>
      </div>
    </div>
  );
}
