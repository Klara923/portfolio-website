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
    // **text** renders as <strong> via RichText
    p1: "**Full-stack Developer** with **over 2 years of experience** coding **SaaS**. I work mainly with **React, TypeScript, and Django**, with a particular focus on the frontend.",
    p2: "I combine technical skills with a **strong eye for design** — I spent **over 3 years studying software development and graphic design in Sweden**, which gave me a solid foundation in **UX/UI** and a user-centered approach.",
    p3: "I'm based in Poland and open to **remote, hybrid, and international opportunities**.",
  },
  sections: {
    workExperience: "Work experience",
    education: "Education",
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
      masters: {
        title: "Master of Science in Software Engineering",
        period: "2025 – Present",
        location: "Växjö, Sweden, Remotely",
      },
      degree: {
        title: "Graphic Design & Web Development, Bachelor in Informatics",
      },
    },
    work: {
      "procforce-intern": {
        role: "Full-stack Developer Intern",
        period: "06.2026 – Present",
        bullets: [
          "Redesigning company and client websites from Figma designs and implementing them in code with a focus on responsiveness and accessibility.",
          "Developing a QR ordering system and restaurant management application with React, TypeScript, and Prisma, covering both frontend and backend API.",
          "Building and integrating interactive 3D product configurators in web applications.",
          "Collaborating with designers and the development team on client project delivery.",
        ],
      },
      "omnilexia-intern": {
        role: "UX/UI, Digital Marketing and Full-stack Intern",
      },
      "omnilexia-fe": {
        role: "Full-stack Developer",
        bullets: [
          "Development and maintenance of the web application and API, including implementation of new features on both frontend and backend.",
          "Building responsive user interfaces in React and TypeScript.",
          "Debugging and fixing issues along with application performance optimization.",
          "Participation in code reviews and maintaining consistent code quality standards.",
          "Refactoring existing components and modules to improve readability and maintainability.",
          "Collaboration with designers, product owners, and the development team during planning and implementation of new features.",
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
    p1: "**Full-stack Developer** z **ponad 2-letnim doświadczeniem** w kodowaniu **SaaS**. Na co dzień pracuję głównie w **React, TypeScript i Django**, ze szczególnym naciskiem na warstwę frontendową.",
    p2: "Łączę kompetencje techniczne z **wyczuciem designu** — przez **ponad 3 lata studiowałam software development, grafikę i projektowanie w Szwecji**, co dało mi solidne podstawy w **UX/UI** i podejściu user-centered.",
    p3: "Mieszkam w Polsce i jestem otwarta na **pracę zdalną, hybrydową oraz możliwości za granicą**.",
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
      masters: {
        title: "Master of Science in Software Engineering",
        period: "2025 – obecnie",
        location: "Växjö, Szwecja, zdalnie",
      },
      degree: {
        title: "Graphic Design and Web Development, licencjat z informatyki",
      },
    },
    work: {
      "procforce-intern": {
        role: "Stażystka Full-stack Developer",
        period: "06.2026 – obecnie",
        bullets: [
          "Przeprojektowywanie stron internetowych firm i klientów na podstawie projektów z Figma oraz wdrażanie ich w kodzie z dbałością o responsywność i dostępność.",
          "Rozwój systemu zamawiania przez kod QR oraz aplikacji do zarządzania restauracją z wykorzystaniem React, TypeScript i Prisma, obejmujący frontend oraz backend API.",
          "Tworzenie i integracja interaktywnych konfiguratorów produktów 3D w aplikacjach webowych.",
          "Współpraca z projektantami i zespołem developerskim przy realizacji projektów dla klientów.",
        ],
      },
      "omnilexia-intern": {
        role: "Stażystka UX/UI, marketingu cyfrowego i Full-stack",
      },
      "omnilexia-fe": {
        role: "Full-stack Developer",
        bullets: [
          "Rozwój i utrzymanie aplikacji webowej oraz API, obejmujące implementację nowych funkcjonalności po stronie frontendu i backendu.",
          "Tworzenie responsywnych interfejsów użytkownika w React i TypeScript.",
          "Diagnostyka i usuwanie błędów oraz optymalizacja wydajności aplikacji.",
          "Udział w code review i utrzymywaniu spójnych standardów jakości kodu.",
          "Refaktoryzacja istniejących komponentów i modułów w celu poprawy czytelności oraz łatwości dalszego rozwoju.",
          "Współpraca z projektantami, product ownerami i zespołem developerskim podczas planowania oraz wdrażania nowych funkcjonalności.",
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
