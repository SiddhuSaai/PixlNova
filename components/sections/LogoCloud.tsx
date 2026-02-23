"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"

const logos = [
    "TechCorp", "StartupX", "FinStack", "CloudScale", "DataViz",
    "EduTech", "HealthAI", "SocialHub", "PayFlow", "DevTools",
    "AppForge", "NexGen", "Quantum", "SkyLabs", "ByteWorks",
]

function LogoItem({ name }: { name: string }) {
    return (
        <div className="flex items-center justify-center px-8 lg:px-12 py-4 shrink-0">
            <span className="text-xl font-bold text-[var(--overlay-20)] hover:text-[var(--overlay-50)] transition-colors duration-300 whitespace-nowrap select-none tracking-wide">
                {name}
            </span>
        </div>
    )
}

export default function LogoCloud() {
    return (
        <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="py-12 lg:py-16 border-y border-[var(--overlay-4)] overflow-hidden relative"
        >
            {/* Gradient Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-bg-primary)] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-bg-primary)] to-transparent z-10" />

            <div className="text-center mb-8">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                    Trusted by teams at
                </p>
            </div>

            {/* Row 1 */}
            <div className="relative overflow-hidden">
                <div className="marquee-track">
                    {[...logos, ...logos].map((logo, i) => (
                        <LogoItem key={`r1-${i}`} name={logo} />
                    ))}
                </div>
            </div>

            {/* Row 2 */}
            <div className="relative overflow-hidden mt-4">
                <div className="marquee-track-reverse">
                    {[...[...logos].reverse(), ...[...logos].reverse()].map((logo, i) => (
                        <LogoItem key={`r2-${i}`} name={logo} />
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
