import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getProjects, resolveMediaUrl } from "@/lib/api";
import { ProjectDetail } from "./ProjectDetail";

export const revalidate = 3600;

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const projects = await getProjects();
    return projects.map((project) => ({ slug: project.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const project = await getProject(slug);
    const description =
      project.short_description || project.description.slice(0, 160);
    const imageUrl = resolveMediaUrl(project.image);

    return {
      title: project.title,
      description,
      openGraph: {
        title: project.title,
        description,
        type: "article",
        ...(imageUrl ? { images: [{ url: imageUrl, alt: project.title }] } : {}),
      },
    };
  } catch (error) {
    if (error instanceof Error && error.message === "not-found") {
      return { title: "Project not found" };
    }

    return { title: "Portfolio" };
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  try {
    const project = await getProject(slug);
    return <ProjectDetail slug={slug} initialProject={project} />;
  } catch (error) {
    if (error instanceof Error && error.message === "not-found") {
      notFound();
    }

    return <ProjectDetail slug={slug} />;
  }
}
