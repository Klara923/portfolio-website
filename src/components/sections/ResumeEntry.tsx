"use client";

import type { EducationEntry, ExperienceEntry } from "@/data/portfolio";
import { useReveal } from "@/components/reveal/useReveal";
import shared from "@/styles/shared.module.scss";
import styles from "@/styles/sections.module.scss";

export function EducationEntryRow({ entry }: { entry: EducationEntry }) {
  const { ref, revealed } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`${styles.resumeEntry} ${shared.revealBase} ${revealed ? shared.revealIn : ""}`}
    >
      <h3 className={styles.resumeHeading}>{entry.title}</h3>
      <p className={styles.resumeMeta}>
        {entry.period}, {entry.institution}
        {entry.location ? `, ${entry.location}` : ""}
      </p>
    </article>
  );
}

export function ExperienceEntryRow({ entry }: { entry: ExperienceEntry }) {
  const { ref, revealed } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`${styles.resumeEntry} ${shared.revealBase} ${revealed ? shared.revealIn : ""}`}
    >
      <div className={styles.resumeRow}>
        <h3 className={styles.resumeOrg}>
          {entry.url ? (
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeOrgLink}
            >
              {entry.organization}
              <span aria-hidden> ↗</span>
            </a>
          ) : (
            entry.organization
          )}
        </h3>
        <span className={styles.resumePeriod}>{entry.period}</span>
      </div>
      <p className={styles.resumeRole}>
        {entry.role}
        {entry.location ? ` · ${entry.location}` : ""}
      </p>
      {entry.bullets && entry.bullets.length > 0 ? (
        <ul className={styles.resumeBullets}>
          {entry.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      ) : (
        entry.description && (
          <p className={styles.resumeDescription}>{entry.description}</p>
        )
      )}
    </article>
  );
}
