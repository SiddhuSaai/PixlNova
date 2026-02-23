import type { Metadata, Viewport } from "next"
import { geistSans, geistMono } from "@/lib/fonts"
import { GeoProvider } from "@/components/providers/GeoProvider"
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import ChatBot from "@/components/ui/ChatBot"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#04040A" },
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
  ],
  colorScheme: "dark light",
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

/* Anti-flash script: sets data-theme before first paint */
const THEME_SCRIPT = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('data-theme', t);
    } else {
      var d = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', d);
    }
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-brand-500)] focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <GeoProvider>
            <SmoothScrollProvider>
              {children}
            </SmoothScrollProvider>
            <ChatBot />
          </GeoProvider>
        </ThemeProvider>
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
