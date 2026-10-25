// Edit these values before going live.
export const site = {
  name: "Khidi",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/$/, ""),
  email: "hello@example.com",
  stores: {
    ios: "https://apps.apple.com/",
    android: "https://play.google.com/store",
    windows: "https://apps.microsoft.com/",
  },
  youtubeId: "",
  price: null as string | null,
  social: [] as string[],
};

export type Lang = "ka" | "en";

export const routes = {
  ka: { home: "/" },
  en: { home: "/en/" },
} as const;

export type PageKey = keyof (typeof routes)["ka"];

export function absoluteUrl(path: string) {
  return `${site.url}${path}`;
}
