"use client";

import { site } from "@/data/portfolio";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { useLanguage } from "@/providers/LanguageProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SectionBlock } from "@/components/sections/SectionBlock";
import {
  EducationEntryRow,
  ExperienceEntryRow,
} from "@/components/sections/ResumeEntry";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { LanguagesSection } from "@/components/sections/LanguagesSection";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { ContactSection } from "@/components/sections/ContactSection";
import styles from "@/styles/pages.module.scss";

export function PortfolioPage() {
  const { t } = useLanguage();
  const { education, workExperience, extraExperience } = usePortfolioData();

  return (
    <div className={styles.homePage}>
      <SiteHeader />

      <section
        id="about"
        className={styles.homeHero}
        aria-labelledby="hero-heading"
      >
        <div className={styles.homeHeroInner}>
          <div className={styles.homeHeroLeft}>
            <h1 id="hero-heading" className={styles.homeHeroTitle}>
              {t("hero.greeting")}
              <br />
              {site.name}.
            </h1>
            <a
              href={site.contact.cv}
              download="CV_Klara.pdf"
              className={styles.homeHeroCvLink}
            >
              {t("nav.downloadCv")} <span aria-hidden>↓</span>
            </a>
          </div>
          <div className={styles.homeHeroDesc}>
            <p>
              <strong>{t("hero.p1.role")}</strong> {t("hero.p1.with")}{" "}
              <strong>{t("hero.p1.experience")}</strong> {t("hero.p1.building")}{" "}
              <strong>{t("hero.p1.domain")}</strong> {t("hero.p1.products")}{" "}
              {t("hero.p1.stackLead")} <strong>{t("hero.p1.stack")}</strong>
              {t("hero.p1.frontend")}
            </p>
            <p>
              {t("hero.p2.intro")} <strong>{t("hero.p2.design")}</strong>{" "}
              {t("hero.p2.emDash")} <strong>{t("hero.p2.studies")}</strong>
              {t("hero.p2.foundation")} <strong>{t("hero.p2.ux")}</strong>{" "}
              {t("hero.p2.outro")}
            </p>
            <p>
              {t("hero.p3.intro")} <strong>{t("hero.p3.opportunities")}</strong>
              {t("hero.p3.end")}
            </p>
          </div>
        </div>
      </section>

      <main>
        <SectionBlock id="experience" title={t("sections.workExperience")}>
          <div className={styles.homeStack}>
            {workExperience.map((entry) => (
              <ExperienceEntryRow key={entry.id} entry={entry} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock title={t("sections.education")}>
          <div className={styles.homeStack}>
            {education.map((entry) => (
              <EducationEntryRow key={entry.id} entry={entry} />
            ))}
          </div>
        </SectionBlock>

        <SkillsSection />

        <ProjectsGrid />

        <SectionBlock title={t("sections.extraExperience")}>
          <div className={styles.homeStack}>
            {extraExperience.map((entry) => (
              <ExperienceEntryRow key={entry.id} entry={entry} />
            ))}
          </div>
        </SectionBlock>

        <LanguagesSection />
        <ContactSection />
      </main>

      <footer className={styles.homeFooter}>
        <div className={styles.homeFooterLinks}>
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
