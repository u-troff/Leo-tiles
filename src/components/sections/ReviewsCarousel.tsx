"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionLogo from "@/components/ui/SectionLogo";
import ReviewCard from "@/components/ui/ReviewCard";
import Button from "@/components/ui/Button";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/site-config";

interface ReviewsCarouselProps {
  showHeader?: boolean;
}

export default function ReviewsCarousel({ showHeader = true }: ReviewsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -360 : 360,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-stone-200">
      <div className="max-w-7xl mx-auto px-4">
        {showHeader && (
          <div className="text-center mb-12">
            <SectionLogo label="Customer Reviews" align="center" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-clay-900 mb-3 leading-tight">
              What Our Customers Say About{" "}
              <em className="not-italic text-rust-500">{siteConfig.businessName}</em>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              As a {siteConfig.differentiator} business, we treat every customer like family. Our
              commitment to honest service shows in every review.
            </p>
          </div>
        )}

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 bg-white border border-stone-300 flex items-center justify-center hover:bg-stone-100 hover:border-rust-400 transition-colors hidden md:flex shadow-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 text-clay-800" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          >
            {reviews.map((review) => (
              <div key={review.id} className="snap-start">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 bg-white border border-stone-300 flex items-center justify-center hover:bg-stone-100 hover:border-rust-400 transition-colors hidden md:flex shadow-sm"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 text-clay-800" />
          </button>
        </div>

        {showHeader && (
          <div className="text-center mt-10">
            <Button href="/contact-us" variant="primary">
              Schedule Free Quote
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
