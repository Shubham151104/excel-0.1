"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="relative w-[140px] h-[52px]">
          <Image
            src="/logoee1.png?height=52&width=140"
            alt="Excel Engineers Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <nav
          className={`lg:flex ${isMenuOpen ? "flex" : "hidden"} flex-col lg:flex-row absolute lg:relative top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none`}
        >
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
            <li>
              <Link href="/" className="text-gray-800 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-800 hover:text-blue-600">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/components" className="text-gray-800 hover:text-blue-600">
                Components
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-800 hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-gray-800 hover:text-blue-600">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-800 hover:text-blue-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-800 hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="tel:+919442142112" className="hidden lg:flex items-center text-blue-600 hover:text-blue-700">
            <Phone className="w-4 h-4 mr-2" />
            <span>Call: +91 9408299665</span>
          </a>
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

