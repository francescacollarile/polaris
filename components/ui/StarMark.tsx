import { cn } from "@/lib/utils";

/**
 * Stella a quattro punte: il segno grafico ricorrente di Polaris.
 * Puramente decorativa — sempre `aria-hidden`.
 */
export function StarMark({
  className,
  strokeOnly = false,
}: {
  className?: string;
  strokeOnly?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("h-4 w-4", className)}
    >
      <path
        d="M12 0.8c.55 5.6 5.6 10.65 11.2 11.2-5.6.55-10.65 5.6-11.2 11.2-.55-5.6-5.6-10.65-11.2-11.2C6.4 11.45 11.45 6.4 12 .8Z"
        fill={strokeOnly ? "none" : "currentColor"}
        stroke={strokeOnly ? "currentColor" : "none"}
        strokeWidth={strokeOnly ? 1.1 : 0}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Stella a cinque punte del marchio, coerente con il logo fornito.
 */
export function PolarisStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("h-6 w-6", className)}
    >
      <path
        d="M24 2.5 30.4 17.1 46 18.6 34.3 29.1 37.7 44.4 24 36.4 10.3 44.4 13.7 29.1 2 18.6l15.6-1.5L24 2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
