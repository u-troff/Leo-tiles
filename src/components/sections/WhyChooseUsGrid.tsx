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
    description: "We manufacture to order. Any size, any shape — specify what your project needs and we'll produce it.",
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
    <section className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <Eyebrow label="Why Choose Us" />
        <h2 className="text-3xl lg:text-4xl font-bold text-clay-900 mb-12 max-w-2xl leading-tight">
          What makes {siteConfig.businessName} special?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {differentiators.map((item) => (
            <div key={item.title} className="border-t-2 border-rust-500 pt-5">
              <div className="text-clay-900 text-lg font-bold mb-2">{item.title}</div>
              <p className="text-stone-700 text-[15px] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
