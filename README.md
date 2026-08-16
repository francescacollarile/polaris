# POLARIS — Francesca Collarile

Sito ufficiale del brand **Polaris**: coaching online e personal training One To One
su forza, ipertrofia e calisthenics.

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion · Lucide.

---

## Avvio rapido

```bash
npm install
npm run dev        # http://localhost:3000
```

Altri comandi:

```bash
npm run build      # build di produzione
npm run start      # serve la build
npm run lint       # ESLint
npm run typecheck  # TypeScript senza emissione
```

---

## 1. Aggiungere le fotografie

Tutte le immagini del brand vivono in **`public/immagini/`** e sono referenziate da
un unico file: [`data/images.ts`](data/images.ts).

**Basta salvare i file con questi nomi esatti dentro `public/immagini/`.**
Nessuna modifica al codice.

| File                        | Dove appare                              | Formato consigliato |
| --------------------------- | ---------------------------------------- | ------------------- |
| `hero.jpg`                  | Hero, colonna destra                     | Verticale 3:4       |
| `francesca-02.jpg`          | «Chi sono», ritratto grande              | Verticale 4:5       |
| `francesca-03.jpg`          | «Chi sono», dettaglio sfalsato           | Quadrata 1:1        |
| `training-01.jpg`           | Coaching online                          | Verticale 4:5       |
| `academy.jpg`               | One To One — GPC Power Academy           | Verticale 5:6       |
| `risultato-01/02/03.jpg`    | Risultati (già presenti)                 | Prima+dopo affiancati |
| `logo.svg`                  | Logo completo, sostituisce la ricostruzione (facoltativo) | SVG/PNG trasparente |

Indicazioni tecniche: lato lungo 2000–2400px, peso sotto i 500 KB.
Next.js genera automaticamente AVIF/WebP e le varianti responsive.

### Cosa succede se un file manca

Compare un **placeholder curato** con il nome esatto del file da inserire —
nessuna immagine rotta, nessun 404, nessun errore in console.
Il controllo avviene lato server in [`lib/imageManifest.ts`](lib/imageManifest.ts).

> Dopo aver aggiunto una foto: riavvia `npm run dev` oppure rilancia `npm run build`.
> Il manifest viene calcolato all'avvio, non a ogni richiesta.

### Logo

Il logo fornito (`logo-originale.jpg`) è un JPG di 415×90 px a fondo bianco: non
utilizzabile su fondo nero e troppo piccolo per essere ingrandito.

La stella è stata quindi **isolata e vettorializzata** in
`public/immagini/logo-stella.svg`, mantenendo la forma inclinata e la "P"
intarsiata (che nel tracciato è un foro, quindi lascia passare il fondo scuro).
Il wordmark è ricostruito con il font del sito su due righe — POLARIS sopra,
TEAM sotto — come nel marchio originale.

Se in futuro avrai il logo completo a fondo trasparente, salvalo come
`public/immagini/logo.svg`: viene usato al posto della ricostruzione, senza
toccare il codice.

---

## 2. Aggiungere le recensioni

File: [`data/testimonials.ts`](data/testimonials.ts).

L'array parte **volutamente vuoto**: nessuna recensione è stata inventata.

- Con array vuoto → la sezione **non compare in produzione**.
  In `npm run dev` vedi un'anteprima della struttura, per capire come apparirà.
- Appena aggiungi il primo oggetto → compare il carosello, con frecce, swipe e
  supporto da tastiera.

```ts
{
  name: "Marco R.",
  quote: "…testo reale della recensione…",
  result: "Prima trazione zavorrata +20 kg", // facoltativo
  image: "/immagini/recensioni/marco.jpg",   // facoltativo
  instagram: "@marco",                        // facoltativo
  category: "Forza",                          // facoltativo
  duration: "6 mesi",                         // facoltativo
}
```

I campi facoltativi vengono mostrati **solo se valorizzati**: se mancano, il
layout resta pulito.

---

## 3. Aggiungere i risultati

File: [`data/results.ts`](data/results.ts).

Le tre immagini reali sono già collegate. `title`, `description`, `duration` e
`metrics` sono predisposti ma **volutamente vuoti**: compilali solo con dati
verificati, vengono renderizzati solo se presenti.

Per nascondere l'intera sezione: `SHOW_RESULTS = false`.

---

## 4. Aggiungere i prezzi

File: [`data/programs.ts`](data/programs.ts).

I prezzi non sono stati forniti e non sono stati inventati. Ogni percorso ha:

```ts
price: null,                                                  // → mostra priceNote
priceNote: "Definito insieme in call, in base a durata e obiettivo",
```

