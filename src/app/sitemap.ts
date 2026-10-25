import type { MetadataRoute } from "next";
import { absoluteUrl, routes } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return (["ka", "en"] as const).map((lang) => ({
    url: absoluteUrl(routes[lang].home),
    lastModified,
    changeFrequency: "weekly",
    priority: lang === "ka" ? 1 : 0.9,
    alternates: {
      languages: {
        ka: absoluteUrl(routes.ka.home),
        en: absoluteUrl(routes.en.home),
        "x-default": absoluteUrl(routes.ka.home),
      },
    },
  }));
}
