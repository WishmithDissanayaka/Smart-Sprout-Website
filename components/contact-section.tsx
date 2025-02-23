"use client"

import type React from "react"
import emailjs from "emailjs-com"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

// Declare emailjs on window object
declare global {
  interface Window {
    emailjs: any
  }
}

interface FormData {
  contact_number: string
  user_name: string
  user_email: string
  message: string
}

export function ContactSection() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    contact_number: "697483", // Using static number as in the example
    user_name: "",
    user_email: "",
    message: "",
  })

  // Initialize EmailJS
  emailjs.init("P9cl-TzSihD6Yytn2")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    window.emailjs.sendForm("contact_service", "contact_form", e.currentTarget)
      .then(() => {
        console.log("SUCCESS!")
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        })
        // Clear the form
        setFormData({
          contact_number: "697483",
          user_name: "",
          user_email: "",
          message: "",
        })
      })
      .catch((error: any) => {
        console.log("FAILED...", error)
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        })
      })
      .finally(() => {
        setIsSubmitting(false)
      })
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
                  <p className="text-gray-600">contactsmartsprout@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-leaf-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-leaf-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-leaf-400 mb-1">Call Us</h3>
                  <p className="text-gray-600">+94 76 237 9491</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-leaf-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-leaf-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-leaf-400 mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    Rajagiriya, Sri Lanka
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
            <form id="contact_form" onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden contact number field required by EmailJS */}
              <input type="hidden" name="contact_number" value={formData.contact_number} />

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <Input
                    name="user_name"
                    placeholder="Your Name"
                    value={formData.user_name}
                    onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                    className="bg-white border-leaf-200 focus:border-leaf-300"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="user_email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.user_email}
                    onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                    className="bg-white border-leaf-200 focus:border-leaf-300"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white border-leaf-200 focus:border-leaf-300"
                    rows={4}
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-leaf-200 to-leaf-300 text-white hover:from-leaf-300 hover:to-leaf-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

