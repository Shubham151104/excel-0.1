import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Boiler for Your Facility",
    excerpt:
      "Selecting the appropriate boiler is crucial for efficient operations. This guide walks you through the key factors to consider.",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "Essential Boiler Maintenance Tips",
    excerpt:
      "Regular maintenance is key to ensuring your boiler's longevity and efficiency. Learn about crucial maintenance practices.",
    date: "2023-06-02",
  },
  {
    id: 3,
    title: "Boiler Safety: Best Practices and Regulations",
    excerpt:
      "Safety should always be the top priority when operating boilers. Discover the essential safety practices and current regulations.",
    date: "2023-06-20",
  },
  {
    id: 4,
    title: "Understanding Boiler Efficiency Ratings",
    excerpt:
      "Boiler efficiency ratings can significantly impact your operational costs. Learn how to interpret and improve these ratings.",
    date: "2023-07-08",
  },
  {
    id: 5,
    title: "The Future of Boiler Technology: Trends to Watch",
    excerpt:
      "Stay ahead of the curve with our overview of emerging trends in boiler technology and what they mean for the industry.",
    date: "2023-07-25",
  },
]

export default function BlogPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Excel Engineers Blog</h1>

        {/* Search Bar */}
        <div className="mb-12 max-w-md mx-auto">
          <form className="flex gap-2">
            <Input type="text" placeholder="Search blog posts..." className="flex-grow" />
            <Button type="submit">Search</Button>
          </form>
        </div>

        {/* Blog Posts */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Button variant="outline" asChild>
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

