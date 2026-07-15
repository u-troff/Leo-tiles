import Eyebrow from "@/components/ui/Eyebrow";

const steps = [
  {
    number: "01",
    title: "Enquire",
    description: "Reach out by phone or online form. We confirm feasibility and lead times for your project.",
  },
  {
    number: "02",
    title: "Sample & Specify",
    description: "We confirm sizing, quantity and finish, sending physical samples where needed.",
  },
  {
    number: "03",
    title: "Manual Shaping & Firing",
    description: "Your tiles are shaped, slow-dried and kiln-fired by hand in our Cape Town facility.",
  },
  {
    number: "04",
    title: "Delivery & Installation",
    description: "We carefully pack and deliver nationwide, with professional installation available.",
  },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="py-24 lg:py-40 bg-charcoal-ash text-warm-linen">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Eyebrow label="The Process" tone="dark" />
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] mb-8">
              From Kiln to Courtyard.
            </h2>
            <p className="text-warm-linen/70 leading-relaxed max-w-sm">
              Unlike factory-made tiles, no two Leo Tiles are identical. The subtle variation in tone
              and texture is what gives them their character and warmth.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 grid gap-12 lg:gap-16">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 lg:gap-10 border-t border-warm-linen/15 pt-8">
                <span className="font-display text-3xl lg:text-4xl text-clay-deep/70 shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl lg:text-[28px] mb-3">{step.title}</h3>
                  <p className="text-warm-linen/60 leading-relaxed max-w-md">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
