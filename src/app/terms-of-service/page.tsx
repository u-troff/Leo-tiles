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
        <h1 className="text-4xl font-bold text-clay-800 mb-8">Terms of Service</h1>
        <div className="prose prose-gray max-w-none space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Last updated: January 1, 2025
          </p>
          <p className="text-gray-600 leading-relaxed">
            These Terms of Service govern your use of the {siteConfig.businessName} website and
            services. By accessing our website or engaging our services, you agree to these terms.
          </p>

          <h2 className="text-2xl font-bold text-clay-800 mt-8">Products & Services</h2>
          <p className="text-gray-600 leading-relaxed">
            {siteConfig.businessName} manufactures and supplies handmade terracotta tiles, with
            optional installation services, across {siteConfig.region} and nationwide. All orders
            are subject to production capacity and lead times.
          </p>

          <h2 className="text-2xl font-bold text-clay-800 mt-8">Pricing & Payment</h2>
          <p className="text-gray-600 leading-relaxed">
            We provide upfront estimates before confirming any order. Payment terms are agreed at
            the time of order confirmation. We accept cash, EFT, and major credit cards.
          </p>

          <h2 className="text-2xl font-bold text-clay-800 mt-8">Warranties</h2>
          <p className="text-gray-600 leading-relaxed">
            We stand behind the quality of our tiles and installation work. Specific warranty terms
            will be communicated at the time of order. Variation in tone and texture between
            handmade tiles is a natural characteristic of the product, not a defect.
          </p>

          <h2 className="text-2xl font-bold text-clay-800 mt-8">Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            Our liability for any claim arising from our products or services is limited to the
            amount paid for the specific order in question.
          </p>

          <h2 className="text-2xl font-bold text-clay-800 mt-8">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions about these terms, please contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-rust-500 hover:text-rust-600">
              {siteConfig.email}
            </a>{" "}
            or call us at{" "}
            <a href={`tel:${siteConfig.phoneRaw}`} className="text-rust-500 hover:text-rust-600">
              {siteConfig.phone}
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
