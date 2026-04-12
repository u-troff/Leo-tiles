import Image from "next/image";
import SectionLogo from "@/components/ui/SectionLogo";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

export default function FounderStory() {
  return (
    <section className="py-16 lg:py-24 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Owner photo */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-sm overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/32588548/pexels-photo-32588548.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="Plumber in uniform working on a pipe repair with a wrench"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-orange-500/15 pointer-events-none" />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <SectionLogo label="Our Story" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-3 leading-tight">
              A {siteConfig.differentiatorLabel} Business
              <br />
              <em className="not-italic text-orange-500">Rooted in Trust</em>
            </h2>
            <p className="text-orange-500 font-medium text-sm mb-6 uppercase tracking-wider">
              Building Lasting Relationships Through Integrity
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed text-[15px]">
              {siteConfig.businessName} was founded in 2018 by {siteConfig.founder.name} with a
              vision to bring honest, dependable plumbing services to the {siteConfig.region}{" "}
              community. What started as a one-man operation has grown into a trusted team of
              licensed professionals — but our values have never changed.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-[15px]">
              {siteConfig.founder.bio}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-[15px]">
              Today, {siteConfig.businessName} serves thousands of homeowners and businesses across{" "}
              {siteConfig.serviceAreas.slice(0, 5).join(", ")}, and beyond. We are proud to be your
              neighbors.
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
