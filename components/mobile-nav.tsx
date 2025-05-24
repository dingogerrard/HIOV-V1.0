"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Link from "next/link"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const { scrollToSection } = useSmoothScroll()

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          <button
            onClick={() => handleNavClick("philosophy")}
            className="text-left text-lg font-medium text-gray-600 hover:text-emerald-600 transition-colors"
          >
            Philosophy
          </button>
          <button
            onClick={() => handleNavClick("experience")}
            className="text-left text-lg font-medium text-gray-600 hover:text-emerald-600 transition-colors"
          >
            Experience
          </button>
          <Link
            href="/portfolio"
            className="text-lg font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Portfolio
          </Link>
          <a
            href="mailto:hello@holeinoneventures.com"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded text-center"
            onClick={() => setOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}