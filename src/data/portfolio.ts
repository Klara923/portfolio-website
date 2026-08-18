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

export const education: EducationEntry[] = [
  {
    id: "university",
    title:
      "University Studies in Computer Science & Informatics - Current Student",
    period: "2026 - Present",
    institution:
      "Linnaeus University, Malmö University, Sweden - Freestanding University Courses",
    location: "Remote",
  },
  {
    id: "degree",
    title:
      "Bachelor of Science in Informatics (Graphic Design & Web Development)",
    period: "2022 - 2025",
    institution: "Jönköping University, Sweden",
  },
];

export const workExperience: ExperienceEntry[] = [
  {
    id: "procforce-intern",
    organization: "Procforce Software House",
    period: "06.2026 - Present",
    role: "",
    url: "https://procforce.pl/",
  },
  {
    id: "omnilexia-fe",
    organization: "Omnilexia",
    period: "06.2024 - 06.2026",
    role: "",
    url: "https://omnilexia.com",
  },
  {
    id: "omnilexia-intern",
    organization: "Omnilexia",
    period: "02.2024 - 06.2024",
    role: "",
    url: "https://omnilexia.com",
  },
];

export const extraExperience: ExperienceEntry[] = [
  {
    id: "justice",
    organization: "E-sport student association Justice",
    period: "2022 - 2024",
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
  { id: "en", name: "English", level: "B2" },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      "React",
      "JavaScript ES6+",
      "TypeScript",
      "Next.js",
      "HTML5 & CSS3",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "Node.js",
      "Prisma",
      "REST APIs",
      "SQL",
    ],
  },
  {
    id: "tools",
    label: "Tools & workflow",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Swagger",
      "CI/CD",
      "Agile",
      "Scrum",
      "Code Review",
      "Refactoring",
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
