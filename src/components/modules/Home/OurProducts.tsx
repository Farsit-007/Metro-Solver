"use client";
import p1 from "@/assets/table.jpg";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Calendar, Play } from "lucide-react";
import Image from "next/image";

const podcasts = [
  {
    id: 1,
    title: "How Brands Can Prepare for Black Friday & Christmas",
    duration: "30 Minute",
    date: "Mar 11, 2025",
    image: p1,
  },
  {
    id: 2,
    title: "How Brands Can Prepare for Black Friday & Christmas",
    duration: "30 Minute",
    date: "Mar 11, 2025",
    image: p1,
  },
  {
    id: 3,
    title: "Marketing Strategies for the Holiday Season",
    duration: "45 Minute",
    date: "Mar 15, 2025",
    image: p1,
  },
  {
    id: 4,
    title: "E-commerce Trends to Watch in 2025",
    duration: "35 Minute",
    date: "Mar 20, 2025",
    image: p1,
  },
];

export default function PodcastPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 2; // Show 2 cards at a time on desktop

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? podcasts.length - itemsPerPage : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= podcasts.length - itemsPerPage ? 0 : prev + 1
    );
  };

  const visiblePodcasts = podcasts.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="relative flex items-center justify-center p-6">
        <div className="absolute z-30 -bottom-20 right-80 w-[850px] h-[850px] bg-purple-400/10 rounded-full blur-3xl "></div>
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-center gap-6 mb-12">
          <h1 className="text-4xl  font-bold text-white leading-tight text-balance max-w-xl">
            Did You Hear about
            <br />
            Our Podcast?
          </h1>
          <p className="text-gray-300 text-sm  max-w-xl ">
            Based on the description of Metro Solver and the image provided,
            here is a 6-step process that Metro Solver uses to scale a
            customer&rsquo;s business
          </p>
        </div>

        <div className="relative mb-8 overflow-hidden">
          <div
            className="grid grid-cols-1 relative z-50 md:grid-cols-2 gap-6 transition-all duration-500 ease-in-out"
            style={{
              transform: `translateX(0)`,
            }}
          >
            {visiblePodcasts.map((podcast, index) => (
              <div
                key={`${podcast.id}-${currentIndex}-${index}`}
                className="group relative rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] animate-in fade-in slide-in-from-right-4 duration-500"
              >
                {/* Podcast Image */}
                <div className="relative h-64 md:h-72">
                  <Image
                    src={podcast.image || "/placeholder.svg"}
                    alt={podcast.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Duration Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <Clock className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">
                      {podcast.duration}
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <Calendar className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">
                      {podcast.date}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-white shadow-lg">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-purple-900 fill-purple-900 ml-1" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-lg md:text-xl font-semibold leading-snug text-balance">
                      {podcast.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center relative z-50 gap-4">
          <button
            onClick={handlePrevious}
            className="rounded-full bg-purple-900/50 border-purple-700 hover:bg-purple-800/50 text-white p-2 transition-all hover:scale-110"
            aria-label="Previous podcasts"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full bg-purple-900/50 border-purple-700 hover:bg-purple-800/50 p-2 text-white transition-all hover:scale-110"
            aria-label="Next podcasts"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({
            length: Math.ceil(podcasts.length / itemsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerPage)}
              className={`w-2 h-2 rounded-full transition-all ${
                Math.floor(currentIndex / itemsPerPage) === index
                  ? "bg-purple-500 w-6"
                  : "bg-purple-900/50 hover:bg-purple-700/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
