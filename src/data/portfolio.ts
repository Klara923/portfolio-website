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
  location?: string;
  description?: string;
  bullets?: string[];
  url?: string;
};

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

export const workExperience: ExperienceEntry[] = [
  {
    id: "procforce-intern",
    organization: "Procforce Software House",
    period: "06.2026 – Present",
    role: "Full-stack Developer Intern",
    url: "https://procforce.pl/",
    bullets: [
      "Redesigning company and client websites from Figma designs and implementing them in code with a focus on responsiveness and accessibility.",
      "Developing a QR ordering system and restaurant management application with React, TypeScript, and Prisma, covering both frontend and backend API.",
      "Building and integrating interactive 3D product configurators in web applications.",
      "Collaborating with designers and the development team on client project delivery.",
    ],
  },
  {
    id: "omnilexia-fe",
    organization: "Omnilexia",
    period: "06.2024 – 09.2026",
    role: "Full-stack Developer",
    url: "https://omnilexia.com",
    bullets: [
      "Development and maintenance of the web application and API, including implementation of new features on both frontend and backend.",
      "Building responsive user interfaces in React and TypeScript.",
      "Debugging and fixing issues along with application performance optimization.",
      "Participation in code reviews and maintaining consistent code quality standards.",
      "Refactoring existing components and modules to improve readability and maintainability.",
      "Collaboration with designers, product owners, and the development team during planning and implementation of new features.",
    ],
  },
  {
    id: "omnilexia-intern",
    organization: "Omnilexia",
    period: "02.2024 – 06.2024",
    role: "UX/UI, Digital Marketing and Full-stack Intern",
    url: "https://omnilexia.com",
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
