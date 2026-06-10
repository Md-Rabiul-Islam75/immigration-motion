"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { TiltCard, Layer3D } from "@/components/motion/tilt-card";
import { VantaBackground } from "@/components/visual/vanta-background";
import { SectionFX } from "@/components/visual/section-fx";
import { staggerContainer, rotateInUp } from "@/components/motion/variants";
import { posts, type Post } from "@/lib/site";

export function BlogHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-16 sm:pt-48 sm:pb-20">
      {/* Live 3D WebGL constellation — connects as the world connects */}
      <VantaBackground effect="net" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[120px]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--color-ink))]" />
      <Container className="relative flex flex-col items-center gap-5 text-center">
        <Reveal>
          <Eyebrow>Insights & guides</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-3xl font-display text-5xl font-light leading-[1.06] tracking-tight text-cream sm:text-6xl">
            The HnH Immigration{" "}
            <span className="text-gold-gradient italic">Journal</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Clear, current thinking on Canadian immigration — programs, policy
            shifts, and practical guidance to help you plan your next move.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export function BlogList() {
  const [featured, ...rest] = posts;

  return (
    <section className="relative overflow-hidden pb-8 pt-4">
      <SectionFX variant="waves" />
      <Container className="relative">
        {/* Featured post */}
        <TiltCard
          intensity={6}
          lift={16}
          variants={rotateInUp}
          entrance
          className="mb-12"
        >
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl ring-gradient bg-ink-soft [transform-style:preserve-3d] transition-shadow duration-300 hover:shadow-depth-gold lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-soft/80 via-transparent to-transparent lg:bg-linear-to-r" />
              <span className="absolute left-5 top-5 rounded-full border border-gold/40 bg-ink/70 px-3 py-1 text-xs font-medium text-gold backdrop-blur">
                Featured · {featured.category}
              </span>
            </div>
            <Layer3D depth={30} className="flex flex-col justify-center gap-4 p-8 sm:p-10">
              <Meta post={featured} />
              <h2 className="font-display text-3xl font-light leading-tight tracking-tight text-cream sm:text-4xl">
                {featured.title}
              </h2>
              <p className="text-base leading-relaxed text-muted">
                {featured.excerpt}
              </p>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                Read the article
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Layer3D>
          </Link>
        </TiltCard>

        {/* Grid of remaining posts */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rest.map((post) => (
            <TiltCard
              key={post.slug}
              as="article"
              variants={rotateInUp}
              intensity={10}
              lift={18}
              className="h-full"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl ring-gradient bg-ink-soft [transform-style:preserve-3d] transition-shadow duration-300 hover:shadow-depth-gold"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink-soft via-ink-soft/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-ink/70 px-2.5 py-1 text-xs font-medium text-gold backdrop-blur">
                    {post.category}
                  </span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 gloss opacity-0 transition-opacity duration-300 group-hover:animate-sheen group-hover:opacity-100"
                  />
                </div>
                <Layer3D depth={25} className="flex flex-1 flex-col gap-3 p-6">
                  <Meta post={post} />
                  <h3 className="font-display text-lg font-light leading-snug tracking-tight text-cream">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Read article
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Layer3D>
              </Link>
            </TiltCard>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function Meta({ post }: { post: Post }) {
  return (
    <div className="flex items-center gap-4 text-xs text-faint">
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="h-3.5 w-3.5" />
        {post.date}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" />
        {post.readMins} min read
      </span>
    </div>
  );
}
