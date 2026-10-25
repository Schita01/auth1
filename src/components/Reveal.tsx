"use client";

import { useEffect } from "react";

/** Adds `is-in` to every `.reveal` / `.reveal-stagger` element as it scrolls into view. */
export function Reveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger"));
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.05 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
