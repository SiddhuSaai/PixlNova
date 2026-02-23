export type Tier = "tier1" | "tier2" | "tier3" | "tier4"
export type ServiceType = "web" | "mobile" | "bundle" | "saas" | "ai"
export type PlanLevel = "starter" | "growth" | "pro" | "enterprise"

export const TIER_COUNTRIES: Record<Tier, string[]> = {
    tier1: ["US", "GB", "AU", "CA", "NZ", "CH", "NO", "DK", "SE", "IE", "LU", "IS"],
    tier2: ["DE", "FR", "NL", "BE", "ES", "IT", "PT", "AE", "SG", "JP", "KR", "HK", "IL", "FI", "AT", "TW", "QA"],
    tier3: ["IN", "PH", "ID", "MY", "TH", "VN", "BR", "MX", "AR", "CO", "CL", "PK", "PL", "CZ", "RO", "HU", "TR", "SA"],
    tier4: ["NG", "KE", "GH", "EG", "ZA", "BD", "LK", "NP", "MM", "KH", "ET", "TZ", "UG", "SN"],
}

export const TIER_METADATA: Record<
    Tier,
    { label: string; emoji: string; currency: string; symbol: string; locale: string }
> = {
    tier1: { label: "North America, UK & Oceania", emoji: "🌎", currency: "USD", symbol: "$", locale: "en-US" },
    tier2: { label: "Europe & Asia Pacific", emoji: "🌍", currency: "EUR", symbol: "€", locale: "en-GB" },
    tier3: { label: "South Asia & Latin America", emoji: "🌏", currency: "USD", symbol: "$", locale: "en-US" },
    tier4: { label: "Africa & Emerging Markets", emoji: "🌍", currency: "USD", symbol: "$", locale: "en-US" },
}

// ── Per-country currency overrides (local currency display) ──
const COUNTRY_CURRENCY: Record<string, { currency: string; symbol: string; locale: string; rate: number }> = {
    IN: { currency: "INR", symbol: "₹", locale: "en-IN", rate: 84 },
    GB: { currency: "GBP", symbol: "£", locale: "en-GB", rate: 0.79 },
    JP: { currency: "JPY", symbol: "¥", locale: "ja-JP", rate: 150 },
    BR: { currency: "BRL", symbol: "R$", locale: "pt-BR", rate: 5.0 },
    MX: { currency: "MXN", symbol: "$", locale: "es-MX", rate: 17 },
    AU: { currency: "AUD", symbol: "A$", locale: "en-AU", rate: 1.55 },
    CA: { currency: "CAD", symbol: "C$", locale: "en-CA", rate: 1.36 },
    AE: { currency: "AED", symbol: "د.إ", locale: "ar-AE", rate: 3.67 },
    SA: { currency: "SAR", symbol: "﷼", locale: "ar-SA", rate: 3.75 },
    PK: { currency: "PKR", symbol: "₨", locale: "en-PK", rate: 280 },
    BD: { currency: "BDT", symbol: "৳", locale: "bn-BD", rate: 110 },
    NG: { currency: "NGN", symbol: "₦", locale: "en-NG", rate: 1500 },
    KE: { currency: "KES", symbol: "KSh", locale: "en-KE", rate: 155 },
    ZA: { currency: "ZAR", symbol: "R", locale: "en-ZA", rate: 19 },
    EG: { currency: "EGP", symbol: "£", locale: "ar-EG", rate: 48 },
    TR: { currency: "TRY", symbol: "₺", locale: "tr-TR", rate: 32 },
    PL: { currency: "PLN", symbol: "zł", locale: "pl-PL", rate: 4.0 },
    KR: { currency: "KRW", symbol: "₩", locale: "ko-KR", rate: 1340 },
    SG: { currency: "SGD", symbol: "S$", locale: "en-SG", rate: 1.34 },
    MY: { currency: "MYR", symbol: "RM", locale: "ms-MY", rate: 4.5 },
    TH: { currency: "THB", symbol: "฿", locale: "th-TH", rate: 35 },
    ID: { currency: "IDR", symbol: "Rp", locale: "id-ID", rate: 15500 },
    PH: { currency: "PHP", symbol: "₱", locale: "en-PH", rate: 56 },
    VN: { currency: "VND", symbol: "₫", locale: "vi-VN", rate: 25000 },
    CH: { currency: "CHF", symbol: "CHF", locale: "de-CH", rate: 0.88 },
}

export function getCountryCurrency(countryCode: string, tier: Tier) {
    const override = COUNTRY_CURRENCY[countryCode]
    if (override) return override
    const meta = TIER_METADATA[tier]
    return { currency: meta.currency, symbol: meta.symbol, locale: meta.locale, rate: 1 }
}

