import type {
  EducationEntry,
  ExperienceEntry,
  LanguageEntry,
  SkillCategory,
} from "@/types/portfolio";

export type {
  EducationEntry,
  ExperienceEntry,
  LanguageEntry,
  SkillCategory,
} from "@/types/portfolio";

export const site = {
  name: "Klara",
  contact: {
    email: "klara.swiecicka@hotmail.com",
    github: "https://github.com/Klara923",
    linkedin: "https://www.linkedin.com/in/klaramariaswiecicka",
    cv: "/CV_Klara.pdf",
  },
};

/** Structural education entries — localized titles/periods live in i18n. */
export const education: EducationEntry[] = [
  {
    id: "masters",
    title: "Master of Science in Software Engineering",
    period: "2025 – Present",
    institution: "Linnaeus University",
    location: "Växjö, Sweden, Remotely",
  },
  {
    id: "degree",
    title: "Graphic Design & Web Development, Bachelor in Informatics",
    period: "2022 – 2025",
    institution: "Jönköping University",
    location: "Sweden",
  },
];

/** Structural work entries — localized roles/bullets live in i18n. */
export const workExperience: ExperienceEntry[] = [
  {
    id: "procforce-intern",
    organization: "Procforce Software House",
    period: "06.2026 – Present",
    role: "",
    url: "https://procforce.pl/",
  },
  {
    id: "omnilexia-fe",
    organization: "Omnilexia",
    period: "06.2024 – 08.2026",
    role: "",
    url: "https://omnilexia.com",
  },
  {
    id: "omnilexia-intern",
    organization: "Omnilexia",
    period: "02.2024 – 06.2024",
    role: "",
    url: "https://omnilexia.com",
  },
];

/** Structural extra entries — localized roles live in i18n. */
export const extraExperience: ExperienceEntry[] = [
  {
    id: "justice",
    organization: "E-sport student association Justice",
    period: "2022 – 2024",
    role: "",
  },
  {
    id: "promoter",
    organization: "Student promoter at University",
    period: "2023",
    role: "",
  },
];

export const languages: LanguageEntry[] = [
  { id: "pl", name: "Polish", level: "Native" },
  { id: "en", name: "English", level: "B2 / C1" },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "HTML & CSS",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Python", "Django", "REST APIs"],
  },
  {
    id: "tools",
    label: "Tools & workflow",
    skills: [
      "Git",
      "Docker",
      "Postman",
      "Swagger",
      "Automated testing (End-to-end testing using Playwright, Cypress, and Behave BDD)",
      "Practical use of AI - Cursor, Claude Code",
    ],
  },
  {
    id: "design",
    label: "Design",
    skills: [
      "Figma",
      "Adobe Suite (Photoshop, Illustrator, InDesign, Premiere Pro)",
      "Canva",
      "Graphic Design",
      "UX/UI Design",
    ],
  },
];
