import type { Metadata } from "next";

import { LegalShell } from "@/components/layout/LegalShell";
import { PRIVACY_POLICY } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali di Polaris — Francesca Collarile.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalShell doc={PRIVACY_POLICY} />;
}
