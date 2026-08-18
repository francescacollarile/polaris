export type ProcessStep = {
  index: string;
  title: string;
  summary: string;
  points: string[];
  note?: string;
};

/** Come funziona concretamente il percorso, dal primo contatto in poi. */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    title: "Call conoscitiva",
    summary:
      "Il percorso parte da una chiamata gratuita. Serve a capirsi, non a vendere.",
    points: [
      "Ci parliamo: storia, obiettivi, contesto",
      "Valutiamo insieme un percorso adatto alle tue necessità",
      "In questa fase si parla apertamente",
    ],
  },
  {
    index: "02",
    title: "Analisi",
    summary:
      "Prima di scrivere qualsiasi cosa, raccolgo le informazioni che contano davvero.",
    points: [
      "Obiettivi e desideri",
      "Conformazione corporea ed esperienza di allenamento",
      "Eventuali infortuni passati e problematiche dichiarate",
      "Caratteristiche individuali, necessità e contesto di allenamento",
    ],
  },
  {
    index: "03",
    title: "Programmazione",
    summary:
      "Con quei dati costruisco la programmazione. Non esiste una scheda universale.",
    points: [
      "Struttura costruita sulla persona e sul risultato ricercato",
      "Scelta degli esercizi in funzione di obiettivo e struttura",
      "Gestione di volume, intensità, frequenza e progressioni",
    ],
  },
  {
    index: "04",
    title: "Spiegazione",
    summary:
      "Non ricevi solo un programma: ricevi il motivo per cui è fatto così.",
    points: [
      "Video esecutivi degli esercizi",
      "Audio in cui ti spiego il perché di ogni scelta fatta",
      "I dettagli a cui prestare attenzione durante l'allenamento",
    ],
  },
  {
    index: "05",
    title: "Feedback",
    summary:
      "Mi mandi i video dei tuoi allenamenti e io guardo come ti muovi davvero.",
    points: [
      "Full Coaching: invio video per tutta la durata del percorso",
      "Coaching Ridotto: invio video durante una settimana",
      "Correzioni tecniche puntuali su quello che vedo",
    ],
  },
  {
    index: "06",
    title: "Adattamento",
    summary:
      "La programmazione si muove insieme a te: osservare, valutare, adattare, progredire.",
    points: [
      "Le variabili vengono regolate nel tempo",
      "Le scelte seguono i dati e i feedback reali",
      "Il percorso resta coerente con l'obiettivo mentre cambi",
    ],
  },
];
