export type Locale = "en" | "pl";

const en = {
  nav: {
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    downloadCv: "Download CV",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    main: "Main",
    language: "Language",
    seeSkills: "See skills",
  },
  hero: {
    greeting: "Hello, I'm",
    p1: "I'm a **Frontend & Full-Stack Developer** with **2 years of commercial experience** building modern web applications with **JavaScript, TypeScript, React, Next.js, Django, and Python**.",
    p2: "I combine **software development with UI/UX design** to build **responsive, user-friendly web experiences**. I hold a Bachelor of Science in Informatics and am currently completing university-level studies in Computer Science and Informatics through freestanding courses at Linnaeus University.",
  },
  sections: {
    workExperience: "Work experience",
    education: "Education",
    skillsTools: "Skills & tools",
    projects: "Projects",
    extraExperience: "Extra experience",
    languagesTitle: "Languages",
    contactTitle: "Let’s connect.",
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
    empty: "No projects yet.",
  },
  projectDetail: {
    back: "← Back to projects",
    notFound: "Project not found",
    notFoundLead: "We couldn't find a project at this address.",
    loadError: "Could not load this project.",
    overview: "Overview",
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
      university: {
        title:
          "University Studies in Computer Science & Informatics - Current Student",
        period: "2026 - Present",
        location: "Remote",
      },
      degree: {
        title:
          "Bachelor of Science in Informatics (Graphic Design & Web Development)",
      },
    },
    work: {
      "procforce-intern": {
        role: "Full-Stack Developer Intern",
        period: "06.2026 - Present",
        location: "Remote",
        bullets: [
          "Built a full-stack QR restaurant ordering and management platform using React, TypeScript, and Prisma - covering both frontend and backend API.",
          "Redesigned a responsive basketball-team website using React and TypeScript.",
          "Collaborated with product managers, designers, and developers to deliver client projects; tracked GitHub issues and contributed to debugging and automated/manual testing.",
        ],
      },
      "omnilexia-intern": {
        role: "Full-Stack, Graphic and UX/UI Design, Digital Marketing Intern",
        period: "02.2024 - 06.2024",
        location: "Remote",
        bullets: [
          "Built and improved web features using React, Django, Python, and TypeScript, including REST APIs.",
          "Designed UX/UI and prototypes in Figma and created marketing assets with Adobe Creative Suite, Canva, and Figma.",
          "Maintained code quality, documentation, and participated in code reviews.",
        ],
      },
      "omnilexia-fe": {
        role: "Junior Full-Stack Developer",
        period: "06.2024 - 06.2026",
        location: "Remote",
        bullets: [
          "Developed and maintained features for a legal-tech SaaS platform using React, Next.js, TypeScript, and Tailwind CSS.",
          "Implemented Django and Django REST Framework APIs and managed PostgreSQL database design and integration.",
          "Debugged, refactored, and optimized code, improving performance and maintainability.",
          "Wrote and maintained automated tests using Playwright, Cypress, and Behave.",
          "Participated in Agile ceremonies, code reviews, and collaborated with cross-functional teams.",
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
      en: { name: "English", level: "B2" },
    },
  },
};

type LocaleShape<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends readonly string[]
      ? readonly string[]
      : LocaleShape<T[K]>;
};

const pl: LocaleShape<typeof en> = {
  nav: {
    experience: "Doświadczenie",
    projects: "Projekty",
    contact: "Kontakt",
    email: "E-mail",
    github: "GitHub",
    linkedin: "LinkedIn",
    downloadCv: "Pobierz CV",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    main: "Główne",
    language: "Język",
    seeSkills: "Zobacz umiejętności",
  },
  hero: {
    greeting: "Cześć, jestem",
    p1: "Jestem **Frontend & Full-Stack Developer** z **ponad 2-letnim doświadczeniem komercyjnym** w tworzeniu nowoczesnych aplikacji webowych w **JavaScript, TypeScript, React, Next.js, Django i Python**.",
    p2: "Łączę **rozwój oprogramowania z projektowaniem UI/UX**, aby tworzyć **responsywne i przyjazne dla użytkownika doświadczenia webowe**. Posiadam licencjat z informatyki, a obecnie kontynuuję studia uniwersyteckie z informatyki w formie kursów freestanding na Uniwersytecie Linneusza.",
  },
  sections: {
    workExperience: "Doświadczenie zawodowe",
    education: "Edukacja",
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
    empty: "Brak projektów.",
  },
  projectDetail: {
    back: "← Wróć do projektów",
    notFound: "Nie znaleziono projektu",
    notFoundLead: "Nie ma projektu pod tym adresem.",
    loadError: "Nie udało się załadować tego projektu.",
    overview: "Przegląd",
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
      university: {
        title:
          "Studia uniwersyteckie z informatyki (Computer Science & Informatics) - aktywna studentka",
        period: "2026 - obecnie",
        location: "Zdalnie",
      },
      degree: {
        title:
          "Licencjat z informatyki (projektowanie graficzne i tworzenie stron internetowych)",
      },
    },
    work: {
      "procforce-intern": {
        role: "Stażystka Full-Stack Developer",
        period: "06.2026 - obecnie",
        location: "Zdalnie",
        bullets: [
          "Zbudowałam pełnostackową platformę do zamawiania i zarządzania restauracją przez kod QR, korzystając z React, TypeScript i Prisma - obejmującą zarówno frontend, jak i backend API.",
          "Przeprojektowałam responsywną stronę internetową drużyny koszykarskiej, korzystając z React i TypeScript.",
          "Współpracowałam z product managerami, projektantami i developerami przy realizacji projektów klienckich; śledziłam zgłoszenia w GitHubie oraz przyczyniłam się do debugowania i testów automatycznych oraz manualnych.",
        ],
      },
      "omnilexia-intern": {
        role: "Stażystka Full-Stack, grafiki i projektowania UX/UI oraz marketingu cyfrowego",
        period: "02.2024 - 06.2024",
        location: "Zdalnie",
        bullets: [
          "Budowałam i ulepszałam funkcjonalności webowe, korzystając z React, Django, Pythona i TypeScript, w tym z REST API.",
          "Projektowałam UX/UI oraz prototypy w Figmie i tworzyłam materiały marketingowe w Adobe Creative Suite, Canva i Figmie.",
          "Dbałam o jakość kodu, dokumentację oraz uczestniczyłam w code review.",
        ],
      },
      "omnilexia-fe": {
        role: "Junior Full-Stack Developer",
        period: "06.2024 - 06.2026",
        location: "Zdalnie",
        bullets: [
          "Rozwijałam i utrzymywałam funkcjonalności platformy SaaS typu legal-tech, korzystając z React, Next.js, TypeScript i Tailwind CSS.",
          "Implementowałam API w Django i Django REST Framework oraz zarządzałam projektowaniem i integracją bazy danych PostgreSQL.",
          "Debugowałam, refaktoryzowałam i optymalizowałam kod, poprawiając wydajność i łatwość utrzymania.",
          "Pisałam i utrzymywałam testy automatyczne w Playwright, Cypress i Behave.",
          "Uczestniczyłam w ceremoniach Agile, code review oraz współpracowałam z zespołami wielofunkcyjnymi.",
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
      en: { name: "Angielski", level: "B2" },
    },
  },
};

export const translations = { en, pl };

export type TranslationTree = typeof en;
