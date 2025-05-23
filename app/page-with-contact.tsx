"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { GolfAnimation } from "@/components/golf-animation"
import { ContactForm } from "@/components/contact-form"
import { MobileNav } from "@/components/mobile-nav"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function PageWithContact() {
  const [contactOpen, setContactOpen] = useState(false)
  const [contactButtonText, setContactButtonText] = useState("Submit")

  const { scrollToSection } = useSmoothScroll()

  const openContact = (buttonText = "Submit") => {
    setContactButtonText(buttonText)
    setContactOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">Hole In One Ventures</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("philosophy")}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Experience
            </button>
            <Link href="/portfolio" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Portfolio
            </Link>
            <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => openContact("Get In Touch")}>
              Get In Touch
            </Button>
          </nav>
          <MobileNav onContactClick={() => openContact("Get In Touch")} />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-gray-50"></div>
          <div className="container mx-auto px-4 lg:px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <GolfAnimation />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Backing founders taking <span className="text-emerald-600">big swings</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                An early stage fund designed for the bold. We champion those who take high-conviction shots with
                clarity, courage, and calculated risk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3"
                  onClick={() => openContact("Partner With Us")}
                >
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  onClick={() => (window.location.href = "/portfolio")}
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections remain the same */}
        {/* ... */}

        {/* Why Us */}
        <section id="philosophy" className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Us?</h2>
              <div className="space-y-6 text-lg text-gray-600 mb-12">
                <p>Because you're not swinging for average.</p>
                <p>Because you want partners who play with purpose.</p>
                <p>Because you believe that doing something rare is worth everything.</p>
              </div>
              <div className="bg-emerald-600 text-white rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{"Let's build the future."}</h3>
                <p className="text-xl mb-8 text-emerald-100">One swing at a time.</p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-emerald-600 hover:bg-gray-100"
                  onClick={() => openContact("Start the Conversation")}
                >
                  Start the Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section id="experience" className="py-20 bg-gradient-to-br from-emerald-50 to-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-6 italic">
                {'"Success in this game depends less on strength of body than strength of mind and character."'}
              </blockquote>
              <cite className="text-lg text-gray-600">— Arnold Palmer</cite>
              <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
                We look for founders with that mental fortitude, the kind who rise to the moment and shape the outcome.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-xl font-bold">Hole In One Ventures</span>
              </div>
              <p className="text-gray-400">Backing founders taking big swings.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@holeinoneventures.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <div className="space-y-2">
                <Link href="#philosophy" className="block text-gray-400 hover:text-white transition-colors">
                  Investment Philosophy
                </Link>
                <Link href="#experience" className="block text-gray-400 hover:text-white transition-colors">
                  Experience
                </Link>
                <Link href="/portfolio" className="block text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Hole In One Ventures. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm open={contactOpen} onOpenChange={setContactOpen} buttonText={contactButtonText} />
    </div>
  )
}
