import { IMAGES } from "./images";

/**
 * RISULTATI
 *
 * Le immagini sono reali e fornite da Francesca: ogni file contiene
 * il confronto prima/dopo affiancato.
 *
 * ⚠️ Nessun dato numerico è stato inventato. `title`, `description` e
 * `metrics` sono predisposti: compilali solo con informazioni verificate.
 * Vengono mostrati esclusivamente se valorizzati.
 *
 * Per un confronto costruito con due file separati usa `beforeImage` e
 * `afterImage` al posto di `compositeImage`.
 */

export type ResultMetric = {
  label: string;
  value: string;
};

export type ResultCase = {
  id: string;
  /** Immagine unica che contiene già prima+dopo. */
  compositeImage?: string;
  beforeImage?: string;
  afterImage?: string;
  alt: string;
  title?: string;
  description?: string;
  duration?: string;
  metrics?: ResultMetric[];
};

/** Imposta a `false` per nascondere completamente la sezione. */
export const SHOW_RESULTS = true;

export const RESULTS: ResultCase[] = [
  {
    id: "percorso-01",
    compositeImage: IMAGES.risultato01,
    alt: "Confronto prima e dopo di un allievo seguito nel percorso di coaching",
  },
  {
    id: "percorso-02",
    compositeImage: IMAGES.risultato02,
    alt: "Confronto prima e dopo della schiena di un allievo seguito nel percorso di coaching",
  },
  {
    id: "percorso-03",
    compositeImage: IMAGES.risultato03,
    alt: "Confronto prima e dopo di un'allieva seguita nel percorso di coaching",
  },
];
