import type { LocaleText } from "./locale";

function readEnv(key: "VITE_FORM_ENDPOINT" | "VITE_FORM_ACCESS_KEY") {
  const value = import.meta.env[key];
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Public configuration.
 * Leave a channel empty to hide it. Do not invent an address, a city, or client names.
 */
export const site = {
  name: "NOVA",
  email: "",
  whatsapp: "",
  linkedin: "",
  instagram: "",
  formEndpoint: readEnv("VITE_FORM_ENDPOINT"),
  formAccessKey: readEnv("VITE_FORM_ACCESS_KEY"),
};

export type Founder = {
  id: string;
  name: string;
  role: LocaleText;
  bio: LocaleText;
  /** Public path, for example "/founders/a.jpg". */
  portraitSrc?: string;
  /** CSS object-position for the portrait crop. */
  portraitPosition?: string;
  portfolioHref?: string;
};

export const founders: Founder[] = [
  {
    id: "ahmed-bernous",
    name: "Ahmed Bernous",
    role: {
      fr: "Cofondateur · Ingénieur logiciel",
      en: "Cofounder · Software engineer",
      ar: "شريك مؤسس · مهندس برمجيات",
    },
    bio: {
      fr: "Il développe les applications et les produits digitaux.",
      en: "He builds the applications and digital products.",
      ar: "يطوّر التطبيقات والمنتجات الرقمية.",
    },
    portraitSrc: "/founders/ahmed-bernous.jpg",
    portraitPosition: "center center",
    portfolioHref: "https://ahmedbernous.vercel.app/#recommendations",
  },
  {
    id: "rachid-oualarbi",
    name: "Rachid Oualarbi",
    role: {
      fr: "Cofondateur · Designer produit",
      en: "Cofounder · Product designer",
      ar: "شريك مؤسس · مصمم منتجات",
    },
    bio: {
      fr: "Il conçoit les interfaces et la direction visuelle des produits.",
      en: "He designs the interfaces and the visual direction of the products.",
      ar: "يصمّم الواجهات والاتجاه البصري للمنتجات.",
    },
    portraitSrc: "/founders/rachid-oualarbi.jpg",
    portraitPosition: "center center",
    portfolioHref: "https://pixel-perfect-render-2454.lovable.app/",
  },
];

export function mailtoHref(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ? `mailto:${email.trim()}` : "";
}

export function whatsappHref(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 8 ? `https://wa.me/${digits}` : "";
}

export function externalHref(url: string) {
  const value = url.trim();
  if (value.startsWith("https://") || value.startsWith("http://")) return value;
  return "";
}
