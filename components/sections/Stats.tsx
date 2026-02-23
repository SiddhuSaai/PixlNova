"use client"

import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/lib/animations"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { Briefcase, Heart, Globe2, Zap } from "lucide-react"

const stats = [
    {
        icon: Briefcase,
        value: 150,
        suffix: "+",
        label: "Projects Delivered",
        description: "Shipped worldwide",
        accent: "var(--color-brand-500)",
        accentGlow: "oklch(0.55 0.25 285 / 0.25)",
        gradient: "from-[oklch(0.55_0.25_285)] to-[oklch(0.75_0.15_195)]",
    },
    {
        icon: Heart,
        value: 99,
        suffix: "%",
        label: "Client Satisfaction",
        description: "5-star average",
        accent: "var(--color-accent-pink)",
        accentGlow: "oklch(0.70 0.20 350 / 0.25)",
        gradient: "from-[oklch(0.70_0.20_350)] to-[oklch(0.80_0.15_80)]",
    },
    {
        icon: Globe2,
        value: 40,
        suffix: "+",
        label: "Countries Served",
        description: "Truly global",
        accent: "var(--color-accent-cyan)",
        accentGlow: "oklch(0.75 0.15 195 / 0.25)",
        gradient: "from-[oklch(0.75_0.15_195)] to-[oklch(0.72_0.18_155)]",
    },
    {
        icon: Zap,
        value: 3,
        suffix: "x",
        label: "Faster Delivery",
        description: "vs. agency avg.",
        accent: "var(--color-accent-amber)",
        accentGlow: "oklch(0.80 0.15 80 / 0.25)",
        gradient: "from-[oklch(0.80_0.15_80)] to-[oklch(0.55_0.25_285)]",
    },
]

function RadialProgress({ progress, accent }: { progress: number; accent: string }) {
    const radius = 38
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (progress / 100) * circumference

    return (
        <svg className="w-[92px] h-[92px] -rotate-90" viewBox="0 0 92 92">
            {/* Track */}
            <circle
                cx="46" cy="46" r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-white/[0.06]"
            />
            {/* Progress Arc */}
            <motion.circle
                cx="46" cy="46" r={radius}
                fill="none"
                stroke={accent}
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                whileInView={{ strokeDashoffset: offset }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                style={{ filter: `drop-shadow(0 0 6px ${accent})` }}
            />
        </svg>
    )
}

export default function Stats() {
    return (
        <motion.section
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="py-20 lg:py-28 relative"
        >
            {/* Subtle background glow */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-[60%] h-[200px] rounded-full bg-[var(--color-brand-500)] opacity-[0.04] blur-[100px]" />
            </div>

            <div className="section-container">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            variants={fadeUp}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative h-full rounded-2xl overflow-hidden">
                                {/* Animated border gradient */}
                                <div
                                    className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                    style={{
                                        background: `linear-gradient(135deg, ${stat.accent}, transparent, ${stat.accent})`,
                                        maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        maskComposite: "xor",
                                        WebkitMaskComposite: "xor",
                                        padding: "1px",
                                    }}
                                />

                                {/* Content */}
                                <div
                                    className="relative h-full flex flex-col items-center justify-center text-center p-6 lg:p-8 rounded-2xl border border-white/[0.06] bg-[oklch(0.10_0.015_280)] group-hover:bg-[oklch(0.12_0.02_280)] transition-all duration-500"
                                >
                                    {/* Hover glow behind icon */}
                                    <div
                                        className="absolute top-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 blur-[40px] transition-opacity duration-700"
                                        style={{ background: stat.accentGlow }}
                                    />

                                    {/* Radial Progress Ring with Icon */}
                                    <div className="relative mb-5">
                                        <RadialProgress
                                            progress={stat.value <= 5 ? stat.value * 33 : stat.value > 100 ? 100 : stat.value}
                                            accent={stat.accent}
                                        />
                                        {/* Icon centered */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div
                                                className="w-11 h-11 rounded-xl bg-white/[0.04] flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                                            >
                                                <stat.icon className="w-5 h-5" style={{ color: stat.accent }} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Number */}
                                    <div
                                        className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-1.5 bg-clip-text text-transparent"
                                        style={{
                                            backgroundImage: `linear-gradient(135deg, white 40%, ${stat.accent})`,
                                        }}
                                    >
                                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                    </div>

                                    {/* Label */}
                                    <p className="text-sm font-semibold text-white/80 mb-0.5">{stat.label}</p>
                                    <p className="text-xs text-white/30">{stat.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
