import { projectRecords, type ProjectRecord } from "@/data/projects";
import { getProjectContent } from "@/i18n/projectContent";
import type { Locale } from "@/i18n";
import type { Project } from "@/types/project";

function localizeProject(
  record: ProjectRecord,
  locale: Locale,
  id: number,
): Project {
  const content = getProjectContent(locale, record.slug);
  if (!content) {
    throw new Error("not-found");
  }

  return {
    id,
    slug: record.slug,
    category: record.category,
    technologies: record.technologies,
    image: record.image,
    secondary_media: record.secondary_media,
    pdf: record.pdf,
    project_url: record.project_url,
    github_url: record.github_url,
    featured: record.featured,
    display_order: record.display_order,
    ...content,
  };
}

export function getLocalizedProjects(locale: Locale): Project[] {
  return projectRecords.map((record, index) =>
    localizeProject(record, locale, index + 1),
  );
}

export function getLocalizedProject(
  slug: string,
  locale: Locale = "en",
): Project | null {
  const index = projectRecords.findIndex((record) => record.slug === slug);
  if (index === -1) {
    return null;
  }

  try {
    return localizeProject(projectRecords[index], locale, index + 1);
  } catch {
    return null;
  }
}

export function getAllProjectSlugs(): string[] {
  return projectRecords.map((record) => record.slug);
}

export function resolveMediaUrl(path: string | null): string | null {
  if (!path) return null;
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("/")
  ) {
    return path;
  }
  return `/${path}`;
}
