import SectionLogo from "@/components/ui/SectionLogo";
import StepCard from "@/components/ui/StepCard";

const steps = [
  {
    number: 1,
    title: "Enquire",
    description:
      "Reach out by phone or online form. Tell us about your project and we will confirm feasibility and lead times.",
  },
  {
    number: 2,
    title: "Sample & Specify",
    description:
      "We confirm exact sizing, quantity, and finish — sending samples where needed before production begins.",
  },
  {
    number: 3,
    title: "Production",
    description:
      "Your tiles are shaped, dried, and kiln-fired by hand in our Cape Town facility using time-tested techniques.",
  },
  {
    number: 4,
    title: "Delivery & Installation",
    description:
      "We carefully pack and deliver your order, with professional installation available if you need it.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 lg:py-24 bg-stone-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <SectionLogo label="Our Process" align="center" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-clay-900 mb-3 leading-tight">
            A Straightforward Process for
            <br />
            <em className="not-italic text-rust-500">Your Tile Order</em>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Clear communication, honest lead times, and reliable results — from your first enquiry
            to delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-stone-300">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative bg-stone-50 ${
                index < steps.length - 1
                  ? "border-b md:border-b-0 lg:border-r border-stone-300"
                  : ""
              } ${index === 1 ? "md:border-r border-stone-300" : ""}`}
            >
              <StepCard {...step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
