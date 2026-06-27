"use client";

import { site } from "@/data/portfolio";
import { useLanguage } from "@/providers/LanguageProvider";
import styles from "@/styles/sections.module.scss";

export function ContactSection() {
  const { t } = useLanguage();
  const { contact } = site;

  return (
    <section
      id="contact"
      className={styles.contactSection}
      aria-labelledby="contact-heading"
    >
      <div className={styles.contactContainer}>
        <a href={`mailto:${contact.email}`} className={styles.contactLead}>
          <h2 id="contact-heading" className={styles.contactTitle}>
            {t("sections.contactTitle")}
          </h2>
        </a>

        <div className={styles.contactDetails}>
          <a href={`mailto:${contact.email}`} className={styles.contactEmail}>
            {contact.email}
          </a>
          <div className={styles.contactLinks}>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              {t("nav.github")}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              {t("nav.linkedin")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
