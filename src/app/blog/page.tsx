import type { Metadata } from "next";
import { business } from "@/lib/business";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Pressure Washing Tips & Guides",
  description:
    "Practical pressure washing and exterior cleaning advice for homeowners and businesses in North Carolina and Virginia, from Under Pressure Xteriors.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Pressure Washing Tips & Guides",
    description: "Practical pressure washing and exterior cleaning advice for homeowners and businesses in North Carolina and Virginia, from Under Pressure Xteriors.",
    url: `${business.url}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Pressure Washing Tips & Guides",
    description: "Practical pressure washing and exterior cleaning advice for homeowners and businesses in North Carolina and Virginia, from Under Pressure Xteriors.",
  },
};

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero
        eyebrow="The Blog"
        title="Pressure washing, explained."
        description="Practical, no-nonsense guides on keeping the exterior of your home or business in shape - written by the crew that does the work."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="reveal group flex flex-col border border-ink/10 bg-white p-6 transition-colors hover:border-orange"
                data-reveal-delay={(i % 6) * 60}
              >
                <span className="text-data text-xs uppercase tracking-wide text-orange-dark">
                  {post.category}
                </span>
                <h2 className="text-display mt-3 text-xl leading-tight text-navy group-hover:text-orange-dark">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm text-ink/70">{post.excerpt}</p>
                <div className="text-data mt-5 flex items-center justify-between text-xs text-steel">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
