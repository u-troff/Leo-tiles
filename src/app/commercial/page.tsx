import type { Metadata } from "next";
import { Phone, CalendarDays, Star, Shield, Truck, CheckCircle, Building2 } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLogo from "@/components/ui/SectionLogo";
import ServiceCard from "@/components/ui/ServiceCard";
import ReviewsCarousel from "@/components/sections/ReviewsCarousel";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQSection from "@/components/sections/FAQSection";
import { siteConfig } from "@/data/site-config";
import { commercialServices } from "@/data/services-commercial";
import { commercialFAQs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Accessories, Materials & Installation Services",
  description: `Adhesive, sealant, grout, cleaning products, bespoke orders, and nationwide delivery from ${siteConfig.businessName}. Call ${siteConfig.phone}.`,
};

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-clay-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-clay-100 text-clay-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Building2 className="w-4 h-4" />
              Accessories & Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-clay-800 mb-6">
              Accessories, Materials & Installation Services
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Everything You Need for a Complete Terracotta Project
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Buying the tile is only part of the job. Adhesive, sealant, grout, and installation
              all need to be matched correctly to handmade terracotta, get any of them wrong and
              the finished floor suffers.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {siteConfig.businessName} supplies <strong>everything needed alongside your tile
              order in {siteConfig.address.city}, {siteConfig.address.state}</strong>, adhesive,
              colour-matched grout, penetrating sealant, cleaning products, and our own
              installation team for projects that need it.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We also handle bespoke and custom orders, plus nationwide delivery via specialist
              ceramic freight.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/get-a-quote" variant="primary" size="lg">
                <CalendarDays className="w-5 h-5 mr-2" />
                Get a Quote
              </Button>
              <Button href={`tel:${siteConfig.phoneRaw}`} variant="secondary" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center">
              <SectionLogo />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-clay-800 mb-4">
              Accessories & Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The materials and services that complete a terracotta project, all matched
              specifically to handmade clay tile.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialServices.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                icon={service.icon}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLogo />
              <h2 className="text-3xl lg:text-4xl font-bold text-clay-800 mb-6">
                Why Matching Materials Matters
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Standard tile adhesive, white grout, and generic floor cleaners are built for
                factory tile, not handmade terracotta. Used on the wrong material, they cause
                staining, poor adhesion, and a finish that fights the warmth of the tile instead of
                complementing it.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We supply the exact products our own installation team uses, so architects,
                designers, and DIY installers alike get the same result every time.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Colour-Matched Grout", "Terracotta-Safe Sealant", "Bespoke Sizing Available", "Nationwide Freight"].map(
                  (benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-clay-800 font-medium text-sm">{benefit}</span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="bg-gradient-to-br from-clay-100 to-clay-200 overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-clay-600 font-medium">Materials & Accessories Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionLogo />
          <h2 className="text-3xl lg:text-4xl font-bold text-clay-800 mb-8">
            Why Architects & Developers Choose {siteConfig.businessName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { icon: Shield, title: "Heritage Restoration Specialists", desc: "We match original terracotta for Cape Dutch, Victorian, and mid-century restorations." },
              { icon: Star, title: "Trade Accounts Available", desc: "Samples, technical data sheets, and bulk pricing for design professionals." },
              { icon: Truck, title: "Nationwide Delivery", desc: "Specialist ceramic freight, carefully packed to reach you anywhere in South Africa." },
            ].map((item) => (
              <div key={item.title} className="bg-white shadow-md p-8 border border-gray-100">
                <item.icon className="w-10 h-10 text-rust-500 mx-auto mb-4" />
                <h3 className="font-bold text-clay-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <Button href="/get-a-quote" variant="primary" size="lg">
            Request a Quote
          </Button>
        </div>
      </section>

      <ReviewsCarousel />
      <ServiceAreas />
      <FAQSection faqs={commercialFAQs} title="Accessories & Services FAQs" subtitle="Common Questions from Architects & Project Managers" />
    </>
  );
}
