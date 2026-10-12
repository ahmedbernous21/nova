import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import type { Lang } from "../content/locale";
import { dictionaries, type Dictionary } from "../i18n";

type LanguageValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: Dictionary;
  home: string;
  privacyPath: string;
  section: (id: string) => string;
};

const LanguageContext = createContext<LanguageValue | null>(null);

export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      t: dictionaries[lang],
      home: `/${lang}`,
      privacyPath: `/${lang}/privacy`,
      section: (id: string) => `/${lang}#${id}`,
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}
