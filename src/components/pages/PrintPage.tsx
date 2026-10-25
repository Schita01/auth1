import Link from "next/link";
import { routes, site, type Lang } from "@/config/site";
import { getDict } from "@/content";
import { ALL_WORDS } from "@/content/words";
import { breadcrumbJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PrintButton } from "@/components/PrintButton";

export function PrintPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const r = routes[lang];
  const other: Lang = lang === "ka" ? "en" : "ka";

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(lang, "print")} />
      <Header nav={t.nav} badges={t.badges} home={r.home} otherHref={routes[other].print} otherLang={other} />
      <main id="main" className="section page">
        <div className="wrap">
          <nav className="crumbs no-print" aria-label="Breadcrumb">
            <Link href={r.home}>{site.name}</Link> <span aria-hidden="true">/</span> <span>{t.print.title}</span>
          </nav>
          <div className="page-head no-print">
            <h1>{t.print.title}</h1>
            <p className="lead">{t.print.lead}</p>
            <div className="actions">
              <PrintButton label={t.print.printButton} />
              <Link className="button button-secondary" href={r.home}>
                {t.print.back}
              </Link>
            </div>
          </div>

          <section className="print-sheet" aria-label={t.print.boardTitle}>
            <p className="print-sheet-title">{t.print.boardTitle}</p>
            <div className="print-grid">
              {ALL_WORDS.map((w) => (
                <div key={w.id} className="tile tile-static" data-tone={w.tone}>
                  <Icon name={w.icon} size={40} />
                  <span>{t.words[w.id]}</span>
                </div>
              ))}
            </div>
          </section>

          <ul className="print-tips no-print">
            {t.print.tips.map((tip) => (
              <li key={tip}>
                <Icon name="check" size={18} strokeWidth={2.4} />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <div className="no-print">
        <Footer lang={lang} />
      </div>
    </>
  );
}
