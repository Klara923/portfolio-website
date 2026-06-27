import type { Locale } from "./translations";

export type ProjectContent = {
  title: string;
  short_description: string;
  description: string;
  problem: string;
  solution: string;
  challenge: string;
  result: string;
};

export const projectContentEn: Record<string, ProjectContent> = {
  "pixel-cat-branding": {
    title: "Pixel Cat - Branding",
    short_description: "",
    description: "Brand identity design for a fictional company, “Pixel Cat,” including logo variations, an animated logo, color palette, typography system, visual patterns, and mockups. The project explores a cohesive visual identity across both static and motion elements.",
    problem: "",
    solution: "",
    challenge: "",
    result: "",
  },
  "labyrinth-of-souls-adventure-javascript-game": {
    title: "\"Labyrinth of Souls\" Adventure JavaScript Game",
    short_description: "An adventure game featuring dialogue-driven storytelling and multiple integrated minigames. The project includes fully custom-made graphics, designed to create a cohesive and unique visual experience.",
    description: "An adventure game featuring dialogue-driven storytelling and multiple integrated minigames. The project includes fully custom-made graphics, designed to create a cohesive and unique visual experience.",
    problem: "",
    solution: "",
    challenge: "",
    result: "",
  },
  "lunalander-cat-lander-game": {
    title: "Lunalander (Cat lander) game",
    short_description: "Inspired by Lunalander, a simple game about a floating cat. Your goal is to safely land the cat on its bed while avoiding obstacles—make sure it doesn’t get caught by a dog along the way.",
    description: "Inspired by Lunalander, a simple game about a floating cat. Your goal is to safely land the cat on its bed while avoiding obstacles—make sure it doesn’t get caught by a dog along the way.",
    problem: "",
    solution: "",
    challenge: "",
    result: "",
  },
  "graphic-design-portfolio": {
    title: "Graphic Design Portfolio",
    short_description: "A mixed-media portfolio exploring 3D animation, AI-assisted design, responsive logos, and a complete rebranding for a healthtech startup.",
    description: "This portfolio gathers five visual experiments and a full rebranding case. It opens with a 3D animated installation built in Spline, followed by three short exercises: an AI-generated icon set refined in Illustrator, an AI-generated digital collage finished in Photoshop, and a responsive logo. The main project is a rebranding for EchoMed AI, a Swedish startup using AI to help doctors with note-taking. The work explores wave metaphors (sound, chaos, clarity), human-centered figure compositions, typography, a color palette, and animated sine waves in p5.js. Together, these pieces show a design process that moves between rapid AI prototyping, traditional vector and raster editing, motion design, and identity systems.",
    problem: "Each sub-project addressed a distinct creative or communication problem:\n\n- Spline installation: How to make 3D animation feel tactile and interactive in a browser.\n\n- AI icon set / collage: How to use generative AI as a starting point, then apply human craft in Illustrator/Photoshop.\n\n- Responsive logo: How a single mark adapts to different screen sizes and contexts.\n\n- EchoMed AI: How to visually translate medical note‑taking chaos into calm, AI‑powered order without losing empathy for doctors and patients.",
    solution: "Spline: Real‑time 3D scene with animated elements, exportable for web.\n\nAI mini cases: AI image generators outputs → vector refinement (Illustrator) or photo manipulation (Photoshop).\n\nResponsive logo: Simplified geometry that scales from favicon to billboard.\n\nEchoMed AI: Wave‑based visual system. Distorted sine lines for “chaos”, smooth waves for “clarity”. Blurred/sharp figures of doctor + patient shift focus from distraction to relationship. Graphics use gradients, opacity layers, and p5.js animations.",
    challenge: "Creating an idea for comprehensive and meaningful branding and executing it within a limited timeframe. The main challenge was to create a software box mockups as they were not generated automatically, but created manually in Photoshop.",
    result: "- Spline installation: A shareable, interactive 3D piece.\n\n- AI icon set + collage: Two assets showing AI‑to‑Adobe workflows.\n\n- Responsive logo: One mark working across multiple screen sizes.\n\n- EchoMed AI: A complete identity (logo, typography, palette, graphics, p5.js animation, packaging mockups) that communicates “AI‑enhanced focus” for medical professionals.\n\nThe portfolio demonstrates modern, hybrid workflows: AI, 3D, vector, raster, motion, and branding.",
  },
  "tokyo-magazine": {
    title: "Tokyo magazine",
    short_description: "A university group project focused on designing and producing a travel and culture magazine about Tokyo, Japan. The magazine combines editorial design, photography, typography, and visual storytelling to create an engaging reading experience.",
    description: "This project was created as part of the Visual Communication course at Jönköping University. Working in a team of five, we designed and produced a magazine exploring Tokyo’s culture, architecture, food, entertainment, and traditions. The project covered the entire editorial design process, from research and concept development to layout design, image editing, and print preparation. The final outcome was both a printed magazine and an interactive PDF version.",
    problem: "The challenge was to create an informative and visually appealing magazine that would effectively communicate the diversity of Tokyo while maintaining consistency across multiple chapters created by different team members. The magazine needed to balance readability, aesthetics, and storytelling while appealing to readers interested in Japanese culture and travel.",
    solution: "We developed a cohesive editorial design system using:\n\n* Color-coded chapters representing different themes.\n* Consistent typography and layout principles.\n* Large, carefully selected photographs to support storytelling.\n* Kanji-inspired visual elements to reinforce the Japanese theme.\n* Introductory spreads and a structured table of contents for easier navigation.\n* An interactive PDF version with clickable chapter links.",
    challenge: "The biggest challenge was ensuring visual consistency across content created by multiple designers. Since each chapter covered a different topic and visual mood, it was necessary to establish shared design rules while allowing enough creative freedom for individual layouts. Coordinating feedback, revisions, and maintaining a unified visual identity required strong collaboration and communication throughout the project.",
    result: "The final magazine successfully combined engaging content with a professional editorial design. Through iterative design, image editing, and teamwork, we produced a cohesive publication that effectively showcases Tokyo’s culture and attractions. The project strengthened our skills in editorial design, typography, visual communication, collaboration, and print production.",
  },
  "ai-powered-facial-emotion-recognition-with-3d-hand-driven-painting-application": {
    title: "AI-Powered Facial Emotion Recognition with 3D Hand-Driven Painting Application",
    short_description: "An interactive AI-powered application that combines real-time facial emotion recognition and 3D hand gesture tracking to create a unique digital painting experience. Inspired by Inside Out 2, the application allows users’ emotions and hand movements to dynamically influence the artwork being created",
    description: "How to test this application\n\nOpen the project and allow access to your webcam when prompted. Pinch your index finger and thumb together to start drawing. Try making different facial expressions and observe how they affect the painting experience. Please note that it may take a few moments for the application to fully load. During this time, you will see the message “Loading…” displayed on the screen.\n\nAn interactive AI-powered application that combines real-time facial emotion recognition and 3D hand gesture tracking to create a unique digital painting experience. Inspired by Inside Out 2, the application allows users’ emotions and hand movements to dynamically influence the artwork being created. By integrating multiple AI models into a single experience, the project demonstrates how multimodal AI can enhance creativity, user engagement, and digital storytelling through natural human interactions.",
    problem: "Design and develop an interactive application that combines multiple AI technologies into a single user experience. The goal was to create an engaging concept that goes beyond traditional AI chat interfaces by using real-time user input and emotional feedback.",
    solution: "Inspired by the movie Inside Out 2, I developed an interactive application that combines emotion recognition from facial expressions with AI-powered hand gesture recognition. Users can influence the application’s behavior through both their emotions and physical interactions, creating a dynamic and personalized experience.",
    challenge: "The main challenge was integrating multiple AI models and ensuring they worked together seamlessly in real time. This required coordinating data flows between emotion detection and hand-tracking systems while maintaining responsive performance and a smooth user experience. Additionally, translating AI outputs into meaningful application behavior required careful design and testing.",
    result: "The project resulted in a fully functional interactive prototype that successfully combined two AI technologies into a cohesive experience. It demonstrated my ability to work with AI integrations, manage complex frontend-backend interactions, and transform experimental technologies into an engaging user-facing application. The project was presented as a proof of concept showcasing how multimodal AI can enhance user interaction and digital storytelling.",
  },
  "empowherment-platform": {
    title: "EmpowHERment Platform",
    short_description: "EmpowHERment is a LinkedIn-inspired networking platform designed to support women in their career growth through mentorship, community, and professional opportunities.",
    description: "EmpowHERment is a professional networking platform created during an international design sprint to help women build meaningful connections, access mentorship, and grow their careers. I contributed to UX/UI design, including user flows, wireframes, a high-fidelity Figma prototype, and a final pitch presentation. The project aims to address one of the 17 Sustainable Development Goals, in this case, Goal 5, Gender equality.",
    problem: "Professional networking platforms often fail to address the unique challenges women face when building careers, finding mentors, and accessing supportive professional communities. The goal was to design a platform that empowers women through networking, mentorship, and career development opportunities within a limited timeframe.",
    solution: "During an international design sprint, our team designed EmpowHERment, a professional networking platform inspired by LinkedIn. I contributed to the UX/UI design process, creating user flows, wireframes, and a high-fidelity prototype in Figma. The platform focuses on meaningful professional connections, mentorship programs, community engagement, and resources tailored to women's career growth.",
    challenge: "One of the biggest challenges was collaborating within an international team during a fast-paced design sprint. Team members came from different ideas and levels of design experience. This required clear communication, active listening, and effective task distribution. We needed to align on a shared vision, make design decisions quickly, and combine individual ideas into one cohesive project within a limited timeframe.",
    result: "The project resulted in a fully interactive Figma prototype and a pitch presentation showcasing the idea.",
  },
  "creative-coding-projects": {
    title: "Creative Coding Projects",
    short_description: "Developed interactive digital art installations using JavaScript and p5.js, combining generative visuals, animation, and real-time user interaction. Focused on creating immersive experiences that transform passive viewing into engaging, responsive digital art. Demonstrated creative coding techniques",
    description: "Developed interactive digital art installations using JavaScript and p5.js, combining generative visuals, animation, and real-time user interaction. Focused on creating immersive experiences that transform passive viewing into engaging, responsive digital art. Demonstrated creative coding techniques and experimentation with AI-assisted generative design.",
    problem: "Traditional digital art experiences are often passive, limiting audience interaction and engagement. There was a need to explore how creative coding could be used to create more immersive and dynamic artistic experiences.",
    solution: "Developed multiple artistic digital installations using p5.js, combining generative visuals, animation, and interactive elements implemented with AI to create unique real-time digital art experiences.",
    challenge: "Balancing artistic expression with technical implementation, optimizing performance for smooth visual rendering, and designing interactions that were both intuitive and engaging for participants.",
    result: "Created a collection of interactive digital installations that showcased creative coding techniques, encouraged audience engagement, and demonstrated the potential of p5.js as a tool for digital art and experimentation.",
  },
  "art-gallery-e-commerce-website": {
    title: "Art Gallery E-Commerce Website",
    short_description: "A university group project focused on designing and developing an e-commerce website for a local artist. The platform allows users to browse products, explore upcoming events, and purchase items through an intuitive, responsive interface.",
    description: "The project was developed as part of a university group assignment. The goal was to design and build a modern e-commerce website for a local artist, allowing users to browse products, view upcoming events, and purchase items online. The interface was designed in Figma and implemented using HTML, CSS and JavaScript.",
    problem: "Many small galleries and independent artists lack accessible online platforms that combine artwork presentation, event promotion, and e-commerce functionality in a single user-friendly experience. The challenge was to create a website that is visually appealing, easy to navigate, and responsive across devices.",
    solution: "Our team designed a complete e-commerce platform featuring:\n\n- A homepage showcasing featured products thumbnails.\n- Product catalog pages with categorized artwork collections.\n- Individual product pages with detailed information and purchase options.\n- Shopping cart functionality for managing selected items.\n- Contact and FAQ sections to improve customer support.\n- Event pages promoting gallery exhibitions and activities.\n- A responsive mobile and tablet version optimized for smaller screens.",
    challenge: "One of the main challenges was dividing the work among team members. I took responsibility for the entire Figma design and website development, as I had the strongest skills in those areas within the group. This responsibility required me to work in a fast-paced environment and manage multiple tasks simultaneously. It also required me to compromise on some design and implementation ideas to ensure the project could be completed within the limited timeframe.",
    result: "The final product is a fully functional e-commerce website prototype that successfully combines art presentation, event management, and online shopping. The project strengthened my skills in UI/UX design, front-end development, teamwork, and the process of transforming a Figma design into a responsive web application.",
  },
};

