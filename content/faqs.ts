export interface FAQ {
    question: string
    answer: string
    category: "process" | "pricing" | "technical" | "support"
}

export const faqCategories = [
    { key: "process" as const, label: "Process", emoji: "🚀" },
    { key: "pricing" as const, label: "Pricing & Payment", emoji: "💰" },
    { key: "technical" as const, label: "Technical", emoji: "⚙️" },
    { key: "support" as const, label: "Support & Legal", emoji: "🛡️" },
]

export const faqs: FAQ[] = [
    {
        question: "How long does a typical project take?",
        answer: "Timeline depends on scope and complexity. MVPs typically take 2-4 weeks, standard web/mobile apps 6-12 weeks, and enterprise solutions 3-6 months. We'll give you a precise timeline after our discovery call.",
        category: "process",
    },
    {
        question: "Do you work with non-technical founders?",
        answer: "Absolutely! Many of our best clients are non-technical. We guide you through every step — from translating your vision into technical requirements to explaining decisions in plain English. You focus on the business, we handle the tech.",
        category: "process",
    },
    {
        question: "How do revisions and change requests work?",
        answer: "Each milestone includes 2 rounds of revisions at no extra cost. Additional revisions are billed at our hourly rate. For significant scope changes, we'll provide a change order with updated timeline and pricing before proceeding.",
        category: "process",
    },
    {
        question: "What's included in the quoted price?",
        answer: "Our quotes include design, development, testing, deployment, and 30 days of post-launch support. We also include 2 rounds of revisions at each milestone. No hidden fees — ever.",
        category: "pricing",
    },
    {
        question: "Do you offer milestone-based payment plans?",
        answer: "Yes! We typically split payments into 3-4 milestones: project kickoff (30%), design approval (20%), development completion (30%), and final delivery (20%). We also offer monthly billing for retainer engagements.",
        category: "pricing",
    },
    {
        question: "What if I'm not satisfied with the work?",
        answer: "Client satisfaction is our top priority. We work in sprints with regular check-ins so you can review progress continuously. If at any milestone you're unsatisfied, we'll revise until you're happy — or refund for that milestone.",
        category: "pricing",
    },
    {
        question: "Can you work with my existing tech stack?",
        answer: "Absolutely. While we have our preferred tools, we're proficient across dozens of technologies. We've worked with legacy codebases, unusual frameworks, and complex existing architectures. We adapt to your needs.",
        category: "technical",
    },
    {
        question: "Will I own 100% of the source code and IP?",
        answer: "Yes, completely. Upon final payment, you receive full ownership of all source code, designs, and intellectual property. We'll transfer everything to your repository and provide detailed documentation.",
        category: "technical",
    },
    {
        question: "Can you scale the team if my project grows?",
        answer: "Yes! We can ramp up from a 2-person team to 8+ developers within 2 weeks. Our network of vetted specialists covers frontend, backend, mobile, DevOps, AI/ML, and design — all ready to jump in as needed.",
        category: "technical",
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Every project includes 30 days of free post-launch support (bug fixes, minor adjustments). After that, we offer flexible maintenance plans starting at $500/month for ongoing support, updates, and feature additions.",
        category: "support",
    },
    {
        question: "Do you sign NDAs and confidentiality agreements?",
        answer: "Yes, we sign NDAs before every project. Your ideas, data, and business information are treated with the utmost confidentiality. We can also work with your custom legal agreements.",
        category: "support",
    },
    {
        question: "How do you handle timezone differences?",
        answer: "We've delivered projects across 40+ countries. We maintain flexible hours with significant overlap with US, EU, and APAC time zones. Communication happens via Slack/Discord with daily async updates and weekly sync calls.",
        category: "support",
    },
]
