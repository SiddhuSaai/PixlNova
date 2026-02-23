"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sparkles } from "lucide-react"
import { NAV_LINKS, SITE } from "@/lib/constants"
import { MobileMenu } from "./MobileMenu"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            setScrollProgress(totalHeight > 0 ? window.scrollY / totalHeight : 0)
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`)
                    }
                })
            },
            { rootMargin: "-50% 0px -50% 0px" }
        )

        NAV_LINKS.forEach(({ href }) => {
            const el = document.querySelector(href)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <>
            {/* Scroll Progress */}
            <div className="fixed top-0 left-0 right-0 h-[2px] z-[60]">
                <motion.div
                    className="scroll-progress h-full"
                    style={{ scaleX: scrollProgress, transformOrigin: "left" }}
                />
            </div>

            {/* Navbar */}
            <motion.nav
                className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong py-3" : "bg-transparent py-5"
                    }`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="section-container flex items-center justify-between">
                    {/* Logo */}
                    <a href="#hero" className="flex items-center group">
                        <span className="text-xl font-bold tracking-tight">
                            <span className="gradient-text">{SITE.name}</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${activeSection === link.href
                                    ? "text-white"
                                    : "text-[var(--color-text-secondary)] hover:text-white"
                                    }`}
                            >
                                {activeSection === link.href && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-white/[0.08] rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{link.label}</span>
                            </a>
                        ))}
                    </div>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <a
                            href="#contact"
                            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-accent-cyan)] hover:shadow-[var(--shadow-glow)] transition-shadow duration-300"
                        >
                            Start a Project
                        </a>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
            </AnimatePresence>
        </>
    )
}
