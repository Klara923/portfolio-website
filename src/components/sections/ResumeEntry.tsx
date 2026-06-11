"use client";

import type { EducationEntry, ExperienceEntry } from "@/data/portfolio";
import { useReveal } from "@/components/reveal/useReveal";
import reveal from "@/components/reveal/reveal.module.scss";
import styles from "./ResumeEntry.module.scss";

export function EducationEntryRow({ entry }: { entry: EducationEntry }) {
  const { ref, revealed } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`${styles.entry} ${reveal.base} ${revealed ? reveal.in : ""}`}
    >
      <h3 className={styles.heading}>{entry.title}</h3>
      <p className={styles.meta}>
        {entry.period}, {entry.institution}
        {entry.location ? `, ${entry.location}` : ""}
      </p>
    </article>
  );
}

export function CoursesEntryRow({ entries }: { entries: EducationEntry[] }) {
  const { ref, revealed } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`${styles.entry} ${reveal.base} ${revealed ? reveal.in : ""}`}
    >
      <h3 className={styles.heading}>Courses</h3>
      <ul className={styles.courseList}>
        {entries.map((entry) => (
          <li key={entry.id} className={styles.course}>
            <span className={styles.courseTitle}>{entry.title}</span>
            <span className={styles.meta}>
              {entry.period}, {entry.institution}
              {entry.location ? `, ${entry.location}` : ""}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ExperienceEntryRow({ entry }: { entry: ExperienceEntry }) {
  const { ref, revealed } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`${styles.entry} ${reveal.base} ${revealed ? reveal.in : ""}`}
    >
      <div className={styles.row}>
        <h3 className={styles.org}>
          {entry.url ? (
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.orgLink}
            >
              {entry.organization}
              <span aria-hidden> ↗</span>
            </a>
          ) : (
            entry.organization
          )}
        </h3>
        <span className={styles.period}>{entry.period}</span>
      </div>
      <p className={styles.role}>{entry.role}</p>
      {entry.bullets && entry.bullets.length > 0 ? (
        <ul className={styles.bullets}>
          {entry.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      ) : (
        entry.description && (
          <p className={styles.description}>{entry.description}</p>
        )
      )}
    </article>
  );
}
