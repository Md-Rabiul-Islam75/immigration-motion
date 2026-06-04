"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, staggerContainer } from "@/components/motion/variants";
import { process } from "@/lib/site";

export function Process() {
  return (
    <section id="process" className="relative bg-ink-soft py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px divider-x" />
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A clear, four-step path forward"
          lede="No jargon, no surprises — just a structured process designed around you."
        />

        <motion.ol
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Connecting line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block"
          />
          {process.map((step, i) => (
            <motion.li key={step.title} variants={fadeUp} className="relative">
              <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface font-display text-xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-medium tracking-tight text-cream">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
