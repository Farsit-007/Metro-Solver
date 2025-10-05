"use client"

import { MapPin, Phone, Mail, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Footer() {

  const [currency, setCurrency] = useState("gbp")
  const [isOpen, setIsOpen] = useState(false)

  const currencies = [
    { value: "gbp", label: "GBP - British Pound", flag: "🇬🇧" },
    { value: "usd", label: "USD - US Dollar", flag: "🇺🇸" },
    { value: "eur", label: "EUR - Euro", flag: "🇪🇺" },
  ]

  const selectedCurrency = currencies.find((c) => c.value === currency)

  return (
    <footer className=" pt-24 relative text-white">
       <div className="absolute -z-10 bottom-10 right-[25%] w-[850px] h-[850px] bg-purple-400/10 rounded-full blur-3xl "></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Contact Section */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 text-xl font-bold">
              Got Questions?
              <br />
              Call us !
            </h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-purple-400" />
                <div>
                  <div className="font-medium text-white">Head office: Metro Solver Limited</div>
                  <div>Grantham Road, London E12 5LX, United Kingdom</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-purple-400" />
                <div>+447936 455446</div>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-purple-400" />
                <div>official@metrosolver.com</div>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 text-sm font-medium">Country Currency</div>
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  <span>
                    {selectedCurrency?.flag} {selectedCurrency?.label}
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="absolute top-full z-10 mt-1 w-full rounded-md border border-white/20 bg-slate-900 shadow-lg">
                    {currencies.map((curr) => (
                      <button
                        key={curr.value}
                        onClick={() => {
                          setCurrency(curr.value)
                          setIsOpen(false)
                        }}
                        className="flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-white/10 first:rounded-t-md last:rounded-b-md"
                      >
                        <span>{curr.flag}</span>
                        <span>{curr.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  User Profile
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  White Labelling
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Links */}
          <div>
            <h4 className="mb-4 font-semibold">About Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Our Stories
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Send Message
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="mb-4 font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Start Earning
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Creative Writing Solution
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Web & Software Development
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  E-Commerce Solution
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Graphic Design
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Multimedia & Video Editing
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Merchandise
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Premium Website
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Premium Domains
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-400">
                  Special Combo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <h4 className="mb-6 text-center text-sm font-medium text-gray-400">Our Entire Partners</h4>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-blue-500">meta</div>
              <div className="text-xs text-gray-400">Business Partner</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500">
                <div className="text-xs font-bold">G</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Google Marketing Platform</div>
                <div className="text-xs text-gray-400">Sales Partner</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="h-3 w-3 bg-red-500" />
                <div className="h-3 w-3 bg-green-500" />
                <div className="h-3 w-3 bg-blue-500" />
                <div className="h-3 w-3 bg-yellow-500" />
              </div>
              <div className="text-sm font-semibold">Microsoft</div>
              <div className="text-xs text-gray-400">Partner</div>
            </div>
            <div className="rounded border border-orange-500 px-3 py-1">
              <div className="text-sm font-bold text-orange-500">aws</div>
              <div className="text-xs text-gray-400">Partner</div>
            </div>
            <div className="flex items-center gap-2 rounded bg-orange-600 px-3 py-1">
              <div className="text-xs font-bold">P</div>
              <div className="text-xs">Partner</div>
            </div>
            <div className="text-xl font-bold">
              <span className="text-white">amazon</span>
              <span className="text-orange-500">.sn</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl">🎵</div>
              <div>
                <div className="text-sm font-bold">TikTok</div>
                <div className="text-xs text-gray-400">Marketing Partners</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>© Metro Solver. All Right Reserved 2024</div>
            <div>Metro Solver Ltd incorporated in England & Wales Registration No:15730189</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
