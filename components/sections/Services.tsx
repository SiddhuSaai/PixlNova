"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { services } from "@/content/services"
import {
    Globe, Smartphone, Monitor, Palette, Server, Bot, Rocket, Cloud,
    ArrowUpRight, Zap, Code2,
} from "lucide-react"
import { useRef, MouseEvent } from "react"

/* ── Icon map ── */
const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Globe, Smartphone, Monitor, Palette, Server, Bot, Rocket, Cloud,
}

/* ── Background image per service ── */
const bgImageMap: Record<string, string> = {
    "web-development": "/images/services/web.png",
    "mobile-apps": "/images/services/mobile.png",
    "desktop-apps": "/images/services/desktop.png",
    "ui-ux-design": "/images/services/design.png",
    "backend-apis": "/images/services/backend.png",
    "ai-integration": "/images/services/ai.png",
    "mvp-development": "/images/services/mvp.png",
    "devops-cloud": "/images/services/devops.png",
}

/* ── Card glow colors ── */
const glowMap: Record<string, string> = {
    "web-development": "group-hover:shadow-[0_8px_60px_-12px_rgba(139,92,246,0.3)]",
    "mobile-apps": "group-hover:shadow-[0_8px_60px_-12px_rgba(244,63,94,0.3)]",
    "desktop-apps": "group-hover:shadow-[0_8px_60px_-12px_rgba(16,185,129,0.3)]",
    "ui-ux-design": "group-hover:shadow-[0_8px_60px_-12px_rgba(245,158,11,0.3)]",
    "backend-apis": "group-hover:shadow-[0_8px_60px_-12px_rgba(34,197,94,0.3)]",
    "ai-integration": "group-hover:shadow-[0_8px_60px_-12px_rgba(168,85,247,0.3)]",
    "mvp-development": "group-hover:shadow-[0_8px_60px_-12px_rgba(234,179,8,0.3)]",
    "devops-cloud": "group-hover:shadow-[0_8px_60px_-12px_rgba(6,182,212,0.3)]",
}

/* ── 3D tilt card with bg image ── */
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0.5)
    const mouseY = useMotionValue(0.5)
    const rotateX = useTransform(mouseY, [0, 1], [3, -3])
    const rotateY = useTransform(mouseX, [0, 1], [-3, 3])

    const handleMouse = (e: MouseEvent) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        mouseX.set((e.clientX - rect.left) / rect.width)
        mouseY.set((e.clientY - rect.top) / rect.height)
    }
    const resetMouse = () => { mouseX.set(0.5); mouseY.set(0.5) }

    const Icon = iconMap[service.icon]
    const bgImage = bgImageMap[service.slug]
    const glow = glowMap[service.slug] || ""

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
        >
            <Link href={`/services/${service.slug}`} className="block h-full">
                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouse}
                    onMouseLeave={resetMouse}
                    style={{ rotateX, rotateY, transformPerspective: 800 }}
                    className={`group relative h-full rounded-2xl border border-white/[0.06] overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/[0.15] ${glow}`}
                >
                    {/* ── Background image ── */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={bgImage}
                            alt={service.title}
                            fill
                            className="object-cover opacity-[0.12] group-hover:opacity-[0.25] group-hover:scale-105 transition-all duration-700 ease-out"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        {/* Dark gradient overlay — keeps text readable */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.01_280)] via-[oklch(0.08_0.01_280)/90%] to-[oklch(0.08_0.01_280)/60%]" />
                    </div>

                    {/* ── Content ── */}
                    <div className="relative z-10 p-6 lg:p-7 flex flex-col h-full min-h-[280px]">
                        {/* Top: icon + hover arrow */}
                        <div className="flex items-start justify-between mb-5">
                            <div
                                className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm group-hover:border-white/[0.18] group-hover:bg-white/[0.06] group-hover:scale-105 transition-all duration-300"
                                style={{ color: service.accentColor }}
                            >
                                {Icon && <Icon className="w-5 h-5" />}
                            </div>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-[17px] font-bold text-white mb-2 tracking-tight">{service.title}</h3>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                            {service.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 text-[9px] font-medium tracking-wider rounded-full bg-white/[0.05] text-white/25 uppercase backdrop-blur-sm group-hover:text-white/45 group-hover:bg-white/[0.08] transition-colors duration-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-[13px] text-white/30 leading-relaxed mb-auto group-hover:text-white/50 transition-colors duration-300">
                            {service.description}
                        </p>

                        {/* Bottom stats */}
                        <div className="pt-4 mt-4 border-t border-white/[0.05] group-hover:border-white/[0.10] transition-colors duration-300">
                            <div className="flex items-center gap-6">
                                {service.stats.slice(0, 2).map((s) => (
                                    <div key={s.label} className="flex flex-col">
                                        <span className="text-[15px] font-bold text-white/65 group-hover:text-white transition-colors duration-300">{s.value}</span>
                                        <span className="text-[9px] text-white/20 font-medium uppercase tracking-wider">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    )
}

export default function Services() {
    return (
        <section id="services" className="py-10">
            <div className="section-container">
                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
                        <Code2 className="w-3.5 h-3.5 text-white/30" />
                        <span className="text-[11px] sm:text-[12px] text-white/35 font-medium uppercase tracking-widest">What We Build</span>
                    </div>
                    <h2 className="font-bold text-white" style={{ fontSize: "var(--font-size-h2)" }}>
                        Services That <span className="gradient-text">Drive Growth</span>
                    </h2>
                    <p className="mt-4 text-white/35 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
                        End-to-end digital product development — every pixel engineered for impact.
                    </p>
                </motion.div>

                {/* ── Services Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {services.map((service, i) => (
                        <ServiceCard key={service.slug} service={service} index={i} />
                    ))}
                </div>

                {/* ── Bottom CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-12 sm:mt-16"
                >
                    <p className="text-[13px] text-white/20 mb-4">
                        Not sure what you need? We&apos;ll help you figure it out.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.08] bg-white/[0.02] text-[13px] font-medium text-white/50 hover:text-white hover:border-white/[0.16] hover:bg-white/[0.04] transition-all duration-300"
                    >
                        <Zap className="w-3.5 h-3.5" />
                        Let&apos;s Talk Strategy
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
