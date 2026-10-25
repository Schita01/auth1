import Link from "next/link";
import { routes, site, type Lang } from "@/config/site";
import { getDict } from "@/content";
import { LogoMark } from "./Logo";

export function Footer({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const r = routes[lang];
  const other = lang === "ka" ? "en" : "ka";
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="logo" href={r.home}>
              <LogoMark />
              <span>{site.name}</span>
            </Link>
            <p>{t.footer.tagline}</p>
          </div>
          <nav aria-label={t.footer.legal}>
            <h3>{t.footer.legal}</h3>
            <ul>
              <li><Link href={r.privacy}>{t.footer.privacy}</Link></li>
              <li><Link href={r.terms}>{t.footer.terms}</Link></li>
              <li><a href={routes[other].home} hrefLang={other} lang={other}>{t.nav.otherLang}</a></li>
            </ul>
          </nav>
        </div>

        <p className="footer-bottom">
          © {year} {site.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
