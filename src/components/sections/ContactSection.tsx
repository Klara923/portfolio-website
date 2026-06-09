import { site } from "@/data/portfolio";
import styles from "./ContactSection.module.scss";

export function ContactSection() {
  const { contact } = site;

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <div className={styles.container}>
        <a href={`mailto:${contact.email}`} className={styles.lead}>
          <h2 id="contact-heading" className={styles.title}>
            Don’t hesitate to contact me.
          </h2>
        </a>

        <div className={styles.details}>
          <a href={`mailto:${contact.email}`} className={styles.email}>
            {contact.email}
          </a>
          <div className={styles.links}>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
