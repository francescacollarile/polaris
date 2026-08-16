import { ImageResponse } from "next/og";

import { BRAND } from "@/data/site";

export const alt = "Polaris — Francesca Collarile · Coaching Online, Forza e Ipertrofia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Card social generata a build time: nessun asset esterno da mantenere. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0B0910 0%, #050505 55%, #120E1C 100%)",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Alone viola */}
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -160,
            width: 720,
            height: 720,
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(143,92,255,0.34), rgba(143,92,255,0))",
            display: "flex",
          }}
        />

        {/* Riga superiore */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width="34" height="34" viewBox="0 0 24 24">
            <path
              d="M12 0.8c.55 5.6 5.6 10.65 11.2 11.2-5.6.55-10.65 5.6-11.2 11.2-.55-5.6-5.6-10.65-11.2-11.2C6.4 11.45 11.45 6.4 12 .8Z"
              fill="#E4C47A"
            />
          </svg>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 14,
              color: "#F5F2F7",
              fontWeight: 800,
              display: "flex",
            }}
          >
            {BRAND.wordmark}
          </div>
        </div>

        {/* Titolo */}
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              fontSize: 104,
              lineHeight: 0.94,
              letterSpacing: -3,
              fontWeight: 800,
              color: "#F5F2F7",
              textTransform: "uppercase",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Forza. Estetica.</span>
            <span style={{ color: "#E4C47A" }}>Controllo.</span>
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#AAA3B2",
              maxWidth: 900,
              lineHeight: 1.35,
              display: "flex",
            }}
          >
            Programmazione personalizzata per forza, ipertrofia e calisthenics.
          </div>
        </div>

        {/* Riga inferiore */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 30,
          }}
        >
          <div
            style={{
              fontSize: 24,
              letterSpacing: 5,
              color: "#D8D3DD",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            {BRAND.coach}
          </div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 4,
              color: "#77717F",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Coaching online · One To One
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
