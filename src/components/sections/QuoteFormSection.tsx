"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site-config";

const tileProducts = ["Batavian Floor Tiles", "Dutch Klompies", "Hexagon Tiles", "Wine Coolers", "Clay Pellets", "Custom Order"];

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
    <section id="quote" className="bg-stone-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-xl mx-auto mb-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-clay-900 mb-3.5">We&rsquo;re here to help</h2>
          <p className="text-stone-700 leading-relaxed">
            Send us a message and we&rsquo;ll get back to you within 24 hours with a quote and lead time.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-[760px] mx-auto bg-stone-50 p-6 lg:p-11 grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <label className="flex flex-col gap-2 text-sm font-semibold text-clay-900">
            Full Name
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="font-normal px-3.5 py-3 border border-stone-300 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold text-clay-900">
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-normal px-3.5 py-3 border border-stone-300 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold text-clay-900">
            Phone
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="font-normal px-3.5 py-3 border border-stone-300 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold text-clay-900">
            Product of Interest
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="font-normal px-3.5 py-3 border border-stone-300 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500"
            >
              <option value="">Select a product</option>
              {tileProducts.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold text-clay-900 lg:col-span-2">
            Message
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project…"
              className="font-normal px-3.5 py-3 border border-stone-300 bg-white text-sm resize-y focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500"
            />
          </label>
          <button
            type="submit"
            className="lg:col-span-2 mt-1 bg-rust-500 text-stone-50 font-bold text-[15.5px] py-4 hover:bg-rust-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
