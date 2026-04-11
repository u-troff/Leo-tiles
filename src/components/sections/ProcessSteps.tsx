import SectionLogo from "@/components/ui/SectionLogo";
import StepCard from "@/components/ui/StepCard";

const steps = [
  {
    number: 1,
    title: "Reach Out",
    description:
      "Reach out by phone or online form. We will provide a prompt answer and arrange service at a convenient time.",
  },
  {
    number: 2,
    title: "Inspection & Diagnosis",
    description:
      "Our licensed plumbers arrive on time to analyze the situation. Straightforward pricing with no hidden fees.",
  },
  {
    number: 3,
    title: "Expert Repairs",
    description:
      "We go to work utilizing high-quality materials and exact processes to assure safety and efficiency.",
  },
  {
    number: 4,
    title: "Completion & Assurance",
    description:
      "We walk you through the results to check everything meets your expectations before leaving your home clean.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 lg:py-24 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <SectionLogo label="Our Process" align="center" />
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-3 leading-tight">
            A Stress-Free Process for Solving
            <br />
            <em className="not-italic text-orange-500">Your Plumbing Problems</em>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Clear communication, expert solutions, and reliable results — from your first call to
            the final walkthrough.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-cream-300">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative bg-cream-50 ${
                index < steps.length - 1
                  ? "border-b md:border-b-0 lg:border-r border-cream-300"
                  : ""
              } ${index === 1 ? "md:border-r border-cream-300" : ""}`}
            >
              <StepCard {...step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
