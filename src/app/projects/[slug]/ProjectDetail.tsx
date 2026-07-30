"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ProjectImage } from "@/components/ProjectImage/ProjectImage";
import { useProjectData } from "@/hooks/useProjectsData";
import { resolveMediaUrl } from "@/lib/projects";
import { isImageUrl, isPdfUrl, isVideoUrl } from "@/lib/media";
import { useLanguage } from "@/providers/LanguageProvider";
import type { Project } from "@/types/project";
import styles from "@/styles/pages.module.scss";

function PdfEmbed({
  url,
  title,
  previewError,
  loadingLabel,
}: {
  url: string;
  title: string;
  previewError: string;
  loadingLabel: string;
}) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    let objectUrl: string | null = null;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load PDF (${res.status})`);
        return res.blob();
      })
      .then((blob) => {
        if (!active) return;
        objectUrl = URL.createObjectURL(blob);
        setBlobUrl(objectUrl);
      })
      .catch(() => {
        if (active) setFailed(true);
      });

    return () => {
      active = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [url]);

  if (failed) {
    return <p className={styles.detailBody}>{previewError}</p>;
  }

  if (!blobUrl) {
    return <div className={styles.detailPdfLoading}>{loadingLabel}</div>;
  }

  return (
    <iframe
      src={blobUrl}
      className={styles.detailPdfViewer}
      title={title}
    />
  );
}

type ProjectDetailProps = {
  slug: string;
  initialProject?: Project;
};

export function ProjectDetail({ slug, initialProject }: ProjectDetailProps) {
  const { t } = useLanguage();
  const localizedProject = useProjectData(slug);
  const project = localizedProject ?? initialProject;

  return (
    <>
      <SiteHeader />
      <main className={styles.detailPage}>
        <div className={styles.detailInner}>
          <Link href="/#projects" className={styles.detailBack}>
            {t("projectDetail.back")}
          </Link>

          {!project && (
            <div className={styles.detailMessage}>
              <h1 className={styles.detailTitle}>
                {t("projectDetail.notFound")}
              </h1>
              <p className={styles.detailLead}>
                {t("projectDetail.notFoundLead")}
              </p>
            </div>
          )}

          {project && <ProjectBody project={project} />}
        </div>
      </main>
    </>
  );
}

function ProjectBody({ project }: { project: Project }) {
  const { t } = useLanguage();
  const imageUrl = resolveMediaUrl(project.image);
  const secondaryUrl = resolveMediaUrl(project.secondaryMedia);
  const pdfUrl = resolveMediaUrl(project.pdf);

  return (
    <article>
      <header className={styles.detailHeader}>
        <h1 className={styles.detailTitle}>{project.title}</h1>
        {project.shortDescription && (
          <p className={styles.detailLead}>{project.shortDescription}</p>
        )}

        {(project.projectUrl || project.githubUrl) && (
          <div className={styles.detailLinks}>
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.detailLinkPrimary}
              >
                {t("projectDetail.visitProject")}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.detailLinkSecondary}
              >
                {t("projectDetail.viewGithub")}
              </a>
            )}
          </div>
        )}
      </header>

      {imageUrl && isImageUrl(imageUrl) && (
        <div className={styles.detailCover}>
          <ProjectImage
            src={imageUrl}
            alt={project.title}
            fill
            className={styles.detailCoverImage}
            sizes="(max-width: 1120px) 100vw, 1120px"
            priority
          />
        </div>
      )}

      {project.description && (
        <section className={styles.detailSection}>
          <h2 className={styles.detailCaseLabel}>{t("projectDetail.overview")}</h2>
          <p className={styles.detailBody}>{project.description}</p>
        </section>
      )}

      {secondaryUrl && (
        <div className={styles.detailSecondaryMedia}>
          {isVideoUrl(secondaryUrl) ? (
            <video
              className={styles.detailSecondaryVideo}
              src={secondaryUrl}
              controls
              loop
              muted
              playsInline
            />
          ) : isPdfUrl(secondaryUrl) ? (
            <a
              href={secondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.detailPdfLink}
            >
              {t("projectDetail.viewPdf")}
            </a>
          ) : isImageUrl(secondaryUrl) ? (
            <ProjectImage
              src={secondaryUrl}
              alt={`${project.title} — ${t("projectDetail.additionalView")}`}
              fill
              className={styles.detailSecondaryImage}
              sizes="(max-width: 1120px) 100vw, 1120px"
            />
          ) : null}
        </div>
      )}

      {pdfUrl && (
        <section className={styles.detailSection}>
          <h2 className={styles.detailSectionTitle}>
            {t("projectDetail.document")}
          </h2>
          <PdfEmbed
            key={pdfUrl}
            url={pdfUrl}
            title={`${project.title} ${t("projectDetail.pdfTitle")}`}
            previewError={t("projectDetail.pdfPreviewError")}
            loadingLabel={t("projectDetail.pdfLoading")}
          />
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.detailPdfLink}
          >
            {t("projectDetail.openPdf")}
          </a>
        </section>
      )}

      {project.technologies.length > 0 && (
        <section className={styles.detailSection}>
          <h2 className={styles.detailSectionTitle}>
            {t("projectDetail.stack")}
          </h2>
          <ul className={styles.detailStack}>
            {project.technologies.map((tech) => (
              <li key={tech} className={styles.detailStackItem}>
                {tech}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
