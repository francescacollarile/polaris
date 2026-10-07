export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Cosa ricevo dopo aver iniziato?",
    answer:
      "La programmazione personalizzata, i video esecutivi degli esercizi, gli audio esplicativi con il perché delle scelte fatte e le indicazioni sui dettagli da tenere in considerazione durante l'allenamento. Poi si entra nel ciclo di feedback: mi mandi i video dei tuoi allenamenti e la programmazione viene adattata.",
  },
  {
    question: "Quanto dura il percorso? Posso scegliere?",
    answer:
      "Puoi scegliere tra 6 settimane, 3 mesi e 6 mesi. La durata giusta dipende dall'obiettivo: alcune cose si impostano in sei settimane, altre hanno bisogno di mesi per stratificarsi. Ne parliamo in call.",
  },
  {
    question: "Posso iniziare se ho avuto un infortunio?",
    answer:
      "Il coaching è un servizio di allenamento e non sostituisce la valutazione di professionisti sanitari qualificati: se hai un infortunio in corso o una problematica specifica, il primo passo è sempre il parere del tuo medico o fisioterapista. Detto questo, la programmazione tiene conto delle informazioni che mi fornisci e delle tue esigenze individuali, e viene costruita nel rispetto delle indicazioni che hai ricevuto.",
  },
  {
    question: "Con te posso fare anche la dieta?",
    answer:
      "Non direttamente. Lavoro come Coach in uno studio dotato di nutrizionista, osteopata e psicologa sportiva, che sono a nostra disposizione per qualsiasi tua necessità.",
  },
];
