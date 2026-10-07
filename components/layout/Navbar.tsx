"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { StarMark } from "@/components/ui/StarMark";
import { RESULTS, SHOW_RESULTS } from "@/data/results";
import { CTA, NAV_LINKS, SECTION_TO_NAV } from "@/data/site";
import { TESTIMONIALS } from "@/data/testimonials";
import { EASE_POLARIS } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useSafeReducedMotion } from "@/lib/useSafeReducedMotion";

/**
 * Le sezioni Risultati e Testimonianze compaiono solo quando hanno contenuti:
 * senza questo filtro la voce di menu punterebbe, in produzione, a una
 * sezione che non viene renderizzata.
 */
const hasResults = SHOW_RESULTS && RESULTS.length > 0;
const hasTestimonials =
  TESTIMONIALS.length > 0 || process.env.NODE_ENV === "development";

const VISIBLE_NAV_LINKS = NAV_LINKS.filter((link) => {
  if (link.href === "#risultati") return hasResults;
  if (link.href === "#testimonianze") return hasTestimonials;
  return true;
});

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const reduced = useSafeReducedMotion();

  /* Fuori dalla homepage le ancore devono puntare a `/#sezione`,
     altrimenti dalle pagine legali e dalla 404 non porterebbero da nessuna parte. */
  const pathname = usePathname();
  const isHome = pathname === "/";
  const linkHref = (hash: string) => (isHome ? hash : `/${hash}`);

  const [active, setActive] = useState<string>(isHome ? "#home" : "");

  /* Stato "scrolled": la navbar passa da trasparente a vetro scuro. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Evidenzia la voce di menu corrispondente alla sezione visibile. */
  useEffect(() => {
    const sections = Object.keys(SECTION_TO_NAV)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const target = SECTION_TO_NAV[visible?.target.id ?? ""];
        if (target) setActive(target);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Menu mobile: blocco dello scroll + chiusura con Esc. */
  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "border-b border-hairline bg-ink-950/72 backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_0_0_rgba(255,255,255,0.03)]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Navigazione principale"
          className="shell flex h-[68px] items-center justify-between gap-6 sm:h-[76px]"
        >
          <a
            href={isHome ? "#home" : "/"}
            className="rounded-sm py-2 transition-opacity duration-300 hover:opacity-80"
            aria-label="Polaris — torna all'inizio"
          >
            <Logo size="sm" />
          </a>

          {/* Desktop — sotto i 1280px passa al menu a tendina: sette voci
              non entrano senza comprimere la CTA */}
          <ul className="hidden items-center gap-0.5 xl:flex">
            {VISIBLE_NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={linkHref(link.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "group relative flex items-center rounded-full px-3 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-400",
                      isActive ? "text-cream" : "text-ash hover:text-cream",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "mr-2 h-1 w-1 rounded-full bg-gold-400 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-60",
                      )}
                    />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            {/* Il wrapper gestisce la visibilità: evita conflitti di display
                con le classi base del bottone. */}
            <span className="hidden sm:inline-flex">
              <Button
                href={CTA.primary.href}
                size="sm"
                icon={<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
              >
                Prenota la call
              </Button>
            </span>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Chiudi il menu" : "Apri il menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-cream transition-colors duration-400 hover:border-violet-400/45 hover:bg-white/[0.03] xl:hidden"
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Menu mobile a tutto schermo */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            role="dialog"
            aria-modal="true"
            aria-label="Menu di navigazione"
            initial={reduced ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE_POLARIS }}
            className="fixed inset-0 z-40 flex flex-col bg-ink-950/98 backdrop-blur-2xl xl:hidden"
          >
            <div
              aria-hidden="true"
              className="halo-violet pointer-events-none absolute -right-1/3 top-0 h-[70vh] w-[110vw] opacity-40"
            />

            <div className="shell relative flex flex-1 flex-col justify-center overflow-y-auto pb-16 pt-24">
              <ul className="flex flex-col">
                {VISIBLE_NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={reduced ? false : { opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: reduced ? 0 : 0.12 + index * 0.07,
                      ease: EASE_POLARIS,
                    }}
                    className="border-b border-hairline"
                  >
                    <a
                      href={linkHref(link.href)}
                      onClick={close}
                      className="group flex items-center justify-between py-4 text-2xl font-extrabold uppercase tracking-[-0.01em] text-cream transition-colors duration-300 hover:text-gold-300 sm:py-5 sm:text-3xl"
                    >
                      {link.label}
                      <StarMark className="h-3.5 w-3.5 text-gold-400/50 transition-transform duration-500 group-hover:scale-125 group-hover:text-gold-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
