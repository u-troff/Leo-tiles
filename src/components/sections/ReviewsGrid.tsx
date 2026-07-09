import { Star } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/site-config";

export default function ReviewsGrid() {
  return (
    <section className="bg-clay-900 pt-20 pb-24 lg:pt-20 lg:pb-26">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-10 mb-11">
          <div>
            <Eyebrow label="Customer Reviews" tone="dark" />
            <h2 className="text-2xl lg:text-[28px] font-bold text-stone-50">What our customers say</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-rust-500 text-base">★★★★★</span>
              <span className="text-stone-200 text-sm">
                {siteConfig.ratings.google} Google · {siteConfig.ratings.reviewCount}+ reviews
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-rust-500 text-base">★★★★★</span>
              <span className="text-stone-200 text-sm">{siteConfig.ratings.facebook} Facebook</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="border-t border-clay-800 pt-6">
              <div className="flex gap-0.5 mb-4 text-rust-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-stone-100 text-[15.5px] italic leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
              <div className="text-[13.5px] text-stone-400">
                <span className="font-semibold text-rust-200">{review.name}</span> — {review.platform === "google" ? "Google" : "Facebook"} · {review.platformRating}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
