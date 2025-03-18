import HeroSlider from "@/components/HeroSlider"
import ClientsSlider from "@/components/ClientsSlider"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import StatCounter from "@/components/StatCounter"

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <ClientsSlider />

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                We have <span className="text-blue-600">designed, manufactured</span> and{" "}
                <span className="text-blue-600">delivered</span> high pressure boiler & boiler components, since 2005,
                across the globe.
              </h2>
              <p className="text-gray-600 mb-8">
                Excel Engineers specializes in manufacturing high-quality boiler components with a focus on innovation
                and reliability. Our state-of-the-art facility ensures precision manufacturing of critical components.
              </p>
              <Button asChild>
                <a href="/about">Learn More About Us</a>
              </Button>
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
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-100 py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { id: 1, image: "/component1.jpg?height=300&width=400", title: "High-Efficiency Boiler", description: "Designed for superior energy efficiency and long-lasting performance." },
        { id: 2, image: "/component2.jpg?height=300&width=400", title: "Industrial Heat Exchanger", description: "Advanced heat exchanger technology for industrial applications." },
        { id: 3, image: "/component3.jpg?height=300&width=400", title: "Steam Generator", description: "High-capacity steam generator with optimal thermal efficiency." },
        { id: 4, image: "/component4.jpg?height=300&width=400", title: "Pressure Vessel", description: "Built with high-strength materials for superior durability." },
        { id: 5, image: "/component5.jpg?height=300&width=400", title: "Condensate Return System", description: "Maximizes energy savings by recovering steam condensate." },
        { id: 6, image: "/component6.jpg?height=300&width=400", title: "Water Treatment Unit", description: "Ensures clean and pure water supply for boiler efficiency." },
      ].map((item) => (
        <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="relative h-64">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <Button variant="outline" className="mt-4" asChild>
              <a href="/components">Learn More</a>
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCounter end={150} label="Projects Completed" />
            <StatCounter end={50} label="Expert Engineers" />
            <StatCounter end={20} label="Years Experience" />
            <StatCounter end={100} label="Happy Clients" />
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, image: "/project1.jpeg?height=400&width=600", title: "Green Energy Plant", location: "Berlin, Germany" },
              { id: 2, image: "/project2.jpg?height=400&width=600", title: "Smart City Infrastructure", location: "New York, USA" },
              { id: 3, image: "/project1.jpg?height=400&width=600", title: "Solar Power Grid", location: "Dubai, UAE" },
            ].map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg">
                <div className="relative h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p>Location: {project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <a href="/projects">View All Projects</a>
            </Button>
          </div>
        </div>
      </section>


      {/* Certifications */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md w-48 h-48 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt={`Certification ${item}`}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Contact us today for a consultation</p>
          <Button
            variant="outline"
            size="lg"
            className="text-black border-white hover:bg-white hover:text-blue-600"
            asChild
          >
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </main>
  )
}

