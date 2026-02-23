"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUp, stagger, scaleIn } from "@/lib/animations"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { ArrowLeft, ArrowRight, Check, Quote, Clock, Users, ExternalLink } from "lucide-react"
import type { Project } from "@/content/projects"

export default function ProjectPageClient({ project }: { project: Project }) {
    return (
        <main className="relative bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] overflow-x-hidden">

            {/* ══════════════════════════════════════ */}
            {/*  HERO                                 */}
            {/* ══════════════════════════════════════ */}
            <section className="relative min-h-[90vh] flex items-end overflow-hidden">
                {/* Full-bleed background image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    {/* Heavy overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.06_0.01_280)] via-[oklch(0.06_0.01_280)/85%] to-[oklch(0.06_0.01_280)/40%]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.06_0.01_280)/60%] to-transparent" />
                </div>

                {/* Content */}
                <div className="section-container relative z-10 pb-16 sm:pb-20 pt-32">
                    {/* Back link */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                        <Link
                            href="/#portfolio"
                            className="inline-flex items-center gap-2 text-sm text-[var(--overlay-40)] hover:text-[var(--overlay-80)] transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            All Projects
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={stagger(0.1)}
                        initial="hidden"
                        animate="visible"
                        className="max-w-3xl"
                    >
                        {/* Type badge */}
                        <motion.div variants={fadeUp} className="mb-4">
                            <span
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase border backdrop-blur-sm"
                                style={{
                                    borderColor: `${project.color}40`,
                                    background: `${project.color}15`,
                                    color: project.color,
                                }}
                            >
                                {project.type} Project
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-4"
                        >
                            {project.title}
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p
                            variants={fadeUp}
                            className="text-xl sm:text-2xl font-medium leading-relaxed mb-8"
                            style={{ color: `${project.color}cc` }}
                        >
                            {project.tagline}
                        </motion.p>

                        {/* Meta row */}
                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 sm:gap-6 text-[var(--overlay-35)] text-[13px]">
                            <div className="flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{project.timeline}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-3.5 h-3.5" />
                                <span>{project.team}</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {project.stack.slice(0, 4).map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-0.5 text-[9px] font-medium tracking-wider uppercase rounded-full bg-[var(--overlay-6)] text-[var(--overlay-30)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════ */}
            {/*  RESULTS BAR                          */}
            {/* ══════════════════════════════════════ */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger(0.08)}
                className="py-10 sm:py-14 border-y border-[var(--overlay-4)] relative"
            >
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        background: `radial-gradient(ellipse 60% 80% at 50% 50%, ${project.color}, transparent)`,
                    }}
                />
                <div className="section-container relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {project.results.map((r) => (
                            <motion.div key={r.metric} variants={scaleIn} className="text-center">
                                <div
                                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-1"
                                    style={{ color: project.color }}
                                >
                                    {r.value}
                                </div>
                                <div className="text-[13px] font-semibold text-[var(--overlay-60)] mb-0.5">{r.metric}</div>
                                <div className="text-[11px] text-[var(--overlay-25)]">{r.description}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* ══════════════════════════════════════ */}
            {/*  CHALLENGE & SOLUTION                 */}
            {/* ══════════════════════════════════════ */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger(0.12)}
                className="py-20 sm:py-28"
            >
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
                        {/* The Challenge */}
                        <motion.div variants={fadeUp}>
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-red-500/20 bg-red-500/5">
                                    <span className="text-red-400 text-lg">⚡</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">The Challenge</h2>
                            </div>
                            <p className="text-[15px] text-[var(--overlay-40)] leading-[1.8]">
                                {project.challenge}
                            </p>
                        </motion.div>

                        {/* The Solution */}
                        <motion.div variants={fadeUp}>
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                                    style={{
                                        borderColor: `${project.color}30`,
                                        background: `${project.color}10`,
                                    }}
                                >
                                    <span className="text-lg">🚀</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">Our Solution</h2>
                            </div>
                            <p className="text-[15px] text-[var(--overlay-40)] leading-[1.8]">
                                {project.solution}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* ══════════════════════════════════════ */}
            {/*  KEY FEATURES                         */}
            {/* ══════════════════════════════════════ */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger(0.08)}
                className="py-20 sm:py-28 relative"
            >
                {/* BG glow */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                    <div
                        className="w-[50%] h-[300px] rounded-full blur-[150px] opacity-[0.05]"
                        style={{ background: project.color }}
                    />
                </div>

                <div className="section-container">
                    <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
                        <span
                            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-5 border"
                            style={{
                                borderColor: `${project.color}30`,
                                background: `${project.color}10`,
                                color: project.color,
                            }}
                        >
                            Key Features
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)]">
                            What we <span style={{ color: project.color }}>built</span>
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                        {project.features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                variants={fadeUp}
                                className="group relative rounded-2xl p-6 border border-[var(--overlay-6)] bg-white/[0.015] hover:bg-[var(--overlay-3)] hover:border-[var(--overlay-12)] transition-all duration-500"
                                whileHover={{
                                    boxShadow: `0 0 40px -12px ${project.color}20`,
                                }}
                            >
                                {/* Number watermark */}
                                <div
                                    className="text-5xl font-black opacity-[0.04] absolute top-3 right-4 select-none"
                                    style={{ color: project.color }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </div>

                                <h3 className="text-[16px] font-semibold text-[var(--color-text-primary)] mb-2">{feature.title}</h3>
                                <p className="text-[13px] text-[var(--overlay-35)] leading-relaxed group-hover:text-[var(--overlay-50)] transition-colors">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* ══════════════════════════════════════ */}
            {/*  TECH STACK                           */}
            {/* ══════════════════════════════════════ */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger(0.05)}
                className="py-16 sm:py-20 border-y border-[var(--overlay-4)]"
            >
                <div className="section-container">
                    <motion.div variants={fadeUp} className="text-center mb-10">
                        <h3 className="text-sm font-semibold text-[var(--overlay-25)] uppercase tracking-widest mb-6">Tech Stack</h3>
                        <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
                            {project.stack.map((tech) => (
                                <motion.span
                                    key={tech}
                                    variants={scaleIn}
                                    whileHover={{ scale: 1.08, y: -2 }}
                                    className="px-4 py-2 rounded-xl border border-[var(--overlay-6)] bg-[var(--overlay-2)] text-[13px] font-medium text-[var(--overlay-50)] hover:text-[var(--color-text-primary)] hover:border-white/[0.15] transition-all duration-300 cursor-default"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* ══════════════════════════════════════ */}
            {/*  TESTIMONIAL                          */}
            {/* ══════════════════════════════════════ */}
            {project.testimonial && (
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger(0.1)}
                    className="py-20 sm:py-28"
                >
                    <div className="section-container max-w-4xl">
                        <motion.div
                            variants={fadeUp}
                            className="relative rounded-2xl border border-[var(--overlay-6)] p-8 sm:p-12"
                            style={{ boxShadow: `0 0 80px -20px ${project.color}10` }}
                        >
                            {/* Ambient glow */}
                            <div
                                className="absolute -inset-px rounded-2xl opacity-[0.03] -z-10"
                                style={{
                                    background: `linear-gradient(135deg, ${project.color}50, transparent 60%)`,
                                }}
                            />

                            <Quote className="w-10 h-10 mb-6 opacity-10" style={{ color: project.color }} />

                            <blockquote className="text-xl sm:text-2xl font-medium text-[var(--overlay-70)] leading-relaxed mb-8">
                                &ldquo;{project.testimonial.quote}&rdquo;
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                                    style={{
                                        background: `${project.color}20`,
                                        color: project.color,
                                    }}
                                >
                                    {project.testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">{project.testimonial.author}</p>
                                    <p className="text-[13px] text-[var(--overlay-35)]">{project.testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            )}

            {/* ══════════════════════════════════════ */}
            {/*  CTA                                  */}
            {/* ══════════════════════════════════════ */}
            <section className="py-20 sm:py-28 relative overflow-hidden">
                {/* Glow */}
                <div className="absolute inset-0 -z-10">
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-[0.06]"
                        style={{ background: project.color }}
                    />
                </div>

                <div className="section-container text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger(0.1)}
                    >
                        <motion.p variants={fadeUp} className="text-sm text-[var(--overlay-25)] uppercase tracking-widest mb-4">
                            Inspired by this project?
                        </motion.p>
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-primary)] mb-6"
                        >
                            Let&apos;s build something{" "}
                            <span style={{ color: project.color }}>like this</span> for you.
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-lg text-[var(--overlay-35)] max-w-xl mx-auto mb-10">
                            Book a free 30-minute discovery call. We&apos;ll scope your project and give you a tailored proposal.
                        </motion.p>
                        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                            <MagneticButton>
                                <a
                                    href="/#contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-[var(--color-text-primary)] transition-all duration-300"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.color}, color-mix(in oklch, ${project.color}, white 20%))`,
                                    }}
                                >
                                    Start Your Project
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </MagneticButton>
                            <Link
                                href="/#portfolio"
                                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/10 text-sm font-medium text-[var(--overlay-50)] hover:text-[var(--color-text-primary)] hover:border-white/20 transition-all"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                View All Projects
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
