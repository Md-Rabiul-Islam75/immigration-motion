"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/motion/tilt-card";
import { SectionFX } from "@/components/visual/section-fx";

type Shot = { src: string; alt: string };

const shots: Shot[] = [
  { src: "/immigration-photo.jpg", alt: "New beginnings in Canada" },
  { src: "/immigration-airport.jpg", alt: "Arrival at the airport" },
  { src: "/immigration-plane.jpg", alt: "The journey begins" },
  { src: "/immigration-3.jpg", alt: "A family's new chapter" },
  { src: "/immigration-4.jpg", alt: "Settling into a new home" },
  { src: "/immigration-5.jpg", alt: "Exploring Canadian cities" },
  { src: "/immigration2.jpg", alt: "Welcomed to Canada" },
  { src: "/immigration.-6.jpg", alt: "A future full of opportunity" },
];

const ROTATE_MS = 2600;

export function Gallery() {
  const reduce = useReducedMotion();
  const [order, setOrder] = useState<Shot[]>(shots);
  const paused = useRef(false);

  // Every tick, the first image moves to the end and everything else shifts
  // forward one slot — framer's `layout` animates each tile gliding from its
  // old cell to its new one. Pauses while the cursor is over the grid.
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      if (paused.current) return;
      setOrder((prev) => [...prev.slice(1), prev[0]]);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <SectionFX variant="rings" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-gold/[0.05] blur-[140px]"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Life in Canada"
          title="The destination behind every application"
          lede="Beyond the paperwork is a real life waiting — new cities, new opportunities, and a place to call home."
        />

        <motion.div
          onPointerEnter={() => (paused.current = true)}
          onPointerLeave={() => (paused.current = false)}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {order.map((shot) => (
            <motion.div
              key={shot.src}
              layout
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard intensity={12} lift={20} className="h-full">
                <div className="group relative aspect-4/5 overflow-hidden rounded-2xl border border-line bg-ink-soft [transform-style:preserve-3d] shadow-depth">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink/75 via-transparent to-transparent" />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 gloss opacity-0 transition-opacity duration-300 group-hover:animate-sheen group-hover:opacity-100"
                  />
                  <span className="absolute inset-x-4 bottom-4 translate-y-2 text-sm font-medium text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {shot.alt}
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
