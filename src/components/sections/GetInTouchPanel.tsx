import Eyebrow from "@/components/ui/Eyebrow";
import { siteConfig } from "@/data/site-config";

export default function GetInTouchPanel() {
  return (
    <section id="contact" className="bg-stone-50 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow label="Get in Touch" />
            <h2 className="text-2xl lg:text-[28px] font-bold text-clay-900 mb-7">Ready to start your tile order?</h2>
            <div className="flex flex-col gap-4 text-[15px] text-clay-800 leading-relaxed">
              <div>
                <span className="font-bold">Our Address</span>
                <br />
                {siteConfig.address.full}
              </div>
              <div>
                <span className="font-bold">Phone</span>
                <br />
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-rust-500 hover:text-rust-600">
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <span className="font-bold">Email</span>
                <br />
                <a href={`mailto:${siteConfig.email}`} className="text-rust-500 hover:text-rust-600">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
          <div className="h-[280px] overflow-hidden">
            <iframe
              title="Leo Tiles location — 30 Industrial Road, Kraaifontein"
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
