"use client";

import { usePortfolioData } from "@/hooks/usePortfolioData";
import { useLanguage } from "@/providers/LanguageProvider";
import { SectionBlock } from "./SectionBlock";
import styles from "./LanguagesSection.module.scss";

export function LanguagesSection() {
  const { t } = useLanguage();
  const { languages } = usePortfolioData();

  return (
    <SectionBlock
      id="languages"
      eyebrow={t("sections.languagesEyebrow")}
      title={t("sections.languagesTitle")}
      description={t("sections.languagesDescription")}
    >
      <ul className={styles.list}>
        {languages.map((language) => (
          <li key={language.id} className={styles.item}>
            <span className={styles.name}>{language.name}</span>
            <span className={styles.level}>{language.level}</span>
          </li>
        ))}
      </ul>
    </SectionBlock>
  );
}
