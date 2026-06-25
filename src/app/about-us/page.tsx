import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Heart, Eye, Shield, Star, Clock, Award } from "lucide-react";
import SectionLogo from "@/components/ui/SectionLogo";
import Button from "@/components/ui/Button";
import ReviewsCarousel from "@/components/sections/ReviewsCarousel";
import BrandLogos from "@/components/sections/BrandLogos";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `About ${siteConfig.businessName}`,
  description: `Learn about ${siteConfig.businessName} — a trusted, ${siteConfig.differentiator} terracotta tile manufacturer in Kraaifontein, Cape Town. Meet Mark Kelly and discover our values.`,
};

const coreValues = [
  { icon: Shield, title: "Craft", description: "Every tile is shaped, dried, and fired by hand — a process we have never industrialised." },
  { icon: Heart, title: "Authenticity", description: "No two tiles are identical. The variation is the point, not a flaw to be engineered out." },
  { icon: Clock, title: "Patience", description: "Clay takes the time it takes. We don't rush production at the expense of quality." },
  { icon: Star, title: "Quality", description: "Every batch is kiln-fired to the same exacting standard that has defined our work for 50+ years." },
  { icon: Award, title: "Legacy", description: "We're preserving a craft that has all but disappeared elsewhere in South Africa." },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-clay-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-clay-800 mb-4">
              About {siteConfig.businessName}
            </h1>
            <p className="text-xl text-rust-500 font-semibold mb-6">
              Handmade, Local, {siteConfig.differentiatorLabel}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {siteConfig.businessName} is more than a tile supplier — we are South Africa&apos;s
              original handmade terracotta tile makers, committed to a craft that has been
              perfected over 50 years and all but lost everywhere else. Every tile that leaves our
              Kraaifontein kiln has been shaped, dried, and fired by hand.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Today, we proudly supply homeowners, architects, and heritage restoration projects
              across {siteConfig.region} and beyond, delivering authentic handmade terracotta with
              the personal touch that only a {siteConfig.differentiator} business can provide.
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
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/18373966/pexels-photo-18373966.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900"
                alt="Craftsman making pottery in his workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionLogo />
              <h2 className="text-3xl lg:text-4xl font-bold text-clay-800 mb-6">
                Meet {siteConfig.founder.name}
              </h2>
              <p className="text-xl text-rust-500 font-semibold mb-4">{siteConfig.founder.title}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {siteConfig.founder.bio}
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Before {siteConfig.businessName} grew into what it is today, {siteConfig.founder.name.split(" ")[0]}{" "}
                spent decades at the kiln, learning the trade the hard way — through trial, error,
                and an unwillingness to cut corners on a craft that demands patience. That hands-on
                approach still shapes how every order is produced.
              </p>
              <p className="text-gray-600 leading-relaxed">
                &ldquo;I started making tiles because I loved the material — the way it ages, the
                way no two pieces are ever quite the same. Fifty years later, that&apos;s still
                what gets me into the workshop every morning.&rdquo;
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
            <div className="bg-white p-8 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-rust-50 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-rust-500" />
              </div>
              <h3 className="text-2xl font-bold text-clay-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To produce the finest handmade terracotta tiles in South Africa, preserving a craft
                that has been lost everywhere else.
              </p>
            </div>
            <div className="bg-white p-8 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-rust-50 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-rust-500" />
              </div>
              <h3 className="text-2xl font-bold text-clay-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To remain the name architects and homeowners trust when only a genuine handmade
                tile will do.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <SectionLogo />
            <h2 className="text-3xl lg:text-4xl font-bold text-clay-800 mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value) => (
              <div key={value.title} className="bg-white p-6 shadow-md border border-gray-100 text-center">
                <value.icon className="w-8 h-8 text-rust-500 mx-auto mb-3" />
                <h3 className="font-bold text-clay-800 mb-2">{value.title}</h3>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-clay-800 mb-12">Meet the Team</h2>
          <div className="max-w-md mx-auto bg-white shadow-xl p-8 border border-gray-100 mb-8">
            <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2166456/pexels-photo-2166456.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200"
                alt={siteConfig.founder.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-clay-800">{siteConfig.founder.name}</h3>
            <p className="text-rust-500 font-medium mb-4">{siteConfig.founder.title}</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              50+ years shaping and firing handmade terracotta. Dedicated to honest production
              schedules and quality craftsmanship in every batch.
            </p>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our growing team of kiln operators and installers shares {siteConfig.founder.name.split(" ")[0]}&apos;s
            commitment to quality, patience, and authenticity. Every tile is checked by hand before
            it leaves the workshop.
          </p>
          <Button href="/contact-us" variant="primary">
            Get in Touch
          </Button>
        </div>
      </section>

      <BrandLogos />
      <WhyChooseUs />
    </>
  );
}
