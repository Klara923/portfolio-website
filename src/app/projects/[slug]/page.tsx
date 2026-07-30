import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocalizedProject, getAllProjectSlugs } from "@/lib/projects";
import { ProjectDetail } from "./ProjectDetail";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getLocalizedProject(slug, "en");

  if (!project) {
    return { title: "Project not found" };
  }

  const description =
    project.shortDescription || project.description.slice(0, 160);

  return {
    title: project.title,
    description,
    openGraph: {
      title: project.title,
      description,
      type: "article",
      ...(project.image ? { images: [{ url: project.image, alt: project.title }] } : {}),
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getLocalizedProject(slug, "en");

  if (!project) {
    notFound();
  }

  return <ProjectDetail slug={slug} initialProject={project} />;
}
