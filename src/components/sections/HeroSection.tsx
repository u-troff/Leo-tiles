"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";

export default function HeroSection() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Activate hero reveals immediately
    document.querySelectorAll("section:first-of-type .reveal-up").forEach((el) => {
      el.classList.add("active");
    });

    const onScroll = () => {
      const scrolled = window.pageYOffset;
      if (imgRef.current && scrolled < window.innerHeight * 1.2) {
        imgRef.current.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          ref={imgRef}
          className="absolute inset-0 scale-105 will-change-transform"
          style={{ transform: "scale(1.05)" }}
        >
          <Image
            src="/images/design/terrace.jpg"
            alt="Handmade terracotta tiles on a Cape terrace"
            fill
            priority
            className="object-cover grayscale opacity-60"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-surface via-transparent to-charcoal-surface/40" />
      </div>

      <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl">
          <span className="font-mono text-[12px] font-medium tracking-[0.3em] uppercase text-architectural-gold block mb-6 reveal-up">
            Established {siteConfig.establishedYear}
          </span>
          <h1 className="font-serif text-[36px] leading-[42px] md:text-[84px] md:leading-[92px] font-medium tracking-[-0.02em] text-primary mb-8 reveal-up delay-200">
            Formed in Earth, <br />
            <span className="italic font-normal">Fired in Flame.</span>
          </h1>
          <p className="font-serif text-[20px] leading-8 text-on-surface-variant max-w-lg mb-12 reveal-up delay-400">
            South Africa&rsquo;s original handmade terracotta tile makers. Every tile mixed, pressed,
            and shaped by hand in our Cape Town kiln.
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 reveal-up delay-800">
        <span className="font-mono text-[10px] tracking-widest text-primary/40 uppercase">
          Scroll to Explore
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-architectural-gold to-transparent" />
      </div>
    </section>
  );
}
