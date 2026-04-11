import type { Metadata } from "next";
import { Phone, CalendarDays, Star, Shield, Award, CheckCircle, Building2 } from "lucide-react";
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
  title: `Commercial Plumbing Services in ${siteConfig.region}`,
  description: `Trusted commercial plumbing services in ${siteConfig.region}. Restaurants, offices, retail — licensed & insured. Call ${siteConfig.phone}.`,
};

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Building2 className="w-4 h-4" />
              Commercial Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-800 mb-6">
              Trusted Commercial Plumbing Services in {siteConfig.region}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Reliable Solutions to Keep Your Business Running
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Commercial plumbing problems don&apos;t just cause inconvenience — they halt operations,
              drive away customers, and create liability risks. Your business needs a plumbing partner
              who understands the urgency and complexity of commercial systems.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {siteConfig.businessName} delivers professional <strong>commercial plumbing services in{" "}
              {siteConfig.address.city}, {siteConfig.address.state}</strong> for restaurants, offices,
              retail spaces, and industrial facilities. We minimize downtime and maximize reliability
              so you can focus on running your business.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From preventive maintenance programs to emergency repairs, our licensed commercial
              plumbers are equipped to handle projects of any scale.
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
              Our Commercial Plumbing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive commercial plumbing solutions designed to keep your business operating
              efficiently and in compliance.
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
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-6">
                Why Professional Commercial Plumbing Matters
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Commercial plumbing failures cost more than repair bills — they cost you revenue,
                reputation, and regulatory standing. A single plumbing emergency can shut down
                operations, violate health codes, and damage customer trust.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Proactive maintenance and professional service ensure your plumbing infrastructure
                supports your business goals rather than undermining them. Our commercial team
                understands the unique demands of business plumbing.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Minimize Business Downtime", "Health Code Compliance", "Energy Cost Savings", "Business Continuity"].map(
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
                <p className="text-navy-600 font-medium">Commercial Work Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionLogo />
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-8">
            Why Businesses Choose {siteConfig.businessName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { icon: Shield, title: "Commercially Licensed", desc: "Full commercial plumbing license with comprehensive insurance and bonding." },
              { icon: Star, title: "After-Hours Service", desc: "We work around your schedule — evenings, weekends, and holidays available." },
              { icon: Award, title: "Maintenance Programs", desc: "Preventive maintenance plans that keep your plumbing running and compliant." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <item.icon className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-navy-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <Button href="/contact-us" variant="primary" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      <ReviewsCarousel />
      <ServiceAreas />
      <FAQSection faqs={commercialFAQs} title="Commercial Plumbing FAQs" subtitle="Common Questions from Business Owners" />
    </>
  );
}
