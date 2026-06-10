export type EducationEntry = {
  id: string;
  title: string;
  period: string;
  institution: string;
  location?: string;
};

export type ExperienceEntry = {
  id: string;
  organization: string;
  period: string;
  role: string;
  description?: string;
  bullets?: string[];
  url?: string;
};

export const site = {
  name: "Klara",
  contact: {
    email: "klara.swiecicka@hotmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
};

export const education: EducationEntry[] = [
  {
    id: "degree",
    title: "Graphic Design & Web Development, Bachelor in Informatics",
    period: "2022 – 2025",
    institution: "Jönköping University",
    location: "Sweden",
  },
  {
    id: "course-1",
    title: "Code transformation and interpretation",
    period: "2025",
    institution: "Linnaeus University (LNU)",
    location: "Sweden",
  },
  {
    id: "course-2",
    title: "Systems Modeling and Simulation",
    period: "2025",
    institution: "Linnaeus University (LNU)",
    location: "Sweden",
  },
  {
    id: "course-3",
    title: "Machine learning",
    period: "2026",
    institution: "Linnaeus University (LNU)",
    location: "Sweden",
  },
  {
    id: "course-4",
    title: "Lean startup",
    period: "2026",
    institution: "Linnaeus University (LNU)",
    location: "Sweden",
  },
];

export const workExperience: ExperienceEntry[] = [
  {
    id: "omnilexia-intern",
    organization: "Omnilexia",
    period: "02.2024 – 06.2024",
    role: "UX/UI Design, Digital Marketing and Fullstack Engineer Intern",
  },
  {
    id: "omnilexia-fe",
    organization: "Omnilexia",
    period: "06.2024 – 09.2026",
    role: "Fullstack Engineer",
    url: "https://omnilexia.com",
    bullets: [
      "Develop and maintain both frontend applications and backend APIs, delivering new features across the full technology stack.",
      "Build responsive and user-friendly interfaces using modern frontend technologies.",
      "Investigate, troubleshoot, and resolve bugs, performance bottlenecks, and production issues.",
      "Actively participating in code reviews to ensure code quality, maintainability, security, and adherence to development standards.",
      "Collaborate with designers, product owners, and other developers to deliver high-quality software solutions.",
      "Refactor and improve existing codebases to enhance performance, scalability, and long-term maintainability.",
      "Participate in feature planning, technical discussions, and solution design throughout the development lifecycle.",
    ],
  },
];

export const extraExperience: ExperienceEntry[] = [
  {
    id: "justice",
    organization: "E-sport student association Justice",
    period: "2022 – 2024",
    role: "Graphic Designer",
  },
  {
    id: "promoter",
    organization: "Student promoter at University",
    period: "2023",
    role: "Student promoter",
  },
];

export type LanguageEntry = {
  id: string;
  name: string;
  level: string;
};

export const languages: LanguageEntry[] = [
  { id: "pl", name: "Polish", level: "Native" },
  { id: "en", name: "English", level: "B2 / C1" },
];

export type SkillCategory = {
  id: "frontend" | "backend" | "tools" | "design";
  label: string;
  skills: string[];
};

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
