import Eyebrow from "@/components/ui/Eyebrow";

const steps = [
  {
    number: "01",
    title: "Enquire",
    description: "Reach out by phone or online form. We confirm feasibility and lead times.",
  },
  {
    number: "02",
    title: "Sample & Specify",
    description: "We confirm sizing, quantity and finish — sending samples where needed.",
  },
  {
    number: "03",
    title: "Production",
    description: "Your tiles are shaped, dried and kiln-fired by hand in our Cape Town facility.",
  },
  {
    number: "04",
    title: "Delivery & Installation",
    description: "We carefully pack and deliver, with professional installation available.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 lg:py-24 bg-clay-900">
      <div className="max-w-7xl mx-auto px-4">
        <Eyebrow label="Our Process" tone="dark" />
        <h2 className="text-3xl lg:text-4xl font-bold text-stone-50 mb-12 max-w-2xl leading-tight">
          A straightforward process for your tile order
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="text-rust-500 text-[15px] font-bold mb-4">{step.number}</div>
              <div className="text-stone-50 text-lg font-bold mb-2.5">{step.title}</div>
              <p className="text-stone-400 text-[15px] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
