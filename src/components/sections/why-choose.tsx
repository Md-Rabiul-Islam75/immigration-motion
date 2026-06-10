"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Route, Headset, Award } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TiltCard, Layer3D } from "@/components/motion/tilt-card";
import { SectionFX } from "@/components/visual/section-fx";
import { flyInRight, staggerContainer } from "@/components/motion/variants";
import { whyChoose, whyStats } from "@/lib/site";

const icons = [ShieldCheck, Route, Headset, Award];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <SectionFX variant="aurora" />
      {/* Section gets its own tone — warm gold wash over deep navy */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_15%_0%,rgba(217,169,0,0.10),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-gold/[0.06] blur-[120px]"
      />

      <Container className="relative">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: heading + stats */}
          <div className="flex flex-col gap-7">
            <Reveal>
              <Eyebrow>Why choose us</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="max-w-md font-display text-4xl font-light leading-[1.1] tracking-tight text-cream sm:text-5xl">
                Your perfect match for a smooth Canadian journey
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
                Immigration can feel overwhelming and complicated. From complex
                paperwork to lengthy procedures, our experts simplify every step
                — with a proven track record of faster processing and higher
                approval rates.
              </p>
            </Reveal>

            <div className="mt-2 grid grid-cols-2 gap-4">
              {whyStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="relative overflow-hidden rounded-2xl border border-gold/25 bg-gold/[0.06] p-6"
                >
                  <Sparkles className="absolute right-3 top-3 h-4 w-4 text-gold/40" />
                  <div className="font-display text-4xl font-light text-gold-gradient">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Reveal delay={0.15} className="mt-2">
              <Button href="/contact">Book a Consultation</Button>
            </Reveal>
          </div>

          {/* Right: reasons */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {whyChoose.map((reason, i) => {
              const Icon = icons[i % icons.length];
              return (
                <TiltCard
                  key={reason.title}
                  variants={flyInRight}
                  intensity={9}
                  lift={16}
                  className="h-full"
                >
                  <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-line bg-ink-soft p-6 [transform-style:preserve-3d] transition-all duration-300 hover:border-gold/35 hover:shadow-depth-gold">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 gloss opacity-0 transition-opacity duration-300 group-hover:animate-sheen group-hover:opacity-100"
                    />
                    <Layer3D depth={40}>
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors group-hover:bg-gold/25">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                    </Layer3D>
                    <Layer3D depth={20}>
                      <h3 className="font-display text-lg font-light text-cream">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {reason.description}
                      </p>
                    </Layer3D>
                  </div>
                </TiltCard>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
