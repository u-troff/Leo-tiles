import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { blogPosts } from "@/data/blog-posts";
import { siteConfig } from "@/data/site-config";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
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
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-navy-50 to-white py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <CalendarDays className="w-4 h-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-navy-800">{post.title}</h1>
        </div>
      </section>

      <article className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-navy max-w-none">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold text-navy-800 mt-10 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <p key={i} className="font-semibold text-navy-800 mt-6 mb-2">
                  {paragraph.replace(/\*\*/g, "")}
                </p>
              );
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                  {items.map((item, j) => (
                    <li key={j}>{item.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Need Professional Plumbing Help?</h2>
          <p className="text-gray-600 mb-6">
            Our licensed plumbers are ready to help with any plumbing issue. Call us today for a free quote.
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
