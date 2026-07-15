import { Phone, CheckCircle } from "lucide-react";
import Image from "next/image";
import SectionLogo from "@/components/ui/SectionLogo";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

const highlights = [
  "Handmade from raw clay since the 1970s",
  "Kiln-fired in our own Cape Town facility",
  "Custom sizes manufactured to specification",
  "Supply and installation available nationwide",
];

export default function AboutBrief() {
  return (
    <section className="py-16 lg:py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div>
            <SectionLogo label="About Us" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-clay-900 mb-5 leading-tight">
              About{" "}
              <em className="not-italic text-rust-500">{siteConfig.businessName}</em>
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-[15px]">
              {siteConfig.businessName} is a trusted, {siteConfig.differentiator} terracotta tile
              manufacturer serving {siteConfig.region} and beyond. For over 50 years we have shaped,
              dried, and kiln-fired handmade clay tiles in our own facility, a craft that has all
              but disappeared elsewhere in South Africa.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
              Our team of{" "}
              <strong className="text-clay-800">
                tile makers in {siteConfig.address.city}, {siteConfig.address.state}
              </strong>{" "}
              brings decades of expertise, patience, and genuine care to every batch, from standard
              floor tiles to bespoke heritage-matched restorations.
            </p>

            {/* Highlights checklist */}
            <ul className="space-y-2.5 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] text-gray-700">
                  <CheckCircle className="w-4 h-4 text-rust-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button href={`tel:${siteConfig.phoneRaw}`} variant="primary">
              <Phone className="w-4 h-4 mr-2" />
              Call Us Now
            </Button>
          </div>

          {/* Right, Team photo */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/6611244/pexels-photo-6611244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Artisan crafting handmade clay tiles in a sunlit studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent corner block */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-rust-500/15 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
