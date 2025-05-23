import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@/components/analytics"
import Script from "next/script"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hole In One Ventures - Backing Founders Taking Big Swings",
  description:
    "An early stage fund designed for the bold. We champion those who take high-conviction shots with clarity, courage, and calculated risk.",
  keywords: "venture capital, startup funding, early stage, investment, founders",
  authors: [{ name: "Hole In One Ventures" }],
  openGraph: {
    title: "Hole In One Ventures - Backing Founders Taking Big Swings",
    description:
      "An early stage fund designed for the bold. We champion those who take high-conviction shots with clarity, courage, and calculated risk.",
    url: "https://holeinoneventures.com",
    siteName: "Hole In One Ventures",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hole In One Ventures - Backing Founders Taking Big Swings",
    description: "An early stage fund designed for the bold.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
