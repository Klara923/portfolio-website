"use client";

import { usePortfolioData } from "@/hooks/usePortfolioData";
import { useLanguage } from "@/providers/LanguageProvider";
import { SectionBlock } from "./SectionBlock";
import styles from "./SkillsSection.module.scss";

export function SkillsSection() {
  const { t } = useLanguage();
  const { skillCategories } = usePortfolioData();

  return (
    <SectionBlock
      id="skills"
      title={t("sections.skillsTools")}
      variant="elevated"
    >
      <div className={styles.groups}>
        {skillCategories.map((category) => (
          <div key={category.id} className={styles.group}>
            <h3 className={styles.groupLabel}>{category.label}</h3>
            <ul className={styles.list}>
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className={`${styles.item} ${styles[category.id]}`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
