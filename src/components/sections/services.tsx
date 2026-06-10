"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Plane,
  Map,
  Users,
  GraduationCap,
  Briefcase,
  Stamp,
  Building2,
  BadgeCheck,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard, Layer3D } from "@/components/motion/tilt-card";
import { VantaBackground } from "@/components/visual/vanta-background";
import { rotateInUp, staggerContainer } from "@/components/motion/variants";
import { services, type Service } from "@/lib/site";

const icons: Record<Service["icon"], LucideIcon> = {
  Plane,
  Map,
  Users,
  GraduationCap,
  Briefcase,
  Stamp,
  Building2,
  BadgeCheck,
};

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      {/* Live 3D dot field — distinct from hero net / about rings / blog globe */}
      <VantaBackground effect="dots" opacity={0.55} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_50%,transparent,var(--color-ink)_88%)]"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Comprehensive immigration
              <br className="hidden sm:block" /> services, end to end
            </>
          }
          lede="Whatever your destination program, we offer the expertise and personal guidance to get you there."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <TiltCard
                key={service.slug}
                variants={rotateInUp}
                intensity={10}
                lift={18}
                className="h-full"
              >
                <Link
                  href={`/services#${service.slug}`}
                  className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl ring-gradient bg-ink-soft p-7 [transform-style:preserve-3d] transition-shadow duration-300 hover:shadow-depth-gold"
                >
                  {/* moving sheen on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full gloss opacity-0 transition-opacity duration-300 group-hover:animate-sheen group-hover:opacity-100"
                  />
                  <Layer3D depth={45}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface text-gold transition-all duration-300 group-hover:border-gold/40 group-hover:bg-gold/10">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                  </Layer3D>
                  <Layer3D depth={25}>
                    <h3 className="text-lg font-medium tracking-tight text-cream">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.blurb}
                    </p>
                  </Layer3D>
                  <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </TiltCard>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
