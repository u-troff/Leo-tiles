import Eyebrow from "@/components/ui/Eyebrow";
import AccordionItem from "@/components/ui/AccordionItem";
import { homepageFAQs } from "@/data/faqs";

export default function FAQAccordion() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <Eyebrow label="FAQs" />
        <h2 className="text-3xl lg:text-4xl font-bold text-clay-900 mb-12 max-w-2xl leading-tight">
          Questions &amp; answers about handmade terracotta
        </h2>
        <div className="max-w-[880px]">
          {homepageFAQs.map((faq, i) => (
            <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
