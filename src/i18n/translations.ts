export type Locale = "en" | "pl";

const en = {
  nav: {
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    main: "Main",
    language: "Language",
    seeSkills: "See skills",
  },
  hero: {
    greeting: "Hello, I'm",
    p1: {
      role: "Full-stack Developer",
      with: "with",
      experience: "nearly 3 years of experience",
      building: "building",
      domain: "AI-powered legal-tech",
      products: "products.",
      stackLead: "I work mainly with",
      stack: "React, TypeScript, and Django",
      frontend: ", with a particular focus on the frontend.",
    },
    p2: {
      intro: "I combine technical skills with a",
      design: "strong eye for design",
      emDash: "- I spent",
      studies:
        "over 3 years studying software development and graphic design in Sweden",
      foundation: ", which gave me a solid foundation in",
      ux: "UX/UI",
      outro: "and a user-centered approach.",
    },
    p3: {
      intro: "I'm based in Poland and open to",
      opportunities: "remote, hybrid, and international opportunities",
      end: ".",
    },
  },
  sections: {
    workExperience: "Work experience",
    education: "Education",
    courses: "Courses",
    skillsTools: "Skills & tools",
    projects: "Projects",
    extraExperience: "Extra experience",
    languagesTitle: "Languages",
    contactTitle: "Don't hesitate to contact me.",
  },
  skills: {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools & workflow",
    design: "Design",
  },
  projects: {
    programming: "Programming",
    design: "UX/UI & graphic design",
    viewProject: "View project",
    viewProjectAria: "View {title}",
    loading: "Loading projects",
    error: "Could not load projects. Is the API running?",
    empty: "No projects yet. Add projects in the Django admin.",
  },
  projectDetail: {
    back: "← Back to projects",
    notFound: "Project not found",
    notFoundLead: "We couldn't find a project at this address.",
    loadError: "Could not load this project.",
    overview: "Overview",
    problem: "Problem",
    solution: "Solution",
    challenge: "Challenge",
    result: "Result",
    document: "Document",
    stack: "Stack",
    visitProject: "Visit project →",
    viewGithub: "View on GitHub",
    viewPdf: "View PDF",
    openPdf: "Open PDF →",
    pdfPreviewError:
      "Couldn't preview this PDF. Use the link below to open it.",
    pdfLoading: "Loading PDF…",
    additionalView: "additional view",
    pdfTitle: "PDF document",
  },
  portfolio: {
    education: {
      degree: {
        title: "Graphic Design & Web Development, Bachelor in Informatics",
      },
      "course-1": { title: "Code transformation and interpretation" },
      "course-2": { title: "Systems Modeling and Simulation" },
      "course-3": { title: "Machine learning" },
      "course-4": { title: "Lean startup" },
    },
    work: {
      "omnilexia-intern": {
        role: "UX/UI Design, Digital Marketing and Fullstack Engineer Intern",
      },
      "omnilexia-fe": {
        role: "Fullstack Engineer",
        bullets: [
          "Develop and maintain both frontend applications and backend APIs, delivering new features across the full technology stack.",
          "Build responsive and user-friendly interfaces using modern frontend technologies.",
          "Investigate, troubleshoot, and resolve bugs, performance bottlenecks, and production issues.",
          "Actively participate in code reviews to ensure code quality, maintainability, security, and adherence to development standards.",
          "Collaborate with designers, product owners, and other developers to deliver high-quality software solutions.",
          "Refactor and improve existing codebases to enhance performance, scalability, and long-term maintainability.",
          "Participate in feature planning, technical discussions, and solution design throughout the development lifecycle.",
        ],
      },
    },
    extra: {
      justice: {
        role: "Graphic Designer",
      },
      promoter: {
        role: "Student promoter",
      },
    },
    spokenLanguages: {
      pl: { name: "Polish", level: "Native" },
      en: { name: "English", level: "B2 / C1" },
    },
  },
};

