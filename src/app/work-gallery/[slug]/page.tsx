import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailView from "@/components/sections/ProjectDetailView";
import { galleryProjects, getProject } from "@/data/projects";

export async function generateStaticParams() {
  return galleryProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.fullTitle} — Past Project`,
    description: project.intentLead,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return <ProjectDetailView project={project} />;
}
