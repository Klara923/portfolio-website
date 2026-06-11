"use client";

import Link from "next/link";
import { useMemo } from "react";
import { ProjectImage } from "@/components/ProjectImage/ProjectImage";
import { resolveMediaUrl } from "@/lib/api";
import { isImageUrl } from "@/lib/media";
import { useProjects } from "@/lib/queries/projects";
import { useLanguage } from "@/providers/LanguageProvider";
import type { Project } from "@/types/project";
import { useReveal } from "@/components/reveal/useReveal";
import reveal from "@/components/reveal/reveal.module.scss";
import styles from "./ProjectsGrid.module.scss";

function ProjectRow({
  project,
  index,
  viewProjectLabel,
  viewProjectAria,
}: {
  project: Project;
  index: number;
  viewProjectLabel: string;
  viewProjectAria: string;
}) {
  const imageUrl = resolveMediaUrl(project.image);
  const description =
    project.short_description || project.description.slice(0, 160);
  const techs = project.technologies.slice(0, 6);
  const number = String(index + 1).padStart(2, "0");
  const { ref, revealed } = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`${styles.row} ${reveal.base} ${revealed ? reveal.in : ""}`}
    >
      <div className={styles.meta}>
        <p className={styles.index}>
          {number} / <span>{project.title}</span>
        </p>
        <p className={styles.desc}>{description}</p>
        {techs.length > 0 && (
          <ul className={styles.tags}>
            {techs.map((tech) => (
              <li key={tech} className={styles.tag}>
                {tech}
              </li>
            ))}
          </ul>
        )}
        <Link href={`/projects/${project.slug}`} className={styles.link}>
          {viewProjectLabel} <span aria-hidden>↗</span>
        </Link>
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className={styles.thumb}
        aria-label={viewProjectAria}
      >
        {imageUrl && isImageUrl(imageUrl) ? (
          <ProjectImage
            src={imageUrl}
            alt={project.title}
            fill
            className={styles.thumbImage}
            sizes="(max-width: 760px) 100vw, 560px"
          />
        ) : (
          <span className={styles.thumbPlaceholder} aria-hidden>
            {project.title.charAt(0)}
          </span>
        )}
      </Link>
    </article>
  );
}

export function FeaturedProjectsList() {
  const { t } = useLanguage();
  const { data, isLoading, isError, error } = useProjects();

  const categoryGroups = useMemo(
    () => [
      { value: "programming" as const, label: t("projects.programming") },
      { value: "design" as const, label: t("projects.design") },
    ],
    [t],
  );

  const groups = useMemo(() => {
    const all = data ?? [];
    const sorted = [...all].sort(
      (a, b) => Number(b.featured) - Number(a.featured),
    );
    return categoryGroups
      .map((group) => ({
        ...group,
        projects: sorted.filter((project) => project.category === group.value),
      }))
      .filter((group) => group.projects.length > 0);
  }, [data, categoryGroups]);

  if (isLoading) {
    return (
      <div
        className={styles.rows}
        aria-busy="true"
        aria-label={t("projects.loading")}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className={styles.skeletonRow} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <p className={styles.error} role="alert">
        {error instanceof Error ? error.message : t("projects.error")}
      </p>
    );
  }

  if (groups.length === 0) {
    return <p className={styles.empty}>{t("projects.empty")}</p>;
  }

  return (
    <div className={styles.groups}>
      {groups.map((group) => (
        <div key={group.value} className={styles.group}>
          <h3 className={styles.groupLabel}>{group.label}</h3>
          <div className={styles.rows}>
            {group.projects.map((project, i) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={i}
                viewProjectLabel={t("projects.viewProject")}
                viewProjectAria={t("projects.viewProjectAria", {
                  title: project.title,
                })}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
