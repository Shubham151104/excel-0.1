import { Button } from "@/components/ui/button"

export default function CareersPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Careers at Excel Engineers</h1>
        <p className="text-xl text-center mb-8">
          Join our team of experts and innovators in the boiler manufacturing industry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-2">Job Position {item}</h2>
              <p className="text-gray-600 mb-4">Brief description of the job role and responsibilities.</p>
              <Button variant="outline">Apply Now</Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Don't see a position that fits?</h2>
          <p className="mb-4">We're always looking for talented individuals to join our team.</p>
          <Button>Submit Your Resume</Button>
        </div>
      </div>
    </main>
  )
}

