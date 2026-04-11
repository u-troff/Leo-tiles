import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, CalendarDays, Star, AlertTriangle, CheckCircle, Shield, DollarSign, Siren, MapPin } from "lucide-react";
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
    title: `Plumber in ${area.city}, ${area.state}`,
    description: `Professional plumbing services in ${area.city}, ${area.state}. ${siteConfig.businessName} offers residential & commercial plumbing, 24/7 emergency service. Call ${siteConfig.phone}.`,
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
      <section className="bg-gradient-to-br from-navy-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" />
                {area.city}, {area.state}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-navy-800 mb-6">
                Plumber in {area.city}, {area.state}
              </h1>
              <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you need emergency plumbing repair, a water heater replacement, or a complete
                bathroom remodel, {siteConfig.businessName} is the trusted <strong>plumber in {area.city}</strong>{" "}
                that homeowners and businesses rely on.
              </p>

              {/* Rating Badges */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">G</div>
                  <span className="font-bold text-navy-800">{siteConfig.ratings.google}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">f</div>
                  <span className="font-bold text-navy-800">{siteConfig.ratings.facebook}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button href="/contact-us" variant="primary" size="lg">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  Schedule Free Quote
                </Button>
                <Button href={`tel:${siteConfig.phoneRaw}`} variant="secondary" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-navy-100 to-navy-200 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-navy-600 font-medium">Hero Image</p>
                <p className="text-navy-500 text-sm mt-1">Plumber serving {area.city}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need a Plumber */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionLogo />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-4">
              Why You Need a Professional Plumber in {area.city}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-4 leading-relaxed">
              {area.city} properties — from historic homes to modern builds — all share one thing in
              common: they depend on reliable plumbing. Aging pipes, hard water, tree root intrusion,
              and seasonal temperature changes can all take their toll on your plumbing system.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              As a trusted <strong>plumber in {area.city}</strong>, {siteConfig.businessName} understands
              the specific challenges that {area.city} homeowners face. Our local expertise means faster
              diagnostics, better solutions, and a team that knows your neighborhood.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Don&apos;t trust your home&apos;s plumbing to just anyone. Choose a licensed, insured professional
              who has earned the trust of your {area.city} neighbors.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact-us" variant="primary">
                Schedule Service in {area.city}
              </Button>
              <Button href={`tel:${siteConfig.phoneRaw}`} variant="outline">
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Emergency */}
      <section className="py-16 lg:py-24 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Siren className="w-4 h-4" />
                24/7 Emergency Service
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 mb-6">
                Emergency Plumbing in {area.city} — Available 24/7
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Plumbing emergencies don&apos;t wait for business hours, and neither do we. Our emergency
                team serves {area.city} around the clock. Call us immediately if you notice:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Burst pipes or major water leaks",
                  "Sewage backup in your home",
                  "Complete loss of water supply",
                  "Gas line leak (rotten egg smell)",
                  "Flooding from a plumbing failure",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href={`tel:${siteConfig.phoneRaw}`} variant="primary" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Call: {siteConfig.phone}
              </Button>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-red-600 font-medium">Emergency Service Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionLogo />
          <h2 className="text-3xl font-bold text-navy-800 mb-4">
            A {siteConfig.differentiatorLabel} Plumbing Company Serving {area.city}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {siteConfig.businessName} is a {siteConfig.differentiator} plumbing company built on the
            values of integrity, hard work, and community service. We serve {area.city} because this
            is our home — and we treat every customer like a neighbor.
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

      {/* Residential Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLogo />
            <h2 className="text-3xl font-bold text-navy-800 mb-4">
              Residential Plumbing Services in {area.city}
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
            <Button href="/contact-us" variant="primary">Fix My Plumbing Issue</Button>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLogo />
            <h2 className="text-3xl font-bold text-navy-800 mb-4">
              Commercial Plumbing Services in {area.city}
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
            <h2 className="text-3xl font-bold text-navy-800 mb-4">
              Why {area.city} Chooses {siteConfig.businessName}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Licensed & Insured", desc: "Full state licensing and comprehensive insurance for your protection." },
              { icon: DollarSign, title: "Transparent Pricing", desc: "Upfront quotes with no hidden fees or surprise charges. Ever." },
              { icon: Siren, title: "24/7 Emergency Service", desc: "Round-the-clock availability for urgent plumbing emergencies." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-md p-8 border border-gray-100 text-center">
                <item.icon className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-navy-800 text-lg mb-2">{item.title}</h3>
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
            <h2 className="text-3xl font-bold text-navy-800 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600">Simple, stress-free plumbing service in {area.city}.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard number={1} title="Reach Out" description="Call us or fill out our online form. We'll schedule service at your convenience." />
            <StepCard number={2} title="Inspection & Diagnosis" description="Our licensed plumber arrives on time with upfront, transparent pricing." />
            <StepCard number={3} title="Expert Service" description="We complete the work with high-quality materials and proven techniques." />
            <StepCard number={4} title="Completion & Assurance" description="We walk you through the results and leave your property clean." />
          </div>
          <div className="text-center mt-10">
            <Button href="/contact-us" variant="primary" size="lg">
              Schedule Service in {area.city}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
