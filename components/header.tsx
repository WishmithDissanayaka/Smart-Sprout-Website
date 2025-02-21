"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "hero" },
  { name: "Features", href: "features" },
  { name: "About", href: "about" },
  { name: "Team", href: "team" },
  { name: "Contact", href: "contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  const scrollToSection = (sectionId: string) => {
    // First close the mobile menu
    setIsOpen(false)

    // Wait for menu close animation to complete
    setTimeout(() => {
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
    }, 300) // Wait for menu animation
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-transform duration-300 bg-white/80 backdrop-blur-md shadow-sm",
        visible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection("hero")} className="flex items-center space-x-2">
            <span className="font-space font-bold text-2xl bg-gradient-to-r from-leaf-200 to-leaf-300 bg-clip-text text-transparent">
              SmartSprout
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-leaf-400 hover:text-leaf-200 transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button className="bg-gradient-to-r from-leaf-200 to-leaf-300 text-white hover:from-leaf-300 hover:to-leaf-400 transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 text-leaf-400" /> : <Menu className="h-6 w-6 text-leaf-400" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white absolute left-0 right-0 top-20 border-b border-leaf-100"
            >
              <div className="py-4 space-y-1 container mx-auto px-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-leaf-400 hover:text-leaf-200 hover:bg-leaf-50 transition-colors rounded-md"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-2">
                  <Button className="w-full bg-gradient-to-r from-leaf-200 to-leaf-300 text-white hover:from-leaf-300 hover:to-leaf-400 transition-all duration-300">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

