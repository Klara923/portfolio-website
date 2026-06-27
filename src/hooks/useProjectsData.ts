"use client";

import { useMemo } from "react";
import { getLocalizedProject, getLocalizedProjects } from "@/lib/projects";
import { useLanguage } from "@/providers/LanguageProvider";
import type { Project } from "@/types/project";

export function useProjectsData(): Project[] {
  const { locale } = useLanguage();

  return useMemo(() => getLocalizedProjects(locale), [locale]);
}

export function useProjectData(slug: string): Project | null {
  const { locale } = useLanguage();

  return useMemo(
    () => getLocalizedProject(slug, locale),
    [slug, locale],
  );
}
