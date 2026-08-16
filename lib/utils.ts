type ClassValue = string | false | null | undefined;

/** Concatena classi CSS ignorando i valori falsy. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/** True se il link punta fuori dal sito. */
export function isExternal(href: string): boolean {
  return /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}
