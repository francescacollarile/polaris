import type { Metadata } from "next";

import { LegalShell } from "@/components/layout/LegalShell";
import { TERMS } from "@/data/legal";

export const metadata: Metadata = {
  title: "Termini e condizioni",
  description:
    "Termini e condizioni dei servizi di coaching di Polaris — Francesca Collarile.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/termini" },
};

export default function TerminiPage() {
  return <LegalShell doc={TERMS} />;
}
