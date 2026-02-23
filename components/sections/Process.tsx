"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeUp, stagger } from "@/lib/animations"
import {
    Phone, Target, Palette, Code, Bug, Rocket, Headphones,
    ArrowRight, CheckCircle2, Layers,
} from "lucide-react"

const steps = [
    {
        number: "01",
        phase: "DISCOVER",
        title: "Discovery Call",
        description: "We listen to your vision, understand your goals, analyze competitors, and define the project scope together.",
        details: ["Stakeholder interviews", "Market & competitor analysis", "Scope definition", "Budget alignment"],
        icon: Phone,
        accent: "oklch(0.60 0.25 285)",
        glow: "rgba(139,92,246,0.15)",
        duration: "1-2 days",
    },
    {
        number: "02",
        phase: "PLAN",
        title: "Strategy & Planning",
        description: "Technical architecture, feature prioritization, timeline, milestones, and a clear roadmap — all documented and agreed upon.",
        details: ["Technical architecture", "Feature roadmap", "Sprint planning", "Risk assessment"],
        icon: Target,
        accent: "oklch(0.70 0.18 195)",
        glow: "rgba(6,182,212,0.15)",
        duration: "2-3 days",
    },
    {
        number: "03",
        phase: "DESIGN",
        title: "Design & Prototype",
        description: "Wireframes → high-fidelity designs → interactive prototypes. You see and feel the product before a single line of code.",
        details: ["Wireframes & user flows", "High-fidelity UI design", "Interactive prototypes", "Design system setup"],
        icon: Palette,
        accent: "oklch(0.70 0.20 350)",
        glow: "rgba(244,63,94,0.15)",
        duration: "1-2 weeks",
    },
    {
        number: "04",
        phase: "BUILD",
        title: "Develop & Build",
        description: "Agile sprints with weekly demos. Clean, scalable code using the best technologies for your project.",
        details: ["Agile 2-week sprints", "Weekly demo calls", "CI/CD from day one", "Code reviews & QA"],
        icon: Code,
        accent: "oklch(0.65 0.20 145)",
        glow: "rgba(34,197,94,0.15)",
        duration: "4-8 weeks",
    },
    {
        number: "05",
        phase: "TEST",
        title: "QA & Testing",
        description: "Rigorous testing across devices, browsers, and edge cases. Performance, accessibility, and security audits.",
        details: ["Cross-browser testing", "Performance optimization", "Security audits", "Accessibility checks"],
        icon: Bug,
        accent: "oklch(0.75 0.18 60)",
        glow: "rgba(245,158,11,0.15)",
        duration: "1 week",
    },
    {
        number: "06",
        phase: "LAUNCH",
        title: "Launch & Deploy",
        description: "Production deployment with CI/CD, monitoring, and a launch checklist. Your product goes live with confidence.",
        details: ["Production deployment", "DNS & SSL setup", "Monitoring & alerting", "Launch checklist ✓"],
        icon: Rocket,
        accent: "oklch(0.55 0.25 285)",
        glow: "rgba(139,92,246,0.15)",
        duration: "1-2 days",
    },
    {
        number: "07",
        phase: "GROW",
        title: "Ongoing Support",
        description: "Post-launch monitoring, bug fixes, feature iterations, and scaling support. We're partners for the long haul.",
        details: ["24/7 monitoring", "Bug fixes & patches", "Feature iterations", "Scaling support"],
        icon: Headphones,
        accent: "oklch(0.70 0.18 195)",
        glow: "rgba(6,182,212,0.15)",
        duration: "Ongoing",
    },
]

