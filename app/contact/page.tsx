import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </main>
  )
}

