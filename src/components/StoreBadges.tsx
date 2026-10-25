import type { Dict } from "@/content";
import { site } from "@/config/site";

type StoreId = "web" | "ios" | "android" | "windows" | "amazon";

function Mark({ id }: { id: StoreId }) {
  switch (id) {
    case "web":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
        </svg>
      );
    case "ios":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="currentColor">
          <path d="M16.4 12.6c0-2.4 2-3.5 2-3.6-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2-1.1 2.8-2.3.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.6zM14.2 5.4c.6-.8 1.1-1.9 1-3-.9 0-2.1.6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2.1-.5 2.7-1.3z" />
        </svg>
      );
    case "android":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
          <path fill="#34A853" d="M4 3.5v17l9-8.5z" />
          <path fill="#FBBC04" d="M17 8.3 13 12l4 3.7 3.4-1.9c1-.6 1-2 0-2.6z" />
          <path fill="#EA4335" d="M4 20.5 13 12l4 3.7-11.1 6.1c-.7.4-1.4.2-1.9-.3z" />
          <path fill="#4285F4" d="M4 3.5c.5-.5 1.2-.7 1.9-.3L17 8.3 13 12z" />
        </svg>
      );
    case "windows":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="currentColor">
          <path d="M3 5.5 10.5 4.5v7H3zM11.5 4.3 21 3v8.5h-9.5zM3 12.5h7.5v7L3 18.5zM11.5 12.5H21V21l-9.5-1.3z" />
        </svg>
      );
    case "amazon":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M4 15c4.5 3 11.5 3 16 0" />
          <path d="M17 14.5l3 .5-.6 3" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      );
  }
}

const LIVE_STORES: StoreId[] = ["web", "android"];

export function StoreBadge({ id, t, href }: { id: StoreId; t: Dict["badges"]; href?: string }) {
  const [small, big] = t[id];
  const soon = !LIVE_STORES.includes(id);
  const label = soon ? `${small} ${big}. ${t.comingSoon}` : `${small} ${big}`;
  const inner = (
    <>
      <Mark id={id} />
      <span>
        <small>{small}</small>
        <strong>{big}</strong>
      </span>
      {soon && <em className="store-soon-tip">{t.comingSoon}</em>}
    </>
  );

  if (soon) {
    return (
      <button type="button" className={`store-badge store-${id} is-soon`} aria-label={label} aria-disabled="true">
        {inner}
      </button>
    );
  }

  const url = href ?? (id === "web" ? "/print/" : site.stores[id]);
  const external = id !== "web";
  return (
    <a
      className={`store-badge store-${id}`}
      href={url}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={label}
    >
      {inner}
    </a>
  );
}

export function StoreBadges({ t, webHref, include = ["web", "ios", "android", "windows"] }: { t: Dict["badges"]; webHref?: string; include?: StoreId[] }) {
  return (
    <div className="badge-row">
      {include.map((id) => (
        <StoreBadge key={id} id={id} t={t} href={id === "web" ? webHref : undefined} />
      ))}
    </div>
  );
}

export type { StoreId };
