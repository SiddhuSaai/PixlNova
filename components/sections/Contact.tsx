"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeUp, stagger } from "@/lib/animations"
import { useGeo } from "@/components/providers/GeoProvider"
import {
    Send, User, Mail, Building, MessageSquare, ArrowRight, ArrowLeft,
    Check, Clock, Globe2, Calendar, Zap, Shield, Sparkles
} from "lucide-react"

const steps = ["About You", "Your Project", "Details"]

const serviceOptions = [
    { value: "web", label: "🌐 Web Development" },
    { value: "mobile", label: "📱 Mobile App" },
    { value: "saas", label: "☁️ SaaS Platform" },
    { value: "ai", label: "🤖 AI Integration" },
    { value: "design", label: "🎨 UI/UX Design" },
    { value: "mvp", label: "🚀 MVP Development" },
    { value: "bundle", label: "📦 Full Stack Bundle" },
]

const timelineOptions = [
    { value: "asap", label: "⚡ ASAP (Rush)" },
    { value: "1-2months", label: "📅 1–2 Months" },
    { value: "3-6months", label: "🗓️ 3–6 Months" },
    { value: "flexible", label: "🤝 Flexible" },
]

export default function Contact() {
    const [currentStep, setCurrentStep] = useState(0)
    const [submitted, setSubmitted] = useState(false)
    const geo = useGeo()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        description: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const nextStep = () => setCurrentStep((s) => Math.min(s + 1, 2))
    const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 0))

    const inputClass =
        "w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-[13px] text-white placeholder:text-white/15 focus:outline-none focus:border-white/[0.15] focus:bg-white/[0.03] transition-all duration-300"
    const inputClassWithIcon =
        "w-full pl-10 pr-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-[13px] text-white placeholder:text-white/15 focus:outline-none focus:border-white/[0.15] focus:bg-white/[0.03] transition-all duration-300"
    const labelClass = "block text-[10px] text-white/20 mb-1.5 uppercase tracking-widest font-medium"

    return (
        <section id="contact" className="py-10">
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
                            <Sparkles className="w-3.5 h-3.5 text-white/30" />
                            <span className="text-[11px] sm:text-[12px] text-white/35 font-medium uppercase tracking-widest">Get in Touch</span>
                        </div>
                        <h2 className="font-bold text-white" style={{ fontSize: "var(--font-size-h2)" }}>
                            Let&apos;s Build <span className="gradient-text">Something Amazing</span>
                        </h2>
                        <p className="mt-4 text-white/35 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
                            Tell us about your vision — we&apos;ll handle the rest. Free consultation, no strings attached.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {/* ── Form ── */}
                        <div>
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center p-10 sm:p-14 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03]"
                                >
                                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-5">
                                        <Check className="w-7 h-7 text-emerald-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-[13px] text-white/30 max-w-sm mx-auto leading-relaxed">
                                        We&apos;ll get back to you within 2 hours during business days. Check your inbox for a confirmation.
                                    </p>
                                    <div className="mt-6 flex items-center justify-center gap-4 text-[11px] text-white/15">
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Avg reply: 2 hrs</span>
                                        <span className="w-px h-3 bg-white/[0.06]" />
                                        <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Confirmation sent</span>
                                    </div>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden">
                                    {/* ── Progress bar ── */}
                                    <div className="px-6 pt-6 sm:px-8 sm:pt-7">
                                        <div className="flex items-center gap-3 mb-2">
                                            {steps.map((step, i) => (
                                                <div key={step} className="flex items-center gap-3 flex-1">
                                                    <button
                                                        type="button"
                                                        onClick={() => setCurrentStep(i)}
                                                        className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${i < currentStep
                                                            ? "bg-emerald-500/20 text-emerald-400"
                                                            : i === currentStep
                                                                ? "bg-white/[0.08] text-white border border-white/[0.12]"
                                                                : "bg-white/[0.02] text-white/15 border border-white/[0.04]"
                                                            }`}
                                                    >
                                                        {i < currentStep ? <Check className="w-3 h-3" /> : i + 1}
                                                    </button>
                                                    {i < steps.length - 1 && (
                                                        <div className="flex-1 h-px relative overflow-hidden rounded-full bg-white/[0.04]">
                                                            <div
                                                                className="absolute inset-y-0 left-0 bg-emerald-500/40 rounded-full transition-all duration-500"
                                                                style={{ width: i < currentStep ? "100%" : "0%" }}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-[10px] text-white/15 uppercase tracking-widest font-medium">
                                                Step {currentStep + 1}/3 — {steps[currentStep]}
                                            </span>
                                            <span className="text-[10px] text-white/10">
                                                {Math.round(((currentStep + 1) / 3) * 100)}% complete
                                            </span>
                                        </div>
                                    </div>

                                    {/* ── Step content ── */}
                                    <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                                        <AnimatePresence mode="wait">
                                            {currentStep === 0 && (
                                                <motion.div
                                                    key="step1"
                                                    initial={{ opacity: 0, x: 16 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -16 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="space-y-4"
                                                >
                                                    <div>
                                                        <label className={labelClass}>Full Name *</label>
                                                        <div className="relative">
                                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                                                            <input
                                                                type="text"
                                                                required
                                                                value={formData.name}
                                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                                placeholder="John Doe"
                                                                className={inputClassWithIcon}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className={labelClass}>Email Address *</label>
                                                        <div className="relative">
                                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                                                            <input
                                                                type="email"
                                                                required
                                                                value={formData.email}
                                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                                placeholder="john@company.com"
                                                                className={inputClassWithIcon}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className={labelClass}>Company <span className="text-white/10">(Optional)</span></label>
                                                        <div className="relative">
                                                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                                                            <input
                                                                type="text"
                                                                value={formData.company}
                                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                                placeholder="Your Company"
                                                                className={inputClassWithIcon}
                                                            />
                                                        </div>
                                                    </div>
                                                    {!geo.loading && (
                                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[11px] text-white/15">
                                                            <Globe2 className="w-3 h-3" />
                                                            {geo.flag} Detected location: {geo.country}
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}

                                            {currentStep === 1 && (
                                                <motion.div
                                                    key="step2"
                                                    initial={{ opacity: 0, x: 16 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -16 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="space-y-4"
                                                >
                                                    <div>
                                                        <label className={labelClass}>What do you need? *</label>
                                                        <div className="grid grid-cols-2 gap-2">
                                                            {serviceOptions.map((opt) => (
                                                                <button
                                                                    key={opt.value}
                                                                    type="button"
                                                                    onClick={() => setFormData({ ...formData, service: opt.value })}
                                                                    className={`text-left px-3 py-2.5 rounded-xl text-[12px] font-medium transition-all duration-300 border ${formData.service === opt.value
                                                                        ? "border-white/[0.15] bg-white/[0.05] text-white"
                                                                        : "border-white/[0.04] bg-transparent text-white/25 hover:border-white/[0.08] hover:text-white/50"
                                                                        }`}
                                                                >
                                                                    {opt.label}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className={labelClass}>Budget Range</label>
                                                        <select
                                                            value={formData.budget}
                                                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                                            className={inputClass}
                                                        >
                                                            <option value="">Select a range</option>
                                                            <option value="low">Under {geo.symbol}{(2000 * geo.rate).toLocaleString()}</option>
                                                            <option value="mid">{geo.symbol}{(2000 * geo.rate).toLocaleString()} – {geo.symbol}{(10000 * geo.rate).toLocaleString()}</option>
                                                            <option value="high">{geo.symbol}{(10000 * geo.rate).toLocaleString()} – {geo.symbol}{(50000 * geo.rate).toLocaleString()}</option>
                                                            <option value="enterprise">{geo.symbol}{(50000 * geo.rate).toLocaleString()}+</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className={labelClass}>Timeline</label>
                                                        <div className="grid grid-cols-2 gap-2">
                                                            {timelineOptions.map((opt) => (
                                                                <button
                                                                    key={opt.value}
                                                                    type="button"
                                                                    onClick={() => setFormData({ ...formData, timeline: opt.value })}
                                                                    className={`text-left px-3 py-2.5 rounded-xl text-[12px] font-medium transition-all duration-300 border ${formData.timeline === opt.value
                                                                        ? "border-white/[0.15] bg-white/[0.05] text-white"
                                                                        : "border-white/[0.04] bg-transparent text-white/25 hover:border-white/[0.08] hover:text-white/50"
                                                                        }`}
                                                                >
                                                                    {opt.label}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {currentStep === 2 && (
                                                <motion.div
                                                    key="step3"
                                                    initial={{ opacity: 0, x: 16 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -16 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="space-y-4"
                                                >
                                                    <div>
                                                        <label className={labelClass}>Tell us about your project *</label>
                                                        <div className="relative">
                                                            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-white/15" />
                                                            <textarea
                                                                required
                                                                value={formData.description}
                                                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                                placeholder="Describe your project goals, target audience, and any specific features you have in mind..."
                                                                rows={5}
                                                                className={`${inputClassWithIcon} resize-none`}
                                                            />
                                                        </div>
                                                        <p className="mt-1.5 text-[10px] text-white/10">
                                                            The more detail you share, the better we can tailor our proposal.
                                                        </p>
                                                    </div>

                                                    {/* Summary preview */}
                                                    {(formData.name || formData.service) && (
                                                        <div className="rounded-xl border border-white/[0.04] bg-white/[0.015] p-4">
                                                            <div className="text-[10px] text-white/15 uppercase tracking-widest font-medium mb-2">Submission Summary</div>
                                                            <div className="grid grid-cols-2 gap-2 text-[11px]">
                                                                {formData.name && (
                                                                    <div><span className="text-white/15">Name:</span> <span className="text-white/40">{formData.name}</span></div>
                                                                )}
                                                                {formData.service && (
                                                                    <div><span className="text-white/15">Service:</span> <span className="text-white/40">{serviceOptions.find(s => s.value === formData.service)?.label}</span></div>
                                                                )}
                                                                {formData.budget && (
                                                                    <div><span className="text-white/15">Budget:</span> <span className="text-white/40">{formData.budget}</span></div>
                                                                )}
                                                                {formData.timeline && (
                                                                    <div><span className="text-white/15">Timeline:</span> <span className="text-white/40">{timelineOptions.find(t => t.value === formData.timeline)?.label}</span></div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* ── Navigation ── */}
                                        <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/[0.04]">
                                            {currentStep > 0 ? (
                                                <button
                                                    type="button"
                                                    onClick={prevStep}
                                                    className="inline-flex items-center gap-1.5 px-3 py-2 text-[12px] text-white/25 hover:text-white/60 transition-colors rounded-lg"
                                                >
                                                    <ArrowLeft className="w-3.5 h-3.5" />
                                                    Back
                                                </button>
                                            ) : (
                                                <div />
                                            )}
                                            {currentStep < 2 ? (
                                                <button
                                                    type="button"
                                                    onClick={nextStep}
                                                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-[12px] font-semibold text-white rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[oklch(0.65_0.22_280)] hover:shadow-[0_4px_24px_-4px_rgba(139,92,246,0.35)] hover:-translate-y-0.5 transition-all duration-300"
                                                >
                                                    Continue
                                                    <ArrowRight className="w-3.5 h-3.5" />
                                                </button>
                                            ) : (
                                                <button
                                                    type="submit"
                                                    className="group inline-flex items-center gap-2 px-6 py-2.5 text-[13px] font-semibold text-white rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[oklch(0.65_0.22_280)] hover:shadow-[0_4px_24px_-4px_rgba(139,92,246,0.35)] hover:-translate-y-0.5 transition-all duration-300"
                                                >
                                                    <Send className="w-3.5 h-3.5" />
                                                    Send Message
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* ── Sidebar ── */}
                        <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
                            {/* Contact cards */}
                            {[
                                { icon: Mail, color: "#8b5cf6", title: "Email Us", desc: "hello@pixlnova.com", subtle: "Direct inbox" },
                                { icon: Calendar, color: "#06b6d4", title: "Book a Call", desc: "Free 30-min discovery", subtle: "Pick a time" },
                                { icon: Clock, color: "#10b981", title: "Response Time", desc: "< 2 hours", subtle: "Business days" },
                                { icon: Globe2, color: "#f59e0b", title: "Global Reach", desc: "40+ countries served", subtle: "All timezones" },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="group rounded-xl border border-white/[0.04] bg-white/[0.015] p-4 hover:border-white/[0.08] transition-all duration-300"
                                >
                                    <div className="flex items-start gap-3">
                                        <div
                                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                            style={{ background: `${item.color}12`, color: item.color }}
                                        >
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between">
                                                <h4 className="text-[12px] font-semibold text-white/60">{item.title}</h4>
                                                <span className="text-[9px] text-white/10 uppercase tracking-wider">{item.subtle}</span>
                                            </div>
                                            <p className="text-[12px] text-white/30 mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Trust signals */}
                            <div className="rounded-xl border border-white/[0.04] bg-white/[0.015] p-4 space-y-2.5">
                                <div className="text-[10px] text-white/15 uppercase tracking-widest font-medium mb-2">Why Us</div>
                                {[
                                    { icon: Shield, text: "NDA signed before every project" },
                                    { icon: Zap, text: "Proposal within 48 hours" },
                                    { icon: Check, text: "Milestone-based payments" },
                                ].map((tp) => (
                                    <div key={tp.text} className="flex items-center gap-2">
                                        <tp.icon className="w-3 h-3 text-white/10" />
                                        <span className="text-[11px] text-white/20">{tp.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
