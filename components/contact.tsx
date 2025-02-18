"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type React from "react"

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setSuccessMessage("")
    setErrorMessage("")

    const formData = new FormData()
    formData.append("name", formState.name)
    formData.append("email", formState.email)
    formData.append("message", formState.message)
    formData.append("_captcha", "false") // Disable CAPTCHA
    formData.append("_template", "table") // Email formatting
    formData.append("_subject", "New Contact Form Submission") // Email subject
    formData.append("_cc", "contact@abdullahzaheer.me") // Ensure you receive the email

    try {
      const response = await fetch("https://formsubmit.co/contact@abdullahzaheer.me", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setSuccessMessage("✅ Your message has been sent successfully!")
        setErrorMessage("")

        // Reset the form AFTER a short delay
        setTimeout(() => {
          setFormState({ name: "", email: "", message: "" }) // Reset form fields
        }, 500)
      } else {
        setErrorMessage("❌ Error submitting form. Please try again.")
      }
    } catch (error) {
      setErrorMessage("❌ An error occurred. Please try again later.")
      console.error("❌ Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-0">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Contact Me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {/* Success Message */}
        {successMessage && (
          <div className="mt-4 text-center text-sm font-medium text-green-600">
            {successMessage}
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="mt-4 text-center text-sm font-medium text-red-600">
            {errorMessage}
          </div>
        )}
      </motion.form>
    </section>
  )
}

export default Contact