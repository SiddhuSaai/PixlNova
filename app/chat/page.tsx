"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import {
    Send, Bot, User, Sparkles, ArrowLeft,
    MessageSquareText, HelpCircle, Clock, Zap, Globe,
    Code2, Smartphone, Palette, Rocket, Server, Brain, Cloud,
    Layers, DollarSign, Cpu, Timer,
} from "lucide-react"

/* ────────────────────────────────────────────────────────── */
/*  KNOWLEDGE BASE                                            */
/* ────────────────────────────────────────────────────────── */

const KNOWLEDGE: { keywords: string[]; reply: string }[] = [
    {
        keywords: ["price", "cost", "pricing", "budget", "how much", "rate", "charge", "afford"],
        reply:
            "Our pricing is geo-adaptive and adjusts to your region! 💰\n\n• **Web Development** — from $2,000\n• **Mobile Apps** — from $3,000\n• **MVP Development** — from $5,000\n• **AI Integration** — from $4,000\n\nAll plans include a free discovery call. Want a custom quote? Just tell me about your project!",
    },
    {
        keywords: ["service", "what do you", "offer", "build", "develop", "create", "do you"],
        reply:
            "We specialise in 8 core services 🛠️\n\n1. **Web Development** — Next.js, React, Vue\n2. **Mobile Apps** — Flutter, React Native, Swift\n3. **Desktop Apps** — Electron, Tauri\n4. **UI/UX Design** — Figma, Design Systems\n5. **Backend & APIs** — Node, Python, Go\n6. **AI Integration** — LLMs, RAG, ML\n7. **MVP Development** — 2–4 week launches\n8. **DevOps & Cloud** — AWS, GCP, Vercel\n\nWhich one interests you? I can dive deeper into any of these.",
    },
    {
        keywords: ["time", "timeline", "how long", "duration", "deadline", "fast", "delivery", "quick"],
        reply:
            "Here are our typical delivery timelines ⏱️\n\n• **Landing Pages** — 1–2 weeks\n• **MVPs** — 2–4 weeks\n• **Web Apps** — 4–8 weeks\n• **Mobile Apps** — 6–12 weeks\n• **Enterprise** — 3–6 months\n\nWe deliver **3× faster** than the industry average. Got a specific deadline? I can help scope your timeline.",
    },
    {
        keywords: ["tech", "stack", "technology", "framework", "language", "tool"],
        reply:
            "Our modern tech stack 🧑‍💻\n\n**Frontend** — Next.js · React · Vue · Tailwind\n**Mobile** — Flutter · React Native · Swift · Kotlin\n**Backend** — Node.js · Python · Go · Rust\n**AI/ML** — OpenAI · Anthropic · LangChain · Pinecone\n**Infra** — AWS · GCP · Vercel · Cloudflare\n**Database** — PostgreSQL · Redis · Supabase · MongoDB\n\nWe pick the best tool for each job — no dogma.",
    },
    {
        keywords: ["contact", "reach", "call", "email", "meet", "talk", "schedule", "book", "demo"],
        reply:
            "Let's connect! 📞\n\n• **Email** — hello@pixlnova.com\n• **Response time** — within 12 hours\n• **Free discovery call** — 30 minutes, no strings attached\n\nOr head to our **[contact form](/#contact)** and we'll get back to you within the same business day!",
    },
    {
        keywords: ["hi", "hello", "hey", "morning", "evening", "howdy", "sup", "yo", "greetings"],
        reply:
            "Hey there! 👋 Great to meet you.\n\nI'm **Nova**, PixlNova's AI assistant. I know everything about our services, pricing, and processes.\n\nWhat can I help you with today?",
    },
    {
        keywords: ["portfolio", "work", "project", "example", "case study", "previous", "client"],
        reply:
            "We've shipped **150+ projects** across **40+ countries** 🎯\n\nOur portfolio includes:\n• SaaS dashboards for Fortune 500 companies\n• E-commerce platforms processing millions in GMV\n• AI-powered tools and chatbots\n• Award-winning mobile apps\n\nCheck the **[Portfolio section](/#portfolio)** for featured work!",
    },
    {
        keywords: ["mvp", "startup", "idea", "launch", "validate", "seed", "funding"],
        reply:
            "We love working with startups! 🚀\n\n• Idea → live product in **2–4 weeks**\n• Production-quality code (not throwaway)\n• Auth, payments, and analytics from day one\n• **12 clients** raised funding after our MVP build\n• **85%** come back for phase 2\n\nTell me about your idea — I'd love to hear it!",
    },
    {
        keywords: ["ai", "chatbot", "gpt", "llm", "machine learning", "artificial intelligence", "rag"],
        reply:
            "AI integration is our superpower 🤖\n\n• **Custom chatbots** — like yours truly!\n• **RAG pipelines** — grounded, sourced answers\n• **Document intelligence** — PDF parsing, OCR, extraction\n• **Recommendation engines** — personalised experiences\n• **Predictive analytics** — data-driven decisions\n\nWe process **50M+ tokens/month** with **94% accuracy** across client projects.",
    },
    {
        keywords: ["web", "website", "react", "next", "nextjs", "frontend", "landing"],
        reply:
            "Web development is our bread and butter 🌐\n\n• **Next.js & React** mastery — SSR, ISR, edge middleware\n• **Progressive Web Apps** — offline-capable, installable\n• **E-commerce** — headless Shopify, Stripe, custom stores\n• **SaaS dashboards** — real-time, collaborative\n• **CMS integration** — Sanity, Strapi, Payload\n\nAvg. Lighthouse score: **98**. We don't compromise on performance.",
    },
    {
        keywords: ["mobile", "app", "ios", "android", "flutter", "react native", "swift", "kotlin"],
        reply:
            "We build mobile apps that users love 📱\n\n• **Flutter** — single codebase, native performance\n• **React Native** — share code with your web app\n• **Native iOS** — SwiftUI for premium experiences\n• **Native Android** — Jetpack Compose\n\n**45+ apps** published · **2M+ downloads** · **4.8★ avg rating**",
    },
    {
        keywords: ["design", "ui", "ux", "figma", "prototype", "wireframe"],
        reply:
            "Design is strategy made visible 🎨\n\n• **User research** — personas, journey maps, testing\n• **Design systems** — reusable, scalable, tokenised\n• **Prototyping** — interactive Figma with real data\n• **Motion design** — micro-interactions that delight\n• **Accessibility** — WCAG 2.1 AA compliant\n\n**30+ design systems** built · **5K+ components** designed",
    },
    {
        keywords: ["backend", "api", "database", "server", "node", "python", "go"],
        reply:
            "We engineer backends that scale 🏗️\n\n• **REST & GraphQL APIs** with OpenAPI specs\n• **Microservices** — event-driven, message queues\n• **Database design** — SQL, NoSQL, vector stores\n• **Auth & security** — OAuth, RBAC, rate limiting\n• **Real-time** — WebSockets, SSE, pub/sub\n\n**100+ APIs** built · **50K+ req/sec** handled · **99.99% uptime**",
    },
    {
        keywords: ["devops", "cloud", "deploy", "ci", "cd", "docker", "kubernetes", "aws", "infrastructure"],
        reply:
            "Infrastructure that scales while you sleep ☁️\n\n• **CI/CD pipelines** — GitHub Actions, GitLab CI\n• **Containers** — Docker, Kubernetes, Helm\n• **Edge & serverless** — Vercel, Cloudflare Workers\n• **IaC** — Terraform, Pulumi\n• **Monitoring** — Grafana, Datadog, custom dashboards\n\n**45% avg cost savings** for clients · **99.99% uptime SLA**",
    },
    {
        keywords: ["thank", "thanks", "appreciate", "awesome", "great", "perfect", "cool", "nice"],
        reply:
            "You're welcome! 😊 \n\nIf you need anything else, I'm right here. You can also **[book a free call](/#contact)** with our team to discuss your project in detail.\n\nHave a great day! ✨",
    },
]