export const projectContentPl: Record<string, ProjectContent> = {
  "pixel-cat-branding": {
    title: "Pixel Cat - Branding",
    short_description: "",
    description: "Brand identity design for a fictional company, “Pixel Cat,” including logo variations, an animated logo, color palette, typography system, visual patterns, and mockups. The project explores a cohesive visual identity across both static and motion elements.",
    problem: "",
    solution: "",
    challenge: "",
    result: "",
  },
  "labyrinth-of-souls-adventure-javascript-game": {
    title: "\"Labyrinth of Souls\" Adventure JavaScript Game",
    short_description: "An adventure game featuring dialogue-driven storytelling and multiple integrated minigames. The project includes fully custom-made graphics, designed to create a cohesive and unique visual experience.",
    description: "An adventure game featuring dialogue-driven storytelling and multiple integrated minigames. The project includes fully custom-made graphics, designed to create a cohesive and unique visual experience.",
    problem: "",
    solution: "",
    challenge: "",
    result: "",
  },
  "lunalander-cat-lander-game": {
    title: "Lunalander (Cat lander) game",
    short_description: "Inspired by Lunalander, a simple game about a floating cat. Your goal is to safely land the cat on its bed while avoiding obstacles—make sure it doesn’t get caught by a dog along the way.",
    description: "Inspired by Lunalander, a simple game about a floating cat. Your goal is to safely land the cat on its bed while avoiding obstacles—make sure it doesn’t get caught by a dog along the way.",
    problem: "",
    solution: "",
    challenge: "",
    result: "",
  },
  "graphic-design-portfolio": {
    title: "Graphic Design Portfolio",
    short_description: "A mixed-media portfolio exploring 3D animation, AI-assisted design, responsive logos, and a complete rebranding for a healthtech startup.",
    description: "This portfolio gathers five visual experiments and a full rebranding case. It opens with a 3D animated installation built in Spline, followed by three short exercises: an AI-generated icon set refined in Illustrator, an AI-generated digital collage finished in Photoshop, and a responsive logo. The main project is a rebranding for EchoMed AI, a Swedish startup using AI to help doctors with note-taking. The work explores wave metaphors (sound, chaos, clarity), human-centered figure compositions, typography, a color palette, and animated sine waves in p5.js. Together, these pieces show a design process that moves between rapid AI prototyping, traditional vector and raster editing, motion design, and identity systems.",
    problem: "Each sub-project addressed a distinct creative or communication problem:\n\n- Spline installation: How to make 3D animation feel tactile and interactive in a browser.\n\n- AI icon set / collage: How to use generative AI as a starting point, then apply human craft in Illustrator/Photoshop.\n\n- Responsive logo: How a single mark adapts to different screen sizes and contexts.\n\n- EchoMed AI: How to visually translate medical note‑taking chaos into calm, AI‑powered order without losing empathy for doctors and patients.",
    solution: "Spline: Real‑time 3D scene with animated elements, exportable for web.\n\nAI mini cases: AI image generators outputs → vector refinement (Illustrator) or photo manipulation (Photoshop).\n\nResponsive logo: Simplified geometry that scales from favicon to billboard.\n\nEchoMed AI: Wave‑based visual system. Distorted sine lines for “chaos”, smooth waves for “clarity”. Blurred/sharp figures of doctor + patient shift focus from distraction to relationship. Graphics use gradients, opacity layers, and p5.js animations.",
    challenge: "Creating an idea for comprehensive and meaningful branding and executing it within a limited timeframe. The main challenge was to create a software box mockups as they were not generated automatically, but created manually in Photoshop.",
    result: "- Spline installation: A shareable, interactive 3D piece.\n\n- AI icon set + collage: Two assets showing AI‑to‑Adobe workflows.\n\n- Responsive logo: One mark working across multiple screen sizes.\n\n- EchoMed AI: A complete identity (logo, typography, palette, graphics, p5.js animation, packaging mockups) that communicates “AI‑enhanced focus” for medical professionals.\n\nThe portfolio demonstrates modern, hybrid workflows: AI, 3D, vector, raster, motion, and branding.",
  },
  "tokyo-magazine": {
    title: "Tokyo magazine",
    short_description: "A university group project focused on designing and producing a travel and culture magazine about Tokyo, Japan. The magazine combines editorial design, photography, typography, and visual storytelling to create an engaging reading experience.",
    description: "This project was created as part of the Visual Communication course at Jönköping University. Working in a team of five, we designed and produced a magazine exploring Tokyo’s culture, architecture, food, entertainment, and traditions. The project covered the entire editorial design process, from research and concept development to layout design, image editing, and print preparation. The final outcome was both a printed magazine and an interactive PDF version.",
    problem: "The challenge was to create an informative and visually appealing magazine that would effectively communicate the diversity of Tokyo while maintaining consistency across multiple chapters created by different team members. The magazine needed to balance readability, aesthetics, and storytelling while appealing to readers interested in Japanese culture and travel.",
    solution: "We developed a cohesive editorial design system using:\n\n* Color-coded chapters representing different themes.\n* Consistent typography and layout principles.\n* Large, carefully selected photographs to support storytelling.\n* Kanji-inspired visual elements to reinforce the Japanese theme.\n* Introductory spreads and a structured table of contents for easier navigation.\n* An interactive PDF version with clickable chapter links.",
    challenge: "The biggest challenge was ensuring visual consistency across content created by multiple designers. Since each chapter covered a different topic and visual mood, it was necessary to establish shared design rules while allowing enough creative freedom for individual layouts. Coordinating feedback, revisions, and maintaining a unified visual identity required strong collaboration and communication throughout the project.",
    result: "The final magazine successfully combined engaging content with a professional editorial design. Through iterative design, image editing, and teamwork, we produced a cohesive publication that effectively showcases Tokyo’s culture and attractions. The project strengthened our skills in editorial design, typography, visual communication, collaboration, and print production.",
  },
  "ai-powered-facial-emotion-recognition-with-3d-hand-driven-painting-application": {
    title: "AI-Powered Facial Emotion Recognition with 3D Hand-Driven Painting Application",
    short_description: "An interactive AI-powered application that combines real-time facial emotion recognition and 3D hand gesture tracking to create a unique digital painting experience. Inspired by Inside Out 2, the application allows users’ emotions and hand movements to dynamically influence the artwork being created",
    description: "How to test this application\n\nOpen the project and allow access to your webcam when prompted. Pinch your index finger and thumb together to start drawing. Try making different facial expressions and observe how they affect the painting experience. Please note that it may take a few moments for the application to fully load. During this time, you will see the message “Loading…” displayed on the screen.\n\nAn interactive AI-powered application that combines real-time facial emotion recognition and 3D hand gesture tracking to create a unique digital painting experience. Inspired by Inside Out 2, the application allows users’ emotions and hand movements to dynamically influence the artwork being created. By integrating multiple AI models into a single experience, the project demonstrates how multimodal AI can enhance creativity, user engagement, and digital storytelling through natural human interactions.",
    problem: "Design and develop an interactive application that combines multiple AI technologies into a single user experience. The goal was to create an engaging concept that goes beyond traditional AI chat interfaces by using real-time user input and emotional feedback.",
    solution: "Inspired by the movie Inside Out 2, I developed an interactive application that combines emotion recognition from facial expressions with AI-powered hand gesture recognition. Users can influence the application’s behavior through both their emotions and physical interactions, creating a dynamic and personalized experience.",
    challenge: "The main challenge was integrating multiple AI models and ensuring they worked together seamlessly in real time. This required coordinating data flows between emotion detection and hand-tracking systems while maintaining responsive performance and a smooth user experience. Additionally, translating AI outputs into meaningful application behavior required careful design and testing.",
    result: "The project resulted in a fully functional interactive prototype that successfully combined two AI technologies into a cohesive experience. It demonstrated my ability to work with AI integrations, manage complex frontend-backend interactions, and transform experimental technologies into an engaging user-facing application. The project was presented as a proof of concept showcasing how multimodal AI can enhance user interaction and digital storytelling.",
  },
  "empowherment-platform": {
    title: "EmpowHERment Platform",
    short_description: "EmpowHERment is a LinkedIn-inspired networking platform designed to support women in their career growth through mentorship, community, and professional opportunities.",
    description: "EmpowHERment is a professional networking platform created during an international design sprint to help women build meaningful connections, access mentorship, and grow their careers. I contributed to UX/UI design, including user flows, wireframes, a high-fidelity Figma prototype, and a final pitch presentation. The project aims to address one of the 17 Sustainable Development Goals, in this case, Goal 5, Gender equality.",
    problem: "Professional networking platforms often fail to address the unique challenges women face when building careers, finding mentors, and accessing supportive professional communities. The goal was to design a platform that empowers women through networking, mentorship, and career development opportunities within a limited timeframe.",
    solution: "During an international design sprint, our team designed EmpowHERment, a professional networking platform inspired by LinkedIn. I contributed to the UX/UI design process, creating user flows, wireframes, and a high-fidelity prototype in Figma. The platform focuses on meaningful professional connections, mentorship programs, community engagement, and resources tailored to women's career growth.",
    challenge: "One of the biggest challenges was collaborating within an international team during a fast-paced design sprint. Team members came from different ideas and levels of design experience. This required clear communication, active listening, and effective task distribution. We needed to align on a shared vision, make design decisions quickly, and combine individual ideas into one cohesive project within a limited timeframe.",
    result: "The project resulted in a fully interactive Figma prototype and a pitch presentation showcasing the idea.",
  },
  "creative-coding-projects": {
    title: "Creative Coding Projects",
    short_description: "Developed interactive digital art installations using JavaScript and p5.js, combining generative visuals, animation, and real-time user interaction. Focused on creating immersive experiences that transform passive viewing into engaging, responsive digital art. Demonstrated creative coding techniques",
    description: "Developed interactive digital art installations using JavaScript and p5.js, combining generative visuals, animation, and real-time user interaction. Focused on creating immersive experiences that transform passive viewing into engaging, responsive digital art. Demonstrated creative coding techniques and experimentation with AI-assisted generative design.",
    problem: "Traditional digital art experiences are often passive, limiting audience interaction and engagement. There was a need to explore how creative coding could be used to create more immersive and dynamic artistic experiences.",
    solution: "Developed multiple artistic digital installations using p5.js, combining generative visuals, animation, and interactive elements implemented with AI to create unique real-time digital art experiences.",
    challenge: "Balancing artistic expression with technical implementation, optimizing performance for smooth visual rendering, and designing interactions that were both intuitive and engaging for participants.",
    result: "Created a collection of interactive digital installations that showcased creative coding techniques, encouraged audience engagement, and demonstrated the potential of p5.js as a tool for digital art and experimentation.",
  },
  "art-gallery-e-commerce-website": {
    title: "Art Gallery E-Commerce Website",
    short_description: "A university group project focused on designing and developing an e-commerce website for a local artist. The platform allows users to browse products, explore upcoming events, and purchase items through an intuitive, responsive interface.",
    description: "The project was developed as part of a university group assignment. The goal was to design and build a modern e-commerce website for a local artist, allowing users to browse products, view upcoming events, and purchase items online. The interface was designed in Figma and implemented using HTML, CSS and JavaScript.",
    problem: "Many small galleries and independent artists lack accessible online platforms that combine artwork presentation, event promotion, and e-commerce functionality in a single user-friendly experience. The challenge was to create a website that is visually appealing, easy to navigate, and responsive across devices.",
    solution: "Our team designed a complete e-commerce platform featuring:\n\n- A homepage showcasing featured products thumbnails.\n- Product catalog pages with categorized artwork collections.\n- Individual product pages with detailed information and purchase options.\n- Shopping cart functionality for managing selected items.\n- Contact and FAQ sections to improve customer support.\n- Event pages promoting gallery exhibitions and activities.\n- A responsive mobile and tablet version optimized for smaller screens.",
    challenge: "One of the main challenges was dividing the work among team members. I took responsibility for the entire Figma design and website development, as I had the strongest skills in those areas within the group. This responsibility required me to work in a fast-paced environment and manage multiple tasks simultaneously. It also required me to compromise on some design and implementation ideas to ensure the project could be completed within the limited timeframe.",
    result: "The final product is a fully functional e-commerce website prototype that successfully combines art presentation, event management, and online shopping. The project strengthened my skills in UI/UX design, front-end development, teamwork, and the process of transforming a Figma design into a responsive web application.",
  },
};

export function getProjectContent(locale: Locale, slug: string): ProjectContent | undefined {
  const map = locale === "pl" ? projectContentPl : projectContentEn;
  return map[slug];
}
