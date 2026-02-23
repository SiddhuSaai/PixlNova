"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { fadeUp, stagger } from "@/lib/animations"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { useGeo } from "@/components/providers/GeoProvider"
import { ArrowRight, Star } from "lucide-react"

/* ── Rotating headline words ── */
const HEADLINES = ["Scale", "Convert", "Inspire", "Dominate"]

/* ── Floating tech badges ── */
const TECH = [
    { label: "Next.js", x: "78%", y: "18%", delay: 0.5 },
    { label: "React Native", x: "85%", y: "42%", delay: 0.9 },
    { label: "AI / ML", x: "72%", y: "65%", delay: 1.3 },
    { label: "TypeScript", x: "90%", y: "58%", delay: 1.1 },
    { label: "Swift", x: "82%", y: "30%", delay: 0.7 },
]

/* ── Stats ── */
const STATS = [
    { value: "150+", label: "Projects Shipped" },
    { value: "40+", label: "Countries Served" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "3×", label: "Faster Delivery" },
]

/* ── Mini client logos (text-based) ── */
const CLIENTS = ["TechFlow", "Novarix", "BuildStack", "AppForge", "DataHive"]

export default function Hero() {
    const [headlineIndex, setHeadlineIndex] = useState(0)
    const [displayText, setDisplayText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const heroRef = useRef<HTMLElement>(null)
    const geo = useGeo()

    /* ── Mouse parallax (desktop only) ── */
    const mouseX = useMotionValue(0.5)
    const mouseY = useMotionValue(0.5)
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })
    const orbX = useTransform(smoothX, [0, 1], [-20, 20])
    const orbY = useTransform(smoothY, [0, 1], [-20, 20])

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            if (!heroRef.current) return
            const rect = heroRef.current.getBoundingClientRect()
            mouseX.set((e.clientX - rect.left) / rect.width)
            mouseY.set((e.clientY - rect.top) / rect.height)
        }
        window.addEventListener("mousemove", handleMouse)
        return () => window.removeEventListener("mousemove", handleMouse)
    }, [mouseX, mouseY])

    /* ── Typewriter ── */
    const typeWriter = useCallback(() => {
        const current = HEADLINES[headlineIndex]
        if (!isDeleting) {
            setDisplayText(current.substring(0, displayText.length + 1))
            if (displayText === current) {
                setTimeout(() => setIsDeleting(true), 2000)
                return
            }
        } else {
            setDisplayText(current.substring(0, displayText.length - 1))
            if (displayText === "") {
                setIsDeleting(false)
                setHeadlineIndex((prev) => (prev + 1) % HEADLINES.length)
                return
            }
        }
    }, [displayText, isDeleting, headlineIndex])

    useEffect(() => {
        const speed = isDeleting ? 50 : 100
        const timer = setTimeout(typeWriter, speed)
        return () => clearTimeout(timer)
    }, [typeWriter, isDeleting])

    return (
        <section ref={heroRef} id="hero" className="relative h-dvh flex items-center overflow-hidden">
            {/* ═══ BACKGROUND ═══ */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Animated gradient orb */}
                <motion.div
                    className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full"
                    style={{
                        x: orbX,
                        y: orbY,
                        top: "-15%",
                        right: "-10%",
                        background: "radial-gradient(circle, oklch(0.50 0.25 285 / 0.25), oklch(0.60 0.18 220 / 0.12), transparent 70%)",
                        filter: "blur(80px)",
                    }}
                />
                {/* Secondary orb */}
                <div
                    className="aurora-blob w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]"
                    style={{
                        background: "radial-gradient(circle, oklch(0.70 0.15 195 / 0.12), transparent 70%)",
                        bottom: "-10%",
                        left: "-10%",
                        filter: "blur(60px)",
                        animationDelay: "-7s",
                    }}
                />

                {/* Dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle, var(--overlay-50) 1px, transparent 1px)`,
                        backgroundSize: "32px 32px",
                    }}
                />

                {/* Radial vignette */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "radial-gradient(ellipse 70% 60% at 30% 40%, transparent, var(--color-bg-primary) 85%)",
                    }}
                />
                {/* Bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg-primary)]" />

                {/* Horizontal beam */}
                <motion.div
                    className="absolute top-[45%] left-0 right-0 h-px"
                    style={{
                        background: "linear-gradient(90deg, transparent, oklch(0.55 0.25 285 / 0.12), transparent)",
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                />
            </div>

            {/* ═══ FLOATING TECH BADGES (lg only) ═══ */}
            <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
                {TECH.map((t) => (
                    <motion.div
                        key={t.label}
                        className="absolute"
                        style={{ left: t.x, top: t.y }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: t.delay + 0.8, duration: 0.5 }}
                    >
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
                            className="px-3 py-1.5 rounded-full border border-[var(--overlay-8)] bg-[var(--overlay-3)] backdrop-blur-md text-[11px] text-[var(--overlay-30)] font-medium"
                        >
                            {t.label}
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* ═══ CONTENT ═══ */}
            <div className="section-container relative z-20 py-20 sm:py-0">
                <motion.div
                    variants={stagger(0.1)}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl"
                >
                    {/* Eyebrow */}
                    <motion.div
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[var(--overlay-8)] bg-[var(--overlay-3)] mb-5 sm:mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-[11px] sm:text-[13px] text-[var(--overlay-50)] font-medium">
                            Open for projects — <span className="text-[var(--overlay-70)]">Let&apos;s build</span>
                        </span>
                    </motion.div>

                    {/* Headline — typed word goes on its own line on mobile */}
                    <motion.h1
                        variants={fadeUp}
                        className="font-bold tracking-tight leading-[1.08] text-[clamp(2rem,7vw,5.5rem)]"
                    >
                        <span className="text-[var(--color-text-primary)]">We Build Digital</span>
                        <br />
                        <span className="text-[var(--color-text-primary)]">Products That</span>
                        <br className="sm:hidden" />
                        <span className="hidden sm:inline text-[var(--color-text-primary)]"> </span>
                        <span
                            className="inline-block"
                            style={{
                                background: "linear-gradient(135deg, oklch(0.65 0.25 285), oklch(0.75 0.18 220), oklch(0.70 0.15 195))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {displayText}
                            <span className="cursor-blink" style={{ WebkitTextFillColor: "oklch(0.65 0.20 285)" }}>|</span>
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={fadeUp}
                        className="mt-4 sm:mt-6 text-[var(--overlay-40)] max-w-2xl leading-relaxed text-[14px] sm:text-[17px]"
                    >
                        From MVPs to enterprise platforms — Web, iOS, Android & macOS.
                        Trusted by <span className="text-[var(--overlay-60)] font-medium">150+ businesses</span> across{" "}
                        <span className="text-[var(--overlay-60)] font-medium">40+ countries</span>.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={fadeUp} className="mt-6 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
                        <MagneticButton
                            as="a"
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 text-[14px] sm:text-[15px] font-semibold text-[var(--color-text-primary)] rounded-full transition-all duration-300"
                            style={{
                                background: "linear-gradient(135deg, oklch(0.50 0.25 285), oklch(0.55 0.20 250), oklch(0.60 0.18 220))",
                                boxShadow: "0 8px 32px -6px oklch(0.50 0.25 285 / 0.4), inset 0 1px 0 oklch(1 0 0 / 0.1)",
                            }}
                        >
                            Start Your Project
                        </MagneticButton>
                        <a
                            href="#portfolio"
                            className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-4 text-[14px] sm:text-[15px] font-medium text-[var(--overlay-45)] hover:text-[var(--color-text-primary)] transition-colors rounded-full border border-[var(--overlay-8)] hover:border-[var(--overlay-15)]"
                        >
                            View Our Work
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>

                    {/* Geo Badge */}
                    {!geo.loading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4 }}
                            className="mt-5 sm:mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--overlay-6)] bg-[var(--overlay-2)]"
                        >
                            <span className="text-sm">{geo.flag}</span>
                            <span className="text-[11px] sm:text-[13px] text-[var(--overlay-30)]">
                                Prices for {geo.country} ({geo.currency})
                            </span>
                        </motion.div>
                    )}

                    {/* Stats row */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-8 sm:mt-14 grid grid-cols-4 gap-x-4 sm:flex sm:flex-wrap sm:gap-x-10 sm:gap-y-4"
                    >
                        {STATS.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1 + i * 0.08 }}
                                className="flex flex-col"
                            >
                                <span className="text-lg sm:text-2xl font-bold text-[var(--color-text-primary)] tracking-tight">{s.value}</span>
                                <span className="text-[9px] sm:text-[11px] text-[var(--overlay-25)] font-medium mt-0.5 leading-tight">{s.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Client trust bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8 }}
                        className="mt-6 sm:mt-10 flex items-center gap-3 sm:gap-5 flex-wrap"
                    >
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 fill-amber-500" />
                            ))}
                            <span className="text-[10px] sm:text-[11px] text-[var(--overlay-25)] ml-1">5.0</span>
                        </div>
                        <div className="h-3 w-px bg-[var(--overlay-8)]" />
                        <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
                            {CLIENTS.map((c) => (
                                <span key={c} className="text-[9px] sm:text-[11px] text-[var(--overlay-15)] font-medium tracking-wide uppercase whitespace-nowrap">
                                    {c}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* ═══ SCROLL INDICATOR ═══ */}
            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-1.5"
                >
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--overlay-20)] font-medium">Scroll</span>
                    <div className="w-4 h-7 rounded-full border border-white/[0.1] flex justify-center pt-1.5">
                        <motion.div
                            animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-0.5 h-1.5 rounded-full bg-white/30"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
