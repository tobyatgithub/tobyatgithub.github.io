import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-400 hover:text-gray-200">
                Home
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-gray-200">
                Projects
              </Link>
              <Link href="/content" className="text-gray-400 hover:text-gray-200">
                Content
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-gray-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/YourGitHub"
                className="text-gray-400 hover:text-gray-200"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/YourLinkedIn"
                className="text-gray-400 hover:text-gray-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Toby Huang. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 