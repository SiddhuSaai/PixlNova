export interface Testimonial {
    quote: string
    name: string
    role: string
    company: string
    location: string
    flag: string
    rating: number
    project: string
    metric?: { value: string; label: string }
    color: string
}

export const testimonials: Testimonial[] = [
    {
        quote: "Absolutely incredible work. PixlNova delivered our MVP in just 3 weeks. The quality was beyond expectations — our investors were blown away at the demo.",
        name: "Sarah Chen",
        role: "CEO",
        company: "TaskFlow",
        location: "San Francisco",
        flag: "🇺🇸",
        rating: 5,
        project: "SaaS Platform",
        metric: { value: "3 weeks", label: "to production MVP" },
        color: "#7c3aed",
    },
    {
        quote: "The attention to detail in our mobile app was stunning. Every animation, every micro-interaction — it felt like using an Apple product. Our App Store rating speaks for itself.",
        name: "Raj Patel",
        role: "Founder",
        company: "FoodieX",
        location: "Mumbai",
        flag: "🇮🇳",
        rating: 5,
        project: "Mobile App",
        metric: { value: "4.9★", label: "App Store rating" },
        color: "#f97316",
    },
    {
        quote: "We switched from a 10-person agency to PixlNova and got better results at a fraction of the cost. Their technical depth is unmatched — they understand scale.",
        name: "Marcus Weber",
        role: "CTO",
        company: "FinStack",
        location: "Berlin",
        flag: "🇩🇪",
        rating: 5,
        project: "Fintech Dashboard",
        metric: { value: "60%", label: "cost reduction" },
        color: "#06b6d4",
    },
    {
        quote: "Our SaaS dashboard went from concept to production in 6 weeks. Real-time analytics, beautiful charts, and a performance score that would make Google jealous.",
        name: "Emma Rodriguez",
        role: "Product Lead",
        company: "DataViz Pro",
        location: "Barcelona",
        flag: "🇪🇸",
        rating: 5,
        project: "Analytics SaaS",
        metric: { value: "6 weeks", label: "concept to launch" },
        color: "#10b981",
    },
    {
        quote: "PixlNova's AI integration transformed our customer support. Response times dropped 80% and satisfaction scores hit all-time highs. The ROI was immediate.",
        name: "James Okonkwo",
        role: "CEO",
        company: "SupportHub",
        location: "Lagos",
        flag: "🇳🇬",
        rating: 5,
        project: "AI Automation",
        metric: { value: "80%", label: "faster response time" },
        color: "#a855f7",
    },
    {
        quote: "The geo-adaptive pricing was a game changer for our international expansion. Revenue from emerging markets jumped 340% in the first quarter.",
        name: "Yuki Tanaka",
        role: "VP Engineering",
        company: "CloudScale",
        location: "Tokyo",
        flag: "🇯🇵",
        rating: 5,
        project: "E-commerce Platform",
        metric: { value: "+340%", label: "emerging market revenue" },
        color: "#ec4899",
    },
    {
        quote: "Working with PixlNova felt like having a senior tech co-founder. They didn't just build — they strategized, advised, and delivered excellence at every turn.",
        name: "Ana Santos",
        role: "Founder",
        company: "EduTech Brasil",
        location: "São Paulo",
        flag: "🇧🇷",
        rating: 5,
        project: "EdTech Platform",
        metric: { value: "50K+", label: "active students" },
        color: "#f59e0b",
    },
    {
        quote: "Our design system went from a mess of inconsistent components to a beautifully cohesive, accessible library. The team understood our brand better than we did.",
        name: "Sophie Laurent",
        role: "Design Director",
        company: "CreativeHub",
        location: "Paris",
        flag: "🇫🇷",
        rating: 5,
        project: "Design System",
        metric: { value: "200+", label: "reusable components" },
        color: "#8b5cf6",
    },
]
