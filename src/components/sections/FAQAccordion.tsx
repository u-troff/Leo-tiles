import Eyebrow from "@/components/ui/Eyebrow";
import AccordionItem from "@/components/ui/AccordionItem";
import { homepageFAQs } from "@/data/faqs";

export default function FAQAccordion() {
  return (
    <section id="faq" className="py-24 lg:py-40 bg-sand-bone">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <Eyebrow label="FAQs" />
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-charcoal-ash">
              Questions &amp; answers about handmade terracotta.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {homepageFAQs.map((faq, i) => (
              <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
