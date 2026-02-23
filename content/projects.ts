export interface Project {
    id: string
    title: string
    type: "web" | "mobile" | "saas" | "ai" | "desktop"
    description: string
    stack: string[]
    image: string
    color: string
    // Extended case study data
    tagline: string
    challenge: string
    solution: string
    results: { metric: string; value: string; description: string }[]
    features: { title: string; description: string }[]
    testimonial?: { quote: string; author: string; role: string }
    timeline: string
    team: string
}

export const projects: Project[] = [
    {
        id: "taskflow-pro",
        title: "TaskFlow Pro",
        type: "saas",
        description: "AI-powered project management platform with real-time collaboration, smart task prioritization, and automated sprint planning.",
        stack: ["Next.js", "Supabase", "OpenAI", "Tailwind", "TypeScript", "Vercel"],
        image: "/portfolio/taskflow.png",
        color: "#7c3aed",
        tagline: "AI-powered project management that thinks ahead.",
        challenge: "A growing startup needed to replace their patchwork of Trello, Notion, and Slack with a single AI-native platform. Their 200+ person team was losing hours daily to context-switching between tools, and project deadlines were slipping because task prioritization was manual and inconsistent.",
        solution: "We built TaskFlow Pro — an AI-first project management platform that automatically prioritizes tasks based on deadlines, dependencies, and team velocity. Real-time collaboration with WebSocket-powered live cursors, an AI assistant that drafts sprint plans from backlog items, and smart notifications that know when to alert vs. when to batch.",
        results: [
            { metric: "Productivity", value: "+42%", description: "Team productivity increase within 3 months" },
            { metric: "Time Saved", value: "12hrs/wk", description: "Average time saved per team member weekly" },
            { metric: "Adoption", value: "94%", description: "Daily active user rate after 30 days" },
            { metric: "Delivery", value: "8 weeks", description: "From kickoff to production launch" },
        ],
        features: [
            { title: "AI Sprint Planner", description: "GPT-4 analyzes backlog items, estimates complexity, and auto-generates balanced sprint plans with one click." },
            { title: "Real-time Collaboration", description: "WebSocket-powered live cursors, inline comments, and @mentions with instant notification delivery." },
            { title: "Smart Prioritization", description: "Machine learning model trained on historical velocity data to rank tasks by impact and urgency." },
            { title: "Automated Stand-ups", description: "Bot collects async updates, generates summaries, and flags blockers before the team even meets." },
            { title: "Custom Dashboards", description: "Drag-and-drop analytics dashboards with burn-down charts, velocity trends, and OKR tracking." },
            { title: "Integrations Hub", description: "Native integrations with GitHub, Slack, Figma, and 40+ tools via a unified webhook system." },
        ],
        testimonial: {
            quote: "TaskFlow Pro didn't just replace our tools — it transformed how our team works. The AI sprint planner alone saves us 6 hours of planning every two weeks.",
            author: "Sarah Chen",
            role: "VP of Engineering, ScaleOps",
        },
        timeline: "8 weeks",
        team: "2 engineers, 1 designer",
    },
    {
        id: "foodiex",
        title: "FoodieX",
        type: "mobile",
        description: "Premium food delivery app with real-time GPS tracking, AI-powered recommendations, and seamless payment integration.",
        stack: ["Flutter", "Firebase", "Stripe", "Google Maps", "Dart", "Cloud Functions"],
        image: "/portfolio/foodiex.png",
        color: "#f97316",
        tagline: "Food delivery, reimagined for the premium segment.",
        challenge: "A premium restaurant chain wanted to bypass third-party delivery apps (and their 30% commission) with a branded, white-label delivery experience. They needed real-time GPS tracking, AI-powered meal recommendations, and a checkout flow that converts at 3x the industry average.",
        solution: "We designed and built FoodieX — a Flutter-powered cross-platform app with a visually rich menu experience, real-time driver tracking on Google Maps, an AI recommendation engine that learns from order history and time-of-day patterns, and a one-tap checkout with Stripe and Apple Pay.",
        results: [
            { metric: "Conversion", value: "4.2%", description: "Cart-to-order conversion rate (industry avg: 1.5%)" },
            { metric: "Revenue", value: "+$2.1M", description: "Additional annual revenue from direct orders" },
            { metric: "Rating", value: "4.9★", description: "App Store rating after 10,000+ reviews" },
            { metric: "Delivery", value: "6 weeks", description: "From design to App Store approval" },
        ],
        features: [
            { title: "Visual Menu Experience", description: "Full-bleed food photography with ingredient breakdowns, allergen filters, and portion size selectors." },
            { title: "AI Meal Recommendations", description: "ML model suggests meals based on order history, time of day, weather, and trending dishes." },
            { title: "Live GPS Tracking", description: "Real-time driver location on Google Maps with ETA countdown and route visualization." },
            { title: "One-Tap Checkout", description: "Apple Pay, Google Pay, and saved cards with a single-tap checkout that minimizes cart abandonment." },
            { title: "Loyalty & Rewards", description: "Points system with tier-based rewards, birthday bonuses, and referral incentives." },
            { title: "Restaurant Dashboard", description: "Real-time order management, kitchen display system, and analytics for restaurant operators." },
        ],
        testimonial: {
            quote: "FoodieX helped us take control of our delivery channel. We went from 0 to 50,000 monthly orders in 4 months, saving millions in third-party commissions.",
            author: "Marcus Rivera",
            role: "CEO, Urban Kitchen Group",
        },
        timeline: "6 weeks",
        team: "2 engineers, 1 designer",
    },
    {
        id: "cryptodesk",
        title: "CryptoDesk",
        type: "web",
        description: "Real-time cryptocurrency analytics dashboard with interactive charts, portfolio tracking, and price alerts.",
        stack: ["React", "D3.js", "WebSocket", "Node.js", "Redis", "PostgreSQL"],
        image: "/portfolio/cryptodesk.png",
        color: "#06b6d4",
        tagline: "Institutional-grade crypto analytics for everyone.",
        challenge: "A fintech startup needed a Bloomberg Terminal-like experience for crypto traders — real-time price feeds at millisecond latency, interactive candlestick charts with 50+ technical indicators, portfolio tracking across 10 exchanges, and custom alert systems that trigger in under 100ms.",
        solution: "We engineered CryptoDesk with WebSocket connections to 10 major exchanges, a Redis-backed real-time aggregation layer, and D3.js-powered charts that render 100,000+ data points at 60fps. The alert engine uses server-sent events for sub-100ms notification delivery.",
        results: [
            { metric: "Latency", value: "<50ms", description: "Price feed latency from exchange to screen" },
            { metric: "Users", value: "25K+", description: "Monthly active traders within 6 months" },
            { metric: "Uptime", value: "99.99%", description: "Platform availability since launch" },
            { metric: "Delivery", value: "10 weeks", description: "From architecture to public beta" },
        ],
        features: [
            { title: "Real-time Price Engine", description: "WebSocket aggregation from 10 exchanges with sub-50ms latency and automatic failover." },
            { title: "Advanced Charting", description: "D3.js candlestick charts with 50+ technical indicators, drawing tools, and multi-timeframe analysis." },
            { title: "Portfolio Tracker", description: "Unified portfolio view across CEX and DEX wallets with P&L tracking and tax reports." },
            { title: "Smart Alerts", description: "Price, volume, and indicator-based alerts via push, email, and webhooks in <100ms." },
            { title: "Social Sentiment", description: "NLP-powered sentiment scoring from Twitter, Reddit, and Discord for trending coins." },
            { title: "API Marketplace", description: "RESTful and WebSocket APIs for programmatic access with tier-based rate limiting." },
        ],
        testimonial: {
            quote: "CryptoDesk gives me the same quality data I used to pay $2,000/month for. The charting is insane — I've completely switched from TradingView.",
            author: "Alex Kim",
            role: "Professional Trader",
        },
        timeline: "10 weeks",
        team: "3 engineers, 1 designer",
    },
    {
        id: "medicare-plus",
        title: "MediCare+",
        type: "mobile",
        description: "AI-powered health tracking & wellness app with HealthKit integration, mood tracking, and personalized insights.",
        stack: ["Swift", "HealthKit", "Core ML", "SwiftUI", "CloudKit", "WidgetKit"],
        image: "/portfolio/medicare.png",
        color: "#10b981",
        tagline: "Your health, understood—not just tracked.",
        challenge: "A health-tech startup wanted to go beyond basic fitness tracking. They needed an app that correlates sleep, exercise, nutrition, mood, and biometric data to deliver genuinely actionable health insights — not just charts and graphs, but AI-driven recommendations specific to each user.",
        solution: "We built MediCare+ as a native Swift app deeply integrated with HealthKit. Core ML models analyze patterns across all health metrics to generate personalized daily plans. Interactive mood tracking with journaling, sleep quality scoring with smart alarm recommendations, and beautiful data visualizations that make health data accessible.",
        results: [
            { metric: "Retention", value: "68%", description: "30-day retention rate (industry avg: 25%)" },
            { metric: "Health Score", value: "+31%", description: "Average user health score improvement in 90 days" },
            { metric: "Downloads", value: "180K", description: "Downloads in first 3 months on App Store" },
            { metric: "Delivery", value: "12 weeks", description: "From concept to App Store launch" },
        ],
        features: [
            { title: "HealthKit Deep Integration", description: "Reads 40+ data types including heart rate, sleep stages, blood oxygen, and menstrual tracking." },
            { title: "AI Health Insights", description: "Core ML models correlate multi-dimensional health data to surface personalized recommendations." },
            { title: "Mood & Journal", description: "Interactive mood tracking with voice journaling, sentiment analysis, and mood-health correlation." },
            { title: "Smart Sleep Coaching", description: "Sleep phase analysis with optimal wake-up time calculations and bedtime routine suggestions." },
            { title: "Beautiful Widgets", description: "WidgetKit-powered home screen widgets showing daily health score, step count, and mood trends." },
            { title: "Privacy-First", description: "All ML processing on-device via Core ML. Health data never leaves the user's iPhone." },
        ],
        testimonial: {
            quote: "MediCare+ is the first health app that actually changed my behavior. The AI insights helped me discover my migraines were linked to poor sleep quality.",
            author: "Dr. Priya Sharma",
            role: "Physician & Beta Tester",
        },
        timeline: "12 weeks",
        team: "2 iOS engineers, 1 designer, 1 ML engineer",
    },
    {
        id: "shopstream",
        title: "ShopStream",
        type: "web",
        description: "Headless e-commerce platform with lightning-fast storefront, inventory management, and multi-vendor support.",
        stack: ["Next.js", "Stripe", "Algolia", "Sanity", "Vercel", "PostgreSQL"],
        image: "/portfolio/shopstream.png",
        color: "#ec4899",
        tagline: "E-commerce that loads before you blink.",
        challenge: "A fashion brand scaling from regional to global needed a storefront that loads in under 1 second in any country, handles flash sales of 50,000 concurrent users, supports multi-currency with geo-adaptive pricing, and gives their marketing team full CMS control without developer involvement.",
        solution: "We architected ShopStream as a headless e-commerce platform with Next.js on the edge, Sanity CMS for merchandising, Algolia for instant search, and Stripe with multi-currency support. Static generation for product pages with ISR ensures sub-second loads globally, while Vercel Edge Functions handle geo-based pricing logic.",
        results: [
            { metric: "Load Time", value: "0.8s", description: "Average page load time globally via CDN" },
            { metric: "Revenue", value: "+67%", description: "Revenue increase after migration from Shopify" },
            { metric: "SEO", value: "#1", description: "Ranking for 40+ target keywords within 6 months" },
            { metric: "Delivery", value: "10 weeks", description: "From design to production storefront" },
        ],
        features: [
            { title: "Edge-First Architecture", description: "Next.js on Vercel Edge with ISR, giving every visitor a sub-second experience regardless of location." },
            { title: "Visual Merchandising", description: "Sanity CMS with custom studio plugins so marketing can update collections, banners, and campaigns instantly." },
            { title: "Instant Search", description: "Algolia-powered search with typo tolerance, faceted filters, and personalized search ranking." },
            { title: "Multi-Currency", description: "Automatic geo-detection with localized pricing, currency conversion, and region-specific tax calculation." },
            { title: "Flash Sale Engine", description: "Redis-backed inventory reservation system that handles 50K+ concurrent users without overselling." },
            { title: "Analytics Suite", description: "Custom conversion funnel tracking, product performance dashboards, and A/B testing for layout experiments." },
        ],
        testimonial: {
            quote: "Our site went from a 4-second load time on Shopify to under 1 second with ShopStream. Revenue jumped 67% in the first quarter after migration.",
            author: "Olivia Zhang",
            role: "Head of Digital, NOIR Fashion",
        },
        timeline: "10 weeks",
        team: "2 engineers, 1 designer, 1 CMS specialist",
    },
    {
        id: "codementor",
        title: "CodeMentor AI",
        type: "ai",
        description: "AI-powered code review and mentoring tool that helps teams write better code with intelligent suggestions.",
        stack: ["Python", "LangChain", "React", "PostgreSQL", "FastAPI", "Docker"],
        image: "/portfolio/codementor.png",
        color: "#8b5cf6",
        tagline: "Your senior engineer that never sleeps.",
        challenge: "An enterprise team of 500+ developers was struggling with code quality consistency. Manual code reviews were bottlenecking velocity, junior developers weren't learning fast enough, and security vulnerabilities were slipping through to production. They needed an AI system that could review code at scale with the nuance of a senior engineer.",
        solution: "We built CodeMentor AI — a LangChain-powered code review platform that integrates directly into GitHub PRs. It analyzes code for bugs, security vulnerabilities, performance issues, and style inconsistencies, then provides contextual explanations that teach developers why the change matters. RAG pipelines index the company's internal coding standards for organization-specific feedback.",
        results: [
            { metric: "Bugs Caught", value: "73%", description: "Of production bugs caught before merge" },
            { metric: "Review Time", value: "-60%", description: "Reduction in human code review time" },
            { metric: "Security", value: "0", description: "Critical vulnerabilities in production post-deployment" },
            { metric: "Delivery", value: "14 weeks", description: "From prototype to enterprise rollout" },
        ],
        features: [
            { title: "GitHub PR Integration", description: "Automatic review on every PR with inline comments, severity ratings, and suggested fixes." },
            { title: "Security Scanning", description: "OWASP Top 10 detection, dependency vulnerability checks, and secret scanning with zero false positives." },
            { title: "Custom Standards", description: "RAG pipeline indexes your team's coding guidelines for organization-specific review feedback." },
            { title: "Learning Mode", description: "Provides educational explanations with links to documentation, helping junior devs level up faster." },
            { title: "Metrics Dashboard", description: "Code quality trends, common mistake patterns, and per-team improvement tracking over time." },
            { title: "Multi-Language", description: "Supports Python, TypeScript, Go, Rust, Java, and C++ with language-specific best practices." },
        ],
        testimonial: {
            quote: "CodeMentor AI catches things our senior engineers miss. Our production bug rate dropped 73% in two months, and our juniors are improving 3x faster.",
            author: "James Park",
            role: "CTO, DataScale Inc.",
        },
        timeline: "14 weeks",
        team: "3 engineers, 1 ML engineer",
    },
]

export function getProjectById(id: string): Project | undefined {
    return projects.find((p) => p.id === id)
}

export function getAllProjectIds(): string[] {
    return projects.map((p) => p.id)
}
