import {
  Shield,
  MapPin,
  Wrench,
  Award,
  DollarSign,
  Siren,
} from "lucide-react";
import Image from "next/image";
import SectionLogo from "@/components/ui/SectionLogo";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

const differentiators = [
  {
    icon: Shield,
    title: `${siteConfig.differentiatorLabel} Business with Integrity`,
    description:
      "What family values taught us — discipline, honesty, and doing right by our customers.",
  },
  {
    icon: MapPin,
    title: "Local Expertise You Can Trust",
    description: `We uniquely understand ${siteConfig.region} and the community's plumbing needs.`,
  },
  {
    icon: Wrench,
    title: "Comprehensive Services for Every Need",
    description:
      "From troubleshooting to advanced setups — reliable solutions for residential and commercial.",
  },
  {
    icon: Award,
    title: "Professional, Licensed, & Insured",
    description:
      "Our crew is qualified to provide any plumbing service you need, backed by full coverage.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing, No Surprises",
    description:
      "Clear estimates — we don't hide fees, ever. You approve the price before we start.",
  },
  {
    icon: Siren,
    title: "Immediate Attention for Emergencies",
    description:
      "Your safety is our priority with prompt 24/7 emergency repair services.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Content */}
          <div>
            <SectionLogo label="Why Choose Us" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-2 leading-tight">
              What Makes{" "}
              <em className="not-italic text-orange-500">{siteConfig.businessName}</em> Special?
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Experience, expertise, and commitment to your satisfaction.
            </p>

            <div className="space-y-5">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-4 p-4 border border-cream-300 hover:border-orange-300 hover:bg-orange-50/50 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                    <item.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 text-[15px] mb-0.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/contact-us" variant="primary">
                Contact Us Today
              </Button>
            </div>
          </div>

          {/* Right — Sticky image */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/8486923/pexels-photo-8486923.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="Professional plumber in safety gear holding a wrench"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-orange-500/10 pointer-events-none" />
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-navy-200 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
