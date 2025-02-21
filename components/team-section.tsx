"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { LinkedinIcon as LinkedIn, Github } from "lucide-react"

const team = [
  {
    name: "Lohansa Munasinghe",
    role: "",
    image: "Lohansa.jpg",
    bio: "",
    linkedin: "https://www.linkedin.com/in/lohansa-munasinghe-5691961b5/",
    github: "#",
  },
  {
    name: "Surath Embuldeniya",
    role: "",
    image: "Surath.jpg",
    bio: "",
    linkedin: "https://www.linkedin.com/in/surath-embuldeniya-661020294/",
    github: "#",
  },
  {
    name: "Wishmith Dissanayaka",
    role: "",
    image: "Wishmith.jpg",
    bio: "",
    linkedin: "https://www.linkedin.com/in/wishmith-dissanayaka-b0954a294/",
    github: "#",
  },
  {
    name: "Nihil Rupasinghe",
    role: "",
    image: "Nihil.jpg",
    bio: "",
    linkedin: "https://www.linkedin.com/in/nihil-rupasinghe-01746524b/",
    github: "#",
  },
  {
    name: "Mithila Peiris",
    role: "",
    image: "Mithila.jpg",
    bio: "",
    linkedin: "https://www.linkedin.com/in/mithila-peiris-126287236/",
    github: "#",
  },
  {
    name: "Nethsilu Gunathilaka",
    role: "",
    image: "Nethsilu.jpg",
    bio: "",
    linkedin: "https://www.linkedin.com/in/nethsilu-gunathilaka-51253b294/",
    github: "#",
  },
]

export function TeamSection() {
  return (
    <div className="py-20 bg-gradient-to-br from-leaf-50 to-white">
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
                <div className="relative w-full pt-[100%] overflow-hidden bg-leaf-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: member.name === "Surath Patel" ? "center top" : "center center",
                      }}
                    />
                  </div>
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
    </div>
  )
}

