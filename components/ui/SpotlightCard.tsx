"use client"

import { useRef, useState } from "react"

interface SpotlightCardProps {
    children: React.ReactNode
    className?: string
}

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    const handleMouse = (e: React.MouseEvent) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] card-hover ${className}`}
            style={{
                background: isHovered
                    ? `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(124,58,237,0.15), transparent 40%)`
                    : undefined,
            }}
        >
            {children}
        </div>
    )
}
