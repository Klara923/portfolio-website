import {
  education,
  extraExperience,
  site,
  workExperience,
} from "@/data/portfolio";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SectionBlock } from "@/components/sections/SectionBlock";
import {
  CoursesEntryRow,
  EducationEntryRow,
  ExperienceEntryRow,
} from "@/components/sections/ResumeEntry";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { LanguagesSection } from "@/components/sections/LanguagesSection";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { ContactSection } from "@/components/sections/ContactSection";
import styles from "./PortfolioPage.module.scss";

export function PortfolioPage() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.page}>
      <SiteHeader />

      <section
        id="about"
        className={styles.hero}
        aria-labelledby="hero-heading"
      >
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <h1 id="hero-heading" className={styles.heroTitle}>
              Hello, I&apos;m
              <br />
              {site.name}.
            </h1>
          </div>
          <div className={styles.heroDesc}>
            <p>
              <strong>Full-stack Developer</strong> with{" "}
              <strong>nearly 3 years of commercial experience</strong> building{" "}
              <strong>AI-powered legal-tech</strong> products. My primary stack
              includes <strong>React, TypeScript, and Django</strong>
              <a href="#skills" className={styles.ref} aria-label="See skills">
                [1]
              </a>
              , with a strong focus on frontend development.
            </p>
            <p>
              I combine technical skills with a background in Graphic Design and
              Software Development, having studied for{" "}
              <strong>over 4 years in Sweden</strong>, giving me a strong
              foundation in <strong>UX/UI design</strong> and user-centered
              thinking.
            </p>
            <p>
              I am currently based in Poland and open to{" "}
              <strong>remote, hybrid, and international opportunities</strong>.
            </p>
          </div>
        </div>
      </section>

      <main>
        <SectionBlock id="experience" title="Work experience">
          <div className={styles.stack}>
            {workExperience.map((entry) => (
              <ExperienceEntryRow key={entry.id} entry={entry} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock title="Education">
          <div className={styles.stack}>
            <EducationEntryRow entry={education[0]} />
            <CoursesEntryRow entries={education.slice(1)} />
          </div>
        </SectionBlock>

        <SkillsSection />

        <ProjectsGrid />

        <SectionBlock eyebrow="Beyond work" title="Extra experience">
          <div className={styles.stack}>
            {extraExperience.map((entry) => (
              <ExperienceEntryRow key={entry.id} entry={entry} />
            ))}
          </div>
        </SectionBlock>

        <LanguagesSection />
        <ContactSection />
      </main>

      <footer className={styles.footer}>
        <span className={styles.footerName}></span>
        <div className={styles.footerLinks}>
          <a
            href={site.contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href={`mailto:${site.contact.email}`}>Email</a>
        </div>
      </footer>
    </div>
  );
}
