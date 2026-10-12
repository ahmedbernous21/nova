import { Link } from "react-router-dom";
import { useContactIntent } from "../context/ContactIntent";
import { useLanguage } from "../context/LanguageContext";
import { Arrow } from "./Arrow";
import { DashboardVisual, FilmVisual, MobileVisual } from "./visuals";

export function Hero() {
  const { t, section } = useLanguage();
  const { request } = useContactIntent();

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dot" aria-hidden="true" />
            {t.hero.eyebrow}
          </p>
          <h1>
            {t.hero.titleLead} <em>{t.hero.titleEm}</em>
          </h1>
          <p className="lede">{t.hero.text}</p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={() => request()}>
              {t.hero.primary}
            </button>
            <Link className="btn btn-ghost" to={section("realisations")}>
              {t.hero.secondary}
              <Arrow />
            </Link>
          </div>
          <p className="hero-meta">{t.hero.meta}</p>
        </div>
        <div className="hero-visual">
          <div className="stage" aria-hidden="true">
            <div className="stage-film">
              <FilmVisual />
            </div>
            <div className="stage-dash">
              <DashboardVisual />
            </div>
            <div className="stage-phone">
              <MobileVisual />
            </div>
          </div>
          <p className="stage-caption">{t.hero.caption}</p>
        </div>
      </div>
    </section>
  );
}
