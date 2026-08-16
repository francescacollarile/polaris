"use client";

import Image from "next/image";

import { useImageSrc } from "@/components/media/ImageManifestProvider";
import { PolarisStar } from "@/components/ui/StarMark";
import { IMAGES } from "@/data/images";
import { BRAND } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Marchio Polaris: stella originale + wordmark su due righe
 * (POLARIS sopra, TEAM sotto), come nel logo fornito.
 *
 * La stella è quella del logo originale, vettorializzata dal file JPG:
 * la "P" intarsiata è un foro nel tracciato, quindi lascia passare il fondo.
 *
 * Se dentro `public/immagini/` compare `logo.svg` (logo completo a fondo
 * trasparente) viene usato quello al posto della ricostruzione.
 */
export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const fullLogo = useImageSrc(IMAGES.logo);
  const star = useImageSrc(IMAGES.logoStar);
  const isSmall = size === "sm";

  if (fullLogo) {
    return (
      <span className={cn("relative block", className)}>
        <Image
          src={fullLogo}
          alt={`${BRAND.wordmark} Team — ${BRAND.coach}`}
          width={isSmall ? 128 : 160}
          height={isSmall ? 34 : 42}
          priority
          unoptimized
          className="h-auto w-auto drag-none"
        />
      </span>
    );
  }

  return (
    <span className={cn("flex items-center", isSmall ? "gap-2.5" : "gap-3", className)}>
      {star ? (
        <Image
          src={star}
          alt=""
          aria-hidden="true"
          width={592}
          height={616}
          priority
          unoptimized
          className={cn("w-auto drag-none", isSmall ? "h-8" : "h-11")}
        />
      ) : (
        <PolarisStar
          className={cn("shrink-0 text-gold-400", isSmall ? "h-7 w-7" : "h-10 w-10")}
        />
      )}

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-extrabold uppercase text-cream",
            isSmall
              ? "text-[0.78rem] tracking-[0.3em] -mr-[0.3em]"
              : "text-[0.95rem] tracking-[0.32em] -mr-[0.32em]",
          )}
        >
          {BRAND.wordmark}
        </span>
        <span
          className={cn(
            "font-extrabold uppercase text-gold-400",
            isSmall
              ? "mt-1 text-[0.6rem] tracking-[0.3em] -mr-[0.3em]"
              : "mt-1.5 text-[0.72rem] tracking-[0.32em] -mr-[0.32em]",
          )}
        >
          Team
        </span>
      </span>
    </span>
  );
}
