import type { ReactNode } from "react";
import styles from "./SectionBlock.module.scss";

type SectionBlockProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  variant?: "default" | "elevated";
  children: ReactNode;
};

export function SectionBlock({
  id,
  eyebrow,
  title,
  description,
  variant = "default",
  children,
}: SectionBlockProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${variant === "elevated" ? styles.elevated : ""}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 id={id ? `${id}-heading` : undefined} className={styles.title}>
            {title}
          </h2>
          {description && <p className={styles.description}>{description}</p>}
        </header>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}
