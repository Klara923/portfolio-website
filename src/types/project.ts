export type Project = {
  id: number;
  slug: string;
  category: "programming" | "design";
  title: string;
  description: string;
  short_description: string;
  technologies: string[];
  image: string | null;
  secondary_media: string | null;
  pdf: string | null;
  project_url: string;
  github_url: string;
  featured: boolean;
  display_order: number;
};
