export type ProjectCategory = "programming" | "design";

export type ProjectRecord = {
  slug: string;
  category: ProjectCategory;
  technologies: string[];
  image: string | null;
  secondaryMedia: string | null;
  pdf: string | null;
  projectUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
  displayOrder: number;
};

export type Project = ProjectRecord & {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
};
