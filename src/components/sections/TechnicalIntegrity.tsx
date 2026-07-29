const specs = [
  { label: "Standard Size", value: "200mm × 200mm × 22mm" },
  { label: "Slip Rating", value: "P5 (High Slip Resistance)" },
  { label: "Frost Resistance", value: "Class 3 — High Resilience" },
  { label: "Thermal Mass", value: "Excellent Efficiency (UFH Compatible)" },
];

export default function TechnicalIntegrity() {
  return (
    <section className="py-section-gap bg-charcoal-surface px-margin-mobile md:px-margin-desktop reveal-up">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-4 mb-12 lg:mb-0">
          <p className="font-mono text-[12px] font-medium tracking-[0.3em] uppercase text-architectural-gold mb-4">
            Specs
          </p>
          <h2 className="font-serif text-[36px] leading-[42px] md:text-[48px] md:leading-[56px] text-primary mb-8">
            Technical Integrity
          </h2>
          <p className="font-serif text-base text-on-surface-variant mb-8 leading-relaxed">
            Detailed specifications for architects and site managers who prioritize long-term
            durability and performance.
          </p>
          <div className="p-8 border border-architectural-gold/20 bg-surface-container-lowest">
            <p className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-architectural-gold mb-4">
              The Kiln&rsquo;s Soul
            </p>
            <p className="font-serif text-base italic leading-relaxed text-on-surface-variant">
              &ldquo;Every Batavian tile undergoes a 36-hour transformation. We utilize traditional
              wood-fired kilns that create atmospheric fluctuations, resulting in distinct tonal
              variations industrial pressing cannot replicate.&rdquo;
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col justify-center divide-y divide-architectural-gold/10">
          {specs.map((spec) => (
            <div key={spec.label} className="grid grid-cols-1 sm:grid-cols-2 py-8 gap-2">
              <span className="font-mono text-[12px] font-medium tracking-[0.1em] uppercase text-on-surface-variant">
                {spec.label}
              </span>
              <span className="font-serif text-[18px] md:text-[20px] text-primary">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
