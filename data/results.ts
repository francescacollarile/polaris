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
  /** Parole in prima persona: rese come citazione, non come descrizione. */
  quote?: string;
  duration?: string;
  metrics?: ResultMetric[];
  /**
   * L'immagine contiene già le diciture prima/dopo: il sito evita di
   * sovrapporre le proprie etichette.
   */
  labelsInImage?: boolean;
};

/** Imposta a `false` per nascondere completamente la sezione. */
export const SHOW_RESULTS = true;

export const RESULTS: ResultCase[] = [
  {
    id: "francesca",
    compositeImage: IMAGES.fotomia,
    alt: "Confronto prima e dopo del percorso personale di Francesca Collarile",
    quote:
      "Il mio prima e dopo è stato un percorso duro: ho imparato cosa significa doversi ri-costruire, tornare sana e proseguire il percorso verso una me migliore.",
    labelsInImage: true,
  },
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
