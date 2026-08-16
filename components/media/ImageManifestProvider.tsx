"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { ImageManifest } from "@/lib/imageManifest";

const ImageManifestContext = createContext<ImageManifest>({});

export function ImageManifestProvider({
  manifest,
  children,
}: {
  manifest: ImageManifest;
  children: ReactNode;
}) {
  return (
    <ImageManifestContext.Provider value={manifest}>
      {children}
    </ImageManifestContext.Provider>
  );
}

/**
 * Percorso reale dell'immagine dentro `public/`, oppure `null` se manca.
 * L'estensione effettiva può differire da quella dichiarata in `data/images.ts`.
 */
export function useImageSrc(src: string): string | null {
  const manifest = useContext(ImageManifestContext);
  return manifest[src] ?? null;
}
