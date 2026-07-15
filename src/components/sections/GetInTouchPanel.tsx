import Eyebrow from "@/components/ui/Eyebrow";
import { siteConfig } from "@/data/site-config";

export default function GetInTouchPanel() {
  return (
    <section id="contact" className="pb-24 lg:pb-40 bg-warm-linen">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <Eyebrow label="Get in Touch" />
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-charcoal-ash mb-10">
              Visit the kiln.
            </h2>
            <div className="space-y-8">
              <div>
                <span className="label-caps text-mortar-gray">Our Address</span>
                <p className="text-charcoal-ash text-lg leading-relaxed mt-2">{siteConfig.address.full}</p>
              </div>
              <div>
                <span className="label-caps text-mortar-gray">Phone</span>
                <p className="mt-2">
                  <a href={`tel:${siteConfig.phoneRaw}`} className="font-display text-2xl text-charcoal-ash hover:text-clay-deep transition-colors">
                    {siteConfig.phone}
                  </a>
                </p>
              </div>
              <div>
                <span className="label-caps text-mortar-gray">Email</span>
                <p className="mt-2">
                  <a href={`mailto:${siteConfig.email}`} className="font-display text-2xl text-charcoal-ash hover:text-clay-deep transition-colors">
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 h-[360px] lg:h-[440px] overflow-hidden border border-mortar-gray/25">
            <iframe
              title="Leo Tiles location, 30 Industrial Road, Kraaifontein"
              src="https://maps.google.com/maps?q=-33.8417622,18.7304505&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
