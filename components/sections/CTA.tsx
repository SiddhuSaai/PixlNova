"use client"

import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/lib/animations"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { ArrowRight, Calendar, Zap, Clock, Shield, Sparkles } from "lucide-react"

const valueProps = [
    { icon: Clock, text: "Free 30-min discovery call" },
    { icon: Zap, text: "Proposal within 48 hours" },
    { icon: Shield, text: "No commitment required" },
]

export default function CTA() {
    return (
        <section className="py-10 relative overflow-hidden">
            {/* ── Layered backgrounds ── */}
            <div className="absolute inset-0 bg-[oklch(0.06_0.01_280)]" />
            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(var(--overlay-6) 1px, transparent 1px),
                                      linear-gradient(90deg, var(--overlay-6) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />
            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(139,92,246,0.08),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_60%,rgba(6,182,212,0.05),transparent)]" />

            <div className="section-container relative z-10">
                <motion.div
                    variants={stagger(0.12)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="text-center max-w-3xl mx-auto"
                >
                    {/* ── Badge ── */}
                    <motion.div variants={fadeUp} className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--overlay-6)] bg-[var(--overlay-2)]">
                            <Sparkles className="w-3.5 h-3.5 text-[var(--overlay-30)]" />
                            <span className="text-[11px] sm:text-[12px] text-[var(--overlay-35)] font-medium uppercase tracking-widest">Let&apos;s Build Together</span>
                        </div>
                    </motion.div>

                    {/* ── Headline ── */}
                    <motion.h2
                        variants={fadeUp}
                        className="font-bold text-[var(--color-text-primary)]"
                        style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)", lineHeight: 1.15 }}
                    >
                        Your Next Big Idea{" "}
                        <br className="hidden sm:block" />
                        <span className="gradient-text">Deserves World-Class Execution</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mt-5 text-[var(--overlay-30)] text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto"
                    >
                        150+ businesses across 30 countries trust us to turn their vision into high-performance digital products. You&apos;re one conversation away.
                    </motion.p>

                    {/* ── CTA Buttons ── */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-8 flex flex-wrap items-center justify-center gap-3"
                    >
                        <MagneticButton
                            as="a"
                            href="#contact"
                            className="group inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold text-[var(--color-text-primary)] rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[oklch(0.65_0.22_280)] hover:shadow-[0_4px_32px_-4px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Start Your Project
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </MagneticButton>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-medium text-[var(--overlay-40)] hover:text-[var(--overlay-70)] transition-all duration-300 rounded-full border border-[var(--overlay-6)] hover:border-white/[0.15] hover:bg-[var(--overlay-3)]"
                        >
                            <Calendar className="w-4 h-4" />
                            Schedule a Free Call
                        </a>
                    </motion.div>

                    {/* ── Value props ── */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-8 flex flex-row flex-nowrap items-center justify-center gap-5 sm:gap-8"
                    >
                        {valueProps.map((vp) => (
                            <div key={vp.text} className="flex items-center gap-1.5">
                                <vp.icon className="w-3 h-3 text-[var(--overlay-15)]" />
                                <span className="text-[10px] sm:text-[11px] text-[var(--overlay-20)] font-medium whitespace-nowrap">{vp.text}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* ── Subtle trust line ── */}
                    <motion.div variants={fadeUp} className="mt-10">
                        <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                        <p className="mt-5 text-[11px] text-[var(--overlay-12)]">
                            Typically respond within 2 hours during business days
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
