import { languages } from "@/data/portfolio";
import { SectionBlock } from "./SectionBlock";
import styles from "./LanguagesSection.module.scss";

export function LanguagesSection() {
  return (
    <SectionBlock
      id="languages"
      eyebrow="Communication"
      title="Languages"
      description="Languages I work and collaborate in."
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
