import type { Metadata } from "next";
import { Phone, CalendarDays, Star, Shield, Award, CheckCircle } from "lucide-react";
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
  title: `Residential Plumbing Services in ${siteConfig.region}`,
  description: `Expert residential plumbing services in ${siteConfig.region}. Drain cleaning, water heater installation, pipe repair, and more. Licensed & insured. Call ${siteConfig.phone}.`,
};

export default function ResidentialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              Residential Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-800 mb-6">
              Your Trusted Residential Plumbing Services in {siteConfig.region}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Expert Solutions for a Safe and Efficient Home
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Your home&apos;s plumbing is the backbone of daily comfort — from morning showers to evening
              dishwashing. When something goes wrong, you need a licensed professional who can diagnose
              the problem fast and fix it right the first time.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {siteConfig.businessName} provides comprehensive residential plumbing services across{" "}
              {siteConfig.region}. Our experienced <strong>plumbers in {siteConfig.address.city},{" "}
              {siteConfig.address.state}</strong> handle everything from routine repairs to complex
              installations with the care and attention your home deserves.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every job comes with transparent pricing, professional service, and our satisfaction guarantee.
              We treat your home like our own.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact-us" variant="primary" size="lg">
                <CalendarDays className="w-5 h-5 mr-2" />
                Get Started
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
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-4">
              Our Residential Plumbing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From minor repairs to major installations, we provide the full range of residential
              plumbing services your home needs.
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
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-6">
                The Importance of Professional Plumbing Services
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Professional plumbing isn&apos;t a luxury — it&apos;s a safeguard for your home, your family&apos;s
                health, and your investment. Licensed plumbers ensure every repair and installation meets
                building codes, uses proper materials, and is built to last.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                DIY plumbing mistakes can lead to water damage, mold growth, and code violations that
                cost far more to fix than the original problem. Trust a professional to get it right
                the first time and protect your home&apos;s value.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Safety & Code Compliance", "Cost Savings Long-Term", "Property Value Protection", "Expert Diagnostics"].map(
                  (benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-navy-800 font-medium text-sm">{benefit}</span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="bg-gradient-to-br from-navy-100 to-navy-200 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-navy-600 font-medium">Professional Work Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us (Condensed) */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionLogo />
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-8">
            Why Choose {siteConfig.businessName}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { icon: Shield, title: "Licensed & Insured", desc: `License# ${siteConfig.license} — fully insured for your protection.` },
              { icon: Star, title: `${siteConfig.ratings.google}-Star Rated`, desc: `${siteConfig.ratings.reviewCount}+ five-star reviews from real customers.` },
              { icon: Award, title: siteConfig.differentiatorLabel, desc: "Built on integrity, discipline, and genuine care for our community." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <item.icon className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-navy-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <Button href="/contact-us" variant="primary" size="lg">
            Schedule Your Service
          </Button>
        </div>
      </section>

      <ReviewsCarousel />
      <ServiceAreas />
      <FAQSection faqs={residentialFAQs} title="Residential Plumbing FAQs" subtitle="Common Questions from Homeowners" />
    </>
  );
}
