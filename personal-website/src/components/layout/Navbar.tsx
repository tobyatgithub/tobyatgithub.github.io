"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Github, Linkedin, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Content", href: "/content" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const NavLinks = () => (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
            ${pathname === item.href
              ? "text-blue-500 bg-blue-500/10"
              : "text-gray-200 hover:text-blue-500"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </>
  )

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-[#0F172A]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-bold text-gray-200">
            Toby Huang
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://github.com/tobyatgithub"
              className="text-gray-400 hover:text-gray-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/tobyatlarge"
              className="text-gray-400 hover:text-gray-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-gray-200" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#0F172A] border-gray-800">
                <div className="flex flex-col space-y-4 mt-8">
                  <NavLinks />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 