"use client";

import { useMemo } from "react";
import {
  education,
  extraExperience,
  languages,
  skillCategories,
  workExperience,
  type EducationEntry,
  type ExperienceEntry,
  type LanguageEntry,
  type SkillCategory,
} from "@/data/portfolio";
import { getTranslation, getTranslationArray } from "@/i18n";
import { useLanguage } from "@/providers/LanguageProvider";

export function usePortfolioData() {
  const { locale } = useLanguage();

  return useMemo(() => {
    const localizedEducation: EducationEntry[] = education.map((entry) => {
      const periodPath = `portfolio.education.${entry.id}.period`;
      const locationPath = `portfolio.education.${entry.id}.location`;
      const localizedPeriod = getTranslation(locale, periodPath);
      const localizedLocation = getTranslation(locale, locationPath);

      return {
        ...entry,
        title: getTranslation(locale, `portfolio.education.${entry.id}.title`),
        ...(localizedPeriod !== periodPath ? { period: localizedPeriod } : {}),
        ...(localizedLocation !== locationPath
          ? { location: localizedLocation }
          : {}),
      };
    });

    const localizedWork: ExperienceEntry[] = workExperience.map((entry) => {
      const bullets = getTranslationArray(
        locale,
        `portfolio.work.${entry.id}.bullets`,
      );
      const locationPath = `portfolio.work.${entry.id}.location`;
      const localizedLocation = getTranslation(locale, locationPath);
      const periodPath = `portfolio.work.${entry.id}.period`;
      const localizedPeriod = getTranslation(locale, periodPath);

      return {
        ...entry,
        role: getTranslation(locale, `portfolio.work.${entry.id}.role`),
        ...(localizedPeriod !== periodPath ? { period: localizedPeriod } : {}),
        ...(localizedLocation !== locationPath
          ? { location: localizedLocation }
          : {}),
        ...(bullets.length > 0 ? { bullets } : {}),
      };
    });

    const localizedExtra: ExperienceEntry[] = extraExperience.map((entry) => ({
      ...entry,
      role: getTranslation(locale, `portfolio.extra.${entry.id}.role`),
    }));

    const localizedLanguages: LanguageEntry[] = languages.map((entry) => ({
      ...entry,
      name: getTranslation(
        locale,
        `portfolio.spokenLanguages.${entry.id}.name`,
      ),
      level: getTranslation(
        locale,
        `portfolio.spokenLanguages.${entry.id}.level`,
      ),
    }));

    const localizedSkills: SkillCategory[] = skillCategories.map((category) => ({
      ...category,
      label: getTranslation(locale, `skills.${category.id}`),
    }));

    return {
      education: localizedEducation,
      workExperience: localizedWork,
      extraExperience: localizedExtra,
      languages: localizedLanguages,
      skillCategories: localizedSkills,
    };
  }, [locale]);
}
