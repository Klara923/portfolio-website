import type { Project } from "@/types/project";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

export function getApiBaseUrl(): string {
  return API_URL.replace(/\/$/, "");
}

export function resolveMediaUrl(path: string | null): string | null {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${getApiBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

export async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${getApiBaseUrl()}/api/projects/`);

  if (!res.ok) {
    throw new Error(`Failed to fetch projects (${res.status})`);
  }

  return res.json();
}

export async function getProject(slug: string): Promise<Project> {
  const res = await fetch(
    `${getApiBaseUrl()}/api/projects/${encodeURIComponent(slug)}/`,
  );

  if (res.status === 404) {
    throw new Error("not-found");
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch project (${res.status})`);
  }

  return res.json();
}
