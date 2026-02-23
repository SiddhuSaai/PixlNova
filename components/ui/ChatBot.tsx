"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MessageSquareText, X } from "lucide-react"

export default function ChatBot() {
    const pathname = usePathname()
    const [pulse, setPulse] = useState(false)
    const [tooltip, setTooltip] = useState(false)

    useEffect(() => {
        const t1 = setTimeout(() => setPulse(true), 3000)
        const t2 = setTimeout(() => setTooltip(true), 5000)
        return () => { clearTimeout(t1); clearTimeout(t2) }
    }, [])

    const dismissTooltip = () => {
        setTooltip(false)
        sessionStorage.setItem("nova-seen", "1")
    }

    // Don't render on /chat page
    if (pathname === "/chat") return null

    return (
        <>
            {/* Tooltip */}
            <AnimatePresence>
                {tooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        className="fixed bottom-[90px] right-3 sm:right-6 z-[61] bg-white text-[oklch(0.15_0.02_280)] rounded-xl px-4 py-3 shadow-xl max-w-[220px] sm:max-w-[200px]"
                    >
                        <button onClick={dismissTooltip} className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[var(--color-bg-card)] shadow flex items-center justify-center text-black/50 hover:text-black">
                            <X className="w-3 h-3" />
                        </button>
                        <p className="text-[12px] font-medium leading-snug">
                            👋 Got questions? Chat with <strong>Nova</strong>, our AI assistant!
                        </p>
                        {/* Arrow pointing to FAB */}
                        <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FAB → links to /chat */}
            <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className="fixed bottom-5 right-4 sm:right-6 z-[61]"
            >
                <Link
                    href="/chat"
                    onClick={() => sessionStorage.setItem("nova-seen", "1")}
                    className="relative w-[56px] h-[56px] rounded-full flex items-center justify-center"
                    style={{
                        background: "linear-gradient(135deg, oklch(0.50 0.25 285), oklch(0.60 0.18 220))",
                        boxShadow: "0 6px 24px -4px oklch(0.50 0.25 285 / 0.45)",
                    }}
                    aria-label="Chat with Nova AI"
                >
                    <MessageSquareText className="w-5 h-5 text-[var(--color-text-primary)]" />

                    {pulse && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] rounded-full bg-red-500 border-[2.5px] border-[var(--color-bg-primary)] flex items-center justify-center"
                        >
                            <span className="text-[9px] text-[var(--color-text-primary)] font-bold leading-none">1</span>
                        </motion.div>
                    )}
                </Link>

                {pulse && (
                    <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[var(--color-brand-500)] pointer-events-none" />
                )}
            </motion.div>
        </>
    )
}
