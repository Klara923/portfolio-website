"use client";

import { useProjects } from "@/lib/queries/projects";
import { ProjectList } from "@/components/ProjectList/ProjectList";
import styles from "./ProjectsSection.module.scss";

export function ProjectsSection() {
  const { data: projects, isLoading, isError, error } = useProjects();

  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Work</p>
          <h2 id="projects-heading" className={styles.title}>
            Projects
          </h2>
          <p className={styles.description}>
            A selection of work from the portfolio API.
          </p>
        </header>

        {isLoading && (
          <div className={styles.grid} aria-busy="true" aria-label="Loading projects">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={styles.skeleton} />
            ))}
          </div>
        )}

        {isError && (
          <p className={styles.error} role="alert">
            {error instanceof Error
              ? error.message
              : "Could not load projects. Is the API running?"}
          </p>
        )}

        {!isLoading && !isError && projects?.length === 0 && (
          <p className={styles.empty}>
            No projects yet. Add some in the Django admin at /admin/.
          </p>
        )}

        {!isLoading && !isError && projects && projects.length > 0 && (
          <ProjectList projects={projects} />
        )}
      </div>
    </section>
  );
}
