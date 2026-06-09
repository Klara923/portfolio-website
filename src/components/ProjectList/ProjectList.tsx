import type { Project } from "@/types/project";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import styles from "./ProjectList.module.scss";

type ProjectListProps = {
  projects: Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className={styles.grid} aria-label="Projects">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
