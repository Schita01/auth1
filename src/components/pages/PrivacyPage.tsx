import Link from "next/link";
import { routes, site, type Lang } from "@/config/site";
import { getDict } from "@/content";
import { showPlaceholders } from "@/lib/photos";
import { breadcrumbJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";

export function PrivacyPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const r = routes[lang];
  const other: Lang = lang === "ka" ? "en" : "ka";
  const p = t.privacy;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(lang, "privacy")} />
      <Header nav={t.nav} home={r.home} otherHref={routes[other].privacy} otherLang={other} />
      <main id="main" className="section page">
        <article className="wrap narrow prose">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href={r.home}>{site.name}</Link> <span aria-hidden="true">/</span> <span>{p.title}</span>
          </nav>
          <h1>{p.title}</h1>
          <p className="muted">{p.updated}</p>
          {showPlaceholders && <p className="draft-note">{p.draft}</p>}
          {p.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </section>
          ))}
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </article>
      </main>
      <Footer lang={lang} />
    </>
  );
}
