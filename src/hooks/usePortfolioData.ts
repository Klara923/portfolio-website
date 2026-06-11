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
  const { language } = useLanguage();
  const locale = language === "pl" ? "pl" : "en";

  return useMemo(() => {
    const localizedEducation: EducationEntry[] = education.map((entry) => ({
      ...entry,
      title: getTranslation(
        locale,
        `portfolio.education.${entry.id}.title`,
      ),
    }));

    const localizedWork: ExperienceEntry[] = workExperience.map((entry) => {
      const bullets = getTranslationArray(
        locale,
        `portfolio.work.${entry.id}.bullets`,
      );

      return {
        ...entry,
        role: getTranslation(locale, `portfolio.work.${entry.id}.role`),
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
