import type { Metadata } from "next";

import { LegalShell } from "@/components/layout/LegalShell";
import { COOKIE_POLICY } from "@/data/legal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Informativa sull'uso dei cookie del sito Polaris — Francesca Collarile.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/cookie" },
};

export default function CookiePage() {
  return <LegalShell doc={COOKIE_POLICY} />;
}
