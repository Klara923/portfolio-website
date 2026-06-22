import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import styles from "./ProjectDetail.module.scss";

export default function ProjectNotFound() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <div className={styles.inner}>
          <Link href="/#projects" className={styles.back}>
            ← Back to projects
          </Link>
          <div className={styles.message}>
            <h1 className={styles.title}>Project not found</h1>
            <p className={styles.lead}>
              We couldn&apos;t find a project at this address.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
