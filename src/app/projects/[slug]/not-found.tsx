"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { useLanguage } from "@/providers/LanguageProvider";
import styles from "@/styles/pages.module.scss";

export default function ProjectNotFound() {
  const { t } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main className={styles.detailPage}>
        <div className={styles.detailInner}>
          <Link href="/#projects" className={styles.detailBack}>
            {t("projectDetail.back")}
          </Link>
          <div className={styles.detailMessage}>
            <h1 className={styles.detailTitle}>{t("projectDetail.notFound")}</h1>
            <p className={styles.detailLead}>{t("projectDetail.notFoundLead")}</p>
          </div>
        </div>
      </main>
    </>
  );
}