function findReply(msg: string): string {
    const lc = msg.toLowerCase()
    for (const k of KNOWLEDGE) {
        if (k.keywords.some((w) => lc.includes(w))) return k.reply
    }
    return "That's a great question! 🤔\n\nI can help with **services**, **pricing**, **timelines**, **tech stack**, **design**, **AI**, and more.\n\nTry asking about any of these topics, or **[contact our team](/#contact)** for a personalised response!"
}

/* ────────────────────────────────────────────────────────── */
/*  TYPES                                                     */
/* ────────────────────────────────────────────────────────── */

interface Msg {
    id: string
    role: "user" | "bot"
    text: string
    ts: Date
    streaming?: boolean
}

const WELCOME: Msg = {
    id: "w",
    role: "bot",
    text: "👋 Hey! I'm **Nova**, PixlNova's AI assistant.\n\nI can answer any question about our services, pricing, timelines, tech stack, and processes. Ask me anything — or tap a quick action below to get started!",
    ts: new Date(),
}

/* ────────────────────────────────────────────────────────── */
/*  TOPIC SHORTCUTS                                           */
/* ────────────────────────────────────────────────────────── */

const TOPICS = [
    { icon: Globe, label: "Services overview", prompt: "What services do you offer?" },
    { icon: Zap, label: "Delivery speed", prompt: "How fast can you deliver?" },
    { icon: HelpCircle, label: "Pricing info", prompt: "How much does it cost?" },
    { icon: Code2, label: "Web development", prompt: "Tell me about web development" },
    { icon: Smartphone, label: "Mobile apps", prompt: "Tell me about mobile app development" },
    { icon: Palette, label: "UI/UX design", prompt: "Tell me about your design services" },
    { icon: Brain, label: "AI integration", prompt: "Tell me about AI integration" },
    { icon: Server, label: "Backend & APIs", prompt: "Tell me about backend development" },
    { icon: Rocket, label: "MVP development", prompt: "Tell me about MVP development" },
    { icon: Cloud, label: "DevOps & Cloud", prompt: "Tell me about DevOps and cloud services" },
    { icon: Clock, label: "Book a call", prompt: "How can I book a call?" },
]

