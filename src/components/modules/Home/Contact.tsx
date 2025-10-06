"use client"

import type React from "react"
import { useState } from "react"
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react"
import Lottie from "lottie-react";
import logoAnimation from "../../../assets/Logo.json";
const supportOptions = [
  "Graphic Design",
  "Creative Writing Solution",
  "Multimedia & Video Editing",
  "Digital Marketing",
  "Web & Software Development",
  "E-Commerce Solutions",
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    support: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" }>({
    show: false,
    message: "",
    type: "success",
  })

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ show: true, message, type })
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 3000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        showToast("Message sent successfully! We will get back to you soon.", "success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          support: "",
          message: "",
        })
      } else {
        throw new Error(data.message || "Failed to send message")
      }
    } catch (error) {
      showToast("Failed to send message. Please try again.", "error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {toast.show && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2">
          <div
            className={`rounded-lg px-6 py-4 shadow-lg ${
              toast.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}

      <section className="max-w-7xl mx-auto relative  py-16 lg:py-24">
        <div className="absolute z-10 -bottom-20 right-80 w-[850px] h-[850px] bg-purple-400/10 rounded-full blur-3xl "></div>
        <div className="flex flex-col md:flex-row lg:gap-10">
          {/* Left Column */}
          <div className="md:w-[60%] flex flex-col justify-center bg-[#13081D] rounded-2xl text-center  space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
               <Lottie
              animationData={logoAnimation}
              loop
              autoplay
              style={{
                filter:
                  "invert(33%) sepia(98%) saturate(2637%) hue-rotate(188deg) brightness(95%) contrast(92%)",
                position: "relative",
                zIndex: 10, // ensure logo is above shapes
              }}
            />
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                Still Have
                <br />A Questions?
              </h1>

              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a1a2e] transition-colors hover:bg-[#252540]"
                >
                  <Linkedin className="h-5 w-5 text-[#0077b5]" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a1a2e] transition-colors hover:bg-[#252540]"
                >
                  <Facebook className="h-5 w-5 text-[#1877f2]" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a1a2e] transition-colors hover:bg-[#252540]"
                >
                  <Instagram className="h-5 w-5 text-[#e4405f]" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a1a2e] transition-colors hover:bg-[#252540]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a1a2e] transition-colors hover:bg-[#252540]"
                >
                  <Youtube className="h-5 w-5 text-[#ff0000]" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a1a2e] transition-colors hover:bg-[#252540]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-2xl relative z-50  p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full rounded-lg bg-[#1a1a2e]   px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email..."
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full rounded-lg bg-[#1a1a2e]   px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-muted-foreground">
                    WhatsApp/Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your number..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg bg-[#1a1a2e]   px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="support" className="text-sm text-muted-foreground">
                    Which are You Looking for Support in?
                  </label>
                  <select
                    id="support"
                    value={formData.support}
                    onChange={(e) => setFormData({ ...formData, support: e.target.value })}
                    className="w-full rounded-lg bg-[#1a1a2e]   px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.75rem center",
                      backgroundSize: "1.25rem",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <option value="" disabled>
                      Select support type...
                    </option>
                    {supportOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-muted-foreground">
                  How Can We Help?
                </label>
                <textarea
                  id="message"
                  placeholder="Message goes in here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg bg-[#1a1a2e]   px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white hover:from-[#6d28d9] hover:to-[#9333ea] h-12 text-base font-medium rounded-full shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mr-2 h-5 w-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
