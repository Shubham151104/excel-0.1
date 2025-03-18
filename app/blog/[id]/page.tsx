import { Button } from "@/components/ui/button"
import Link from "next/link"

// Sample blog post data (in a real application, this would come from a database or API)
const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Boiler for Your Facility",
    content: `
      Selecting the right boiler for your facility is a crucial decision that can impact your operations' efficiency and costs. Here are some key factors to consider:

      1. Capacity Requirements: Assess your facility's heat and steam needs carefully. Overestimating can lead to inefficiency, while underestimating can result in inadequate performance.

      2. Fuel Type: Consider the availability and cost of different fuel types in your area. Options may include natural gas, oil, electricity, or biomass.

      3. Efficiency Ratings: Look for boilers with high efficiency ratings. Higher efficiency means lower fuel consumption and operating costs.

      4. Space Constraints: Evaluate the available space in your facility. Some boilers require more room for installation and maintenance than others.

      5. Load Profile: Analyze your facility's load profile. If demand fluctuates significantly, a modulating boiler might be more suitable.

      6. Environmental Regulations: Ensure the boiler meets local and national emissions standards.

      7. Maintenance Requirements: Consider the long-term maintenance needs and costs associated with different boiler types.

      8. Future Expansion: If you anticipate growth, choose a boiler that can accommodate increased demand or is easily scalable.

      9. Initial vs. Lifetime Costs: While upfront costs are important, also consider the total lifetime costs, including fuel, maintenance, and potential repairs.

      10. Reliability and Brand Reputation: Research different brands and models, paying attention to their reliability records and customer support.

      By carefully considering these factors, you can select a boiler that not only meets your current needs but also serves your facility efficiently for years to come. Remember, consulting with a professional engineer or boiler specialist can provide valuable insights tailored to your specific situation.
    `,
    date: "2023-05-15",
  },
  {
  id: 2,
    title: "How to Choose the Right Boiler for Your Facility",
    content: `
      Essential Boiler Maintenance Tips for Efficiency and Longevity

      Boilers are an essential part of any home or commercial building, providing heat and hot water throughout the year. To keep your boiler running efficiently and safely, regular maintenance is crucial. Here are some essential boiler maintenance tips to ensure optimal performance and longevity.

      1. Schedule Regular Inspections

      Having your boiler inspected by a professional at least once a year is highly recommended. This helps detect potential issues early, ensuring safety and efficiency.

      2. Check for Leaks and Corrosion

      Inspect your boiler regularly for any signs of leaks, rust, or corrosion. Addressing these issues promptly can prevent costly repairs and extend the lifespan of your system.

      3. Bleed Radiators

      If your radiators have cold spots, air might be trapped inside. Bleeding the radiators ensures even heat distribution and improves efficiency.

      4. Monitor Boiler Pressure

      Check the boiler pressure gauge periodically. If the pressure is too low or too high, adjust it accordingly to maintain optimal performance.

      5. Keep the Area Around the Boiler Clear

      Ensure there is adequate ventilation and keep the surrounding area free from clutter. Proper airflow helps prevent overheating and enhances safety.

      6. Test the Thermostat

      A faulty thermostat can lead to energy waste or inconsistent heating. Test and calibrate your thermostat to maintain accurate temperature control.

      7. Flush the System Periodically

      Over time, sludge and debris can build up in the system, affecting efficiency. Flushing the system periodically removes these contaminants, improving performance.

      8. Listen for Unusual Noises

      Strange noises like banging or whistling may indicate issues such as trapped air, limescale buildup, or faulty components. Investigate these sounds promptly to prevent major breakdowns.

      9. Insulate Pipes

      During winter, insulating your boiler pipes can prevent freezing and potential damage, ensuring an uninterrupted heating system.

      10. Follow the Manufacturer’s Guidelines

      Always refer to the manufacturer’s manual for specific maintenance instructions. Following recommended practices ensures your boiler operates efficiently and safely.

      Conclusion

      Proper boiler maintenance not only extends the lifespan of your system but also improves energy efficiency and reduces repair costs. By following these essential tips, you can keep your boiler in top condition, ensuring a warm and comfortable environment all year round.


    `,
    date: "2023-05-15",
  },
  // Add more blog posts here...
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <main className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-8">Published on {post.date}</p>
        <div className="prose lg:prose-xl">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-12">
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

