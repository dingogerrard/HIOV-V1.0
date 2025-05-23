import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  // Sample portfolio companies
  const companies = [
    {
      name: "GreenTech Solutions",
      description: "Sustainable energy solutions for commercial buildings",
      category: "CleanTech",
      year: 2021,
      logo: "🌱",
    },
    {
      name: "DataDrive AI",
      description: "AI-powered analytics platform for business intelligence",
      category: "AI/ML",
      year: 2022,
      logo: "🤖",
    },
    {
      name: "MedConnect",
      description: "Telehealth platform connecting patients with specialists",
      category: "HealthTech",
      year: 2020,
      logo: "🏥",
    },
    {
      name: "FinanceFlow",
      description: "Next-generation payment processing for global commerce",
      category: "FinTech",
      year: 2021,
      logo: "💰",
    },
    {
      name: "EduSpark",
      description: "Interactive learning platform for K-12 education",
      category: "EdTech",
      year: 2022,
      logo: "🎓",
    },
    {
      name: "SupplyChain+",
      description: "Blockchain-based supply chain management solution",
      category: "Logistics",
      year: 2021,
      logo: "🔗",
    },
  ]

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
            <Link href="/#philosophy" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Philosophy
            </Link>
            <Link href="/#experience" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Experience
            </Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/" passHref>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Home</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            We invest in exceptional founders building category-defining companies across various sectors.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{company.logo}</div>
                  <CardTitle>{company.name}</CardTitle>
                  <CardDescription>
                    {company.category} • Invested {company.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{company.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
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
                <Link href="/#philosophy" className="block text-gray-400 hover:text-white transition-colors">
                  Investment Philosophy
                </Link>
                <Link href="/#experience" className="block text-gray-400 hover:text-white transition-colors">
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
    </div>
  )
}
