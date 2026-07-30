import { projectRecords } from "@/data/projects";
import { getProjectContent } from "@/i18n/projectContent";
import type { Locale } from "@/i18n";
import type { Project } from "@/types/project";

function localizeProject(
  record: (typeof projectRecords)[number],
  locale: Locale,
  id: number,
): Project | null {
  const content = getProjectContent(locale, record.slug);
  if (!content) return null;

  return {
    id,
    ...record,
    ...content,
  };
}

export function getLocalizedProjects(locale: Locale): Project[] {
  return projectRecords.flatMap((record, index) => {
    const project = localizeProject(record, locale, index + 1);
    return project ? [project] : [];
  });
}

export function getLocalizedProject(
  slug: string,
  locale: Locale = "en",
): Project | null {
  const index = projectRecords.findIndex((record) => record.slug === slug);
  if (index === -1) return null;
  return localizeProject(projectRecords[index], locale, index + 1);
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
