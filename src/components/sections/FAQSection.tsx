import Image from "next/image";
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
  title = "Questions & Answers About Handmade Terracotta",
  subtitle = "Reliable Answers from South Africa's Original Tile Makers",
}: FAQSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — Photo */}
          <div className="relative aspect-[4/3] overflow-hidden lg:sticky lg:top-24">
            <Image
              src="https://images.pexels.com/photos/6010260/pexels-photo-6010260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Warm terracotta-tiled interior with handmade clay pottery"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Content */}
          <div>
            <SectionLogo label="FAQs" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-clay-900 mb-2 leading-tight">
              {title}
            </h2>
            <p className="text-rust-500 font-medium text-sm mb-8 uppercase tracking-wider">
              {subtitle}
            </p>

            <div className="space-y-0 border-t border-stone-300">
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
