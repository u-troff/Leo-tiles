import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export default function Footer() {
  return (
    <footer className="w-full pt-40 pb-20 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-20 bg-charcoal-surface border-t border-ink-stroke relative">
      <div className="md:col-span-6">
        <div className="font-serif text-[48px] leading-[56px] text-architectural-gold mb-8">
          LEO TILES
        </div>
        <p className="font-serif text-base text-on-surface-variant max-w-sm mb-12 leading-relaxed">
          Handmade terracotta, fired in {siteConfig.address.city}, {siteConfig.address.state}, South
          Africa since {siteConfig.establishedYear}.
        </p>
        <div className="flex gap-8 font-mono text-[10px] tracking-widest uppercase">
          <a
            href={siteConfig.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-architectural-gold transition-colors"
          >
            Instagram
          </a>
          <a
            href={siteConfig.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-architectural-gold transition-colors"
          >
            Facebook
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-architectural-gold transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      <div className="md:col-span-3">
        <div className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-primary mb-10">
          Explore
        </div>
        <div className="flex flex-col gap-6 font-serif text-base text-on-surface-variant">
          <Link href="/residential" className="hover:text-architectural-gold transition-colors">
            Products
          </Link>
          <Link href="/work-gallery" className="hover:text-architectural-gold transition-colors">
            Past Projects
          </Link>
          <Link href="/guides" className="hover:text-architectural-gold transition-colors">
            Guides
          </Link>
          <Link href="/wine-farms" className="hover:text-architectural-gold transition-colors">
            Wine Farms
          </Link>
        </div>
      </div>

      <div className="md:col-span-3">
        <div className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-primary mb-10">
          Company
        </div>
        <div className="flex flex-col gap-6 font-serif text-base text-on-surface-variant">
          <Link href="/about-us" className="hover:text-architectural-gold transition-colors">
            About Us
          </Link>
          <Link href="/blog" className="hover:text-architectural-gold transition-colors">
            Blog
          </Link>
          <Link href="/contact-us" className="hover:text-architectural-gold transition-colors">
            Contact
          </Link>
          <Link href="/get-a-quote" className="hover:text-architectural-gold transition-colors">
            Get a Quote
          </Link>
        </div>
      </div>

      <div className="md:col-span-12 pt-20 border-t border-ink-stroke flex flex-col md:flex-row justify-between gap-8 font-mono text-[10px] text-on-surface-variant tracking-widest uppercase">
        <div>
          © {new Date().getFullYear()} {siteConfig.businessName.toUpperCase()} — Forged in kiln &amp;
          stone
        </div>
        <div className="flex gap-8">
          <Link href="/privacy-policy" className="hover:text-architectural-gold transition-colors">
            Privacy
          </Link>
          <Link href="/terms-of-service" className="hover:text-architectural-gold transition-colors">
            Terms
          </Link>
        </div>
        <div>
          Designed by{" "}
          <a
            href="https://u-flow.solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-architectural-gold hover:text-primary transition-colors"
          >
            {siteConfig.agencyName}
          </a>
        </div>
      </div>
    </footer>
  );
}
