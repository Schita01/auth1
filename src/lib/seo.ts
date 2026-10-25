import type { Metadata, Viewport } from "next";
import { absoluteUrl, routes, site, type Lang, type PageKey } from "@/config/site";
import { getDict } from "@/content";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6efe6" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1f54" },
  ],
  colorScheme: "light",
};

export function pageMetadata(lang: Lang, page: PageKey): Metadata {
  const t = getDict(lang);
  const other: Lang = lang === "ka" ? "en" : "ka";
  const text = {
    home: { title: t.meta.homeTitle, description: t.meta.homeDescription },
    print: { title: `${t.meta.printTitle} | ${site.name}`, description: t.meta.printDescription },
    privacy: { title: `${t.meta.privacyTitle} | ${site.name}`, description: t.meta.privacyDescription },
    terms: { title: `${t.meta.termsTitle} | ${site.name}`, description: t.meta.termsDescription },
  }[page];
  const url = absoluteUrl(routes[lang][page]);

  return {
    metadataBase: new URL(site.url),
    title: text.title,
    description: text.description,
    keywords: page === "home" ? t.meta.keywords : undefined,
    applicationName: site.name,
    alternates: {
      canonical: url,
      languages: {
        ka: absoluteUrl(routes.ka[page]),
        en: absoluteUrl(routes.en[page]),
        "x-default": absoluteUrl(routes.ka[page]),
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      url,
      title: text.title,
      description: text.description,
      locale: t.ogLocale,
      alternateLocale: getDict(other).ogLocale,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: text.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: text.title,
      description: text.description,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true, "max-image-preview": "large" },
    icons: {
      icon: [
        { url: "/favicon-light.png", type: "image/png" },
        { url: "/favicon-light.png", type: "image/png", media: "(prefers-color-scheme: light)" },
        { url: "/favicon-dark.png", type: "image/png", media: "(prefers-color-scheme: dark)" },
        { url: "/icon-light.png", type: "image/png", media: "(prefers-color-scheme: light)" },
        { url: "/icon-dark.png", type: "image/png", media: "(prefers-color-scheme: dark)" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/manifest.webmanifest",
    formatDetection: { telephone: false },
  };
}

export function homeJsonLd(lang: Lang) {
  const t = getDict(lang);
  const home = absoluteUrl(routes[lang].home);
  const org = { "@type": "Organization", "@id": `${site.url}/#org`, name: site.name, url: site.url, logo: absoluteUrl("/icon-512.png"), email: site.email, sameAs: site.social };

  const app: Record<string, unknown> = {
    "@type": "SoftwareApplication",
    "@id": `${home}#app`,
    name: site.name,
    description: t.meta.homeDescription,
    applicationCategory: "CommunicationApplication",
    operatingSystem: "Android, Web",
    inLanguage: ["ka", "en"],
    url: home,
    image: absoluteUrl("/og.png"),
    publisher: { "@id": `${site.url}/#org` },
    audience: { "@type": "Audience", audienceType: lang === "ka" ? "აუტიზმის მქონე ადამიანები, ოჯახები, მასწავლებლები" : "Autistic people, families, teachers and therapists" },
    featureList: t.meta.appFeatures.join(", "),
  };
  if (site.price !== null) {
    app.offers = { "@type": "Offer", price: site.price, priceCurrency: "USD" };
  }

  const graph: Record<string, unknown>[] = [
    org,
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, inLanguage: lang, publisher: { "@id": `${site.url}/#org` } },
    app,
  ];

  if (site.youtubeId) {
    graph.push({
      "@type": "VideoObject",
      "@id": `${home}#video`,
      name: t.video.title,
      description: t.video.lead,
      thumbnailUrl: `https://i.ytimg.com/vi/${site.youtubeId}/hqdefault.jpg`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${site.youtubeId}`,
      inLanguage: lang,
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function breadcrumbJsonLd(lang: Lang, page: Exclude<PageKey, "home">) {
  const t = getDict(lang);
  const name = { print: t.print.title, privacy: t.privacy.title, terms: t.terms.title }[page];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: site.name, item: absoluteUrl(routes[lang].home) },
      { "@type": "ListItem", position: 2, name, item: absoluteUrl(routes[lang][page]) },
    ],
  };
}