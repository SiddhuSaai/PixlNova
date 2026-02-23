"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { getTierFromCountry, getCountryCurrency, countryToFlag, getCountryName, type Tier } from "@/lib/geo"

interface GeoState {
    country: string
    countryCode: string
    city: string
    tier: Tier
    currency: string
    symbol: string
    locale: string
    flag: string
    rate: number
    loading: boolean
}

const GeoContext = createContext<GeoState | null>(null)

// ── Timezone → Country fallback (for local dev without Vercel headers) ──
const TZ_TO_COUNTRY: Record<string, string> = {
    "Asia/Kolkata": "IN", "Asia/Calcutta": "IN",
    "Asia/Mumbai": "IN", "Asia/Chennai": "IN",
    "America/New_York": "US", "America/Chicago": "US",
    "America/Los_Angeles": "US", "America/Denver": "US",
    "Europe/London": "GB", "Europe/Berlin": "DE",
    "Europe/Paris": "FR", "Europe/Madrid": "ES",
    "Europe/Rome": "IT", "Europe/Amsterdam": "NL",
    "Asia/Tokyo": "JP", "Asia/Seoul": "KR",
    "Asia/Singapore": "SG", "Asia/Shanghai": "CN",
    "Asia/Dubai": "AE", "Asia/Riyadh": "SA",
    "Australia/Sydney": "AU", "Australia/Melbourne": "AU",
    "Pacific/Auckland": "NZ",
    "America/Toronto": "CA", "America/Vancouver": "CA",
    "America/Sao_Paulo": "BR", "America/Mexico_City": "MX",
    "America/Argentina/Buenos_Aires": "AR",
    "Africa/Lagos": "NG", "Africa/Nairobi": "KE",
    "Africa/Cairo": "EG", "Africa/Johannesburg": "ZA",
    "Asia/Karachi": "PK", "Asia/Dhaka": "BD",
    "Asia/Bangkok": "TH", "Asia/Jakarta": "ID",
    "Asia/Manila": "PH", "Asia/Ho_Chi_Minh": "VN",
    "Asia/Kuala_Lumpur": "MY", "Europe/Istanbul": "TR",
    "Europe/Warsaw": "PL", "Europe/Bucharest": "RO",
    "Europe/Stockholm": "SE", "Europe/Oslo": "NO",
    "Europe/Copenhagen": "DK", "Europe/Helsinki": "FI",
    "Europe/Dublin": "IE", "Europe/Zurich": "CH",
    "Europe/Vienna": "AT", "Europe/Prague": "CZ",
    "Europe/Budapest": "HU", "Europe/Lisbon": "PT",
    "Asia/Colombo": "LK", "Asia/Kathmandu": "NP",
    "Asia/Taipei": "TW", "Asia/Hong_Kong": "HK",
    "Asia/Tel_Aviv": "IL", "Asia/Jerusalem": "IL",
    "America/Bogota": "CO", "America/Santiago": "CL",
    "Africa/Accra": "GH", "Africa/Dar_es_Salaam": "TZ",
}

function detectCountryFromTimezone(): string {
    try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
        return TZ_TO_COUNTRY[tz] || "US"
    } catch {
        return "US"
    }
}

export function GeoProvider({ children }: { children: ReactNode }) {
    const [geo, setGeo] = useState<GeoState>({
        country: "",
        countryCode: "",
        city: "",
        tier: "tier1",
        currency: "USD",
        symbol: "$",
        locale: "en-US",
        flag: "",
        rate: 1,
        loading: true,
    })

    useEffect(() => {
        const cookies = Object.fromEntries(
            document.cookie.split("; ").filter(Boolean).map((c) => c.split("=").map(decodeURIComponent))
        )

        // Use cookie if set by Vercel edge, otherwise fall back to timezone detection
        const cookieCountry = cookies["geo-country"]
        const countryCode = cookieCountry && cookieCountry !== "US"
            ? cookieCountry
            : detectCountryFromTimezone()

        const tier = getTierFromCountry(countryCode)
        const currencyInfo = getCountryCurrency(countryCode, tier)

        setGeo({
            country: getCountryName(countryCode),
            countryCode,
            city: cookies["geo-city"] || "",
            tier,
            currency: currencyInfo.currency,
            symbol: currencyInfo.symbol,
            locale: currencyInfo.locale,
            flag: countryToFlag(countryCode),
            rate: currencyInfo.rate,
            loading: false,
        })
    }, [])

    return <GeoContext.Provider value={geo}>{children}</GeoContext.Provider>
}

export function useGeo() {
    const ctx = useContext(GeoContext)
    if (!ctx) throw new Error("useGeo must be used within GeoProvider")
    return ctx
}
