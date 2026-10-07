import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { InstagramIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { BRAND, CONTACTS, LEGAL } from "@/data/site";

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
        className="halo-violet pointer-events-none absolute -left-40 top-0 h-[300px] w-[620px] opacity-30"
      />
      <div aria-hidden="true" className="fine-grid absolute inset-0 opacity-40" />

      <div className="shell relative pt-12 pb-7 sm:pt-14 sm:pb-8">
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {/* Marchio */}
          <div>
            <Logo />
          </div>

          {/* Contatti */}
          <div className="space-y-4">
            <h2 className="eyebrow text-gold-400/90">Contatti</h2>
            <ul className="space-y-2.5 text-sm text-fog">
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
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-hairline pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          {/* I dati fiscali stanno qui, su una riga: obbligatori, ma non
              meritano una colonna intera. */}
          <div className="space-y-1.5">
            <p>
              © {year} {BRAND.wordmark} — {BRAND.coach}. Tutti i diritti riservati.
            </p>
            <p className="tabular">
              P. IVA {LEGAL.vat} · C.F. {LEGAL.taxCode}
            </p>
          </div>
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
