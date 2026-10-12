import { useEffect } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, useParams } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ContactProvider } from "./context/ContactIntent";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { isLang } from "./i18n";
import { prefersReducedMotion } from "./lib/motion";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Privacy } from "./pages/Privacy";

const OG_LOCALE = { fr: "fr_FR", en: "en_US", ar: "ar_AR" } as const;

function TitleManager() {
  const { t, lang } = useLanguage();
  const { pathname } = useLocation();

  useEffect(() => {
    const onPrivacy = pathname.endsWith("/privacy");
    const title = onPrivacy ? `${t.privacy.title} — NOVA` : t.meta.title;
    const description = onPrivacy ? t.privacy.intro : t.meta.description;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", OG_LOCALE[lang]);
  }, [t, lang, pathname]);

  return null;
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const node = document.getElementById(hash.slice(1));
      if (node) {
        node.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
          block: "start",
        });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

function Shell({ valid }: { valid: boolean }) {
  const { t } = useLanguage();

  return (
    <>
      <a className="skip" href="#content">
        {t.skip}
      </a>
      <Navbar />
      <main id="content" tabIndex={-1}>
        {valid ? <Outlet /> : <NotFound />}
      </main>
      <Footer />
      <div className="grain" aria-hidden="true" />
    </>
  );
}

function LocaleGate() {
  const { lang: param } = useParams();
  const valid = isLang(param);
  const lang = valid ? param : "fr";

  return (
    <LanguageProvider lang={lang}>
      <ContactProvider>
        <TitleManager />
        <Shell valid={valid} />
      </ContactProvider>
    </LanguageProvider>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Navigate to="/fr" replace />} />
        <Route path="/confidentialite" element={<Navigate to="/fr/privacy" replace />} />
        <Route path="/:lang" element={<LocaleGate />}>
          <Route index element={<Home />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
