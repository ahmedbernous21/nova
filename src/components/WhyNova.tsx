import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";

export function WhyNova() {
  const { t } = useLanguage();

  return (
    <section className="section" id="pourquoi">
      <Reveal>
        <div className="wrap">
          <header className="section-head section-head-single">
            <p className="kicker">{t.why.kicker}</p>
            <h2>{t.why.title}</h2>
          </header>
          <ol className="why-list">
            {t.why.reasons.map((reason, index) => (
              <li className="reason" key={reason.title}>
                <span className="reason-n num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
