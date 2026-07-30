export type EducationEntry = {
  id: string;
  title: string;
  period: string;
  institution: string;
  location?: string;
};

export type ExperienceEntry = {
  id: string;
  organization: string;
  period: string;
  role: string;
  location?: string;
  description?: string;
  bullets?: string[];
  url?: string;
};

export type LanguageEntry = {
  id: string;
  name: string;
  level: string;
};

export type SkillCategoryId = "frontend" | "backend" | "tools" | "design";

export type SkillCategory = {
  id: SkillCategoryId;
  label: string;
  skills: string[];
};
