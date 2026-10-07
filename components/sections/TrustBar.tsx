import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { StarMark } from "@/components/ui/StarMark";
import { cn } from "@/lib/utils";

/** Solo elementi reali e verificabili. */
const ITEMS = [
  { value: "4+ anni", label: "Di esperienza nel settore" },
  { value: "Laurea in Scienze Motorie", label: "In conseguimento" },
  {
    value: "Nerd Training Academy",
    label: "Formazione sulla programmazione dell'allenamento",
  },
  {
    value: "Barbell Rehab Course",
    label: "Certificazione americana sulle metodologie di recupero dagli infortuni",
  },
  { value: "FIPE", label: "Qualifica Tecnica Federale I livello" },
];

export function TrustBar() {
  return (
    <section
      aria-label="Elementi distintivi"
      className="relative isolate border-y border-hairline bg-ink-900/60"
    >
      <div aria-hidden="true" className="fine-grid absolute inset-0 opacity-40" />

      <RevealGroup
        className="shell relative grid grid-cols-1 divide-y divide-[var(--color-hairline)] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5"
        stagger={0.09}
      >
        {ITEMS.map((item, index) => (
          <RevealItem
            key={item.value}
            /* Filetti calcolati dalla posizione, non dall'indice esatto:
               su due colonne la voce dispari va a destra e dalla seconda
               riga in giù c'è il filetto sopra; su una riga sola (lg) resta
               solo quello a sinistra. Un'ultima voce rimasta sola occupa
               tutta la riga. */
            className={cn(
              "flex items-start gap-3.5 border-[var(--color-hairline)] py-7 sm:py-9 lg:border-t-0 lg:pr-6",
              index % 2 === 1 && "sm:border-l sm:pl-8",
              index >= 2 && "sm:border-t",
              index > 0 && "lg:border-l lg:pl-6",
              index === ITEMS.length - 1 &&
                index % 2 === 0 &&
                "sm:col-span-2 lg:col-span-1",
            )}
          >
            <StarMark className="mt-1 h-3 w-3 shrink-0 text-gold-400" />
            <div>
              <p className="text-sm font-bold uppercase leading-snug tracking-[0.06em] text-cream">
                {item.value}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                {item.label}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
