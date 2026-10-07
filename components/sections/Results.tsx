import { BrandImage } from "@/components/media/BrandImage";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RESULTS, SHOW_RESULTS, type ResultCase } from "@/data/results";
import { cn } from "@/lib/utils";

export function Results() {
  if (!SHOW_RESULTS || RESULTS.length === 0) return null;

  return (
    <Section id="risultati" labelledBy="risultati-title" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="halo-violet pointer-events-none absolute -right-1/4 top-1/3 h-[70vh] w-[70vh] opacity-25"
      />

      <div className="shell relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <SectionHeading
            id="risultati-title"
            eyebrow="Risultati"
            title={
              <>
                Il tempo,
                <br />
                <span className="text-gold-gradient">reso visibile.</span>
              </>
            }
            lead="Persone reali, percorsi reali. Non trasformazioni in trenta giorni: mesi di lavoro programmato, corretto e ripetuto."
            className="max-w-3xl"
          />
        </div>

        <RevealGroup
          /* items-start: solo la card con la citazione e piu alta, le altre
     si fermano sotto la foto invece di restare con un vuoto in fondo. */
          className="mt-16 grid items-start gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          stagger={0.12}
        >
          {RESULTS.map((item) => (
            <RevealItem key={item.id} as="figure">
              <ResultCard result={item} />
            </RevealItem>
          ))}
        </RevealGroup>

      </div>
    </Section>
  );
}

function ResultCard({ result }: { result: ResultCase }) {
  const isComposite = Boolean(result.compositeImage);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-hairline bg-surface-900/60 transition-[border-color,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-violet-400/30">
      <div className="relative aspect-[4/5] w-full bg-[linear-gradient(160deg,var(--color-surface-800),var(--color-ink-950))]">
        {isComposite ? (
          <>
            {/* Riempimento sfocato: le foto hanno proporzioni diverse fra loro
                e il riquadro resta comunque pieno, senza ritagliare il
                confronto prima/dopo. Stesso `sizes` dell'immagine principale,
                così il browser riusa lo stesso file. */}
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
              <BrandImage
                src={result.compositeImage as string}
                alt=""
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="h-full w-full scale-125 bg-transparent opacity-30 blur-2xl"
              />
            </div>
            <BrandImage
              src={result.compositeImage as string}
              alt={result.alt}
              placeholderLabel="Confronto prima e dopo"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              contain
              className="absolute inset-0 h-full w-full bg-transparent"
            />
          </>
        ) : (
          <div className="absolute inset-0 grid grid-cols-2 gap-px">
            <BrandImage
              src={result.beforeImage ?? ""}
              alt={`${result.alt} — prima`}
              placeholderLabel="Prima"
              sizes="(max-width: 1024px) 50vw, 17vw"
              className="h-full w-full"
            />
            <BrandImage
              src={result.afterImage ?? ""}
              alt={`${result.alt} — dopo`}
              placeholderLabel="Dopo"
              sizes="(max-width: 1024px) 50vw, 17vw"
              className="h-full w-full"
            />
          </div>
        )}

        {/* Etichette prima / dopo: saltate se l'immagine le contiene gia */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-4",
            result.labelsInImage && "hidden",
          )}
        >
          <span className="rounded-full border border-hairline-strong bg-ink-950/70 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-ash backdrop-blur-sm">
            Prima
          </span>
          <span className="rounded-full border border-gold-600/40 bg-ink-950/70 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-gold-200 backdrop-blur-sm">
            Dopo
          </span>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(5,5,5,0.55),transparent_38%)]"
        />
      </div>

      {/* I testi compaiono solo se presenti nei dati */}
      {(result.title || result.description || result.quote || result.duration ||
        (result.metrics && result.metrics.length > 0)) && (
        <figcaption className="flex flex-col p-6">
          {(result.title || result.duration) && (
            <div className="flex items-baseline justify-between gap-4">
              {result.title && (
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-cream">
                  {result.title}
                </h3>
              )}
              {result.duration && (
                <span className="text-[0.66rem] uppercase tracking-[0.14em] text-muted">
                  {result.duration}
                </span>
              )}
            </div>
          )}

          {result.quote && (
            <blockquote>
              <p className="font-display text-lg font-light italic leading-snug text-cream">
                «{result.quote}»
              </p>
            </blockquote>
          )}

          {result.description && (
            <p className="mt-3 text-sm leading-relaxed text-ash">
              {result.description}
            </p>
          )}

          {result.metrics && result.metrics.length > 0 && (
            <ul className="mt-5 grid grid-cols-2 gap-3 border-t border-hairline pt-5">
              {result.metrics.map((metric) => (
                <li key={metric.label}>
                  <p className="tabular text-lg font-extrabold text-gold-300">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-[0.66rem] uppercase tracking-[0.14em] text-muted">
                    {metric.label}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </figcaption>
      )}
    </div>
  );
}
