import type { Project } from "@/types/project";
import type { SiteConfig } from "@/types/site";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

function getApiBaseUrl(): string {
  return API_URL.replace(/\/$/, "");
}

function getMediaBaseUrl(): string {
  return getApiBaseUrl().replace(/\/api$/, "");
}

export function resolveMediaUrl(path: string | null): string | null {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${getMediaBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

function withLanguage(url: string, language?: string): string {
  if (!language) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}lang=${encodeURIComponent(language)}`;
}

export async function getSiteConfig(): Promise<SiteConfig> {
  const res = await fetch(`${getApiBaseUrl()}/config/`);

  if (!res.ok) {
    throw new Error(`Failed to fetch site config (${res.status})`);
  }

  return res.json();
}

export async function getProjects(language?: string): Promise<Project[]> {
  const res = await fetch(
    withLanguage(`${getApiBaseUrl()}/projects/`, language),
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch projects (${res.status})`);
  }

  return res.json();
}

export async function getProject(
  slug: string,
  language?: string,
): Promise<Project> {
  const res = await fetch(
    withLanguage(
      `${getApiBaseUrl()}/projects/${encodeURIComponent(slug)}/`,
      language,
    ),
  );

  if (res.status === 404) {
    throw new Error("not-found");
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch project (${res.status})`);
  }

  return res.json();
}
