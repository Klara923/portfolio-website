import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import styles from "@/styles/pages.module.scss";

export default function ProjectNotFound() {
  return (
    <>
      <SiteHeader />
      <main className={styles.detailPage}>
        <div className={styles.detailInner}>
          <Link href="/#projects" className={styles.detailBack}>
            ← Back to projects
          </Link>
          <div className={styles.detailMessage}>
            <h1 className={styles.detailTitle}>Project not found</h1>
            <p className={styles.detailLead}>
              We couldn&apos;t find a project at this address.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
