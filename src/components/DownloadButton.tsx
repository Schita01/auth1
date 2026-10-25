"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Dict } from "@/content";
import { site } from "@/config/site";
import { Icon } from "@/components/Icon";
import { StoreBadge } from "@/components/StoreBadges";

export function DownloadButton({ nav, badges }: { nav: Dict["nav"]; badges: Dict["badges"] }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button ref={triggerRef} className="button button-small header-cta" type="button" onClick={() => setOpen(true)}>
        {nav.cta}
      </button>

      {open &&
        createPortal(
          <div className="download-overlay" onClick={() => setOpen(false)}>
            <div
              className="download-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="download-dialog-head">
                <h2 id={titleId}>{nav.downloadTitle}</h2>
                <button ref={closeRef} className="round-btn" type="button" onClick={() => setOpen(false)} aria-label={nav.close}>
                  <Icon name="close" size={18} />
                </button>
              </div>
              <div className="download-choices">
                <div className="download-choice">
                  <StoreBadge id="ios" t={badges} />
                  <p className="download-soon">{nav.notYet}</p>
                </div>
                <StoreBadge id="android" t={badges} href={site.stores.android} />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
