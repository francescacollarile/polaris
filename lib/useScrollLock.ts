"use client";

import { useEffect } from "react";

/**
 * Blocca lo scroll della pagina finché `active` è vero.
 *
 * `overflow: hidden` sul body da solo non basta su Safari iOS: il dito
 * continua a trascinare la pagina sotto la modale. Qui il body viene
 * fissato alla posizione corrente e, alla chiusura, si torna esattamente
 * al punto di partenza (senza lo smooth scroll globale, che farebbe
 * scorrere la pagina a vista).
 */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;

    const { body, documentElement: html } = document;
    const scrollY = window.scrollY;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    };

    // Su desktop compensa la barra di scorrimento che sparisce.
    const scrollbar = window.innerWidth - html.clientWidth;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    return () => {
      Object.assign(body.style, previous);
      window.scrollTo({ top: scrollY, behavior: "instant" });
    };
  }, [active]);
}
