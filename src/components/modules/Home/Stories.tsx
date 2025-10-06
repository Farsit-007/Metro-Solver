"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import p1 from "@/assets/p1.jpg";
const tabs = ["Success Stories", "Case Studies", "Blog and News"];
type Story = {
  id: number;
  title: string;
  description: string;
  views: string;
  cpa: string;
  sales: string;
  image: StaticImageData | string;
  featured?: boolean;
};

interface StoryCardProps {
  story: Story;
}

const stories = [
  {
    id: 1,
    title: "The Future of Metro Systems by Company",
    description:
      "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise.",
    views: "50M+",
    cpa: "39%",
    sales: "$2M+",
    image: p1,
  },
  {
    id: 2,
    title: "The Future of Metro Systems by Company",
    description:
      "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise.",
    views: "50M+",
    cpa: "39%",
    sales: "$2M+",
    image: p1,
    featured: true,
  },
  {
    id: 3,
    title: "The Future of Metro Systems by Company",
    description:
      "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise.",
    views: "50M+",
    cpa: "39%",
    sales: "$2M+",
    image: p1,
  },
];

interface StoryCardProps {
  Story: {
    id: number;
    title: string;
    description: string;
    views: string;
    cpa: string;
    sales: string;
    image: string;
    featured?: boolean;
  };
}

function StoryCard({ story }: StoryCardProps) {
  return (
    <div
      className={`group relative overflow-hidden  rounded-3xl bg-card transition-all duration-300 hover:scale-[1.02] hover:ring-2 ring-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]`}
    >
      <div className="absolute z-50 bottom-20 left-80 w-[850px] h-[850px] bg-purple-400/10 rounded-full blur-3xl "></div>
      {/* Image */}
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <Image
          src={story.image || "/placeholder.svg"}
          alt={story.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6 bg-purple-500/10">
        <h3 className="mb-3 text-xl font-semibold text-card-foreground text-balance">
          {story.title}
        </h3>
        <p className="mb-6 text-sm text-muted-foreground leading-relaxed text-pretty">
          {story.description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-full bg-purple-500/10 px-4 py-2">
            <span className="font-semibold text-foreground">{story.views}</span>
            <span className="ml-1 text-muted-foreground text-sm">Views</span>
          </div>
          <div className="rounded-full bg-purple-500/10 px-4 py-2">
            <span className="font-semibold text-foreground">{story.cpa}</span>
            <span className="ml-1 text-muted-foreground text-sm">
              Lower CPA
            </span>
          </div>
          <div className="rounded-full bg-purple-500/10 px-4 py-2">
            <span className="font-semibold text-foreground">{story.sales}</span>
            <span className="ml-1 text-muted-foreground text-sm">
              Sales Generated
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SuccessStoriesSection() {
  const [activeTab, setActiveTab] = useState("Success Stories");

  return (
    <section className="w-full bg-background py-16  sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            The Success Stories, Case Studies & Blog
          </h1>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg text-pretty">
            Based on the description of Metro Solver and the image provided,
            here is a 6-step process that Metro Solver uses to scale a
            customer&#39;s business.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12 flex flex-col md:flex-row justify-between gap-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full bg-purple-500/10 w-full px-8 py-4 text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-secondary text-secondary-foreground shadow-lg"
                  : "bg-secondary/50 text-secondary-foreground/80 hover:bg-secondary/70"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} Story={{
                  id: 0,
                  title: "",
                  description: "",
                  views: "",
                  cpa: "",
                  sales: "",
                  image: "",
                  featured: undefined
              }} />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button className="rounded-full border  bg-transparent px-10 py-3 text-base font-medium text-foreground hover:border-primary hover:bg-primary/10 transition-all">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
