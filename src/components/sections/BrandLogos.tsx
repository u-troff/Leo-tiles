import { brands } from "@/data/brands";

export default function BrandLogos() {
  return (
    <section className="py-10 lg:py-14 bg-white border-y border-stone-300">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400 mb-7">
          Trusted Brands We Work With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {brands.map((brand) => (
            <div
              key={brand.slug}
              className="flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity"
            >
              <span className="text-base font-bold text-clay-800 tracking-tight">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
