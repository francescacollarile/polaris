/**
 * POLARIS — Configurazione centrale del sito.
 *
 * Tutti i dati anagrafici, fiscali e di contatto vivono qui.
 * NON inserire dati non confermati: usare `null` e i placeholder previsti.
 */

/**
 * Dominio pubblico del sito: usato per canonical, Open Graph, sitemap
 * e robots.txt.
 *
 * Quando arriverà il dominio definitivo basta cambiare `DOMINIO`, oppure
 * impostare `NEXT_PUBLIC_SITE_URL` fra le variabili d'ambiente: se è
 * presente ed è un URL valido ha la precedenza.
 *
 * Il valore viene validato: un indirizzo malformato non deve far fallire
 * la build, perché `metadataBase` costruisce un oggetto URL.
 */
const DOMINIO = "https://polaris-pt.vercel.app";

function originValido(valore: string | undefined): string | null {
  if (!valore) return null;
  try {
    return new URL(valore.trim()).origin;
  } catch {
    return null;
  }
}

export const SITE_URL =
  originValido(process.env.NEXT_PUBLIC_SITE_URL) ?? DOMINIO;

export const BRAND = {
  name: "Polaris",
  wordmark: "POLARIS",
  coach: "Francesca Collarile",
  role: "Coach — Forza, Ipertrofia e Calisthenics",
  claim: "Non una scheda. Un percorso.",
  concept:
    "Polaris è la stella che non si sposta. Un punto di riferimento mentre tutto il resto cambia.",
} as const;

export const CONTACTS = {
  email: "francescacollarile16@gmail.com",
  phoneDisplay: "+39 328 962 6347",
  phoneHref: "tel:+393289626347",
  whatsapp: "https://wa.me/393289626347",
  instagram: "https://www.instagram.com/_polaris_._/",
  instagramHandle: "@_polaris_._",
  calendly: "https://calendly.com/francescacollarile16/",
} as const;

export const ADDRESS = {
  street: "Via Sant'Antonio 67",
  postalCode: "20015",
  city: "Parabiago",
  province: "MI",
  region: "Lombardia",
  country: "Italia",
  countryCode: "IT",
  full: "Via Sant'Antonio 67, 20015 Parabiago (MI), Italia",
} as const;

/**
 * Dati fiscali.
 * I campi non forniti restano `null` e vengono resi con placeholder
 * chiaramente identificabili: non vanno inventati.
 */
export const LEGAL = {
  vat: "01852520624",
  taxCode: "CLLFNC00T53A783C",
  ateco: null as string | null,
  atecoPlaceholder: "[CODICE ATECO DA INSERIRE]",
  rea: null as string | null,
  reaPlaceholder: "[REA DA INSERIRE SE PRESENTE]",
} as const;

/** Sede in cui si svolgono le sessioni One To One. */
export const GYM = {
  name: "GPC Power Academy",
  city: "Caronno Pertusella",
} as const;

/** Collaborazione dichiarata. */
export const PARTNER = {
  name: "Heracles Nutrition",
  description: "Azienda italiana di integrazione.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Coaching", href: "#coaching" },
  { label: "Chi sono", href: "#chi-sono" },
  { label: "Risultati", href: "#risultati" },
  { label: "Testimonianze", href: "#testimonianze" },
  { label: "FAQ", href: "#faq" },
] as const;

/**
 * Ogni sezione della homepage viene ricondotta alla voce di menu
 * che la rappresenta: così l'evidenziazione durante lo scroll resta
 * corretta anche nelle sezioni che non hanno una voce dedicata.
 */
export const SECTION_TO_NAV: Record<string, string> = {
  home: "#home",
  coaching: "#coaching",
  "one-to-one": "#coaching",
  "chi-sono": "#chi-sono",
  risultati: "#risultati",
  testimonianze: "#testimonianze",
  faq: "#faq",
  contatti: "#faq",
};

export const CTA = {
  primary: { label: "Prenota la call gratuita", href: CONTACTS.calendly },
  coaching: { label: "Scopri il coaching", href: "#coaching" },
  talk: { label: "Parliamone in call", href: CONTACTS.calendly },
  start: { label: "Inizia il tuo percorso", href: CONTACTS.calendly },
  info: { label: "Richiedi informazioni", href: CONTACTS.whatsapp },
} as const;

export const SEO = {
  title: "Polaris | Francesca Collarile — Coaching Online, Forza e Ipertrofia",
  titleTemplate: "%s | Polaris — Francesca Collarile",
  description:
    "Coaching online e personal training One To One con Francesca Collarile. Programmazione personalizzata per forza, ipertrofia e calisthenics: analisi, strategia, osservazione e adattamento. Prenota la call conoscitiva gratuita.",
  keywords: [
    "coaching online",
    "personal trainer",
    "programmazione personalizzata",
    "allenamento forza",
    "ipertrofia",
    "calisthenics",
    "allenamento a corpo libero",
    "personal training Caronno Pertusella",
    "personal trainer Parabiago",
    "coaching online Milano",
  ],
} as const;

/**
 * Disclaimer usato nelle sezioni che toccano infortuni o problematiche
 * dichiarate dall'allievo. Non sostituisce il parere sanitario.
 */
export const HEALTH_DISCLAIMER =
  "Il coaching ha finalità di allenamento e non sostituisce in alcun modo la valutazione, la diagnosi o il trattamento di professionisti sanitari qualificati. La programmazione tiene conto delle informazioni fornite dalla persona e delle sue esigenze individuali.";
