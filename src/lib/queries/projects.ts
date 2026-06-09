import { useQuery } from "@tanstack/react-query";
import { getProject, getProjects } from "@/lib/api";

export const projectKeys = {
  all: ["projects"] as const,
  detail: (slug: string) => ["projects", slug] as const,
};

export function useProjects() {
  return useQuery({
    queryKey: projectKeys.all,
    queryFn: getProjects,
    staleTime: 60 * 1000,
  });
}

export function useProject(slug: string) {
  return useQuery({
    queryKey: projectKeys.detail(slug),
    queryFn: () => getProject(slug),
    staleTime: 60 * 1000,
    retry: (failureCount, error) =>
      error instanceof Error && error.message === "not-found"
        ? false
        : failureCount < 1,
  });
}
