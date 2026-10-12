import type { LocaleText } from "./locale";

export type ProjectMedium = "dashboard" | "mobile" | "film" | "website";
export type ProjectKind = "concept" | "demonstration";

export type Project = {
  id: string;
  medium: ProjectMedium;
  kind: ProjectKind;
  category: LocaleText;
  title: LocaleText;
  summary: LocaleText;
  /** Optional file in /public, for example "/videos/film.mp4". */
  videoSrc?: string;
};

/**
 * Add a project by appending an object to this list.
 * Keep entries labeled as concepts or demonstrations until real work is supplied.
 * Do not invent client names, testimonials, or results.
 */
export const projects: Project[] = [
  {
    id: "dashboard",
    medium: "dashboard",
    kind: "concept",
    category: { fr: "Application web", en: "Web application", ar: "تطبيق ويب" },
    title: { fr: "Interface de pilotage", en: "Control interface", ar: "واجهة إدارة" },
    summary: {
      fr: "Concept de tableau de bord pour un produit digital. Interface de démonstration, sans client réel.",
      en: "Concept for a dashboard of a digital product. A demonstration interface, with no real client.",
      ar: "مفهوم لوحة تحكم لمنتج رقمي. واجهة توضيحية، دون عميل حقيقي.",
    },
  },
  {
    id: "mobile",
    medium: "mobile",
    kind: "concept",
    category: { fr: "Application mobile", en: "Mobile application", ar: "تطبيق جوال" },
    title: { fr: "Parcours mobile", en: "Mobile journey", ar: "تجربة الجوال" },
    summary: {
      fr: "Concept d’application mobile pour un service du quotidien. Écrans de démonstration, sans marque cliente.",
      en: "Concept for a mobile app for an everyday service. Demonstration screens, with no client brand.",
      ar: "مفهوم تطبيق جوال لخدمة يومية. شاشات توضيحية، دون علامة تجارية حقيقية.",
    },
  },
  {
    id: "film",
    medium: "film",
    kind: "demonstration",
    category: { fr: "Vidéo", en: "Video", ar: "فيديو" },
    title: { fr: "Séquence promotionnelle", en: "Promotional sequence", ar: "تسلسل ترويجي" },
    summary: {
      fr: "Démonstration d’un langage visuel pour un film de marque. Aucun métrage client.",
      en: "A demonstration of a visual language for a brand film. No client footage.",
      ar: "عرض للغة بصرية لفيلم علامة. لا يوجد مقطع مصوَّر لعميل.",
    },
  },
  {
    id: "website",
    medium: "website",
    kind: "concept",
    category: { fr: "Site web", en: "Website", ar: "موقع إلكتروني" },
    title: { fr: "Présence éditoriale", en: "Editorial presence", ar: "حضور تحريري" },
    summary: {
      fr: "Concept de site pour une marque contemporaine. Maquette de démonstration.",
      en: "Concept for a site for a contemporary brand. A demonstration mockup.",
      ar: "مفهوم موقع لعلامة معاصرة. نموذج توضيحي.",
    },
  },
];
