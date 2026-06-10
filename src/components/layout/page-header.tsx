import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

/** Consistent hero band for inner pages, with an optional photo backdrop. */
export function PageHeader({
  eyebrow,
  title,
  lede,
  image,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  /** Optional background image path from /public. */
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-glow pt-40 pb-16 sm:pt-48 sm:pb-20">
      {image && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="scale-110 object-cover opacity-25 animate-[float_14s_ease-in-out_infinite]"
          />
          {/* Legibility + brand wash over the photo */}
          <div className="absolute inset-0 bg-linear-to-b from-ink/70 via-ink/85 to-ink" />
          <div className="absolute inset-0 bg-aurora" />
        </div>
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[120px]"
      />
      <Container className="relative flex flex-col items-center gap-5 text-center">
        {eyebrow && (
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="max-w-3xl font-display text-5xl font-light leading-[1.06] tracking-tight text-cream sm:text-6xl">
            {title}
          </h1>
        </Reveal>
        {lede && (
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {lede}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
