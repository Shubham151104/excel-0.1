import Image from "next/image"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/ContactForm"

export default function AboutPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">About Excel Engineers</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg mb-6">
              Excel Engineers is a leading manufacturer of high-pressure boiler parts and components, serving industries
              worldwide since 2005. Our commitment to quality, innovation, and customer satisfaction has made us a
              trusted partner in the boiler manufacturing industry.
            </p>
            <p className="text-lg mb-6">
              With state-of-the-art facilities and a team of expert engineers, we deliver precision-engineered solutions
              that meet the highest standards of performance and reliability.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/about1.jpeg?height=400&width=600"
              alt="Excel Engineers Facility"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {["Quality", "Innovation", "Customer Focus"].map((value) => (
            <div key={value} className="bg-white rounded-lg p-6 shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">{value}</h3>
              <p>Brief description of how we embody this value in our work and products.</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <ContactForm />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work with Us?</h2>
          <Button size="lg" asChild>
            <a href="/contact">Learn More About Our Services</a>
          </Button>
        </div>
      </div>
    </main>
  )
}

