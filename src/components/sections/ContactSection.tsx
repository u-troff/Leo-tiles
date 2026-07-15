"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import SectionLogo from "@/components/ui/SectionLogo";
import { siteConfig } from "@/data/site-config";

const tileProducts = ["Batavian Floor Tiles", "Dutch Klompies", "Hexagon Tiles", "Wine Coolers", "Clay Pellets", "Custom Order"];

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Enquiry from leotiles.co.za");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProduct of Interest: ${product}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-16 lg:py-24 bg-stone-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left, Contact Info */}
          <div>
            <SectionLogo label="Get in Touch" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-clay-900 mb-8 leading-tight">
              We&rsquo;re Here to Help
            </h2>

            <div className="space-y-5 mb-8">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-rust-50 flex items-center justify-center flex-shrink-0 group-hover:bg-rust-100 transition-colors">
                  <MapPin className="w-5 h-5 text-rust-500" />
                </div>
                <div>
                  <p className="font-semibold text-clay-800 text-sm group-hover:text-rust-500 transition-colors">
                    Our Address
                  </p>
                  <p className="text-gray-500 text-sm">{siteConfig.address.full}</p>
                </div>
              </a>

              <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-rust-50 flex items-center justify-center flex-shrink-0 group-hover:bg-rust-100 transition-colors">
                  <Phone className="w-5 h-5 text-rust-500" />
                </div>
                <div>
                  <p className="font-semibold text-clay-800 text-sm group-hover:text-rust-500 transition-colors">
                    Phone
                  </p>
                  <p className="text-gray-500 text-sm">{siteConfig.phone}</p>
                </div>
              </a>

              <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-rust-50 flex items-center justify-center flex-shrink-0 group-hover:bg-rust-100 transition-colors">
                  <Mail className="w-5 h-5 text-rust-500" />
                </div>
                <div>
                  <p className="font-semibold text-clay-800 text-sm group-hover:text-rust-500 transition-colors">
                    Email
                  </p>
                  <p className="text-gray-500 text-sm">{siteConfig.email}</p>
                </div>
              </a>
            </div>

            {/* Map */}
            <div className="aspect-video overflow-hidden">
              <iframe
                title="Leo Tiles location, 30 Industrial Road, Kraaifontein"
                src="https://maps.google.com/maps?q=-33.8417622,18.7304505&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right, Form */}
          <div className="bg-white border border-stone-300 p-8 lg:p-10">
            <h3 className="font-serif text-2xl font-bold text-clay-900 mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  Full Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-stone-300 bg-stone-50 text-clay-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors"
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-stone-300 bg-stone-50 text-clay-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors"
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-stone-300 bg-stone-50 text-clay-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors"
                    placeholder="+27 79 150 0160"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-product" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  Product of Interest
                </label>
                <select
                  id="contact-product"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full px-4 py-3 border border-stone-300 bg-stone-50 text-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors"
                >
                  <option value="">Select a product</option>
                  {tileProducts.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-stone-300 bg-stone-50 text-clay-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors resize-none"
                  placeholder="Tell us about your project, dimensions, tile type, installation needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rust-500 text-white py-3.5 font-semibold text-sm hover:bg-rust-600 transition-colors"
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
