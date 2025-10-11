"use client";
import { Sparkles } from "lucide-react";

import logoAnimation from "../../../assets/bot.gif";
import hero from "../../../assets/hero.gif";
import Image from "next/image";
import ChatWidget from "./Bot";
import { useState } from "react";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="relative overflow-hidden">
     

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto  flex items-center ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Expert to</span>
              <br />
              <span className="text-white">Digitalise Your</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Growth
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg max-w-lg">
              We are constantly growing or learning and improving. Enter your
              the personal real estate expert harry, where finding the ideal
              home is.
            </p>

            {/* CTA Button */}
            <button className="group flex items-center gap-3 bg-gradient-to-t from-[#633fe4] to-[#8A56F3] hover:to-violet-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105">
              <Sparkles className="w-5 h-5" />
              <span>Explore Now</span>
            </button>
          </div>

          {/* Right Content - Interactive Elements */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Background GIF */}
            <div className="absolute inset-0 -z-10">
              <Image
                src={hero} // place your GIF in the public folder
                alt="Background Animation"
                fill // makes it cover the parent div
                className="object-cover"
              />
            </div>

            {/* Bottom Icon */}

            <div className="md:flex hidden">
              <ChatWidget />
            </div>

            {/* Glowing Center Element */}
          </div>
        </div>
      </div>
    </section>
  );
}
