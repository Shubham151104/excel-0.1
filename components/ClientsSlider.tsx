"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const clients = [
  { name: "Client 1", logo: "/client1.jpg" },
  { name: "Client 2", logo: "/client2.jpg" },
  { name: "Client 3", logo: "/client3.jpeg" },
  { name: "Client 4", logo: "/logo4.png" },
]

// Duplicate the list to create a seamless looping effect
const duplicatedClients = [...clients, ...clients]

export default function ClientsSlider() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    let animationFrame

    const scroll = () => {
      if (scrollElement) {
        scrollElement.scrollLeft += 1 // Adjust speed here
        if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
          scrollElement.scrollLeft = 0 // Reset seamlessly when halfway through
        }
      }
      animationFrame = requestAnimationFrame(scroll)
    }

    animationFrame = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <div className="bg-green-500 py-8 flex justify-center">
      <div className="w-full max-w-4xl mx-auto px-4">
        <h3 className="text-white text-xl text-center mb-4">Our Clients</h3>
        <div
          ref={scrollRef}
          className="flex overflow-hidden whitespace-nowrap space-x-24 px-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-44 h-24 bg-white rounded-lg flex items-center justify-center p-4 shadow-md mx-8"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
