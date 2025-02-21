"use client"

import { ImageSlider } from "@/components/image-slider"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section with Image Slider */}
      <section id="hero" className="relative">
        <ImageSlider />
      </section>

      {/* Features Section */}
      <section id="features">
        <FeaturesSection />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Team Section */}
      <section id="team">
        <TeamSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  )
}

