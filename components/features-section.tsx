"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { TreesIcon as Plant, Brain, BarChart3, Cloud, Users, Sprout } from "lucide-react"

const features = [
  {
    icon: <Plant className="h-8 w-8" />,
    title: "Crop Monitoring",
    description: "Real-time monitoring of crop health using advanced sensors and AI analysis",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI Predictions",
    description: "Predictive analytics for optimal planting and harvesting times",
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Yield Optimization",
    description: "Data-driven insights to maximize crop yields and reduce waste",
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Weather Integration",
    description: "Smart weather forecasting and automated climate response",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Network",
    description: "Connect with agricultural experts and share knowledge",
  },
  {
    icon: <Sprout className="h-8 w-8" />,
    title: "Sustainable Farming",
    description: "Eco-friendly practices optimized by artificial intelligence",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-leaf-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space text-4xl font-bold mb-4 text-leaf-400">Intelligent Agriculture Solutions</h2>
          <p className="text-xl text-leaf-300 max-w-2xl mx-auto">
            Leverage cutting-edge AI technology to revolutionize your farming practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-leaf-100 to-leaf-200/30 flex items-center justify-center text-leaf-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-space text-xl font-semibold mb-2 text-leaf-400">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}