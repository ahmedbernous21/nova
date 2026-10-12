import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { prefersReducedMotion } from "../lib/motion";

export function Spark({ className = "spark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 1.1 13.8 10.2 22.9 12 13.8 13.8 12 22.9 10.2 13.8 1.1 12 10.2 10.2Z"
      />
    </svg>
  );
}

export function Logo({ large = false }: { large?: boolean }) {
  const location = useLocation();
  const { home } = useLanguage();

  return (
    <Link
      to={home}
      className={large ? "logo logo-lg" : "logo"}
      aria-label="NOVA"
      onClick={() => {
        if (location.pathname === home) {
          window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
        }
      }}
    >
      <Spark />
      <span>NOVA</span>
    </Link>
  );
}
