import type { Locale } from "./translations";

export type ProjectContent = {
  title: string;
  shortDescription: string;
  description: string;
};

export const projectContentEn: Record<string, ProjectContent> = {
  "personal-portfolio": {
    title: "Portfolio Website",
    shortDescription:
      "A bilingual portfolio built with Next.js, TypeScript and SCSS modules, with typed i18n and a static project data layer.",
    description:
      "Personal portfolio website showcasing work experience, education, skills and selected projects. Built with Next.js, TypeScript and SCSS modules. Includes English/Polish localization, accessible navigation and a content model that keeps project structure separate from translated copy.",
  },
  "giarddesign-website": {
    title: "GiardDesign Website",
    shortDescription:
      "Responsive marketing website for a garden design studio. Includes service sections, project gallery, company info and contact.",
    description:
      "Frontend implementation of a marketing website for a garden design studio. Built with Vue and Vite with Tailwind CSS, the site presents the studio's services, a masonry project gallery, company story and a contact section, all wrapped in a clean, fully responsive layout. The design was provided by AdRespect as a recruitment task.",
  },
  "qr-menu-lumiere-restaurant": {
    title: "QR Menu - Lumière Restaurant",
    shortDescription:
      "QR menu and table-ordering app for a fine dining restaurant, built with React. Guests scan the code, browse dishes in four languages, order from the table and pay online, with BLIK or with the waiter.",
    description:
      "A QR menu and table-ordering application developed for Lumière, a fine dining restaurant. Guests scan the QR code on their table to open a mobile-first menu linked to their table number and selected language (PL, EN, DE, UA). They can browse dishes by category, view ingredients and allergen information, add custom notes such as “no onions”, and place orders directly from their table.\n\n\nOrders and status updates are synchronized in real time using Socket.IO. Staff can update an order through different stages - accepted, in preparation, ready, delivered, and paid - with changes immediately reflected on the guest’s screen. The application also supports waiter calls, bill requests, and payments through Stripe, BLIK via a card terminal, or cash, with optional tipping.\n\n\nBuilt with React and Vite, using client-side routing, a custom state management layer persisted in sessionStorage, and an in-house i18n dictionary. Developed during my internship at Procforce Software House.",
  },
  "pixel-cat-branding": {
    title: "Pixel Cat - Branding",
    shortDescription:
      "Branding project for a fictional company called Pixel Cat, including logo variations, an animated logo, a color palette, typography, graphic patterns, and presentation mockups.",
    description:
      "Individual branding project created for a fictional company called Pixel Cat. I developed the visual identity from concept to final presentation, creating logo variations, an animated logo, color palette, typography system, graphic patterns, and presentation mockups.\n\n\nThe goal was to build a cohesive and recognizable brand identity that could work consistently across both print and digital media. I focused on maintaining visual consistency across the different brand elements while exploring how the identity could be applied across a range of real-world materials and formats.",
  },
  "labyrinth-of-souls-adventure-javascript-game": {
    title: '"Labyrinth of Souls" Adventure JavaScript Game',
    shortDescription:
      "Story-driven adventure game built in JavaScript. The game combines dialogue, exploration and several minigames, while all graphics were designed from scratch specifically for the project.",
    description:
      "Story-driven adventure game built with JavaScript and p5.js, where the player explores a mysterious labyrinth through dialogue scenes, exploration, and several distinct minigames. All graphics - including characters, environments, and animations - were designed and drawn from scratch specifically for the project, giving the game a consistent and original visual style.",
  },
  "lunalander-cat-lander-game": {
    title: "Lunalander (Cat lander) game",
    shortDescription:
      "A small arcade game inspired by Lunar Lander. Control a floating cat and land safely on its bed while avoiding obstacles and an unfriendly dog.",
    description:
      "A small arcade game inspired by the classic Lunar Lander, reimagined with a playful cat theme. The player controls a floating cat and must guide it to a safe landing on its bed, balancing thrust and descent speed while dodging obstacles and an unfriendly dog wandering the screen. The physics-based movement keeps the gameplay challenging - every landing demands precise timing and gentle corrections.",
  },
  "graphic-design-portfolio": {
    title: "Graphic Design Portfolio",
    shortDescription:
      "A collection of graphic design projects covering branding, motion design, AI-assisted workflows and 3D graphics. The portfolio includes experiments created in Spline, Illustrator, Photoshop and p5.js, as well as a complete rebranding case study for EchoMed AI.",
    description:
      "This portfolio brings together a selection of university and personal projects spanning branding, editorial design, AI-assisted graphics, motion design, and 3D. The projects explore different approaches to visual communication, from developing complete brand identities to creating digital graphics, animations, and three-dimensional assets.\n\n\nThe largest project is a complete visual identity for EchoMed AI. I developed the brand from the initial concept through to the final visual system, including the logo, typography, color palette, and animated assets. The project focused on creating a modern and cohesive identity that could be applied consistently across both digital and visual communication.",
  },
  "tokyo-magazine": {
    title: "Tokyo magazine",
    shortDescription:
      "University team project focused on designing and publishing a magazine about Tokyo. The project covered research, editorial design, typography, image editing and print preparation.",
    description:
      "University team project focused on creating and publishing a print magazine exploring Tokyo, its culture, landmarks, and everyday life. The project covered the full editorial process - from research and content development to editorial design, layout, and final print preparation.\n\n\nThe visual design combined typography, grid systems, image editing, and graphic composition, with the magazine developed in Adobe InDesign, Photoshop, and Illustrator. Particular attention was given to visual hierarchy, consistency, and print-ready details including color management and bleed.\n\n\nThe final publication was produced as a printed magazine and an interactive PDF.",
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
      "This was a university group project, developed collaboratively as a team. My main responsibility within the team was the UX/UI design, including defining user flows, creating wireframes, and developing the final high-fidelity prototype in Figma. I focused on making the interface intuitive, accessible, and visually consistent, while ensuring that the key user journeys were clear and easy to navigate.\n\n\nI also contributed to preparing the final pitch presentation, helping communicate the project concept, design decisions, and proposed solution through a clear visual narrative.\n\n\nThe project addresses UN Sustainable Development Goal 5: Gender Equality, exploring how digital solutions can contribute to greater awareness, support, and equality.",
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
      "University group project involving the design and development of an e-commerce website for a local artist. My role covered the full frontend workflow: I designed the interface in Figma, starting from user flows and wireframes and building up to a cohesive visual system, then implemented it in HTML, CSS and JavaScript. The result is a responsive online storefront that presents the artist's work and supports a simple shopping experience, while the group setting let me practice coordinating design and development decisions and collaborating through a shared GitHub repository.",
  },
};

