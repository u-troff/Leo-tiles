import { Quote } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/site-config";

export default function ReviewsGrid() {
  return (
    <section className="py-24 lg:py-40 bg-warm-linen">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <Eyebrow label="Reviews" className="text-center" />
          <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-charcoal-ash mb-6">
            Architectural Acclaim.
          </h2>
          <p className="text-secondary">
            {siteConfig.ratings.google}★ on Google · {siteConfig.ratings.reviewCount}+ verified reviews ·{" "}
            {siteConfig.ratings.facebook}★ on Facebook
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="bg-sand-bone p-8 lg:p-12 flex flex-col">
              <Quote className="w-9 h-9 text-clay-deep fill-clay-deep mb-8" />
              <p className="font-display text-xl lg:text-2xl italic leading-relaxed text-charcoal-ash mb-10 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <p className="label-caps text-charcoal-ash">{review.name}</p>
                <p className="label-caps text-[10px] text-mortar-gray mt-1">
                  {review.platform === "google" ? "Google Review" : "Facebook Review"} · {review.platformRating}★
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
