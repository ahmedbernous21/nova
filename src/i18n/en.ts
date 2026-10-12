import type { Dictionary } from "./fr";

export const en: Dictionary = {
  meta: {
    title: "NOVA — Digital and creative studio",
    description:
      "NOVA is an independent digital studio in France. Custom applications and video production, from the first idea to launch.",
  },
  skip: "Skip to content",
  nav: {
    open: "Open menu",
    close: "Close menu",
    cta: "Let’s talk about your project",
    items: [
      { id: "services", href: "#services", label: "Services" },
      { id: "realisations", href: "#realisations", label: "Work" },
      { id: "approche", href: "#approche", label: "Our approach" },
      { id: "apropos", href: "#apropos", label: "About" },
      { id: "contact", href: "#contact", label: "Contact" },
    ],
  },
  hero: {
    eyebrow: "DIGITAL & CREATIVE STUDIO · FRANCE",
    titleLead: "Your ideas deserve",
    titleEm: "to come alive.",
    text: "We design custom applications and produce videos that give your ideas force. From the first sketch to launch, NOVA turns your vision into reality.",
    primary: "Let’s talk about your project",
    secondary: "Explore our work",
    meta: "Application development · Video production · Digital solutions",
    caption: "Demonstration visuals — not client projects.",
  },
  services: {
    kicker: "01 — Services",
    title: "Two practices. One vision.",
    text: "We bring technology and creativity together to design digital experiences that make a difference.",
    blocks: {
      applications: {
        title: "Application development",
        text: "We design and build custom digital products around your users and your goals.",
        items: [
          "Web applications",
          "Mobile applications",
          "SaaS platforms",
          "Websites and landing pages",
          "Dashboards and business software",
          "APIs, integrations, and automations",
        ],
        cta: "Build my application",
      },
      video: {
        title: "Video production",
        text: "We create compelling videos that tell your story, strengthen your brand, and move people to act.",
        items: [
          "Promotional videos",
          "Commercial films",
          "Social content",
          "Product videos",
          "Editing and post-production",
          "Motion design and animation",
        ],
        cta: "Create my video",
      },
      solutions: {
        title: "Complete digital solutions",
        text: "From the idea to going live, we combine development and visual creation to bring your project to life.",
        items: [
          "UX/UI design",
          "Identity and art direction",
          "Digital product development",
          "Video content",
          "Automation and integrations",
          "Launch support",
        ],
        cta: "Bring my project to life",
      },
    },
  },
  portfolio: {
    kicker: "02 — Work",
    title: "Ideas turned into experiences.",
    text: "Every project starts with an ambition. Our job is to give it a concrete form.",
    concept: "Concept",
    demonstration: "Demonstration",
    cta: "Have a project in mind? Let’s talk.",
    preview: "Play preview",
    close: "Close",
  },
  process: {
    kicker: "03 — Our approach",
    title: "From the first idea to launch.",
    steps: [
      {
        n: "01",
        title: "Discovery",
        text: "We take the time to understand your goals, your needs, and your vision.",
      },
      {
        n: "02",
        title: "Design",
        text: "We define the strategy, the user experience, and the creative direction.",
      },
      {
        n: "03",
        title: "Creation",
        text: "We build your application or produce your videos, with regular check-ins.",
      },
      {
        n: "04",
        title: "Launch",
        text: "We deliver your project and stay with you for what comes next.",
      },
    ],
  },
  about: {
    kicker: "04 — About",
    title: "An independent team. Ambition without limits.",
    paragraphs: [
      "NOVA is an independent digital studio based in France, founded by two friends who care about technology and making things.",
      "We believe the strongest projects happen when development meets design and storytelling. Our approach is simple: understand your vision, design the right solution, and turn your ideas into concrete work.",
      "At NOVA, you speak directly with the people building your project.",
    ],
    highlights: [
      "Direct collaboration with the founders",
      "Work shaped around you",
      "Technical precision",
      "Creative thinking",
      "Clear communication throughout the project",
    ],
    portraitSoon: "Portrait coming soon",
    portfolio: "Portfolio",
  },
  why: {
    kicker: "05 — Why NOVA",
    title: "Why NOVA",
    reasons: [
      { title: "Tailored", text: "Solutions shaped around your needs." },
      { title: "A direct conversation", text: "A simple, transparent collaboration." },
      { title: "Technology and creativity", text: "The best of both worlds." },
      {
        title: "From idea to result",
        text: "Support from design through launch.",
      },
    ],
  },
  contact: {
    kicker: "06 — Contact",
    title: "What if we brought your idea to life?",
    text: "You have an application to build, a video in mind, or a digital ambition? Let’s talk and shape what comes next.",
    base: "France",
  },
  form: {
    name: "Full name",
    email: "Work email",
    company: "Company (optional)",
    projectType: "Project type",
    budget: "Estimated budget (optional)",
    message: "Project description",
    submit: "Send my request",
    sending: "Sending…",
    successTitle: "Request sent.",
    successBody: "Thank you. Your request has been delivered.",
    errorTitle: "The message did not go through.",
    errorBody: "Try again in a moment.",
    unconfiguredTitle: "The form is not connected yet.",
    unconfiguredBody:
      "Your request was not delivered. Connect a form service, or use the contact details published on the site.",
    another: "Send another request",
    select: "Select",
    note: "Your details are used only to reply to your request.",
    privacy: "Privacy policy",
    requiredMark: "required",
    budgetPlaceholder: "If you already have a range in mind",
    messagePlaceholder: "Tell us about the idea, your timing, and what you expect.",
    invalid: "The form contains errors.",
    types: [
      { value: "web", label: "Web application" },
      { value: "mobile", label: "Mobile application" },
      { value: "site", label: "Website" },
      { value: "video", label: "Video production" },
      { value: "complete", label: "Complete digital project" },
      { value: "other", label: "Other" },
    ],
    errors: {
      required: "This field is required.",
      email: "Enter a valid work email.",
      message: "Describe the project in a few lines.",
    },
  },
  footer: {
    statement: "We bring your ideas to life through technology and creativity.",
    nav: "Navigation",
    services: "Services",
    contact: "Contact",
    privacy: "Privacy policy",
    rights: "All rights reserved.",
  },
  privacy: {
    title: "Privacy policy",
    intro:
      "NOVA is an independent studio based in France. This page explains what happens to the information you choose to send through the contact form.",
    sections: [
      {
        heading: "Information involved",
        body: "The form can send your name, work email, company name, project type, an estimated budget, and a description of your need. That information leaves only when you submit the form, and only if a delivery service has been configured.",
      },
      {
        heading: "Use",
        body: "It is used to read your request and talk with you about the project. NOVA does not sell this information.",
      },
      {
        heading: "Retention",
        body: "It is kept for as long as needed to handle your request and the conversation that follows.",
      },
      {
        heading: "Your choices",
        body: "You can ask to access, correct, or delete this information through the contact details published on the site.",
      },
      {
        heading: "Delivery service",
        body: "If a form service is connected, it receives the content of your message in order to pass it on to NOVA.",
      },
      {
        heading: "Language",
        body: "Each language has its own address. The version you see is the version of the page you open.",
      },
    ],
  },
  notFound: {
    title: "This page does not exist.",
    text: "The link may be out of date. Go back to the home page to continue.",
    cta: "Back to the home page",
  },
};
