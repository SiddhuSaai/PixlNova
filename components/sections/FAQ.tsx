"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeUp, stagger } from "@/lib/animations"
import { faqs, faqCategories } from "@/content/faqs"
import { ChevronDown, Search, HelpCircle, ArrowRight } from "lucide-react"

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const [search, setSearch] = useState("")
    const [activeCategory, setActiveCategory] = useState<string>("all")

    const filtered = useMemo(() => {
        return faqs.filter((faq) => {
            const matchesSearch =
                !search ||
                faq.question.toLowerCase().includes(search.toLowerCase()) ||
                faq.answer.toLowerCase().includes(search.toLowerCase())
            const matchesCategory = activeCategory === "all" || faq.category === activeCategory
            return matchesSearch && matchesCategory
        })
    }, [search, activeCategory])

    return (
        <section id="faq" className="py-10">
            <div className="section-container">
                <motion.div
                    variants={stagger(0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {/* ── Header ── */}
                    <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6">
                            <HelpCircle className="w-3.5 h-3.5 text-white/30" />
                            <span className="text-[11px] sm:text-[12px] text-white/35 font-medium uppercase tracking-widest">FAQ</span>
                        </div>
                        <h2 className="font-bold text-white" style={{ fontSize: "var(--font-size-h2)" }}>
                            Got Questions? <span className="gradient-text">We&apos;ve Got Answers</span>
                        </h2>
                        <p className="mt-4 text-white/35 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
                            Everything you need to know about working with us. Can&apos;t find what you&apos;re looking for? Just reach out.
                        </p>
                    </motion.div>

                    {/* ── Two-column layout ── */}
                    <motion.div variants={fadeUp} className="max-w-5xl mx-auto grid lg:grid-cols-[220px_1fr] gap-6 lg:gap-10">
                        {/* Left: filters */}
                        <div className="lg:sticky lg:top-28 lg:self-start">
                            {/* Search */}
                            <div className="relative mb-4">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => { setSearch(e.target.value); setOpenIndex(null) }}
                                    placeholder="Search..."
                                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/[0.12] transition-all duration-300"
                                />
                            </div>

                            {/* Category filters */}
                            <div className="flex flex-row lg:flex-col gap-1.5 flex-wrap">
                                <button
                                    onClick={() => { setActiveCategory("all"); setOpenIndex(null) }}
                                    className={`text-left px-3 py-2 rounded-lg text-[12px] font-medium transition-all duration-300 ${activeCategory === "all"
                                        ? "text-white bg-white/[0.05] border border-white/[0.1]"
                                        : "text-white/25 hover:text-white/50 border border-transparent"
                                        }`}
                                >
                                    All Questions ({faqs.length})
                                </button>
                                {faqCategories.map((cat) => {
                                    const count = faqs.filter((f) => f.category === cat.key).length
                                    return (
                                        <button
                                            key={cat.key}
                                            onClick={() => { setActiveCategory(cat.key); setOpenIndex(null) }}
                                            className={`text-left px-3 py-2 rounded-lg text-[12px] font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === cat.key
                                                ? "text-white bg-white/[0.05] border border-white/[0.1]"
                                                : "text-white/25 hover:text-white/50 border border-transparent"
                                                }`}
                                        >
                                            <span className="text-[13px]">{cat.emoji}</span>
                                            <span>{cat.label}</span>
                                            <span className="text-white/15 ml-auto text-[10px]">{count}</span>
                                        </button>
                                    )
                                })}
                            </div>

                            {/* Quick contact */}
                            <div className="hidden lg:block mt-6 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                                <p className="text-[11px] text-white/20 leading-relaxed mb-3">
                                    Still have questions?
                                    We&apos;re happy to help.
                                </p>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/40 hover:text-white/70 transition-colors"
                                >
                                    Talk to us <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>
                        </div>

                        {/* Right: FAQ accordion */}
                        <div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCategory + search}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-2"
                                >
                                    {filtered.length === 0 ? (
                                        <div className="text-center py-12">
                                            <HelpCircle className="w-8 h-8 text-white/10 mx-auto mb-3" />
                                            <p className="text-[13px] text-white/25">No matching questions found.</p>
                                            <button
                                                onClick={() => { setSearch(""); setActiveCategory("all") }}
                                                className="mt-2 text-[12px] text-white/40 hover:text-white/60 underline underline-offset-2 transition-colors"
                                            >
                                                Clear filters
                                            </button>
                                        </div>
                                    ) : (
                                        filtered.map((faq, i) => {
                                            const isOpen = openIndex === i
                                            const cat = faqCategories.find((c) => c.key === faq.category)

                                            return (
                                                <div
                                                    key={faq.question}
                                                    className={`rounded-xl border overflow-hidden transition-all duration-400 ${isOpen
                                                        ? "border-white/[0.1] bg-white/[0.025]"
                                                        : "border-white/[0.04] bg-transparent hover:border-white/[0.08]"
                                                        }`}
                                                >
                                                    <button
                                                        onClick={() => setOpenIndex(isOpen ? null : i)}
                                                        className="w-full flex items-center gap-3 p-4 text-left group"
                                                    >
                                                        {/* Number */}
                                                        <span className={`text-[10px] font-bold w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                                                            ? "bg-white/[0.08] text-white/50"
                                                            : "bg-white/[0.03] text-white/15"
                                                            }`}>
                                                            {String(i + 1).padStart(2, "0")}
                                                        </span>

                                                        <span className={`text-[13px] sm:text-[14px] font-medium flex-1 transition-colors duration-300 ${isOpen ? "text-white" : "text-white/50 group-hover:text-white/70"
                                                            }`}>
                                                            {faq.question}
                                                        </span>

                                                        {/* Category tag (mobile hidden) */}
                                                        {cat && (
                                                            <span className="hidden sm:inline text-[9px] text-white/15 uppercase tracking-wider font-medium px-2 py-0.5 rounded-full border border-white/[0.04] shrink-0">
                                                                {cat.emoji} {cat.label}
                                                            </span>
                                                        )}

                                                        <motion.div
                                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="shrink-0"
                                                        >
                                                            <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${isOpen ? "text-white/40" : "text-white/10"
                                                                }`} />
                                                        </motion.div>
                                                    </button>

                                                    <AnimatePresence>
                                                        {isOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                                            >
                                                                <div className="px-4 pb-4 pl-12">
                                                                    <p className="text-[13px] text-white/30 leading-relaxed">
                                                                        {faq.answer}
                                                                    </p>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            )
                                        })
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* ── Mobile CTA ── */}
                    <motion.div variants={fadeUp} className="mt-8 text-center lg:hidden">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-[12px] text-white/30 hover:text-white/60 hover:border-white/[0.12] transition-all duration-300"
                        >
                            Still have questions? Talk to us
                            <ArrowRight className="w-3 h-3" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
