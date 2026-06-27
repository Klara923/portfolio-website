"use client";

import { usePortfolioData } from "@/hooks/usePortfolioData";
import { useLanguage } from "@/providers/LanguageProvider";
import { SectionBlock } from "./SectionBlock";
import styles from "@/styles/sections.module.scss";

export function LanguagesSection() {
  const { t } = useLanguage();
  const { languages } = usePortfolioData();

  return (
    <SectionBlock id="languages" title={t("sections.languagesTitle")}>
      <ul className={styles.languagesList}>
        {languages.map((language) => (
          <li key={language.id} className={styles.languagesItem}>
            <span className={styles.languagesName}>{language.name}</span>
            <span className={styles.languagesLevel}>{language.level}</span>
          </li>
        ))}
      </ul>
    </SectionBlock>
  );
}
