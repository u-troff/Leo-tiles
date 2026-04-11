import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.businessName}.`,
};

export default function TermsOfServicePage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-navy-800 mb-8">Terms of Service</h1>
        <div className="prose prose-gray max-w-none space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Last updated: January 1, 2025
          </p>
          <p className="text-gray-600 leading-relaxed">
            These Terms of Service govern your use of the {siteConfig.businessName} website and
            services. By accessing our website or engaging our services, you agree to these terms.
          </p>

          <h2 className="text-2xl font-bold text-navy-800 mt-8">Services</h2>
          <p className="text-gray-600 leading-relaxed">
            {siteConfig.businessName} provides residential and commercial plumbing services in the{" "}
            {siteConfig.region} area. All services are subject to availability and scheduling.
          </p>

          <h2 className="text-2xl font-bold text-navy-800 mt-8">Pricing & Payment</h2>
          <p className="text-gray-600 leading-relaxed">
            We provide upfront pricing before starting any work. Payment is due upon completion of
            services unless otherwise agreed upon in writing. We accept cash, check, and major credit
            cards.
          </p>

          <h2 className="text-2xl font-bold text-navy-800 mt-8">Warranties</h2>
          <p className="text-gray-600 leading-relaxed">
            We stand behind our work with warranties on labor and parts. Specific warranty terms will
            be communicated at the time of service. Manufacturer warranties on parts and equipment are
            separate and governed by the manufacturer&apos;s terms.
          </p>

          <h2 className="text-2xl font-bold text-navy-800 mt-8">Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            {siteConfig.businessName} is fully licensed and insured. Our liability for any claim
            arising from our services is limited to the amount paid for the specific service in question.
          </p>

          <h2 className="text-2xl font-bold text-navy-800 mt-8">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions about these terms, please contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-orange-500 hover:text-orange-600">
              {siteConfig.email}
            </a>{" "}
            or call us at{" "}
            <a href={`tel:${siteConfig.phoneRaw}`} className="text-orange-500 hover:text-orange-600">
              {siteConfig.phone}
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
