import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export function Privacy() {
  const { t, home } = useLanguage();

  return (
    <article className="page">
      <div className="wrap prose">
        <p className="kicker">NOVA</p>
        <h1>{t.privacy.title}</h1>
        <p className="lede">{t.privacy.intro}</p>
        {t.privacy.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
        <p>
          <Link className="text-link" to={home}>
            NOVA
          </Link>
        </p>
      </div>
    </article>
  );
}
