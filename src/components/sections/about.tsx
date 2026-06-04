"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { fadeUp } from "@/components/motion/variants";
import { stats } from "@/lib/site";

const highlights = [
  "Regulated, accountable, and transparent advice",
  "A personalized strategy for every client",
  "Honest eligibility assessments — no false promises",
  "Support that continues after you land",
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <Eyebrow>Who we are</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="max-w-lg font-display text-4xl font-light leading-[1.1] tracking-tight text-cream sm:text-5xl">
                Guidance you can trust, at every step of the journey
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                Immigrating is one of life&apos;s biggest decisions. At HnH
                Immigration, we combine regulatory expertise with genuine care —
                treating your case as if it were our own. We listen first, advise
                honestly, and stay with you from the first consultation to your
                first day in Canada.
              </p>
            </Reveal>

            <Stagger className="mt-2 flex flex-col gap-3" stagger={0.08}>
              {highlights.map((item) => (
                <StaggerItem
                  key={item}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-cream/85">{item}</span>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1} className="mt-4">
              <Button href="/about" variant="secondary">
                More about us
              </Button>
            </Reveal>
          </div>

          {/* Stats panel */}
          <Reveal variants={fadeUp}>
            <div className="relative overflow-hidden rounded-3xl border border-line bg-ink-soft p-8 sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl"
              />
              <div className="relative grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                    className="bg-surface p-7"
                  >
                    <div className="font-display text-4xl font-light text-gold">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-muted">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
