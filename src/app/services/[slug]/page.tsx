import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, CalendarDays, CheckCircle, AlertTriangle } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLogo from "@/components/ui/SectionLogo";
import AccordionItem from "@/components/ui/AccordionItem";
import ReviewsCarousel from "@/components/sections/ReviewsCarousel";
import { residentialServices } from "@/data/services-residential";
import { commercialServices } from "@/data/services-commercial";
import { siteConfig } from "@/data/site-config";

const allServices = [...residentialServices, ...commercialServices];

export async function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in ${siteConfig.region}`,
    description: `${service.title} from ${siteConfig.businessName} in ${siteConfig.region}. ${service.shortDescription} Call ${siteConfig.phone} for a quote.`,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-clay-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <SectionLogo />
            <h1 className="text-4xl lg:text-5xl font-bold text-clay-800 mb-6">
              {service.title} in {siteConfig.region}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{service.shortDescription}</p>
            <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
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

      {/* Signs You Need This Service */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLogo />
              <h2 className="text-3xl font-bold text-clay-800 mb-6">
                Signs You Need {service.title}
              </h2>
              <p className="text-gray-600 mb-6">
                Here&apos;s how to know if {service.title.toLowerCase()} is right for your project.
              </p>
              <ul className="space-y-3">
                {service.signs.map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-rust-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/get-a-quote" variant="primary">
                  Get a Quote
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-clay-100 to-clay-200 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-clay-600 font-medium">Service Photo</p>
                <p className="text-clay-500 text-sm mt-1">{service.title} in progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLogo />
            <h2 className="text-3xl font-bold text-clay-800 mb-4">
              Benefits of Professional {service.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLogo />
            <h2 className="text-3xl font-bold text-clay-800 mb-4">Our {service.title} Process</h2>
            <p className="text-gray-600">
              We make the process straightforward and stress-free from start to finish.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { step: 1, title: "Contact Us", desc: "Call us or fill out our online form to describe your project. We'll confirm feasibility and lead times." },
              { step: 2, title: "Sample & Specify", desc: "We confirm sizing and quantity, and provide an upfront, transparent quote." },
              { step: 3, title: "Production & Delivery", desc: "Once you approve, your order is produced by hand and carefully delivered." },
              { step: 4, title: "Installation (Optional)", desc: "If you choose our installation team, we complete the job and walk you through the results." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-rust-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-clay-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLogo />
            <h2 className="text-3xl font-bold text-clay-800 mb-4">
              {service.title} FAQ
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            {service.faqs.map((faq, i) => (
              <AccordionItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <ReviewsCarousel />

      {/* Final CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-clay-800 mb-4">
            Ready to Order {service.title}?
          </h2>
          <p className="text-gray-600 mb-8">
            Call us today for a no-obligation quote. Our team is ready to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/get-a-quote" variant="primary" size="lg">
              <CalendarDays className="w-5 h-5 mr-2" />
              Get a Quote
            </Button>
            <Button href={`tel:${siteConfig.phoneRaw}`} variant="secondary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Call {siteConfig.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
