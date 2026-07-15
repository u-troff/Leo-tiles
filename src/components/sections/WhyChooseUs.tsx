import {
  Flame,
  Ruler,
  Clock,
  Shield,
  Truck,
  Users,
} from "lucide-react";
import Image from "next/image";
import SectionLogo from "@/components/ui/SectionLogo";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

const differentiators = [
  {
    icon: Flame,
    title: "Made in Our Own Kiln",
    description:
      "Every tile is produced in our Kraaifontein facility. We control the entire process from raw clay to finished product.",
  },
  {
    icon: Ruler,
    title: "Custom Sizes to Specification",
    description: "We manufacture to order. Any size, any shape, specify what your project needs and we'll produce it.",
  },
  {
    icon: Clock,
    title: "50+ Years of Craft",
    description:
      "More than five decades of refining the art of handmade terracotta. Our experience shows in every tile we produce.",
  },
  {
    icon: Shield,
    title: "Heritage Restoration Specialists",
    description:
      "We've matched original terracotta for Cape Dutch, Victorian, and mid-century restorations across South Africa.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "We deliver carefully packed tiles to any province. Ceramic freight specialists handle every shipment.",
  },
  {
    icon: Users,
    title: "Direct from the Maker",
    description:
      "No middlemen. When you call Leo Tiles, you speak to the people who made your tiles.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Content */}
          <div>
            <SectionLogo label="Why Choose Us" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-clay-900 mb-2 leading-tight">
              What Makes{" "}
              <em className="not-italic text-rust-500">{siteConfig.businessName}</em> Special?
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Five decades of craft, care, and commitment to authentic handmade terracotta.
            </p>

            <div className="space-y-5">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-4 p-4 border border-stone-300 hover:border-rust-300 hover:bg-rust-50/50 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-rust-50 flex items-center justify-center flex-shrink-0 group-hover:bg-rust-100 transition-colors">
                    <item.icon className="w-5 h-5 text-rust-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-clay-800 text-[15px] mb-0.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/contact-us" variant="primary">
                Contact Us Today
              </Button>
            </div>
          </div>

          {/* Right, Sticky image */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/6010260/pexels-photo-6010260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="Warm terracotta-tiled interior with handmade clay pottery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-rust-500/10 pointer-events-none" />
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-clay-200 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
