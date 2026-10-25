import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"];

/** Finds public/images/<name>.<ext>. Runs at build time, so new photos need a rebuild (or a reload in dev). */
export function findPhoto(name: string): string | null {
  for (const ext of EXTENSIONS) {
    const file = path.join(process.cwd(), "public", "images", `${name}.${ext}`);
    if (fs.existsSync(file)) return `/images/${name}.${ext}`;
  }
  return null;
}

export const showPlaceholders = process.env.NODE_ENV === "development";
