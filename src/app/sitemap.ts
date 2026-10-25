import type { MetadataRoute } from "next";
import { absoluteUrl, routes, type PageKey } from "@/config/site";

export const dynamic = "force-static";

const pages: { key: PageKey; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { key: "home", priority: 1, changeFrequency: "weekly" },
  { key: "print", priority: 0.7, changeFrequency: "monthly" },
  { key: "privacy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.flatMap(({ key, priority, changeFrequency }) =>
    (["ka", "en"] as const).map((lang) => ({
      url: absoluteUrl(routes[lang][key]),
      lastModified,
      changeFrequency,
      priority: lang === "ka" ? priority : Math.round(priority * 9) / 10,
      alternates: {
        languages: {
          ka: absoluteUrl(routes.ka[key]),
          en: absoluteUrl(routes.en[key]),
        },
      },
    })),
  );
}
