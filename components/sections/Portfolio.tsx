"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { fadeUp, stagger } from "@/lib/animations"
import { projects, type Project } from "@/content/projects"
import {
    ExternalLink, ArrowUpRight, Briefcase, Clock, Users,
    Sparkles, ChevronRight, ArrowRight, Quote, Star
} from "lucide-react"

const filters = ["All", "Web", "Mobile", "SaaS", "AI"] as const
type FilterType = (typeof filters)[number]

function filterMatch(project: Project, filter: FilterType): boolean {
    if (filter === "All") return true
    return project.type.toLowerCase() === filter.toLowerCase()
}

/* ── Featured project — large hero-style card ── */
function FeaturedCard({ project }: { project: Project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5 }}
            layout
            className="col-span-full"
        >
            <Link href={`/projects/${project.id}`} className="block">
                <div className="group relative rounded-2xl overflow-hidden border border-[var(--overlay-6)] hover:border-[var(--overlay-12)] transition-all duration-500">
                    <div className="grid lg:grid-cols-[1.3fr_1fr]">
                        {/* Image side */}
                        <div className="relative overflow-hidden aspect-[16/10] lg:aspect-auto lg:min-h-[380px]">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                sizes="(max-width: 1024px) 100vw, 60vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--color-bg-primary)] lg:block hidden" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)/60%] to-transparent lg:hidden" />

                            {/* Type badge */}
                            <div className="absolute top-4 left-4 z-10">
                                <span
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold tracking-wider uppercase rounded-full backdrop-blur-xl border"
                                    style={{
                                        borderColor: `${project.color}40`,
                                        background: `${project.color}18`,
                                        color: project.color,
                                    }}
                                >
                                    <Star className="w-2.5 h-2.5" />
                                    Featured · {project.type}
                                </span>
                            </div>
                        </div>

                        {/* Content side */}
                        <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                            <div
                                className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-[70%] rounded-full blur-[80px] opacity-[0.06] hidden lg:block"
                                style={{ background: project.color }}
                            />

                            <div className="relative z-10">
                                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-text-primary)] transition-colors tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-[12px] sm:text-[13px] text-[var(--overlay-25)] leading-relaxed mb-5 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Key results */}
                                <div className="grid grid-cols-2 gap-2 mb-5">
                                    {project.results.slice(0, 4).map((r) => (
                                        <div key={r.metric} className="rounded-lg bg-[var(--overlay-2)] border border-[var(--overlay-4)] px-3 py-2.5">
                                            <div className="text-[15px] font-bold tracking-tight" style={{ color: project.color }}>{r.value}</div>
                                            <div className="text-[9px] text-[var(--overlay-20)] uppercase tracking-wider font-medium">{r.metric}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.stack.slice(0, 5).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-0.5 text-[8px] font-medium tracking-wider rounded-full bg-[var(--overlay-3)] text-[var(--overlay-20)] uppercase border border-[var(--overlay-4)]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                                    <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--overlay-40)] group-hover:text-[var(--overlay-70)] transition-colors">
                                        View Case Study
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="flex items-center gap-1.5 text-[10px] text-[var(--overlay-15)]">
                                        <Clock className="w-3 h-3" /> {project.timeline}
                                        <span className="mx-1">·</span>
                                        <Users className="w-3 h-3" /> {project.team}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

/* ── Standard project card with rich hover overlay ── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0.5)
    const mouseY = useMotionValue(0.5)
    const rotateX = useTransform(mouseY, [0, 1], [2, -2])
    const rotateY = useTransform(mouseX, [0, 1], [-2, 2])

    const handleMouse = (e: React.MouseEvent) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        mouseX.set((e.clientX - rect.left) / rect.width)
        mouseY.set((e.clientY - rect.top) / rect.height)
    }
    const resetMouse = () => { mouseX.set(0.5); mouseY.set(0.5) }

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
        >
            <Link href={`/projects/${project.id}`} className="block h-full">
                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouse}
                    onMouseLeave={resetMouse}
                    style={{ rotateX, rotateY, transformPerspective: 800 }}
                    className="group relative h-full rounded-2xl border border-[var(--overlay-5)] overflow-hidden cursor-pointer transition-all duration-500 hover:border-[var(--overlay-12)]"
                    whileHover={{
                        boxShadow: `0 8px 48px -12px ${project.color}25`,
                    }}
                >
                    {/* ── Image area ── */}
                    <div className="relative aspect-[16/11] overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent opacity-80" />

                        {/* Hover overlay with stats */}
                        <div className="absolute inset-0 bg-[var(--color-text-primary)]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                            {/* Key metrics in row */}
                            <div className="flex gap-4">
                                {project.results.slice(0, 2).map((r) => (
                                    <div key={r.metric} className="text-center">
                                        <div className="text-lg font-bold text-[var(--color-text-primary)]">{r.value}</div>
                                        <div className="text-[9px] text-[var(--overlay-40)] uppercase tracking-wider">{r.metric}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[var(--color-text-primary)] text-[12px] font-medium">
                                <ExternalLink className="w-3 h-3" />
                                View Case Study
                            </div>
                        </div>

                        {/* Type badge */}
                        <div className="absolute top-3 right-3 z-10">
                            <span
                                className="px-2 py-0.5 text-[8px] font-bold tracking-wider uppercase rounded-full backdrop-blur-md border"
                                style={{
                                    borderColor: `${project.color}30`,
                                    background: `${project.color}15`,
                                    color: project.color,
                                }}
                            >
                                {project.type}
                            </span>
                        </div>
                    </div>

                    {/* ── Content ── */}
                    <div className="relative p-4 sm:p-5">
                        <div
                            className="absolute -top-10 left-1/2 -translate-x-1/2 w-[50%] h-16 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                            style={{ background: project.color }}
                        />

                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-1.5">
                                <h3 className="text-[15px] font-bold text-[var(--overlay-80)] tracking-tight group-hover:text-[var(--color-text-primary)] transition-colors">
                                    {project.title}
                                </h3>
                                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[var(--overlay-3)] border border-[var(--overlay-6)] opacity-0 group-hover:opacity-100 -translate-y-0.5 group-hover:translate-y-0 transition-all duration-300 shrink-0 ml-2">
                                    <ArrowUpRight className="w-3 h-3 text-[var(--overlay-50)]" />
                                </div>
                            </div>

                            <p className="text-[11px] text-[var(--overlay-20)] leading-relaxed mb-3 line-clamp-2 group-hover:text-[var(--overlay-35)] transition-colors duration-300">
                                {project.description}
                            </p>

                            {/* Meta row */}
                            <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-1">
                                    {project.stack.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-1.5 py-0.5 text-[8px] font-medium tracking-wider rounded-md bg-[var(--overlay-3)] text-[var(--overlay-15)] uppercase group-hover:text-[var(--overlay-30)] group-hover:bg-[var(--overlay-5)] transition-colors duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.stack.length > 3 && (
                                        <span className="px-1.5 py-0.5 text-[8px] text-[var(--overlay-10)] font-medium">
                                            +{project.stack.length - 3}
                                        </span>
                                    )}
                                </div>
                                <span className="text-[9px] text-[var(--overlay-10)] font-medium flex items-center gap-1">
                                    <Clock className="w-2.5 h-2.5" />
                                    {project.timeline}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    )
}

/* ── Testimonial strip ── */
function TestimonialStrip({ project }: { project: Project }) {
    if (!project.testimonial) return null
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="col-span-full"
        >
            <div className="rounded-xl border border-[var(--overlay-4)] bg-white/[0.01] p-5 sm:p-6 flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-[var(--overlay-3)] border border-[var(--overlay-6)]">
                    <Quote className="w-3.5 h-3.5 text-[var(--overlay-15)]" />
                </div>
                <div>
                    <p className="text-[12px] sm:text-[13px] text-[var(--overlay-30)] leading-relaxed italic mb-2">
                        &ldquo;{project.testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="text-[11px] text-[var(--overlay-50)] font-medium">{project.testimonial.author}</span>
                        <span className="text-[var(--overlay-10)]">·</span>
                        <span className="text-[10px] text-[var(--overlay-15)]">{project.testimonial.role}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("All")
    const filtered = projects.filter((p) => filterMatch(p, activeFilter))

    // First project is featured (only in "All" view)
    const showFeatured = activeFilter === "All" && filtered.length > 0
    const featuredProject = showFeatured ? filtered[0] : null
    const restProjects = showFeatured ? filtered.slice(1) : filtered

    // Pick a random testimonial from the 3rd project for the strip
    const testimonialProject = filtered.find((p) => p.testimonial && p !== featuredProject) || null

    return (
        <section id="portfolio" className="py-10">
            <div className="section-container">
                <motion.div
                    variants={stagger(0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {/* ── Header ── */}
                    <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--overlay-6)] bg-[var(--overlay-2)] mb-5">
                            <Briefcase className="w-3.5 h-3.5 text-[var(--overlay-25)]" />
                            <span className="text-[10px] sm:text-[11px] text-[var(--overlay-30)] font-medium uppercase tracking-widest">Our Work</span>
                        </div>
                        <h2 className="font-bold text-[var(--color-text-primary)]" style={{ fontSize: "var(--font-size-h2)" }}>
                            Projects That <span className="gradient-text">Speak Volumes</span>
                        </h2>
                        <p className="mt-3 text-[var(--overlay-25)] text-[14px] sm:text-[15px] leading-relaxed max-w-xl mx-auto">
                            A selection of our finest work — from early-stage MVPs to production-ready enterprise platforms.
                        </p>
                    </motion.div>

                    {/* ── Filter Tabs ── */}
                    <motion.div variants={fadeUp} className="flex justify-center gap-1 mb-8 sm:mb-10 flex-wrap">
                        {filters.map((filter) => {
                            const count = projects.filter((p) => filterMatch(p, filter)).length
                            return (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`relative px-4 py-2 text-[12px] font-medium rounded-full transition-all duration-300 ${activeFilter === filter
                                        ? "text-[var(--color-text-primary)]"
                                        : "text-[var(--overlay-20)] hover:text-[var(--overlay-40)]"
                                        }`}
                                >
                                    {activeFilter === filter && (
                                        <motion.div
                                            layoutId="activePortfolioFilter"
                                            className="absolute inset-0 rounded-full border border-white/[0.1] bg-[var(--overlay-4)]"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-1.5">
                                        {filter}
                                        <span className={`text-[9px] ${activeFilter === filter ? "text-[var(--overlay-30)]" : "text-[var(--overlay-10)]"}`}>
                                            {count}
                                        </span>
                                    </span>
                                </button>
                            )
                        })}
                    </motion.div>

                    {/* ── Project Grid ── */}
                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <AnimatePresence mode="popLayout">
                            {/* Featured card (spans full width) */}
                            {featuredProject && (
                                <FeaturedCard key={`featured-${featuredProject.id}`} project={featuredProject} />
                            )}

                            {/* Rest of the project cards */}
                            {restProjects.map((project, i) => (
                                <ProjectCard key={project.id} project={project} index={i} />
                            ))}

                            {/* Testimonial strip after 3 cards */}
                            {testimonialProject && restProjects.length >= 3 && (
                                <TestimonialStrip key={`t-${testimonialProject.id}`} project={testimonialProject} />
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* ── Bottom CTA ── */}
                    <motion.div
                        variants={fadeUp}
                        className="text-center mt-10 sm:mt-14"
                    >
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--overlay-6)] bg-[var(--overlay-2)] text-[12px] font-medium text-[var(--overlay-35)] hover:text-[var(--overlay-70)] hover:border-[var(--overlay-15)] hover:bg-[var(--overlay-4)] transition-all duration-300"
                        >
                            Have a similar project? Let&apos;s talk
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
