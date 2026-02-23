import { Github, Twitter, Linkedin, Mail, MapPin, ArrowUpRight, Heart, Coffee, Zap } from "lucide-react"
import { SITE, SOCIAL_LINKS } from "@/lib/constants"

const footerLinks = {
    Services: [
        { label: "Web Development", href: "#services" },
        { label: "Mobile Apps", href: "#services" },
        { label: "AI Integration", href: "#services" },
        { label: "UI/UX Design", href: "#services" },
        { label: "MVP Development", href: "#services" },
    ],
    Company: [
        { label: "About", href: "#hero" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Process", href: "#process" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" },
    ],
    Resources: [
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
    ],
}

const socialIcons: Record<string, React.ReactNode> = {
    twitter: <Twitter className="w-4 h-4" />,
    github: <Github className="w-4 h-4" />,
    linkedin: <Linkedin className="w-4 h-4" />,
}

const stats = [
    { value: "150+", label: "Projects" },
    { value: "40+", label: "Countries" },
    { value: "98%", label: "Retention" },
    { value: "<2h", label: "Response" },
]

export default function Footer() {
    return (
        <footer className="relative border-t border-white/[0.04]">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

            <div className="section-container">
                {/* ── Stats strip ── */}
                <div className="py-8 sm:py-10 border-b border-white/[0.04]">
                    <div className="flex flex-row flex-nowrap items-center justify-between max-w-lg mx-auto">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center px-2">
                                <div className="text-lg sm:text-xl font-extrabold text-white/50">{stat.value}</div>
                                <div className="text-[9px] sm:text-[10px] text-white/12 uppercase tracking-widest font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Main footer grid ── */}
                <div className="py-10 sm:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-8">
                    {/* Brand column */}
                    <div className="space-y-5">
                        <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--color-brand-500)] to-[oklch(0.7_0.18_200)] flex items-center justify-center">
                                <span className="text-white text-[11px] font-bold">P</span>
                            </div>
                            <span className="text-lg font-bold text-white">{SITE.name}</span>
                        </div>

                        <p className="text-[13px] text-white/20 max-w-[280px] leading-relaxed">
                            {SITE.description}
                        </p>

                        <div className="flex items-center gap-1.5 text-[11px] text-white/12">
                            <MapPin className="w-3 h-3" />
                            <span>Global · Remote-first · All timezones</span>
                        </div>

                        <a
                            href={`mailto:${SITE.email}`}
                            className="inline-flex items-center gap-1.5 text-[12px] text-white/25 hover:text-white/60 transition-colors duration-300"
                        >
                            <Mail className="w-3.5 h-3.5" />
                            {SITE.email}
                        </a>

                        {/* Social links */}
                        <div className="flex gap-2 pt-1">
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.icon}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-lg border border-white/[0.04] bg-white/[0.015] flex items-center justify-center text-white/15 hover:text-white/50 hover:border-white/[0.1] hover:bg-white/[0.03] transition-all duration-300"
                                    aria-label={link.label}
                                >
                                    {socialIcons[link.icon] || <ArrowUpRight className="w-3.5 h-3.5" />}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-[10px] font-semibold tracking-widest uppercase text-white/20 mb-4">
                                {category}
                            </h3>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="group flex items-center gap-1 text-[12px] text-white/20 hover:text-white/55 transition-colors duration-200"
                                        >
                                            {link.label}
                                            <ArrowUpRight className="w-2.5 h-2.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ── CTA strip ── */}
                <div className="py-6 border-t border-b border-white/[0.04]">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <p className="text-[13px] text-white/30 font-medium">Ready to start?</p>
                            <p className="text-[11px] text-white/12">Free consultation · No commitment · NDA protected</p>
                        </div>
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 px-5 py-2.5 text-[12px] font-semibold text-white rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[oklch(0.65_0.22_280)] hover:shadow-[0_4px_24px_-4px_rgba(139,92,246,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <Zap className="w-3 h-3" />
                            Get a Free Quote
                            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* ── Bottom bar ── */}
                <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[11px] text-white/10">
                        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
                    </p>
                    <p className="text-[11px] text-white/10 flex items-center gap-1">
                        Crafted with <Heart className="w-2.5 h-2.5 text-red-400/30" /> and too much <Coffee className="w-2.5 h-2.5 text-amber-400/30" />
                    </p>
                </div>
            </div>
        </footer>
    )
}
