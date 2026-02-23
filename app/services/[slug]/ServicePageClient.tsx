"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
    ArrowLeft, ArrowRight, Check, Globe, Smartphone, Monitor,
    Palette, Server, Bot, Rocket, Cloud, Zap, Shield, Clock,
    Code2, Layers, Eye, BarChart3, GitBranch, Terminal, Sparkles,
    ChevronRight, CheckCircle2, Target, Users
} from "lucide-react"
import { fadeUp, stagger, scaleIn } from "@/lib/animations"
import { MagneticButton } from "@/components/ui/MagneticButton"
import type { Service } from "@/content/services"

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
    Globe, Smartphone, Monitor, Palette, Server, Bot, Rocket, Cloud,
}

const developmentApproach = [
    {
        icon: GitBranch,
        title: "Modular Architecture",
        desc: "Every component is self-contained, testable, and reusable. We build design systems — not spaghetti code.",
    },
    {
        icon: Terminal,
        title: "CI/CD from Day One",
        desc: "Automated testing, preview deploys on every PR, and staging environments that mirror production exactly.",
    },
    {
        icon: Eye,
        title: "Performance Obsessed",
        desc: "We measure Core Web Vitals on every commit. Sub-second loads, lazy-loading, image optimization, and edge caching.",
    },
    {
        icon: Shield,
        title: "Security First",
        desc: "CSP headers, input sanitization, OAuth 2.0, rate limiting, and regular dependency audits. No shortcuts.",
    },
    {
        icon: Code2,
        title: "Clean, Typed Code",
        desc: "100% TypeScript, strict ESLint rules, comprehensive JSDoc, and code reviews on every merge request.",
    },
    {
        icon: Layers,
        title: "Scalable Infrastructure",
        desc: "Edge-first deployment, serverless functions, database connection pooling, and auto-scaling from zero to millions.",
    },
]

const whyUs = [
    { icon: Zap, stat: "3×", label: "Faster than agencies", desc: "We ship MVPs in weeks, not months" },
    { icon: BarChart3, stat: "98", label: "Avg. Lighthouse score", desc: "Performance is non-negotiable" },
    { icon: Users, stat: "150+", label: "Projects delivered", desc: "Across 40+ countries worldwide" },
    { icon: Target, stat: "98%", label: "Client retention", desc: "They come back for round two" },
]

