import type { Metadata } from "next";
import { Phone, CalendarDays, Star, Flame, Ruler, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLogo from "@/components/ui/SectionLogo";
import ServiceCard from "@/components/ui/ServiceCard";
import ReviewsCarousel from "@/components/sections/ReviewsCarousel";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQSection from "@/components/sections/FAQSection";
import { siteConfig } from "@/data/site-config";
import { residentialServices } from "@/data/services-residential";
import { residentialFAQs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Our Terracotta Tile Products",
  description: `Handmade, kiln-fired terracotta tile products from ${siteConfig.businessName}. Batavian floor tiles, klompies, hexagon tiles, and custom orders. Call ${siteConfig.phone}.`,
};

export default function ResidentialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-clay-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-rust-100 text-rust-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              Our Products
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-clay-800 mb-6">
              Our Terracotta Tile Products
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Handmade. Kiln-Fired. Built to Last.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Every tile we produce starts as raw clay, shaped by hand, and finished in our own
              kiln in Kraaifontein. No two tiles are identical — the natural variation in tone and
              texture is what gives handmade terracotta its character.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {siteConfig.businessName} supplies handmade terracotta across{" "}
              {siteConfig.region}. Our experienced <strong>tile makers in {siteConfig.address.city},{" "}
              {siteConfig.address.state}</strong> produce everything from standard floor tiles to
              fully bespoke sizes for restoration projects.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every order comes with honest lead times, transparent pricing, and the option of
              professional installation by our own team.
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
              Our Terracotta Tile Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From signature floor tiles to bespoke heritage sizes, this is the full range of what
              comes out of our kiln.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialServices.map((service) => (
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
                Why Handmade Terracotta Is Different
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Factory tiles are stamped from a mould — every piece identical, every batch the
                same. Handmade terracotta is shaped, dried, and fired one piece at a time, which is
                exactly why it develops the warmth and character that factory tiles cannot replicate.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Choosing the wrong tile or the wrong installer can lead to uneven grout lines,
                staining, and a floor that never quite looks right. Working directly with the
                people who made your tiles means every detail — sizing, sealant, and grout — is
                handled correctly the first time.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Genuine Handmade Character", "Custom Sizes Available", "Heritage Restoration Matching", "Expert Installation Available"].map(
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
                <p className="text-clay-600 font-medium">Tile Production Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us (Condensed) */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionLogo />
          <h2 className="text-3xl lg:text-4xl font-bold text-clay-800 mb-8">
            Why Choose {siteConfig.businessName}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { icon: Flame, title: "Made in Our Own Kiln", desc: "Every tile is shaped and fired in our Kraaifontein facility — from raw clay to finished product." },
              { icon: Star, title: `${siteConfig.ratings.google}-Star Rated`, desc: `${siteConfig.ratings.reviewCount}+ five-star reviews from real customers.` },
              { icon: Ruler, title: "Custom Sizes to Specification", desc: "Any size, any shape — manufactured to order for your exact project." },
            ].map((item) => (
              <div key={item.title} className="bg-white shadow-md p-8 border border-gray-100">
                <item.icon className="w-10 h-10 text-rust-500 mx-auto mb-4" />
                <h3 className="font-bold text-clay-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <Button href="/get-a-quote" variant="primary" size="lg">
            Start Your Order
          </Button>
        </div>
      </section>

      <ReviewsCarousel />
      <ServiceAreas />
      <FAQSection faqs={residentialFAQs} title="Tile Product FAQs" subtitle="Common Questions from Homeowners" />
    </>
  );
}
