import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Eyebrow } from "@/components/ui/SectionHeading";
import { StarMark } from "@/components/ui/StarMark";
import { LEGAL_UPDATED, type LegalDoc } from "@/data/legal";
import { ADDRESS, BRAND, CONTACTS, LEGAL } from "@/data/site";

/**
 * Impaginazione dei documenti legali.
 *
 * I blocchi `open` — decisioni ancora da prendere o verifiche da fare —
 * vengono resi con un riquadro evidenziato, così restano visibili durante
 * la revisione e impossibili da pubblicare per distrazione.
 */
export function LegalShell({ doc }: { doc: LegalDoc }) {
  return (
    <div className="relative isolate overflow-hidden pb-28 pt-36 sm:pt-44">
      <div aria-hidden="true" className="fine-grid absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="halo-violet pointer-events-none absolute -right-1/4 top-0 h-[60vh] w-[60vh] opacity-25"
      />

      <div className="shell-narrow relative">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-cream"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Torna alla home
        </Link>

        <div className="mt-12">
          <Eyebrow>Area legale</Eyebrow>
          <h1 className="mt-6 font-sans text-[clamp(2.2rem,6vw,4rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-cream">
            {doc.title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-ash">
            {doc.intro}
          </p>
          <p className="mt-6 text-[0.7rem] uppercase tracking-[0.2em] text-muted">
            Ultimo aggiornamento: {LEGAL_UPDATED}
          </p>
        </div>

        <div className="rule-gold my-12" />

        <div className="space-y-12">
          {doc.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold uppercase tracking-[0.06em] text-cream sm:text-xl">
                {section.title}
              </h2>

              <div className="mt-5 space-y-5">
                {section.blocks.map((block, index) => {
                  if (block.type === "paragraph") {
                    return (
                      <p
                        key={index}
                        className="text-[0.95rem] leading-relaxed text-ash"
                      >
                        {block.text}
                      </p>
                    );
                  }

                  if (block.type === "list") {
                    return (
                      <ul key={index} className="space-y-2.5">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-[0.95rem] leading-relaxed text-ash"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[0.7em] h-px w-3 shrink-0 bg-gold-600/70"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  if (block.type === "definitions") {
                    return (
                      <dl key={index} className="space-y-4">
                        {block.items.map((item) => (
                          <div
                            key={item.term}
                            className="border-l border-hairline pl-5"
                          >
                            <dt className="text-sm font-semibold text-cream">
                              {item.term}
                            </dt>
                            <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-ash">
                              {item.text}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    );
                  }

                  return (
                    <div
                      key={index}
                      className="rounded-lg border border-dashed border-violet-400/40 bg-violet-500/[0.05] p-6"
                    >
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
                        {block.title}
                      </p>
                      <p className="mt-3 text-[0.92rem] leading-relaxed text-fog">
                        {block.text}
                      </p>
                      {block.items && (
                        <ul className="mt-4 space-y-2">
                          {block.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-[0.88rem] leading-relaxed text-ash"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[0.7em] h-px w-3 shrink-0 bg-violet-400/60"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Titolare del trattamento — solo dati confermati */}
        <div className="mt-16 rounded-lg border border-hairline bg-surface-900/50 p-7">
          <h2 className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.14em] text-cream">
            <StarMark className="h-3 w-3 text-gold-400" />
            Titolare e contatti
          </h2>
          <div className="mt-5 space-y-1.5 text-sm leading-relaxed text-ash">
            <p className="text-cream">
              {BRAND.coach} — {BRAND.wordmark}
            </p>
            <p>{ADDRESS.full}</p>
            <p>P. IVA {LEGAL.vat}</p>
            <p>Codice fiscale {LEGAL.taxCode}</p>
            <p>
              <a
                href={`mailto:${CONTACTS.email}`}
                className="text-fog underline decoration-gold-600/40 underline-offset-4 transition-colors duration-300 hover:text-cream"
              >
                {CONTACTS.email}
              </a>{" "}
              ·{" "}
              <a
                href={CONTACTS.phoneHref}
                className="text-fog underline decoration-gold-600/40 underline-offset-4 transition-colors duration-300 hover:text-cream"
              >
                {CONTACTS.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
