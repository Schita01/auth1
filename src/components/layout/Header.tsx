import Link from "next/link";
import type { Dict } from "@/content";
import { site } from "@/config/site";
import { Icon } from "@/components/Icon";
import { LogoMark } from "./Logo";

type Props = { nav: Dict["nav"]; home: string; otherHref: string; otherLang: string };

export function Header({ nav, home, otherHref, otherLang }: Props) {
  return (
    <header className="site-header">
      <a className="skip" href="#main">
        {nav.skip}
      </a>
      <div className="wrap header-inner">
        <Link className="logo" href={home} aria-label="Khidi">
          <LogoMark />
          <span>Khidi</span>
        </Link>

        <div className="header-actions">
          <a className="pill lang-switch" href={otherHref} hrefLang={otherLang} lang={otherLang} aria-label={nav.otherLangLabel}>
            <Icon name="globe" size={18} />
            <span>{nav.otherLang}</span>
          </a>
          <a
            className="button button-small header-cta"
            href={site.stores.android}
            target="_blank"
            rel="noopener noreferrer"
          >
            {nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
