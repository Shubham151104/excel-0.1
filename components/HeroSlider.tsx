"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
const slides = [
  {
    title: "Trusted by",
    subtitle: "Top 10 Boiler Manufacturers.",
    description: "Everyday!",
    tagline: "An Award-Winning Company",
    buttonText: "Explore",
    buttonLink: "/about",
    /* TODO: Replace with actual image
       Current image from ribo.in: Cement production facility */
    image: "/front1.jpg?height=1080&width=1920",
  },
  {
    title: "Excellence in",
    subtitle: "Boiler Manufacturing",
    description: "Since 2005",
    tagline: "ISO 9001:2015 Certified",
    buttonText: "Learn More",
    buttonLink: "/about",
    /* TODO: Replace with actual image
       Current image from ribo.in: Industrial boiler setup */
    image: "/front2.jpg?height=1080&width=1920",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen mt-[76px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={slide.image || "/front1.jpg"} alt={slide.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <p className="text-green-400 mb-4">{slide.tagline}</p>
                <h1 className="text-5xl font-bold mb-2">
                  {slide.title} <br />
                  <span className="text-green-400">{slide.subtitle}</span>
                </h1>
                <p className="text-3xl mb-8">{slide.description}</p>
                <Link href={slide.buttonLink}>
                  <Button 
                    variant="outline" 
                    className="text-black border-white bg-white hover:bg-green-400 hover:text-white hover:border-green-400 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  >
                    {slide.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-green-400" : "bg-white"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-green-400 transition-colors duration-200 bg-black/20 p-2 rounded-full hover:bg-black/40"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </section>
  )
}

