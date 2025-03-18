import Image from "next/image";
import { Button } from "@/components/ui/button";

const components = [
  {
    id: 1,
    title: "Heat Exchanger",
    description: "Efficient heat transfer for industrial applications.",
    image: "/component1.jpg"
  },
  {
    id: 2,
    title: "Steam Boiler",
    description: "High-capacity steam boiler with advanced safety features.",
    image: "/component2.jpg"
  },
  {
    id: 3,
    title: "Water Pump",
    description: "High-performance pump for optimal water circulation.",
    image: "/component3.jpg"
  },
  {
    id: 4,
    title: "Pressure Vessel",
    description: "Durable and reliable pressure vessel for various industries.",
    image: "/component4.jpg"
  },
  {
    id: 5,
    title: "Burner System",
    description: "Precision-engineered burner for efficient fuel combustion.",
    image: "/component5.jpg"
  },
  {
    id: 6,
    title: "Condensate Tank",
    description: "Designed for efficient condensate recovery and storage.",
    image: "/component6.jpg"
  }
];

export default function ComponentsPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Components</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component) => (
            <div key={component.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image 
                  src={component.image} 
                  alt={component.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{component.title}</h2>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
