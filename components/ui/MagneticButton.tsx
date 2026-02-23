"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface MagneticButtonProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    strength?: number
    as?: "button" | "a"
    href?: string
}

export function MagneticButton({
    children,
    className = "",
    onClick,
    strength = 40,
    as = "button",
    href,
}: MagneticButtonProps) {
    const ref = useRef<HTMLElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouse = (e: React.MouseEvent) => {
        if (!ref.current) return
        const { clientX, clientY } = e
        const { left, top, width, height } = ref.current.getBoundingClientRect()
        const x = ((clientX - (left + width / 2)) / width) * strength
        const y = ((clientY - (top + height / 2)) / height) * strength
        setPosition({ x, y })
    }

    const reset = () => setPosition({ x: 0, y: 0 })

    const Component = as === "a" ? motion.a : motion.button

    return (
        <Component
            ref={ref as React.RefObject<HTMLButtonElement & HTMLAnchorElement>}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            onClick={onClick}
            href={href}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
        >
            {children}
        </Component>
    )
}
