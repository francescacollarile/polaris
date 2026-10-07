import {
  ADDRESS,
  BRAND,
  CONTACTS,
  GYM,
  LEGAL,
  SEO,
  SITE_URL,
} from "@/data/site";
import { FAQ_ITEMS } from "@/data/faq";

/**
 * Dati strutturati.
 * Solo informazioni realmente fornite: nessun campo inventato,
 * nessuna aggregateRating, nessuna recensione.
 */
export function StructuredData() {
  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#francesca`,
    name: BRAND.coach,
    jobTitle: "Coach — Forza, Ipertrofia e Calisthenics",
    url: SITE_URL,
    sameAs: [CONTACTS.instagram],
    email: CONTACTS.email,
    telephone: CONTACTS.phoneDisplay,
    worksFor: { "@id": `${SITE_URL}/#polaris` },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Qualifica Tecnica Federale — Primo Livello",
        recognizedBy: {
          "@type": "Organization",
          name: "FIPE — Federazione Italiana Pesistica",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Formazione tecnica",
        recognizedBy: { "@type": "Organization", name: "Nerd Training Academy" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Certificazione",
        recognizedBy: { "@type": "Organization", name: "Barbell Rehab Course" },
      },
    ],
  };

  const service = {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${SITE_URL}/#polaris`,
    name: `${BRAND.wordmark} — ${BRAND.coach}`,
    description: SEO.description,
    url: SITE_URL,
    email: CONTACTS.email,
    telephone: CONTACTS.phoneDisplay,
    vatID: LEGAL.vat,
    taxID: LEGAL.taxCode,
    founder: { "@id": `${SITE_URL}/#francesca` },
    sameAs: [CONTACTS.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      postalCode: ADDRESS.postalCode,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.province,
      addressCountry: ADDRESS.countryCode,
    },
    areaServed: [
      { "@type": "Place", name: "Italia" },
      { "@type": "Place", name: `${GYM.city}, Varese` },
      { "@type": "Place", name: `${ADDRESS.city}, Milano` },
    ],
    knowsAbout: [
      "Allenamento della forza",
      "Ipertrofia",
      "Calisthenics",
      "Programmazione dell'allenamento",
      "Personal training",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servizi Polaris",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Coaching Online",
            description:
              "Programmazione personalizzata, video esecutivi, audio esplicativi, feedback sui video degli allenamenti, monitoraggio e adattamento continui.",
            serviceType: "Coaching online",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "One To One",
            description: `Sessioni individuali di personal training presso ${GYM.name}, ${GYM.city}.`,
            serviceType: "Personal training",
          },
        },
      ],
    },
  };

  const faq = {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${BRAND.wordmark} — ${BRAND.coach}`,
    inLanguage: "it-IT",
    publisher: { "@id": `${SITE_URL}/#polaris` },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [website, service, person, faq],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
