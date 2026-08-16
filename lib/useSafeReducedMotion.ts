"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

const getSnapshot = () => window.matchMedia(QUERY).matches;

/** Sul server la preferenza non è conoscibile: si assume "movimento consentito". */
const getServerSnapshot = () => false;

/**
 * Preferenza `prefers-reduced-motion`, sicura in idratazione.
 *
 * I componenti che cambiano struttura in base a questo valore (testo animato
 * parola per parola, wrapper `motion` sostituiti da tag semplici) genererebbero
 * un mismatch se client e server rendessero alberi diversi.
 *
 * `useSyncExternalStore` risolve il problema alla radice: la prima
 * renderizzazione client usa lo stesso snapshot del server, poi React
 * ri-renderizza con il valore reale. Il valore resta inoltre reattivo se
 * l'impostazione di sistema cambia mentre la pagina è aperta.
 */
export function useSafeReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
