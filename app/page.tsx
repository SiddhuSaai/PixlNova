import dynamic from "next/dynamic"
import { Suspense } from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import LogoCloud from "@/components/sections/LogoCloud"
import Stats from "@/components/sections/Stats"

// ── Below-fold sections (lazy-loaded, code-split) ──
const Services = dynamic(() => import("@/components/sections/Services"))
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"))
const Process = dynamic(() => import("@/components/sections/Process"))
const Pricing = dynamic(() => import("@/components/sections/Pricing"))
const TechStack = dynamic(() => import("@/components/sections/TechStack"))
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"))
const FAQ = dynamic(() => import("@/components/sections/FAQ"))
const Contact = dynamic(() => import("@/components/sections/Contact"))
const CTA = dynamic(() => import("@/components/sections/CTA"))

function SectionSkeleton() {
  return <div className="min-h-[50vh] animate-pulse bg-[var(--overlay-3)]" />
}

export default function Home() {
  return (
    <main id="main-content" className="relative bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] overflow-x-hidden antialiased">
      <Navbar />

      {/* ── Above the Fold ── */}
      <Hero />

      {/* ── Social Proof Strip ── */}
      <LogoCloud />
      <Stats />

      {/* ── Core Sections ── */}
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Portfolio />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Process />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Pricing />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <TechStack />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <FAQ />
      </Suspense>

      {/* ── Conversion ── */}
      <Suspense fallback={<SectionSkeleton />}>
        <CTA />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>

      <Footer />
    </main>
  )
}
