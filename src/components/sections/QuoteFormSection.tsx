"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import { siteConfig } from "@/data/site-config";

const tileProducts = ["Batavian Floor Tiles", "Dutch Klompies", "Hexagon Tiles", "Wine Coolers", "Clay Pellets", "Custom Order"];

const inputClass =
  "font-normal text-base bg-transparent border-b border-mortar-gray/40 py-3 focus:outline-none focus:border-charcoal-ash focus:border-b-2 transition-colors placeholder:text-mortar-gray/70";

export default function QuoteFormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Quote request from leotiles.co.za");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProduct of Interest: ${product}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="quote" className="py-24 lg:py-40 bg-warm-linen">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow label="Request a Quote" />
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-charcoal-ash mb-6">
              We&rsquo;re here to help.
            </h2>
            <p className="text-secondary leading-relaxed">
              Send us a message and we&rsquo;ll get back to you within 24 hours with a quote and honest
              lead time for your project.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-7 lg:col-start-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
            <label className="flex flex-col gap-1">
              <span className="label-caps text-mortar-gray">Full Name</span>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="label-caps text-mortar-gray">Email</span>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="label-caps text-mortar-gray">Phone</span>
              <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="label-caps text-mortar-gray">Product of Interest</span>
              <select value={product} onChange={(e) => setProduct(e.target.value)} className={inputClass}>
                <option value="">Select a product</option>
                {tileProducts.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 md:col-span-2">
              <span className="label-caps text-mortar-gray">Message</span>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project…"
                className={`${inputClass} resize-y`}
              />
            </label>
            <button
              type="submit"
              className="group md:col-span-2 justify-self-start inline-flex items-center bg-clay-deep text-warm-linen label-caps px-10 py-5 hover:bg-primary transition-colors mt-2"
            >
              Send Message
              <ArrowRight className="ml-2.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
