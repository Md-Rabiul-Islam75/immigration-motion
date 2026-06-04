"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, staggerContainer } from "@/components/motion/variants";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[120px]"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Client stories"
          title="Real journeys, real outcomes"
          lede="The trust of our clients is the truest measure of our work."
        />

        {/* 99% satisfied panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-12 flex max-w-2xl flex-col items-center justify-center gap-4 rounded-3xl border border-gold/25 bg-gold/[0.06] px-8 py-7 text-center sm:flex-row sm:gap-8 sm:text-left"
        >
          <div className="font-display text-6xl font-light text-gold-gradient">
            99%
          </div>
          <div className="hidden h-14 w-px bg-gold/30 sm:block" />
          <div>
            <div className="flex justify-center gap-0.5 sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-cream/85">
              of our clients are satisfied with HnH Immigration&apos;s service —
              and would recommend us to family and friends.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="group relative flex flex-col gap-6 rounded-3xl border border-line bg-surface/60 p-8 transition-colors duration-300 hover:border-gold/30"
            >
              <Quote className="h-8 w-8 text-gold/40" />
              <blockquote className="flex-1 text-sm leading-relaxed text-cream/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < t.rating
                        ? "h-4 w-4 fill-gold text-gold"
                        : "h-4 w-4 text-line"
                    }
                  />
                ))}
              </div>
              <figcaption className="border-t border-line/60 pt-5">
                <div className="font-medium text-cream">{t.name}</div>
                <div className="text-sm text-muted">Verified client</div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
