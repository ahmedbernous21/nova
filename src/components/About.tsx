import { externalHref, founders } from "../content/site";
import { useLanguage } from "../context/LanguageContext";
import { Spark } from "./Logo";
import { Reveal } from "./Reveal";

export function About() {
  const { t, lang } = useLanguage();

  return (
    <section className="section" id="apropos">
      <Reveal>
        <div className="wrap about-grid">
          <div className="about-copy">
            <p className="kicker">{t.about.kicker}</p>
            <h2>{t.about.title}</h2>
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="highlights">
              {t.about.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="founders">
            {founders.map((founder) => {
              const role = founder.role[lang];
              const name = founder.name.trim();
              const alt = name ? `${name}, ${role}` : role;
              const portfolio = externalHref(founder.portfolioHref ?? "");
              return (
                <article className="founder" key={founder.id}>
                  <div className="portrait">
                    {founder.portraitSrc ? (
                      <img
                        src={founder.portraitSrc}
                        alt={alt}
                        style={founder.portraitPosition ? { objectPosition: founder.portraitPosition } : undefined}
                      />
                    ) : (
                      <div className="portrait-ph">
                        <Spark className="spark" />
                        <span>{t.about.portraitSoon}</span>
                      </div>
                    )}
                  </div>
                  <p className="founder-role">{role}</p>
                  {name ? <h3>{name}</h3> : null}
                  <p className="founder-bio">{founder.bio[lang]}</p>
                  {portfolio ? (
                    <a className="founder-link" href={portfolio} target="_blank" rel="noreferrer">
                      {t.about.portfolio}
                    </a>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
