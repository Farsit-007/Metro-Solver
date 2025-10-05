"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import Image from "next/image";
// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Katie Johnson",
    title: "Founder of Strova",
    image: p1,
    quote:
      '"Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort."',
    platform: "Google",
    rating: 5,
    starColor: "text-yellow-500",
  },
  {
    id: 2,
    name: "Wade Warren",
    title: "Founder of Strova",
    image: p2,
    quote:
      '"Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort."',
    platform: "Trustpilot",
    rating: 5,
    starColor: "text-teal-400",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    title: "Founder of Strova",
    image: p2,
    quote:
      '"Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort."',
    platform: "Google",
    rating: 5,
    starColor: "text-yellow-500",
  },
];

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className=" py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="absolute z-10  -bottom-52 right-52 w-[750px] h-[750px] bg-purple-500/10 rounded-full blur-3xl "></div>
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What People Say
            </h1>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
              Based on the description of Metro Solver and the image provided,
              here is a 6-step process that Metro Solver uses to scale a
              customer&rsquo;s business
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 z-50">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`rounded-3xl p-8 transition-all duration-300 transform ${
                  currentIndex === index
                    ? "bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-2 border-purple-600 scale-105 shadow-2xl shadow-purple-500/50"
                    : "bg-slate-800/40 border-2 border-transparent opacity-60 hover:opacity-80"
                }`}
              >
                {/* Alphabet Avatar and Star Rating */}
                <div className="flex items-center justify-between">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 fill-current ${testimonial.starColor}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Name and Title */}
                <div className="mb-4 flex items-center gap-2">
                  <h3 className="text-white font-semibold text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">| {testimonial.title}</p>
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {testimonial.quote}
                </p>

                {/* Platform Badge */}
                <div className="flex items-center gap-2">
                  <Star
                    className={`w-5 h-5 fill-current ${testimonial.starColor}`}
                  />
                  <span className="text-white font-semibold text-sm">
                    {testimonial.platform}
                  </span>
                  <span className="text-gray-400 text-sm">
                    | Review by {testimonial.platform.toLowerCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 relative z-50">
            <button
              onClick={handlePrevious}
              className="rounded-full bg-purple-900/50 border border-purple-700 hover:bg-purple-800/50 text-white p-3 transition-all hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full bg-purple-900/50 border border-purple-700 hover:bg-purple-800/50 text-white p-3 transition-all hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-purple-500 w-8"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
