"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp } from "@/components/motion/variants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-glow pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* Ambient background ornaments */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gold/[0.07] blur-[120px]" />
        <div className="absolute right-[-10%] top-1/3 h-[320px] w-[320px] rounded-full bg-gold/[0.05] blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--color-ink))] [background-size:100%_100%]" />
      </div>

      <Container className="relative">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-4 py-1.5 text-xs font-medium text-cream/80 backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5 text-gold" />
              Regulated Canadian Immigration Consultancy
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 max-w-4xl font-display text-5xl font-light leading-[1.04] tracking-tight text-cream sm:text-6xl md:text-7xl"
          >
            Your trusted pathway to a{" "}
            <span className="text-gold-gradient italic">new life</span> in Canada
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            From your first assessment to landing day, HnH Immigration guides
            individuals, families, and businesses through every step — with
            clarity, care, and proven results.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button href="/contact" size="lg">
              Start your free assessment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore our services
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-3 text-sm text-muted"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span>Trusted by 2,500+ newcomers worldwide</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