const SUGGESTED = [
    {
        icon: Layers,
        label: "Explore Services",
        desc: "See what we build — web, mobile, AI & more",
        prompt: "What services do you offer?",
        accent: "from-violet-500 to-purple-600",
        glow: "group-hover:shadow-[0_0_20px_-4px_rgba(139,92,246,0.35)]",
    },
    {
        icon: Timer,
        label: "Delivery Speed",
        desc: "Learn about our 3× faster timelines",
        prompt: "How fast can you deliver?",
        accent: "from-cyan-500 to-blue-500",
        glow: "group-hover:shadow-[0_0_20px_-4px_rgba(6,182,212,0.35)]",
    },
    {
        icon: Cpu,
        label: "AI & Automation",
        desc: "Custom chatbots, RAG, ML pipelines",
        prompt: "Tell me about AI integration",
        accent: "from-amber-500 to-orange-500",
        glow: "group-hover:shadow-[0_0_20px_-4px_rgba(245,158,11,0.35)]",
    },
    {
        icon: DollarSign,
        label: "Pricing & Plans",
        desc: "Transparent, geo-adaptive pricing",
        prompt: "How much does it cost?",
        accent: "from-emerald-500 to-green-500",
        glow: "group-hover:shadow-[0_0_20px_-4px_rgba(16,185,129,0.35)]",
    },
    {
        icon: Rocket,
        label: "Ship an MVP",
        desc: "From idea to live product in weeks",
        prompt: "Tell me about MVP development",
        accent: "from-pink-500 to-rose-500",
        glow: "group-hover:shadow-[0_0_20px_-4px_rgba(236,72,153,0.35)]",
    },
    {
        icon: MessageSquareText,
        label: "Get in Touch",
        desc: "Book a free 30-min discovery call",
        prompt: "How can I contact your team?",
        accent: "from-indigo-500 to-violet-500",
        glow: "group-hover:shadow-[0_0_20px_-4px_rgba(99,102,241,0.35)]",
    },
]

