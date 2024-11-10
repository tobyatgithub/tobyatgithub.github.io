"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Code2, Database, Layout, Smartphone, Server, Cpu } from "lucide-react"

const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end web applications using modern frameworks and technologies",
    icon: Code2,
    features: ["React/Next.js", "Node.js/Express", "RESTful APIs", "Database Design"]
  },
  {
    title: "Hardware Integration",
    description: "Bridging the gap between hardware and software systems",
    icon: Cpu,
    features: ["IoT Solutions", "Embedded Systems", "Sensor Integration", "Real-time Data"]
  },
  {
    title: "Cloud Architecture",
    description: "Scalable and reliable cloud infrastructure solutions",
    icon: Server,
    features: ["AWS/GCP", "Microservices", "Docker/K8s", "CI/CD Pipelines"]
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications for iOS and Android",
    icon: Smartphone,
    features: ["React Native", "Native APIs", "App Store Deploy", "Mobile UI/UX"]
  },
  {
    title: "Database Design",
    description: "Efficient and scalable database architectures",
    icon: Database,
    features: ["SQL/NoSQL", "Data Modeling", "Performance", "Security"]
  },
  {
    title: "UI/UX Design",
    description: "Modern and intuitive user interfaces",
    icon: Layout,
    features: ["Responsive Design", "Accessibility", "User Research", "Prototyping"]
  }
]

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-200 mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions across the full technology stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-blue-500 mb-4" />
                  <CardTitle className="text-gray-200">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-gray-400 text-sm">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 