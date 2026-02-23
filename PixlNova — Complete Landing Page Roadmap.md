# PixlNova — Complete Landing Page Roadmap

> **The Ultimate Blueprint** for a jaw-dropping, geo-aware portfolio & service landing page  
> Built with Next.js 15 · React 19 · Three.js · AI-Powered · Edge-First · 2026-Ready

---

## 🗂 Table of Contents

1. [Tech Stack — The Arsenal](#1--tech-stack--the-arsenal)
2. [Project Structure — Monorepo Architecture](#2--project-structure--monorepo-architecture)
3. [Environment & Toolchain Setup](#3--environment--toolchain-setup)
4. [Geo-Detection & Dynamic Pricing Engine](#4--geo-detection--dynamic-pricing-engine)
5. [Pages & App Router Architecture](#5--pages--app-router-architecture)
6. [Sections Breakdown — The Experience](#6--sections-breakdown--the-experience)
7. [Components Architecture — Atomic Design](#7--components-architecture--atomic-design)
8. [Design System & Styling](#8--design-system--styling)
9. [Animation Engine — Motion & 3D](#9--animation-engine--motion--3d)
10. [AI-Powered Features](#10--ai-powered-features)
11. [Performance & Core Web Vitals](#11--performance--core-web-vitals)
12. [SEO, Metadata & Structured Data](#12--seo-metadata--structured-data)
13. [Analytics, Tracking & Conversion](#13--analytics-tracking--conversion)
14. [Accessibility (a11y) & Internationalization (i18n)](#14--accessibility-a11y--internationalization-i18n)
15. [Security & Compliance](#15--security--compliance)
16. [CI/CD, Testing & DevOps](#16--cicd-testing--devops)
17. [Edge Deployment & Infrastructure](#17--edge-deployment--infrastructure)
18. [Launch Checklist — Ship It](#18--launch-checklist--ship-it)
19. [Estimated Build Timeline](#19--estimated-build-timeline)

---

## 1 · Tech Stack — The Arsenal

### Core Framework & Runtime

| Category | Technology | Version | Purpose |
|---|---|---|---|
| **Framework** | Next.js 15 (App Router) | `15.x` | RSC, Partial Prerendering (PPR), Streaming SSR |
| **React** | React 19 | `19.x` | Server Components, `use()` hook, Actions, Suspense |
| **Language** | TypeScript 5.5+ | `5.5+` | Strict mode, satisfies operator, decorators |
| **Runtime** | Bun | `1.2+` | Blazing fast package manager, test runner, bundler |
| **Node** | Node.js 22 LTS | `22.x` | Native fetch, WebStreams, import.meta |

### Styling & Design System

| Category | Technology | Purpose |
|---|---|---|
| **CSS Framework** | Tailwind CSS v4 | Oxide engine, CSS-first config, `@theme` directive |
| **UI Components** | shadcn/ui (Radix primitives) | Accessible, composable, copy-paste components |
| **CSS Architecture** | CSS Layers + Container Queries | Cascade control, intrinsic responsive design |
| **Design Tokens** | Style Dictionary + CSS Custom Properties | Multi-platform token pipeline |
| **Color System** | OKLCH Color Space | Perceptually uniform, P3 wide-gamut colors |

### Animation & 3D — The "WOW" Layer

| Category | Technology | Purpose |
|---|---|---|
| **Motion** | Motion (formerly Framer Motion) v12 | Layout animations, scroll-linked, spring physics |
| **3D Engine** | Three.js + React Three Fiber | WebGL hero scenes, 3D product showcases |
| **3D Utils** | drei + postprocessing | 3D helpers, bloom, depth-of-field effects |
| **Scroll Engine** | Lenis + ScrollTrigger (GSAP) | Butter-smooth scroll, parallax, scrub animations |
| **View Transitions** | `next/navigation` + View Transitions API | Native page morphing, shared element transitions |
| **Micro-interactions** | CSS `@starting-style` + `:has()` | Zero-JS hover/focus micro-animations |
| **Particles** | tsParticles | GPU-accelerated particle systems |

### AI & Intelligence Layer

| Category | Technology | Purpose |
|---|---|---|
| **AI Chat** | Vercel AI SDK + OpenAI GPT-4o-mini | Streaming AI assistant for visitors |
| **AI Actions** | Server Actions + AI SDK | Smart form completion, project estimation |
| **Content** | AI-generated OG images via `@vercel/og` | Dynamic social preview images |
| **Personalization** | Edge Middleware + AI | Visitor behavior-based content adaptation |

### Backend & Data

| Category | Technology | Purpose |
|---|---|---|
| **API Layer** | Next.js Route Handlers + Server Actions | Type-safe, zero-client-bundle API calls |
| **Database** | Turso (libSQL) | Edge-native SQLite, global replication |
| **ORM** | Drizzle ORM | Type-safe, SQL-like, zero-overhead |
| **Cache** | Upstash Redis | Edge-compatible KV store, rate limiting |
| **Email** | Resend + React Email | Beautiful transactional emails with JSX |
| **File Storage** | Uploadthing or Cloudflare R2 | Type-safe uploads, edge-served assets |

### Geo, Analytics & Monitoring

| Category | Technology | Purpose |
|---|---|---|
| **Geo Detection** | Vercel `headers()` + MaxMind GeoLite2 | Zero-latency, edge-resolved geo data |
| **Analytics** | Vercel Web Analytics + PostHog | Privacy-first analytics, feature flags, session replay |
| **Error Tracking** | Sentry | Real-time error monitoring, source maps |
| **Performance** | Vercel Speed Insights + Web Vitals | LCP, FID, CLS monitoring |
| **Uptime** | BetterStack (formerly BetterUptime) | Status page, incident management |

### Developer Experience

| Category | Technology | Purpose |
|---|---|---|
| **Linting** | Biome (replacing ESLint + Prettier) | 100x faster linting & formatting, single tool |
| **Git Hooks** | Lefthook | Fast Git hooks, replaces Husky + lint-staged |
| **Type Checking** | `tsc --noEmit` + `@total-typescript/ts-reset` | Bulletproof types |
| **Icons** | Lucide React + `@iconify/react` | 200k+ icons, tree-shakeable |
| **Fonts** | `next/font` (Geist Sans + Geist Mono) | Zero-CLS font loading |
| **Date/Time** | Temporal API (polyfilled) | Modern date handling, timezone-safe |

---

## 2 · Project Structure — Monorepo Architecture

```
pixlnova/
├── app/
│   ├── layout.tsx                    # Root layout — fonts, metadata, providers
│   ├── page.tsx                      # Landing page — all sections composed
│   ├── loading.tsx                   # Global loading skeleton
│   ├── error.tsx                     # Global error boundary
│   ├── not-found.tsx                 # Custom 404
│   ├── globals.css                   # Tailwind v4 + CSS layers + tokens
│   ├── manifest.ts                   # PWA web manifest
│   ├── sitemap.ts                    # Dynamic sitemap generation
│   ├── robots.ts                     # Dynamic robots.txt
│   ├── opengraph-image.tsx           # Dynamic OG image generation
│   │
│   ├── (marketing)/                  # Route group — no layout nesting
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── case-studies/
│   │       ├── page.tsx              # Case studies index
│   │       └── [slug]/page.tsx       # Dynamic case study pages
│   │
│   └── api/
│       ├── contact/route.ts          # Contact form → Resend email
│       ├── geo/route.ts              # Geo detection fallback API
│       ├── chat/route.ts             # AI chat streaming endpoint
│       ├── estimate/route.ts         # AI project estimator
│       ├── analytics/route.ts        # Custom event tracking
│       └── og/route.tsx              # Dynamic OG image generation
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                # Sticky glassmorphism navbar
│   │   ├── Footer.tsx                # Mega footer with newsletter
│   │   ├── MobileMenu.tsx            # Full-screen mobile menu overlay
│   │   └── CommandPalette.tsx        # ⌘K spotlight search
│   │
│   ├── sections/
│   │   ├── Hero/
│   │   │   ├── Hero.tsx              # Main hero orchestrator
│   │   │   ├── HeroScene.tsx         # Three.js 3D background scene
│   │   │   ├── HeroContent.tsx       # Text, CTAs, geo badge
│   │   │   ├── TypeWriter.tsx        # Rotating headline typewriter
│   │   │   └── ParticleField.tsx     # GPU particle background
│   │   │
│   │   ├── Services/
│   │   │   ├── Services.tsx
│   │   │   ├── ServiceCard.tsx       # 3D tilt card with glow
│   │   │   └── ServiceModal.tsx      # Expanded service detail
│   │   │
│   │   ├── Portfolio/
│   │   │   ├── Portfolio.tsx
│   │   │   ├── ProjectCard.tsx       # Hover-reveal project card
│   │   │   ├── ProjectFilter.tsx     # Animated tab filter
│   │   │   └── ProjectLightbox.tsx   # Full-screen image viewer
│   │   │
│   │   ├── Process/
│   │   │   ├── Process.tsx
│   │   │   └── ProcessTimeline.tsx   # Scroll-linked animated timeline
│   │   │
│   │   ├── Pricing/
│   │   │   ├── Pricing.tsx
│   │   │   ├── PricingCard.tsx       # Glassmorphism pricing card
│   │   │   ├── PricingToggle.tsx     # Service tab switcher
│   │   │   └── PricingCalculator.tsx # AI-powered project estimator
│   │   │
│   │   ├── TechStack/
│   │   │   ├── TechStack.tsx
│   │   │   └── TechOrbit.tsx         # Orbital 3D tech icon display
│   │   │
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.tsx
│   │   │   └── TestimonialMarquee.tsx # Infinite scroll marquee
│   │   │
│   │   ├── FAQ/
│   │   │   ├── FAQ.tsx
│   │   │   └── FAQItem.tsx           # Animated accordion item
│   │   │
│   │   ├── Contact/
│   │   │   ├── Contact.tsx
│   │   │   ├── ContactForm.tsx       # Multi-step smart form
│   │   │   └── CalendlyEmbed.tsx     # Inline booking widget
│   │   │
│   │   ├── LogoCloud.tsx             # Client logo marquee
│   │   ├── Stats.tsx                 # Animated counter stats
│   │   └── CTA.tsx                   # Final call-to-action banner
│   │
│   ├── ui/                           # shadcn/ui + custom primitives
│   │   ├── GeoPrice.tsx
│   │   ├── CurrencyBadge.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── GradientText.tsx
│   │   ├── MagneticButton.tsx        # Cursor-following magnetic CTA
│   │   ├── SpotlightCard.tsx         # Mouse-tracking spotlight effect
│   │   ├── TextReveal.tsx            # Character-by-character reveal
│   │   ├── BlurFade.tsx              # Blur-to-focus entrance animation
│   │   ├── Dock.tsx                  # macOS-style dock menu
│   │   ├── Particles.tsx             # tsParticles wrapper
│   │   ├── GridPattern.tsx           # Animated dot grid background
│   │   ├── GlobeVisualization.tsx    # Interactive 3D globe (cobe)
│   │   └── AuroraBackground.tsx      # Animated aurora gradient
│   │
│   └── providers/
│       ├── GeoProvider.tsx           # Geo context provider
│       ├── ThemeProvider.tsx         # System theme detection
│       ├── AnalyticsProvider.tsx     # PostHog + Vercel Analytics
│       └── SmoothScrollProvider.tsx  # Lenis scroll context
│
├── lib/
│   ├── geo.ts                        # Geo tiers, pricing logic
│   ├── currency.ts                   # Intl.NumberFormat currency formatting
│   ├── animations.ts                 # Motion variants library
│   ├── utils.ts                      # cn(), clamp(), etc.
│   ├── fonts.ts                      # Font configuration
│   ├── metadata.ts                   # Shared metadata generators
│   ├── constants.ts                  # Site-wide constants
│   ├── validations.ts                # Zod schemas
│   └── ai.ts                         # AI SDK configuration
│
├── hooks/
│   ├── useGeo.ts                     # Geo detection composable
│   ├── useScrollProgress.ts          # Scroll position 0→1
│   ├── useMediaQuery.ts              # Responsive breakpoints
│   ├── useMousePosition.ts           # Cursor tracking
│   ├── useInView.ts                  # Intersection Observer
│   ├── useReducedMotion.ts           # prefers-reduced-motion
│   └── useSmoothScroll.ts            # Lenis scroll-to anchors
│
├── types/
│   ├── geo.ts                        # Geo & pricing types
│   ├── portfolio.ts                  # Project types
│   └── index.ts                      # Barrel exports
│
├── content/
│   ├── projects.ts                   # Portfolio project data
│   ├── testimonials.ts               # Testimonial data
│   ├── faqs.ts                       # FAQ data
│   └── services.ts                   # Service definitions
│
├── db/
│   ├── schema.ts                     # Drizzle ORM schema
│   ├── client.ts                     # Turso connection
│   └── migrations/                   # SQL migrations
│
├── emails/
│   ├── ContactConfirmation.tsx       # React Email: client confirmation
│   └── NewInquiry.tsx                # React Email: admin notification
│
├── public/
│   ├── logo.svg
│   ├── og-image.png
│   ├── models/                       # 3D .glb/.gltf models
│   ├── textures/                     # 3D textures & HDRIs
│   └── portfolio/                    # Project screenshots (WebP)
│
├── __tests__/
│   ├── e2e/                          # Playwright E2E tests
│   │   ├── landing.spec.ts
│   │   ├── contact.spec.ts
│   │   └── geo.spec.ts
│   ├── unit/                         # Vitest unit tests
│   │   ├── geo.test.ts
│   │   ├── currency.test.ts
│   │   └── pricing.test.ts
│   └── visual/                       # Playwright visual regression
│       └── sections.spec.ts
│
├── drizzle.config.ts                 # Drizzle ORM config
├── tailwind.config.ts                # Tailwind v4 config
├── next.config.ts                    # Next.js 15 config
├── biome.json                        # Biome linter/formatter config
├── playwright.config.ts              # E2E test config
├── vitest.config.ts                  # Unit test config
├── lefthook.yml                      # Git hooks config
├── .env.local                        # Local env vars
├── .env.example                      # Documented env template
└── README.md
```

---

## 3 · Environment & Toolchain Setup

### 1. Create the project (Bun-first)

```bash
# Use Bun for maximum speed
bunx --bun create-next-app@latest pixlnova \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir=false \
  --import-alias="@/*" \
  --turbopack

cd pixlnova
```

### 2. Install the core dependencies

```bash
# ── UI & Design System ──
bun add framer-motion lucide-react clsx tailwind-merge
bun add @radix-ui/react-slot class-variance-authority

# ── shadcn/ui setup ──
bunx shadcn@latest init
bunx shadcn@latest add button card badge dialog accordion \
  tabs tooltip popover command sheet separator avatar \
  dropdown-menu navigation-menu scroll-area

# ── 3D & WebGL ──
bun add three @react-three/fiber @react-three/drei @react-three/postprocessing
bun add -d @types/three

# ── Scroll & Particles ──
bun add lenis tsparticles @tsparticles/react @tsparticles/slim
bun add cobe                    # 3D globe visualization

# ── Animation ──
bun add gsap @gsap/react         # GSAP ScrollTrigger

# ── Forms & Validation ──
bun add react-hook-form zod @hookform/resolvers

# ── Backend & Data ──
bun add resend react-email @react-email/components
bun add @libsql/client drizzle-orm
bun add -d drizzle-kit

# ── AI Layer ──
bun add ai @ai-sdk/openai        # Vercel AI SDK

# ── Caching & Rate Limiting ──
bun add @upstash/redis @upstash/ratelimit

# ── Analytics & Monitoring ──
bun add @vercel/analytics @vercel/speed-insights
bun add posthog-js
bun add @sentry/nextjs

# ── Developer Experience ──
bun add -d @biomejs/biome lefthook
bun add -d vitest @testing-library/react @playwright/test
bun add -d @total-typescript/ts-reset
```

### 3. Environment variables

Create `.env.example` (documented template):

```env
# ══════════════════════════════════════════
# PIXLNOVA — Environment Configuration
# ══════════════════════════════════════════

# ── Geo Detection ──
# Primary: Vercel headers (zero-cost, automatic)
# Fallback: MaxMind GeoLite2
MAXMIND_LICENSE_KEY=your_maxmind_key

# ── Email (Resend) ──
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=hello@pixlnova.com
ADMIN_EMAIL=admin@pixlnova.com

# ── AI (OpenAI) ──
OPENAI_API_KEY=sk-xxxxxxxxxxxx

# ── Database (Turso) ──
TURSO_DATABASE_URL=libsql://your-db.turso.io
TURSO_AUTH_TOKEN=your_turso_token

# ── Cache (Upstash Redis) ──
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_upstash_token

# ── Analytics ──
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
SENTRY_DSN=https://xxxx@sentry.io/xxxx

# ── Site ──
NEXT_PUBLIC_SITE_URL=https://pixlnova.com
NEXT_PUBLIC_SITE_NAME=PixlNova
```

### 4. Biome configuration (replaces ESLint + Prettier)

```jsonc
// biome.json
{
  "$schema": "https://biomejs.dev/schemas/1.9.0/schema.json",
  "organizeImports": { "enabled": true },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "complexity": { "noExcessiveCognitiveComplexity": "warn" },
      "a11y": { "recommended": true }
    }
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100
  }
}
```

### 5. Next.js 15 Configuration

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const config: NextConfig = {
  experimental: {
    ppr: 'incremental',              // Partial Prerendering
    reactCompiler: true,             // React Compiler (auto-memoization)
    optimizePackageImports: [
      'lucide-react',
      '@iconify/react',
      'framer-motion',
      'three',
    ],
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '**.unsplash.com' },
    ],
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    },
  ],
}

export default config
```

---

## 4 · Geo-Detection & Dynamic Pricing Engine

> The **killer feature** — every price on the site instantly adapts to the visitor's location.  
> Powered by edge middleware for **zero-latency** detection.

### Edge Middleware — Geo Resolution (Zero API Calls)

```typescript
// middleware.ts
import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Vercel automatically injects geo headers at the edge
  const country = request.geo?.country || 'US'
  const city = request.geo?.city || 'Unknown'
  const region = request.geo?.region || 'Unknown'

  // Set geo data as cookies for client-side access
  response.cookies.set('geo-country', country, { path: '/', sameSite: 'lax' })
  response.cookies.set('geo-city', city, { path: '/', sameSite: 'lax' })
  response.cookies.set('geo-region', region, { path: '/', sameSite: 'lax' })

  // Set security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
```

### Pricing Tiers — Comprehensive Global Coverage

```typescript
// lib/geo.ts

export type Tier = 'tier1' | 'tier2' | 'tier3' | 'tier4'
export type ServiceType = 'web' | 'mobile' | 'bundle' | 'saas' | 'ai'
export type PlanLevel = 'starter' | 'growth' | 'pro' | 'enterprise'

export const TIER_COUNTRIES: Record<Tier, string[]> = {
  tier1: ['US', 'GB', 'AU', 'CA', 'NZ', 'CH', 'NO', 'DK', 'SE', 'IE', 'LU', 'IS'],
  tier2: ['DE', 'FR', 'NL', 'BE', 'ES', 'IT', 'PT', 'AE', 'SG', 'JP', 'KR', 'HK', 'IL', 'FI', 'AT', 'TW', 'QA'],
  tier3: ['IN', 'PH', 'ID', 'MY', 'TH', 'VN', 'BR', 'MX', 'AR', 'CO', 'CL', 'PK', 'PL', 'CZ', 'RO', 'HU', 'TR', 'SA'],
  tier4: ['NG', 'KE', 'GH', 'EG', 'ZA', 'BD', 'LK', 'NP', 'MM', 'KH', 'ET', 'TZ', 'UG', 'SN'],
}

export const TIER_METADATA: Record<Tier, { label: string; emoji: string; currency: string; symbol: string; locale: string }> = {
  tier1: { label: 'North America, UK & Oceania', emoji: '🌎', currency: 'USD', symbol: '$', locale: 'en-US' },
  tier2: { label: 'Europe & Asia Pacific', emoji: '🌍', currency: 'EUR', symbol: '€', locale: 'en-GB' },
  tier3: { label: 'South Asia & Latin America', emoji: '🌏', currency: 'USD', symbol: '$', locale: 'en-US' },
  tier4: { label: 'Africa & Emerging Markets', emoji: '🌍', currency: 'USD', symbol: '$', locale: 'en-US' },
}

// ── Country → Tier Resolution ──
export function getTierFromCountry(countryCode: string): Tier {
  for (const [tier, countries] of Object.entries(TIER_COUNTRIES)) {
    if (countries.includes(countryCode)) return tier as Tier
  }
  return 'tier4'
}

// ── Intl-based Currency Formatting ──
export function formatPrice(amount: number, currency: string, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatPriceRange(min: number, max: number, currency: string, locale: string): string {
  return `${formatPrice(min, currency, locale)} – ${formatPrice(max, currency, locale)}`
}

// ── Country Flag Emoji ──
export function countryToFlag(countryCode: string): string {
  return countryCode
    .toUpperCase()
    .split('')
    .map(char => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join('')
}
```

### Geo Context Provider (React 19 Server Component Compatible)

```typescript
// components/providers/GeoProvider.tsx
'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { getTierFromCountry, TIER_METADATA, countryToFlag, type Tier } from '@/lib/geo'

interface GeoState {
  country: string
  countryCode: string
  city: string
  tier: Tier
  currency: string
  symbol: string
  locale: string
  flag: string
  loading: boolean
}

const GeoContext = createContext<GeoState | null>(null)

export function GeoProvider({ children }: { children: ReactNode }) {
  const [geo, setGeo] = useState<GeoState>({
    country: 'United States',
    countryCode: 'US',
    city: '',
    tier: 'tier1',
    currency: 'USD',
    symbol: '$',
    locale: 'en-US',
    flag: '🇺🇸',
    loading: true,
  })

  useEffect(() => {
    // Read geo from edge middleware cookies (zero API call!)
    const cookies = Object.fromEntries(
      document.cookie.split('; ').map(c => c.split('=').map(decodeURIComponent))
    )

    const countryCode = cookies['geo-country'] || 'US'
    const tier = getTierFromCountry(countryCode)
    const meta = TIER_METADATA[tier]

    setGeo({
      country: countryCode,
      countryCode,
      city: cookies['geo-city'] || '',
      tier,
      currency: meta.currency,
      symbol: meta.symbol,
      locale: meta.locale,
      flag: countryToFlag(countryCode),
      loading: false,
    })
  }, [])

  return <GeoContext.Provider value={geo}>{children}</GeoContext.Provider>
}

export function useGeo() {
  const ctx = useContext(GeoContext)
  if (!ctx) throw new Error('useGeo must be used within GeoProvider')
  return ctx
}
```

---

## 5 · Pages & App Router Architecture

Single-page landing with smooth scroll — composed entirely from Server & Client Components.

```typescript
// app/page.tsx
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// ── Server Components (zero JS shipped) ──
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroContent from '@/components/sections/Hero/HeroContent'
import Services from '@/components/sections/Services/Services'
import Process from '@/components/sections/Process/Process'
import FAQ from '@/components/sections/FAQ/FAQ'

// ── Client Components (lazy-loaded, code-split) ──
const HeroScene = dynamic(() => import('@/components/sections/Hero/HeroScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-black" />,
})
const Portfolio = dynamic(() => import('@/components/sections/Portfolio/Portfolio'))
const Pricing = dynamic(() => import('@/components/sections/Pricing/Pricing'))
const TechStack = dynamic(() => import('@/components/sections/TechStack/TechStack'))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials/Testimonials'))
const Contact = dynamic(() => import('@/components/sections/Contact/Contact'))
const Stats = dynamic(() => import('@/components/sections/Stats'))
const LogoCloud = dynamic(() => import('@/components/sections/LogoCloud'))
const CTA = dynamic(() => import('@/components/sections/CTA'))
const CommandPalette = dynamic(() => import('@/components/layout/CommandPalette'), { ssr: false })

export default function Home() {
  return (
    <main className="relative bg-[#04040A] text-white overflow-x-hidden antialiased">
      {/* Smooth Scroll Wrapper */}
      <Navbar />
      <CommandPalette />

      {/* ── Above the Fold ── */}
      <section id="hero" className="relative min-h-screen flex items-center">
        <HeroScene />
        <HeroContent />
      </section>

      {/* ── Social Proof Strip ── */}
      <LogoCloud />
      <Stats />

      {/* ── Core Sections ── */}
      <Suspense fallback={<SectionSkeleton />}>
        <section id="services"><Services /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="process"><Process /></section>
        <section id="pricing"><Pricing /></section>
        <section id="tech"><TechStack /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="faq"><FAQ /></section>
      </Suspense>

      {/* ── Conversion ── */}
      <CTA />
      <section id="contact"><Contact /></section>

      <Footer />
    </main>
  )
}

function SectionSkeleton() {
  return <div className="min-h-[50vh] animate-pulse bg-white/[0.02]" />
}
```

---

## 6 · Sections Breakdown — The Experience

> Every section is engineered to **convert** — from the first pixel to the final CTA.

---

### 1. 🚀 Hero Section — The "Holy Sh*t" Moment

**Goal:** Stop the scroll. Make visitors feel like they've landed somewhere premium.

**Visual Composition:**
```
┌──────────────────────────────────────────────────┐
│  ╔═══════════════ THREE.JS SCENE ════════════════╗│
│  ║  Floating 3D geometric shapes                 ║│
│  ║  Morphing blob with iridescent shader          ║│
│  ║  Particle field reacting to mouse cursor       ║│
│  ╚═══════════════════════════════════════════════╝│
│                                                    │
│  [eyebrow]  🌍 Global Digital Studio               │
│                                                    │
│  ██ We Build Digital ██                            │
│  ██ Products That    ██   ← Typewriter cycling:    │
│  ██ {Scale|Convert|  ██     "Scale", "Convert",    │
│  ██  Inspire|Win}    ██     "Inspire", "Win"       │
│                                                    │
│  From MVPs to enterprise platforms —               │
│  Web, iOS, Android & macOS. Delivered fast,        │
│  built to last.                                    │
│                                                    │
│  [ 🚀 Start Your Project ]  [ View Our Work → ]   │
│         ↑ magnetic button      ↑ ghost button      │
│                                                    │
│  ┌─────────────────────┐                           │
│  │ 🇺🇸 Prices for USA  │  ← animated geo badge    │
│  └─────────────────────┘                           │
│                                                    │
│            ↓ scroll indicator (lottie)             │
└──────────────────────────────────────────────────┘
```

**Key Technical Features:**
- **Three.js Background:** Floating, softly-lit 3D geometric shapes (dodecahedron, torus knot, icosahedron) with iridescent MeshPhysicalMaterial
- **Particle System:** 2000+ particles via tsParticles responding to mouse proximity
- **Typewriter Effect:** Rotating headlines with cursor blink animation using Motion
- **Magnetic CTA Button:** Cursor-following hover effect with spring physics (custom `useMagnetic` hook)
- **Geo Badge:** Slide-in pill showing detected country with flag emoji, animated entrance
- **Aurora Background:** Animated gradient blobs (CSS `@keyframes` + backdrop-filter blur)
- **Performance:** 3D scene lazy-loaded, `<canvas>` uses `willReadFrequently: false`, GPU-composited layers

**Animation Sequence (on mount):**
```
0ms    → Aurora bg fades in
200ms  → 3D scene begins rendering
400ms  → Eyebrow slides down with blur-fade
600ms  → Headline characters cascade in (stagger: 30ms)
1000ms → Subheadline fades up
1200ms → CTA buttons spring in from below
1600ms → Geo badge slides in from right
2000ms → Scroll indicator begins bouncing
```

---

### 2. 🏢 Logo Cloud — Trust Strip

**Goal:** Instant credibility — "If they trust us, you can too."

**Design:**
- Infinite horizontal marquee (CSS `@keyframes translateX`, zero JS)
- Grayscale logos → full color on hover
- Two rows scrolling in opposite directions
- "Trusted by teams at" eyebrow text
- Logos: Technology companies, startups, agencies (use placeholder brand-style logos)

---

### 3. 📊 Stats Section — Social Proof Numbers

**Goal:** Hard numbers build trust instantly.

**Counters (animated on scroll into view):**

| Stat | Value | Suffix |
|---|---|---|
| Projects Delivered | 150+ | projects |
| Client Satisfaction | 99% | satisfaction |
| Countries Served | 40+ | countries |
| Avg Delivery Speed | 3x | faster |

**Technical:** `AnimatedCounter` component using `useInView` + `requestAnimationFrame` for smooth number counting with easing.

---

### 4. 🛠 Services Section — What We Build

**Goal:** Crystal-clear service offerings with interactive exploration.

**Services Grid (3×2 on desktop, swipeable on mobile):**

| Icon | Service | Tags | Description |
|---|---|---|---|
| 🌐 | Web Development | Next.js · React · Vue | Landing pages, web apps, SaaS dashboards, PWAs |
| 📱 | Mobile Apps | Flutter · React Native · Swift | iOS, Android, cross-platform with native feel |
| 🖥 | Desktop Apps | Electron · Tauri · Swift | macOS, Windows, Linux native applications |
| 🎨 | UI/UX Design | Figma · Prototyping | Wireframes, design systems, interaction design |
| 🔌 | Backend & APIs | Node · Python · Go | REST/GraphQL APIs, microservices, real-time |
| 🤖 | AI Integration | LLMs · RAG · ML | Chatbots, AI assistants, smart automation |
| 🚀 | MVP Development | Rapid · Lean · Agile | Idea to launched product in 2-4 weeks |
| ☁️ | DevOps & Cloud | AWS · GCP · Vercel | CI/CD, containerization, edge deployment |

**Card Interaction:**
- `SpotlightCard` — mouse-tracking radial gradient follows cursor
- 3D tilt effect via CSS `perspective` + `transform: rotateX/Y` (use `useMousePosition`)
- On hover: gradient border glow, icon scales up with spring physics
- On click: expands into modal with full service details, case studies, and pricing

---

### 5. 💼 Portfolio Section — Proof of Quality

**Goal:** Showcase work so good they need to hire you.

**Layout:**
- **Filter Bar:** Animated pill tabs `All | Web | Mobile | SaaS | AI` with sliding indicator
- **Masonry Grid:** Responsive masonry layout (CSS `columns` or `grid-template-rows: masonry`)
- **Each Card:** Full-bleed screenshot, gradient overlay at bottom, title + tags

**Hover Interaction:**
- Image scales up 1.05x with smooth ease
- Dark overlay appears with project details
- "View Case Study →" link animates in
- Tech stack icons cascade in from bottom

**Sample Projects:**
| Project | Type | Stack | Description |
|---|---|---|---|
| TaskFlow Pro | SaaS Web App | Next.js, Supabase | AI-powered project management |
| FoodieX | Mobile App | Flutter, Firebase | Food delivery with real-time tracking |
| CryptoDesk | Dashboard | React, D3.js | Real-time crypto analytics dashboard |
| MediCare+ | iOS App | Swift, HealthKit | AI health tracking & wellness |
| ShopStream | E-commerce | Next.js, Stripe | Headless commerce platform |
| CodeMentor | AI Platform | Python, LangChain | AI-powered code review tool |

**Lightbox:** Click any project → full-screen lightbox with image gallery, description, live link, GitHub link.

---

### 6. 🔄 Process Section — How We Work

**Goal:** Demystify the process, build confidence.

**Design:** Scroll-linked animated timeline (horizontal on desktop, vertical on mobile).

**Steps with GSAP ScrollTrigger scrub animation:**

```
   ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
   │ 01      │───▶│ 02      │───▶│ 03      │───▶│ 04      │
   │Discovery│    │ Strategy │    │ Design  │    │ Develop │
   │  Call   │    │& Planning│    │& Proto  │    │& Build  │
   └─────────┘    └─────────┘    └─────────┘    └─────────┘
                                                      │
   ┌─────────┐    ┌─────────┐    ┌─────────┐         │
   │ 07      │◀───│ 06      │◀───│ 05      │◀────────┘
   │ Ongoing │    │ Launch  │    │  QA &   │
   │ Support │    │& Deploy │    │ Testing │
   └─────────┘    └─────────┘    └─────────┘
```

**Animation:** As user scrolls, each step "activates" — icon fills with color, connecting line draws itself, description text fades in. Uses GSAP `ScrollTrigger` with `scrub: 1` for butter-smooth scroll-linked animation.

---

### 7. 💰 Pricing Section — Geo-Adaptive Transparency

**Goal:** Show prices visitors can relate to — zero friction.

**Structure:**
```
┌──────────────────────────────────────────────┐
│  💰 Pricing                                  │
│  Transparent pricing, tailored to your region│
│                                              │
│  ┌────────────────────────────────────┐      │
│  │ 🇮🇳 Showing prices for India (INR) │ ← geo│
│  └────────────────────────────────────┘      │
│                                              │
│  [ Web ]  [ Mobile ]  [ Bundle ]  [ SaaS ]   │
│    ↑ active tab with sliding pill indicator   │
│                                              │
│  ┌──────────┐ ┌──────────┐  ┌──────────┐    │
│  │ Starter  │ │ Growth ★ │  │   Pro    │    │
│  │          │ │ POPULAR  │  │          │    │
│  │ $200–600 │ │ $600–1.5K│  │ $1.5K–4K│    │
│  │          │ │          │  │          │    │
│  │ ✓ 5 pgs  │ │ ✓ 15 pgs │  │ ✓ Unlim │    │
│  │ ✓ Resp.  │ │ ✓ CMS    │  │ ✓ Custom│    │
│  │ ✓ SEO   │ │ ✓ Anim.  │  │ ✓ AI    │    │
│  │ ✗ CMS   │ │ ✓ API    │  │ ✓ Scale │    │
│  │          │ │          │  │          │    │
│  │[Get Qte] │ │[Get Qte] │  │[Book Call]│   │
│  └──────────┘ └──────────┘  └──────────┘    │
│                                              │
│  ┌───────────────────────────────────────┐   │
│  │ 🤖 Not sure? Try our AI Estimator →  │   │
│  └───────────────────────────────────────┘   │
└──────────────────────────────────────────────┘
```

**Pricing Cards:**
- Glassmorphism effect (`backdrop-filter: blur(20px)`, `bg-white/5`, `border border-white/10`)
- "Popular" card slightly larger with gradient border and glow
- Prices animate (count up) when they scroll into view
- Hover: card lifts up (`translateY(-8px)`), border illuminates

**AI Project Estimator (NEW):**
- User answers 5 quick questions (project type, features, timeline, complexity, platform)
- AI SDK generates instant custom estimate with breakdown
- Streams the response in real-time with typing effect
- "Book a call to discuss" CTA at the end

**Pricing plans expanded to include `saas` and `ai` service types with `enterprise` tier.**

---

### 8. 🧰 Tech Stack Section — Technical Credibility

**Goal:** Show the engineering depth behind the work.

**Design:** Interactive 3D orbital display or animated icon grid.

**Option A — Orbital Display (Three.js):**
- Central PixlNova logo
- Tech icons orbit around it in concentric elliptical paths
- Click any icon to see details about that technology
- Orbit speed adjustable, pauses on hover

**Option B — Categorized Icon Grid (lighter):**
```
Frontend     │  Next.js  ·  React  ·  Vue  ·  Flutter  ·  Swift  ·  Svelte
Backend      │  Node.js  ·  Python  ·  Go  ·  Rust  ·  Bun
Database     │  PostgreSQL  ·  MongoDB  ·  Redis  ·  Turso  ·  Supabase
Cloud        │  Vercel  ·  AWS  ·  GCP  ·  Cloudflare  ·  Docker
AI/ML        │  OpenAI  ·  LangChain  ·  Hugging Face  ·  TensorFlow
Design       │  Figma  ·  Tailwind  ·  Framer  ·  Three.js
```

**Each icon:** Hover reveals tooltip with proficiency level (Expert/Advanced/Proficient) and years of experience.

---

### 9. ⭐ Testimonials Section — Social Proof

**Goal:** Let happy clients do the selling.

**Design:** Dual-row infinite marquee (opposite directions) — inspired by Linear's testimonial wall.

**Each Card:**
```
┌─────────────────────────────────┐
│  "Absolutely incredible work.   │
│   PixlNova delivered our MVP    │
│   in just 3 weeks. The quality  │
│   was beyond expectations."     │
│                                 │
│  ⭐⭐⭐⭐⭐                      │
│                                 │
│  👤 Sarah Chen                  │
│     CEO, TaskFlow               │
│     🇺🇸 San Francisco           │
└─────────────────────────────────┘
```

**Technical:**
- Pure CSS marquee (`@keyframes scroll` + `animation: scroll 30s linear infinite`)
- Pause on hover (CSS `animation-play-state: paused`)
- Cards have frosted glass effect
- Star ratings with golden gradient fill

---

### 10. ❓ FAQ Section — Objection Handling

**Goal:** Answer every concern before they bounce.

**Questions (expanded):**

1. How long does a typical project take?
2. Do you work with non-technical founders?
3. What's included in the quoted price?
4. Do you offer milestone-based payment plans?
5. Will I own 100% of the source code and IP?
6. Do you provide post-launch support and maintenance?
7. How do revisions and change requests work?
8. Can you work with my existing tech stack?
9. What if I'm not satisfied with the work?
10. Do you sign NDAs and confidentiality agreements?
11. How do you handle timezone differences for global clients?
12. Can you scale the team if my project grows?

**Design:**
- shadcn/ui `Accordion` with custom animations
- Each answer fades in with height animation (no layout shift)
- Search/filter input at top to quickly find questions
- "Still have questions? Chat with us →" CTA at bottom

---

### 11. 📬 Contact Section — The Conversion Point

**Goal:** Convert visitors into paying clients with zero friction.

**Design:**
```
┌──────────────────────────────────────────────────┐
│                                                    │
│  📬 Let's Build Something Amazing                  │
│                                                    │
│  ┌─────────────────────┐  ┌───────────────────┐   │
│  │                     │  │                   │   │
│  │  MULTI-STEP FORM    │  │  CONTACT INFO     │   │
│  │                     │  │                   │   │
│  │  Step 1/3:          │  │  📧 hello@        │   │
│  │  ── Your Details    │  │     pixlnova.com  │   │
│  │                     │  │                   │   │
│  │  Name: [________]   │  │  📅 Book a call   │   │
│  │  Email:[________]   │  │     → Calendly    │   │
│  │  Country: 🇮🇳 India │  │                   │   │
│  │   (auto-detected)   │  │  ⏱ Response time  │   │
│  │                     │  │    < 12 hours     │   │
│  │  [ Next → ]         │  │                   │   │
│  │                     │  │  🌍 3D Globe      │   │
│  │  ●──○──○  progress  │  │    (interactive)  │   │
│  │                     │  │                   │   │
│  └─────────────────────┘  └───────────────────┘   │
│                                                    │
└──────────────────────────────────────────────────┘
```

**Multi-Step Smart Form (3 steps):**
1. **Your Details** — Name, Email, Country (auto-filled), Company
2. **Your Project** — Service type (dropdown), Platform, Budget range (pre-filled from geo), Timeline
3. **Tell Us More** — Project description (textarea), File attachments, How did you hear about us?

**Technical Features:**
- `react-hook-form` + `zod` for validation
- Country & budget pre-filled from geo detection
- Step transitions with Motion's `AnimatePresence`
- Progress bar with animated dots
- Server Action for form submission (no API route needed)
- Resend for dual emails (confirmation to client, notification to admin)
- Rate limiting via Upstash Redis (5 submissions per IP per hour)
- Interactive 3D globe (using `cobe` library) showing PixlNova's global reach

---

### 12. 🎯 Final CTA Section — The Closer

**Goal:** One last push before they leave.

**Design:**
- Full-width gradient section (purple → blue → cyan)
- Large headline: "Ready to Turn Your Idea Into Reality?"
- Subtext: "Join 150+ businesses worldwide who chose PixlNova"
- Two CTAs: "Start Your Project" (primary) + "Schedule a Free Call" (secondary)
- Animated background: subtle particle flow or aurora effect

---

## 7 · Components Architecture — Atomic Design

### MagneticButton — Cursor-Following CTA

```typescript
// components/ui/MagneticButton.tsx
'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  strength?: number
}

export function MagneticButton({ children, className, onClick, strength = 40 }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) / width * strength
    const y = (clientY - (top + height / 2)) / height * strength
    setPosition({ x, y })
  }

  const reset = () => setPosition({ x: 0, y: 0 })

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}
```

### SpotlightCard — Mouse-Tracking Glow

```typescript
// components/ui/SpotlightCard.tsx
'use client'

import { useRef, useState } from 'react'

export function SpotlightCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect()
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] ${className}`}
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
```

### Navbar — Glassmorphism + Command Palette

```typescript
// components/layout/Navbar.tsx — Feature Spec
//
// ── Visual ──
// - Fixed top, z-50
// - Transparent at top → glassmorphism on scroll (backdrop-blur-xl bg-black/50)
// - Logo: "PixlNova" SVG wordmark with gradient
// - Nav links: Services · Portfolio · Pricing · Process · Contact
// - Active link indicator: sliding underline (motion layout animation)
//
// ── Interactions ──
// - Scroll progress bar at very top (1px gradient line)
// - ⌘K shortcut → opens CommandPalette (spotlight search)
// - CTA button: "Start a Project" with gradient + magnetic effect
// - Mobile: Hamburger icon → full-screen overlay menu with staggered animations
//
// ── Technical ──
// - useScrollProgress hook for progress bar
// - Intersection Observer for active section highlighting
// - CSS `@starting-style` for initial mount animation (no JS)
```

---

## 8 · Design System & Styling

### Tailwind CSS v4 Configuration (CSS-First)

```css
/* app/globals.css */

/* ── CSS Layers for Cascade Control ── */
@layer base, tokens, components, utilities;

/* ── Tailwind v4 ── */
@import "tailwindcss";

/* ── Design Tokens ── */
@layer tokens {
  :root {
    /* ── Color System (OKLCH for perceptual uniformity) ── */
    --color-bg-primary:     oklch(0.08 0.01 280);    /* #04040A */
    --color-bg-secondary:   oklch(0.12 0.015 280);   /* #111118 */
    --color-bg-card:        oklch(0.14 0.02 280);    /* #16161F */
    --color-bg-card-hover:  oklch(0.17 0.025 280);   /* #1C1C28 */
    --color-bg-elevated:    oklch(0.20 0.03 280);    /* #242430 */

    /* ── Border System ── */
    --color-border:         oklch(0.30 0.01 280 / 0.4);
    --color-border-hover:   oklch(0.55 0.15 285 / 0.6);
    --color-border-focus:   oklch(0.60 0.20 285);

    /* ── Text System ── */
    --color-text-primary:   oklch(0.98 0.00 0);      /* white */
    --color-text-secondary: oklch(0.70 0.02 265);    /* muted */
    --color-text-muted:     oklch(0.50 0.02 265);    /* dimmed */

    /* ── Brand Colors (Purple Spectrum) ── */
    --color-brand-50:       oklch(0.95 0.03 285);
    --color-brand-100:      oklch(0.90 0.06 285);
    --color-brand-300:      oklch(0.75 0.15 285);
    --color-brand-400:      oklch(0.65 0.20 285);
    --color-brand-500:      oklch(0.55 0.25 285);    /* primary */
    --color-brand-600:      oklch(0.48 0.25 285);
    --color-brand-700:      oklch(0.40 0.22 285);
    --color-brand-900:      oklch(0.15 0.05 285);

    /* ── Accent Colors ── */
    --color-accent-cyan:    oklch(0.75 0.15 195);
    --color-accent-pink:    oklch(0.70 0.20 350);
    --color-accent-green:   oklch(0.72 0.18 155);
    --color-accent-amber:   oklch(0.80 0.15 80);

    /* ── Gradients ── */
    --gradient-brand:       linear-gradient(135deg, var(--color-brand-500), var(--color-accent-cyan));
    --gradient-hero:        radial-gradient(ellipse 80% 50% at 50% -20%, oklch(0.40 0.20 285 / 0.4), transparent);
    --gradient-card-hover:  radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), oklch(0.55 0.25 285 / 0.1), transparent 40%);

    /* ── Spacing Scale ── */
    --space-section:        clamp(4rem, 8vw, 8rem);
    --space-content:        clamp(2rem, 4vw, 4rem);

    /* ── Typography Scale (Fluid) ── */
    --font-size-display:    clamp(3rem, 6vw + 1rem, 5.5rem);
    --font-size-h1:         clamp(2.25rem, 4vw + 0.5rem, 4rem);
    --font-size-h2:         clamp(1.75rem, 3vw + 0.25rem, 2.75rem);
    --font-size-h3:         clamp(1.25rem, 2vw + 0.25rem, 1.75rem);
    --font-size-body:       clamp(0.95rem, 1vw + 0.25rem, 1.125rem);
    --font-size-small:      clamp(0.8rem, 0.8vw + 0.2rem, 0.9rem);

    /* ── Border Radius ── */
    --radius-sm:            0.5rem;
    --radius-md:            0.75rem;
    --radius-lg:            1rem;
    --radius-xl:            1.5rem;
    --radius-full:          9999px;

    /* ── Shadows ── */
    --shadow-glow:          0 0 60px -15px oklch(0.55 0.25 285 / 0.4);
    --shadow-card:          0 4px 24px -4px oklch(0 0 0 / 0.3);
    --shadow-elevated:      0 8px 32px -4px oklch(0 0 0 / 0.5);

    /* ── Animation Timing ── */
    --ease-out-expo:        cubic-bezier(0.16, 1, 0.3, 1);
    --ease-out-back:        cubic-bezier(0.34, 1.56, 0.64, 1);
    --ease-spring:          cubic-bezier(0.22, 1, 0.36, 1);

    /* ── Z-Index Scale ── */
    --z-base:               1;
    --z-dropdown:           10;
    --z-sticky:             20;
    --z-overlay:            30;
    --z-modal:              40;
    --z-toast:              50;
    --z-tooltip:            60;
  }
}

/* ── Base Styles ── */
@layer base {
  * {
    @apply border-[var(--color-border)];
  }

  html {
    @apply scroll-smooth;
    scrollbar-gutter: stable;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body {
    @apply bg-[var(--color-bg-primary)] text-[var(--color-text-primary)];
    font-feature-settings: "rlig" 1, "calt" 1;
  }

  /* ── Selection Color ── */
  ::selection {
    background: oklch(0.55 0.25 285 / 0.4);
    color: white;
  }

  /* ── Focus Ring ── */
  :focus-visible {
    outline: 2px solid var(--color-brand-500);
    outline-offset: 2px;
  }

  /* ── Scrollbar ── */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--color-bg-primary); }
  ::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: var(--radius-full);
  }
  ::-webkit-scrollbar-thumb:hover { background: var(--color-brand-500); }
}

/* ── Glassmorphism Utility ── */
@layer components {
  .glass {
    background: oklch(0.14 0.02 280 / 0.6);
    backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid oklch(1 0 0 / 0.08);
  }

  .glass-strong {
    background: oklch(0.10 0.015 280 / 0.8);
    backdrop-filter: blur(40px) saturate(200%);
    border: 1px solid oklch(1 0 0 / 0.12);
  }

  .gradient-text {
    background: var(--gradient-brand);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glow {
    box-shadow: var(--shadow-glow);
  }

  /* ── Container Queries ── */
  .card-container {
    container-type: inline-size;
  }

  @container (max-width: 300px) {
    .card-responsive-text {
      font-size: var(--font-size-small);
    }
  }
}
```

---

## 9 · Animation Engine — Motion & 3D

### Motion Variants Library

```typescript
// lib/animations.ts
import type { Variants } from 'framer-motion'

// ── Entrance Animations ──
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30, filter: 'blur(8px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)' },
  visible: {
    opacity: 1, filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85, filter: 'blur(8px)' },
  visible: {
    opacity: 1, scale: 1, filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }, // back ease
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

// ── Stagger Containers ──
export const stagger = (staggerDelay = 0.08): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: staggerDelay, delayChildren: 0.1 } },
})

// ── Character-by-Character Text Reveal ──
export const characterReveal: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
}

export const character: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: -90 },
  visible: {
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

// ── Scroll-Linked Parallax ──
export const parallax = (offset: number = 100) => ({
  y: [-offset, offset],
  transition: { ease: 'linear' },
})
```

### Usage Pattern — Scroll-Triggered Sections

```tsx
// Every section uses this wrapper pattern:
'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'

export default function SomeSection() {
  return (
    <motion.section
      variants={stagger()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="py-[var(--space-section)]"
    >
      <motion.h2 variants={fadeUp} className="text-[var(--font-size-h2)] font-bold">
        Section Title
      </motion.h2>
      <motion.div variants={fadeUp} className="mt-8 grid grid-cols-3 gap-6">
        {/* cards */}
      </motion.div>
    </motion.section>
  )
}
```

### Three.js Hero Scene

```typescript
// components/sections/Hero/HeroScene.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment, Stars } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function HeroScene() {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    // Fallback: static gradient for users who prefer reduced motion
    return <div className="absolute inset-0 bg-gradient-to-b from-brand-900 via-black to-black" />
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}          // Cap pixel ratio for performance
        performance={{ min: 0.5 }} // Auto-throttle on slow devices
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#a78bfa" />

        {/* Floating iridescent blob */}
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
          <mesh scale={2}>
            <icosahedronGeometry args={[1, 8]} />
            <MeshDistortMaterial
              color="#7c3aed"
              roughness={0.1}
              metalness={0.8}
              distort={0.3}
              speed={2}
              envMapIntensity={1.5}
            />
          </mesh>
        </Float>

        {/* Background stars */}
        <Stars radius={50} depth={50} count={2000} factor={4} fade speed={1} />

        {/* Environment for reflections */}
        <Environment preset="night" />

        {/* Post-processing for premium feel */}
        <EffectComposer>
          <Bloom luminanceThreshold={0.6} luminanceSmoothing={0.9} intensity={0.4} />
          <ChromaticAberration offset={[0.001, 0.001]} radialModulation />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
```

### Lenis Smooth Scroll Setup

```typescript
// components/providers/SmoothScrollProvider.tsx
'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}
```

### GSAP ScrollTrigger — Process Timeline

```typescript
// Usage in Process section for scroll-linked animations
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const steps = gsap.utils.toArray<HTMLElement>('.process-step')
    const line = document.querySelector('.process-line') as HTMLElement

    // Animate the connecting line drawing itself
    gsap.fromTo(line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 1,
        },
      }
    )

    // Each step activates as you scroll
    steps.forEach((step, i) => {
      gsap.fromTo(step,
        { opacity: 0.3, x: i % 2 === 0 ? -30 : 30 },
        {
          opacity: 1, x: 0,
          scrollTrigger: {
            trigger: step,
            start: 'top 70%',
            end: 'top 40%',
            scrub: 0.5,
          },
        }
      )
    })
  }, { scope: containerRef })

  return <div ref={containerRef}>{/* timeline content */}</div>
}
```

### CSS Micro-Animations (Zero JS)

```css
/* globals.css — Zero-JS animations using modern CSS */

/* ── Hover Glow on Cards (CSS-only) ── */
.card-hover {
  transition: transform 0.3s var(--ease-out-expo),
              box-shadow 0.3s var(--ease-out-expo),
              border-color 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
  border-color: var(--color-border-hover);
}

/* ── @starting-style for Mount Animations (CSS-only) ── */
.navbar {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.5s ease, transform 0.5s var(--ease-out-expo);

  @starting-style {
    opacity: 0;
    transform: translateY(-20px);
  }
}

/* ── Infinite Marquee (CSS-only) ── */
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.marquee-track {
  display: flex;
  animation: marquee 40s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

/* ── Aurora Background ── */
@keyframes aurora {
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
  25% { transform: translate(5%, -5%) rotate(1deg) scale(1.02); }
  50% { transform: translate(-3%, 3%) rotate(-0.5deg) scale(0.98); }
  75% { transform: translate(2%, -2%) rotate(0.5deg) scale(1.01); }
}

.aurora-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: aurora 15s ease-in-out infinite;
  will-change: transform;
}
```

---

## 10 · AI-Powered Features

### AI Chatbot — Visitor Assistant

```typescript
// app/api/chat/route.ts
import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

export const runtime = 'edge'

const SYSTEM_PROMPT = `You are PixlNova's AI assistant on their landing page.
You help potential clients understand services, pricing, and process.
Be concise, friendly, and professional. Always guide toward booking a call.
Key facts:
- Services: Web, Mobile, Desktop, AI, MVP development
- Pricing is geo-based (4 tiers worldwide)
- Typical timelines: MVPs in 2-4 weeks, full products in 6-12 weeks
- Tech stack: Next.js, Flutter, React, Node.js, Python, AI/ML
- Post-launch support included`

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: SYSTEM_PROMPT,
    messages,
    maxTokens: 500,
  })

  return result.toDataStreamResponse()
}
```

### AI Project Estimator

```typescript
// app/api/estimate/route.ts
import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'
import { z } from 'zod'

export const runtime = 'edge'

const EstimateSchema = z.object({
  projectType: z.enum(['web', 'mobile', 'saas', 'ai', 'bundle']),
  features: z.array(z.string()),
  timeline: z.enum(['asap', '1-2months', '3-6months', 'flexible']),
  complexity: z.enum(['simple', 'moderate', 'complex', 'enterprise']),
  platforms: z.array(z.enum(['web', 'ios', 'android', 'macos', 'windows'])),
  countryCode: z.string(),
})

export async function POST(req: Request) {
  const body = await req.json()
  const data = EstimateSchema.parse(body)

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: `You are a project estimation AI for PixlNova.
Given the project details, provide a detailed estimate including:
1. Estimated timeline (in weeks)
2. Recommended tech stack
3. Key milestones
4. Price range based on their country tier
5. Team composition recommendation
Format your response with clear sections and bullet points.`,
    prompt: `Estimate this project:
Type: ${data.projectType}
Features: ${data.features.join(', ')}
Timeline preference: ${data.timeline}
Complexity: ${data.complexity}
Platforms: ${data.platforms.join(', ')}
Client country: ${data.countryCode}`,
    maxTokens: 800,
  })

  return result.toDataStreamResponse()
}
```

### Dynamic OG Image Generation

```typescript
// app/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'PixlNova — Global App & Web Development Studio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  const geistBold = await fetch(
    new URL('./fonts/GeistBold.otf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg, #04040A 0%, #1a0533 50%, #04040A 100%)',
        fontFamily: 'Geist',
      }}>
        {/* Decorative gradient orbs */}
        <div style={{
          position: 'absolute', width: 400, height: 400,
          borderRadius: '50%', background: 'rgba(124,58,237,0.3)',
          filter: 'blur(100px)', top: -100, right: -50,
        }} />
        <div style={{
          position: 'absolute', width: 300, height: 300,
          borderRadius: '50%', background: 'rgba(6,182,212,0.2)',
          filter: 'blur(80px)', bottom: -50, left: -30,
        }} />

        {/* Logo */}
        <div style={{ fontSize: 28, color: '#a78bfa', letterSpacing: 4, marginBottom: 16 }}>
          PIXLNOVA
        </div>

        {/* Headline */}
        <div style={{
          fontSize: 56, fontWeight: 'bold', color: 'white',
          textAlign: 'center', lineHeight: 1.2, maxWidth: 800,
          background: 'linear-gradient(135deg, #fff 0%, #a78bfa 100%)',
          backgroundClip: 'text', color: 'transparent',
        }}>
          We Build Digital Products That Scale
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: 22, color: '#a1a1aa', marginTop: 20, textAlign: 'center' }}>
          Web · Mobile · Desktop · AI — Delivered Fast, Built to Last
        </div>

        {/* URL */}
        <div style={{ fontSize: 16, color: '#52525b', marginTop: 40 }}>
          pixlnova.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Geist', data: geistBold, style: 'normal', weight: 700 }],
    },
  )
}
```

---

## 11 · Performance & Core Web Vitals

### Performance Budget

| Metric | Target | Strategy |
|---|---|---|
| **LCP** (Largest Contentful Paint) | < 1.5s | Hero text is Server Component (zero JS), fonts preloaded |
| **FID/INP** (Interaction to Next Paint) | < 100ms | React Compiler auto-memoization, minimal client JS |
| **CLS** (Cumulative Layout Shift) | < 0.05 | `next/font` for zero-CLS fonts, image dimensions set |
| **TTFB** (Time to First Byte) | < 200ms | Edge deployment, PPR, streaming SSR |
| **Bundle Size** (First Load JS) | < 80KB | Code splitting, dynamic imports, tree shaking |
| **Lighthouse Score** | 95+ all categories | Automated CI testing |

### Key Performance Strategies

**1. Partial Prerendering (PPR) — Next.js 15**
```typescript
// Static shell + streaming dynamic parts
// The page shell renders instantly (static), while dynamic
// parts like geo-based pricing stream in via Suspense boundaries

export default function PricingSection() {
  return (
    <section>
      {/* Static — rendered at build time */}
      <h2>Pricing</h2>
      <p>Transparent pricing tailored to your region</p>

      {/* Dynamic — streams in via PPR */}
      <Suspense fallback={<PricingSkeleton />}>
        <GeoPricingCards />  {/* Server Component that reads geo headers */}
      </Suspense>
    </section>
  )
}
```

**2. Image Optimization Pipeline**
```typescript
// next.config.ts — AVIF first, WebP fallback
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256],
  minimumCacheTTL: 31536000, // 1 year
}
```

**3. Font Loading — Zero CLS**
```typescript
// lib/fonts.ts
import { Geist, Geist_Mono } from 'next/font/google'

export const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
  preload: true,
})

export const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  preload: true,
})
```

**4. Dynamic Import Strategy**
```
Component              | Strategy        | Reason
─────────────────────  ──────────────    ──────────────────────
HeroScene (Three.js)   | ssr: false      | WebGL = client only
Portfolio              | dynamic()       | Below fold
Pricing                | dynamic()       | Below fold
Testimonials           | dynamic()       | Below fold
CommandPalette         | ssr: false      | Interactive only
ContactForm            | dynamic()       | Below fold, heavy (zod)
AI Chat Widget         | ssr: false      | Client interaction
```

**5. Resource Hints**
```html
<!-- app/layout.tsx — head -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link rel="dns-prefetch" href="https://us.i.posthog.com" />
<link rel="preload" as="image" href="/logo.svg" />
```

**6. React Compiler (Auto-Memoization)**
- Enabled via `experimental.reactCompiler: true` in `next.config.ts`
- Eliminates need for manual `useMemo`, `useCallback`, `React.memo`
- Compiler automatically detects and optimizes re-renders
- Reduces human error in performance optimization

---

## 12 · SEO, Metadata & Structured Data

### Dynamic Metadata

```typescript
// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { geistSans, geistMono } from '@/lib/fonts'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#04040A' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://pixlnova.com'),
  title: {
    default: 'PixlNova — Global App & Web Development Studio',
    template: '%s | PixlNova',
  },
  description: 'We build world-class web, iOS, Android, and desktop applications for startups and businesses worldwide. AI-powered, blazing fast, built to scale.',
  keywords: [
    'app development', 'web development', 'mobile app developer',
    'startup MVP', 'Next.js developer', 'Flutter developer',
    'AI integration', 'SaaS development', 'full-stack developer',
    'React developer', 'cross-platform app', 'UI/UX design',
  ],
  authors: [{ name: 'PixlNova', url: 'https://pixlnova.com' }],
  creator: 'PixlNova',
  publisher: 'PixlNova',
  category: 'technology',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pixlnova.com',
    siteName: 'PixlNova',
    title: 'PixlNova — Global App & Web Development Studio',
    description: 'We build world-class digital products for startups and businesses. Web, Mobile, Desktop, AI.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'PixlNova' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pixlnova',
    creator: '@pixlnova',
    title: 'PixlNova — Global App & Web Development Studio',
    description: 'We build world-class digital products for startups and businesses.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pixlnova.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}
```

### JSON-LD Structured Data

```typescript
// app/layout.tsx — inside <body>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'PixlNova',
      url: 'https://pixlnova.com',
      logo: 'https://pixlnova.com/logo.svg',
      description: 'Global app & web development studio specializing in Next.js, Flutter, and AI integration.',
      address: { '@type': 'PostalAddress', addressCountry: 'Global' },
      sameAs: [
        'https://twitter.com/pixlnova',
        'https://github.com/pixlnova',
        'https://linkedin.com/company/pixlnova',
      ],
      priceRange: '$$',
      serviceType: ['Web Development', 'Mobile App Development', 'AI Integration', 'UI/UX Design'],
      areaServed: { '@type': 'GeoShape', name: 'Worldwide' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '87',
        bestRating: '5',
      },
    }),
  }}
/>
```

### Dynamic Sitemap & Robots

```typescript
// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pixlnova.com'
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/case-studies`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}

// app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://pixlnova.com/sitemap.xml',
  }
}
```

---

## 13 · Analytics, Tracking & Conversion

### Analytics Stack

```typescript
// components/providers/AnalyticsProvider.tsx
'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: 'identified_only',
        capture_pageview: false, // Manual pageview tracking
        capture_pageleave: true,
        autocapture: true,
      })
    }
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
```

### Custom Event Tracking

```typescript
// lib/analytics.ts
import posthog from 'posthog-js'

export const analytics = {
  // ── Page Events ──
  pageView: (path: string) => posthog.capture('$pageview', { $current_url: path }),

  // ── CTA Events ──
  ctaClicked: (location: string, label: string) =>
    posthog.capture('cta_clicked', { location, label }),

  // ── Form Events ──
  formStarted: (formName: string) =>
    posthog.capture('form_started', { form: formName }),
  formStepCompleted: (formName: string, step: number) =>
    posthog.capture('form_step_completed', { form: formName, step }),
  formSubmitted: (formName: string, service: string) =>
    posthog.capture('form_submitted', { form: formName, service }),

  // ── Engagement Events ──
  sectionViewed: (section: string) =>
    posthog.capture('section_viewed', { section }),
  portfolioProjectClicked: (project: string) =>
    posthog.capture('portfolio_project_clicked', { project }),
  pricingTabSwitched: (tab: string) =>
    posthog.capture('pricing_tab_switched', { tab }),
  faqExpanded: (question: string) =>
    posthog.capture('faq_expanded', { question }),

  // ── AI Events ──
  aiChatOpened: () => posthog.capture('ai_chat_opened'),
  aiEstimatorUsed: (projectType: string) =>
    posthog.capture('ai_estimator_used', { projectType }),

  // ── Geo Events ──
  geoDetected: (country: string, tier: string) =>
    posthog.capture('geo_detected', { country, tier }),
}
```

### Scroll Depth Tracking

```typescript
// hooks/useScrollDepth.ts
'use client'

import { useEffect, useRef } from 'react'
import { analytics } from '@/lib/analytics'

export function useScrollDepth() {
  const milestones = useRef(new Set<number>())

  useEffect(() => {
    const handler = () => {
      const depth = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      )

      for (const milestone of [25, 50, 75, 90, 100]) {
        if (depth >= milestone && !milestones.current.has(milestone)) {
          milestones.current.add(milestone)
          analytics.sectionViewed(`scroll_depth_${milestone}`)
        }
      }
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
}
```

### Conversion Funnel Goals

```
Visitor Journey — Tracked Events:

Landing → section_viewed(hero)
  ↓
Scrolling → section_viewed(services), scroll_depth_25
  ↓
Interest → portfolio_project_clicked, pricing_tab_switched
  ↓
Consideration → faq_expanded, ai_estimator_used, scroll_depth_75
  ↓
Intent → cta_clicked("Start Project"), form_started("contact")
  ↓
Conversion → form_submitted("contact", "web")
  ↓
Booking → calendly_booking_completed
```

---

## 14 · Accessibility (a11y) & Internationalization (i18n)

### Accessibility Checklist

| Requirement | Implementation |
|---|---|
| **WCAG 2.2 AA** | Full compliance target |
| **Keyboard Navigation** | All interactive elements focusable, visible focus rings |
| **Screen Readers** | Semantic HTML, ARIA labels, `sr-only` text |
| **Reduced Motion** | `prefers-reduced-motion` query disables animations |
| **Color Contrast** | All text meets 4.5:1 ratio (verified with OKLCH) |
| **Focus Management** | Focus trapped in modals, restored on close |
| **Skip Links** | "Skip to main content" link at top of page |
| **Image Alt Text** | Descriptive alt text on all images |
| **Form Labels** | Every input has associated `<label>` |
| **Error Messages** | Live regions (`role="alert"`) for form errors |

### Reduced Motion Hook

```typescript
// hooks/useReducedMotion.ts
import { useEffect, useState } from 'react'

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mql.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}
```

### Skip Link Component

```tsx
// components/ui/SkipLink.tsx
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]
                 focus:px-4 focus:py-2 focus:bg-brand-500 focus:text-white focus:rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-white"
    >
      Skip to main content
    </a>
  )
}
```

### Internationalization Strategy

```
Phase 1 (Launch):   English only, geo-based currency formatting
Phase 2 (Post-Launch): next-intl for multi-language support
  └── Supported: English, Spanish, French, German, Hindi, Portuguese, Japanese
  └── Routing: /en, /es, /fr, /de, /hi, /pt, /ja
  └── Content: Static strings via message files (JSON)
  └── Currency: Already geo-based from Day 1
```

---

## 15 · Security & Compliance

### Security Headers (Edge Middleware)

```typescript
// Already defined in middleware.ts — summary:
{
  'X-Frame-Options': 'DENY',                    // Prevent clickjacking
  'X-Content-Type-Options': 'nosniff',          // Prevent MIME sniffing
  'X-XSS-Protection': '1; mode=block',          // XSS protection
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' ...",
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
}
```

### Rate Limiting (API Routes)

```typescript
// lib/ratelimit.ts
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'), // 5 requests per hour
  analytics: true,
  prefix: 'pixlnova:ratelimit',
})

// Usage in API route:
export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') ?? 'anonymous'
  const { success, limit, remaining } = await ratelimit.limit(ip)

  if (!success) {
    return new Response('Too many requests', {
      status: 429,
      headers: {
        'X-RateLimit-Limit': limit.toString(),
        'X-RateLimit-Remaining': remaining.toString(),
      },
    })
  }
  // ... handle request
}
```

### Compliance Checklist

| Regulation | Implementation |
|---|---|
| **GDPR** (EU) | Cookie consent banner, privacy policy page, data deletion form |
| **CCPA** (California) | "Do Not Sell" link in footer, privacy policy addendum |
| **Cookie Policy** | Only essential cookies by default, analytics opt-in |
| **Data Storage** | Minimal PII collection, encrypted at rest (Turso), TTL on contact submissions |
| **Terms of Service** | `/terms` page with clear service agreement |
| **Privacy Policy** | `/privacy` page — auto-generated with AI, reviewed manually |

---

## 16 · CI/CD, Testing & DevOps

### GitHub Actions CI Pipeline

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  quality:
    name: Code Quality
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install --frozen-lockfile
      - run: bunx biome check .        # Lint + format check
      - run: bun run typecheck          # tsc --noEmit

  test:
    name: Unit Tests
    runs-on: ubuntu-latest
    needs: quality
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install --frozen-lockfile
      - run: bun run test              # Vitest
      - run: bun run test:coverage     # Coverage report

  e2e:
    name: E2E Tests
    runs-on: ubuntu-latest
    needs: quality
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install --frozen-lockfile
      - run: bunx playwright install --with-deps chromium
      - run: bun run build
      - run: bun run test:e2e          # Playwright

  lighthouse:
    name: Lighthouse Audit
    runs-on: ubuntu-latest
    needs: [test, e2e]
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install --frozen-lockfile
      - run: bun run build
      - uses: treosh/lighthouse-ci-action@v11
        with:
          configPath: './lighthouserc.json'
          budgetPath: './budget.json'
```

### Testing Strategy

```
Test Type       | Tool          | Coverage Target | What's Tested
──────────────  ─────────────  ────────────────  ──────────────────────────
Unit Tests      | Vitest        | 80%+            | Geo logic, pricing, currency, utils
Component Tests | Testing Lib   | Key components  | GeoPrice, Contact form, FAQ
E2E Tests       | Playwright    | Critical paths  | Full page load, form submit, geo
Visual Tests    | Playwright    | All sections    | Screenshot comparison, no regression
A11y Tests      | axe-core      | All pages       | WCAG 2.2 AA compliance
Performance     | Lighthouse CI | Every PR        | LCP < 1.5s, CLS < 0.05
```

### package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "typecheck": "tsc --noEmit",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "format": "biome format --write .",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "db:push": "drizzle-kit push",
    "db:studio": "drizzle-kit studio",
    "db:migrate": "drizzle-kit migrate",
    "email:dev": "email dev --port 3001"
  }
}
```

---

## 17 · Edge Deployment & Infrastructure

### Vercel Deployment (Primary)

```bash
# Deploy to Vercel
bunx vercel

# Production deploy
bunx vercel --prod

# Set environment variables
bunx vercel env add RESEND_API_KEY
bunx vercel env add OPENAI_API_KEY
bunx vercel env add TURSO_DATABASE_URL
bunx vercel env add TURSO_AUTH_TOKEN
bunx vercel env add UPSTASH_REDIS_REST_URL
bunx vercel env add UPSTASH_REDIS_REST_TOKEN
bunx vercel env add NEXT_PUBLIC_POSTHOG_KEY
bunx vercel env add SENTRY_DSN
```

### Vercel Project Settings

```
Framework Preset:     Next.js
Node.js Version:      22.x
Build Command:        bun run build
Install Command:      bun install
Output Directory:     .next
Root Directory:       ./

Enabled Features:
  ✅ Vercel Analytics
  ✅ Speed Insights
  ✅ Skew Protection
  ✅ Edge Middleware
  ✅ Partial Prerendering (PPR)
  ✅ Image Optimization
  ✅ Web Application Firewall (WAF)
```

### Domain & DNS Setup

```
Domain: pixlnova.com

DNS Records (Cloudflare):
  A     @     76.76.21.21
  CNAME www   cname.vercel-dns.com
  TXT   @     v=spf1 include:_spf.google.com ~all     (email)
  TXT   _dmarc  v=DMARC1; p=reject; rua=mailto:...    (email auth)

HTTPS: Automatic via Vercel (Let's Encrypt)
CDN: Vercel Edge Network (global, 30+ PoPs)
WAF: Vercel Firewall (rate limiting, bot protection)
```

### Infrastructure Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     VERCEL EDGE NETWORK                 │
│              (30+ global Points of Presence)            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │   Edge      │  │  Serverless  │  │   Static      │  │
│  │  Middleware │→│   Functions  │  │   Assets      │  │
│  │  (geo, auth)│  │  (API routes)│  │  (SSG pages)  │  │
│  └──────┬──────┘  └──────┬───────┘  └───────────────┘  │
│         │                │                              │
├─────────┼────────────────┼──────────────────────────────┤
│         │                │                              │
│  ┌──────▼──────┐  ┌──────▼───────┐  ┌───────────────┐  │
│  │  Upstash    │  │    Turso     │  │   Resend      │  │
│  │   Redis     │  │   (libSQL)   │  │  (Email API)  │  │
│  │  (cache,    │  │  (database,  │  │  (transact.)  │  │
│  │   rate lim) │  │   global)    │  │               │  │
│  └─────────────┘  └──────────────┘  └───────────────┘  │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   PostHog    │  │   Sentry     │  │  OpenAI      │  │
│  │  (analytics) │  │   (errors)   │  │  (AI API)    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 18 · Launch Checklist — Ship It 🚀

### Pre-Launch — Brand & Assets

- [ ] Logo SVG created and optimized (`/public/logo.svg`)
- [ ] Favicon set (`/app/icon.ico`, `/app/apple-icon.png`)
- [ ] Dynamic OG image working (`/app/opengraph-image.tsx`)
- [ ] Social media profiles created (Twitter/X, LinkedIn, GitHub)
- [ ] Brand colors finalized in design tokens

### Pre-Launch — Content

- [ ] All section copy written and proofread
- [ ] Portfolio placeholder projects with screenshots (WebP/AVIF)
- [ ] Testimonial cards populated (minimum 6)
- [ ] FAQ answers written (minimum 12 questions)
- [ ] Privacy Policy page complete (`/privacy`)
- [ ] Terms of Service page complete (`/terms`)

### Pre-Launch — Functionality

- [ ] Geo detection tested with VPN in 5+ countries
- [ ] All 4 pricing tiers verified (currency, amounts, formatting)
- [ ] Contact form submission → emails received (both admin & client)
- [ ] AI chatbot functional and rate-limited
- [ ] AI project estimator giving reasonable outputs
- [ ] Calendly/booking integration working
- [ ] ⌘K command palette navigating correctly
- [ ] Mobile menu opens/closes smoothly
- [ ] Newsletter signup functional (if applicable)

### Pre-Launch — Quality

- [ ] Lighthouse score ≥ 95 on all 4 categories
- [ ] Core Web Vitals passing (LCP < 1.5s, INP < 100ms, CLS < 0.05)
- [ ] Cross-browser tested: Chrome, Firefox, Safari, Edge
- [ ] Responsive tested: iPhone SE, iPhone 15, iPad, MacBook, 4K
- [ ] `prefers-reduced-motion` fallback working (no 3D, no animations)
- [ ] `prefers-color-scheme` respected (if implementing light mode)
- [ ] All images have alt text
- [ ] Keyboard navigation works for entire page (Tab through all elements)
- [ ] Screen reader tested (VoiceOver on macOS)
- [ ] No console errors or warnings

### Pre-Launch — DevOps

- [ ] `.env.local` variables documented in `.env.example`
- [ ] All env vars set in Vercel dashboard
- [ ] CI pipeline passing (lint, typecheck, unit tests, E2E, Lighthouse)
- [ ] Sentry configured with source maps
- [ ] PostHog analytics events firing correctly
- [ ] Rate limiting working on API routes

### Launch Day

- [ ] DNS propagated and HTTPS active
- [ ] Vercel production deployment successful
- [ ] sitemap.xml accessible
- [ ] robots.txt accessible
- [ ] Google Search Console submitted
- [ ] OG image previews tested (Twitter Card Validator, LinkedIn Inspector)
- [ ] Uptime monitoring active (BetterStack)
- [ ] Announce on social media 🎉

### Post-Launch (Week 1)

- [ ] Monitor Sentry for errors
- [ ] Review PostHog dashboards for user behavior
- [ ] Check Vercel Analytics for performance regressions
- [ ] A/B test CTA button copy (PostHog feature flags)
- [ ] Gather feedback from first visitors
- [ ] Optimize based on real Core Web Vitals data

---

## 19 · Estimated Build Timeline

### Phase-by-Phase Breakdown

| Phase | Tasks | Estimated Time |
|---|---|---|
| **Phase 0: Setup** | Project init, Bun, deps, Biome, env vars, Tailwind v4, Next.js 15 config | 2 hours |
| **Phase 1: Foundation** | Root layout, fonts, providers (Geo, Analytics, Scroll), Navbar, Footer | 4 hours |
| **Phase 2: Hero** | Three.js scene, particle field, typewriter, magnetic CTAs, geo badge, aurora bg | 8 hours |
| **Phase 3: Social Proof** | Logo cloud marquee, animated stats counters | 2 hours |
| **Phase 4: Services** | SpotlightCard, 3D tilt, service grid, modal detail view | 4 hours |
| **Phase 5: Portfolio** | Filter tabs, masonry grid, hover interactions, lightbox | 5 hours |
| **Phase 6: Process** | GSAP ScrollTrigger timeline, step animations, responsive layout | 4 hours |
| **Phase 7: Pricing** | Geo-adaptive cards, glassmorphism, tab switcher, animated prices | 6 hours |
| **Phase 8: AI Features** | AI chatbot widget, project estimator, streaming UI | 5 hours |
| **Phase 9: Remaining Sections** | Tech Stack (orbit/grid), Testimonials (marquee), FAQ (accordion), Contact (multi-step form, 3D globe), Final CTA | 8 hours |
| **Phase 10: Polish** | Animations tuning, responsive fixes, a11y audit, reduced motion fallbacks | 4 hours |
| **Phase 11: Performance** | Bundle optimization, Lighthouse audit, image optimization, PPR tuning | 3 hours |
| **Phase 12: SEO & Compliance** | Metadata, JSON-LD, sitemap, robots, privacy/terms pages | 2 hours |
| **Phase 13: Testing** | Unit tests (Vitest), E2E tests (Playwright), visual regression, a11y testing | 4 hours |
| **Phase 14: CI/CD & Deploy** | GitHub Actions, Vercel deployment, DNS, monitoring setup | 2 hours |
| | | |
| **Total** | | **~63 hours** |

### Suggested Sprint Plan

```
Week 1 (Mon–Fri):
  └── Phase 0–3: Setup, Foundation, Hero, Social Proof
  └── Deliverable: Hero section fully working with 3D scene

Week 2 (Mon–Fri):
  └── Phase 4–7: Services, Portfolio, Process, Pricing
  └── Deliverable: All content sections with geo-pricing live

Week 3 (Mon–Wed):
  └── Phase 8–9: AI Features, Remaining Sections
  └── Deliverable: Full page with all sections

Week 3 (Thu–Fri):
  └── Phase 10–12: Polish, Performance, SEO
  └── Deliverable: Production-ready quality

Week 4 (Mon–Tue):
  └── Phase 13–14: Testing, CI/CD, Deploy
  └── Deliverable: 🚀 LIVE on pixlnova.com
```

---

## Architecture Decision Records (ADRs)

### ADR-001: Next.js 15 over Astro/Remix
**Decision:** Next.js 15 with App Router  
**Rationale:** PPR for hybrid static/dynamic rendering, React Server Components for zero-JS sections, largest ecosystem for React, Vercel edge deployment. Landing page benefits from static shell + streaming dynamic pricing.

### ADR-002: Bun over Node/pnpm
**Decision:** Bun as primary runtime and package manager  
**Rationale:** 3x faster installs, native TypeScript execution, built-in test runner, single tool for multiple purposes. Fallback to Node 22 in production (Vercel).

### ADR-003: Tailwind v4 over v3
**Decision:** Tailwind CSS v4 with CSS-first config  
**Rationale:** Oxide engine is significantly faster, CSS-first configuration via `@theme` is cleaner, native CSS layers support, OKLCH color support.

### ADR-004: Turso over Supabase/Planetscale
**Decision:** Turso (libSQL) for database  
**Rationale:** Edge-native SQLite with global replication, zero cold starts, generous free tier. Landing page only needs contact form storage and analytics — no need for PostgreSQL complexity.

### ADR-005: Three.js for Hero over Spline/Rive
**Decision:** React Three Fiber for 3D hero  
**Rationale:** Full control over rendering, smaller bundle (tree-shakeable), better performance tuning, accessibility fallbacks. Spline exports are heavy and opaque.

### ADR-006: Biome over ESLint + Prettier
**Decision:** Biome as single linting/formatting tool  
**Rationale:** 100x faster than ESLint, single config file, built-in formatter (no Prettier needed), growing ecosystem. Reduces toolchain complexity.

---

> **Built for PixlNova — pixlnova.com**  
> *"Where Ideas Go Digital"*  
> 
> *First impression is the best impression — and this roadmap ensures yours will be unforgettable.* ✨