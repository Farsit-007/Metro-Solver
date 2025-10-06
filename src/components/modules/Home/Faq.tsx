"use client"

import { useState, useRef, useEffect } from "react"

const serviceCategories = [
  "Digital Marketing",
  "Web & Software Development",
  "Graphic Design & Logo",
  "Multimedia & Video Editing",
  "Creative Writing Solutions",
  "E-Commerce Solutions",
  "Refund, Earn & Cancel Policies",
  "Getting Started & General Info",
  "General Policies & Customer Support",
]

const faqData: Record<string, Array<{ question: string; answer: string }>> = {
  "Digital Marketing": [
    {
      question: "What services do you offer in digital marketing?",
      answer: "We provide SEO, social media management, email marketing, content marketing, PPC campaigns, and more.",
    },
    {
      question: "How can digital marketing help my business?",
      answer:
        "Digital marketing increases your online visibility, drives targeted traffic, generates leads, and helps you reach your business goals through data-driven strategies.",
    },
    {
      question: "How do you measure campaign success?",
      answer:
        "We track KPIs such as website traffic, conversion rates, engagement metrics, ROI, and other relevant performance indicators tailored to your goals.",
    },
    {
      question: "Do you offer local SEO?",
      answer:
        "Yes, we specialize in local SEO to help businesses rank higher in local search results and attract nearby customers.",
    },
  ],
  "Web & Software Development": [
    {
      question: "What technologies do you use for web development?",
      answer:
        "We use modern technologies including React, Next.js, Node.js, TypeScript, and various databases to build scalable and performant applications.",
    },
    {
      question: "Do you offer custom software development?",
      answer: "Yes, we create custom software solutions tailored to your specific business needs and requirements.",
    },
    {
      question: "What is your development process?",
      answer:
        "We follow an agile methodology with regular sprints, continuous testing, and client feedback to ensure quality delivery.",
    },
  ],
  "Graphic Design & Logo": [
    {
      question: "What design services do you provide?",
      answer:
        "We offer logo design, brand identity, marketing materials, social media graphics, and complete visual branding solutions.",
    },
    {
      question: "How many logo concepts will I receive?",
      answer:
        "Typically, we provide 3-5 initial logo concepts, with revisions based on your feedback until you are satisfied.",
    },
  ],
}

export function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState("Digital Marketing")
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="max-w-7xl mx-auto relative  py-16 lg:py-24">
        <div className="absolute z-10 -bottom-20 right-10 w-[850px] h-[850px] bg-purple-400/10 rounded-full blur-3xl "></div>
      <div className="mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
          Got Questions?
          <br />
          We&apos;ve got Answers
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
        {/* Left Column - Categories */}
        <div className="space-y-4">
          <div className="space-y-3">
            {serviceCategories.map((category) => (
              <div key={category} className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category)
                    setOpenIndex(0)
                  }}
                  className="relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-muted-foreground hover:border-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  {selectedCategory === category && (
                    <span className="h-2.5 w-2.5 rounded-full bg-purple-500 animate-in zoom-in-50 duration-200" />
                  )}
                </button>
                <label
                  onClick={() => {
                    setSelectedCategory(category)
                    setOpenIndex(0)
                  }}
                  className="cursor-pointer text-sm font-normal text-muted-foreground hover:text-foreground transition-colors"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - FAQ Accordion */}
        <div className="space-y-4 relative z-50">
          {faqData[selectedCategory]?.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [isOpen])

  return (
    <div
      className={`rounded-lg border border-border bg-card px-6 transition-all duration-300 ${
        isOpen ? "bg-secondary/50" : ""
      }`}
    >
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between py-5 text-left">
        <span className="text-base font-medium text-foreground pr-4">{question}</span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div style={{ height: height }} className="overflow-hidden transition-all duration-300 ease-in-out">
        <div ref={contentRef} className="pb-5 text-sm text-muted-foreground">
          {answer}
        </div>
      </div>
    </div>
  )
}
