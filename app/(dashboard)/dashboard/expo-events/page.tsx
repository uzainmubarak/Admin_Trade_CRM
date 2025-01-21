"use client"
import { useState } from "react"
import { Html5QrcodeScanner } from "html5-qrcode"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { QrCode, Mail, User, Phone, ArrowRight, X, Building2 } from "lucide-react"
import {fonts} from '@/components/ui/fonts'

export default function ModernQRPage() {
  const [showScanner, setShowScanner] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      setError("All fields are required")
      return
    }
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMessage("Form submitted successfully!")
      setError("")
    } catch {
      setError("Failed to submit form")
    }
  }

  const startScanner = () => {
    const scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 }, false)
    scanner.render(
      (text) => {
        try {
          const data = JSON.parse(text)
          setFormData(data)
          scanner.clear()
          setShowScanner(false)
        } catch {
          setError("Invalid QR code")
        }
      },
      () => {}
    )
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className={`text-2xl font-semibold ${fonts.montserrat}  text-gray-700 mb-4`}>Business Information</h3>
          <div className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full Name"
                className={`pl-10 ${fonts.montserrat} h-12`}
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email Address"
                className={`pl-10 ${fonts.montserrat} h-12`}
              />
            </div>

            {/* Phone Input */}
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="tel"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Phone Number"
                className={`pl-10 ${fonts.montserrat} h-12`}
              />
            </div>

            {/* Address Input */}
            <div className="relative">
              <Building2 className={`absolute left-3 top-3 ${fonts.montserrat} h-5 w-5 text-gray-400`} />
              <Input
                value={formData.address}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
                placeholder="Address"
                className="pl-10 h-12"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 w-fit">
          <Button
            type="button"
            variant="outline"
            className={`flex-1 h-12 ${fonts.montserrat}`}
            onClick={() => {
              setShowScanner(!showScanner)
              if (!showScanner) startScanner()
            }}
          >
            <QrCode className="mr-2 h-5 w-5" />
            {showScanner ? "Close Scanner" : "Scan QR Code"}
          </Button>
          <Button type="submit" className={`flex-1 ${fonts.montserrat} h-12`}>
            Submit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </form>

      {/* Messages */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 rounded-lg flex items-center">
          <X className="h-5 w-5 text-red-500 mr-2" />
          <span className="text-red-600">{error}</span>
        </div>
      )}
      {message && (
        <div className="mt-4 p-4 bg-green-50 rounded-lg flex items-center">
          <span className="text-green-600">{message}</span>
        </div>
      )}

      {/* QR Scanner */}
      {showScanner && (
        <div className="mt-6 p-4 border-2 border-dashed border-gray-200 rounded-lg">
          <div id="qr-reader" />
        </div>
      )}
    </div>
  )
}
