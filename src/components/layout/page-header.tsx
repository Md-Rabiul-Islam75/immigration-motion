import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

/** Consistent hero band for inner pages. */
export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-glow pt-40 pb-16 sm:pt-48 sm:pb-20">
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
