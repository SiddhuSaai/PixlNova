"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeUp, stagger } from "@/lib/animations"
import { testimonials, type Testimonial } from "@/content/testimonials"
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react"

/* ── Featured testimonial spotlight ── */
function SpotlightCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-2xl border border-[var(--overlay-6)] overflow-hidden"
        >
            {/* Ambient glow */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    background: `radial-gradient(ellipse 70% 100% at 80% 50%, ${testimonial.color}, transparent)`,
                }}
            />
            {/* Top accent line */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                    background: `linear-gradient(to right, transparent, ${testimonial.color}80, transparent)`,
                }}
            />

            <div className="relative p-5 sm:p-7 lg:p-8">
                <div className="grid lg:grid-cols-[1fr_220px] gap-5 lg:gap-8">
                    {/* Left: quote */}
                    <div>
                        <Quote className="w-6 h-6 mb-3 opacity-[0.08]" style={{ color: testimonial.color }} />
                        <blockquote className="text-[15px] sm:text-lg lg:text-xl font-medium text-[var(--overlay-70)] leading-relaxed mb-4">
                            &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                                style={{
                                    background: `${testimonial.color}18`,
                                    color: testimonial.color,
                                }}
                            >
                                {testimonial.name.charAt(0)}
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">{testimonial.name}</p>
                                    <span className="text-sm">{testimonial.flag}</span>
                                </div>
                                <p className="text-[13px] text-[var(--overlay-30)]">
                                    {testimonial.role}, {testimonial.company}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: stats + meta */}
                    <div className="flex flex-col gap-4">
                        {/* Project type */}
                        <div className="rounded-xl border border-[var(--overlay-6)] bg-[var(--overlay-2)] p-3 text-center">
                            <div className="text-[10px] text-[var(--overlay-20)] uppercase tracking-widest font-medium mb-1">Project</div>
                            <div className="text-[14px] font-semibold text-[var(--overlay-60)]">{testimonial.project}</div>
                        </div>

                        {/* Metric highlight */}
                        {testimonial.metric && (
                            <div
                                className="rounded-xl border p-3 text-center"
                                style={{
                                    borderColor: `${testimonial.color}20`,
                                    background: `${testimonial.color}06`,
                                }}
                            >
                                <div
                                    className="text-xl sm:text-2xl font-extrabold tracking-tight mb-0.5"
                                    style={{ color: testimonial.color }}
                                >
                                    {testimonial.metric.value}
                                </div>
                                <div className="text-[11px] text-[var(--overlay-25)] uppercase tracking-wider font-medium">
                                    {testimonial.metric.label}
                                </div>
                            </div>
                        )}

                        {/* Rating */}
                        <div className="rounded-xl border border-[var(--overlay-6)] bg-[var(--overlay-2)] p-4 text-center">
                            <div className="flex items-center justify-center gap-0.5 mb-1">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <div className="text-[10px] text-[var(--overlay-20)] uppercase tracking-widest font-medium">Client Rating</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

/* ── Small grid card ── */
function MiniCard({ testimonial, isActive, onClick }: { testimonial: Testimonial; isActive: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`text-left relative rounded-xl border p-4 transition-all duration-400 group ${isActive
                ? "border-[var(--overlay-12)] bg-[var(--overlay-3)]"
                : "border-[var(--overlay-4)] bg-transparent hover:border-[var(--overlay-8)] hover:bg-white/[0.015]"
                }`}
        >
            {isActive && (
                <div
                    className="absolute inset-0 rounded-xl opacity-[0.03]"
                    style={{
                        background: `radial-gradient(ellipse at 50% 50%, ${testimonial.color}, transparent)`,
                    }}
                />
            )}
            <div className="relative z-10">
                <p className="text-[12px] text-[var(--overlay-30)] leading-relaxed line-clamp-2 mb-3 group-hover:text-[var(--overlay-40)] transition-colors">
                    &ldquo;{testimonial.quote.slice(0, 80)}...&rdquo;
                </p>
                <div className="flex items-center gap-2">
                    <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                        style={{
                            background: `${testimonial.color}18`,
                            color: testimonial.color,
                        }}
                    >
                        {testimonial.name.charAt(0)}
                    </div>
                    <div>
                        <p className="text-[11px] font-semibold text-[var(--overlay-60)]">{testimonial.name}</p>
                        <p className="text-[9px] text-[var(--overlay-20)]">{testimonial.company} · {testimonial.flag}</p>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)

    const goNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, [])

    const goPrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }, [])

    /* Auto-rotate every 6 seconds */
    useEffect(() => {
        const interval = setInterval(goNext, 6000)
        return () => clearInterval(interval)
    }, [goNext])

    return (
        <section id="testimonials" className="py-10 overflow-hidden">
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
                            <MessageSquareQuote className="w-3.5 h-3.5 text-[var(--overlay-30)]" />
                            <span className="text-[11px] sm:text-[12px] text-[var(--overlay-35)] font-medium uppercase tracking-widest">Testimonials</span>
                        </div>
                        <h2 className="font-bold text-[var(--color-text-primary)]" style={{ fontSize: "var(--font-size-h2)" }}>
                            Trusted by <span className="gradient-text">150+ Businesses</span>
                        </h2>
                        <p className="mt-4 text-[var(--overlay-35)] text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
                            Real results from real clients — across 6 continents, from seed-stage startups to enterprise teams.
                        </p>
                    </motion.div>

                    {/* ── Spotlight ── */}
                    <motion.div variants={fadeUp} className="mb-6">
                        <AnimatePresence mode="wait">
                            <SpotlightCard testimonial={testimonials[activeIndex]} />
                        </AnimatePresence>
                    </motion.div>

                    {/* ── Navigation + Mini cards ── */}
                    <motion.div variants={fadeUp}>
                        {/* Nav arrows + progress */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={goPrev}
                                    className="w-8 h-8 rounded-full border border-[var(--overlay-6)] flex items-center justify-center text-[var(--overlay-25)] hover:text-[var(--overlay-60)] hover:border-[var(--overlay-12)] transition-all"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={goNext}
                                    className="w-8 h-8 rounded-full border border-[var(--overlay-6)] flex items-center justify-center text-[var(--overlay-25)] hover:text-[var(--overlay-60)] hover:border-[var(--overlay-12)] transition-all"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Progress dots */}
                            <div className="flex items-center gap-1.5">
                                {testimonials.map((t, i) => (
                                    <button
                                        key={t.name}
                                        onClick={() => setActiveIndex(i)}
                                        className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                                        style={{ width: i === activeIndex ? 24 : 8 }}
                                    >
                                        <div className="absolute inset-0 bg-[var(--overlay-6)] rounded-full" />
                                        {i === activeIndex && (
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 6, ease: "linear" }}
                                                className="absolute inset-y-0 left-0 rounded-full"
                                                style={{ background: t.color }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mini card grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                            {testimonials.map((t, i) => (
                                <MiniCard
                                    key={t.name}
                                    testimonial={t}
                                    isActive={i === activeIndex}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Social proof strip ── */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-10 sm:mt-12 flex flex-row flex-nowrap items-center justify-center gap-6 sm:gap-10"
                    >
                        {[
                            { value: "150+", label: "Projects Delivered" },
                            { value: "4.96", label: "Avg Rating" },
                            { value: "30+", label: "Countries" },
                            { value: "98%", label: "Retention Rate" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-lg sm:text-xl font-extrabold text-[var(--overlay-70)]">{stat.value}</div>
                                <div className="text-[10px] text-[var(--overlay-15)] uppercase tracking-wider font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
