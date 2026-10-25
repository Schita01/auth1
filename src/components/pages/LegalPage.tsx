import Link from "next/link";
import { routes, site, type Lang } from "@/config/site";
import { getDict } from "@/content";
import { showPlaceholders } from "@/lib/photos";
import { breadcrumbJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";

type LegalKey = "privacy" | "terms";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s)]+)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (/^https?:\/\//.test(part)) {
          return (
            <a key={i} href={part} rel="noopener noreferrer">
              {part.replace(/^https?:\/\//, "")}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function LegalPage({ lang, page }: { lang: Lang; page: LegalKey }) {
  const t = getDict(lang);
  const r = routes[lang];
  const other: Lang = lang === "ka" ? "en" : "ka";
  const p = t[page];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(lang, page)} />
      <Header nav={t.nav} badges={t.badges} home={r.home} otherHref={routes[other][page]} otherLang={other} />
      <main id="main" className="section page">
        <article className="wrap narrow prose">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href={r.home}>{site.name}</Link> <span aria-hidden="true">/</span> <span>{p.title}</span>
          </nav>
          <h1>{p.title}</h1>
          <p className="muted">{p.updated}</p>
          {showPlaceholders && <p className="draft-note">{p.draft}</p>}
          {p.intro.map((para) => (
            <p key={para}>
              <RichText text={para} />
            </p>
          ))}
          {p.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((para) => (
                <p key={para}>
                  <RichText text={para} />
                </p>
              ))}
              {"ul" in s && s.ul && (
                <ul>
                  {s.ul.map((item) => (
                    <li key={item}>
                      <RichText text={item} />
                    </li>
                  ))}
                </ul>
              )}
              {"after" in s &&
                s.after?.map((para) => (
                  <p key={para}>
                    <RichText text={para} />
                  </p>
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
