import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  guideHubCards,
  guideHubIndex,
  type GuideHubCard,
} from "@/data/guide-hub";
import { cn } from "@/lib/utils";

function GuideCard({ card }: { card: GuideHubCard }) {
  const content = (
    <>
      <div className="aspect-[4/3] w-full overflow-hidden mb-6 bg-surface-container relative">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="absolute top-4 left-4 bg-surface-container-highest/90 backdrop-blur px-3 py-1 font-mono text-[12px] font-medium tracking-widest uppercase text-architectural-gold border border-ink-stroke">
          {card.badge}
        </div>
      </div>
      <h3 className="font-serif text-[24px] md:text-[28px] leading-tight text-bone-cream mb-4 group-hover:text-architectural-gold transition-colors">
        {card.title}
      </h3>
      <p className="font-serif text-base text-on-surface-variant leading-relaxed">{card.description}</p>
    </>
  );

  if (card.href) {
    return (
      <Link href={card.href} className="group block">
        {content}
      </Link>
    );
  }

  return <article className="group">{content}</article>;
}

export default function GuidesHub() {
  return (
    <>
      {/* Hero */}
      <header className="relative w-full h-[70vh] min-h-[560px] md:h-[80vh] md:min-h-[600px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/design/herringbone-install.jpg"
            alt="Craftsman hands laying terracotta tiles"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal-surface/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-surface via-charcoal-surface/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop grid grid-cols-12 gap-gutter">
          <div className="col-span-12 md:col-span-8 lg:col-span-6 reveal-up">
            <div className="inline-block px-3 py-1 border border-architectural-gold/50 mb-6 font-mono text-[12px] font-medium tracking-widest uppercase text-architectural-gold">
              Archive &amp; Resources
            </div>
            <h1 className="font-serif text-[40px] leading-[1.05] md:text-[84px] md:leading-[90px] font-medium tracking-[-0.04em] text-bone-cream mb-6">
              Technical
              <br />
              <span className="italic font-normal text-bone-cream/90">Archive</span>
            </h1>
            <p className="font-serif text-[18px] leading-7 text-on-surface-variant max-w-xl">
              The definitive repository for architectural specifications, master installation
              protocols, and definitive design reference.
            </p>
          </div>
        </div>
      </header>

      {/* Editorial layout */}
      <div className="w-full bg-background px-margin-mobile md:px-margin-desktop py-section-gap relative">
        <div className="grid grid-cols-12 gap-gutter max-w-[1920px] mx-auto">
          {/* Sticky index */}
          <aside className="col-span-12 md:col-span-3 mb-12 md:mb-0 reveal-up">
            <div className="md:sticky md:top-32">
              <h3 className="font-mono text-[12px] font-medium tracking-widest uppercase text-architectural-gold mb-8 border-b border-ink-stroke pb-4">
                Index
              </h3>
              <nav className="flex flex-col space-y-6">
                {guideHubIndex.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="font-serif text-[22px] md:text-[24px] leading-snug text-bone-cream hover:text-architectural-gold transition-colors duration-300 flex items-center justify-between gap-4 group"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-5 h-5 shrink-0 text-ink-stroke opacity-0 group-hover:opacity-100 group-hover:text-architectural-gold transition-all -translate-x-2 group-hover:translate-x-0" />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Sections */}
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            {guideHubIndex.map((section, sectionIndex) => {
              const cards = guideHubCards.filter((c) => c.section === section.id);
              const isEditorial = section.id !== "inspiration";

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className={cn(
                    "reveal-up scroll-mt-28",
                    sectionIndex < guideHubIndex.length - 1 ? "mb-32" : "",
                    isEditorial && "border-l border-architectural-gold/30 pl-8 md:pl-12"
                  )}
                >
                  <div className={section.id === "reference" ? "mb-12" : "mb-16"}>
                    <h2 className="font-serif text-[36px] leading-[40px] md:text-[48px] md:leading-[52px] tracking-[-0.02em] text-bone-cream mb-2">
                      {section.id === "technical"
                        ? "Technical & How-To Guides"
                        : section.label}
                    </h2>
                    <p className="font-serif text-[18px] leading-7 text-on-surface-variant max-w-3xl">
                      {section.subtitle}
                    </p>
                  </div>

                  <div
                    className={cn(
                      "grid grid-cols-1 gap-8",
                      section.id === "reference"
                        ? "sm:grid-cols-2 lg:grid-cols-3"
                        : "md:grid-cols-2"
                    )}
                  >
                    {cards.map((card) => (
                      <GuideCard key={card.title} card={card} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
