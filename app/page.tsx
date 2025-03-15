"use client"

import { ImageSlider } from "@/components/image-slider"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { BlogSection } from "@/components/blog-page"

export function BlogPage() {
  return (
    <div>
      <BlogSection />
    </div>
  );
}

export default function Home() {
  return (
    <div className="pt-20">
      <section id="hero" className="relative">
        <ImageSlider />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="team">
        <TeamSection />
      </section>

      <section id="blog">
        <BlogSection/>
      </section>

      <section id="contact">
        <ContactSection />
      </section>


    </div>
  )
}

