import type { Locale } from "./translations";

export type ProjectContent = {
  title: string;
  shortDescription: string;
  description: string;
};

export const projectContentEn: Record<string, ProjectContent> = {
  "giarddesign-website": {
    title: "GiardDesign Website",
    shortDescription:
      "Responsive marketing website for a garden design studio, built with Vue and Tailwind CSS. Includes service sections, project gallery, company info and contact.",
    description:
      "Frontend implementation of a marketing website for a garden design studio. The site presents the brand offer (design, visualizations and realizations), company story and a masonry project gallery. Built with Vue 3, Vite and Tailwind CSS.",
  },
  "pixel-cat-branding": {
    title: "Pixel Cat - Branding",
    shortDescription:
      "Branding project for a fictional company called Pixel Cat, including logo variations, an animated logo, a color palette, typography, graphic patterns, and presentation mockups.",
    description:
      "Branding project created for a fictional company called Pixel Cat. It includes logo variations, an animated logo, a color palette, typography, graphic patterns, and presentation mockups. The goal was to build a consistent visual identity across print and digital media.",
  },
  "labyrinth-of-souls-adventure-javascript-game": {
    title: '"Labyrinth of Souls" Adventure JavaScript Game',
    shortDescription:
      "Story-driven adventure game built in JavaScript. The game combines dialogue, exploration and several minigames, while all graphics were designed from scratch specifically for the project.",
    description:
      "Story-driven adventure game built in JavaScript. The game combines dialogue, exploration and several minigames, while all graphics were designed from scratch specifically for the project.",
  },
  "lunalander-cat-lander-game": {
    title: "Lunalander (Cat lander) game",
    shortDescription:
      "A small arcade game inspired by Lunar Lander. Control a floating cat and land safely on its bed while avoiding obstacles and an unfriendly dog.",
    description:
      "A small arcade game inspired by Lunar Lander. Control a floating cat and land safely on its bed while avoiding obstacles and an unfriendly dog.",
  },
  "graphic-design-portfolio": {
    title: "Graphic Design Portfolio",
    shortDescription:
      "A collection of graphic design projects covering branding, motion design, AI-assisted workflows and 3D graphics. The portfolio includes experiments created in Spline, Illustrator, Photoshop and p5.js, as well as a complete rebranding case study for EchoMed AI.",
    description:
      "The portfolio brings together several university and personal projects covering branding, editorial design, AI-assisted graphics, motion design and 3D. The largest project is a complete visual identity for EchoMed AI, from concept development to logo, typography, color system and animated assets.",
  },
  "tokyo-magazine": {
    title: "Tokyo magazine",
    shortDescription:
      "University team project focused on designing and publishing a magazine about Tokyo. The project covered research, editorial design, typography, image editing and print preparation.",
    description:
      "University team project focused on designing and publishing a magazine about Tokyo. The project covered research, editorial design, typography, image editing and print preparation.",
  },
  "ai-powered-facial-emotion-recognition-with-3d-hand-driven-painting-application":
    {
      title: "AI Painting",
      shortDescription:
        "Interactive web application that combines facial emotion recognition with 3D hand tracking. Users can paint using hand gestures while facial expressions influence the generated artwork in real time.",
      description:
        "How to test this application\n\nOpen the project and allow access to your webcam when prompted. Pinch your index finger and thumb together to start drawing. Try making different facial expressions and observe how they affect the painting. Please note that it may take a few moments for the application to fully load.\n\nInteractive application combining real-time facial emotion recognition with 3D hand tracking. Users draw using hand gestures, while detected emotions influence the painting process. The project integrates multiple AI models into a single creative experience.",
    },
  "empowherment-platform": {
    title: "EmpowHERment Platform",
    shortDescription:
      "UX/UI concept for a professional networking platform supporting women through mentoring, networking and career development. Created during an international design sprint.",
    description:
      "I was responsible for UX/UI design, including user flows, wireframes, a high-fidelity Figma prototype and the final pitch presentation. The project addresses UN Sustainable Development Goal 5: Gender Equality.",
  },
  "creative-coding-projects": {
    title: "Creative Coding Projects",
    shortDescription:
      "A collection of interactive visual experiments built with JavaScript and p5.js. The projects explore generative graphics, animation, sound and user interaction, with several experiments also incorporating AI-generated content.",
    description:
      "A collection of interactive visual experiments built with JavaScript and p5.js. The projects explore generative graphics, animation, sound and user interaction, with several experiments also incorporating AI-generated content.",
  },
  "art-gallery-e-commerce-website": {
    title: "Art Gallery E-Commerce Website",
    shortDescription:
      "University group project involving the design and development of an e-commerce website for a local artist. I designed the interface in Figma and implemented it using HTML, CSS and JavaScript.",
    description:
      "University group project involving the design and development of an e-commerce website for a local artist. I designed the interface in Figma and implemented it using HTML, CSS and JavaScript.",
  },
};

