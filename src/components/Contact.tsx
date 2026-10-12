import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { externalHref, mailtoHref, site, whatsappHref } from "../content/site";
import { useContactIntent } from "../context/ContactIntent";
import { useLanguage } from "../context/LanguageContext";
import { prefersReducedMotion } from "../lib/motion";
import { submitContact } from "../lib/submitContact";

type Status = "idle" | "sending" | "success" | "error" | "unconfigured";
type Field = "name" | "email" | "projectType" | "message";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const { t, lang, privacyPath } = useLanguage();
  const { intent, nonce } = useContactIntent();
  const baseId = useId();
  const successRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const emailHref = mailtoHref(site.email);
  const whatsapp = whatsappHref(site.whatsapp);
  const linkedin = externalHref(site.linkedin);
  const instagram = externalHref(site.instagram);
  const ids: Record<Field | "company" | "budget", string> = {
    name: `${baseId}-name`,
    email: `${baseId}-email`,
    company: `${baseId}-company`,
    projectType: `${baseId}-type`,
    budget: `${baseId}-budget`,
    message: `${baseId}-message`,
  };

  useEffect(() => {
    if (import.meta.env.DEV && !site.formEndpoint) {
      console.warn("NOVA: set VITE_FORM_ENDPOINT before contact submissions can be delivered.");
    }
  }, []);

  useEffect(() => {
    setErrors({});
  }, [lang]);

  useEffect(() => {
    if (nonce === 0) return;
    if (intent) setProjectType(intent);
    const timer = window.setTimeout(() => {
      document.getElementById(intent ? ids.projectType : ids.name)?.focus();
    }, prefersReducedMotion() ? 0 : 480);
    return () => window.clearTimeout(timer);
  }, [nonce, intent, ids.name, ids.projectType]);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function validate() {
    const next: Partial<Record<Field, string>> = {};
    if (name.trim().length < 2) next.name = t.form.errors.required;
    if (!EMAIL.test(email.trim())) next.email = t.form.errors.email;
    if (!projectType) next.projectType = t.form.errors.required;
    if (message.trim().length < 20) next.message = t.form.errors.message;
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    const first = (["name", "email", "projectType", "message"] as const).find((field) => next[field]);
    if (first) {
      document.getElementById(ids[first])?.focus();
      return;
    }
    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      const result = await submitContact({
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        projectType,
        budget: budget.trim(),
        message: message.trim(),
        language: lang,
      });
      if (result === "unconfigured") {
        setStatus("unconfigured");
        return;
      }
      setName("");
      setEmail("");
      setCompany("");
      setProjectType("");
      setBudget("");
      setMessage("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function resetForm() {
    setStatus("idle");
    setErrors({});
  }

  return (
    <section className="section" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <p className="kicker">{t.contact.kicker}</p>
          <h2>{t.contact.title}</h2>
          <p className="lede">{t.contact.text}</p>
          <ul className="channels">
            <li>{t.contact.base}</li>
            {emailHref && (
              <li>
                <a href={emailHref}>{site.email}</a>
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
          </ul>
        </div>

        {status === "success" ? (
          <div className="success-panel" ref={successRef} tabIndex={-1}>
            <h3>{t.form.successTitle}</h3>
            <p>{t.form.successBody}</p>
            <button type="button" className="btn btn-ghost" onClick={resetForm}>
              {t.form.another}
            </button>
          </div>
        ) : (
          <form className="contact-form" noValidate aria-busy={status === "sending"} onSubmit={onSubmit}>
            {status === "error" && (
              <div className="banner" role="alert">
                <strong>{t.form.errorTitle}</strong>
                <span>{t.form.errorBody}</span>
              </div>
            )}
            {status === "unconfigured" && (
              <div className="banner" role="alert">
                <strong>{t.form.unconfiguredTitle}</strong>
                <span>{t.form.unconfiguredBody}</span>
              </div>
            )}
            {Object.keys(errors).length > 0 && <p className="sr-only" role="alert">{t.form.invalid}</p>}

            <div className="hp" aria-hidden="true">
              <label>
                Website
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                />
              </label>
            </div>

            <div className="form-grid">
              <Field
                id={ids.name}
                label={t.form.name}
                requiredMark={t.form.requiredMark}
                error={errors.name}
                required
              >
                <input
                  id={ids.name}
                  name="name"
                  autoComplete="name"
                  value={name}
                  maxLength={120}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${ids.name}-error` : undefined}
                  onChange={(event) => setName(event.target.value)}
                />
              </Field>
              <Field
                id={ids.email}
                label={t.form.email}
                requiredMark={t.form.requiredMark}
                error={errors.email}
                required
              >
                <input
                  id={ids.email}
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  maxLength={160}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${ids.email}-error` : undefined}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Field>
              <Field id={ids.company} label={t.form.company} requiredMark={t.form.requiredMark}>
                <input
                  id={ids.company}
                  name="organization"
                  autoComplete="organization"
                  value={company}
                  maxLength={160}
                  onChange={(event) => setCompany(event.target.value)}
                />
              </Field>
              <Field
                id={ids.projectType}
                label={t.form.projectType}
                requiredMark={t.form.requiredMark}
                error={errors.projectType}
                required
              >
                <select
                  id={ids.projectType}
                  name="projectType"
                  value={projectType}
                  aria-invalid={Boolean(errors.projectType)}
                  aria-describedby={errors.projectType ? `${ids.projectType}-error` : undefined}
                  onChange={(event) => setProjectType(event.target.value)}
                >
                  <option value="">{t.form.select}</option>
                  {t.form.types.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id={ids.budget} label={t.form.budget} requiredMark={t.form.requiredMark} wide>
                <input
                  id={ids.budget}
                  name="budget"
                  value={budget}
                  maxLength={80}
                  placeholder={t.form.budgetPlaceholder}
                  onChange={(event) => setBudget(event.target.value)}
                />
              </Field>
              <Field
                id={ids.message}
                label={t.form.message}
                requiredMark={t.form.requiredMark}
                error={errors.message}
                required
                wide
              >
                <textarea
                  id={ids.message}
                  name="message"
                  rows={5}
                  maxLength={4000}
                  value={message}
                  placeholder={t.form.messagePlaceholder}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? `${ids.message}-error` : undefined}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Field>
            </div>

            <p className="form-note">
              {t.form.note} <Link to={privacyPath}>{t.form.privacy}</Link>
            </p>
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? t.form.sending : t.form.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  requiredMark,
  error,
  required,
  wide,
  children,
}: {
  id: string;
  label: string;
  requiredMark: string;
  error?: string;
  required?: boolean;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`field${wide ? " field-wide" : ""}${error ? " has-error" : ""}`}>
      <label htmlFor={id}>
        {label}
        {required && (
          <>
            <span aria-hidden="true"> *</span>
            <span className="sr-only"> ({requiredMark})</span>
          </>
        )}
      </label>
      {children}
      {error && (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
