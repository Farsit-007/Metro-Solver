"use client";
import { Sparkles } from "lucide-react";
import React, { useState } from "react";
import Lottie from "lottie-react";
import logoAnimation from "../../../assets/Logo.json";
const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="max-w-7xl mx-auto bg-[#13081D] rounded-4xl">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-between gap-8 ">
            {/* Logo */}
            <div className="flex flex-col items-center gap-4 lg:items-start">
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

            {/* Newsletter Form */}
            <div className="flex flex-col items-center lg:flex-row gap-4 justify-between">
              <div>
                <h2 className="text-balance text-2xl font-bold ">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-sm text-gray-400">
                  Join the 25000+ client, in our company
                </p>
              </div>
              <div className="flex w-full max-w-md gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 flex-1 rounded-full border-0 bg-white px-6 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition-shadow"
                />
                <button className="flex h-12 items-center gap-2 rounded-full bg-purple-600 px-6 font-medium transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-950">
                  <Sparkles className="h-4 w-4" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
