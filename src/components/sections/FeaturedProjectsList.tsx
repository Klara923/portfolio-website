"use client";

import Link from "next/link";
import { useMemo } from "react";
import { ProjectImage } from "@/components/ProjectImage/ProjectImage";
import { useProjectsData } from "@/hooks/useProjectsData";
import { resolveMediaUrl } from "@/lib/projects";
import { isImageUrl } from "@/lib/media";
import { useLanguage } from "@/providers/LanguageProvider";
import type { Project } from "@/types/project";
import { useReveal } from "@/components/reveal/useReveal";
import shared from "@/styles/shared.module.scss";
import styles from "@/styles/sections.module.scss";

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
    project.shortDescription || project.description.slice(0, 160);
  const techs = project.technologies.slice(0, 6);
  const number = String(index + 1).padStart(2, "0");
  const { ref, revealed } = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`${styles.projectsRow} ${shared.revealBase} ${revealed ? shared.revealIn : ""}`}
    >
      <div className={styles.projectsMeta}>
        <p className={styles.projectsIndex}>
          {number} / <span>{project.title}</span>
        </p>
        <p className={styles.projectsDesc}>{description}</p>
        {techs.length > 0 && (
          <ul className={styles.projectsTags}>
            {techs.map((tech) => (
              <li key={tech} className={styles.projectsTag}>
                {tech}
              </li>
            ))}
          </ul>
        )}
        <Link href={`/projects/${project.slug}`} className={styles.projectsLink}>
          {viewProjectLabel} <span aria-hidden>↗</span>
        </Link>
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className={styles.projectsThumb}
        aria-label={viewProjectAria}
      >
        {imageUrl && isImageUrl(imageUrl) ? (
          <ProjectImage
            src={imageUrl}
            alt={project.title}
            fill
            className={styles.projectsThumbImage}
            sizes="(max-width: 760px) 100vw, 560px"
          />
        ) : (
          <span className={styles.projectsThumbPlaceholder} aria-hidden>
            {project.title.charAt(0)}
          </span>
        )}
      </Link>
    </article>
  );
}

export function FeaturedProjectsList() {
  const { t } = useLanguage();
  const projects = useProjectsData();

  const categoryGroups = useMemo(
    () => [
      { value: "programming" as const, label: t("projects.programming") },
      { value: "design" as const, label: t("projects.design") },
    ],
    [t],
  );

  const groups = useMemo(() => {
    const sorted = [...projects].sort(
      (a, b) => Number(b.featured) - Number(a.featured),
    );
    return categoryGroups
      .map((group) => ({
        ...group,
        projects: sorted.filter((project) => project.category === group.value),
      }))
      .filter((group) => group.projects.length > 0);
  }, [projects, categoryGroups]);

  if (groups.length === 0) {
    return <p className={styles.projectsEmpty}>{t("projects.empty")}</p>;
  }

  return (
    <div className={styles.projectsGroups}>
      {groups.map((group) => (
        <div key={group.value}>
          <h3 className={styles.projectsGroupLabel}>{group.label}</h3>
          <div className={styles.projectsRows}>
            {group.projects.map((project, i) => (
              <ProjectRow
                key={project.slug}
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
