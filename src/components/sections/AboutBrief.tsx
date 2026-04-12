import { Phone, CheckCircle } from "lucide-react";
import Image from "next/image";
import SectionLogo from "@/components/ui/SectionLogo";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

const highlights = [
  "Licensed, bonded & fully insured",
  "Upfront pricing — no hidden fees",
  "Local Pasadena experts since 2018",
  "Residential & commercial services",
];

export default function AboutBrief() {
  return (
    <section className="py-16 lg:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div>
            <SectionLogo label="About Us" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-5 leading-tight">
              About{" "}
              <em className="not-italic text-orange-500">{siteConfig.businessName}</em>
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-[15px]">
              {siteConfig.businessName} is a trusted, {siteConfig.differentiator} plumbing company
              serving the {siteConfig.region} area. With years of experience and a deep commitment to
              our community, we provide comprehensive residential and commercial plumbing solutions
              that homeowners and businesses can count on.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
              Our team of licensed{" "}
              <strong className="text-navy-800">
                plumbers in {siteConfig.address.city}, {siteConfig.address.state}
              </strong>{" "}
              brings expertise, professionalism, and genuine care to every job — from routine
              maintenance to complex installations and emergency repairs.
            </p>

            {/* Highlights checklist */}
            <ul className="space-y-2.5 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] text-gray-700">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button href={`tel:${siteConfig.phoneRaw}`} variant="primary">
              <Phone className="w-4 h-4 mr-2" />
              Call Us Now
            </Button>
          </div>

          {/* Right — Team photo */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Plumber's hands installing steel pipe fittings on a job site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent corner block */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-orange-500/15 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
