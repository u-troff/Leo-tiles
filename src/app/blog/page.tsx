// TODO: Add blog posts via Sanity Studio at /studio before going live
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Blog",
  description: `Tile care tips, restoration advice, and news from ${siteConfig.businessName}. Learn how to maintain handmade terracotta and when to call a professional.`,
};

const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage
}`;

export default async function BlogPage() {
  const { data: posts } = await sanityFetch({ query: postsQuery });

  return (
    <>
      <section className="bg-gradient-to-br from-clay-50 to-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-clay-800 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Tile care tips, restoration advice, and insights from the {siteConfig.businessName} team.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center py-16">No posts yet. Add your first post in the Studio.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: {
                _id: string;
                title: string;
                slug: string;
                publishedAt: string;
                excerpt: string;
                mainImage?: { alt?: string };
              }) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {post.mainImage && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).width(800).height(450).fit('crop').url()}
                        alt={post.mainImage.alt ?? post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {post.publishedAt && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
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
                    <h2 className="text-lg font-bold text-clay-800 mb-2 group-hover:text-rust-500 transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    )}
                    <span className="inline-flex items-center gap-1 text-rust-500 font-semibold text-sm group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
