import type { MetadataRoute } from "next";
import { ka } from "@/content/ka";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Khidi",
    short_name: "Khidi",
    description: ka.meta.homeDescription,
    lang: "ka",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4766F0",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-192-dark.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512-dark.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
