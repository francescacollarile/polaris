/**
 * Percorsi di coaching.
 *
 * PREZZI: non sono stati forniti e NON vanno inventati.
 * Il campo `price` è predisposto: quando ci saranno i prezzi definitivi,
 * basta valorizzarlo (es. `price: "290 €"`) e il sito lo mostra da solo.
 */

export type Program = {
  id: string;
  name: string;
  kicker: string;
  description: string;
  features: string[];
  feedback: string;
  featured: boolean;
  /** null = prezzo non pubblicato: viene mostrata la nota `priceNote`. */
  price: string | null;
  priceNote: string;
};

export const PROGRAMS: Program[] = [
  {
    id: "full",
    name: "Full Coaching",
    kicker: "Percorso completo",
    description:
      "Il percorso seguito dall'inizio alla fine, con osservazione e adattamento continui. Pensato per chi vuole costruire un risultato solido e non lasciare niente al caso.",
    features: [
      "Programmazione personalizzata",
      "Video esecutivi degli esercizi",
      "Audio esplicativi delle scelte",
      "Feedback tramite video per tutta la durata del percorso",
      "Monitoraggio continuo",
      "Adattamento della programmazione nel tempo",
    ],
    feedback: "Feedback video per tutta la durata del percorso",
    featured: true,
    price: null,
    priceNote: "Definito insieme in call, in base a durata e obiettivo",
  },
  {
    id: "ridotto",
    name: "Coaching Ridotto",
    kicker: "Impostazione guidata",
    description:
      "La stessa qualità di programmazione e spiegazione, con una finestra di correzione tecnica concentrata all'avvio. Per chi ha già autonomia e vuole soprattutto una struttura corretta.",
    features: [
      "Programmazione personalizzata",
      "Video esecutivi degli esercizi",
      "Audio esplicativi delle scelte",
      "Feedback tramite video durante una settimana",
      "Indicazioni e correzioni iniziali",
    ],
    feedback: "Feedback video concentrato su una settimana",
    featured: false,
    price: null,
    priceNote: "Definito insieme in call, in base a durata e obiettivo",
  },
];

/**
 * Le durate disponibili (6 settimane, 3 mesi, 6 mesi) non hanno più una
 * sezione dedicata: sono spiegate nella FAQ «Quanto dura il percorso?»
 * e vengono definite in call.
 */
