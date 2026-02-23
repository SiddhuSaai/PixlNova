"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeUp, stagger } from "@/lib/animations"
import { useGeo } from "@/components/providers/GeoProvider"
import { PRICING_DATA, formatPriceRange, type ServiceType, type PlanLevel } from "@/lib/geo"
import { Check, Zap, ArrowRight, Shield, Clock, Headphones, Globe, Smartphone, Layers, Brain, Package } from "lucide-react"

/* ── Per-service tab data ── */
const serviceTabData: Record<ServiceType, {
    label: string
    icon: React.ComponentType<{ className?: string }>
    headline: string
    plans: {
        key: PlanLevel
        name: string
        subtitle: string
        popular?: boolean
        timeline: string
        features: string[]
        highlight?: string
        cta: string
    }[]
}> = {
    web: {
        label: "Web",
        icon: Globe,
        headline: "Fast, responsive websites that convert visitors into customers.",
        plans: [
            {
                key: "starter",
                name: "Launch",
                subtitle: "Perfect for startups & landing pages",
                timeline: "1–2 weeks",
                features: [
                    "Up to 5 responsive pages",
                    "Mobile-first design",
                    "Basic SEO optimization",
                    "Contact form integration",
                    "1 round of revisions",
                    "30 days free support",
                ],
                cta: "Start Building",
            },
            {
                key: "growth",
                name: "Growth",
                subtitle: "For growing businesses that need more",
                popular: true,
                timeline: "3–5 weeks",
                features: [
                    "Up to 15 custom pages",
                    "CMS integration (Sanity/Strapi)",
                    "Advanced SEO & analytics",
                    "Custom animations & interactions",
                    "Blog / news section",
                    "API integrations",
                    "3 rounds of revisions",
                    "90 days free support",
                ],
                highlight: "Most value per dollar",
                cta: "Get Started",
            },
            {
                key: "pro",
                name: "Scale",
                subtitle: "Enterprise-grade web platforms",
                timeline: "6–12 weeks",
                features: [
                    "Unlimited pages & routes",
                    "Custom CMS & admin panel",
                    "Enterprise SEO & i18n",
                    "Advanced animations (GSAP/Framer)",
                    "Auth & user management",
                    "Third-party integrations",
                    "Performance optimization",
                    "6 months priority support",
                ],
                cta: "Schedule a Call",
            },
        ],
    },
    mobile: {
        label: "Mobile",
        icon: Smartphone,
        headline: "Native & cross-platform apps that users love.",
        plans: [
            {
                key: "starter",
                name: "MVP",
                subtitle: "Validate your idea fast",
                timeline: "3–4 weeks",
                features: [
                    "Single platform (iOS or Android)",
                    "Up to 8 screens",
                    "Basic UI/UX design",
                    "Push notifications",
                    "1 API integration",
                    "App Store submission",
                ],
                cta: "Build My MVP",
            },
            {
                key: "growth",
                name: "Flagship",
                subtitle: "Full-featured cross-platform app",
                popular: true,
                timeline: "6–10 weeks",
                features: [
                    "iOS + Android (Flutter/React Native)",
                    "Up to 20 screens",
                    "Custom UI design system",
                    "Real-time features & chat",
                    "Payment integration",
                    "Analytics & crash reporting",
                    "Multiple API integrations",
                    "90 days free support",
                ],
                highlight: "Best for product-market fit",
                cta: "Get Started",
            },
            {
                key: "pro",
                name: "Enterprise",
                subtitle: "Mission-critical mobile platforms",
                timeline: "12–20 weeks",
                features: [
                    "iOS + Android native or Flutter",
                    "Unlimited screens & flows",
                    "Offline-first architecture",
                    "Biometric auth & encryption",
                    "CI/CD & automated testing",
                    "Backend API development",
                    "App Store optimization",
                    "12 months priority support",
                ],
                cta: "Schedule a Call",
            },
        ],
    },
    bundle: {
        label: "Bundle",
        icon: Package,
        headline: "Web + Mobile together — save 25% on the full package.",
        plans: [
            {
                key: "starter",
                name: "Starter Pack",
                subtitle: "Landing page + simple app",
                timeline: "4–6 weeks",
                features: [
                    "5-page responsive website",
                    "Single platform mobile app",
                    "Shared design system",
                    "Basic backend / API",
                    "SEO + App Store submission",
                    "2 rounds of revisions",
                ],
                cta: "Get Bundle Quote",
            },
            {
                key: "growth",
                name: "Growth Pack",
                subtitle: "Full website + cross-platform app",
                popular: true,
                timeline: "8–14 weeks",
                features: [
                    "15-page website with CMS",
                    "iOS + Android app",
                    "Unified design language",
                    "Shared backend & API layer",
                    "Push notifications & analytics",
                    "Payment & auth integration",
                    "3 rounds of revisions",
                    "90 days support",
                ],
                highlight: "Save 25% vs. separate projects",
                cta: "Get Started",
            },
            {
                key: "pro",
                name: "Scale Pack",
                subtitle: "Enterprise web + mobile ecosystem",
                timeline: "16–24 weeks",
                features: [
                    "Unlimited web pages & routes",
                    "iOS + Android enterprise app",
                    "Custom admin dashboard",
                    "Microservices architecture",
                    "CI/CD & automated testing",
                    "Real-time sync across platforms",
                    "Dedicated project manager",
                    "12 months priority support",
                ],
                cta: "Schedule a Call",
            },
        ],
    },
    saas: {
        label: "SaaS",
        icon: Layers,
        headline: "Production-ready SaaS platforms built for scale.",
        plans: [
            {
                key: "starter",
                name: "Foundation",
                subtitle: "Core SaaS in record time",
                timeline: "4–6 weeks",
                features: [
                    "Auth & user management",
                    "Up to 10 core features",
                    "Stripe billing integration",
                    "Basic dashboard UI",
                    "PostgreSQL database",
                    "Vercel / Railway deployment",
                ],
                cta: "Start Building",
            },
            {
                key: "growth",
                name: "Platform",
                subtitle: "Full-stack SaaS with all the trimmings",
                popular: true,
                timeline: "8–14 weeks",
                features: [
                    "Multi-tenant architecture",
                    "Role-based access control",
                    "Subscription & usage billing",
                    "Admin dashboard & analytics",
                    "Email & notification system",
                    "API documentation",
                    "Automated testing suite",
                    "90 days support",
                ],
                highlight: "Everything you need to launch",
                cta: "Get Started",
            },
            {
                key: "pro",
                name: "Enterprise SaaS",
                subtitle: "Scale to 10,000+ users",
                timeline: "16–24 weeks",
                features: [
                    "Microservices / serverless arch",
                    "SSO & enterprise auth",
                    "White-label / multi-brand",
                    "Real-time collaboration features",
                    "Audit logging & compliance",
                    "Load testing & optimization",
                    "GraphQL / REST API layer",
                    "12 months priority support",
                ],
                cta: "Schedule a Call",
            },
        ],
    },
    ai: {
        label: "AI",
        icon: Brain,
        headline: "AI-powered features that give you a competitive edge.",
        plans: [
            {
                key: "starter",
                name: "AI Starter",
                subtitle: "Add AI to your existing product",
                timeline: "2–4 weeks",
                features: [
                    "ChatGPT / Claude integration",
                    "1 AI-powered feature",
                    "Prompt engineering & tuning",
                    "Basic RAG pipeline",
                    "REST API endpoint",
                    "Usage monitoring",
                ],
                cta: "Add AI Now",
            },
            {
                key: "growth",
                name: "AI Platform",
                subtitle: "Custom AI agents & workflows",
                popular: true,
                timeline: "6–10 weeks",
                features: [
                    "Custom AI agent / chatbot",
                    "Multi-model orchestration",
                    "Advanced RAG with embeddings",
                    "Fine-tuning & evaluation",
                    "Streaming responses",
                    "Conversation memory & context",
                    "Analytics dashboard",
                    "90 days support",
                ],
                highlight: "Most requested package",
                cta: "Get Started",
            },
            {
                key: "pro",
                name: "AI Enterprise",
                subtitle: "End-to-end AI transformation",
                timeline: "12–20 weeks",
                features: [
                    "Custom model training",
                    "Multi-agent systems",
                    "On-premise deployment option",
                    "Enterprise security & compliance",
                    "MLOps pipeline (CI/CD for AI)",
                    "Automated evaluation & testing",
                    "Data pipeline engineering",
                    "Dedicated AI engineer",
                ],
                cta: "Schedule a Call",
            },
        ],
    },
}

