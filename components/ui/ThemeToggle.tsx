"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/providers/ThemeProvider"

export function ThemeToggle({ className = "" }: { className?: string }) {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className={`relative w-8 h-8 rounded-full flex items-center justify-center border border-[var(--overlay-8)] bg-[var(--overlay-3)] hover:bg-[var(--overlay-6)] hover:border-[var(--overlay-12)] transition-all duration-300 cursor-pointer ${className}`}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                    <motion.div
                        key="sun"
                        initial={{ rotate: -90, scale: 0, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: 90, scale: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ rotate: 90, scale: 0, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: -90, scale: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    )
}
