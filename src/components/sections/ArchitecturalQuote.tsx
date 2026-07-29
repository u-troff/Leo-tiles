export default function ArchitecturalQuote() {
  return (
    <section className="py-40 md:py-60 bg-background border-t border-ink-stroke overflow-hidden reveal-up">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <span
          className="block text-[64px] text-architectural-gold mb-12 leading-none font-serif"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <blockquote className="font-serif text-[32px] md:text-[72px] leading-[1.1] text-primary italic max-w-6xl tracking-tight">
          The soul of a building is often found in the materials that refuse to be perfect. Leo Tiles
          provides that rare, visceral connection to the earth.
        </blockquote>
        <div className="mt-16 flex items-center gap-6">
          <div className="w-16 h-px bg-architectural-gold" />
          <div>
            <div className="font-mono text-[14px] font-medium tracking-widest uppercase text-primary">
              Rudi Swanepoel
            </div>
            <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">
              Lead Architect, Heritage Associates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