const trustPoints = [
    { icon: Shield, text: "No hidden fees, ever" },
    { icon: Clock, text: "Pay in milestones, not upfront" },
    { icon: Headphones, text: "Free support included" },
]

export default function Pricing() {
    const [activeTab, setActiveTab] = useState<ServiceType>("web")
    const geo = useGeo()
    const tabData = serviceTabData[activeTab]

    return (
        <section id="pricing" className="py-10 overflow-hidden">
            <div className="section-container">
                <motion.div
                    variants={stagger(0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {/* ── Header ── */}
                    <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--overlay-6)] bg-[var(--overlay-2)] mb-6">
                            <Zap className="w-3.5 h-3.5 text-[var(--overlay-30)]" />
                            <span className="text-[11px] sm:text-[12px] text-[var(--overlay-35)] font-medium uppercase tracking-widest">Simple Pricing</span>
                        </div>
                        <h2 className="font-bold text-[var(--color-text-primary)]" style={{ fontSize: "var(--font-size-h2)" }}>
                            Invest in Growth, <span className="gradient-text">Not Guesswork</span>
                        </h2>
                        <p className="mt-4 text-[var(--overlay-35)] text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
                            Transparent pricing adapted to your region. No surprise invoices — pay in milestones as you see progress.
                        </p>
                    </motion.div>

                    {/* ── Geo Badge ── */}
                    {!geo.loading && (
                        <motion.div variants={fadeUp} className="flex justify-center mb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--overlay-6)] bg-[var(--overlay-2)]">
                                <span className="text-base">{geo.flag}</span>
                                <span className="text-[12px] text-[var(--overlay-30)]">
                                    Prices for <span className="text-[var(--overlay-60)] font-medium">{geo.country}</span> ({geo.currency})
                                </span>
                            </div>
                        </motion.div>
                    )}

                    {/* ── Service Tabs ── */}
                    <motion.div variants={fadeUp} className="flex justify-center gap-1 sm:gap-1.5 mb-4 flex-wrap">
                        {(Object.keys(serviceTabData) as ServiceType[]).map((key) => {
                            const TabIcon = serviceTabData[key].icon
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`relative px-4 sm:px-5 py-2 text-[13px] font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 ${activeTab === key
                                        ? "text-[var(--color-text-primary)]"
                                        : "text-[var(--overlay-25)] hover:text-[var(--overlay-50)]"
                                        }`}
                                >
                                    {activeTab === key && (
                                        <motion.div
                                            layoutId="pricingTab"
                                            className="absolute inset-0 rounded-full border border-[var(--overlay-12)] bg-[var(--overlay-5)]"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <TabIcon className="w-3.5 h-3.5 relative z-10" />
                                    <span className="relative z-10">{serviceTabData[key].label}</span>
                                </button>
                            )
                        })}
                    </motion.div>

                    {/* ── Service headline ── */}
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={activeTab + "-headline"}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="text-center text-[14px] text-[var(--overlay-25)] mb-10 sm:mb-12"
                        >
                            {tabData.headline}
                        </motion.p>
                    </AnimatePresence>

                    {/* ── Pricing Cards ── */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto items-start"
                        >
                            {tabData.plans.map((plan) => {
                                const tierData = PRICING_DATA[activeTab]?.[plan.key]?.[geo.tier]
                                const priceRange = tierData
                                    ? formatPriceRange(
                                        Math.round(tierData.min * geo.rate),
                                        Math.round(tierData.max * geo.rate),
                                        geo.currency,
                                        geo.locale
                                    )
                                    : "Custom"

                                return (
                                    <div
                                        key={plan.key}
                                        className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 ${plan.popular
                                            ? "border-[var(--overlay-12)] bg-[var(--overlay-3)] md:scale-[1.03] shadow-[0_0_60px_-12px_rgba(139,92,246,0.15)]"
                                            : "border-[var(--overlay-6)] bg-white/[0.01] hover:border-white/[0.1]"
                                            }`}
                                    >
                                        {/* Popular ribbon */}
                                        {plan.popular && (
                                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand-400)] to-transparent" />
                                        )}

                                        <div className="p-6 lg:p-7">
                                            {/* Popular badge */}
                                            {plan.popular && plan.highlight && (
                                                <div className="mb-4">
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[var(--color-brand-500)]/10 text-[var(--color-brand-400)] border border-[var(--color-brand-500)]/20">
                                                        <Zap className="w-3 h-3" />
                                                        {plan.highlight}
                                                    </span>
                                                </div>
                                            )}

                                            {/* Plan name & subtitle */}
                                            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">{plan.name}</h3>
                                            <p className="text-[12px] text-[var(--overlay-25)] mb-5">{plan.subtitle}</p>

                                            {/* Price */}
                                            <div className="mb-1">
                                                <span className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)] tracking-tight">
                                                    {priceRange}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 mb-6 text-[11px] text-[var(--overlay-20)]">
                                                <Clock className="w-3 h-3" />
                                                <span>Delivered in {plan.timeline}</span>
                                            </div>

                                            {/* Divider */}
                                            <div className="h-px bg-[var(--overlay-6)] mb-5" />

                                            {/* Features */}
                                            <ul className="space-y-2.5 mb-7">
                                                {plan.features.map((feature) => (
                                                    <li key={feature} className="flex items-start gap-2.5">
                                                        <div className="w-4 h-4 rounded-full flex items-center justify-center bg-[var(--overlay-4)] shrink-0 mt-0.5">
                                                            <Check className="w-2.5 h-2.5 text-emerald-400" />
                                                        </div>
                                                        <span className="text-[13px] text-[var(--overlay-40)] leading-snug">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* CTA */}
                                            <a
                                                href="#contact"
                                                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[13px] font-semibold transition-all duration-300 ${plan.popular
                                                    ? "bg-gradient-to-r from-[var(--color-brand-500)] to-[oklch(0.65_0.22_280)] text-[var(--color-text-primary)] hover:shadow-[0_4px_24px_-4px_rgba(139,92,246,0.4)] hover:-translate-y-0.5"
                                                    : "border border-[var(--overlay-8)] text-[var(--overlay-60)] hover:text-[var(--color-text-primary)] hover:bg-[var(--overlay-4)] hover:border-white/[0.15]"
                                                    }`}
                                            >
                                                {plan.cta}
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </motion.div>
                    </AnimatePresence>

                    {/* ── Trust points ── */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-10 sm:mt-14 flex flex-row items-center justify-center gap-6 sm:gap-10"
                    >
                        {trustPoints.map((tp) => (
                            <div key={tp.text} className="flex items-center gap-2">
                                <tp.icon className="w-3.5 h-3.5 text-[var(--overlay-15)]" />
                                <span className="text-[11px] sm:text-[12px] text-[var(--overlay-20)] font-medium">{tp.text}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* ── Bottom CTA ── */}
                    <motion.div variants={fadeUp} className="mt-8 flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--overlay-6)] bg-[var(--overlay-2)] text-[12px] text-[var(--overlay-30)] hover:text-[var(--overlay-60)] hover:border-[var(--overlay-12)] transition-all duration-300"
                        >
                            Need a custom quote? Tell us about your project
                            <ArrowRight className="w-3 h-3" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
