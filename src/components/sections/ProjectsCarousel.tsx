"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Main Pool Terrace",
    location: "Stellenbosch Estate",
    image: "/images/design/pool-deck.jpg",
    alt: "Stellenbosch estate pool terrace in handmade terracotta",
  },
  {
    title: "Alfresco Dining Area",
    location: "Constantia Villa",
    image: "/images/design/dining-room.jpg",
    alt: "Constantia villa alfresco dining area with terracotta flooring",
  },
  {
    title: "Courtyard Passage",
    location: "Cape Heritage Home",
    image: "/images/design/courtyard.jpg",
    alt: "Heritage home courtyard paved in terracotta",
  },
];

export default function ProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 800);
    el.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="bg-background py-section-gap overflow-hidden reveal-up">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mb-12 flex justify-between items-end gap-6">
        <h2 className="font-serif text-[36px] leading-[42px] md:text-[48px] md:leading-[56px] text-primary">
          In Real Projects
        </h2>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => scroll("prev")}
            className="w-12 h-12 border border-architectural-gold/30 flex items-center justify-center hover:bg-architectural-gold hover:text-charcoal-surface transition-all text-primary"
            aria-label="Previous project"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("next")}
            className="w-12 h-12 border border-architectural-gold/30 flex items-center justify-center hover:bg-architectural-gold hover:text-charcoal-surface transition-all text-primary"
            aria-label="Next project"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-gutter px-margin-mobile md:px-margin-desktop overflow-x-auto no-scrollbar scroll-smooth pb-8"
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="min-w-[85vw] sm:min-w-[400px] md:min-w-[700px] lg:min-w-[800px] h-[420px] md:h-[500px] relative group overflow-hidden bg-surface-container shrink-0"
          >
            <Image
              src={project.image}
              alt={project.alt}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              sizes="(max-width: 768px) 85vw, 800px"
            />
            <div className="absolute inset-0 bg-charcoal-surface/30" />
            <div className="absolute bottom-10 left-10">
              <p className="font-mono text-[12px] font-medium tracking-widest uppercase text-architectural-gold mb-2">
                {project.location}
              </p>
              <h4 className="font-serif text-[28px] md:text-[32px] text-primary">{project.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
