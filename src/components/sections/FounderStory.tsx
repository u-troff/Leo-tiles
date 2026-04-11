import SectionLogo from "@/components/ui/SectionLogo";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

export default function FounderStory() {
  return (
    <section className="py-16 lg:py-24 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Owner photo placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-navy-100 aspect-[3/4] flex items-center justify-center max-w-sm">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-navy-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-navy-500">👤</span>
                </div>
                <p className="text-navy-500 font-medium text-sm">Owner Photo</p>
                <p className="text-navy-400 text-xs mt-1">Professional or candid portrait</p>
              </div>
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
