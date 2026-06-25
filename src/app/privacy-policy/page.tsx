import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.businessName}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-clay-800 mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Last updated: January 1, 2025
          </p>
          <p className="text-gray-600 leading-relaxed">
            {siteConfig.businessName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to
            protecting your personal data. This privacy policy explains how we collect, use, and
            safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-clay-800 mt-8">Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">
            We may collect the following types of information: name, email address, phone number,
            delivery address, and any details you provide through our contact and quote forms.
          </p>

          <h2 className="text-2xl font-bold text-clay-800 mt-8">How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed">
            We use your information to: provide and improve our tile products and services, respond
            to your enquiries, prepare quotes, coordinate production and delivery, and communicate
            about promotions or updates related to our products.
          </p>

          <h2 className="text-2xl font-bold text-clay-800 mt-8">Data Protection</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal
            data against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold text-clay-800 mt-8">Third-Party Sharing</h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell, trade, or otherwise transfer your personal information to outside parties
            except as necessary to provide our services or as required by law.
          </p>

          <h2 className="text-2xl font-bold text-clay-800 mt-8">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions about this privacy policy, please contact us at{" "}
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
