"use client";

import { usePortfolioData } from "@/hooks/usePortfolioData";
import { useLanguage } from "@/providers/LanguageProvider";
import { SectionBlock } from "./SectionBlock";
import styles from "./LanguagesSection.module.scss";

export function LanguagesSection() {
  const { t } = useLanguage();
  const { languages } = usePortfolioData();

  return (
    <SectionBlock id="languages" title={t("sections.languagesTitle")}>
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
