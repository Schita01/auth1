import type { Lang } from "@/config/site";
import { en, type Dict } from "./en";
import { ka } from "./ka";

const dicts: Record<Lang, Dict> = { ka, en };

export function getDict(lang: Lang): Dict {
  return dicts[lang];
}

export type { Dict };
