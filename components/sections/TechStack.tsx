"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { fadeUp, stagger } from "@/lib/animations"
import { Code2, Server, Database, Cloud, Brain, Palette } from "lucide-react"

/* ── Category data with descriptions, images, and colors ── */
interface TechItem {
    name: string
    level: "Expert" | "Advanced" | "Proficient"
    description: string
}

interface TechCategory {
    id: string
    category: string
    icon: React.ComponentType<{ className?: string }>
    color: string
    description: string
    image?: string
    gradientFallback: string
    techs: TechItem[]
}

const techCategories: TechCategory[] = [
    {
        id: "frontend",
        category: "Frontend",
        icon: Code2,
        color: "#8b5cf6",
        description: "We craft pixel-perfect interfaces that are fast, accessible, and delightful. From React SPAs to native mobile apps — every pixel has purpose.",
        image: "/images/tech/frontend.png",
        gradientFallback: "radial-gradient(ellipse at 30% 40%, #8b5cf640, transparent 70%)",
        techs: [
            { name: "Next.js", level: "Expert", description: "Full-stack React framework for production" },
            { name: "React", level: "Expert", description: "Component-based UI library" },
            { name: "Vue.js", level: "Advanced", description: "Progressive JavaScript framework" },
            { name: "Flutter", level: "Expert", description: "Cross-platform native apps from one codebase" },
            { name: "Swift", level: "Advanced", description: "Native iOS & macOS development" },
            { name: "Svelte", level: "Proficient", description: "Compiled framework for lean builds" },
        ],
    },
    {
        id: "backend",
        category: "Backend",
        icon: Server,
        color: "#10b981",
        description: "Scalable APIs, real-time systems, and microservices that handle millions of requests. We write backends that never go down.",
        image: "/images/tech/backend.png",
        gradientFallback: "radial-gradient(ellipse at 70% 50%, #10b98140, transparent 70%)",
        techs: [
            { name: "Node.js", level: "Expert", description: "High-performance JS runtime" },
            { name: "Python", level: "Expert", description: "AI, scripting & web services" },
            { name: "Go", level: "Advanced", description: "Blazing-fast concurrent systems" },
            { name: "Rust", level: "Proficient", description: "Memory-safe systems programming" },
            { name: "Bun", level: "Advanced", description: "Ultra-fast JS runtime & bundler" },
        ],
    },
    {
        id: "database",
        category: "Database",
        icon: Database,
        color: "#f59e0b",
        description: "From relational to NoSQL, in-memory caching to edge databases — we architect data layers that scale from day one.",
        image: "/images/tech/database.png",
        gradientFallback: "radial-gradient(ellipse at 40% 60%, #f59e0b40, transparent 70%)",
        techs: [
            { name: "PostgreSQL", level: "Expert", description: "Advanced relational database" },
            { name: "MongoDB", level: "Advanced", description: "Flexible document database" },
            { name: "Redis", level: "Expert", description: "In-memory cache & message broker" },
            { name: "Turso", level: "Advanced", description: "Edge-native SQLite database" },
            { name: "Supabase", level: "Expert", description: "Open-source Firebase alternative" },
        ],
    },
    {
        id: "cloud",
        category: "Cloud & DevOps",
        icon: Cloud,
        color: "#06b6d4",
        description: "We deploy to the edge, automate CI/CD, and build infrastructure that scales automatically. Zero-downtime deploys, always.",
        image: "/images/tech/cloud.png",
        gradientFallback: "radial-gradient(ellipse at 60% 30%, #06b6d440, transparent 70%)",
        techs: [
            { name: "Vercel", level: "Expert", description: "Edge-first deployment platform" },
            { name: "AWS", level: "Expert", description: "Enterprise cloud infrastructure" },
            { name: "GCP", level: "Advanced", description: "Google Cloud Platform services" },
            { name: "Cloudflare", level: "Advanced", description: "CDN, Workers & edge computing" },
            { name: "Docker", level: "Expert", description: "Container orchestration & deployment" },
        ],
    },
    {
        id: "ai",
        category: "AI & Machine Learning",
        icon: Brain,
        color: "#a855f7",
        description: "From GPT integrations to custom-trained models — we build AI features that solve real problems, not just hype.",
        image: "/images/tech/ai.png",
        gradientFallback: "radial-gradient(ellipse at 50% 50%, #a855f740, transparent 70%)",
        techs: [
            { name: "OpenAI", level: "Expert", description: "GPT-4, DALL-E, Whisper APIs" },
            { name: "LangChain", level: "Advanced", description: "AI agent & RAG orchestration" },
            { name: "Hugging Face", level: "Advanced", description: "Open-source model hub" },
            { name: "TensorFlow", level: "Proficient", description: "ML model training & inference" },
        ],
    },
    {
        id: "design",
        category: "Design & Creative",
        icon: Palette,
        color: "#ec4899",
        description: "Design isn't decoration — it's strategy. We prototype in Figma, animate with Framer Motion, and bring 3D to the web.",
        image: "/images/tech/design.png",
        gradientFallback: "radial-gradient(ellipse at 40% 40%, #ec489940, transparent 70%)",
        techs: [
            { name: "Figma", level: "Expert", description: "Collaborative design & prototyping" },
            { name: "Tailwind", level: "Expert", description: "Utility-first CSS framework" },
            { name: "Framer Motion", level: "Advanced", description: "React animation library" },
            { name: "Three.js", level: "Advanced", description: "3D graphics for the web" },
        ],
    },
]

