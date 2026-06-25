"use client";

import Image from "next/image";
import { Star, Phone, CalendarDays, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">

      {/* ── Background ─────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/37345805/pexels-photo-37345805.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
          alt="Stack of handmade terracotta tiles in warm clay tones"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Layered gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-clay-900/95 via-clay-900/80 to-clay-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-clay-900/60 via-transparent to-transparent" />
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Main Copy */}
          <div className="animate-fade-in-up">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-rust-500" />
              <span className="text-rust-400 text-[11px] font-semibold uppercase tracking-[0.22em]">
                50+ Years of Craft · {siteConfig.differentiatorLabel}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-5 leading-[1.05]">
              Handmade.
              <br />
              <em className="not-italic text-rust-400">Kiln-Fired.</em>
              <br />
              <span className="text-white/80">Yours.</span>
            </h1>

            <p className="text-base text-white/65 mb-8 max-w-md leading-relaxed">
              {siteConfig.tagline}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-9">
              {[
                { value: `${siteConfig.ratings.google}★`, label: "Google Rating" },
                { value: `${siteConfig.ratings.reviewCount}+`, label: "Verified Reviews" },
                { value: "50+", label: "Years of Craft" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-serif text-2xl font-bold text-rust-400 leading-none">
                    {stat.value}
                  </span>
                  <span className="text-white/50 text-xs mt-0.5 uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button href="/get-a-quote" variant="primary" size="lg">
                <CalendarDays className="w-4 h-4 mr-2" />
                Get a Quote
              </Button>
              <Button href={`tel:${siteConfig.phoneRaw}`} variant="secondary" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Right — Trust Cards */}
          <div className="flex flex-col gap-4 lg:items-end animate-fade-in-up delay-200">

            {/* Google Rating Card */}
            <div className="bg-white/8 backdrop-blur-md border border-white/15 p-6 max-w-sm w-full hover:bg-white/12 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-white flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Google Reviews</p>
                  <p className="text-white/45 text-xs">{siteConfig.ratings.reviewCount}+ verified reviews</p>
                </div>
              </div>
              <div className="flex items-end gap-3">
                <span className="font-serif text-5xl font-bold text-white leading-none">
                  {siteConfig.ratings.google}
                </span>
                <div className="pb-1">
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-rust-400 text-rust-400" />
                    ))}
                  </div>
                  <p className="text-white/40 text-xs">out of 5.0</p>
                </div>
              </div>
            </div>

            {/* Facebook Rating Card */}
            <div className="bg-white/8 backdrop-blur-md border border-white/15 p-6 max-w-sm w-full hover:bg-white/12 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[#1877F2] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-current" aria-label="Facebook">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Facebook Reviews</p>
                  <p className="text-white/45 text-xs">Recommended by locals</p>
                </div>
              </div>
              <div className="flex items-end gap-3">
                <span className="font-serif text-5xl font-bold text-white leading-none">
                  {siteConfig.ratings.facebook}
                </span>
                <div className="pb-1">
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-rust-400 text-rust-400" />
                    ))}
                  </div>
                  <p className="text-white/40 text-xs">out of 5.0</p>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2.5 max-w-sm w-full px-1">
              <ShieldCheck className="w-4 h-4 text-rust-400 flex-shrink-0" />
              <p className="text-white/45 text-xs">
                Family-owned and craft-certified — handmade in Cape Town since the 1970s.
              </p>
            </div>
          </div>
        </div>

        {/* ── Inline Quote Form ────────────────────────────── */}
        <div className="mt-16 bg-white/8 backdrop-blur-md border border-white/15 p-8 animate-fade-in-up delay-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-rust-500" />
            <h3 className="text-white font-semibold text-base tracking-wide">Request a Quote</h3>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 bg-white/8 border border-white/15 text-white placeholder-white/35 text-sm focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-3 bg-white/8 border border-white/15 text-white placeholder-white/35 text-sm focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 bg-white/8 border border-white/15 text-white placeholder-white/35 text-sm focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors"
            />
            <select className="px-4 py-3 bg-white/8 border border-white/15 text-white/50 text-sm focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors">
              <option value="">Tile Product</option>
              {["Batavian Floor Tiles", "Dutch Klompies", "Hexagon Tiles", "Wine Coolers", "Clay Pellets", "Custom Order"].map((product) => (
                <option key={product} value={product} className="text-clay-800 bg-white">
                  {product}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-rust-500 text-white px-6 py-3 font-semibold text-sm hover:bg-rust-600 transition-colors"
            >
              Get a Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