export const PRICING_DATA: Record<ServiceType, Record<PlanLevel, Record<Tier, { min: number; max: number }>>> = {
    web: {
        starter: { tier1: { min: 2000, max: 5000 }, tier2: { min: 1500, max: 4000 }, tier3: { min: 500, max: 1500 }, tier4: { min: 200, max: 600 } },
        growth: { tier1: { min: 5000, max: 15000 }, tier2: { min: 4000, max: 12000 }, tier3: { min: 1500, max: 5000 }, tier4: { min: 600, max: 1500 } },
        pro: { tier1: { min: 15000, max: 40000 }, tier2: { min: 12000, max: 30000 }, tier3: { min: 5000, max: 15000 }, tier4: { min: 1500, max: 4000 } },
        enterprise: { tier1: { min: 40000, max: 100000 }, tier2: { min: 30000, max: 80000 }, tier3: { min: 15000, max: 40000 }, tier4: { min: 4000, max: 15000 } },
    },
    mobile: {
        starter: { tier1: { min: 3000, max: 8000 }, tier2: { min: 2500, max: 6000 }, tier3: { min: 800, max: 2500 }, tier4: { min: 300, max: 800 } },
        growth: { tier1: { min: 8000, max: 25000 }, tier2: { min: 6000, max: 20000 }, tier3: { min: 2500, max: 8000 }, tier4: { min: 800, max: 2500 } },
        pro: { tier1: { min: 25000, max: 60000 }, tier2: { min: 20000, max: 50000 }, tier3: { min: 8000, max: 25000 }, tier4: { min: 2500, max: 8000 } },
        enterprise: { tier1: { min: 60000, max: 150000 }, tier2: { min: 50000, max: 120000 }, tier3: { min: 25000, max: 60000 }, tier4: { min: 8000, max: 25000 } },
    },
    bundle: {
        starter: { tier1: { min: 4000, max: 10000 }, tier2: { min: 3000, max: 8000 }, tier3: { min: 1000, max: 3000 }, tier4: { min: 400, max: 1000 } },
        growth: { tier1: { min: 10000, max: 30000 }, tier2: { min: 8000, max: 25000 }, tier3: { min: 3000, max: 10000 }, tier4: { min: 1000, max: 3000 } },
        pro: { tier1: { min: 30000, max: 80000 }, tier2: { min: 25000, max: 60000 }, tier3: { min: 10000, max: 30000 }, tier4: { min: 3000, max: 10000 } },
        enterprise: { tier1: { min: 80000, max: 200000 }, tier2: { min: 60000, max: 150000 }, tier3: { min: 30000, max: 80000 }, tier4: { min: 10000, max: 30000 } },
    },
    saas: {
        starter: { tier1: { min: 5000, max: 15000 }, tier2: { min: 4000, max: 12000 }, tier3: { min: 1500, max: 5000 }, tier4: { min: 500, max: 1500 } },
        growth: { tier1: { min: 15000, max: 40000 }, tier2: { min: 12000, max: 30000 }, tier3: { min: 5000, max: 15000 }, tier4: { min: 1500, max: 5000 } },
        pro: { tier1: { min: 40000, max: 100000 }, tier2: { min: 30000, max: 80000 }, tier3: { min: 15000, max: 40000 }, tier4: { min: 5000, max: 15000 } },
        enterprise: { tier1: { min: 100000, max: 250000 }, tier2: { min: 80000, max: 200000 }, tier3: { min: 40000, max: 100000 }, tier4: { min: 15000, max: 40000 } },
    },
    ai: {
        starter: { tier1: { min: 3000, max: 10000 }, tier2: { min: 2500, max: 8000 }, tier3: { min: 800, max: 3000 }, tier4: { min: 300, max: 1000 } },
        growth: { tier1: { min: 10000, max: 30000 }, tier2: { min: 8000, max: 25000 }, tier3: { min: 3000, max: 10000 }, tier4: { min: 1000, max: 3000 } },
        pro: { tier1: { min: 30000, max: 80000 }, tier2: { min: 25000, max: 60000 }, tier3: { min: 10000, max: 30000 }, tier4: { min: 3000, max: 10000 } },
        enterprise: { tier1: { min: 80000, max: 200000 }, tier2: { min: 60000, max: 150000 }, tier3: { min: 30000, max: 80000 }, tier4: { min: 10000, max: 30000 } },
    },
}

export function getTierFromCountry(countryCode: string): Tier {
    for (const [tier, countries] of Object.entries(TIER_COUNTRIES)) {
        if (countries.includes(countryCode)) return tier as Tier
    }
    return "tier4"
}

export function formatPrice(amount: number, currency: string, locale: string): string {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount)
}

export function formatPriceRange(min: number, max: number, currency: string, locale: string): string {
    return `${formatPrice(min, currency, locale)} – ${formatPrice(max, currency, locale)}`
}

export function countryToFlag(countryCode: string): string {
    return countryCode
        .toUpperCase()
        .split("")
        .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
        .join("")
}

export function getCountryName(countryCode: string): string {
    const names: Record<string, string> = {
        US: "United States", GB: "United Kingdom", AU: "Australia", CA: "Canada",
        NZ: "New Zealand", CH: "Switzerland", NO: "Norway", DK: "Denmark",
        SE: "Sweden", IE: "Ireland", DE: "Germany", FR: "France",
        NL: "Netherlands", ES: "Spain", IT: "Italy", PT: "Portugal",
        AE: "UAE", SG: "Singapore", JP: "Japan", KR: "South Korea",
        IN: "India", PH: "Philippines", ID: "Indonesia", MY: "Malaysia",
        TH: "Thailand", VN: "Vietnam", BR: "Brazil", MX: "Mexico",
        AR: "Argentina", CO: "Colombia", PK: "Pakistan", PL: "Poland",
        TR: "Turkey", SA: "Saudi Arabia", NG: "Nigeria", KE: "Kenya",
        GH: "Ghana", EG: "Egypt", ZA: "South Africa", BD: "Bangladesh",
    }
    return names[countryCode] || countryCode
}