const pl = {
  nav: {
    experience: "Doświadczenie",
    projects: "Projekty",
    contact: "Kontakt",
    email: "E-mail",
    github: "GitHub",
    linkedin: "LinkedIn",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    main: "Główne",
    language: "Język",
    seeSkills: "Zobacz umiejętności",
  },
  hero: {
    greeting: "Cześć, jestem",
    p1: {
      role: "Full-stack Developer",
      with: "z",
      experience: "niemal 3-letnim doświadczeniem",
      building: "w tworzeniu",
      domain: "produktów legal-tech opartych na AI",
      products: ".",
      stackLead: "Na co dzień pracuję głównie w",
      stack: "React, TypeScript i Django",
      frontend: ", ze szczególnym naciskiem na warstwę frontendową.",
    },
    p2: {
      intro: "Łączę kompetencje techniczne z",
      design: "wyczuciem designu",
      emDash: "- przez",
      studies:
        "ponad 3 lata studiowałam software development, grafikę i projektowanie w Szwecji",
      foundation: ", co dało mi solidne podstawy w",
      ux: "UX/UI",
      outro: "i podejściu user-centered.",
    },
    p3: {
      intro: "Mieszkam w Polsce i jestem otwarta na",
      opportunities: "pracę zdalną, hybrydową oraz możliwości za granicą",
      end: ".",
    },
  },
  sections: {
    workExperience: "Doświadczenie zawodowe",
    education: "Edukacja",
    courses: "Kursy",
    skillsTools: "Umiejętności i narzędzia",
    projects: "Projekty",
    extraExperience: "Dodatkowe doświadczenie",
    languagesTitle: "Języki",
    contactTitle: "Chętnie odpowiem na wiadomość.",
  },
  skills: {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Narzędzia i workflow",
    design: "Design",
  },
  projects: {
    programming: "Programowanie",
    design: "UX/UI i grafika",
    viewProject: "Zobacz projekt",
    viewProjectAria: "Zobacz projekt {title}",
    loading: "Ładowanie projektów",
    error: "Nie udało się załadować projektów. Sprawdź, czy API działa.",
    empty: "Brak projektów. Dodaj je w panelu Django admin.",
  },
  projectDetail: {
    back: "← Wróć do projektów",
    notFound: "Nie znaleziono projektu",
    notFoundLead: "Nie ma projektu pod tym adresem.",
    loadError: "Nie udało się załadować tego projektu.",
    overview: "Przegląd",
    problem: "Problem",
    solution: "Rozwiązanie",
    challenge: "Wyzwanie",
    result: "Efekt",
    document: "Dokument",
    stack: "Stack",
    visitProject: "Odwiedź projekt →",
    viewGithub: "Zobacz na GitHubie",
    viewPdf: "Zobacz PDF",
    openPdf: "Otwórz PDF →",
    pdfPreviewError:
      "Nie udało się wyświetlić podglądu PDF. Użyj linku poniżej, aby go otworzyć.",
    pdfLoading: "Ładowanie PDF…",
    additionalView: "dodatkowy widok",
    pdfTitle: "dokument PDF",
  },
  portfolio: {
    education: {
      degree: {
        title: "Grafika i tworzenie stron WWW, licencjat z informatyki",
      },
      "course-1": { title: "Transformacja i interpretacja kodu" },
      "course-2": { title: "Modelowanie i symulacja systemów" },
      "course-3": { title: "Uczenie maszynowe" },
      "course-4": { title: "Lean startup" },
    },
    work: {
      "omnilexia-intern": {
        role: "Stażystka ds. UX/UI, marketingu cyfrowego i full-stack",
      },
      "omnilexia-fe": {
        role: "Full-stack Developer",
        bullets: [
          "Rozwijam i utrzymuję aplikacje frontendowe oraz API backendowe, dostarczając nowe funkcjonalności w całym stacku technologicznym.",
          "Tworzę responsywne i intuicyjne interfejsy z wykorzystaniem nowoczesnych technologii frontendowych.",
          "Diagnozuję i naprawiam błędy, problemy z wydajnością oraz incydenty na produkcji.",
          "Aktywnie uczestniczę w code review, dbając o jakość kodu, bezpieczeństwo i standardy zespołu.",
          "Współpracuję z projektantami, product ownerami i developerami przy dostarczaniu wysokiej jakości rozwiązań.",
          "Refaktoryzuję i usprawniam istniejący kod, poprawiając wydajność, skalowalność i łatwość utrzymania.",
          "Biorę udział w planowaniu funkcji, dyskusjach technicznych i projektowaniu rozwiązań na każdym etapie developmentu.",
        ],
      },
    },
    extra: {
      justice: {
        role: "Graficzka",
      },
      promoter: {
        role: "Promotorka studencka",
      },
    },
    spokenLanguages: {
      pl: { name: "Polski", level: "Ojczysty" },
      en: { name: "Angielski", level: "B2 / C1" },
    },
  },
};

export const translations = { en, pl };

export type TranslationTree = typeof en;
