import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

// Used by Next.js to statically generate all known slugs at build time
export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  );
  return slugs.map(({ slug }) => ({ slug }));
}

const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  title,
  publishedAt,
  excerpt,
  mainImage,
  body
}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await sanityFetch({ query: postQuery, params: { slug } });
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({ query: postQuery, params: { slug } });

  if (!post) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-clay-50 to-white py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-rust-500 hover:text-rust-600 font-medium mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          {post.publishedAt && (
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <CalendarDays className="w-4 h-4" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          )}
          <h1 className="text-3xl lg:text-4xl font-bold text-clay-800">{post.title}</h1>
        </div>
      </section>

      {post.mainImage && (
        <div className="max-w-3xl mx-auto px-4 mt-8">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src={urlFor(post.mainImage).width(900).height(506).fit('crop').url()}
              alt={post.mainImage.alt ?? post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      <article className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-navy">
          <PortableText
            value={post.body}
            components={{
              block: {
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-clay-800 mt-10 mb-4">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-bold text-clay-800 mt-8 mb-3">{children}</h3>
                ),
                normal: ({ children }) => (
                  <p className="text-gray-600 leading-relaxed mb-4">{children}</p>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-rust-500 pl-4 italic text-gray-500 my-6">
                    {children}
                  </blockquote>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">{children}</ul>
                ),
                number: ({ children }) => (
                  <ol className="list-decimal pl-6 space-y-1 text-gray-600 mb-4">{children}</ol>
                ),
              },
              marks: {
                strong: ({ children }) => <strong className="font-semibold text-clay-800">{children}</strong>,
                em: ({ children }) => <em>{children}</em>,
              },
              types: {
                image: ({ value }) => (
                  <div className="relative aspect-video my-8 rounded-lg overflow-hidden">
                    <Image
                      src={urlFor(value).width(900).height(506).fit('crop').url()}
                      alt={value.alt ?? ''}
                      fill
                      className="object-cover"
                    />
                  </div>
                ),
              },
            }}
          />
        </div>
      </article>

      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-clay-800 mb-4">Need Help with Your Tile Project?</h2>
          <p className="text-gray-600 mb-6">
            Our team is ready to help with sizing, sealant, and installation advice. Call us today for a quote.
          </p>
          <Button href={`tel:${siteConfig.phoneRaw}`} variant="primary" size="lg">
            <Phone className="w-5 h-5 mr-2" />
            Call {siteConfig.phone}
          </Button>
        </div>
      </section>
    </>
  );
}
