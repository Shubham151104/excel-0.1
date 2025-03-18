import { NextResponse } from "next/server"
import mongoose from "mongoose"

// Connect to MongoDB (only once)
let isConnected = false
const connectDB = async () => {
  if (isConnected) return

  try {
    await mongoose.connect(process.env.MONGODB_URI as string)
    isConnected = true
    console.log("MongoDB connected")
  } catch (error) {
    console.error("MongoDB connection error:", error)
  }
}

// Contact form schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
})

// Get the model or create it if it doesn't exist
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema)

export async function POST(request: Request) {
  await connectDB()

  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    })

    await newContact.save()

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 201 })
  } catch (error) {
    console.error("Error submitting form:", error)
    return NextResponse.json({ error: "An error occurred while submitting the form" }, { status: 500 })
  }
}

