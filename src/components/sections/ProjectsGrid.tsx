"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { FeaturedProjectsList } from "./FeaturedProjectsList";
import styles from "./ProjectsGrid.module.scss";

export function ProjectsGrid() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className={styles.section}
      aria-labelledby="projects-heading"
    >
      <div className={styles.container}>
        <h2 id="projects-heading" className={styles.sectionLabel}>
          {t("sections.projects")}
        </h2>

        <FeaturedProjectsList />
      </div>
    </section>
  );
}
