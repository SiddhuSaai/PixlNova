import type { Variants } from "framer-motion"

// ── Entrance Animations ──
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
}

export const fadeDown: Variants = {
    hidden: { opacity: 0, y: -30, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
}

export const fadeIn: Variants = {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: "easeOut" },
    },
}

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.85, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
    },
}

export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
}

export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
}

// ── Stagger Containers ──
export const stagger = (staggerDelay = 0.08): Variants => ({
    hidden: {},
    visible: {
        transition: { staggerChildren: staggerDelay, delayChildren: 0.1 },
    },
})

// ── Character-by-Character Text Reveal ──
export const characterReveal: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.03 } },
}

export const character: Variants = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
}
