import Eyebrow from "@/components/ui/Eyebrow";
import { residentialServices } from "@/data/services-residential";

export default function ProductsGrid() {
  return (
    <section id="products" className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <Eyebrow label="Our Services" />
        <h2 className="text-3xl lg:text-4xl font-bold text-clay-900 mb-3 max-w-2xl leading-tight">
          Handmade terracotta tiles &amp; everything you need to install them
        </h2>
        <p className="text-stone-700 max-w-xl mb-12 leading-relaxed">
          From signature floor tiles to the adhesive, grout and sealant that complete the job — all
          sourced from one kiln.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {residentialServices.map((service, i) => {
            const filled = i < 3;
            return (
              <div
                key={service.slug}
                className={filled ? "bg-stone-100 p-8" : "bg-stone-50 border border-stone-300 p-8"}
              >
                <div className={`w-11 h-11 rounded-full mb-5 ${filled ? "bg-rust-500" : "bg-stone-600"}`} />
                <div className="text-clay-900 text-lg font-bold mb-2.5">{service.title}</div>
                <p className="text-stone-700 text-[15px] leading-relaxed">{service.shortDescription}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
