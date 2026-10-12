import { useContactIntent } from "../context/ContactIntent";
import { useLanguage } from "../context/LanguageContext";
import { Arrow } from "./Arrow";
import { Reveal } from "./Reveal";
import { DashboardVisual, DuoVisual, FilmVisual } from "./visuals";

const SERVICE_META = {
  applications: { tone: "product", intent: "", Visual: DashboardVisual },
  video: { tone: "video", intent: "video", Visual: FilmVisual },
  solutions: { tone: "complete", intent: "complete", Visual: DuoVisual },
} as const;

export function Services() {
  const { t } = useLanguage();
  const { request } = useContactIntent();
  const ids = Object.keys(SERVICE_META) as Array<keyof typeof SERVICE_META>;

  return (
    <section className="section" id="services">
      <Reveal>
        <div className="wrap">
          <header className="section-head">
            <p className="kicker">{t.services.kicker}</p>
            <h2>{t.services.title}</h2>
            <p className="lede">{t.services.text}</p>
          </header>
          <div className="service-list">
            {ids.map((id, index) => {
              const meta = SERVICE_META[id];
              const copy = t.services.blocks[id];
              const Visual = meta.Visual;
              return (
                <article className="service" id={id} data-tone={meta.tone} key={id}>
                  <p className="service-index num">{String(index + 1).padStart(2, "0")}</p>
                  <div className="service-copy">
                    <h3>{copy.title}</h3>
                    <p>{copy.text}</p>
                    <button type="button" className="btn btn-ghost" onClick={() => request(meta.intent)}>
                      {copy.cta}
                      <Arrow />
                    </button>
                  </div>
                  <ul className="service-items">
                    {copy.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="service-sign">
                    <Visual />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
