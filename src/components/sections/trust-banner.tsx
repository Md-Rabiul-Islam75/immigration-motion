"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionFX } from "@/components/visual/section-fx";
import { stats, trustLine } from "@/lib/site";

export function TrustBanner() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface/40 py-14 backdrop-blur">
      <SectionFX variant="beams" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_50%,rgba(217,169,0,0.08),transparent_70%)]"
      />
      <Container className="relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-medium uppercase tracking-[0.2em] text-gold"
        >
          {trustLine}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-8 grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="flex flex-col items-center gap-1 px-6 py-4"
            >
              <span className="font-display text-5xl font-light text-gold-gradient">
                {stat.value}
              </span>
              <span className="text-sm tracking-wide text-muted">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
