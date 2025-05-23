"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_path: pathname,
      })
    }
  }, [pathname])

  // Track custom events
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, parameters)
    }
  }

  // Track contact form opens
  useEffect(() => {
    const handleContactFormOpen = () => {
      trackEvent("contact_form_open", {
        event_category: "engagement",
        event_label: "contact_form",
      })
    }

    // Track button clicks
    const handleButtonClick = (event: Event) => {
      const target = event.target as HTMLElement
      if (target.tagName === "BUTTON" || target.closest("button")) {
        const buttonText = target.textContent || target.closest("button")?.textContent
        trackEvent("button_click", {
          event_category: "engagement",
          event_label: buttonText,
        })
      }
    }

    document.addEventListener("click", handleButtonClick)
    document.addEventListener("contactFormOpen", handleContactFormOpen)

    return () => {
      document.removeEventListener("click", handleButtonClick)
      document.removeEventListener("contactFormOpen", handleContactFormOpen)
    }
  }, [])

  return null
}
