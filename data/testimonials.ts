/**
 * TESTIMONIANZE
 *
 * ⚠️ NON inserire recensioni non reali. L'array parte volutamente vuoto.
 *
 * COME AGGIUNGERE UNA RECENSIONE
 * Aggiungi un oggetto all'array `TESTIMONIALS`. I campi opzionali
 * (foto, handle Instagram, categoria, durata) vengono mostrati solo se
 * valorizzati: se mancano, il layout resta pulito e non compaiono buchi.
 *
 * Esempio:
 * {
 *   name: "Marco R.",
 *   quote: "…testo reale della recensione…",
 *   result: "Prima trazione zavorrata +20 kg",
 *   image: "/immagini/recensioni/marco.jpg",
 *   instagram: "@marco",
 *   category: "Forza",
 *   duration: "6 mesi",
 * }
 *
 * Finché l'array è vuoto la sezione NON viene renderizzata in produzione.
 * In sviluppo (`npm run dev`) viene mostrata un'anteprima della struttura
 * per capire come apparirà una volta popolata.
 */

export type Testimonial = {
  name: string;
  quote: string;
  /** Risultato sintetico e verificabile (facoltativo). */
  result?: string;
  /** Percorso relativo dentro `public/`. */
  image?: string;
  instagram?: string;
  category?: string;
  duration?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Lucia Martini",
    quote:
      "Sono rimasta veramente tanto stupita, in positivo. Inizialmente quando ho sentito “Coach Online” ho pensato che fossi una delle tante… ma visto che ti aveva consigliato il mio nutrizionista Alessandro, ho voluto provare per un mese. Ho capito velocemente che invece eri una tosta e avresti potuto portarmi in alto dove volevo io. Molto più preparata rispetto ad altri coach che ho visto, molto scrupolosa sulla tecnica senza nessun minimo errore: questa è la base per poter crescere sportivamente e andare lontano. Sempre disponibile per qualsiasi dubbio e molto paziente, visto che molti errori sono radicati. Riuscire a spiegare bene nei dettagli la tecnica base per fare gli esercizi fatti bene e “farla recepire” non solo non è da tutti, ma questo fa capire quanto fai seriamente il tuo lavoro. Oltre tutto si percepisce che sei una splendida persona anche nella vita di tutti i giorni.",
  },
  {
    name: "Federico Gervasi",
    quote:
      "Mi sono trovato benissimo professionalmente da subito, altrimenti non continuerei a pagarti 😂",
  },
  {
    name: "Guerino Iandiorio",
    quote:
      "Mi alleno da quando avevo dodici anni e ora ne ho sessantatré. Le discipline che ho praticato sono body building, corsa e nuoto. Ho attraversato quindi tutte le fasi di trasformazione fisiche della vita di quello che può essere un atleta dilettante. Ho visto cambiare tecniche di allenamento, macchine e anche i luoghi fisici dell'allenamento: palestre private e pubbliche, campi di atletica e piscine. Questo cammino però non è mai stato accompagnato da risultati concreti o proporzionati agli sforzi che impiegavo nell'allenamento, o alle promesse vane di certi metodi o filosofie di allenamento. Più mi allenavo, meno progredivo, per quanti sforzi ed impegno ci mettessi. È a questo punto che ho potuto sperimentare la professionalità di Francesca. La prima cosa che mi ha insegnato è che quantità non corrisponde a qualità; che i risultati si ottengono con una azione graduata e protratta nel lungo periodo e, infine cosa più importante, che la perfezione nel gesto tecnico ti permette di raggiungere i risultati che ti prefiggi. Abbiamo fatto un lungo lavoro insieme e anche affrontato momenti di delusione, stanchezza e anche qualche piccolo infortunio. Mai è mancato il consiglio, l'aiuto, la spiegazione tecnica e anche qualche risata. Per questo sono contento di aver intrapreso questo cammino con una professionista seria e competente che non ti fa mai mancare il suo appoggio.",
  },
];
