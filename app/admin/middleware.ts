import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const adminAuth = request.cookies.get("admin-auth")

  if (!adminAuth || adminAuth.value !== "authenticated") {
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/admin/:path*",
}
