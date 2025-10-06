"use client";

import {
  Code,
  PenTool,
  Camera,
  Megaphone,
  Lightbulb,
  Search,
  ShoppingCart,
  DollarSign,
  Layers,
  Globe,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <PenTool className="w-8 h-8 text-[#ff9d43]" />,
    title: "Graphic Design",
    desc: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless.",
    href: "/services/graphic-design",
  },
  {
    icon: <Code className="w-8 h-8 text-[#a78bfa]" />,
    title: "Web & Software Development",
    desc: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless.",
    href: "/services/web-development",
  },
  {
    icon: <Camera className="w-8 h-8 text-[#ff9d43]" />,
    title: "Multimedia & Video Editing",
    desc: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless.",
    href: "/services/video-editing",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-[#ff9d43]" />,
    title: "Digital Marketing",
    desc: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless.",
    href: "/services/marketing",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-[#a78bfa]" />,
    title: "Creative Writing Solution",
    desc: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless.",
    href: "/services/writing",
  },
  {
    icon: <Search className="w-8 h-8 text-[#ff9d43]" />,
    title: "SEO",
    desc: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless.",
    href: "/services/seo",
  },
  {
    icon: <Layers className="w-8 h-8 text-[#a78bfa]" />,
    title: "3D Animation & Visualisation",
    desc: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless.",
    href: "/services/3d-visualisation",
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-[#ff9d43]" />,
    title: "E-Commerce Solution",
    desc: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless.",
    href: "/services/ecommerce",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-[#ff9d43]" />,
    title: "Accounting",
    desc: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless.",
    href: "/services/accounting",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-[#a78bfa]" />,
    title: "Premium Website",
    desc: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless.",
    href: "/services/premium-website",
  },
  {
    icon: <Globe className="w-8 h-8 text-[#ff9d43]" />,
    title: "Premium Domains",
    desc: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless.",
    href: "/services/domains",
  },
   {
    icon: <Globe className="w-8 h-8 text-[#ff9d43]" />,
    title: "Premium Domains",
    desc: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless.",
    href: "/services/domains",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 text-white relative">
       
      <div className="max-w-7xl mx-auto  text-center relative">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-4xl font-bold mb-2">Our Services</h2>
        <p className="text-gray-400 max-w-2xl mb-12">
          Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.
        </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="absolute  top-1/4 left-0 w-[850px] h-[850px] bg-purple-400/10 rounded-full blur-3xl "></div>
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative bg-[#25153694] rounded-2xl p-6 text-left transition-all duration-300 border border-transparent hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(123,63,228,0.3)] hover:bg-gradient-to-b hover:from-[#3d1f75]/80 hover:to-[#1a0b36]/90"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#2b0060]/30 mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center text-sm text-[#a78bfa] hover:text-white transition-all"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
