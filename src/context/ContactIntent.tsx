import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { prefersReducedMotion } from "../lib/motion";

type ContactIntentValue = {
  intent: string;
  nonce: number;
  request: (type?: string) => void;
};

const ContactIntentContext = createContext<ContactIntentValue | null>(null);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [intent, setIntent] = useState("");
  const [nonce, setNonce] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { home } = useLanguage();

  const request = useCallback(
    (type = "") => {
      setIntent(type);
      setNonce((current) => current + 1);
      if (location.pathname !== home) {
        navigate({ pathname: home, hash: "contact" });
        return;
      }
      document.getElementById("contact")?.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
      });
    },
    [home, location.pathname, navigate],
  );

  const value = useMemo(() => ({ intent, nonce, request }), [intent, nonce, request]);

  return <ContactIntentContext.Provider value={value}>{children}</ContactIntentContext.Provider>;
}

export function useContactIntent() {
  const value = useContext(ContactIntentContext);
  if (!value) throw new Error("useContactIntent must be used within ContactProvider");
  return value;
}
