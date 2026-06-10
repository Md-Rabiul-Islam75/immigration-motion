import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { Cta } from "@/components/sections/cta";
import { posts } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHeader eyebrow={post.category} title={post.title} image={post.image} />

      <article className="relative pb-8 pt-4">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-5 border-b border-line/60 pb-6 text-sm text-faint">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4 text-gold" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-gold" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-gold" />
                {post.readMins} min read
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-8 font-display text-xl font-light leading-relaxed text-cream/90">
              {post.excerpt}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-muted">
              <p>
                Every immigration journey is different, and the details matter.
                In this guide our team walks through what the {post.category}
                {" "}route involves in practice — the eligibility signals to
                check first, the documents that most often cause delays, and the
                decisions that quietly shape your timeline.
              </p>
              <p>
                Policy and program criteria change throughout the year, so the
                most reliable next step is always a current, personalised review
                of your profile. What worked for a friend or colleague last year
                may not be the fastest path for you today.
              </p>
              <p>
                Want this applied to your own situation? Book a free assessment
                and we&apos;ll map out the pathway that best fits your goals —
                clearly, honestly, and with no pressure.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Link
              href="/blog"
              className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-bright"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </Reveal>
        </Container>
      </article>

      <Cta />
    </>
  );
}