export default function Process() {
    const [active, setActive] = useState(0)

    return (
        <section id="process" className="py-10 overflow-hidden">
            <div className="section-container">
                <motion.div
                    variants={stagger(0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {/* ── Header ── */}
                    <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--overlay-6)] bg-[var(--overlay-2)] mb-6">
                            <Layers className="w-3.5 h-3.5 text-[var(--overlay-30)]" />
                            <span className="text-[11px] sm:text-[12px] text-[var(--overlay-35)] font-medium uppercase tracking-widest">How We Work</span>
                        </div>
                        <h2 className="font-bold text-[var(--color-text-primary)]" style={{ fontSize: "var(--font-size-h2)" }}>
                            From Idea to <span className="gradient-text">Launch</span>
                        </h2>
                        <p className="mt-4 text-[var(--overlay-35)] text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
                            A battle-tested process refined over 150+ projects. Transparent, efficient, and engineered for success.
                        </p>
                    </motion.div>

                    {/* ── Interactive process (Desktop) ── */}
                    <motion.div variants={fadeUp} className="hidden lg:block">
                        {/* Step selector bar */}
                        <div className="relative flex items-center justify-between mb-10 px-4">
                            {/* Progress track */}
                            <div className="absolute left-0 right-0 top-1/2 h-px bg-[var(--overlay-6)]" />
                            <motion.div
                                className="absolute left-0 top-1/2 h-px"
                                style={{
                                    background: `linear-gradient(90deg, oklch(0.55 0.25 285), oklch(0.70 0.18 195))`,
                                    width: `${(active / (steps.length - 1)) * 100}%`,
                                }}
                                layout
                                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                            />

                            {steps.map((step, i) => (
                                <button
                                    key={step.number}
                                    onClick={() => setActive(i)}
                                    className="relative z-10 flex flex-col items-center gap-2 group"
                                >
                                    {/* Circle */}
                                    <motion.div
                                        className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${i <= active
                                            ? "border-white/20 bg-[var(--overlay-6)]"
                                            : "border-[var(--overlay-6)] bg-[var(--color-bg-primary)]"
                                            }`}
                                        style={i === active ? {
                                            borderColor: step.accent,
                                            boxShadow: `0 0 24px ${step.glow}`,
                                            background: `${step.glow}`,
                                        } : i < active ? {
                                            borderColor: "var(--overlay-15)",
                                            background: "var(--overlay-4)",
                                        } : {}}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {i < active ? (
                                            <CheckCircle2 className="w-4 h-4 text-[var(--overlay-40)]" />
                                        ) : (
                                            <span
                                                className={`text-[12px] font-bold ${i === active ? "text-[var(--color-text-primary)]" : "text-[var(--overlay-20)]"}`}
                                            >
                                                {step.number}
                                            </span>
                                        )}
                                    </motion.div>
                                    {/* Phase label */}
                                    <span className={`text-[9px] font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${i === active ? "text-[var(--overlay-60)]" : "text-[var(--overlay-15)]"
                                        }`}>
                                        {step.phase}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Active step detail card */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.35 }}
                                className="relative rounded-2xl border border-[var(--overlay-6)] overflow-hidden"
                                style={{ boxShadow: `0 0 80px -20px ${steps[active].glow}` }}
                            >
                                {/* Ambient glow bg */}
                                <div
                                    className="absolute inset-0 opacity-30"
                                    style={{
                                        background: `radial-gradient(ellipse 50% 60% at 80% 30%, ${steps[active].glow}, transparent)`,
                                    }}
                                />

                                <div className="relative z-10 p-8 sm:p-10 flex gap-12">
                                    {/* Left: Main info */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div
                                                className="w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--overlay-8)]"
                                                style={{ color: steps[active].accent, background: steps[active].glow }}
                                            >
                                                {(() => { const StepIcon = steps[active].icon; return <StepIcon className="w-5 h-5" /> })()}
                                            </div>
                                            <div>
                                                <span className="text-[10px] text-[var(--overlay-25)] font-semibold tracking-widest uppercase">Step {steps[active].number}</span>
                                                <h3 className="text-xl font-bold text-[var(--color-text-primary)] -mt-0.5">{steps[active].title}</h3>
                                            </div>
                                        </div>
                                        <p className="text-[var(--overlay-40)] text-[15px] leading-relaxed mb-6 max-w-lg">
                                            {steps[active].description}
                                        </p>
                                        <div className="flex items-center gap-2 text-[12px]">
                                            <span className="px-3 py-1 rounded-full border border-[var(--overlay-8)] bg-[var(--overlay-3)] text-[var(--overlay-30)] font-medium">
                                                ⏱ {steps[active].duration}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Right: Checklist */}
                                    <div className="w-[280px] shrink-0">
                                        <p className="text-[10px] text-[var(--overlay-20)] font-semibold uppercase tracking-widest mb-4">Deliverables</p>
                                        <div className="space-y-3">
                                            {steps[active].details.map((d, i) => (
                                                <motion.div
                                                    key={d}
                                                    initial={{ opacity: 0, x: 12 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.08 }}
                                                    className="flex items-center gap-3"
                                                >
                                                    <div className="w-5 h-5 rounded-full flex items-center justify-center border border-[var(--overlay-8)] bg-[var(--overlay-3)]">
                                                        <CheckCircle2 className="w-3 h-3" style={{ color: steps[active].accent }} />
                                                    </div>
                                                    <span className="text-[13px] text-[var(--overlay-45)] font-medium">{d}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Nav arrows */}
                                <div className="relative z-10 flex justify-between px-10 pb-8">
                                    <button
                                        onClick={() => setActive(Math.max(0, active - 1))}
                                        disabled={active === 0}
                                        className="flex items-center gap-2 text-[12px] text-[var(--overlay-20)] hover:text-[var(--overlay-50)] disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <ArrowRight className="w-3 h-3 rotate-180" />
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
                                        disabled={active === steps.length - 1}
                                        className="flex items-center gap-2 text-[12px] text-[var(--overlay-20)] hover:text-[var(--overlay-50)] disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                                    >
                                        Next
                                        <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* ── Mobile: Stacked cards ── */}
                    <div className="lg:hidden space-y-3">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <button
                                    onClick={() => setActive(active === i ? -1 : i)}
                                    className="w-full text-left"
                                >
                                    <div
                                        className={`relative rounded-xl border overflow-hidden transition-all duration-300 ${active === i
                                            ? "border-[var(--overlay-12)] bg-[var(--overlay-3)]"
                                            : "border-[var(--overlay-6)] bg-white/[0.01]"
                                            }`}
                                        style={active === i ? { boxShadow: `0 0 40px -12px ${step.glow}` } : {}}
                                    >
                                        {/* Ambient glow */}
                                        {active === i && (
                                            <div
                                                className="absolute inset-0 opacity-20"
                                                style={{
                                                    background: `radial-gradient(circle at 90% 20%, ${step.glow}, transparent 60%)`,
                                                }}
                                            />
                                        )}

                                        <div className="relative z-10 p-5">
                                            {/* Header row */}
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--overlay-8)] shrink-0"
                                                    style={active === i ? {
                                                        color: step.accent,
                                                        background: step.glow,
                                                        borderColor: `${step.accent}33`,
                                                    } : { color: "var(--overlay-20)" }}
                                                >
                                                    <span className="text-[11px] font-bold">{step.number}</span>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <span className="text-[9px] text-[var(--overlay-20)] font-semibold uppercase tracking-widest">{step.phase}</span>
                                                    <h3 className="text-[15px] font-semibold text-[var(--color-text-primary)] -mt-0.5 truncate">{step.title}</h3>
                                                </div>
                                                <span className="text-[10px] text-[var(--overlay-15)] font-medium shrink-0">{step.duration}</span>
                                            </div>

                                            {/* Expandable content */}
                                            <AnimatePresence>
                                                {active === i && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="text-[13px] text-[var(--overlay-35)] leading-relaxed mt-3 mb-4">
                                                            {step.description}
                                                        </p>
                                                        <div className="grid grid-cols-2 gap-2">
                                                            {step.details.map((d) => (
                                                                <div key={d} className="flex items-center gap-2">
                                                                    <CheckCircle2 className="w-3 h-3 shrink-0" style={{ color: step.accent }} />
                                                                    <span className="text-[11px] text-[var(--overlay-40)]">{d}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* ── Bottom stat ── */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-12 sm:mt-16 flex flex-row items-center justify-center gap-6 sm:gap-12"
                    >
                        {[
                            { value: "150+", label: "Projects Delivered" },
                            { value: "18 days", label: "Avg. Time to MVP" },
                            { value: "99%", label: "On-time Delivery" },
                        ].map((s) => (
                            <div key={s.label} className="text-center">
                                <span className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">{s.value}</span>
                                <span className="block text-[11px] text-[var(--overlay-20)] font-medium mt-1 uppercase tracking-wider">{s.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
