import { cn } from "@/lib/utils";

/** Posizioni fisse: nessun random, così server e client coincidono. */
const STARS = [
  { x: 12, y: 18, r: 1.1, delay: "0s" },
  { x: 26, y: 62, r: 0.8, delay: "1.4s" },
  { x: 41, y: 9, r: 0.9, delay: "2.6s" },
  { x: 58, y: 34, r: 1.3, delay: "0.7s" },
  { x: 68, y: 78, r: 0.85, delay: "3.1s" },
  { x: 81, y: 22, r: 1, delay: "1.9s" },
  { x: 90, y: 55, r: 0.75, delay: "2.2s" },
  { x: 34, y: 88, r: 1, delay: "3.6s" },
  { x: 7, y: 44, r: 0.7, delay: "0.4s" },
  { x: 74, y: 6, r: 0.65, delay: "4.2s" },
];

/**
 * Campo stellare + orbite: la firma visiva di Polaris.
 * Decorativo, lentissimo, mai invadente.
 */
export function OrbitField({
  className,
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "stars" | "orbits";
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {variant !== "stars" && (
        <div className="absolute left-1/2 top-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2 sm:w-[110%]">
          <svg
            viewBox="0 0 800 800"
            className="animate-orbit-slow h-full w-full text-white/[0.05]"
          >
            <ellipse
              cx="400"
              cy="400"
              rx="380"
              ry="238"
              stroke="currentColor"
              fill="none"
            />
            <ellipse
              cx="400"
              cy="400"
              rx="268"
              ry="356"
              stroke="currentColor"
              fill="none"
            />
          </svg>
          <svg
            viewBox="0 0 800 800"
            className="animate-orbit-slower absolute inset-0 h-full w-full text-gold-400/[0.09]"
          >
            <circle cx="400" cy="400" r="316" stroke="currentColor" fill="none" />
            <circle cx="716" cy="400" r="3" fill="currentColor" />
          </svg>
        </div>
      )}

      {variant !== "orbits" &&
        STARS.map((s, i) => (
          <span
            key={i}
            className="animate-twinkle absolute rounded-full bg-gold-200"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.r * 2}px`,
              height: `${s.r * 2}px`,
              animationDelay: s.delay,
              boxShadow: "0 0 6px rgba(246,231,189,0.75)",
            }}
          />
        ))}
    </div>
  );
}
