import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Solar Power Plant",
    description: "A renewable energy project harnessing solar power.",
    image: "/project1.jpeg"
  },
  {
    id: 2,
    title: "Green Building Initiative",
    description: "An eco-friendly building with sustainable materials.",
    image: "/project2.jpg"
  },
  {
    id: 3,
    title: "Smart Traffic System",
    description: "AI-driven traffic control for smoother transport.",
    image: "/project1.jpg"
  },
  {
    id: 4,
    title: "Hydro Energy Project",
    description: "A large-scale hydroelectric power station.",
    image: "/project1.jpeg"
  },
  {
    id: 5,
    title: "AI-Powered City Planning",
    description: "Using AI for efficient urban development.",
    image: "/project2.jpg"
  },
  {
    id: 6,
    title: "Waste Management System",
    description: "Innovative solutions for sustainable waste management.",
    image: "/project1.jpg"
  }
];

export default function ProjectsPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button variant="outline">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
