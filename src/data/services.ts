export interface Service {
  num: string;
  title: string;
  bullets: string[];
}

export const services: Service[] = [
  {
    num: "01",
    title: "WEBSITE DEVELOPMENT",
    bullets: ["Landing pages & profiles", "E-commerce storefronts", "SEO-ready architecture", "CMS integration"]
  },
  {
    num: "02",
    title: "CUSTOM APP DEV",
    bullets: ["Web apps (React, Laravel)", "iOS & Android", "API integrations", "Legacy migration"]
  },
  {
    num: "03",
    title: "TRAINING & TUTORING",
    bullets: ["ALROQ onboarding", "Digital literacy", "1-on-1 mentoring", "Post-training support"]
  },
  {
    num: "04",
    title: "TALENT RECRUITMENT",
    bullets: ["Candidate sourcing", "Interview coordination", "Tech & non-tech roles", "Retainer partnerships"]
  },
  {
    num: "05",
    title: "DIGITAL MARKETING",
    bullets: ["SEO & Local SEO", "Google & Meta Ads", "Social media management", "Content creation"]
  }
];
