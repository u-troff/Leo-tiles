import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import ReviewsGrid from "@/components/sections/ReviewsGrid";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQSection from "@/components/sections/FAQSection";
import { siteConfig } from "@/data/site-config";
import { residentialServices } from "@/data/services-residential";
import { commercialServices } from "@/data/services-commercial";
import { products } from "@/data/products";
import { residentialFAQs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "The Collection, Handmade Terracotta Tiles",
  description: `Handmade, kiln-fired terracotta tile products from ${siteConfig.businessName}. Batavian floor tiles, klompies, hexagon tiles, and custom orders. Call ${siteConfig.phone}.`,
};

const productImages = [
  "/images/design/courtyard.jpg",
  "/images/design/dining-room-2.jpg",
  "/images/design/kitchen.jpg",
  "/images/design/terrace.jpg",
  "/images/design/dining-room.jpg",
  "/images/design/herringbone-install.jpg",
];

const seriesTags = [
  "Signature Series",
  "Heritage Range",
  "Geometric Form",
  "Estate Collection",
  "Craft Pellets",
  "Bespoke",
];

const benefits = [
  "Genuine handmade character",
  "Custom sizes available",
  "Heritage restoration matching",
  "Expert installation available",
];

export default function ResidentialPage() {
  const batavian = products[0];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-warm-linen pt-20 lg:pt-28 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <Eyebrow label="The Collection" />
              <h1 className="font-display text-5xl lg:text-7xl leading-[1.05] text-charcoal-ash mb-8">
                Handmade. Kiln-Fired. Built to Last.
              </h1>
              <p className="text-secondary text-lg leading-relaxed max-w-2xl mb-4">
                Every tile we produce starts as raw clay, shaped by hand, and finished in our own kiln
                in {siteConfig.address.city}. No two tiles are identical, the natural variation in tone
                and texture is what gives handmade terracotta its character.
              </p>
              <p className="text-secondary leading-relaxed max-w-2xl">
                Every order comes with honest lead times, transparent pricing, and the option of
                professional installation by our own team.
              </p>
              <div className="flex flex-wrap gap-5 mt-10">
                <Button href="/get-a-quote" arrow>Get a Quote</Button>
                <Button href={`tel:${siteConfig.phoneRaw}`} variant="outline">
                  Call {siteConfig.phone}
                </Button>
              </div>
            </div>
            <div className="lg:col-span-3 lg:col-start-10">
              <div className="border-l border-clay-deep pl-6 py-2">
                <span className="label-caps text-clay-deep block mb-2">Currently Viewing</span>
                <span className="font-display text-2xl text-charcoal-ash">All Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Grid (staggered editorial) ───────────────── */}
      <section className="bg-warm-linen pb-24 lg:pb-40">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-24">
            {residentialServices.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group flex flex-col ${i % 2 === 1 ? "md:mt-24" : ""}`}
              >
                <div className="aspect-[4/5] relative overflow-hidden mb-7">
                  <div className="absolute top-0 left-0 w-full h-1 bg-clay-deep z-10" />
                  <Image
                    src={productImages[i % productImages.length]}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex justify-between items-baseline border-b border-mortar-gray/30 pb-4 mb-4">
                  <h3 className="font-display text-2xl lg:text-3xl text-charcoal-ash group-hover:text-clay-deep transition-colors">
                    {service.title}
                  </h3>
                  <span className="label-caps text-clay-deep shrink-0 ml-4 text-right">
                    {seriesTags[i % seriesTags.length]}
                  </span>
                </div>
                <p className="text-secondary leading-relaxed">{service.shortDescription}</p>
                <span className="mt-5 inline-flex items-center label-caps text-charcoal-ash group-hover:text-clay-deep transition-colors">
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why handmade is different ────────────────────────── */}
      <section className="bg-sand-bone py-24 lg:py-40">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/design/stacked-tiles.jpg"
                  alt="Freshly fired handmade terracotta tiles stacked at the factory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <Eyebrow label="The Difference" />
              <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-charcoal-ash mb-6">
                Why handmade terracotta is different.
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                Factory tiles are stamped from a mould, every piece identical, every batch the same.
                Handmade terracotta is shaped, dried, and fired one piece at a time, which is exactly why
                it develops the warmth and character that factory tiles cannot replicate.
              </p>
              <p className="text-secondary leading-relaxed mb-10">
                Working directly with the people who made your tiles means every detail, sizing, sealant,
                and grout, is handled correctly the first time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-clay-deep flex-shrink-0" />
                    <span className="text-charcoal-ash text-[15px]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Accessories & Finishing ──────────────────────────── */}
      <section className="bg-warm-linen py-24 lg:py-40">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow label="Complete the Job" />
              <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-charcoal-ash mb-6">
                Accessories &amp; finishing.
              </h2>
              <p className="text-secondary leading-relaxed">
                Everything needed to install and protect your tiles, the same adhesive, sealant and
                grout we use on our own installations.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              {commercialServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-start justify-between gap-6 border-b border-mortar-gray/25 py-6 first:border-t"
                >
                  <div>
                    <h3 className="font-display text-2xl text-charcoal-ash group-hover:text-clay-deep transition-colors mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-secondary text-[15px] leading-relaxed max-w-xl">
                      {service.shortDescription}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-mortar-gray shrink-0 mt-1.5 transition-all duration-300 group-hover:text-clay-deep group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Technical Specifications (dark editorial table) ──── */}
      <section className="bg-charcoal-ash text-warm-linen py-24 lg:py-40">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
            <div className="max-w-2xl">
              <Eyebrow label="Specifications" tone="dark" />
              <h2 className="font-display text-4xl lg:text-5xl leading-[1.1]">
                Technical integrity.
              </h2>
            </div>
            <p className="label-caps text-warm-linen/50">{batavian.name}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {batavian.specs.map((spec) => (
                  <tr key={spec.label} className="border-b border-warm-linen/15">
                    <th className="py-7 pr-8 font-display text-xl lg:text-2xl font-normal align-top w-1/3">
                      {spec.label}
                    </th>
                    <td className="py-7 text-warm-linen/70 text-[15px] lg:text-base leading-relaxed align-top">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12 flex flex-wrap gap-5">
            <Button href="/get-a-quote" arrow className="!bg-warm-linen !text-charcoal-ash hover:!bg-sand-bone">
              Request a Sample
            </Button>
            {batavian.relatedGuideSlug && (
              <Button href={`/guides/${batavian.relatedGuideSlug}`} variant="outline" className="!border-warm-linen !text-warm-linen hover:!bg-warm-linen hover:!text-charcoal-ash">
                Read the Guide
              </Button>
            )}
          </div>
        </div>
      </section>

      <ReviewsGrid />
      <ServiceAreas />
      <FAQSection faqs={residentialFAQs} title="Tile product questions, answered." />
    </>
  );
}
