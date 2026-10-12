import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";
import type { Lang } from "../content/locale";

export const dictionaries = { fr, en, ar } as const;
export type { Dictionary } from "./fr";

export function isLang(value: string | undefined | null): value is Lang {
  return value === "fr" || value === "en" || value === "ar";
}
