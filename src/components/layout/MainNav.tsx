"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
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
    <header className="sticky top-0 z-50 bg-warm-linen/85 backdrop-blur-md border-b border-mortar-gray/20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-[68px] lg:h-20">

          {/* ── Logo ─────────────────────────────────────────── */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-display text-2xl lg:text-[26px] font-semibold text-primary tracking-tight">
              LEO TILES
            </span>
            <span className="label-caps text-[9px] text-mortar-gray mt-0.5">
              Handmade Terracotta · Est. {siteConfig.establishedYear}
            </span>
          </Link>

          {/* ── Desktop Nav ───────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-9">
            <Link href="/residential" className="nav-link label-caps text-charcoal-ash hover:text-clay-deep transition-colors">
              Products
            </Link>
            <Link href="/work-gallery" className="nav-link label-caps text-charcoal-ash hover:text-clay-deep transition-colors">
              Gallery
            </Link>
            <Link href="/guides" className="nav-link label-caps text-charcoal-ash hover:text-clay-deep transition-colors">
              Guides
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 label-caps text-charcoal-ash hover:text-clay-deep transition-colors">
                Services
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-warm-linen border border-mortar-gray/25 py-2 w-64">
                  {residentialServices.slice(0, 6).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-5 py-2.5 text-sm text-charcoal-ash hover:bg-sand-bone hover:text-clay-deep transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Area Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 label-caps text-charcoal-ash hover:text-clay-deep transition-colors">
                Service Area
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-warm-linen border border-mortar-gray/25 py-2 w-56">
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/${area.slug}`}
                      className="block px-5 py-2.5 text-sm text-charcoal-ash hover:bg-sand-bone hover:text-clay-deep transition-colors"
                    >
                      {area.city}, {area.state}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 label-caps text-charcoal-ash hover:text-clay-deep transition-colors">
                Heritage
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-warm-linen border border-mortar-gray/25 py-2 w-56">
                  {[
                    { label: "Our Story", href: "/about-us" },
                    { label: "Blog", href: "/blog" },
                    { label: "Wine Farms", href: "/wine-farms" },
                    { label: "Designer Collaborations", href: "/designer-collaborations" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-2.5 text-sm text-charcoal-ash hover:bg-sand-bone hover:text-clay-deep transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact-us" className="nav-link label-caps text-charcoal-ash hover:text-clay-deep transition-colors">
              Contact
            </Link>
          </nav>

          {/* ── Desktop CTA ───────────────────────────────────── */}
          <Link
            href="/get-a-quote"
            className="group hidden lg:inline-flex items-center bg-clay-deep text-warm-linen label-caps px-6 py-3.5 hover:bg-primary transition-colors"
          >
            Request Quote
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* ── Mobile Menu Button ────────────────────────────── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal-ash"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ───────────────────────────────────────── */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 bottom-0 top-[68px] bg-warm-linen z-40 overflow-y-auto transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="px-5 py-6 divide-y divide-mortar-gray/20">
          <Link
            href="/get-a-quote"
            className="flex items-center justify-center gap-2 mb-4 bg-clay-deep text-warm-linen py-4 label-caps hover:bg-primary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Request Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          {[
            { label: "Products", href: "/residential" },
            { label: "Gallery", href: "/work-gallery" },
            { label: "Guides", href: "/guides" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center py-4 text-charcoal-ash font-display text-xl hover:text-clay-deep transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div>
            <button
              onClick={() => toggleDropdown("services")}
              className="flex items-center justify-between w-full py-4 text-charcoal-ash font-display text-xl"
            >
              Services
              <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === "services" && "rotate-180")} />
            </button>
            {activeDropdown === "services" && (
              <div className="pb-3 pl-1 space-y-2">
                {residentialServices.slice(0, 6).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block py-1.5 text-sm text-secondary hover:text-clay-deep"
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
              className="flex items-center justify-between w-full py-4 text-charcoal-ash font-display text-xl"
            >
              Service Area
              <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === "areas" && "rotate-180")} />
            </button>
            {activeDropdown === "areas" && (
              <div className="pb-3 pl-1 space-y-2">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/${area.slug}`}
                    className="block py-1.5 text-sm text-secondary hover:text-clay-deep"
                    onClick={() => setMobileOpen(false)}
                  >
                    {area.city}, {area.state}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { label: "Our Story", href: "/about-us" },
            { label: "Blog", href: "/blog" },
            { label: "Wine Farms", href: "/wine-farms" },
            { label: "Designer Collaborations", href: "/designer-collaborations" },
            { label: "Contact", href: "/contact-us" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center py-4 text-charcoal-ash font-display text-xl hover:text-clay-deep transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
