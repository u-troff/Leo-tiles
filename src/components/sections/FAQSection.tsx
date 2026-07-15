import Eyebrow from "@/components/ui/Eyebrow";
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
  title = "Questions & answers about handmade terracotta.",
}: FAQSectionProps) {
  return (
    <section className="py-24 lg:py-40 bg-sand-bone">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <Eyebrow label="FAQs" />
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-charcoal-ash mb-8">
              {title}
            </h2>
            <Button href="/contact-us" variant="outline" size="md" arrow>
              Ask Your Question
            </Button>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
