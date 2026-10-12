import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";

export function Process() {
  const { t } = useLanguage();

  return (
    <section className="section" id="approche">
      <Reveal>
        <div className="wrap">
          <header className="section-head section-head-single">
            <p className="kicker">{t.process.kicker}</p>
            <h2>{t.process.title}</h2>
          </header>
          <ol className="timeline">
            {t.process.steps.map((step) => (
              <li className="step" key={step.n}>
                <span className="step-n num">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
