import { NextResponse, type NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    const response = NextResponse.next()

    // Read geo data from Vercel headers (available on Vercel Edge)
    const country = request.headers.get("x-vercel-ip-country") || "US"
    const city = request.headers.get("x-vercel-ip-city") || "Unknown"
    const region = request.headers.get("x-vercel-ip-country-region") || "Unknown"

    // Set geo data as cookies for client-side access
    response.cookies.set("geo-country", country, { path: "/", sameSite: "lax" })
    response.cookies.set("geo-city", decodeURIComponent(city), { path: "/", sameSite: "lax" })
    response.cookies.set("geo-region", region, { path: "/", sameSite: "lax" })

    // Security headers
    response.headers.set("X-Frame-Options", "DENY")
    response.headers.set("X-XSS-Protection", "1; mode=block")

    return response
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
}
