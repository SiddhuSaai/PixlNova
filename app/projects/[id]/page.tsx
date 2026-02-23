import { notFound } from "next/navigation"
import { projects, getProjectById } from "@/content/projects"
import ProjectPageClient from "./ProjectPageClient"
import type { Metadata } from "next"

interface Props {
    params: Promise<{ id: string }>
}

export async function generateStaticParams() {
    return projects.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const project = getProjectById(id)
    if (!project) return {}
    return {
        title: `${project.title} — Case Study | PixlNova`,
        description: project.description,
    }
}

export default async function ProjectPage({ params }: Props) {
    const { id } = await params
    const project = getProjectById(id)
    if (!project) notFound()

    return <ProjectPageClient project={project} />
}
