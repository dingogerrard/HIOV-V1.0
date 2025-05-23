"use server"

import { Redis } from "@upstash/redis"
import { v4 as uuidv4 } from "uuid"
import { Resend } from "resend"

// Initialize Redis client
const redis = Redis.fromEnv()
const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return {
        success: false,
        message: "Please fill out all required fields",
      }
    }

    // Create a unique ID for this submission
    const id = uuidv4()
    const timestamp = new Date().toISOString()

    // Create submission object
    const submission = {
      id,
      firstName,
      lastName,
      email,
      company,
      message,
      timestamp,
      status: "new",
    }

    // Store in Redis
    // We'll use a Redis list to store all submissions
    await redis.lpush("contact_submissions", submission)

    // Also store by ID for easy retrieval
    await redis.set(`contact:${id}`, submission)

    // Send email notification to team
    try {
      await resend.emails.send({
        from: "Hole In One Ventures <noreply@holeinoneventures.com>",
        to: ["adam.lee.us@gmail.com"], // Replace with your actual email
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <p><strong>Submitted:</strong> ${timestamp}</p>
    `,
      })
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError)
      // Don't fail the form submission if email fails
    }

    return {
      success: true,
      message: "Form submitted successfully",
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      message: "Failed to submit form",
    }
  }
}

export async function getContactSubmissions() {
  try {
    const submissions = await redis.lrange("contact_submissions", 0, -1)
    return {
      success: true,
      data: submissions,
    }
  } catch (error) {
    console.error("Error fetching submissions:", error)
    return {
      success: false,
      message: "Failed to fetch submissions",
    }
  }
}
