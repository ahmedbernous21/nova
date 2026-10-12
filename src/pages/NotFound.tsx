import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export function NotFound() {
  const { t, home } = useLanguage();

  return (
    <article className="page">
      <div className="wrap prose">
        <p className="kicker">404</p>
        <h1>{t.notFound.title}</h1>
        <p className="lede">{t.notFound.text}</p>
        <Link className="btn btn-primary" to={home}>
          {t.notFound.cta}
        </Link>
      </div>
    </article>
  );
}
