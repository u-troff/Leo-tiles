import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { guides } from "@/data/guides";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const relatedGuide = guides.find((g) => g.slug === product.relatedGuideSlug);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <Link href="/guides" className="text-stone-500 text-sm font-semibold hover:text-rust-500">
          ← Product reference
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="relative h-[360px] lg:h-[640px] overflow-hidden">
          <Image src={product.heroImage} alt={product.name} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-clay-900/60 to-transparent" />
          <div className="absolute left-4 lg:left-11 bottom-6 lg:bottom-10 right-4 lg:right-11">
            <div className="text-rust-200 text-[13px] uppercase tracking-[0.15em] font-semibold mb-3">
              {product.heroCaption}
            </div>
            <h1 className="text-stone-50 text-3xl lg:text-[50px] font-bold">{product.name}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
          {product.galleryImages.map((img) => (
            <div key={img.src} className="relative h-[180px] lg:h-[260px] overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>
        <p className="text-stone-500 text-[13.5px] mt-4">
          Courtyard, dining room and kitchen installations, all in the {product.name}.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.3fr_1fr] gap-16 py-16 lg:py-24">
        <div>
          <div className="text-rust-500 text-[13px] uppercase tracking-[0.15em] font-bold mb-3.5">The range</div>
          <p className="text-clay-900 text-xl font-medium leading-relaxed max-w-xl mb-8">{product.description}</p>
          <div className="border-t border-stone-300">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between gap-6 py-5 border-b border-stone-300">
                <span className="text-[14.5px] font-semibold text-clay-900">{spec.label}</span>
                <span className="text-[14.5px] text-stone-700 text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="relative h-[260px] mb-4 overflow-hidden">
            <Image
              src={product.textureImage}
              alt={`${product.name} texture`}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
          <div className="text-[13px] uppercase tracking-[0.12em] text-stone-500 font-bold mb-2.5">Natural tone range</div>
          <div className="flex gap-2.5 mb-2.5">
            {product.toneOptions.map((tone) => (
              <span
                key={tone.hex}
                title={tone.label}
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: tone.hex }}
              />
            ))}
          </div>
          <p className="text-stone-500 text-[13.5px] leading-relaxed">
            Tone varies with each tile&rsquo;s position in the kiln, expect a natural mix within any order, not a
            flat, uniform colour.
          </p>
        </div>
      </div>

      {relatedGuide && (
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <div className="bg-clay-900 px-6 lg:px-12 py-11 flex flex-wrap items-center justify-between gap-8">
            <div>
              <div className="text-rust-300 text-[12.5px] uppercase tracking-[0.12em] font-bold mb-2.5">
                How to install
              </div>
              <div className="text-stone-50 text-xl font-semibold max-w-lg">{relatedGuide.title}</div>
            </div>
            <Link
              href={`/guides/${relatedGuide.slug}`}
              className="flex-none bg-stone-50 text-clay-900 font-bold text-[15px] px-6 py-4 whitespace-nowrap"
            >
              Read the guide →
            </Link>
          </div>
        </div>
      )}

      <div className="bg-stone-100 py-20 text-center px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-clay-900 mb-3.5">Get a quote for the {product.name}</h2>
        <p className="text-stone-700 mb-7">
          Tell us your square meterage and we&rsquo;ll come back with pricing and lead time for this range.
        </p>
        <Link
          href="/get-a-quote"
          className="inline-block bg-rust-500 text-stone-50 font-bold text-[15.5px] px-8 py-4 hover:bg-rust-600 transition-colors"
        >
          Request a quote, {product.name}
        </Link>
      </div>
    </>
  );
}
