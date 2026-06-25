"use client";

import { useState } from "react";
import SectionLogo from "@/components/ui/SectionLogo";
import ServiceCard from "@/components/ui/ServiceCard";
import { residentialServices } from "@/data/services-residential";
import { commercialServices } from "@/data/services-commercial";
import { cn } from "@/lib/utils";

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential");

  const services = activeTab === "residential" ? residentialServices : commercialServices;

  return (
    <section className="py-16 lg:py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <SectionLogo label="Our Services" align="center" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-clay-900 mb-4 leading-tight">
            Handmade Terracotta Tiles
            <br />
            <em className="not-italic text-rust-500">& Everything You Need to Install Them</em>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            From signature floor tiles to the adhesive, grout, and sealant that complete the job —
            all sourced from one kiln.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex border border-stone-300 bg-stone-100">
            <button
              onClick={() => setActiveTab("residential")}
              className={cn(
                "px-8 py-2.5 text-sm font-semibold transition-all tracking-wide",
                activeTab === "residential"
                  ? "bg-rust-500 text-white"
                  : "text-clay-700 hover:bg-stone-200"
              )}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("commercial")}
              className={cn(
                "px-8 py-2.5 text-sm font-semibold transition-all tracking-wide",
                activeTab === "commercial"
                  ? "bg-rust-500 text-white"
                  : "text-clay-700 hover:bg-stone-200"
              )}
            >
              Accessories & Services
            </button>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-stone-300">
          {services.slice(0, 8).map((service) => (
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
  );
}
