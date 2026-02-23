"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => { },
})

export function useTheme() {
    return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark")
    const [mounted, setMounted] = useState(false)

    // On mount, read from localStorage or system preference
    useEffect(() => {
        const stored = localStorage.getItem("theme") as Theme | null
        if (stored === "light" || stored === "dark") {
            setTheme(stored)
        } else {
            // Auto-detect system preference
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            setTheme(prefersDark ? "dark" : "light")
        }
        setMounted(true)
    }, [])

    // Sync data-theme attribute and localStorage whenever theme changes
    useEffect(() => {
        if (!mounted) return
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme, mounted])

    // Listen for system preference changes (only if no stored preference)
    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)")
        const handler = (e: MediaQueryListEvent) => {
            const stored = localStorage.getItem("theme")
            if (!stored) {
                setTheme(e.matches ? "dark" : "light")
            }
        }
        mq.addEventListener("change", handler)
        return () => mq.removeEventListener("change", handler)
    }, [])

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
