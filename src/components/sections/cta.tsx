"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export function Cta() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-b from-surface to-ink-soft px-8 py-16 text-center sm:px-16 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-glow"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-40 w-[600px] -translate-x-1/2 rounded-full bg-gold/10 blur-[100px]"
            />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <h2 className="font-display text-4xl font-light leading-tight tracking-tight text-cream sm:text-5xl">
                Ready to begin your{" "}
                <span className="text-gold-gradient italic">Canadian story?</span>
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Book a free, no-obligation assessment today. We&apos;ll review
                your options and map out the path that fits your goals.
              </p>
              <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  Book your free assessment
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  href={`mailto:${site.email}`}
                  variant="ghost"
                  size="lg"
                >
                  or email us
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
