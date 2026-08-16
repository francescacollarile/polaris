import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { StarMark } from "@/components/ui/StarMark";

/** Solo elementi reali e verificabili. */
const ITEMS = [
  { value: "3+ anni", label: "di esperienza nel settore" },
  {
    value: "Nerd Training Academy",
    label: "Formazione sulla programmazione dell'allenamento",
  },
  {
    value: "Barbell Rehab Course",
    label: "Formazione sulla gestione del bilanciere e del movimento",
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
        className="shell relative grid grid-cols-1 divide-y divide-[var(--color-hairline)] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4"
        stagger={0.09}
      >
        {ITEMS.map((item, index) => (
          <RevealItem
            key={item.value}
            className={[
              "flex items-start gap-3.5 py-7 sm:py-9",
              index > 0 ? "lg:border-l lg:border-[var(--color-hairline)] lg:pl-8" : "",
              index === 1 ? "sm:border-l sm:border-[var(--color-hairline)] sm:pl-8" : "",
              index === 2 ? "sm:border-t sm:border-[var(--color-hairline)] lg:border-t-0" : "",
              index === 3
                ? "sm:border-l sm:border-t sm:border-[var(--color-hairline)] sm:pl-8 lg:border-t-0"
                : "",
              index === 0 ? "lg:pr-8" : "",
            ].join(" ")}
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
