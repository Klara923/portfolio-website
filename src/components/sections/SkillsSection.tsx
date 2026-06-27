"use client";

import { usePortfolioData } from "@/hooks/usePortfolioData";
import { useLanguage } from "@/providers/LanguageProvider";
import { SectionBlock } from "./SectionBlock";
import styles from "@/styles/sections.module.scss";

export function SkillsSection() {
  const { t } = useLanguage();
  const { skillCategories } = usePortfolioData();

  return (
    <SectionBlock
      id="skills"
      title={t("sections.skillsTools")}
      variant="elevated"
    >
      <div className={styles.skillsGroups}>
        {skillCategories.map((category) => (
          <div key={category.id}>
            <h3 className={styles.skillsGroupLabel}>{category.label}</h3>
            <ul className={styles.skillsList}>
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className={`${styles.skillsItem} ${styles[category.id]}`}
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
