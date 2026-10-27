"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function keepsScroll(anchor: HTMLAnchorElement) {
  if (anchor.target === "_blank" || anchor.hasAttribute("download")) return true;
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#")) return true;
  try {
    const url = new URL(anchor.href, window.location.href);
    if (url.origin !== window.location.origin) return true;
    return url.pathname === window.location.pathname && url.hash.length > 0;
  } catch {
    return true;
  }
}

export function ScrollToTop() {
  const pathname = usePathname();
  const popped = useRef(false);

  useEffect(() => {
    const onPop = () => {
      popped.current = true;
    };
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor || keepsScroll(anchor)) return;
      document.documentElement.dataset.scroll = "auto";
    };
    window.addEventListener("popstate", onPop);
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("popstate", onPop);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (popped.current) {
      popped.current = false;
      delete html.dataset.scroll;
      return;
    }

    const snap = () => {
      if (!window.location.hash) window.scrollTo(0, 0);
    };
    snap();
    const frame = requestAnimationFrame(() => {
      snap();
      delete html.dataset.scroll;
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