/* ────────────────────────────────────────────────────────── */
/*  COMPONENT                                                 */
/* ────────────────────────────────────────────────────────── */

/* ── Streaming text component ── */
function StreamingText({ text, onComplete }: { text: string; onComplete?: () => void }) {
    const [visibleCount, setVisibleCount] = useState(0)
    const words = text.split(/( )/)

    useEffect(() => {
        if (visibleCount >= words.length) {
            onComplete?.()
            return
        }
        const speed = 20 + Math.random() * 25
        const timer = setTimeout(() => setVisibleCount((c) => c + 1), speed)
        return () => clearTimeout(timer)
    }, [visibleCount, words.length, onComplete])

    const partial = words.slice(0, visibleCount).join("")

    return (
        <div className="chat-markdown">
            <ReactMarkdown
                components={{
                    a: ({ href, children }) => (
                        <a href={href} className="underline text-[var(--color-brand-400)] hover:text-[var(--color-text-primary)] transition-colors">
                            {children}
                        </a>
                    ),
                    strong: ({ children }) => <strong className="text-[var(--color-text-primary)] font-semibold">{children}</strong>,
                }}
            >
                {partial}
            </ReactMarkdown>
            {visibleCount < words.length && (
                <span className="inline-block w-[2px] h-[14px] bg-[var(--overlay-40)] animate-pulse ml-0.5 align-middle" />
            )}
        </div>
    )
}

/* ── Rendered markdown for completed messages ── */
function RenderedMarkdown({ text }: { text: string }) {
    return (
        <div className="chat-markdown">
            <ReactMarkdown
                components={{
                    a: ({ href, children }) => (
                        <a href={href} className="underline text-[var(--color-brand-400)] hover:text-[var(--color-text-primary)] transition-colors">
                            {children}
                        </a>
                    ),
                    strong: ({ children }) => <strong className="text-[var(--color-text-primary)] font-semibold">{children}</strong>,
                }}
            >
                {text}
            </ReactMarkdown>
        </div>
    )
}