const levelConfig: Record<string, { color: string; bg: string }> = {
    Expert: { color: "#10b981", bg: "rgba(16,185,129,0.08)" },
    Advanced: { color: "#8b5cf6", bg: "rgba(139,92,246,0.08)" },
    Proficient: { color: "#f59e0b", bg: "rgba(245,158,11,0.08)" },
}

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState<string>("frontend")
    const current = techCategories.find((c) => c.id === activeCategory)!
    const CurrentIcon = current.icon

    return (
        <section id="tech" className="py-10 overflow-hidden">
            <div className="section-container">
                <motion.div
                    variants={stagger(0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {/* ── Header ── */}
                    <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--overlay-6)] bg-[var(--overlay-2)] mb-6">
                            <Code2 className="w-3.5 h-3.5 text-[var(--overlay-30)]" />
                            <span className="text-[11px] sm:text-[12px] text-[var(--overlay-35)] font-medium uppercase tracking-widest">Tech Stack</span>
                        </div>
                        <h2 className="font-bold text-[var(--color-text-primary)]" style={{ fontSize: "var(--font-size-h2)" }}>
                            Built With <span className="gradient-text">Battle-Tested</span> Tech
                        </h2>
                        <p className="mt-4 text-[var(--overlay-35)] text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
                            We don&apos;t chase hype — we pick the right tool for every job. Here&apos;s the technology that powers your products.
                        </p>
                    </motion.div>

                    {/* ── Category tabs ── */}
                    <motion.div variants={fadeUp} className="flex justify-center gap-1 sm:gap-1.5 mb-10 sm:mb-12 flex-wrap">
                        {techCategories.map((cat) => {
                            const CatIcon = cat.icon
                            const isActive = cat.id === activeCategory
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`relative px-3 sm:px-4 py-2 text-[12px] sm:text-[13px] font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 ${isActive
                                        ? "text-[var(--color-text-primary)]"
                                        : "text-[var(--overlay-25)] hover:text-[var(--overlay-50)]"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="techTab"
                                            className="absolute inset-0 rounded-full border bg-[var(--overlay-5)]"
                                            style={{ borderColor: `${cat.color}30` }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <CatIcon className="w-3.5 h-3.5 relative z-10" />
                                    <span className="relative z-10 hidden sm:inline">{cat.category}</span>
                                </button>
                            )
                        })}
                    </motion.div>

                    {/* ── Showcase Area ── */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.35 }}
                            className="max-w-5xl mx-auto"
                        >
                            {/* Hero card with image */}
                            <div className="relative rounded-2xl border border-[var(--overlay-6)] overflow-hidden mb-5">
                                {/* Background image or gradient */}
                                <div className="absolute inset-0 z-0">
                                    {current.image ? (
                                        <>
                                            <Image
                                                src={current.image}
                                                alt={current.category}
                                                fill
                                                className="object-cover opacity-40"
                                                sizes="(max-width: 1024px) 100vw, 1024px"
                                            />
                                            <div className="absolute inset-0 bg-[oklch(0.06_0.01_280)/75%]" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.06_0.01_280)/95%] via-[oklch(0.06_0.01_280)/70%] to-[oklch(0.06_0.01_280)/50%]" />
                                        </>
                                    ) : (
                                        <div className="absolute inset-0" style={{ background: current.gradientFallback }} />
                                    )}
                                </div>

                                <div className="relative z-[1] p-7 sm:p-10 lg:p-12">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                        {/* Left: category info */}
                                        <div className="max-w-md">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div
                                                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                                                    style={{
                                                        borderColor: `${current.color}30`,
                                                        background: `${current.color}12`,
                                                        color: current.color,
                                                    }}
                                                >
                                                    <CurrentIcon className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">{current.category}</h3>
                                            </div>
                                            <p className="text-[14px] sm:text-[15px] text-[var(--overlay-35)] leading-relaxed">
                                                {current.description}
                                            </p>
                                        </div>

                                        {/* Right: tech count */}
                                        <div className="flex items-center gap-3">
                                            <div className="text-center">
                                                <div className="text-3xl font-extrabold" style={{ color: current.color }}>
                                                    {current.techs.length}
                                                </div>
                                                <div className="text-[10px] text-[var(--overlay-20)] uppercase tracking-wider font-medium">Technologies</div>
                                            </div>
                                            <div className="w-px h-10 bg-[var(--overlay-6)]" />
                                            <div className="text-center">
                                                <div className="text-3xl font-extrabold" style={{ color: current.color }}>
                                                    {current.techs.filter((t) => t.level === "Expert").length}
                                                </div>
                                                <div className="text-[10px] text-[var(--overlay-20)] uppercase tracking-wider font-medium">Expert-Level</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tech items grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                {current.techs.map((tech, i) => {
                                    const lc = levelConfig[tech.level]
                                    return (
                                        <motion.div
                                            key={tech.name}
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: i * 0.05 }}
                                            className="group relative rounded-xl border border-[var(--overlay-6)] bg-white/[0.015] p-5 hover:bg-[var(--overlay-3)] hover:border-[var(--overlay-12)] transition-all duration-400"
                                            style={{
                                                // @ts-expect-error: CSS custom property
                                                "--card-glow": `${current.color}10`,
                                            }}
                                            onMouseEnter={(e) => {
                                                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px -8px ${current.color}15`
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.currentTarget as HTMLElement).style.boxShadow = "none"
                                            }}
                                        >
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className="text-[15px] font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                                                    {tech.name}
                                                </h4>
                                                <span
                                                    className="px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wider uppercase shrink-0"
                                                    style={{
                                                        color: lc.color,
                                                        background: lc.bg,
                                                    }}
                                                >
                                                    {tech.level}
                                                </span>
                                            </div>
                                            <p className="text-[12px] text-[var(--overlay-25)] leading-snug group-hover:text-[var(--overlay-40)] transition-colors duration-300">
                                                {tech.description}
                                            </p>

                                            {/* Progress indicator */}
                                            <div className="mt-3 h-[2px] rounded-full bg-[var(--overlay-4)] overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{
                                                        width: tech.level === "Expert" ? "100%" : tech.level === "Advanced" ? "75%" : "50%",
                                                    }}
                                                    transition={{ duration: 0.8, delay: i * 0.05 + 0.2 }}
                                                    className="h-full rounded-full"
                                                    style={{ background: `linear-gradient(to right, ${current.color}60, ${current.color})` }}
                                                />
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* ── Bottom message ── */}
                    <motion.div variants={fadeUp} className="mt-10 sm:mt-14 text-center">
                        <p className="text-[12px] sm:text-[13px] text-[var(--overlay-20)] max-w-lg mx-auto leading-relaxed">
                            Don&apos;t see what you need? We adapt to your stack. <a href="#contact" className="text-[var(--overlay-40)] hover:text-[var(--overlay-60)] transition-colors underline underline-offset-2">Tell us about your project →</a>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
