/**
 * POLARIS — Mappa centralizzata delle immagini.
 *
 * COME AGGIUNGERE LE FOTO REALI
 * 1. Salva i file dentro `public/immagini/` con ESATTAMENTE i nomi qui sotto.
 * 2. Riavvia il dev server (o rilancia la build): il sito le mostra da solo.
 *
 * Finché un file non esiste, al suo posto viene mostrato un placeholder
 * elegante con il nome del file da inserire. Nessuna immagine rotta,
 * nessun errore in console, nessuna modifica al codice necessaria.
 *
 * Formato consigliato: JPG/WEBP, lato lungo 2000–2400px, < 500KB.
 */

export const IMAGES = {
  /**
   * Logo completo su fondo trasparente. Se presente sostituisce
   * marchio + wordmark ricostruiti. Non obbligatorio.
   */
  logo: "/immagini/logo.svg",
  /** Stella del marchio, vettorializzata dal logo originale fornito. */
  logoStar: "/immagini/logo-stella.svg",
  /** Logo originale fornito (fondo bianco) — conservato come riferimento. */
  logoOriginale: "/immagini/logo-originale.jpg",

  /** Hero — ritratto verticale di Francesca, spazio negativo a sinistra. */
  hero: "/immagini/hero.jpg",

  /** «Chi sono» — ritratto grande e coppia di dettagli sfalsati. */
  francesca02: "/immagini/francesca-02.jpg",
  francesca03: "/immagini/francesca-03.jpg",
  /** Premiazione: 3° posto Calisthenics Endurance, Alessandria 2024. */
  medaglia: "/immagini/medaglia.jpg",

  /** Coaching online. */
  training01: "/immagini/training-01.jpg",

  /** One To One — GPC Power Academy. */
  academy: "/immagini/academy.jpg",

  /** Risultati reali. Ogni file contiene prima+dopo affiancati. */
  fotomia: "/immagini/fotomia.jpg",
  risultato01: "/immagini/risultato-01.jpg",
  risultato02: "/immagini/risultato-02.jpg",
  risultato03: "/immagini/risultato-03.jpg",
} as const;

export type ImageKey = keyof typeof IMAGES;

/** Elenco piatto usato per costruire il manifest lato server. */
export const IMAGE_PATHS: string[] = Object.values(IMAGES);
