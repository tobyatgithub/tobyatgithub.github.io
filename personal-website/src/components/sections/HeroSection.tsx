"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-3xl mx-auto text-center">
        {/* Animated heading */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-200 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Building Smart Solutions for the Future
        </motion.h1>

        {/* Animated subheading */}
        <motion.p 
          className="text-xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full-stack developer specializing in hardware-software integration
          and modern web applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-gray-700 text-gray-200">
            Get in Touch
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            href="https://github.com/YourGitHub"
            className="text-gray-400 hover:text-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link 
            href="https://linkedin.com/in/YourLinkedIn"
            className="text-gray-400 hover:text-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection 