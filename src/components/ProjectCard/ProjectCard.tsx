import Image from "next/image";
import type { Project } from "@/types/project";
import { resolveMediaUrl } from "@/lib/api";
import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl = resolveMediaUrl(project.image);
  const description =
    project.short_description || project.description.slice(0, 160);

  return (
    <article className={styles.card}>
      {imageUrl && (
        <div className={styles.imageWrap}>
          <Image
            src={imageUrl}
            alt={project.title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>{project.title}</h2>
          {project.featured && (
            <span className={styles.featured}>Featured</span>
          )}
        </div>

        <p className={styles.description}>{description}</p>

        {project.technologies.length > 0 && (
          <ul className={styles.techList}>
            {project.technologies.map((tech) => (
              <li key={tech} className={styles.tech}>
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.links}>
          {project.project_url && (
            <a
              href={project.project_url}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
          )}
          {project.github_url && (
            <a
              href={project.github_url}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
