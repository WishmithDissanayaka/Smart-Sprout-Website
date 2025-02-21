"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log(formData)
  }

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
          <h2 className="font-space text-4xl font-bold mb-4 text-leaf-400">Get in Touch</h2>
          <p className="text-xl text-leaf-300 max-w-2xl mx-auto">Have questions? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-leaf-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-leaf-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-leaf-400 mb-1">Email Us</h3>
                  <p className="text-gray-600">contact@smartsprout.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-leaf-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-leaf-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-leaf-400 mb-1">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-leaf-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-leaf-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-leaf-400 mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Innovation Drive
                    <br />
                    Tech Valley, CA 94043
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white border-leaf-200 focus:border-leaf-300"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white border-leaf-200 focus:border-leaf-300"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-white border-leaf-200 focus:border-leaf-300"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white border-leaf-200 focus:border-leaf-300"
                    rows={4}
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-leaf-200 to-leaf-300 text-white hover:from-leaf-300 hover:to-leaf-400"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

