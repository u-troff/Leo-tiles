import type { Metadata } from "next";
import { Phone, Heart, Eye, Shield, Star, Users, Handshake } from "lucide-react";
import SectionLogo from "@/components/ui/SectionLogo";
import Button from "@/components/ui/Button";
import ReviewsCarousel from "@/components/sections/ReviewsCarousel";
import BrandLogos from "@/components/sections/BrandLogos";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `About ${siteConfig.businessName}`,
  description: `Learn about ${siteConfig.businessName} — a trusted, ${siteConfig.differentiator} plumbing company serving ${siteConfig.region}. Meet our team and discover our values.`,
};

const coreValues = [
  { icon: Shield, title: "Integrity", description: "We do what's right, even when no one is watching. Honest assessments, fair pricing, and transparent communication." },
  { icon: Heart, title: "Responsibility", description: "We take ownership of every job and every outcome. If it's not right, we make it right." },
  { icon: Star, title: "Quality Workmanship", description: "We never cut corners. Every repair and installation meets the highest standards of the trade." },
  { icon: Users, title: "Customer Care", description: "We treat every customer like family — with respect, patience, and genuine concern for your needs." },
  { icon: Handshake, title: "Community Commitment", description: "We live and work in this community. Supporting our neighbors is part of who we are." },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
              About {siteConfig.businessName}
            </h1>
            <p className="text-xl text-orange-500 font-semibold mb-6">
              Trusted, Local, {siteConfig.differentiatorLabel}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {siteConfig.businessName} is more than a plumbing company — we are your neighbors,
              committed to providing the honest, reliable service that every homeowner and business
              owner deserves. Founded in 2018, we have built our reputation one job at a time on a
              foundation of integrity, expertise, and genuine care.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Today, we proudly serve families and businesses across {siteConfig.region}, delivering
              professional plumbing solutions with the personal touch that only a {siteConfig.differentiator}{" "}
              business can provide.
            </p>
            <Button href={`tel:${siteConfig.phoneRaw}`} variant="primary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      <ReviewsCarousel />

      {/* Founder Story (Expanded) */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-navy-100 to-navy-200 rounded-2xl overflow-hidden aspect-[3/4] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-navy-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-navy-600">👤</span>
                </div>
                <p className="text-navy-600 font-medium">Founder Photo</p>
              </div>
            </div>
            <div>
              <SectionLogo />
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-6">
                Meet {siteConfig.founder.name}
              </h2>
              <p className="text-xl text-orange-500 font-semibold mb-4">{siteConfig.founder.title}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {siteConfig.founder.bio}
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Before starting {siteConfig.businessName}, {siteConfig.founder.name.split(" ")[0]} spent
                over a decade learning the trade from the ground up — from apprenticeship to master
                plumber certification. Every lesson learned along the way shaped the company&apos;s commitment
                to quality, honesty, and customer-first service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                &ldquo;I started this company because I wanted to give homeowners a plumber they could actually
                trust — someone who shows up on time, tells you the truth about what&apos;s wrong, and charges
                a fair price for quality work. That&apos;s what we deliver every single day.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide every customer with honest, reliable, and high-quality plumbing services at
                a fair price. We believe every homeowner and business owner deserves a plumber they can
                trust — and we work every day to be that plumber.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted plumbing company in {siteConfig.region} — known not just
                for our technical expertise, but for the integrity, transparency, and care we bring to
                every interaction.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <SectionLogo />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <value.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-bold text-navy-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionLogo />
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-12">Meet the Team</h2>
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-8">
            <div className="w-24 h-24 bg-navy-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">👤</span>
            </div>
            <h3 className="text-xl font-bold text-navy-800">{siteConfig.founder.name}</h3>
            <p className="text-orange-500 font-medium mb-4">{siteConfig.founder.title}</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Master plumber with 15+ years of experience. Dedicated to honest service and quality
              workmanship in every project.
            </p>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our growing team of licensed, insured plumbing professionals shares {siteConfig.founder.name.split(" ")[0]}&apos;s
            commitment to quality, integrity, and customer satisfaction. Every team member undergoes
            rigorous training and background checks.
          </p>
          <Button href="/contact-us" variant="primary">
            Meet Your Local Pros
          </Button>
        </div>
      </section>

      <BrandLogos />
      <WhyChooseUs />
    </>
  );
}