export const projectContentPl: Record<string, ProjectContent> = {
  "personal-portfolio": {
    title: "Strona Portfolio",
    shortDescription:
      "Dwujęzyczna strona portfolio w Next.js, TypeScript i SCSS modules, z typowanym i18n oraz statyczną warstwą danych projektów.",
    description:
      "Osobista strona portfolio prezentująca doświadczenie, edukację, umiejętności i wybrane projekty. Zbudowana w Next.js, TypeScript i SCSS modules. Zawiera lokalizację EN/PL, dostępna nawigację oraz model treści oddzielający strukturę projektów od przetłumaczonych opisów.",
  },
  "giarddesign-website": {
    title: "Strona GiardDesign",
    shortDescription:
      "Responsywna strona marketingowa studia projektowania ogrodów, zbudowana w Vue i Tailwind CSS. Zawiera ofertę, galerię realizacji, informacje o firmie i kontakt.",
    description:
      "Frontend strony marketingowej dla studia projektowania ogrodów. Serwis prezentuje ofertę (projekty, wizualizacje i realizacje), historię firmy oraz galerię realizacji w układzie masonry. Zbudowana w Vue 3, Vite i Tailwind CSS.",
  },
  "qr-menu-lumiere-restaurant": {
    title: "Menu QR – Restauracja Lumière",
    shortDescription:
      "Aplikacja menu QR i zamawiania ze stolika dla restauracji fine dining, zbudowana w React. Goście skanują kod, przeglądają menu w czterech językach, zamawiają ze stolika i płacą online, BLIK-iem lub u kelnera.",
    description:
      "Aplikacja menu QR i zamawiania ze stolika opracowana dla restauracji Lumière, serwującej dania kuchni fine dining. Gość skanuje kod QR na swoim stoliku, aby otworzyć menu zaprojektowane w pierwszej kolejności dla urządzeń mobilnych, powiązane z numerem stolika i wybranym językiem (PL, EN, DE, UA). Może przeglądać dania według kategorii, sprawdzać składniki i informacje o alergenach, dodawać pozycje z własnymi uwagami, takimi jak „bez cebuli”, oraz składać zamówienia bezpośrednio ze stolika.\n\n\nZamówienia i aktualizacje statusów są synchronizowane w czasie rzeczywistym za pomocą Socket.IO. Personel może przesuwać zamówienie przez kolejne etapy — przyjęte, w przygotowaniu, gotowe, dostarczone i opłacone — a zmiany są natychmiast odzwierciedlane na ekranie gościa. Aplikacja obsługuje także przywołanie kelnera, prośby o rachunek oraz płatności przez Stripe, BLIK-iem na terminalu kart lub gotówką, z opcją napiwku.\n\n\nZbudowana w React i Vite, z routingiem po stronie klienta, własną warstwą zarządzania stanem przechowywaną w sessionStorage oraz wewnętrznym słownikiem i18n. Projekt powstał podczas praktyk w Procforce Software House.",
  },
  "pixel-cat-branding": {
    title: "Pixel Cat - Branding",
    shortDescription:
      "Projekt identyfikacji wizualnej dla fikcyjnej marki Pixel Cat — warianty logo, animacja logo, paleta kolorów, typografia, wzory graficzne i mockupy.",
    description:
      "Indywidualny projekt brandingowy stworzony dla fikcyjnej firmy Pixel Cat. Opracowałam całą identyfikację wizualną - od koncepcji po finalną prezentację - obejmującą różne warianty logo, animowane logo, paletę kolorów, system typograficzny, wzory graficzne oraz mockupy prezentacyjne.\n\n\nCelem projektu było stworzenie spójnej i rozpoznawalnej identyfikacji marki, która może być konsekwentnie wykorzystywana zarówno w materiałach drukowanych, jak i cyfrowych. Skupiłam się na zachowaniu spójności wizualnej poszczególnych elementów oraz pokazaniu, jak identyfikacja może funkcjonować w różnych rzeczywistych zastosowaniach i formatach.",
  },
  "labyrinth-of-souls-adventure-javascript-game": {
    title: "Gra przygodowa „Labyrinth of Souls” w JavaScript",
    shortDescription:
      "Gra przygodowa napisana w JavaScript, oparta na dialogach, eksploracji i kilku minigrach. Wszystkie elementy graficzne zostały zaprojektowane specjalnie na potrzeby projektu.",
    description:
      "Oparta na dialogach gra przygodowa napisana w JavaScript, w której gracz eksploruje tajemniczy labirynt, a historia rozwija się poprzez sceny dialogowe, eksplorację oraz kilka zróżnicowanych minigier, które urozmaicają rozgrywkę i popychają narrację do przodu. Wszystkie elementy graficzne — postacie, środowiska i animacje — zostały zaprojektowane i narysowane od podstaw specjalnie na potrzeby projektu, dzięki czemu gra ma spójny, oryginalny styl wizualny. Gra została zbudowana w JavaScript z wykorzystaniem p5.js, w oparciu o HTML i CSS, działa w całości w przeglądarce i jest opublikowana na GitHub Pages.",
  },
  "lunalander-cat-lander-game": {
    title: "Lunalander (gra z kotem)",
    shortDescription:
      "Prosta gra inspirowana klasycznym Lunar Lander. Zadaniem gracza jest bezpieczne wylądowanie kotem na jego legowisku, omijając przeszkody i psa.",
    description:
      "Prosta gra inspirowana klasycznym Lunar Lander, w zabawnej kociej odsłonie. Gracz steruje latającym kotem i musi sprowadzić go bezpiecznie na jego legowisko, balansując ciągiem i prędkością opadania, jednocześnie omijając przeszkody i psa kręcącego się po ekranie. Ruch oparty na fizyce sprawia, że rozgrywka wymaga precyzji — każde lądowanie to kwestia wyczucia czasu i delikatnych korekt. Gra została zbudowana w JavaScript z wykorzystaniem p5.js oraz HTML i CSS jako warstwy interfejsu, działa bezpośrednio w przeglądarce i jest opublikowana na GitHub Pages.",
  },
  "graphic-design-portfolio": {
    title: "Portfolio projektów graficznych",
    shortDescription:
      "Zbiór projektów graficznych obejmujących branding, motion design, workflow wspierany AI i grafikę 3D. Portfolio zawiera prace stworzone w Spline, Illustratorze, Photoshopie i p5.js oraz kompletny case study rebrandingu EchoMed AI.",
    description:
      "Portfolio obejmuje wybór projektów uniwersyteckich i indywidualnych z zakresu brandingu, projektowania editorialowego, grafiki wspomaganej przez AI, motion designu oraz 3D. Projekty pokazują różne podejścia do komunikacji wizualnej, od tworzenia kompletnych identyfikacji marek po projektowanie grafik cyfrowych, animacji i elementów trójwymiarowych.\n\n\nNajwiększym projektem jest kompletna identyfikacja wizualna dla EchoMed AI. Opracowałam markę od początkowej koncepcji aż po finalny system wizualny, obejmujący logo, typografię, paletę kolorów oraz animowane elementy. Celem projektu było stworzenie nowoczesnej i spójnej identyfikacji, którą można konsekwentnie wykorzystywać w komunikacji cyfrowej i wizualnej.",
  },
  "tokyo-magazine": {
    title: "Magazyn Tokyo",
    shortDescription:
      "Zespołowy projekt realizowany na studiach, którego celem było zaprojektowanie i wydanie magazynu o Tokio. Obejmował research, skład publikacji, typografię, edycję zdjęć oraz przygotowanie materiałów do druku.",
    description:
      "Zespołowy projekt realizowany na studiach, którego celem było stworzenie i wydanie drukowanego magazynu o Tokio — jego kulturze, zabytkach i codziennym życiu. Projekt obejmował cały proces wydawniczy: od researchu i opracowania treści, przez projektowanie edytorskie i layout, aż po finalne przygotowanie do druku.\n\n\nStrona wizualna łączyła typografię, systemy siatek, edycję zdjęć i kompozycję graficzną, a magazyn powstał w Adobe InDesign, Photoshop i Illustrator. Szczególną uwagę poświęcono hierarchii wizualnej, spójności oraz detalom istotnym przy druku, w tym zarządzaniu kolorami i spadom.\n\n\nPublikacja została wydana w formie drukowanego magazynu oraz interaktywnego PDF-a.",
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
      "Był to uniwersytecki projekt grupowy, realizowany we współpracy z zespołem. Moją główną odpowiedzialnością w ramach projektu było projektowanie UX/UI, w tym opracowanie ścieżek użytkownika, przygotowanie wireframe’ów oraz stworzenie finalnego, wysokiej jakości prototypu w Figmie. Skupiałam się na stworzeniu intuicyjnego, przystępnego i spójnego interfejsu oraz na zapewnieniu przejrzystej nawigacji po najważniejszych ścieżkach użytkownika.\n\n\nBrałam również udział w przygotowaniu finalnej prezentacji pitchowej, pomagając przedstawić koncepcję projektu, decyzje projektowe oraz zaproponowane rozwiązanie w przejrzystej formie wizualnej.\n\n\nProjekt odnosi się do 5. Celu Zrównoważonego Rozwoju ONZ (UN Sustainable Development Goal 5): Równość płci, analizując, w jaki sposób rozwiązania cyfrowe mogą wspierać zwiększanie świadomości, wsparcie i równość.",
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
      "Zespołowy projekt studencki polegający na zaprojektowaniu i stworzeniu sklepu internetowego dla lokalnej artystki. Zakres pracy obejmował pełny proces frontendowy: interfejs został zaprojektowany w Figmie — od scenariuszy użytkownika i wireframe'ów po spójny system wizualny — a następnie wdrożony w HTML, CSS i JavaScript. Efektem jest responsywny sklep internetowy, który prezentuje prace artystki i wspiera prosty proces zakupowy, a praca w grupie pozwoliła przećwiczyć koordynację decyzji projektowych i programistycznych oraz współpracę w ramach wspólnego repozytorium GitHub.",
  },
};

export function getProjectContent(
  locale: Locale,
  slug: string,
): ProjectContent | undefined {
  const map = locale === "pl" ? projectContentPl : projectContentEn;
  return map[slug];
}
