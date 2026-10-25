import { routes, site, type Lang } from "@/config/site";
import { getDict } from "@/content";
import { findPhoto } from "@/lib/photos";
import { homeJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import { StoreBadges } from "@/components/StoreBadges";
import { HeroVisual } from "@/components/HeroVisual";
import { VideoEmbed } from "@/components/VideoEmbed";
import { Reveal } from "@/components/Reveal";

function SectionHead({ id, title, lead, center }: { id: string; title: string; lead?: string; center?: boolean }) {
  return (
    <div className={`section-head reveal${center ? " is-center" : ""}`}>
      <h2 id={id}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function HomePage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const r = routes[lang];
  const other: Lang = lang === "ka" ? "en" : "ka";

  const heroPhoto = findPhoto("hero");
  const videoPoster = findPhoto("video");
  const showVideo = Boolean(site.youtubeId);

  return (
    <>
      <JsonLd data={homeJsonLd(lang)} />
      <Header nav={t.nav} home={r.home} otherHref={routes[other].home} otherLang={other} />

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="kicker">{t.hero.kicker}</p>
              <h1 id="hero-title">
                {t.hero.title} <span className="accent">{t.hero.titleAccent}</span>
              </h1>
              <p className="lead">{t.hero.lead}</p>
              <StoreBadges t={t.badges} include={["ios", "android", "windows"]} />
            </div>
            <HeroVisual photo={heroPhoto} photoAlt={t.hero.photoAlt} />
          </div>
        </section>

        {showVideo && (
          <section className="section section-video" aria-labelledby="video-title">
            <div className="wrap">
              <SectionHead id="video-title" title={t.video.title} lead={t.video.lead} center />
              <VideoEmbed youtubeId={site.youtubeId} poster={videoPoster} playLabel={t.video.play} title={t.video.title} />
            </div>
          </section>
        )}
      </main>

      <Footer lang={lang} />
      <Reveal />
    </>
  );
}
