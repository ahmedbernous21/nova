import { Link } from "react-router-dom";
import { externalHref, mailtoHref, site, whatsappHref } from "../content/site";
import { useLanguage } from "../context/LanguageContext";
import { Logo } from "./Logo";

export function Footer() {
  const { t, section, privacyPath } = useLanguage();
  const year = new Date().getFullYear();
  const email = mailtoHref(site.email);
  const whatsapp = whatsappHref(site.whatsapp);
  const linkedin = externalHref(site.linkedin);
  const instagram = externalHref(site.instagram);
  const serviceLinks = [
    { id: "applications", label: t.services.blocks.applications.title },
    { id: "video", label: t.services.blocks.video.title },
    { id: "solutions", label: t.services.blocks.solutions.title },
  ];

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo large />
          <p>{t.footer.statement}</p>
        </div>
        <div>
          <p className="footer-label">{t.footer.nav}</p>
          <ul>
            {t.nav.items.map((item) => (
              <li key={item.id}>
                <Link to={section(item.id)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-label">{t.footer.services}</p>
          <ul>
            {serviceLinks.map((item) => (
              <li key={item.id}>
                <Link to={section(item.id)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-label">{t.footer.contact}</p>
          <ul>
            <li>{t.contact.base}</li>
            {email && (
              <li>
                <a href={email}>{site.email}</a>
              </li>
            )}
            {whatsapp && (
              <li>
                <a href={whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
            )}
            {linkedin && (
              <li>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            )}
            {instagram && (
              <li>
                <a href={instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
            )}
            <li>
              <Link to={privacyPath}>{t.footer.privacy}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap legal">
        <p>
          © {year} {site.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
