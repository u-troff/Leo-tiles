import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { residentialServices } from "@/data/services-residential";
import { commercialServices } from "@/data/services-commercial";

export default function Footer() {
  return (
    <footer className="bg-sand-bone">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* ── Brand Column ───────────────────────────────── */}
          <div className="md:col-span-4">
            <span className="font-display text-4xl font-semibold text-primary tracking-tight">
              LEO TILES
            </span>
            <p className="text-secondary text-[15px] leading-relaxed max-w-xs mt-6 mb-8">
              Handcrafted terracotta heritage since {siteConfig.establishedYear}. Fired in{" "}
              {siteConfig.address.city}, {siteConfig.address.state}, every tile shaped by hand.
            </p>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="font-display text-2xl text-charcoal-ash hover:text-clay-deep transition-colors"
            >
              {siteConfig.phone}
            </a>
            <p className="text-mortar-gray text-sm mt-4 leading-relaxed">
              {siteConfig.address.full}
              <br />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-clay-deep transition-colors">
                {siteConfig.email}
              </a>
            </p>
          </div>

          {/* ── Collection ─────────────────────────────────── */}
          <div className="md:col-span-3">
            <p className="label-caps text-charcoal-ash mb-6">Collection</p>
            <ul className="space-y-3.5">
              {residentialServices.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-secondary text-[15px] hover:text-clay-deep transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Accessories & Services ─────────────────────── */}
          <div className="md:col-span-2">
            <p className="label-caps text-charcoal-ash mb-6">Accessories</p>
            <ul className="space-y-3.5">
              {commercialServices.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-secondary text-[15px] hover:text-clay-deep transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company ────────────────────────────────────── */}
          <div className="md:col-span-3">
            <p className="label-caps text-charcoal-ash mb-6">Company</p>
            <ul className="space-y-3.5">
              {[
                { label: "Our Story", href: "/about-us" },
                { label: "Work Gallery", href: "/work-gallery" },
                { label: "Guides", href: "/guides" },
                { label: "Wine Farms", href: "/wine-farms" },
                { label: "Designer Collaborations", href: "/designer-collaborations" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact-us" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-secondary text-[15px] hover:text-clay-deep transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-6 mt-8">
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="label-caps text-mortar-gray hover:text-clay-deep transition-colors">
                Instagram
              </a>
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="label-caps text-mortar-gray hover:text-clay-deep transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ───────────────────────────────────── */}
        <div className="pt-10 mt-16 border-t border-mortar-gray/25 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          <p className="text-mortar-gray text-sm">
            &copy; {siteConfig.establishedYear}&ndash;{new Date().getFullYear()} {siteConfig.businessName}. Handcrafted Architectural Heritage.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy-policy" className="text-mortar-gray text-sm hover:text-clay-deep transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-mortar-gray text-sm hover:text-clay-deep transition-colors">
              Terms of Service
            </Link>
            <Link href="https://u-flow.solutions" target="_blank" rel="noopener noreferrer" className="text-mortar-gray text-sm hover:text-clay-deep transition-colors">
              {siteConfig.agencyName}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
