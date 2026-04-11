import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: `Plumbing tips, advice, and news from ${siteConfig.businessName}. Learn how to maintain your plumbing and when to call a professional.`,
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-50 to-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-800 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Plumbing tips, advice, and insights from the {siteConfig.businessName} team.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-navy-100 to-navy-200 aspect-video flex items-center justify-center">
                  <p className="text-navy-500 text-sm">Featured Image</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <CalendarDays className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-orange-500 font-semibold text-sm group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
