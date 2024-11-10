"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Smart Home Dashboard",
    description: "A real-time dashboard for monitoring and controlling IoT devices in smart homes. Features include device management, automation rules, and energy consumption analytics.",
    image: "/projects/smart-home.jpg",
    tags: ["Next.js", "TypeScript", "WebSocket", "MongoDB", "TailwindCSS"],
    githubUrl: "https://github.com/tobyatgithub/smart-home-dashboard",
    liveUrl: "https://smart-home-dashboard.demo",
  },
  {
    title: "AI Code Review Assistant",
    description: "An AI-powered tool that helps developers review code by analyzing pull requests, suggesting improvements, and detecting potential bugs using machine learning.",
    image: "/projects/code-review.jpg",
    tags: ["Python", "FastAPI", "React", "Docker", "OpenAI"],
    githubUrl: "https://github.com/tobyatgithub/ai-code-review",
    liveUrl: "https://ai-code-review.demo",
  },
  {
    title: "Hardware Monitor Pro",
    description: "A cross-platform desktop application for monitoring hardware performance metrics, including CPU, GPU, memory usage, and temperature sensors.",
    image: "/projects/hardware-monitor.jpg",
    tags: ["Electron", "React", "Node.js", "C++", "Hardware APIs"],
    githubUrl: "https://github.com/tobyatgithub/hardware-monitor",
    liveUrl: "https://hardware-monitor.demo",
  },
  {
    title: "DevOps Pipeline Builder",
    description: "A visual tool for creating and managing CI/CD pipelines with drag-and-drop interfaces, template management, and integration with popular CI/CD platforms.",
    image: "/projects/pipeline-builder.jpg",
    tags: ["Vue.js", "TypeScript", "Node.js", "Docker", "Jenkins API"],
    githubUrl: "https://github.com/tobyatgithub/pipeline-builder",
    liveUrl: "https://pipeline-builder.demo",
  }
]

const ProjectsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-200 mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-gray-200">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection 