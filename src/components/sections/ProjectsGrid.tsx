"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { FeaturedProjectsList } from "./FeaturedProjectsList";
import styles from "@/styles/sections.module.scss";

export function ProjectsGrid() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className={styles.projectsSection}
      aria-labelledby="projects-heading"
    >
      <div className={styles.projectsContainer}>
        <h2 id="projects-heading" className={styles.projectsSectionLabel}>
          {t("sections.projects")}
        </h2>

        <FeaturedProjectsList />
      </div>
    </section>
  );
}
