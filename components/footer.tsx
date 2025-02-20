import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-4">
              <Link href="#" className="flex items-center hover:text-primary-foreground/80">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Location</span>
              </Link>
              <Link href="#" className="flex items-center hover:text-primary-foreground/80">
                <Phone className="h-5 w-5 mr-2" />
                <span>(+71) 8522369417</span>
              </Link>
              <Link href="#" className="flex items-center hover:text-primary-foreground/80">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@example.com</span>
              </Link>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-primary-foreground/80">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-primary-foreground/80">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-primary-foreground/80">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-primary-foreground/80">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-foreground/80">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-foreground/80">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-foreground/80">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-primary-foreground/80">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-primary-foreground/80">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground/80">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-primary-foreground/90">
              Readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
            <form className="space-y-4">
              <Textarea placeholder="Enter Your Email" className="bg-primary-foreground text-primary" />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm">
            2024 All Rights Reserved. Design by{" "}
            <a href="https://html.design" className="hover:text-primary-foreground/80">
              Free html Templates
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

