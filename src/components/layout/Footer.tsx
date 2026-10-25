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
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <Link className="logo" href={r.home}>
            <LogoMark />
            <span>Khidi</span>
          </Link>
          <p>{t.footer.tagline}</p>
        </div>
        <p className="footer-bottom">
          © {year} {site.name}. {t.footer.rights}{" "}
          <a href={routes[other].home} hrefLang={other} lang={other}>{t.nav.otherLang}</a>
        </p>
      </div>
    </footer>
  );
}