export const projectContentPl: Record<string, ProjectContent> = {
  "giarddesign-website": {
    title: "Strona GiardDesign",
    shortDescription:
      "Responsywna strona marketingowa studia projektowania ogrodów, zbudowana w Vue i Tailwind CSS. Zawiera ofertę, galerię realizacji, informacje o firmie i kontakt.",
    description:
      "Frontend strony marketingowej dla studia projektowania ogrodów. Serwis prezentuje ofertę (projekty, wizualizacje i realizacje), historię firmy oraz galerię realizacji w układzie masonry. Zbudowana w Vue 3, Vite i Tailwind CSS.",
  },
  "pixel-cat-branding": {
    title: "Pixel Cat - Branding",
    shortDescription:
      "Projekt identyfikacji wizualnej dla fikcyjnej marki Pixel Cat — warianty logo, animacja logo, paleta kolorów, typografia, wzory graficzne i mockupy.",
    description:
      "Projekt identyfikacji wizualnej dla fikcyjnej marki Pixel Cat. Obejmuje warianty logo, animację logo, paletę kolorów, typografię, wzory graficzne oraz mockupy prezentujące zastosowanie identyfikacji w różnych materiałach.",
  },
  "labyrinth-of-souls-adventure-javascript-game": {
    title: "Gra przygodowa „Labyrinth of Souls” w JavaScript",
    shortDescription:
      "Gra przygodowa napisana w JavaScript, oparta na dialogach, eksploracji i kilku minigrach. Wszystkie elementy graficzne zostały zaprojektowane specjalnie na potrzeby projektu.",
    description:
      "Gra przygodowa napisana w JavaScript, oparta na dialogach, eksploracji i kilku minigrach. Wszystkie elementy graficzne zostały zaprojektowane specjalnie na potrzeby projektu.",
  },
  "lunalander-cat-lander-game": {
    title: "Lunalander (gra z kotem)",
    shortDescription:
      "Prosta gra inspirowana klasycznym Lunar Lander. Zadaniem gracza jest bezpieczne wylądowanie kotem na jego legowisku, omijając przeszkody i psa.",
    description:
      "Prosta gra inspirowana klasycznym Lunar Lander. Zadaniem gracza jest bezpieczne wylądowanie kotem na jego legowisku, omijając przeszkody i psa.",
  },
  "graphic-design-portfolio": {
    title: "Portfolio projektów graficznych",
    shortDescription:
      "Zbiór projektów graficznych obejmujących branding, motion design, workflow wspierany AI i grafikę 3D. Portfolio zawiera prace stworzone w Spline, Illustratorze, Photoshopie i p5.js oraz kompletny case study rebrandingu EchoMed AI.",
    description:
      "Portfolio łączy kilka projektów uniwersyteckich i osobistych z zakresu brandingu, designu redakcyjnego, grafiki wspieranej AI, motion designu i 3D. Największym projektem jest kompletna identyfikacja wizualna EchoMed AI — od koncepcji, przez logo, typografię i system kolorów, po animowane materiały.",
  },
  "tokyo-magazine": {
    title: "Magazyn Tokyo",
    shortDescription:
      "Zespołowy projekt realizowany na studiach, którego celem było zaprojektowanie i wydanie magazynu o Tokio. Obejmował research, skład publikacji, typografię, edycję zdjęć oraz przygotowanie materiałów do druku.",
    description:
      "Zespołowy projekt realizowany na studiach, którego celem było zaprojektowanie i wydanie magazynu o Tokio. Obejmował research, skład publikacji, typografię, edycję zdjęć oraz przygotowanie materiałów do druku.",
  },
  "ai-powered-facial-emotion-recognition-with-3d-hand-driven-painting-application":
    {
      title: "Malowanie z AI",
      shortDescription:
        "Interaktywna aplikacja webowa łącząca rozpoznawanie emocji twarzy ze śledzeniem dłoni w 3D. Użytkownik maluje gestami, a wykrywane emocje wpływają na tworzoną grafikę w czasie rzeczywistym.",
      description:
        "Jak przetestować aplikację\n\nOtwórz projekt i zezwól na dostęp do kamery, gdy zostaniesz o to poproszony/a. Złącz palec wskazujący z kciukiem, aby rozpocząć rysowanie. Spróbuj wykonywać różne miny i obserwuj, jak wpływają na malowanie. Pamiętaj, że pełne załadowanie aplikacji może chwilę potrwać.\n\nInteraktywna aplikacja łącząca rozpoznawanie emocji twarzy w czasie rzeczywistym ze śledzeniem gestów dłoni w 3D. Użytkownik rysuje gestami, a wykryte emocje wpływają na proces malowania. Projekt integruje kilka modeli AI w jednej aplikacji.",
    },
  "empowherment-platform": {
    title: "Platforma EmpowHERment",
    shortDescription:
      "Koncepcja UX/UI platformy networkingowej wspierającej kobiety przez mentoring, networking i rozwój kariery. Powstała podczas międzynarodowego design sprintu.",
    description:
      "Odpowiedzialność za projekt UX/UI: user flow, wireframe'y, prototyp w Figmie i finalna prezentacja pitch. Projekt odnosi się do Celu Zrównoważonego Rozwoju ONZ nr 5: Równość płci.",
  },
  "creative-coding-projects": {
    title: "Projekty creative coding",
    shortDescription:
      "Zbiór eksperymentów z zakresu creative coding stworzonych w JavaScript i p5.js. Projekty wykorzystują grafikę generatywną, animację, dźwięk oraz interakcję użytkownika, a część z nich eksperymentuje również z narzędziami AI.",
    description:
      "Zbiór eksperymentów z zakresu creative coding stworzonych w JavaScript i p5.js. Projekty wykorzystują grafikę generatywną, animację, dźwięk oraz interakcję użytkownika, a część z nich eksperymentuje również z narzędziami AI.",
  },
  "art-gallery-e-commerce-website": {
    title: "Sklep internetowy galerii sztuki",
    shortDescription:
      "Zespołowy projekt studencki polegający na zaprojektowaniu i stworzeniu sklepu internetowego dla lokalnej artystki. Interfejs został przygotowany w Figmie, a następnie wdrożony z wykorzystaniem HTML, CSS i JavaScript.",
    description:
      "Zespołowy projekt studencki polegający na zaprojektowaniu i stworzeniu sklepu internetowego dla lokalnej artystki. Interfejs został przygotowany w Figmie, a następnie wdrożony z wykorzystaniem HTML, CSS i JavaScript.",
  },
};

export function getProjectContent(
  locale: Locale,
  slug: string,
): ProjectContent | undefined {
  const map = locale === "pl" ? projectContentPl : projectContentEn;
  return map[slug];
}
