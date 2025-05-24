"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Handshake, TrendingUp, Mail, MapPin } from 'lucide-react'
import Link from "next/link"
import { GolfAnimation } from "@/components/golf-animation"
import { MobileNav } from "@/components/mobile-nav"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function PageWithContact() {
  const { scrollToSection } = useSmoothScroll()

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
          </nav>
          <MobileNav />
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
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-3 rounded-md transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Philosophy */}
        <section id="philosophy" className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Investment Philosophy</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {
                    'Gary Player once said, "Drive for show and putt for dough." We believe great founders do both: they capture attention with bold vision and deliver with disciplined execution.'
                  }
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <Target className="h-12 w-12 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Precision & Vision</h3>
                    <p className="text-gray-600">
                      Just as it takes more than luck to hit a hole-in-one, it takes more than hype to build a unicorn.
                      We invest in founders with clarity of purpose.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <TrendingUp className="h-12 w-12 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Bold Execution</h3>
                    <p className="text-gray-600">
                      We back ambitious founders who aren't laying up. Those who bend rules, break conventions, and
                      believe the biggest wins come from the boldest moves.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">We invest in founders who:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Bend the rules but aren't afraid to break conventions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Understand the only thing stopping them is themselves</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Believe that the biggest wins come from the boldest moves</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Hole In One Experience */}
        <section id="experience" className="py-20 bg-gradient-to-br from-emerald-50 to-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Hole In One Experience</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {"We're more than capital. We're a community of competitors, collaborators, and contrarians."}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-8 text-center">
                    <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Annual Summit</h3>
                    <p className="text-gray-600">
                      Our LP and founder gathering at world-class resorts, blending strategy with shared ambition. A
                      celebration of doing what you love and doing it well.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-8 text-center">
                    <Target className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Support</h3>
                    <p className="text-gray-600">
                      From first pitch to product-market fit, we offer hands-on support across go-to-market, token
                      design, fundraising, and beyond.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-8 text-center">
                    <Handshake className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">True Partnership</h3>
                    <p className="text-gray-600">
                      Think of us as your caddie: part strategist, part steady hand, always in your corner when it
                      matters most.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Us?</h2>
              <div className="space-y-6 text-lg text-gray-600 mb-12">
                <p>Because you're not swinging for average.</p>
                <p>Because you want partners who play with purpose.</p>
                <p>Because you believe that doing something rare is worth everything.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 bg-gray-50">
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
                  <a href="mailto:hello@holeinoneventures.com" className="hover:text-white transition-colors">
                    hello@holeinoneventures.com
                  </a>
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
                <button
                  onClick={() => scrollToSection("philosophy")}
                  className="block text-gray-400 hover:text-white transition-colors text-left"
                >
                  Investment Philosophy
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="block text-gray-400 hover:text-white transition-colors text-left"
                >
                  Experience
                </button>
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
    </div>
  )
}