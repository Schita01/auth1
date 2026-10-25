import Link from "next/link";
import type { Dict } from "@/content";
import { site } from "@/config/site";
import { Icon } from "@/components/Icon";
import { DownloadButton } from "@/components/DownloadButton";
import { LogoMark } from "./Logo";

type Props = { nav: Dict["nav"]; badges: Dict["badges"]; home: string; otherHref: string; otherLang: string };

export function Header({ nav, badges, home, otherHref, otherLang }: Props) {
  return (
    <header className="site-header">
      <a className="skip" href="#main">
        {nav.skip}
      </a>
      <div className="wrap header-inner">
        <Link className="logo" href={home} aria-label={site.name}>
          <LogoMark />
          <span>{site.name}</span>
        </Link>

        <div className="header-actions">
          <a className="pill lang-switch" href={otherHref} hrefLang={otherLang} lang={otherLang} aria-label={nav.otherLangLabel}>
            <Icon name="globe" size={18} />
            <span>{nav.otherLang}</span>
          </a>
          <DownloadButton nav={nav} badges={badges} />
        </div>
      </div>
    </header>
  );
}
