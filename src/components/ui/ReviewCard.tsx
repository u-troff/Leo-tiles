import { Star, Quote } from "lucide-react";
import { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white border border-stone-300 p-7 min-w-[320px] max-w-[380px] flex-shrink-0 flex flex-col gap-4 hover:border-rust-300 hover:shadow-md transition-all duration-300">
      {/* Quote icon */}
      <Quote className="w-7 h-7 text-rust-500/30 -mb-1" />

      {/* Review text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i < review.rating ? "fill-rust-400 text-rust-400" : "text-stone-300"
            }`}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-stone-300" />

      {/* Author row */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-clay-800 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
          {review.initial}
        </div>
        <div>
          <p className="font-semibold text-clay-800 text-sm">{review.name}</p>
          <p className="text-gray-400 text-xs capitalize">
            {review.platform} &middot; {review.platformRating}
          </p>
        </div>
      </div>
    </div>
  );
}
