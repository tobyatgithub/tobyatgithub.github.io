"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Cpu, Globe, Bot, Layers } from "lucide-react"

const projects = [
  {
    title: "Smart Home Hub",
    description: "Open-source hardware platform for home automation",
    icon: Cpu,
    color: "text-blue-500"
  },
  {
    title: "AI Assistant",
    description: "Personal productivity assistant powered by machine learning",
    icon: Bot,
    color: "text-green-500"
  },
  {
    title: "IoT Platform",
    description: "Cloud infrastructure for connected devices",
    icon: Globe,
    color: "text-indigo-500"
  },
  {
    title: "Developer Tools",
    description: "Suite of tools for modern web development",
    icon: Layers,
    color: "text-purple-500"
  }
]

const CurrentlyBuildingSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-200 mb-4">
            Currently Building
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring the intersection of hardware and software through these ongoing projects
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader>
                  <div className={`${project.color} mb-4`}>
                    <project.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-gray-200">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurrentlyBuildingSection 