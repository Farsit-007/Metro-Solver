"use client";

import { Play, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import thumb from "@/assets/table.jpg";
const Choose = () => {
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  const tags = [
    {
      id: "cancel",
      text: "Cancel Anytime",
      rotation: "-rotate-8",
      translation: "",
    },
    {
      id: "support",
      text: "24/7 Customer Service",
      rotation: "rotate-5",
      translation: "-translate-x-10",
    },
    {
      id: "refer",
      text: "Refers & Earn",
      rotation: "-rotate-8",
      translation: "",
      image: "/referral-program-earn-rewards.jpg",
    },
    {
      id: "guarantee",
      text: "Money Back Guarantee",
      rotation: "",
      translation: "",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 relative">
      <div className="absolute  bottom-30 right-10 w-[750px] h-[750px] bg-purple-500/10 rounded-full blur-3xl "></div>
      <div className="absolute  bottom-10 right-20 w-[750px] h-[750px] bg-purple-500/10 rounded-full blur-3xl "></div>
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-between w-full">
        {/* Left Content */}
        <div className="space-y-6 z-10">
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Why You </span>
            <br />
            <span className="text-white">Choose Metro </span>
            <br />
            <span className="text-white">Solver?</span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm max-w-lg">
            We are constantly growing and improving. Enter your personal real
            estate sanctuary, where finding the ideal home is effortless and
            comfortable with our assistance.
          </p>

          {/* CTA Button */}
          <button className="group flex items-center gap-3 bg-gradient-to-t from-[#633fe4] to-[#8A56F3] hover:to-violet-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105">
            <Sparkles className="w-5 h-5" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Right Content - Floating Pills with Hover Images */}
        <div className="flex flex-col gap-12 relative">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className="relative"
              onMouseEnter={() => setHoveredTag(tag.id)}
              onMouseLeave={() => setHoveredTag(null)}
            >
              <div
                className={`text-2xl ${tag.rotation} ${tag.translation} bg-gradient-to-r from-gray-900 to-gray-800 text-white p-5 px-8 rounded-full shadow-lg hover:scale-105 transition cursor-pointer`}
              >
                {tag.text}
              </div>

              {/* Hover Image Tooltip */}
              {/* Hover Image Tooltip */}
              {hoveredTag === tag.id && (
                <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Tooltip Container */}
                  <div
                    className="relative rounded-2xl"
                    style={{
                      background: "rgba(64, 64, 64, 0.5)",
                      backdropFilter: "blur(20px)",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                      padding: "12px 16px",
                      color: "#fff",
                      minWidth: "150px",
                      textAlign: "center",
                    }}
                  >
                    {/* Arrow pointer using pseudo-element approach with border */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2"
                      style={{
                        top: "-8px",
                        width: "0",
                        height: "0",
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderBottom: "8px solid rgba(64, 64, 64, 0.5)",
                      }}
                    />

                    {tag.text}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full h-[400px] md:h-[500px] mt-20">
        {/* Full-width Image */}
        <Image
          src={thumb} // replace with your image
          alt="Video Thumbnail"
          fill
          className="object-cover rounded-3xl"
        />

        {/* Play Button Overlay */}
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gradient-to-t from-[#633fe4] to-[#8A56F3] hover:to-violet-700 text-white backdrop-blur-md p-8 rounded-full shadow-lg hover:scale-110 transition">
            <Play className="w-10 h-10 text-white" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Choose;
