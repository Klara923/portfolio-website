import { useQuery } from "@tanstack/react-query";
import { getProject, getProjects } from "@/lib/api";
import { useLanguage } from "@/providers/LanguageProvider";

const projectKeys = {
  all: (language: string) => ["projects", language] as const,
  detail: (slug: string, language: string) =>
    ["projects", slug, language] as const,
};

export function useProjects() {
  const { language, ready } = useLanguage();

  return useQuery({
    queryKey: projectKeys.all(language),
    queryFn: () => getProjects(language),
    enabled: ready,
    staleTime: 60 * 1000,
  });
}

export function useProject(slug: string) {
  const { language, ready } = useLanguage();

  return useQuery({
    queryKey: projectKeys.detail(slug, language),
    queryFn: () => getProject(slug, language),
    enabled: ready,
    staleTime: 60 * 1000,
    retry: (failureCount, error) =>
      error instanceof Error && error.message === "not-found"
        ? false
        : failureCount < 1,
  });
}
