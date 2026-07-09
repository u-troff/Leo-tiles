import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides } from "@/data/guides";
import { products } from "@/data/products";

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.intro,
  };
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const relatedProducts = products.filter((p) => guide.relatedProductSlugs.includes(p.slug));
  const relatedGuides = guides.filter((g) => guide.relatedGuideSlugs.includes(g.slug));

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <Link href="/guides" className="text-stone-500 text-sm font-semibold hover:text-rust-500">
          ← Guide hub
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 pb-10 max-w-3xl">
        <span className="inline-block bg-clay-900 text-stone-50 text-[11px] font-bold px-2.5 py-1 rounded-sm mb-5">
          {guide.audience}
        </span>
        <h1 className="text-3xl lg:text-[46px] font-bold text-clay-900 leading-tight">{guide.title}</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-10">
        <div className="relative h-[280px] lg:h-[520px] overflow-hidden">
          <Image src={guide.heroImage} alt={guide.title} fill className="object-cover" sizes="100vw" priority />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-14 max-w-2xl">
        <p className="text-xl font-medium text-stone-700 leading-relaxed">{guide.intro}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-24 max-w-2xl">
        {guide.steps.map((step, i) => (
          <div
            key={step.number}
            className={`flex gap-6 py-9 border-t border-stone-300 ${i === guide.steps.length - 1 ? "border-b" : ""}`}
          >
            <div className="flex-none text-rust-500 font-bold text-[15px] w-8">{step.number}</div>
            <div>
              <h3 className="text-clay-900 font-semibold text-xl mb-2.5">{step.title}</h3>
              <p className="text-stone-700 leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      {relatedProducts.length > 0 && (
        <section className="bg-stone-100 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-clay-900 mb-9">Related products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              {relatedProducts.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="block">
                  <div className="relative h-[180px] overflow-hidden mb-3.5">
                    <Image src={product.heroImage} alt={product.name} fill className="object-cover" sizes="33vw" />
                  </div>
                  <div className="text-clay-900 font-semibold text-[17px]">{product.name}</div>
                  <div className="text-stone-700 text-[13.5px] mt-1">{product.description.slice(0, 60)}…</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedGuides.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-clay-900 mb-9">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              {relatedGuides.map((related) => (
                <Link key={related.slug} href={`/guides/${related.slug}`} className="block">
                  <div className="relative h-[180px] overflow-hidden mb-3.5">
                    <Image src={related.heroImage} alt={related.title} fill className="object-cover" sizes="33vw" />
                  </div>
                  <div className="text-[12px] font-bold text-rust-500 mb-1.5">{related.audience.toUpperCase()}</div>
                  <div className="text-clay-900 font-semibold text-[17px] leading-snug">{related.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
