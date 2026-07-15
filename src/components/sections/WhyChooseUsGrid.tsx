import Eyebrow from "@/components/ui/Eyebrow";
import { siteConfig } from "@/data/site-config";

const differentiators = [
  {
    title: "Made in Our Own Kiln",
    description:
      "Every tile is produced in our Kraaifontein facility. We control the entire process from raw clay to finished product.",
  },
  {
    title: "Custom Sizes to Specification",
    description: "We manufacture to order. Any size, any shape, specify what your project needs and we'll produce it.",
  },
  {
    title: "50+ Years of Craft",
    description:
      "More than five decades of refining the art of handmade terracotta. Our experience shows in every tile we produce.",
  },
  {
    title: "Heritage Restoration Specialists",
    description:
      "We've matched original terracotta for Cape Dutch, Victorian, and mid-century restorations across South Africa.",
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver carefully packed tiles to any province. Ceramic freight specialists handle every shipment.",
  },
  {
    title: "Direct from the Maker",
    description: "No middlemen. When you call Leo Tiles, you speak to the people who made your tiles.",
  },
];

export default function WhyChooseUsGrid() {
  return (
    <section className="py-24 lg:py-40 bg-warm-linen">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-16 lg:mb-20">
          <Eyebrow label="Why Choose Us" />
          <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-charcoal-ash">
            What makes {siteConfig.businessName} different.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {differentiators.map((item) => (
            <div key={item.title} className="border-t-2 border-clay-deep pt-6">
              <h3 className="font-display text-2xl text-charcoal-ash mb-3">{item.title}</h3>
              <p className="text-secondary text-[15px] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
