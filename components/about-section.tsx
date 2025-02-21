"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  const achievements = [
    "Pioneer in AI-powered agriculture solutions",
    "Over 1000+ farms optimized globally",
    "Sustainable farming practices",
    "Award-winning technology",
    "Expert agricultural team",
    "24/7 support system",
  ]

  return (
    <div className="py-20 bg-gradient-to-br from-white to-leaf-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space text-4xl font-bold mb-4 text-leaf-400">About SmartSprout</h2>
          <p className="text-xl text-leaf-300 max-w-2xl mx-auto">
            Revolutionizing agriculture through innovative AI solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-leaf-300">Our Mission</h3>
            <p className="text-gray-600 mb-8">
              At SmartSprout, we're committed to transforming traditional farming practices through cutting-edge
              artificial intelligence. Our mission is to empower farmers with data-driven insights and automated
              solutions that optimize crop yields while promoting sustainable agriculture.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="h-5 w-5 text-leaf-200" />
                  <span className="text-gray-600">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-20%20at%201.54.50%20PM-UEAu4ppeZBL1Bctn6oe3aHcsNmt17D.jpeg"
                alt="Smart Agriculture"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-leaf-200/20 to-leaf-300/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

