import { ArrowUpRight, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { InstagramIcon, WhatsappIcon } from "@/components/ui/icons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { OrbitField } from "@/components/ui/OrbitField";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { StarMark } from "@/components/ui/StarMark";
import { CONTACTS, CTA } from "@/data/site";

const CHANNELS = [
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    value: "Messaggio diretto",
    href: CONTACTS.whatsapp,
    external: true,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: CONTACTS.instagramHandle,
    href: CONTACTS.instagram,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACTS.email,
    href: `mailto:${CONTACTS.email}`,
    external: false,
  },
  {
    icon: Phone,
    label: "Telefono",
    value: CONTACTS.phoneDisplay,
    href: CONTACTS.phoneHref,
    external: false,
  },
];

export function FinalCTA() {
  return (
    <section
      id="contatti"
      aria-labelledby="contatti-title"
      className="relative isolate overflow-hidden border-t border-hairline py-28 sm:py-36 lg:py-44"
    >
      {/* Fondo */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="fine-grid absolute inset-0 opacity-50" />
        <div className="halo-violet animate-drift absolute left-1/2 top-1/2 h-[110vh] w-[110vh] -translate-x-1/2 -translate-y-1/2 opacity-45" />
        <OrbitField variant="full" className="opacity-80" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="shell relative text-center">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-2.5 text-gold-400/90">
            <StarMark className="h-2.5 w-2.5" />
            Il primo passo
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            id="contatti-title"
            className="mx-auto mt-8 max-w-5xl font-sans text-[clamp(2.6rem,8.5vw,6.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.035em] text-cream"
          >
            Inizia il tuo
            <br />
            <span className="text-gold-gradient">percorso.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-9 max-w-2xl text-base leading-relaxed text-ash sm:text-lg">
            Una chiamata conoscitiva gratuita, senza impegno. Ci parliamo, capisco
            da dove parti e valutiamo insieme se questo percorso è adatto a te.
            Se non lo è, te lo dico.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <MagneticButton className="w-full sm:w-auto" strength={0.22}>
              <Button
                href={CTA.primary.href}
                size="lg"
                className="w-full sm:w-auto"
                icon={<ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
              >
                Prenota la call gratuita
              </Button>
            </MagneticButton>

            <Button
              href={CONTACTS.whatsapp}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              icon={<WhatsappIcon className="h-4 w-4" />}
            >
              Scrivimi su WhatsApp
            </Button>
          </div>
        </Reveal>

        {/* Canali di contatto */}
        <RevealGroup
          className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-lg border border-hairline bg-[var(--color-hairline)] sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <RevealItem key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full flex-col items-center gap-3 bg-ink-950/90 px-5 py-7 transition-colors duration-700 hover:bg-surface-900"
                >
                  <Icon
                    className="h-5 w-5 text-gold-400 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted">
                    {channel.label}
                  </span>
                  <span className="break-all text-[0.82rem] text-fog transition-colors duration-500 group-hover:text-cream">
                    {channel.value}
                  </span>
                </a>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
