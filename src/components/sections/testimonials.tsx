"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, staggerContainer } from "@/components/motion/variants";

// Placeholder testimonials — replace with real client stories.
const testimonials = [
  {
    quote:
      "From our first call, the team made an overwhelming process feel manageable. Our Express Entry application was approved faster than we expected.",
    name: "Aarav & Priya",
    detail: "Permanent Residence · India",
  },
  {
    quote:
      "Honest, responsive, and genuinely invested in our family. They reunited us with our parents through the Super Visa with zero stress.",
    name: "Maria Gonzalez",
    detail: "Super Visa · Philippines",
  },
  {
    quote:
      "After a previous refusal I had lost hope. HnH rebuilt my study permit application and I'm now studying in Toronto.",
    name: "Daniel O.",
    detail: "Study Permit · Nigeria",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Client stories"
          title="Real journeys, real outcomes"
          lede="The trust of our clients is the truest measure of our work."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="group relative flex flex-col gap-6 rounded-3xl border border-line bg-ink-soft p-8 transition-colors duration-300 hover:border-gold/30"
            >
              <Quote className="h-8 w-8 text-gold/40" />
              <blockquote className="flex-1 text-base leading-relaxed text-cream/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <figcaption className="border-t border-line/60 pt-5">
                <div className="font-medium text-cream">{t.name}</div>
                <div className="text-sm text-muted">{t.detail}</div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
