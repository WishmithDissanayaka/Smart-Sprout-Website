"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { LinkedinIcon as LinkedIn, Twitter, Github } from "lucide-react"

const team = [
  {
    name: "Lohansa Munasinghe",
    role: "Chief Executive Officer",
    image: "/placeholder.svg",
    bio: "Ph.D. in Agricultural Science with 15+ years of experience in AgTech",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Surath Embuldeniya",
    role: "Chief Technology Officer",
    image: "/placeholder.svg",
    bio: "AI specialist with expertise in machine learning and agricultural systems",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Wishmith Dissanayaka",
    role: "Head of Agriculture",
    image: "/placeholder.svg",
    bio: "Agricultural expert specializing in sustainable farming practices",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Nihil Hesara",
    role: "Lead Data Scientist",
    image: "/placeholder.svg",
    bio: "Expert in agricultural data analysis and predictive modeling",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Mithila Peiris",
    role: "Research Director",
    image: "/placeholder.svg",
    bio: "Leading research initiatives in agricultural innovation and sustainability",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Nethsilu Gunathilake",
    role: "Head of Operations",
    image: "/placeholder.svg",
    bio: "Operations expert ensuring smooth deployment of agricultural solutions",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-white to-leaf-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space text-4xl font-bold mb-4 text-leaf-400">Meet Our Team</h2>
          <p className="text-xl text-leaf-300 max-w-2xl mx-auto">
            Expert professionals dedicated to revolutionizing agriculture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-leaf-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-gradient-to-b from-leaf-50 to-white">
                  <h3 className="font-space text-xl font-bold text-leaf-400 mb-1">{member.name}</h3>
                  <p className="text-leaf-300 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-leaf-200 hover:text-leaf-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedIn className="h-5 w-5" />
                    </a>
                    <a
                      href={member.twitter}
                      className="text-leaf-200 hover:text-leaf-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={member.github}
                      className="text-leaf-200 hover:text-leaf-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

