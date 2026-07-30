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
import { getPortfolioArray, getPortfolioString, getTranslation } from "@/i18n";
import { useLanguage } from "@/providers/LanguageProvider";

export function usePortfolioData() {
  const { locale } = useLanguage();

  return useMemo(() => {
    const localizedEducation: EducationEntry[] = education.map((entry) => {
      const title =
        getPortfolioString(locale, `portfolio.education.${entry.id}.title`) ??
        entry.title;
      const period =
        getPortfolioString(locale, `portfolio.education.${entry.id}.period`) ??
        entry.period;
      const location =
        getPortfolioString(
          locale,
          `portfolio.education.${entry.id}.location`,
        ) ?? entry.location;

      return {
        ...entry,
        title,
        period,
        ...(location ? { location } : {}),
      };
    });

    const localizedWork: ExperienceEntry[] = workExperience.map((entry) => {
      const role =
        getPortfolioString(locale, `portfolio.work.${entry.id}.role`) ??
        entry.role;
      const period =
        getPortfolioString(locale, `portfolio.work.${entry.id}.period`) ??
        entry.period;
      const location = getPortfolioString(
        locale,
        `portfolio.work.${entry.id}.location`,
      );
      const bullets = getPortfolioArray(
        locale,
        `portfolio.work.${entry.id}.bullets`,
      );

      return {
        ...entry,
        role,
        period,
        ...(location ? { location } : {}),
        ...(bullets.length > 0 ? { bullets } : {}),
      };
    });

    const localizedExtra: ExperienceEntry[] = extraExperience.map((entry) => ({
      ...entry,
      role:
        getPortfolioString(locale, `portfolio.extra.${entry.id}.role`) ??
        entry.role,
    }));

    const localizedLanguages: LanguageEntry[] = languages.map((entry) => ({
      ...entry,
      name:
        getPortfolioString(
          locale,
          `portfolio.spokenLanguages.${entry.id}.name`,
        ) ?? entry.name,
      level:
        getPortfolioString(
          locale,
          `portfolio.spokenLanguages.${entry.id}.level`,
        ) ?? entry.level,
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
