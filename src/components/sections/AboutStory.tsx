import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import { siteConfig } from "@/data/site-config";

const highlights = [
  "Handmade from raw clay since 1975",
  "Kiln-fired in our own Cape Town facility",
  "Custom sizes manufactured to specification",
  "Supply and installation available nationwide",
];

export default function AboutStory() {
  return (
    <section id="heritage" className="py-24 lg:py-40 bg-warm-linen">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] bg-sand-bone relative overflow-hidden">
              <Image
                src="/images/design/herringbone-install.jpg"
                alt="Handmade terracotta tiles being laid in a herringbone pattern"
                fill
                className="object-cover grayscale-[15%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Eyebrow label="The Heritage" />
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-charcoal-ash mb-8">
              Handcrafted in {siteConfig.address.city} since {siteConfig.establishedYear}.
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-6">
              {siteConfig.businessName} began in {siteConfig.address.city} with little more than a kiln,
              a passion for clay, and founder {siteConfig.founder.founderName}&rsquo;s determination to do
              things the hard, honest way. Every tile is shaped, pressed and dried by hand before it ever
              sees the kiln, preserving a legacy of craftsmanship.
            </p>
            <p className="text-secondary leading-relaxed mb-10">
              His son {siteConfig.founder.name} took over in {siteConfig.founder.tookOverYear}, moving his
              architectural practice onto the factory floor so design and production could sit side by side.
              Today an {siteConfig.staffCount}-person team still shapes, dries and kiln-fires every tile by
              hand, the same way it&rsquo;s always been done.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-charcoal-ash text-[15px]">
                  <span className="mt-2 w-1.5 h-1.5 bg-clay-deep flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-mortar-gray/25">
              <div>
                <span className="block font-display text-4xl text-primary">{siteConfig.staffCount}+</span>
                <span className="label-caps text-[10px] text-mortar-gray mt-1 block">Expert Artisans</span>
              </div>
              <div>
                <span className="block font-display text-4xl text-primary">50y</span>
                <span className="label-caps text-[10px] text-mortar-gray mt-1 block">Kiln Heritage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
