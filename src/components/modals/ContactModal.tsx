"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email
    console.log("Sending email:", { name, email, message })
    // Reset form
    setEmail("")
    setMessage("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full bg-gray-800 text-white"
              rows={4}
            />
          </div>
          <div className="flex justify-between">
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
              Send Message
            </Button>
            <Button onClick={onClose} className="bg-gray-700 hover:bg-gray-600 text-white">
              Close
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

