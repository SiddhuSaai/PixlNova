import { Globe, Smartphone, Monitor, Palette, Server, Bot, Rocket, Cloud } from "lucide-react"

export interface ServiceFeatureDetail {
    title: string
    description: string
}

export interface ServiceProcess {
    step: string
    title: string
    description: string
}

export interface Service {
    slug: string
    icon: string
    title: string
    tags: string[]
    description: string
    features: string[]
    // Extended data for detail pages
    heroTagline: string
    longDescription: string
    detailedFeatures: ServiceFeatureDetail[]
    process: ServiceProcess[]
    techStack: string[]
    accentColor: string
    accentHsl: string
    stats: { label: string; value: string }[]
}

export const services: Service[] = [
    {
        slug: "web-development",
        icon: "Globe",
        title: "Web Development",
        tags: ["Next.js", "React", "Vue"],
        description:
            "From blazing-fast landing pages to complex SaaS dashboards — we craft web experiences that convert, scale, and delight.",
        features: [
            "Progressive Web Apps (PWA)",
            "Server-Side Rendering & Static Generation",
            "Headless CMS Integration",
            "Real-time Features & WebSockets",
            "Complex Dashboard UIs",
            "E-commerce Platforms",
        ],
        heroTagline: "Websites that don't just load — they launch.",
        longDescription:
            "We engineer web experiences that feel instant, look stunning, and convert visitors into customers. From static marketing sites to full-blown SaaS platforms with real-time collaboration, we've shipped it all. Our stack is bleeding-edge, our code is clean, and our obsession with performance is borderline unhealthy.",
        detailedFeatures: [
            { title: "Next.js & React Mastery", description: "Server components, streaming SSR, ISR, and edge middleware — we use everything Next.js offers to ship the fastest possible apps." },
            { title: "Progressive Web Apps", description: "Offline-capable, installable, push-notification-ready web apps that rival native experiences on any device." },
            { title: "Real-time Collaboration", description: "WebSocket and SSE-powered features for live dashboards, collaborative editing, and instant notifications." },
            { title: "E-commerce at Scale", description: "Headless Shopify, Medusa, or custom storefronts with Stripe, geo-adaptive pricing, and blazing checkout flows." },
            { title: "CMS Integration", description: "Sanity, Strapi, Payload, or Contentful — your content team gets a world-class editing experience while devs stay happy." },
            { title: "Performance Engineering", description: "Core Web Vitals optimization, image CDN pipelines, code splitting, and edge caching for sub-second page loads." },
        ],
        process: [
            { step: "01", title: "Discovery", description: "Deep dive into your business goals, user personas, and competitive landscape." },
            { step: "02", title: "Architecture", description: "System design, tech stack selection, API contracts, and infrastructure planning." },
            { step: "03", title: "Design & Prototype", description: "High-fidelity Figma designs with interactive prototypes and design system tokens." },
            { step: "04", title: "Sprint Build", description: "2-week sprints with daily standups, CI/CD from day one, and staging previews." },
            { step: "05", title: "Launch & Scale", description: "Performance audits, SEO hardening, monitoring setup, and go-live support." },
        ],
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Redis", "Vercel", "Cloudflare", "Stripe"],
        accentColor: "oklch(0.55 0.25 285)",
        accentHsl: "265 80% 60%",
        stats: [
            { label: "Web Apps Shipped", value: "80+" },
            { label: "Avg. Lighthouse Score", value: "98" },
            { label: "Avg. Build Time", value: "4 wks" },
            { label: "Uptime Guarantee", value: "99.9%" },
        ],
    },
    {
        slug: "mobile-apps",
        icon: "Smartphone",
        title: "Mobile Apps",
        tags: ["Flutter", "React Native", "Swift"],
        description:
            "Native-feeling apps for iOS and Android, built with cross-platform efficiency or native performance — your choice.",
        features: [
            "Cross-platform (Flutter/React Native)",
            "Native iOS (Swift/SwiftUI)",
            "Native Android (Kotlin)",
            "Push Notifications",
            "Offline-first Architecture",
            "App Store Optimization",
        ],
        heroTagline: "Apps that feel native, ship twice as fast.",
        longDescription:
            "Whether it's a consumer social app or an enterprise field-service tool, we build mobile experiences that users love and App Store reviewers approve. Cross-platform when speed matters, native when performance is non-negotiable. Always pixel-perfect.",
        detailedFeatures: [
            { title: "Flutter Excellence", description: "Single codebase, native compilation. Beautiful Material 3 and Cupertino widgets with smooth 60fps animations." },
            { title: "React Native Expertise", description: "Shared logic with your web app via Expo. Fast iteration, OTA updates, and a massive plugin ecosystem." },
            { title: "Native iOS & Android", description: "SwiftUI and Jetpack Compose for when you need absolute platform fidelity and system-level access." },
            { title: "Offline-First Architecture", description: "Local databases, conflict resolution, and background sync so your app works flawlessly without a connection." },
            { title: "Push & Rich Notifications", description: "Firebase, APNs, and custom notification channels with deep linking and interactive actions." },
            { title: "App Store Optimization", description: "We handle metadata, screenshots, A/B testing, and review guidelines so you launch without rejection." },
        ],
        process: [
            { step: "01", title: "Platform Strategy", description: "Cross-platform vs. native analysis based on your budget, timeline, and feature requirements." },
            { step: "02", title: "UX for Thumbs", description: "Mobile-first interaction design with gesture maps, reachability analysis, and thumb zones." },
            { step: "03", title: "Parallel Build", description: "Simultaneous iOS and Android development with shared business logic and platform-specific UI." },
            { step: "04", title: "Beta Testing", description: "TestFlight and Play Console beta tracks with crash analytics and user feedback loops." },
            { step: "05", title: "Launch & Iterate", description: "Coordinated store submissions, marketing assets, and rapid post-launch iteration cycles." },
        ],
        techStack: ["Flutter", "Dart", "React Native", "Swift", "Kotlin", "Firebase", "Supabase", "SQLite", "RevenueCat", "Fastlane"],
        accentColor: "oklch(0.70 0.20 350)",
        accentHsl: "340 70% 60%",
        stats: [
            { label: "Apps Published", value: "45+" },
            { label: "Combined Downloads", value: "2M+" },
            { label: "Avg. Store Rating", value: "4.8★" },
            { label: "Platforms", value: "iOS+Android" },
        ],
    },
    {
        slug: "desktop-apps",
        icon: "Monitor",
        title: "Desktop Apps",
        tags: ["Electron", "Tauri", "Swift"],
        description:
            "Powerful desktop applications for macOS, Windows, and Linux with native system integration and performance.",
        features: [
            "Cross-platform Desktop (Electron/Tauri)",
            "Native macOS (Swift/AppKit)",
            "System Tray Integration",
            "Auto-updates",
            "File System Access",
            "Hardware Integration",
        ],
        heroTagline: "Desktop software, reimagined for the modern era.",
        longDescription:
            "Desktop isn't dead — it's evolving. We build desktop applications using Tauri for lightweight speed, Electron for ecosystem leverage, or native Swift/C++ for maximum power. Menu bar apps, creative tools, developer utilities — if it runs on a desktop, we can build it.",
        detailedFeatures: [
            { title: "Tauri Framework", description: "Rust-powered backends with web frontends. 10x smaller bundles than Electron with native-level performance." },
            { title: "Electron & Web Tech", description: "Leverage your existing React/Vue codebase for desktop. Rich plugin ecosystem with access to Node.js APIs." },
            { title: "Native macOS Apps", description: "SwiftUI and AppKit for true macOS-native experiences that integrate with Spotlight, Shortcuts, and widgets." },
            { title: "System-Level Integration", description: "System tray apps, global hotkeys, file watchers, native notifications, and deep OS integration." },
            { title: "Auto-Update Pipeline", description: "Seamless in-app updates via custom update servers, Sparkle, or electron-updater with rollback support." },
            { title: "Code Signing & Notarization", description: "Full code signing for macOS, Windows Authenticode, and Linux package distribution." },
        ],
        process: [
            { step: "01", title: "Platform Analysis", description: "Evaluate target platforms, performance requirements, and framework suitability." },
            { step: "02", title: "Architecture Design", description: "IPC patterns, state management, and system API integration planning." },
            { step: "03", title: "Core Development", description: "Build core functionality with platform-specific adaptations and native integrations." },
            { step: "04", title: "Distribution Setup", description: "Installer creation, notarization, auto-update servers, and release automation." },
            { step: "05", title: "QA & Ship", description: "Cross-platform testing, accessibility verification, and staged rollout." },
        ],
        techStack: ["Tauri", "Rust", "Electron", "Swift", "TypeScript", "React", "SQLite", "C++", "AppKit", "WinUI"],
        accentColor: "oklch(0.72 0.18 155)",
        accentHsl: "155 50% 55%",
        stats: [
            { label: "Desktop Apps Built", value: "20+" },
            { label: "Platforms Supported", value: "3" },
            { label: "Smallest Binary", value: "4MB" },
            { label: "Update Delivery", value: "<1min" },
        ],
    },
    {
        slug: "ui-ux-design",
        icon: "Palette",
        title: "UI/UX Design",
        tags: ["Figma", "Prototyping", "Design Systems"],
        description:
            "User-centered design that looks stunning and converts. From wireframes to pixel-perfect design systems.",
        features: [
            "User Research & Personas",
            "Wireframing & Prototyping",
            "Design System Creation",
            "Interaction Design",
            "Usability Testing",
            "Accessibility Audits",
        ],
        heroTagline: "Design that feels inevitable.",
        longDescription:
            "Great design isn't decoration — it's strategy made visible. We conduct deep user research, craft information architectures that make sense, and design interfaces so intuitive they feel like they've always existed. Every pixel serves a purpose. Every interaction tells a story.",
        detailedFeatures: [
            { title: "User Research & Strategy", description: "Stakeholder interviews, competitive audits, user personas, and journey mapping to ground every design decision in data." },
            { title: "Design Systems at Scale", description: "Component libraries with variant logic, token-based theming, and auto-documenting Figma libraries that sync to code." },
            { title: "Interactive Prototyping", description: "High-fidelity Figma prototypes with real data, micro-interactions, and user testing scripts ready for validation." },
            { title: "Motion & Interaction Design", description: "Spring physics, gesture-driven animations, and loading choreography that makes your app feel alive." },
            { title: "Accessibility-First", description: "WCAG 2.1 AA compliance baked in from day one. Color contrast, screen reader support, keyboard navigation." },
            { title: "Design-to-Code Handoff", description: "Developer-ready specs with CSS tokens, component APIs, responsive breakpoints, and animation curves." },
        ],
        process: [
            { step: "01", title: "Discover & Empathize", description: "User interviews, competitive analysis, and heuristic evaluation of existing experiences." },
            { step: "02", title: "Define & Architect", description: "Information architecture, user flows, and content strategy that align with business goals." },
            { step: "03", title: "Design & Iterate", description: "Wireframes → high-fidelity mockups → interactive prototypes with rapid iteration cycles." },
            { step: "04", title: "Test & Validate", description: "Usability testing sessions, A/B experiments, and data-driven design refinements." },
            { step: "05", title: "Ship & Measure", description: "Design QA during development, post-launch analytics review, and continuous optimization." },
        ],
        techStack: ["Figma", "Framer", "Rive", "Lottie", "Storybook", "Chromatic", "Maze", "Hotjar", "Adobe CC", "Spline"],
        accentColor: "oklch(0.75 0.20 60)",
        accentHsl: "35 80% 60%",
        stats: [
            { label: "Design Systems Built", value: "30+" },
            { label: "Usability Score Avg", value: "92" },
            { label: "Components Designed", value: "5K+" },
            { label: "Figma Files Delivered", value: "200+" },
        ],
    },
    {
        slug: "backend-apis",
        icon: "Server",
        title: "Backend & APIs",
        tags: ["Node", "Python", "Go"],
        description:
            "Scalable backends, RESTful & GraphQL APIs, microservices, and real-time infrastructure built for growth.",
        features: [
            "REST & GraphQL APIs",
            "Microservices Architecture",
            "Real-time (WebSockets/SSE)",
            "Database Design & Optimization",
            "Authentication & Authorization",
            "Third-party API Integration",
        ],
        heroTagline: "The engine your frontend deserves.",
        longDescription:
            "Your frontend is only as good as the APIs behind it. We architect backends that handle millions of requests, databases that query in milliseconds, and auth systems that never compromise. Event-driven, horizontally scalable, observable — the kind of infrastructure that lets you sleep at night.",
        detailedFeatures: [
            { title: "API Design & Development", description: "RESTful APIs with OpenAPI specs, GraphQL with code-first schemas, and tRPC for type-safe fullstack development." },
            { title: "Microservices & Event-Driven", description: "Service mesh architecture with message queues, event sourcing, and CQRS patterns for complex domains." },
            { title: "Database Engineering", description: "Schema design, query optimization, migration strategies, and multi-database architectures (SQL + NoSQL + Vector)." },
            { title: "Auth & Security", description: "OAuth 2.0, OIDC, JWTs, RBAC/ABAC, rate limiting, and security hardening that passes penetration testing." },
            { title: "Real-time Infrastructure", description: "WebSocket servers, Server-Sent Events, pub/sub systems, and presence detection for collaborative features." },
            { title: "Observability Stack", description: "Structured logging, distributed tracing, custom metrics, alerting, and SLO-based monitoring dashboards." },
        ],
        process: [
            { step: "01", title: "Domain Modeling", description: "Understand your business domain, define bounded contexts, and design aggregate roots." },
            { step: "02", title: "API Contract Design", description: "OpenAPI/GraphQL schema definitions, versioning strategy, and mock server setup." },
            { step: "03", title: "Core Implementation", description: "Test-driven development of business logic, data access layers, and integration points." },
            { step: "04", title: "Hardening", description: "Load testing, security scanning, caching strategy, and performance optimization." },
            { step: "05", title: "Deploy & Monitor", description: "Containerized deployment, blue-green rollouts, and observability stack setup." },
        ],
        techStack: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "Kafka", "gRPC", "Docker", "Prisma", "Drizzle"],
        accentColor: "oklch(0.65 0.20 145)",
        accentHsl: "145 60% 50%",
        stats: [
            { label: "APIs Built", value: "100+" },
            { label: "Requests/sec Handled", value: "50K+" },
            { label: "Avg Latency", value: "<40ms" },
            { label: "Uptime Record", value: "99.99%" },
        ],
    },
    {
        slug: "ai-integration",
        icon: "Bot",
        title: "AI Integration",
        tags: ["LLMs", "RAG", "ML"],
        description:
            "Smart AI features that transform your product — chatbots, recommendation engines, intelligent automation.",
        features: [
            "Custom AI Chatbots",
            "RAG (Retrieval-Augmented Generation)",
            "Document Intelligence",
            "Recommendation Engines",
            "Predictive Analytics",
            "Computer Vision",
        ],
        heroTagline: "AI that actually works — not just demos.",
        longDescription:
            "We don't just bolt on AI for buzzwords. We integrate LLMs, RAG pipelines, and custom ML models into your product in ways that genuinely solve user problems. From intelligent search to conversational interfaces that understand context, our AI features ship to production and deliver measurable ROI.",
        detailedFeatures: [
            { title: "LLM Integration", description: "OpenAI, Anthropic, Gemini, and open-source model integration with fallback chains, caching, and cost optimization." },
            { title: "RAG Pipelines", description: "Vector databases, chunking strategies, retrieval tuning, and hybrid search for accurate, sourced AI responses." },
            { title: "Custom Chatbots", description: "Multi-turn conversational AI with tool calling, function execution, memory, and persona customization." },
            { title: "Document Intelligence", description: "PDF parsing, OCR, table extraction, and structured data extraction from unstructured documents." },
            { title: "Recommendation Systems", description: "Collaborative filtering, content-based, and hybrid recommendation engines that learn from user behavior." },
            { title: "Predictive Analytics", description: "Time-series forecasting, churn prediction, and anomaly detection with interpretable ML models." },
        ],
        process: [
            { step: "01", title: "AI Feasibility Audit", description: "Evaluate your data, use case fit, and ROI potential before writing any code." },
            { step: "02", title: "Data Pipeline Setup", description: "ETL, embedding generation, vector store provisioning, and data quality assurance." },
            { step: "03", title: "Model Integration", description: "Prompt engineering, fine-tuning, evaluation suites, and A/B testing frameworks." },
            { step: "04", title: "Production Hardening", description: "Rate limiting, content moderation, cost monitoring, and fallback strategies." },
            { step: "05", title: "Continuous Learning", description: "Feedback loops, model retraining pipelines, and performance drift detection." },
        ],
        techStack: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "Weaviate", "HuggingFace", "Python", "FastAPI", "TensorFlow", "Vercel AI SDK"],
        accentColor: "oklch(0.72 0.22 300)",
        accentHsl: "280 70% 60%",
        stats: [
            { label: "AI Features Shipped", value: "35+" },
            { label: "Tokens Processed/mo", value: "50M+" },
            { label: "Avg Response Time", value: "<2s" },
            { label: "Accuracy Rate", value: "94%" },
        ],
    },
    {
        slug: "mvp-development",
        icon: "Rocket",
        title: "MVP Development",
        tags: ["Rapid", "Lean", "Agile"],
        description:
            "From idea to launched product in 2-4 weeks. We help startups validate fast with production-quality MVPs.",
        features: [
            "Rapid Prototyping",
            "Lean Methodology",
            "User Validation",
            "Iterative Development",
            "Launch Strategy",
            "Investor-ready Demos",
        ],
        heroTagline: "From napkin sketch to live product. Fast.",
        longDescription:
            "Speed kills — slow speed kills startups. We take your idea from concept to deployed, functional product in 2-4 weeks. Not a prototype that falls apart, but a real, scalable MVP with auth, payments, and a UI that impresses investors. We've helped 50+ startups launch, and 12 have gone on to raise funding.",
        detailedFeatures: [
            { title: "2-Week Sprint Launch", description: "Scoped, designed, built, and deployed in a single 2-week sprint. Real users on day 14." },
            { title: "Founder-Focused Process", description: "Daily async updates, weekly video calls, and a shared Notion workspace so you're never in the dark." },
            { title: "Production-Quality Code", description: "No throwaway code. Clean architecture that scales from 10 to 10,000 users without a rewrite." },
            { title: "Payments & Auth on Day One", description: "Stripe billing, social auth, email magic links — revenue-ready from launch." },
            { title: "Investor Demo Mode", description: "Polished demo flows, seed data, and presentation-ready UIs that make your pitch deck obsolete." },
            { title: "Post-MVP Growth Path", description: "Technical roadmap, scaling strategy, and optionally retained team for ongoing iteration." },
        ],
        process: [
            { step: "01", title: "Scope & Prioritize", description: "Cut ruthlessly to find the smallest possible product that validates your core hypothesis." },
            { step: "02", title: "Design Sprint", description: "2-day design sprint producing high-fidelity mockups and interactive prototypes." },
            { step: "03", title: "Build Sprint", description: "10-day engineering sprint with daily deployments and continuous user feedback." },
            { step: "04", title: "Launch Day", description: "Production deployment, domain setup, analytics, and error monitoring — go live." },
            { step: "05", title: "Validate & Iterate", description: "User analytics review, feedback synthesis, and next sprint planning." },
        ],
        techStack: ["Next.js", "Supabase", "Tailwind", "Stripe", "Vercel", "Resend", "Clerk", "Prisma", "TypeScript", "Framer Motion"],
        accentColor: "oklch(0.80 0.15 80)",
        accentHsl: "40 80% 60%",
        stats: [
            { label: "MVPs Launched", value: "50+" },
            { label: "Avg. Time to Launch", value: "18 days" },
            { label: "Startups Funded After", value: "12" },
            { label: "Repeat Clients", value: "85%" },
        ],
    },
    {
        slug: "devops-cloud",
        icon: "Cloud",
        title: "DevOps & Cloud",
        tags: ["AWS", "GCP", "Vercel"],
        description:
            "Infrastructure that scales. CI/CD pipelines, containerization, edge deployment, and monitoring.",
        features: [
            "CI/CD Pipeline Setup",
            "Docker & Kubernetes",
            "Edge Deployment",
            "Performance Monitoring",
            "Auto-scaling",
            "Disaster Recovery",
        ],
        heroTagline: "Infrastructure that scales while you sleep.",
        longDescription:
            "Great code deserves great infrastructure. We design and implement cloud architectures that auto-scale under load, self-heal on failure, and cost-optimize automatically. From startup single-server setups to enterprise multi-region Kubernetes clusters, we make your ops boring — in the best way.",
        detailedFeatures: [
            { title: "CI/CD Excellence", description: "GitHub Actions, GitLab CI, or custom pipelines with automated testing, preview deployments, and release management." },
            { title: "Container Orchestration", description: "Docker compose for development, Kubernetes for production, with Helm charts and GitOps workflows." },
            { title: "Edge & Serverless", description: "Vercel, Cloudflare Workers, AWS Lambda — choose the right compute model for each workload." },
            { title: "Infrastructure as Code", description: "Terraform, Pulumi, or CDK for reproducible, version-controlled infrastructure across environments." },
            { title: "Observability & Alerting", description: "Grafana, Datadog, or custom dashboards with SLO-based alerting and incident runbooks." },
            { title: "Cost Optimization", description: "Reserved instances, spot fleets, usage-based scaling, and monthly cloud spend reviews that cut bills by 30-60%." },
        ],
        process: [
            { step: "01", title: "Infrastructure Audit", description: "Review current setup, identify bottlenecks, security gaps, and cost waste." },
            { step: "02", title: "Architecture Design", description: "Design target architecture with IaC templates, networking, and security groups." },
            { step: "03", title: "Migration & Setup", description: "Zero-downtime migration, CI/CD pipeline configuration, and environment provisioning." },
            { step: "04", title: "Monitoring & Alerting", description: "Deploy observability stack with custom dashboards, SLOs, and on-call rotations." },
            { step: "05", title: "Optimization", description: "Continuous cost optimization, performance tuning, and disaster recovery testing." },
        ],
        techStack: ["AWS", "GCP", "Vercel", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Datadog", "Cloudflare", "Nginx"],
        accentColor: "oklch(0.75 0.15 195)",
        accentHsl: "195 70% 55%",
        stats: [
            { label: "Infra Projects", value: "40+" },
            { label: "Cost Savings Avg", value: "45%" },
            { label: "Uptime SLA", value: "99.99%" },
            { label: "Deploy Frequency", value: "50x/day" },
        ],
    },
]

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
    return services.map((s) => s.slug)
}
