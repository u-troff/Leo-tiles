"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Flame, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { residentialServices } from "@/data/services-residential";
import { serviceAreas } from "@/data/service-areas";
import { cn } from "@/lib/utils";

export default function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-50 border-b border-stone-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* ── Logo ─────────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-rust-500 flex items-center justify-center group-hover:bg-rust-600 transition-colors">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-[19px] font-bold text-clay-900 leading-tight">
                {siteConfig.businessName.split(" ")[0]}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-rust-500">
                Handmade Terracotta Tiles
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ───────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link href="/residential" className="nav-link text-sm font-medium text-clay-700 hover:text-rust-500 transition-colors">
              Products
            </Link>
            <Link href="/commercial" className="nav-link text-sm font-medium text-clay-700 hover:text-rust-500 transition-colors">
              Accessories
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center gap-1 text-sm font-medium text-clay-700 hover:text-rust-500 transition-colors">
                Services
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white border border-stone-300 shadow-xl py-2 w-64">
                  {residentialServices.slice(0, 6).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-5 py-2.5 text-sm text-clay-700 hover:bg-stone-100 hover:text-rust-500 transition-colors border-l-2 border-transparent hover:border-rust-500"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Area Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center gap-1 text-sm font-medium text-clay-700 hover:text-rust-500 transition-colors">
                Service Area
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white border border-stone-300 shadow-xl py-2 w-56">
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/${area.slug}`}
                      className="block px-5 py-2.5 text-sm text-clay-700 hover:bg-stone-100 hover:text-rust-500 transition-colors border-l-2 border-transparent hover:border-rust-500"
                    >
                      {area.city}, {area.state}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center gap-1 text-sm font-medium text-clay-700 hover:text-rust-500 transition-colors">
                About Us
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white border border-stone-300 shadow-xl py-2 w-48">
                  <Link
                    href="/about-us"
                    className="block px-5 py-2.5 text-sm text-clay-700 hover:bg-stone-100 hover:text-rust-500 transition-colors border-l-2 border-transparent hover:border-rust-500"
                  >
                    Company Overview
                  </Link>
                  <Link
                    href="/blog"
                    className="block px-5 py-2.5 text-sm text-clay-700 hover:bg-stone-100 hover:text-rust-500 transition-colors border-l-2 border-transparent hover:border-rust-500"
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/contact-us" className="nav-link text-sm font-medium text-clay-700 hover:text-rust-500 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* ── Desktop CTA ───────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-rust-500 text-white px-5 py-2.5 text-sm font-semibold hover:bg-rust-600 transition-colors shadow-sm rounded-none"
            >
              Get a Quote
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 text-clay-700 px-2 py-2.5 text-sm font-semibold hover:text-rust-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
          </div>

          {/* ── Mobile Menu Button ────────────────────────────── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-clay-800"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ───────────────────────────────────────── */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[calc(72px+34px)] bg-stone-50 z-40 overflow-y-auto transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="px-4 py-6 space-y-0 divide-y divide-stone-300">
          <Link
            href="/get-a-quote"
            className="flex items-center justify-center gap-2 my-3 bg-rust-500 text-white py-3.5 font-semibold text-sm hover:bg-rust-600 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </Link>
          <Link
            href="/residential"
            className="flex items-center py-3.5 text-clay-800 font-medium text-sm hover:text-rust-500 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/commercial"
            className="flex items-center py-3.5 text-clay-800 font-medium text-sm hover:text-rust-500 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Accessories
          </Link>

          <div>
            <button
              onClick={() => toggleDropdown("services")}
              className="flex items-center justify-between w-full py-3.5 text-clay-800 font-medium text-sm"
            >
              Services
              <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === "services" && "rotate-180")} />
            </button>
            {activeDropdown === "services" && (
              <div className="pb-3 pl-4 space-y-2 border-t border-stone-200 pt-2">
                {residentialServices.slice(0, 6).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block py-1.5 text-sm text-gray-600 hover:text-rust-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown("areas")}
              className="flex items-center justify-between w-full py-3.5 text-clay-800 font-medium text-sm"
            >
              Service Area
              <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === "areas" && "rotate-180")} />
            </button>
            {activeDropdown === "areas" && (
              <div className="pb-3 pl-4 space-y-2 border-t border-stone-200 pt-2">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/${area.slug}`}
                    className="block py-1.5 text-sm text-gray-600 hover:text-rust-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    {area.city}, {area.state}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about-us"
            className="flex items-center py-3.5 text-clay-800 font-medium text-sm hover:text-rust-500 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="flex items-center py-3.5 text-clay-800 font-medium text-sm hover:text-rust-500 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact-us"
            className="flex items-center py-3.5 text-clay-800 font-medium text-sm hover:text-rust-500 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>

          <div className="pt-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex w-full items-center justify-center gap-2 bg-rust-500 text-white py-3.5 font-semibold text-sm hover:bg-rust-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {siteConfig.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
