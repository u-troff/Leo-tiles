import SectionLogo from "@/components/ui/SectionLogo";
import AccordionItem from "@/components/ui/AccordionItem";
import Button from "@/components/ui/Button";
import { FAQ } from "@/data/faqs";

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  faqs,
  title = "Questions & Answers for Your Plumbing Queries",
  subtitle = "Reliable Experts for All Your Plumbing Issues",
}: FAQSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — Photo placeholder */}
          <div className="bg-navy-100 aspect-[4/3] flex items-center justify-center lg:sticky lg:top-24">
            <div className="text-center p-8">
              <p className="text-navy-500 font-medium">Professional Photo</p>
              <p className="text-navy-400 text-sm mt-1">Team member or work in progress</p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <SectionLogo label="FAQs" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-2 leading-tight">
              {title}
            </h2>
            <p className="text-orange-500 font-medium text-sm mb-8 uppercase tracking-wider">
              {subtitle}
            </p>

            <div className="space-y-0 border-t border-cream-300">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            <div className="mt-8">
              <Button href="/contact-us" variant="primary">
                Ask Your Question
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
