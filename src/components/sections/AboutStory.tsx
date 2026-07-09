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
    <section id="about" className="grid lg:grid-cols-2 bg-clay-900">
      <div className="relative min-h-[320px] lg:min-h-[620px]">
        <Image
          src="/images/design/herringbone-install.jpg"
          alt="Handmade terracotta tiles being laid in a herringbone pattern"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="px-6 lg:px-[60px] py-14 lg:py-[72px] text-stone-100">
        <Eyebrow label="Our Story" tone="dark" />
        <h2 className="text-stone-50 text-2xl lg:text-[30px] font-bold leading-snug mb-5">
          A family-owned kiln, rooted in craft
        </h2>
        <p className="text-stone-200 leading-[1.75] mb-4">
          {siteConfig.businessName} began in {siteConfig.address.city} in {siteConfig.establishedYear} with
          little more than a kiln, a passion for clay, and founder {siteConfig.founder.founderName}&rsquo;s
          determination to do things the hard, honest way. What started as a small workshop has grown into
          South Africa&rsquo;s most trusted source for handmade terracotta — but the process has never changed.
        </p>
        <p className="text-stone-200 leading-[1.75] mb-4">
          His son {siteConfig.founder.name} took over in {siteConfig.founder.tookOverYear}, moving his
          architectural practice onto the factory floor so design and production could sit side by side.
          Today an {siteConfig.staffCount}-person team still shapes, dries and kiln-fires every tile by
          hand, the same way it&rsquo;s always been done.
        </p>
        <p className="text-stone-200 leading-[1.75] mb-6">
          Today, {siteConfig.businessName} supplies homeowners, architects and restoration projects across{" "}
          {siteConfig.serviceAreas.slice(0, 5).join(", ")} and beyond — every tile still shaped and fired by
          hand in the same Cape Town kiln.
        </p>
        <ul className="space-y-2.5 text-stone-200 text-[15px]">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rust-300 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
