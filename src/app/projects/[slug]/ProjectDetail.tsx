"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { resolveMediaUrl } from "@/lib/api";
import { useProject } from "@/lib/queries/projects";
import type { Project } from "@/types/project";
import styles from "./ProjectDetail.module.scss";

const CASE_STUDY_SECTIONS: { key: keyof Project; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "challenge", label: "Challenge" },
  { key: "result", label: "Result" },
];

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg", ".ogv", ".mov", ".m4v"];

function isVideoUrl(url: string): boolean {
  const path = url.split("?")[0].toLowerCase();
  return VIDEO_EXTENSIONS.some((ext) => path.endsWith(ext));
}

function PdfEmbed({ url, title }: { url: string; title: string }) {
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
    return (
      <p className={styles.body}>
        Couldn&apos;t preview this PDF. Use the link below to open it.
      </p>
    );
  }

  if (!blobUrl) {
    return <div className={styles.pdfLoading}>Loading PDF…</div>;
  }

  return <iframe src={blobUrl} className={styles.pdfViewer} title={title} />;
}

export function ProjectDetail({ slug }: { slug: string }) {
  const { data: project, isLoading, isError, error } = useProject(slug);

  const notFound =
    isError && error instanceof Error && error.message === "not-found";

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Link href="/#projects" className={styles.back}>
          ← Back to projects
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
            <h1 className={styles.title}>Project not found</h1>
            <p className={styles.lead}>
              We couldn&apos;t find a project at this address.
            </p>
          </div>
        )}

        {isError && !notFound && (
          <p className={styles.message} role="alert">
            {error instanceof Error
              ? error.message
              : "Could not load this project."}
          </p>
        )}

        {project && <ProjectBody project={project} />}
      </div>
    </main>
  );
}

function ProjectBody({ project }: { project: Project }) {
  const imageUrl = resolveMediaUrl(project.image);
  const secondaryUrl = resolveMediaUrl(project.secondary_media);
  const pdfUrl = resolveMediaUrl(project.pdf);
  const caseStudy = CASE_STUDY_SECTIONS.filter(
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
                Visit project →
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkSecondary}
              >
                View on GitHub
              </a>
            )}
          </div>
        )}
      </header>

      {imageUrl && (
        <div className={styles.cover}>
          <Image
            src={imageUrl}
            alt={project.title}
            fill
            className={styles.coverImage}
            sizes="(max-width: 1120px) 100vw, 1120px"
            priority
            unoptimized={process.env.NODE_ENV !== "production"}
          />
        </div>
      )}

      {project.description && (
        <section className={styles.section}>
          <h2 className={styles.caseLabel}>Overview</h2>
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
          ) : (
            <Image
              src={secondaryUrl}
              alt={`${project.title} — additional view`}
              fill
              className={styles.secondaryImage}
              sizes="(max-width: 1120px) 100vw, 1120px"
              unoptimized={process.env.NODE_ENV !== "production"}
            />
          )}
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
          <h2 className={styles.sectionTitle}>Document</h2>
          <PdfEmbed url={pdfUrl} title={`${project.title} PDF document`} />
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pdfLink}
          >
            Open PDF →
          </a>
        </section>
      )}

      {project.technologies.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Stack</h2>
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
