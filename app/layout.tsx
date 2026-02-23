import type { Metadata, Viewport } from "next"
import { geistSans, geistMono } from "@/lib/fonts"
import { GeoProvider } from "@/components/providers/GeoProvider"
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider"
import ChatBot from "@/components/ui/ChatBot"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#04040A" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  colorScheme: "dark",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://pixlnova.com"),
  title: {
    default: "PixlNova — Global App & Web Development Studio",
    template: "%s | PixlNova",
  },
  description:
    "We build world-class web, iOS, Android, and desktop applications for startups and businesses worldwide. AI-powered, blazing fast, built to scale.",
  keywords: [
    "app development", "web development", "mobile app developer",
    "startup MVP", "Next.js developer", "Flutter developer",
    "AI integration", "SaaS development", "full-stack developer",
  ],
  authors: [{ name: "PixlNova", url: "https://pixlnova.com" }],
  creator: "PixlNova",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pixlnova.com",
    siteName: "PixlNova",
    title: "PixlNova — Global App & Web Development Studio",
    description: "We build world-class digital products for startups and businesses. Web, Mobile, Desktop, AI.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@pixlnova",
    creator: "@pixlnova",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-brand-500)] focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <GeoProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
          <ChatBot />
        </GeoProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "PixlNova",
              url: "https://pixlnova.com",
              description: "Global app & web development studio.",
              serviceType: ["Web Development", "Mobile App Development", "AI Integration", "UI/UX Design"],
              areaServed: { "@type": "GeoShape", name: "Worldwide" },
            }),
          }}
        />
      </body>
    </html>
  )
}
