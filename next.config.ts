import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  images: {
    // Formati moderni: peso ridotto senza perdita percepibile sulle foto.
    formats: ["image/avif", "image/webp"],
    // Next 16 richiede di dichiarare i livelli di qualità usati:
    // 75 = default, 82 = foto di sezione, 88 = hero.
    qualities: [75, 82, 88],
    deviceSizes: [360, 420, 640, 768, 1024, 1280, 1536, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // I percorsi delle immagini portano una firma del contenuto (?v=...)
    // per invalidare la cache quando un file viene sostituito.
    localPatterns: [{ pathname: "/immagini/**" }],
    // In sviluppo l'ottimizzatore deve rigenerare subito: sostituendo una
    // foto in `public/immagini/` il sito la mostra al primo ricaricamento.
    minimumCacheTTL: isDev ? 0 : 31536000,
  },
  poweredByHeader: false,
  async headers() {
    // La cache lunga vale solo in produzione. In sviluppo terrebbe in vita
    // la vecchia versione di un'immagine anche dopo averla sostituita,
    // perché l'ottimizzatore si fida di questo header.
    if (isDev) return [];

    return [
      {
        source: "/immagini/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
