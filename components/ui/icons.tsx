import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Icone social disegnate a mano: lucide-react non include più i marchi.
 * Stesso tratto (1.6) delle icone lucide usate nel sito, così restano coerenti.
 */
export function InstagramIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.4" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.6" cy="6.4" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsappIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M3.2 20.8l1.3-4.5A8.4 8.4 0 1 1 7.9 19.4l-4.7 1.4Z" />
      <path
        d="M9.1 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.7 1.7c.1.3 0 .5-.1.7l-.4.5c-.1.2-.2.3 0 .6a6.7 6.7 0 0 0 2.8 2.4c.3.1.4 0 .6-.1l.5-.6c.2-.2.4-.2.6-.1l1.6.8c.3.2.4.3.4.5v.6c-.1.4-.5.9-1 1.1-.4.2-1 .3-2 0a10.4 10.4 0 0 1-5.7-5.1c-.4-1-.3-1.7-.1-2.2.1-.3.2-.5.3-.8Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}
