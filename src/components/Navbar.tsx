import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContactIntent } from "../context/ContactIntent";
import { useLanguage } from "../context/LanguageContext";
import { Logo } from "./Logo";

export function Navbar() {
  const { t, section } = useLanguage();
  const { hash, pathname } = useLocation();
  const { request } = useContactIntent();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const mounted = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (open) {
      const first = panelRef.current?.querySelector("a");
      if (first instanceof HTMLElement) first.focus();
      return;
    }
    toggleRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [hash, pathname]);

  const closeAndContact = () => {
    setOpen(false);
    request();
  };

  return (
    <header className={scrolled || open ? "nav is-scrolled" : "nav"}>
      <div className="nav-bar wrap">
        <Logo />
        <nav className="nav-links" aria-label={t.footer.nav}>
          <ul>
            {t.nav.items.map((item) => (
              <li key={item.id}>
                <Link to={section(item.id)} aria-current={hash === `#${item.id}` ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-tools">
          <button type="button" className="btn btn-primary nav-cta" onClick={() => request()}>
            {t.nav.cta}
          </button>
          <button
            ref={toggleRef}
            type="button"
            className={open ? "nav-toggle is-open" : "nav-toggle"}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span className="sr-only">{open ? t.nav.close : t.nav.open}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-panel" id={panelId} ref={panelRef}>
          <ul>
            {t.nav.items.map((item) => (
              <li key={item.id}>
                <Link to={section(item.id)} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button type="button" className="btn btn-primary" onClick={closeAndContact}>
            {t.nav.cta}
          </button>
        </div>
      )}
    </header>
  );
}
