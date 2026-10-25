// Edit these values before going live.
export const site = {
  name: "Khidi",
  // Production address of the website. Used for canonical links, sitemap and social previews.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/$/, ""),
  email: "hello@example.com",
  // Replace with the real store pages once the app is published.
  stores: {
    ios: "https://apps.apple.com/",
    android: "https://play.google.com/store",
    windows: "https://apps.microsoft.com/",
    amazon: "https://www.amazon.com/gp/mas/get/amazonapp",
  },
  // YouTube video id for the home page video section, e.g. "dQw4w9WgXcQ". Empty shows a “coming soon” placeholder.
  youtubeId: "",
  // Price in USD for structured data. null leaves price out of the search-engine data.
  price: null as string | null,
  social: [] as string[],
};

export type Lang = "ka" | "en";

export const routes = {
  ka: { home: "/", print: "/print/", privacy: "/privacy/", terms: "/terms/" },
  en: { home: "/en/", print: "/en/print/", privacy: "/en/privacy/", terms: "/en/terms/" },
} as const;

export type PageKey = keyof (typeof routes)["ka"];

export function absoluteUrl(path: string) {
  return `${site.url}${path}`;
}
