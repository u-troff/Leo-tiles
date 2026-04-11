"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import SectionLogo from "@/components/ui/SectionLogo";
import { siteConfig } from "@/data/site-config";

export default function ContactSection() {
  return (
    <section className="py-16 lg:py-24 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — Contact Info */}
          <div>
            <SectionLogo label="Get in Touch" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-8 leading-tight">
              We&rsquo;re Here to Help
            </h2>

            <div className="space-y-5 mb-8">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-800 text-sm group-hover:text-orange-500 transition-colors">
                    Our Address
                  </p>
                  <p className="text-gray-500 text-sm">{siteConfig.address.full}</p>
                </div>
              </a>

              <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-800 text-sm group-hover:text-orange-500 transition-colors">
                    Phone
                  </p>
                  <p className="text-gray-500 text-sm">{siteConfig.phone}</p>
                </div>
              </a>

              <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold text-navy-800 text-sm group-hover:text-orange-500 transition-colors">
                    Email
                  </p>
                  <p className="text-gray-500 text-sm">{siteConfig.email}</p>
                </div>
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="bg-navy-100 aspect-video flex items-center justify-center">
              <div className="text-center p-4">
                <MapPin className="w-7 h-7 text-navy-400 mx-auto mb-2" />
                <p className="text-navy-500 font-medium text-sm">Google Map Embed</p>
                <p className="text-navy-400 text-xs mt-0.5">Replace with embedded Google Map</p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white border border-cream-300 p-8 lg:p-10">
            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  Full Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-cream-300 bg-cream-50 text-navy-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-cream-300 bg-cream-50 text-navy-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                    Phone *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-cream-300 bg-cream-50 text-navy-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-area" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  Service Area
                </label>
                <select
                  id="contact-area"
                  className="w-full px-4 py-3 border border-cream-300 bg-cream-50 text-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  <option value="">Select your area</option>
                  {siteConfig.serviceAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  className="w-full px-4 py-3 border border-cream-300 bg-cream-50 text-navy-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  className="w-full px-4 py-3 border border-cream-300 bg-cream-50 text-navy-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                  placeholder="Tell us about your plumbing needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3.5 font-semibold text-sm hover:bg-orange-600 transition-colors"
              >
                Send Message
              </button>
              <p className="text-xs text-gray-400 text-center">
                We will contact you back within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
