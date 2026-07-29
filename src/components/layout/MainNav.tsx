"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Products", href: "/residential" },
  { label: "Past Projects", href: "/work-gallery" },
  { label: "Guides", href: "/guides" },
  { label: "Wine Farms", href: "/wine-farms" },
];

export default function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop transition-all duration-500",
        scrolled
          ? "py-4 bg-charcoal-surface/95 backdrop-blur-md border-b border-architectural-gold/20"
          : "py-8 bg-transparent backdrop-blur-sm"
      )}
    >
      <Link
        href="/"
        className="font-serif text-[28px] md:text-[32px] font-normal tracking-tighter text-primary hover:text-architectural-gold transition-colors"
      >
        LEO TILES
      </Link>

      <div className="hidden md:flex gap-12 font-mono text-[12px] font-medium tracking-[0.1em] uppercase">
        {navLinks.map((link) => {
          const active = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors duration-500",
                active
                  ? "text-architectural-gold"
                  : "text-primary/70 hover:text-architectural-gold"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/get-a-quote"
          className="hidden sm:inline-flex px-6 py-2 border border-architectural-gold font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-primary hover:bg-architectural-gold hover:text-charcoal-surface transition-all duration-300"
        >
          Inquire
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-primary"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-[72px] bg-charcoal-surface z-40 transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col px-margin-mobile py-10 gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[12px] tracking-[0.1em] uppercase text-primary/80 hover:text-architectural-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-a-quote"
            className="mt-4 inline-flex justify-center px-6 py-4 bg-architectural-gold text-charcoal-surface font-mono text-[12px] tracking-[0.1em] uppercase"
            onClick={() => setMobileOpen(false)}
          >
            Inquire
          </Link>
          <Link
            href="/contact-us"
            className="font-mono text-[12px] tracking-[0.1em] uppercase text-primary/80 hover:text-architectural-gold transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
