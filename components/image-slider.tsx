"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/bg.jpg",
    title: "Smart Agriculture Solutions",
    description: "Transform your farming with AI-powered insights",
  },
  {
    image: "/bg2.jpg",
    title: "Sustainable Farming",
    description: "Optimize yields while protecting the environment",
  },
  {
    image: "/bg3.jpg",
    title: "Data-Driven Growth",
    description: "Make informed decisions with real-time analytics",
  },
]

export function ImageSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image || "bg.jpg"}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl"
              >
                {slides[current].description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 transition-colors p-2 rounded-full text-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 transition-colors p-2 rounded-full text-white"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === current ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}

