import type { Metadata, Viewport } from "next";
import { absoluteUrl, routes, site, type Lang } from "@/config/site";
import { getDict } from "@/content";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export function homeMetadata(lang: Lang): Metadata {
  const t = getDict(lang);
  const other: Lang = lang === "ka" ? "en" : "ka";
  const url = absoluteUrl(routes[lang].home);

  return {
    metadataBase: new URL(site.url),
    title: t.meta.homeTitle,
    description: t.meta.homeDescription,
    keywords: t.meta.keywords,
    applicationName: site.name,
    alternates: {
      canonical: url,
      languages: {
        ka: absoluteUrl(routes.ka.home),
        en: absoluteUrl(routes.en.home),
        "x-default": absoluteUrl(routes.ka.home),
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      url,
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
      locale: t.ogLocale,
      alternateLocale: getDict(other).ogLocale,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: t.meta.homeTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true, "max-image-preview": "large" },
    icons: {
      icon: [
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
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
  const org = {
    "@type": "Organization",
    "@id": `${site.url}/#org`,
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/icon-512.png"),
    email: site.email,
    sameAs: site.social,
  };

  const app: Record<string, unknown> = {
    "@type": "SoftwareApplication",
    "@id": `${home}#app`,
    name: site.name,
    description: t.meta.homeDescription,
    applicationCategory: "CommunicationApplication",
    operatingSystem: "iOS, iPadOS, Android, Windows",
    inLanguage: ["ka", "en"],
    url: home,
    image: absoluteUrl("/og.png"),
    publisher: { "@id": `${site.url}/#org` },
    audience: {
      "@type": "Audience",
      audienceType:
        lang === "ka"
          ? "აუტიზმის მქონე ადამიანები, ოჯახები, მასწავლებლები"
          : "Autistic people, families, teachers and therapists",
    },
    featureList: t.meta.features.join(", "),
  };
  if (site.price !== null) {
    app.offers = { "@type": "Offer", price: site.price, priceCurrency: "USD" };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      org,
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: ["ka", "en"],
        publisher: { "@id": `${site.url}/#org` },
      },
      app,
    ],
  };
}
