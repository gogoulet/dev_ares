export const siteConfig = {
  name: "Ares World",
  title: "Ares World — Global Sovereign Protection & Elite Insulated Networks",
  description:
    "High-end operational security (OpSec), digital/physical intelligence audits, counter-surveillance, and world-class private medical and lifestyle concierge networks for global family offices.",
  locale: "en_US",
  defaultImage: "/dev_ares/og.png",
  address: {
    street: "1100 Boulevard des Forges",
    locality: "Trois-Rivières",
    postalCode: "G9A 6A7",
    country: "Canada",
  },
  phone: "+1 819 555 0199",
  email: "operations@ares.world",
  nav: [
    { label: "Paradigm", href: "/dev_ares/#concept" },
    { label: "Capabilities", href: "/dev_ares/#tasting" },
    { label: "Oversight", href: "/dev_ares/#chef" },
    { label: "Posture", href: "/dev_ares/#interior" },
  ],
  reservation: {
    formAction: "mailto:operations@ares.world",
    method: "post",
    note: "Replace the mailto action with an encrypted webhook or secure backend endpoint when going live.",
  },
  hours: {
    serviceDays: "Mon - Fri",
    seatings: "By Appointment Only",
    closed: "Sat, Sun",
    schema: {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
  },
  // Cet objet est requis par src/pages/index.astro pour les balises SEO de l'ancien thème restaurant
  restaurant: {
    priceRange: "N/A",
    cuisine: ["Operational Security", "Corporate Intelligence"],
  },
  effects: {
    reveal: true,
  },
  social: [
    { label: "GitHub", href: "https://github.com/gogoulet/dev_ares/" },
    { label: "Signal", href: "https://signal.org/" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
