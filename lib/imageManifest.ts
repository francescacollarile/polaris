import fs from "node:fs";
import path from "node:path";

import { IMAGE_PATHS } from "@/data/images";

/** Percorso reale del file trovato, oppure `null` se manca. */
export type ImageManifest = Record<string, string | null>;

/** Ordine di preferenza a parità di nome file. */
const EXT_PRIORITY = [".webp", ".avif", ".jpg", ".jpeg", ".png", ".svg"];

/**
 * Risolve, lato server, quali immagini di brand esistono davvero
 * dentro `public/` e con quale estensione.
 *
 * Il confronto avviene sul nome del file senza estensione e senza
 * distinzione di maiuscole: `hero.jpg`, `hero.jpeg`, `hero.JPG` e
 * `hero.webp` funzionano tutti, senza toccare `data/images.ts`.
 *
 * Le immagini mancanti vengono sostituite da un placeholder curato:
 * niente richieste 404, niente immagini rotte, niente errori in console.
 *
 * Il manifest viene calcolato al build (le pagine sono statiche):
 * dopo aver aggiunto una foto basta riavviare il dev server o
 * rilanciare `npm run build`.
 */
export function buildImageManifest(): ImageManifest {
  const publicDir = path.join(process.cwd(), "public");
  const manifest: ImageManifest = {};
  const dirCache = new Map<string, Map<string, string[]>>();

  /** Indicizza una cartella: nome-senza-estensione → file reali. */
  const indexDir = (dir: string) => {
    const cached = dirCache.get(dir);
    if (cached) return cached;

    const index = new Map<string, string[]>();
    try {
      for (const entry of fs.readdirSync(path.join(publicDir, dir), {
        withFileTypes: true,
      })) {
        if (!entry.isFile()) continue;
        const ext = path.extname(entry.name);
        const base = path.basename(entry.name, ext).toLowerCase();
        const list = index.get(base) ?? [];
        list.push(entry.name);
        index.set(base, list);
      }
    } catch {
      // Cartella assente: nessuna immagine disponibile, nessun errore.
    }

    dirCache.set(dir, index);
    return index;
  };

  for (const src of IMAGE_PATHS) {
    const clean = src.replace(/^\//, "");
    const dir = path.posix.dirname(clean);
    const declared = path.posix.basename(clean);
    const base = declared.replace(/\.[^.]+$/, "").toLowerCase();

    const candidates = indexDir(dir).get(base);
    if (!candidates || candidates.length === 0) {
      manifest[src] = null;
      continue;
    }

    // Prima l'estensione dichiarata, poi l'ordine di preferenza
    const best =
      candidates.find((name) => name === declared) ??
      candidates
        .slice()
        .sort(
          (a, b) =>
            EXT_PRIORITY.indexOf(path.extname(a).toLowerCase()) -
            EXT_PRIORITY.indexOf(path.extname(b).toLowerCase()),
        )[0];

    manifest[src] = `/${dir}/${best}`;
  }

  return manifest;
}