Valorizza `price` (es. `"290 €"`) e il sito lo mostra al posto della nota.

---

## 5. Dati mancanti da completare

| Dato               | Dove                                        | Stato                        |
| ------------------ | ------------------------------------------- | ---------------------------- |
| Codice ATECO       | `data/site.ts` → `LEGAL.ateco`              | `[CODICE ATECO DA INSERIRE]` |
| REA                | `data/site.ts` → `LEGAL.rea`                | `[REA DA INSERIRE SE PRESENTE]` |
| Dominio            | `.env.local` → `NEXT_PUBLIC_SITE_URL`       | da impostare prima del deploy |
| Privacy Policy     | `app/privacy/page.tsx`                      | struttura pronta, testo da fornire |
| Cookie Policy      | `app/cookie/page.tsx`                       | struttura pronta, testo da fornire |
| Termini e condizioni | `app/termini/page.tsx`                    | struttura pronta, testo da fornire |

Nessun testo legale è stato generato automaticamente: va redatto o validato da un
professionista prima della pubblicazione.

### Dominio

```bash
cp .env.example .env.local
# NEXT_PUBLIC_SITE_URL=https://iltuodominio.it
```

Serve per canonical, Open Graph, `sitemap.xml` e `robots.txt`.

---

## 6. Struttura del progetto

```
app/
  layout.tsx            fonts, metadata, JSON-LD, navbar/footer, CTA mobile
  page.tsx              composizione della homepage
  globals.css           token di design, base, utility di brand
  opengraph-image.tsx   card social generata a build time
  icon.svg              favicon
  sitemap.ts robots.ts  SEO tecnica
  privacy/ cookie/ termini/
components/
  layout/               Navbar, Footer, MobileCTABar, ScrollProgress, LegalShell
  media/                BrandImage (+ manifest immagini)
  sections/             le 16 sezioni della homepage
  seo/                  dati strutturati
  ui/                   Button, Reveal, Section, StarMark, OrbitField, …
data/                   TUTTI i contenuti modificabili
lib/                    utility, varianti di movimento, manifest immagini
public/immagini/        fotografie del brand
```

**Regola pratica:** per cambiare un testo, un dato o un contatto si tocca solo
`data/`. I componenti non contengono dati anagrafici hard-coded.

---

## 7. Ordine delle sezioni

Hero → Trust → Il metodo (i 6 step) → Coaching Online → One To One →
Chi sono → Risultati → Testimonianze → Percorsi → FAQ → CTA finale → Footer.

L'ordine segue il funnel: impatto → posizionamento → problema → metodo →
servizio → autorevolezza → prova → offerta → dubbi → call.

Per riordinare, sposta i componenti in [`app/page.tsx`](app/page.tsx).

---

## 8. Accessibilità e movimento

- HTML semantico, un solo `<h1>`, gerarchia dei titoli rispettata.
- Navigazione da tastiera completa, focus ring oro sempre visibile, skip link.
- Accordion FAQ con `aria-expanded` / `aria-controls`, menu mobile con `Esc` e
  blocco dello scroll.
- Contrasto testo verificato ≥ 4.5:1 sui fondi neri.
- **`prefers-reduced-motion`**: parallasse, reveal, cursore e animazioni
  ambientali vengono disattivati; i contenuti restano tutti visibili.
- Il cursore personalizzato non nasconde mai quello di sistema ed è attivo solo
  con puntatore fine.

---

## 9. Note sui contenuti

Il sito non contiene numeri, recensioni, qualifiche o risultati inventati.
Gli unici dati usati sono quelli forniti: 3+ anni di esperienza, ~2 anni di
coaching online, qualifica FIPE di I livello, Nerd Training Academy, Barbell
Rehab Course, 3° posto Calisthenics Endurance Alessandria 2024 (Avanzato
Femminile), collaborazione con Heracles Nutrition, durate 6 settimane / 3 mesi /
6 mesi.

I testi in prima persona nella sezione «Chi sono» sono una **proposta di copy**
costruita sui fatti forniti: vanno riletti e approvati da Francesca prima della
pubblicazione.

Nessuna affermazione di natura sanitaria: dove si parla di infortuni o
problematiche viene sempre richiamato il disclaimer in
`data/site.ts` → `HEALTH_DISCLAIMER`.

---

## 10. Deploy

Il sito è interamente statico (tutte le route sono prerenderizzate).

1. Imposta `NEXT_PUBLIC_SITE_URL` tra le variabili d'ambiente.
2. `npm run build`
3. Pubblica su Vercel (consigliato) o su qualsiasi host che supporti Next.js 16.
