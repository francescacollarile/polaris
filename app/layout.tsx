import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { ImageManifestProvider } from "@/components/media/ImageManifestProvider";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { StructuredData } from "@/components/seo/StructuredData";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { BRAND, SEO, SITE_URL } from "@/data/site";
import { buildImageManifest } from "@/lib/imageManifest";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO.title,
    template: SEO.titleTemplate,
  },
  description: SEO.description,
  keywords: [...SEO.keywords],
  applicationName: BRAND.wordmark,
  authors: [{ name: BRAND.coach }],
  creator: BRAND.coach,
  publisher: BRAND.coach,
  category: "fitness",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE_URL,
    siteName: `${BRAND.wordmark} — ${BRAND.coach}`,
    title: SEO.title,
    description: SEO.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: true, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const imageManifest = buildImageManifest();

  return (
    <html
      lang="it"
      // Lo scroll morbido resta sulle ancore interne, ma non sui cambi di rotta.
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink-950 text-cream">
        <StructuredData />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-300 focus:px-5 focus:py-3 focus:text-[0.72rem] focus:font-semibold focus:uppercase focus:tracking-[0.16em] focus:text-ink-950"
        >
          Vai al contenuto
        </a>

        <ImageManifestProvider manifest={imageManifest}>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <MobileCTABar />
        </ImageManifestProvider>
      </body>
    </html>
  );
}
