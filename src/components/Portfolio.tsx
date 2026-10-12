import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "../content/projects";
import { useContactIntent } from "../context/ContactIntent";
import { useLanguage } from "../context/LanguageContext";
import { Arrow } from "./Arrow";
import { Reveal } from "./Reveal";
import { DashboardVisual, FilmVisual, MobileVisual, WebsiteVisual } from "./visuals";

function ProjectVisual({ medium }: { medium: Project["medium"] }) {
  if (medium === "dashboard") return <DashboardVisual />;
  if (medium === "mobile") return <MobileVisual />;
  if (medium === "film") return <FilmVisual />;
  return <WebsiteVisual />;
}

export function Portfolio() {
  const { t, lang } = useLanguage();
  const { request } = useContactIntent();
  const [active, setActive] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
  }, [active]);

  return (
    <section className="section" id="realisations">
      <Reveal>
        <div className="wrap">
          <header className="section-head">
            <p className="kicker">{t.portfolio.kicker}</p>
            <h2>{t.portfolio.title}</h2>
            <p className="lede">{t.portfolio.text}</p>
          </header>
          <div className="work-grid">
            {projects.map((project) => {
              const kind = project.kind === "concept" ? t.portfolio.concept : t.portfolio.demonstration;
              return (
                <article className="work" key={project.id}>
                  <div className={`frame work-visual is-${project.medium}`}>
                    <span className="tick tl" />
                    <span className="tick tr" />
                    <span className="tick bl" />
                    <span className="tick br" />
                    <div className="zoom">
                      <ProjectVisual medium={project.medium} />
                    </div>
                    <span className="badge">{kind}</span>
                    {project.videoSrc && (
                      <button type="button" className="preview-btn" onClick={() => setActive(project)}>
                        {t.portfolio.preview}
                      </button>
                    )}
                  </div>
                  <div className="work-meta">
                    <p>{project.category[lang]}</p>
                    <h3>{project.title[lang]}</h3>
                    <p>{project.summary[lang]}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <button type="button" className="portfolio-cta" onClick={() => request()}>
            <span>{t.portfolio.cta}</span>
            <Arrow />
          </button>
        </div>
      </Reveal>
      <dialog
        ref={dialogRef}
        className="player"
        onClose={() => setActive(null)}
        aria-label={active ? active.title[lang] : t.portfolio.preview}
      >
        <div className="player-bar">
          <p>{active ? active.title[lang] : ""}</p>
          <button type="button" onClick={() => dialogRef.current?.close()}>
            {t.portfolio.close}
          </button>
        </div>
        {active?.videoSrc && (
          <video key={active.videoSrc} controls playsInline preload="metadata" src={active.videoSrc} />
        )}
      </dialog>
    </section>
  );
}
