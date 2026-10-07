import { CoachingSplit, type CoachingPoint } from "./CoachingSplit";

const DELIVERABLES: CoachingPoint[] = [
  {
    title: "Programmazione personalizzata",
    body: "Costruita sui dati raccolti, non adattata da un modello esistente.",
  },
  {
    title: "Video esecutivi",
    body: "Ogni esercizio con la sua esecuzione, per non lasciare spazio ai dubbi.",
  },
  {
    title: "Audio esplicativi",
    body: "Il perché delle scelte fatte e i dettagli da tenere sotto controllo.",
  },
  {
    title: "Osservazione",
    body: "I tuoi video di allenamento analizzati per capire come ti muovi davvero.",
  },
  {
    title: "Adattamento",
    body: "Le variabili vengono regolate sulla base di quello che il corpo restituisce.",
  },
];

export function OnlineCoaching() {
  return (
    <CoachingSplit
      id="coaching"
      eyebrow="Coaching online"
      title={
        <>
          Non una scheda.
          <br />
          <span className="text-gold-gradient">Un percorso.</span>
        </>
      }
      intro={
        <>
          Prima di scrivere una sola serie analizzo obiettivi, esperienza,
          disponibilità reale ed eventuali problematiche. Da qui nasce la
          programmazione: due persone con lo stesso obiettivo possono ricevere
          due programmi completamente diversi.
        </>
      }
      points={DELIVERABLES}
    />
  );
}
