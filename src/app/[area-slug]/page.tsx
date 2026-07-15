import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, CalendarDays, Star, CheckCircle, Shield, Truck, Clock, MapPin, Package } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLogo from "@/components/ui/SectionLogo";
import ServiceCard from "@/components/ui/ServiceCard";
import StepCard from "@/components/ui/StepCard";
import { serviceAreas } from "@/data/service-areas";
import { residentialServices } from "@/data/services-residential";
import { commercialServices } from "@/data/services-commercial";
import { siteConfig } from "@/data/site-config";

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({ "area-slug": area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ "area-slug": string }>;
}): Promise<Metadata> {
  const { "area-slug": areaSlug } = await params;
  const area = serviceAreas.find((a) => a.slug === areaSlug);
  if (!area) return {};
  return {
    title: `Terracotta Tiles in ${area.city}, ${area.state}`,
    description: `Handmade, kiln-fired terracotta tiles supplied to ${area.city}, ${area.state}. ${siteConfig.businessName} offers nationwide delivery and custom orders. Call ${siteConfig.phone}.`,
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ "area-slug": string }>;
}) {
  const { "area-slug": areaSlug } = await params;
  const area = serviceAreas.find((a) => a.slug === areaSlug);

  if (!area) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-clay-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-rust-100 text-rust-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" />
                {area.city}, {area.state}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-clay-800 mb-6">
                Terracotta Tiles in {area.city}, {area.state}
              </h1>
              <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you need standard floor tiles, custom sizing, or a full heritage
                restoration match, {siteConfig.businessName} is the trusted{" "}
                <strong>handmade terracotta supplier for {area.city}</strong> that architects and
                homeowners rely on.
              </p>

              {/* Rating Badges */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 shadow-md">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">G</div>
                  <span className="font-bold text-clay-800">{siteConfig.ratings.google}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 shadow-md">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">f</div>
                  <span className="font-bold text-clay-800">{siteConfig.ratings.facebook}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

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
            <div className="bg-gradient-to-br from-clay-100 to-clay-200 overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-clay-600 font-medium">Hero Image</p>
                <p className="text-clay-500 text-sm mt-1">Handmade terracotta supplied to {area.city}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Architects & Homeowners Choose Leo Tiles */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionLogo />
            <h2 className="text-3xl lg:text-4xl font-bold text-clay-800 mb-4">
              Why Architects & Homeowners in {area.city} Choose {siteConfig.businessName}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-4 leading-relaxed">
              {area.city} projects, from heritage homes to new builds, share one thing in
              common: a factory tile simply doesn&apos;t deliver the warmth that handmade
              terracotta does. Each tile we produce is shaped, dried, and kiln-fired by hand in our
              Cape Town facility.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              As a trusted <strong>terracotta supplier for {area.city}</strong>, {siteConfig.businessName}{" "}
              understands the specific needs of {area.city} projects, from custom sizing to
              matching original tile for restorations.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Don&apos;t settle for a factory tile when a genuine handmade product is available.
              Choose a supplier with 50+ years of experience behind every batch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/get-a-quote" variant="primary">
                Get a Quote for {area.city}
              </Button>
              <Button href={`tel:${siteConfig.phoneRaw}`} variant="outline">
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Production & Delivery */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-rust-100 text-rust-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Clock className="w-4 h-4" />
                Production & Delivery
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-clay-800 mb-6">
                Honest Lead Times, Delivered to {area.city}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Handmade tiles take time to produce properly, we won&apos;t pretend otherwise.
                Here&apos;s what to expect when ordering for a project in {area.city}:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Standard production takes 4–8 weeks",
                  "Winter months may extend drying and lead times",
                  "Custom sizes are quoted with their own timeline",
                  "Specialist ceramic freight to protect every tile in transit",
                  "Delivery cost quoted per order based on volume and distance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-rust-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/get-a-quote" variant="primary" size="lg">
                <Truck className="w-5 h-5 mr-2" />
                Get a Delivery Estimate
              </Button>
            </div>
            <div className="bg-gradient-to-br from-clay-100 to-clay-200 overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-clay-600 font-medium">Production & Delivery Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionLogo />
          <h2 className="text-3xl font-bold text-clay-800 mb-4">
            A {siteConfig.differentiatorLabel} Tile Maker Supplying {area.city}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {siteConfig.businessName} is a {siteConfig.differentiator} terracotta tile manufacturer
            built on the values of craft, patience, and authenticity. We supply {area.city} because
            handmade terracotta deserves to be available everywhere in South Africa, not just near
            our kiln.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {area.highlights.map((highlight, i) => (
              <span key={i} className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLogo />
            <h2 className="text-3xl font-bold text-clay-800 mb-4">
              Terracotta Tile Products for {area.city}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {residentialServices.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                slug={service.slug}
              />
            ))}
          </div>
          <div className="text-center">
            <Button href="/get-a-quote" variant="primary">Get a Quote</Button>
          </div>
        </div>
      </section>

      {/* Accessories & Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLogo />
            <h2 className="text-3xl font-bold text-clay-800 mb-4">
              Accessories & Services for {area.city}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialServices.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLogo />
            <h2 className="text-3xl font-bold text-clay-800 mb-4">
              Why {area.city} Chooses {siteConfig.businessName}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Heritage Restoration Specialists", desc: "We match original terracotta for Cape Dutch, Victorian, and mid-century restorations." },
              { icon: Star, title: "Transparent Pricing", desc: "Upfront estimates with tiles and installation always quoted separately." },
              { icon: Truck, title: "Nationwide Delivery", desc: "Specialist ceramic freight reaches every province, not just the Western Cape." },
            ].map((item) => (
              <div key={item.title} className="bg-white shadow-md p-8 border border-gray-100 text-center">
                <item.icon className="w-10 h-10 text-rust-500 mx-auto mb-4" />
                <h3 className="font-bold text-clay-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLogo />
            <h2 className="text-3xl font-bold text-clay-800 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600">From enquiry to delivery for your {area.city} project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard number={1} title="Enquire" description="Tell us about your project, product, sizing, and quantity, and we'll confirm feasibility." />
            <StepCard number={2} title="Sample & Specify" description="We can send samples and confirm exact specifications before production begins." />
            <StepCard number={3} title="Production" description="Your tiles are shaped, dried, and kiln-fired by hand in our Cape Town facility." />
            <StepCard number={4} title="Delivery & Installation" description="Tiles are carefully packed and delivered, with installation available if you need it." />
          </div>
          <div className="text-center mt-10">
            <Button href="/get-a-quote" variant="primary" size="lg">
              Get a Quote for {area.city}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