export default function ServicePageClient({ service }: { service: Service }) {
    const Icon = iconMap[service.icon] || Globe
    const [activeProcess, setActiveProcess] = useState(0)

    return (
        <main className="relative bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] overflow-x-hidden">
            {/* ══════════════════════════════════════ */}
            {/*  HERO — Full viewport, content starts at top  */}
            {/* ══════════════════════════════════════ */}
            <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20 sm:pt-24">
                {/* Background Effects */}
                <div className="absolute inset-0 -z-10">
                    <div
                        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-[180px] opacity-[0.1]"
                        style={{ background: service.accentColor }}
                    />
                    <div
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage: `linear-gradient(${service.accentColor} 1px, transparent 1px), linear-gradient(90deg, ${service.accentColor} 1px, transparent 1px)`,
                            backgroundSize: "60px 60px",
                        }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent" />
                </div>

                <div className="section-container relative z-10">
                    {/* Back link */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                        <Link
                            href="/#services"
                            className="inline-flex items-center gap-2 text-[12px] text-[var(--overlay-30)] hover:text-[var(--overlay-60)] transition-colors mb-8"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            All Services
                        </Link>
                    </motion.div>

                    <motion.div variants={stagger(0.1)} initial="hidden" animate="visible" className="max-w-4xl">
                        {/* Badge */}
                        <motion.div variants={fadeUp} className="mb-5">
                            <span
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-medium border"
                                style={{
                                    borderColor: `color-mix(in oklch, ${service.accentColor}, transparent 70%)`,
                                    background: `color-mix(in oklch, ${service.accentColor}, transparent 92%)`,
                                    color: service.accentColor,
                                }}
                            >
                                <Icon className="w-3.5 h-3.5" />
                                {service.title}
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-5"
                        >
                            <span className="text-[var(--color-text-primary)]">{service.heroTagline.split("—")[0]}</span>
                            {service.heroTagline.includes("—") && (
                                <span style={{ color: service.accentColor }}>
                                    {"— " + service.heroTagline.split("—")[1]}
                                </span>
                            )}
                            {!service.heroTagline.includes("—") && (
                                <span className="block mt-1" style={{ color: service.accentColor }}>
                                    {service.heroTagline.split(".").length > 1
                                        ? service.heroTagline.split(".").pop()
                                        : ""}
                                </span>
                            )}
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            className="text-[15px] sm:text-[17px] text-[var(--overlay-35)] max-w-2xl leading-relaxed mb-8"
                        >
                            {service.longDescription}
                        </motion.p>

                        {/* CTA Row */}
                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
                            <MagneticButton>
                                <a
                                    href="/#contact"
                                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold text-[var(--color-text-primary)] hover:-translate-y-0.5 transition-all duration-300"
                                    style={{ background: `linear-gradient(135deg, ${service.accentColor}, color-mix(in oklch, ${service.accentColor}, white 20%))` }}
                                >
                                    Start Your Project
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </MagneticButton>
                            <a
                                href="#process"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--overlay-6)] text-[13px] font-medium text-[var(--overlay-40)] hover:text-[var(--overlay-70)] hover:border-[var(--overlay-12)] transition-all"
                            >
                                See Our Process <ChevronRight className="w-3.5 h-3.5" />
                            </a>
                        </motion.div>

                        {/* Tags */}
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-7">
                            {service.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase rounded-md border border-[var(--overlay-4)] bg-[var(--overlay-3)] text-[var(--overlay-20)]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════ */}
            {/*  STATS BAR                            */}
            {/* ══════════════════════════════════════ */}
            <motion.section
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={stagger(0.08)}
                className="py-8 border-y border-[var(--overlay-4)]"
            >
                <div className="section-container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.stats.map((stat) => (
                            <motion.div key={stat.label} variants={scaleIn} className="text-center">
                                <div
                                    className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-0.5"
                                    style={{ color: service.accentColor }}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-[11px] text-[var(--overlay-25)] uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* ══════════════════════════════════════ */}
            {/*  WHAT WE DELIVER — Features Grid       */}
            {/* ══════════════════════════════════════ */}
            <motion.section
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                variants={stagger(0.08)}
                className="py-16 lg:py-20"
            >
                <div className="section-container">
                    <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-12">
                        <span
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase mb-5 border"
                            style={{
                                borderColor: `color-mix(in oklch, ${service.accentColor}, transparent 70%)`,
                                background: `color-mix(in oklch, ${service.accentColor}, transparent 92%)`,
                                color: service.accentColor,
                            }}
                        >
                            <Sparkles className="w-3 h-3" />
                            What We Deliver
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)]">
                            Everything you need.{" "}
                            <span style={{ color: service.accentColor }}>Nothing you don&apos;t.</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {service.detailedFeatures.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                variants={fadeUp}
                                className="group relative rounded-xl p-5 lg:p-6 border border-[var(--overlay-4)] bg-[var(--overlay-3)] hover:bg-[var(--overlay-4)] hover:border-[var(--overlay-8)] transition-all duration-500"
                            >
                                <div
                                    className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-[1px]"
                                    style={{ background: `linear-gradient(135deg, color-mix(in oklch, ${service.accentColor}, transparent 60%), transparent)` }}
                                />
                                <div
                                    className="text-4xl font-black opacity-[0.04] absolute top-3 right-4 select-none"
                                    style={{ color: service.accentColor }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <h3 className="text-[14px] font-semibold text-[var(--overlay-80)] mb-2">{feature.title}</h3>
                                <p className="text-[12px] text-[var(--overlay-25)] leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* ══════════════════════════════════════ */}
            {/*  HOW WE DEVELOP — New section           */}
            {/* ══════════════════════════════════════ */}
            <motion.section
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                variants={stagger(0.08)}
                className="py-16 lg:py-20 border-t border-[var(--overlay-4)]"
            >
                <div className="section-container">
                    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-start">
                        {/* Left: sticky intro */}
                        <motion.div variants={fadeUp} className="lg:sticky lg:top-28">
                            <span
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase mb-5 border"
                                style={{
                                    borderColor: `color-mix(in oklch, ${service.accentColor}, transparent 70%)`,
                                    background: `color-mix(in oklch, ${service.accentColor}, transparent 92%)`,
                                    color: service.accentColor,
                                }}
                            >
                                <Code2 className="w-3 h-3" />
                                How We Develop
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                                Engineering principles{" "}
                                <span style={{ color: service.accentColor }}>we live by.</span>
                            </h2>
                            <p className="text-[14px] text-[var(--overlay-25)] leading-relaxed mb-6">
                                We don&apos;t just write code — we engineer systems. Every decision is driven by performance, maintainability, and your business growth.
                            </p>

                            {/* Visual: gradient card with metrics */}
                            <div
                                className="rounded-xl border border-[var(--overlay-6)] overflow-hidden"
                                style={{ background: `linear-gradient(135deg, color-mix(in oklch, ${service.accentColor}, transparent 92%), color-mix(in oklch, ${service.accentColor}, transparent 96%))` }}
                            >
                                <div className="p-5">
                                    <div className="text-[10px] text-[var(--overlay-20)] uppercase tracking-widest font-medium mb-3">Quality Metrics</div>
                                    <div className="space-y-2.5">
                                        {[
                                            { label: "Test Coverage", value: "95%", width: "95%" },
                                            { label: "Lighthouse Score", value: "98/100", width: "98%" },
                                            { label: "TypeScript Strict", value: "100%", width: "100%" },
                                            { label: "Uptime SLA", value: "99.9%", width: "99.9%" },
                                        ].map((m) => (
                                            <div key={m.label}>
                                                <div className="flex justify-between text-[11px] mb-1">
                                                    <span className="text-[var(--overlay-30)]">{m.label}</span>
                                                    <span className="text-[var(--overlay-50)] font-medium">{m.value}</span>
                                                </div>
                                                <div className="h-1 rounded-full bg-[var(--overlay-4)] overflow-hidden">
                                                    <motion.div
                                                        className="h-full rounded-full"
                                                        style={{ background: service.accentColor }}
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: m.width }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: approach cards */}
                        <div className="grid sm:grid-cols-2 gap-3">
                            {developmentApproach.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className="rounded-xl border border-[var(--overlay-4)] bg-[var(--overlay-3)] p-5 hover:bg-[var(--overlay-4)] hover:border-[var(--overlay-8)] transition-all duration-400"
                                >
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                                        style={{
                                            background: `color-mix(in oklch, ${service.accentColor}, transparent 88%)`,
                                            color: service.accentColor,
                                        }}
                                    >
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <h3 className="text-[13px] font-semibold text-[var(--overlay-70)] mb-1.5">{item.title}</h3>
                                    <p className="text-[11px] text-[var(--overlay-20)] leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* ══════════════════════════════════════ */}
            {/*  PROCESS — Interactive timeline         */}
            {/* ══════════════════════════════════════ */}
            <motion.section
                id="process"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                variants={stagger(0.12)}
                className="py-16 lg:py-20 relative"
            >
                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                    <div
                        className="w-[50%] h-[300px] rounded-full blur-[150px] opacity-[0.05]"
                        style={{ background: service.accentColor }}
                    />
                </div>

                <div className="section-container">
                    <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-12">
                        <span
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase mb-5 border"
                            style={{
                                borderColor: `color-mix(in oklch, ${service.accentColor}, transparent 70%)`,
                                background: `color-mix(in oklch, ${service.accentColor}, transparent 92%)`,
                                color: service.accentColor,
                            }}
                        >
                            <Clock className="w-3 h-3" />
                            Our Process
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)]">
                            From kickoff to <span style={{ color: service.accentColor }}>launch day.</span>
                        </h2>
                    </motion.div>

                    {/* Interactive process — desktop: horizontal | mobile: vertical */}
                    <div className="max-w-4xl mx-auto">
                        {/* Step tabs */}
                        <div className="flex flex-row flex-nowrap gap-1 mb-6 overflow-x-auto pb-2">
                            {service.process.map((step, i) => (
                                <button
                                    key={step.step}
                                    onClick={() => setActiveProcess(i)}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[12px] font-medium whitespace-nowrap transition-all duration-300 border ${activeProcess === i
                                        ? "border-white/[0.1] bg-[var(--overlay-4)] text-[var(--color-text-primary)]"
                                        : "border-[var(--overlay-4)] bg-transparent text-[var(--overlay-25)] hover:text-[var(--overlay-45)] hover:border-[var(--overlay-6)]"
                                        }`}
                                >
                                    <span
                                        className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                                        style={activeProcess === i ? {
                                            background: `color-mix(in oklch, ${service.accentColor}, transparent 80%)`,
                                            color: service.accentColor,
                                        } : {
                                            background: "var(--overlay-3)",
                                            color: "var(--overlay-20)",
                                        }}
                                    >
                                        {step.step}
                                    </span>
                                    {step.title}
                                </button>
                            ))}
                        </div>

                        {/* Active step detail */}
                        <motion.div
                            key={activeProcess}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-xl border border-[var(--overlay-6)] bg-[var(--overlay-3)] p-6 sm:p-8"
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-extrabold shrink-0"
                                    style={{
                                        background: `color-mix(in oklch, ${service.accentColor}, transparent 85%)`,
                                        color: service.accentColor,
                                        boxShadow: `0 0 24px color-mix(in oklch, ${service.accentColor}, transparent 80%)`,
                                    }}
                                >
                                    {service.process[activeProcess].step}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">{service.process[activeProcess].title}</h3>
                                    <p className="text-[14px] text-[var(--overlay-35)] leading-relaxed">{service.process[activeProcess].description}</p>
                                </div>
                            </div>

                            {/* Progress indicator */}
                            <div className="mt-5 flex gap-1.5">
                                {service.process.map((_, i) => (
                                    <div
                                        key={i}
                                        className="h-1 flex-1 rounded-full transition-all duration-300"
                                        style={{
                                            background: i <= activeProcess ? service.accentColor : "var(--overlay-4)",
                                            opacity: i <= activeProcess ? 0.6 : 1,
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* ══════════════════════════════════════ */}
            {/*  TECH STACK                           */}
            {/* ══════════════════════════════════════ */}
            <motion.section
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                variants={stagger(0.05)}
                className="py-16 lg:py-20 border-t border-[var(--overlay-4)]"
            >
                <div className="section-container">
                    <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-10">
                        <span
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase mb-5 border"
                            style={{
                                borderColor: `color-mix(in oklch, ${service.accentColor}, transparent 70%)`,
                                background: `color-mix(in oklch, ${service.accentColor}, transparent 92%)`,
                                color: service.accentColor,
                            }}
                        >
                            <Terminal className="w-3 h-3" />
                            Tech Stack
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
                            Tools we use for{" "}
                            <span style={{ color: service.accentColor }}>{service.title.toLowerCase()}</span>
                        </h2>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
                        {service.techStack.map((tech) => (
                            <motion.div
                                key={tech}
                                variants={scaleIn}
                                whileHover={{ scale: 1.06, y: -2 }}
                                className="group px-4 py-2 rounded-lg border border-[var(--overlay-4)] bg-[var(--overlay-3)] hover:border-[var(--overlay-12)] transition-all duration-300 cursor-default"
                                style={{ boxShadow: "none" }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px color-mix(in oklch, ${service.accentColor}, transparent 80%)`
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.boxShadow = "none"
                                }}
                            >
                                <span className="text-[12px] font-medium text-[var(--overlay-40)] group-hover:text-[var(--overlay-80)] transition-colors">{tech}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* ══════════════════════════════════════ */}
            {/*  WHY US — Value props w/ stats          */}
            {/* ══════════════════════════════════════ */}
            <motion.section
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                variants={stagger(0.08)}
                className="py-16 lg:py-20 border-t border-[var(--overlay-4)]"
            >
                <div className="section-container">
                    <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-10">
                        <span
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase mb-5 border"
                            style={{
                                borderColor: `color-mix(in oklch, ${service.accentColor}, transparent 70%)`,
                                background: `color-mix(in oklch, ${service.accentColor}, transparent 92%)`,
                                color: service.accentColor,
                            }}
                        >
                            <Target className="w-3 h-3" />
                            Why PixlNova
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
                            We don&apos;t just build.{" "}
                            <span style={{ color: service.accentColor }}>We outperform.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
                        {whyUs.map((item) => (
                            <motion.div
                                key={item.label}
                                variants={fadeUp}
                                className="rounded-xl border border-[var(--overlay-4)] bg-[var(--overlay-3)] p-5 text-center hover:bg-[var(--overlay-4)] transition-all"
                            >
                                <div
                                    className="w-10 h-10 rounded-xl mx-auto flex items-center justify-center mb-3"
                                    style={{
                                        background: `color-mix(in oklch, ${service.accentColor}, transparent 88%)`,
                                        color: service.accentColor,
                                    }}
                                >
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div className="text-2xl font-extrabold text-[var(--overlay-70)] mb-0.5">{item.stat}</div>
                                <div className="text-[11px] font-semibold text-[var(--overlay-30)] uppercase tracking-wider mb-1">{item.label}</div>
                                <div className="text-[10px] text-[var(--overlay-15)]">{item.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* ══════════════════════════════════════ */}
            {/*  FEATURES CHECKLIST                   */}
            {/* ══════════════════════════════════════ */}
            <motion.section
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                variants={stagger(0.06)}
                className="py-16 lg:py-20"
            >
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
                        <motion.div variants={fadeUp}>
                            <span
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase mb-5 border"
                                style={{
                                    borderColor: `color-mix(in oklch, ${service.accentColor}, transparent 70%)`,
                                    background: `color-mix(in oklch, ${service.accentColor}, transparent 92%)`,
                                    color: service.accentColor,
                                }}
                            >
                                <CheckCircle2 className="w-3 h-3" />
                                Included
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-3">
                                What&apos;s included with every{" "}
                                <span style={{ color: service.accentColor }}>{service.title.toLowerCase()}</span>{" "}
                                project
                            </h2>
                            <p className="text-[14px] text-[var(--overlay-25)] leading-relaxed">
                                Every engagement comes with these core deliverables — no upsells, no surprise charges.
                            </p>
                        </motion.div>

                        <div className="space-y-2">
                            {service.features.map((feature) => (
                                <motion.div
                                    key={feature}
                                    variants={fadeUp}
                                    className="flex items-center gap-3 p-3.5 rounded-xl border border-[var(--overlay-4)] bg-[var(--overlay-3)] hover:bg-[var(--overlay-4)] transition-all"
                                >
                                    <div
                                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                                        style={{ background: `color-mix(in oklch, ${service.accentColor}, transparent 80%)` }}
                                    >
                                        <Check className="w-3 h-3" style={{ color: service.accentColor }} />
                                    </div>
                                    <span className="text-[13px] text-[var(--overlay-50)]">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* ══════════════════════════════════════ */}
            {/*  CTA                                  */}
            {/* ══════════════════════════════════════ */}
            <section className="py-16 lg:py-20 relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-[0.06]"
                        style={{ background: service.accentColor }}
                    />
                </div>

                <div className="section-container text-center relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger(0.1)}>
                        <motion.p variants={fadeUp} className="text-[11px] text-[var(--overlay-20)] uppercase tracking-widest mb-4">
                            Ready to build?
                        </motion.p>
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-primary)] mb-5"
                        >
                            Let&apos;s build your{" "}
                            <span style={{ color: service.accentColor }}>{service.title.toLowerCase()}</span>{" "}
                            project.
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-[15px] text-[var(--overlay-25)] max-w-xl mx-auto mb-8">
                            Book a free 30-minute discovery call. We&apos;ll scope your project, estimate timelines, and give you a tailored proposal — no strings attached.
                        </motion.p>
                        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
                            <MagneticButton>
                                <a
                                    href="/#contact"
                                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-[var(--color-text-primary)] hover:-translate-y-0.5 transition-all duration-300"
                                    style={{ background: `linear-gradient(135deg, ${service.accentColor}, color-mix(in oklch, ${service.accentColor}, white 20%))` }}
                                >
                                    Start Your Project
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </MagneticButton>
                            <Link
                                href="/#services"
                                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-[var(--overlay-6)] text-[13px] font-medium text-[var(--overlay-35)] hover:text-[var(--overlay-60)] hover:border-[var(--overlay-12)] transition-all"
                            >
                                <ArrowLeft className="w-3.5 h-3.5" />
                                View All Services
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
