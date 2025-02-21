"use client"
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react"

const navigation = [
  { name: "Home", href: "hero" },
  { name: "Features", href: "features" },
  { name: "About", href: "about" },
  { name: "Team", href: "team" },
  { name: "Contact", href: "contact" },
]

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Height of the header
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <footer className="bg-leaf-400 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>123 Innovation Drive, Tech Valley, CA 94043</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(+1) 555-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>contact@smartsprout.com</span>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="hover:text-leaf-100 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-leaf-100 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-leaf-100 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-leaf-100 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button onClick={() => scrollToSection(item.href)} className="hover:text-leaf-100 transition-colors">
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">About SmartSprout</h2>
            <p className="text-leaf-50/90 leading-relaxed">
              SmartSprout is revolutionizing agriculture through AI-powered solutions. We're committed to sustainable
              farming practices and helping farmers optimize their yields while reducing environmental impact.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-leaf-300">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-leaf-50">
            © {new Date().getFullYear()} SmartSprout. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

