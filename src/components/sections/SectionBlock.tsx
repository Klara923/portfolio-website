import type { ReactNode } from "react";
import styles from "@/styles/sections.module.scss";

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
      className={`${styles.blockSection} ${variant === "elevated" ? styles.blockElevated : ""}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className={styles.blockContainer}>
        <header className={styles.blockHeader}>
          {eyebrow && <p className={styles.blockEyebrow}>{eyebrow}</p>}
          <h2 id={id ? `${id}-heading` : undefined} className={styles.blockTitle}>
            {title}
          </h2>
          {description && (
            <p className={styles.blockDescription}>{description}</p>
          )}
        </header>
        <div className={styles.blockBody}>{children}</div>
      </div>
    </section>
  );
}
