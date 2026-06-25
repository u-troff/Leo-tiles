import Link from "next/link";
import { Flame, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { residentialServices } from "@/data/services-residential";
import { commercialServices } from "@/data/services-commercial";

export default function Footer() {
  return (
    <footer className="bg-clay-900 text-white">
      {/* Top decorative bar */}
      <div className="h-1 bg-rust-500" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Brand Column ───────────────────────────────── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-rust-500 flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-[18px] font-bold text-white leading-tight">
                  {siteConfig.businessName.split(" ")[0]}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-rust-400">
                  Handmade Terracotta Tiles
                </span>
              </div>
            </div>

            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              A {siteConfig.differentiator}, kiln-fired terracotta tile manufacturer proudly
              crafting in {siteConfig.address.city}, {siteConfig.address.state} and delivering
              nationwide.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-clay-800 border border-white/10 flex items-center justify-center hover:bg-rust-500 hover:border-rust-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-clay-800 border border-white/10 flex items-center justify-center hover:bg-rust-500 hover:border-rust-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-9 h-9 bg-clay-800 border border-white/10 flex items-center justify-center hover:bg-rust-500 hover:border-rust-500 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-9 h-9 bg-clay-800 border border-white/10 flex items-center justify-center hover:bg-rust-500 hover:border-rust-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-rust-500 text-white px-5 py-3 text-sm font-semibold hover:bg-rust-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
          </div>

          {/* ── Quick Links ────────────────────────────────── */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-rust-400 mb-5">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Products", href: "/residential" },
                { label: "Accessories & Services", href: "/commercial" },
                { label: "About Us", href: "/about-us" },
                { label: "Blog", href: "/blog" },
                { label: "Get a Quote", href: "/get-a-quote" },
                { label: "Contact Us", href: "/contact-us" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/50 text-sm hover:text-rust-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Residential Services ───────────────────────── */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-rust-400 mb-5">
              Products
            </p>
            <ul className="space-y-2.5">
              {residentialServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/50 text-sm hover:text-rust-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Commercial Services ────────────────────────── */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-rust-400 mb-5">
              Accessories & Services
            </p>
            <ul className="space-y-2.5">
              {commercialServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/50 text-sm hover:text-rust-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ─────────────────────────────────────── */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-rust-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-rust-400 transition-colors">
              Terms of Service
            </Link>
          </div>
          <p>
            Designed by{" "}
            <Link href="https://u-flow.solutions" target="_blank" rel="noopener noreferrer" className="text-rust-400 font-medium">{siteConfig.agencyName}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
