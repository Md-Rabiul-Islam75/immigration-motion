"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { SectionFX } from "@/components/visual/section-fx";
import { faqs } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-ink-soft py-24 sm:py-32">
      <SectionFX variant="rays" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px divider-x" />
      <Container className="relative max-w-3xl">
        <SectionHeading
          eyebrow="Questions"
          title="Answers before you ask"
          lede="A few of the things newcomers most often want to know."
        />

        <div className="mt-14 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 0.04}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-surface/50 transition-colors duration-300",
                    isOpen ? "border-gold/30" : "border-line",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="text-base font-medium text-cream">
                      {faq.q}
                    </span>
                    <Plus
                      className={cn(
                        "h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