export default function ChatPage() {
    const [msgs, setMsgs] = useState<Msg[]>([WELCOME])
    const [input, setInput] = useState("")
    const [typing, setTyping] = useState(false)
    const endRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const scrollAreaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [msgs, typing])

    /* Auto-scroll during streaming */
    useEffect(() => {
        const interval = setInterval(() => {
            const streaming = msgs.some((m) => m.streaming)
            if (streaming) endRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 150)
        return () => clearInterval(interval)
    }, [msgs])

    const markStreamComplete = useCallback((id: string) => {
        setMsgs((p) => p.map((m) => (m.id === id ? { ...m, streaming: false } : m)))
    }, [])

    const send = useCallback((text: string) => {
        if (!text.trim()) return
        const user: Msg = { id: `u-${Date.now()}`, role: "user", text: text.trim(), ts: new Date() }
        setMsgs((p) => [...p, user])
        setInput("")
        setTyping(true)

        const delay = 400 + Math.random() * 600
        setTimeout(() => {
            const botId = `b-${Date.now()}`
            const bot: Msg = { id: botId, role: "bot", text: findReply(text), ts: new Date(), streaming: true }
            setMsgs((p) => [...p, bot])
            setTyping(false)
        }, delay)
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        send(input)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            send(input)
        }
    }

    const fmt = (d: Date) =>
        d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

    const showSuggestions = msgs.length <= 1 && !typing

    return (
        <div className="h-dvh flex bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] overflow-hidden">
            {/* ═══════════ SIDEBAR ═══════════ */}
            <aside className="hidden lg:flex w-[280px] shrink-0 flex-col border-r border-[var(--overlay-6)] bg-[var(--color-bg-secondary)]">
                {/* Logo */}
                <div className="px-5 py-5 border-b border-[var(--overlay-6)]">
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-accent-cyan)] flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-[var(--color-text-primary)]" />
                        </div>
                        <div>
                            <span className="text-[15px] font-bold text-[var(--color-text-primary)] tracking-tight">PixlNova</span>
                            <span className="text-[10px] text-[var(--overlay-30)] block -mt-0.5">AI Assistant</span>
                        </div>
                    </Link>
                </div>

                {/* Topics */}
                <div className="flex-1 overflow-y-auto px-3 py-4">
                    <p className="text-[10px] font-semibold text-[var(--overlay-20)] uppercase tracking-[0.15em] px-2 mb-2">
                        Topics
                    </p>
                    <div className="space-y-0.5">
                        {TOPICS.map((t) => (
                            <button
                                key={t.label}
                                onClick={() => send(t.prompt)}
                                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left hover:bg-[var(--overlay-4)] transition-all group"
                            >
                                <t.icon className="w-4 h-4 text-[var(--overlay-20)] group-hover:text-[var(--color-brand-400)] transition-colors shrink-0" />
                                <span className="text-[13px] text-[var(--overlay-45)] group-hover:text-[var(--overlay-80)] transition-colors truncate">
                                    {t.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className="px-4 py-4 border-t border-[var(--overlay-6)]">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-[12px] text-[var(--overlay-25)] hover:text-[var(--overlay-50)] transition-colors"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Back to website
                    </Link>
                </div>
            </aside>

            {/* ═══════════ MAIN ═══════════ */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="shrink-0 flex items-center justify-between px-5 sm:px-8 py-4 border-b border-[var(--overlay-6)] bg-[var(--color-bg-secondary)]">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="lg:hidden flex items-center gap-2 text-[var(--overlay-40)] hover:text-[var(--overlay-70)] transition-colors mr-2">
                            <ArrowLeft className="w-4 h-4" />
                        </Link>
                        <div className="relative">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-accent-cyan)] flex items-center justify-center">
                                <Bot className="w-4 h-4 text-[var(--color-text-primary)]" />
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[oklch(0.07_0.01_280)]" />
                        </div>
                        <div>
                            <h1 className="text-[15px] font-semibold text-[var(--color-text-primary)] leading-tight">Nova AI Assistant</h1>
                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <span className="text-[11px] text-[var(--overlay-35)]">Always online · Replies instantly</span>
                            </div>
                        </div>
                    </div>
                    <Link
                        href="/#contact"
                        className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12px] font-medium bg-[var(--color-brand-500)] text-[var(--color-text-primary)] hover:brightness-110 transition-all"
                    >
                        <MessageSquareText className="w-3.5 h-3.5" />
                        Talk to a human
                    </Link>
                </header>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-6 space-y-5">
                        {msgs.map((m) => (
                            <motion.div
                                key={m.id}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25 }}
                                className={`${m.role === "user" ? "flex justify-end" : ""}`}
                            >
                                <div className={`${m.role === "user" ? "max-w-[75%] text-right" : ""}`}>
                                    {m.role === "bot" ? (
                                        <>
                                            <div className="text-[14px] leading-[1.7] text-[var(--overlay-60)]">
                                                {m.streaming ? (
                                                    <StreamingText text={m.text} onComplete={() => markStreamComplete(m.id)} />
                                                ) : (
                                                    <RenderedMarkdown text={m.text} />
                                                )}
                                            </div>
                                            <p className="text-[10px] text-[var(--overlay-15)] mt-1.5">{fmt(m.ts)}</p>
                                        </>
                                    ) : (
                                        <>
                                            <div className="inline-block text-[13.5px] leading-relaxed rounded-2xl rounded-tr-md px-4 py-3 text-left bg-gradient-to-br from-[var(--color-brand-500)] to-[oklch(0.45_0.20_300)] text-[var(--color-text-primary)]">
                                                {m.text}
                                            </div>
                                            <p className="text-[10px] text-[var(--overlay-15)] mt-1 text-right">{fmt(m.ts)}</p>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        {/* Typing */}
                        {typing && (
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-1.5 py-2"
                            >
                                {[0, 1, 2].map((i) => (
                                    <motion.span
                                        key={i}
                                        className="w-[6px] h-[6px] rounded-full bg-[var(--overlay-20)]"
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 0.55, repeat: Infinity, delay: i * 0.15 }}
                                    />
                                ))}
                            </motion.div>
                        )}

                        {/* Suggested prompts on empty state */}
                        {showSuggestions && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                                className="pt-3 flex flex-wrap gap-2"
                            >
                                {SUGGESTED.map((s, idx) => (
                                    <motion.button
                                        key={s.label}
                                        initial={{ opacity: 0, scale: 0.92 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 + idx * 0.05 }}
                                        onClick={() => send(s.prompt)}
                                        className={`group flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-white/[0.07] bg-[var(--overlay-2)] hover:bg-[var(--overlay-5)] hover:border-[var(--overlay-15)] transition-all duration-200 ${s.glow}`}
                                    >
                                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${s.accent} flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity`}>
                                            <s.icon className="w-3 h-3 text-[var(--color-text-primary)]" />
                                        </div>
                                        <span className="text-[12px] text-[var(--overlay-40)] group-hover:text-[var(--overlay-70)] transition-colors whitespace-nowrap">
                                            {s.label}
                                        </span>
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}

                        <div ref={endRef} className="h-28" />
                    </div>
                </div>

                {/* Input Area — floating, no bg */}
                <div className="shrink-0 px-5 sm:px-8 pb-4 pt-2 -mt-28 relative z-10" style={{ background: 'linear-gradient(to top, var(--color-bg-primary) 60%, transparent)' }}>
                    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                        <div className="rounded-2xl border border-[var(--overlay-8)] bg-[var(--color-bg-card)] backdrop-blur-xl overflow-hidden">
                            {/* Textarea row */}
                            <div className="px-4 pt-3 pb-1">
                                <textarea
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Reply…"
                                    rows={1}
                                    className="w-full bg-transparent text-[14px] text-[var(--color-text-primary)] placeholder:text-[var(--overlay-25)] resize-none max-h-40 leading-relaxed"
                                    style={{ minHeight: "24px", outline: "none", boxShadow: "none" }}
                                />
                            </div>

                            {/* Bottom toolbar row */}
                            <div className="flex items-center justify-between px-3 py-2">
                                <button
                                    type="button"
                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--overlay-25)] hover:text-[var(--overlay-50)] hover:bg-[var(--overlay-4)] transition-all"
                                    aria-label="Attach file"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </button>

                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] text-[var(--overlay-30)] hover:bg-[var(--overlay-4)] cursor-default transition-colors select-none">
                                        Nova 1.0
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                    <button
                                        type="submit"
                                        disabled={!input.trim() || typing}
                                        className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--color-text-primary)] transition-all disabled:opacity-20 disabled:cursor-not-allowed active:scale-90 shrink-0"
                                        style={{
                                            background: input.trim()
                                                ? "linear-gradient(135deg, oklch(0.50 0.25 285), oklch(0.60 0.18 220))"
                                                : "var(--overlay-8)",
                                        }}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="19" x2="12" y2="5" />
                                            <polyline points="5 12 12 5 19 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <p className="text-[10px] text-[var(--overlay-15)] text-center mt-2">
                            Nova is AI and can make mistakes. Please double-check responses.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
