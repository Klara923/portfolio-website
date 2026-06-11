"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ProjectImage } from "@/components/ProjectImage/ProjectImage";
import { resolveMediaUrl } from "@/lib/api";
import { isImageUrl, isPdfUrl, isVideoUrl } from "@/lib/media";
import { useProject } from "@/lib/queries/projects";
import { useLanguage } from "@/providers/LanguageProvider";
import type { Project } from "@/types/project";
import styles from "./ProjectDetail.module.scss";

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

    setBlobUrl(null);
    setFailed(false);

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
    return <p className={styles.body}>{previewError}</p>;
  }

  if (!blobUrl) {
    return <div className={styles.pdfLoading}>{loadingLabel}</div>;
  }

  return <iframe src={blobUrl} className={styles.pdfViewer} title={title} />;
}

export function ProjectDetail({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const { data: project, isLoading, isError, error } = useProject(slug);

  const notFound =
    isError && error instanceof Error && error.message === "not-found";

  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <div className={styles.inner}>
          <Link href="/#projects" className={styles.back}>
            {t("projectDetail.back")}
          </Link>

          {isLoading && (
            <div className={styles.loading} aria-busy="true">
              <div className={styles.skeletonHero} />
              <div className={styles.skeletonLine} />
              <div className={styles.skeletonLine} />
            </div>
          )}

          {notFound && (
            <div className={styles.message}>
              <h1 className={styles.title}>{t("projectDetail.notFound")}</h1>
              <p className={styles.lead}>{t("projectDetail.notFoundLead")}</p>
            </div>
          )}

          {isError && !notFound && (
            <p className={styles.message} role="alert">
              {error instanceof Error
                ? error.message
                : t("projectDetail.loadError")}
            </p>
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
  const secondaryUrl = resolveMediaUrl(project.secondary_media);
  const pdfUrl = resolveMediaUrl(project.pdf);

  const caseStudySections: { key: keyof Project; label: string }[] = [
    { key: "problem", label: t("projectDetail.problem") },
    { key: "solution", label: t("projectDetail.solution") },
    { key: "challenge", label: t("projectDetail.challenge") },
    { key: "result", label: t("projectDetail.result") },
  ];

  const caseStudy = caseStudySections.filter(
    (section) => (project[section.key] as string)?.trim().length > 0,
  );

  return (
    <article>
      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        {project.short_description && (
          <p className={styles.lead}>{project.short_description}</p>
        )}

        {(project.project_url || project.github_url) && (
          <div className={styles.links}>
            {project.project_url && (
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkPrimary}
              >
                {t("projectDetail.visitProject")}
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkSecondary}
              >
                {t("projectDetail.viewGithub")}
              </a>
            )}
          </div>
        )}
      </header>

      {imageUrl && isImageUrl(imageUrl) && (
        <div className={styles.cover}>
          <ProjectImage
            src={imageUrl}
            alt={project.title}
            fill
            className={styles.coverImage}
            sizes="(max-width: 1120px) 100vw, 1120px"
            priority
          />
        </div>
      )}

      {project.description && (
        <section className={styles.section}>
          <h2 className={styles.caseLabel}>{t("projectDetail.overview")}</h2>
          <p className={styles.body}>{project.description}</p>
        </section>
      )}

      {secondaryUrl && (
        <div className={styles.secondaryMedia}>
          {isVideoUrl(secondaryUrl) ? (
            <video
              className={styles.secondaryVideo}
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
              className={styles.pdfLink}
            >
              {t("projectDetail.viewPdf")}
            </a>
          ) : isImageUrl(secondaryUrl) ? (
            <ProjectImage
              src={secondaryUrl}
              alt={`${project.title} — ${t("projectDetail.additionalView")}`}
              fill
              className={styles.secondaryImage}
              sizes="(max-width: 1120px) 100vw, 1120px"
            />
          ) : null}
        </div>
      )}

      {caseStudy.length > 0 && (
        <div className={styles.caseStudy}>
          {caseStudy.map((section) => (
            <section key={section.key} className={styles.caseSection}>
              <h2 className={styles.caseLabel}>{section.label}</h2>
              <div className={styles.caseBlock}>
                <p className={styles.body}>{project[section.key] as string}</p>
              </div>
            </section>
          ))}
        </div>
      )}

      {pdfUrl && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("projectDetail.document")}</h2>
          <PdfEmbed
            url={pdfUrl}
            title={`${project.title} ${t("projectDetail.pdfTitle")}`}
            previewError={t("projectDetail.pdfPreviewError")}
            loadingLabel={t("projectDetail.pdfLoading")}
          />
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pdfLink}
          >
            {t("projectDetail.openPdf")}
          </a>
        </section>
      )}

      {project.technologies.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("projectDetail.stack")}</h2>
          <ul className={styles.stack}>
            {project.technologies.map((tech) => (
              <li key={tech} className={styles.stackItem}>
                {tech}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
