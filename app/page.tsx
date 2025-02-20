"use client"

import { ImageSlider } from "@/components/image-slider"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section with Image Slider */}
      <section id="hero">
        <ImageSlider />
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

