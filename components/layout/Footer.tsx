import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { InstagramIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { StarMark } from "@/components/ui/StarMark";
import { BRAND, CONTACTS, GYM, LEGAL, PARTNER } from "@/data/site";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookie" },
  { label: "Termini e condizioni", href: "/termini" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-hairline bg-ink-950">
      <div
        aria-hidden="true"
        className="halo-violet pointer-events-none absolute -left-40 top-0 h-[420px] w-[620px] opacity-30"
      />
      <div aria-hidden="true" className="fine-grid absolute inset-0 opacity-40" />

      <div className="shell relative pt-20 pb-8 sm:pt-24 sm:pb-9">
        <div className="grid gap-x-10 gap-y-14 lg:grid-cols-[0.85fr_1fr_1.1fr_0.95fr]">
          {/* Marchio */}
          <div>
            <Logo />
          </div>

          {/* Contatti */}
          <div className="space-y-5">
            <h2 className="eyebrow text-gold-400/90">Contatti</h2>
            <ul className="space-y-3.5 text-sm text-fog">
              <li>
                <a
                  href={`mailto:${CONTACTS.email}`}
                  className="group flex items-start gap-2.5 transition-colors duration-300 hover:text-cream"
                >
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-colors duration-300 group-hover:text-gold-400"
                    aria-hidden="true"
                  />
                  <span className="break-all">{CONTACTS.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACTS.phoneHref}
                  className="group flex items-start gap-2.5 transition-colors duration-300 hover:text-cream"
                >
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-colors duration-300 group-hover:text-gold-400"
                    aria-hidden="true"
                  />
                  {CONTACTS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACTS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2.5 transition-colors duration-300 hover:text-cream"
                >
                  <InstagramIcon className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-colors duration-300 group-hover:text-gold-400" />
                  {CONTACTS.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          {/* Dove / con chi */}
          <div className="space-y-5">
            <h2 className="eyebrow text-gold-400/90">Dove e con chi</h2>
            <ul className="space-y-4 text-sm text-fog">
              <li>
                <p className="flex items-center gap-2 font-semibold text-cream">
                  <StarMark className="h-2.5 w-2.5 text-gold-400" />
                  {GYM.name}
                </p>
                <p className="mt-1 text-ash">
                  {GYM.city} — sessioni One To One
                </p>
              </li>
              <li>
                <p className="flex items-center gap-2 font-semibold text-cream">
                  <StarMark className="h-2.5 w-2.5 text-gold-400" />
                  {PARTNER.name}
                </p>
                <p className="mt-1 text-ash">{PARTNER.description}</p>
              </li>
            </ul>
          </div>

          {/* Dati legali */}
          <div className="space-y-5">
            <h2 className="eyebrow text-gold-400/90">Dati legali</h2>
            <dl className="space-y-3.5 text-sm">
              <div>
                <dt className="text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                  P. IVA
                </dt>
                <dd className="tabular mt-1 text-fog">{LEGAL.vat}</dd>
              </div>
              <div>
                <dt className="text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                  Codice fiscale
                </dt>
                <dd className="tabular mt-1 text-fog">{LEGAL.taxCode}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-hairline pt-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {BRAND.wordmark} — {BRAND.coach}. Tutti i diritti riservati.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-300 hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
