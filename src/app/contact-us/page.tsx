import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `Contact Us`,
  description: `Contact ${siteConfig.businessName} for handmade terracotta tiles in ${siteConfig.region}. Call ${siteConfig.phone} or fill out our form for a quote. We respond within 24 hours.`,
};

export default function ContactUsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-clay-50 to-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-clay-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Ready to start your tile project? Reach out today for a quote.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
