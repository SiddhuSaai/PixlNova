"use client"

import { motion } from "framer-motion"
import { NAV_LINKS } from "@/lib/constants"

interface MobileMenuProps {
    onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
        >
            {/* Backdrop */}
            <motion.div
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                onClick={onClose}
            />

            {/* Menu Content */}
            <motion.div
                className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-8 p-8"
                initial="closed"
                animate="open"
                variants={{
                    open: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                    closed: {},
                }}
            >
                {NAV_LINKS.map((link) => (
                    <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        className="text-3xl font-bold text-white/90 hover:text-white transition-colors"
                        variants={{
                            open: { opacity: 1, y: 0, filter: "blur(0px)" },
                            closed: { opacity: 0, y: 30, filter: "blur(10px)" },
                        }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {link.label}
                    </motion.a>
                ))}

                <motion.a
                    href="#contact"
                    onClick={onClose}
                    className="mt-4 px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-accent-cyan)]"
                    variants={{
                        open: { opacity: 1, y: 0, scale: 1 },
                        closed: { opacity: 0, y: 20, scale: 0.9 },
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    Start a Project
                </motion.a>
            </motion.div>
        </motion.div>
    )
}
