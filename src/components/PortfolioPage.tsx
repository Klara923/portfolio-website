"use client";

import { site } from "@/data/portfolio";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { useLanguage } from "@/providers/LanguageProvider";
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
  const { t } = useLanguage();
  const { education, workExperience, extraExperience } = usePortfolioData();

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
              {t("hero.greeting")}
              <br />
              {site.name}.
            </h1>
          </div>
          <div className={styles.heroDesc}>
            <p>
              <strong>{t("hero.role")}</strong> {t("hero.with")}{" "}
              <strong>{t("hero.experience")}</strong> {t("hero.building")}{" "}
              <strong>{t("hero.domain")}</strong>
              {t("hero.products")} {t("hero.stackIntro")}{" "}
              <strong>{t("hero.stack")}</strong>
              <a
                href="#skills"
                className={styles.ref}
                aria-label={t("nav.seeSkills")}
              >
                [1]
              </a>
              {t("hero.frontendFocus")}
            </p>
            <p>
              {t("hero.paragraph2Intro")}{" "}
              <strong>{t("hero.paragraph2Fields")}</strong>
              {t("hero.paragraph2Studied")}{" "}
              <strong>{t("hero.paragraph2Duration")}</strong>
              {t("hero.paragraph2Foundation")}{" "}
              <strong>{t("hero.paragraph2Ux")}</strong>{" "}
              {t("hero.paragraph2Thinking")}
            </p>
            <p>
              {t("hero.paragraph3Intro")}{" "}
              <strong>{t("hero.paragraph3Opportunities")}</strong>
              {t("hero.paragraph3End")}
            </p>
          </div>
        </div>
      </section>

      <main>
        <SectionBlock id="experience" title={t("sections.workExperience")}>
          <div className={styles.stack}>
            {workExperience.map((entry) => (
              <ExperienceEntryRow key={entry.id} entry={entry} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock title={t("sections.education")}>
          <div className={styles.stack}>
            <EducationEntryRow entry={education[0]} />
            <CoursesEntryRow
              entries={education.slice(1)}
              label={t("sections.courses")}
            />
          </div>
        </SectionBlock>

        <SkillsSection />

        <ProjectsGrid />

        <SectionBlock
          eyebrow={t("sections.beyondWork")}
          title={t("sections.extraExperience")}
        >
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
        <div className={styles.footerLinks}>
          <a
            href={site.contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("nav.github")}
          </a>
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("nav.linkedin")}
          </a>
          <a href={`mailto:${site.contact.email}`}>{t("nav.email")}</a>
        </div>
      </footer>
    </div>
  );
}
