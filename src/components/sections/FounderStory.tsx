import Image from "next/image";
import SectionLogo from "@/components/ui/SectionLogo";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

export default function FounderStory() {
  return (
    <section className="py-16 lg:py-24 bg-stone-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left, Owner photo */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-sm overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2166456/pexels-photo-2166456.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="Potter shaping clay by hand on a wheel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-rust-500/15 pointer-events-none" />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <SectionLogo label="Our Story" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-clay-900 mb-3 leading-tight">
              A {siteConfig.differentiatorLabel} Kiln
              <br />
              <em className="not-italic text-rust-500">Rooted in Craft</em>
            </h2>
            <p className="text-rust-500 font-medium text-sm mb-6 uppercase tracking-wider">
              Keeping a Vanishing Craft Alive, by Hand
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed text-[15px]">
              {siteConfig.businessName} began in Kraaifontein with little more than a kiln, a
              passion for clay, and {siteConfig.founder.name}&apos;s determination to do things the
              hard, honest way. What started as a small workshop has grown into South Africa&apos;s
              most trusted source for handmade terracotta, but the process has never changed.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-[15px]">
              {siteConfig.founder.bio}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-[15px]">
              Today, {siteConfig.businessName} supplies homeowners, architects, and restoration
              projects across {siteConfig.serviceAreas.slice(0, 5).join(", ")}, and beyond, every
              tile still shaped and fired by hand in the same Cape Town kiln.
            </p>

            <Button href="/about-us" variant="outline">
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
