import { FeaturedProjectsList } from "./FeaturedProjectsList";
import styles from "./ProjectsGrid.module.scss";

export function ProjectsGrid() {
  return (
    <section
      id="projects"
      className={styles.section}
      aria-labelledby="projects-heading"
    >
      <div className={styles.container}>
        <h2 id="projects-heading" className={styles.sectionLabel}>
          Projects
        </h2>

        <FeaturedProjectsList />
      </div>
    </section>
  );
}
