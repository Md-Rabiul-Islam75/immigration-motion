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
import { fadeUp, staggerContainer } from "@/components/motion/variants";
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
    <section id="services" className="relative py-24 sm:py-32">
      <Container>
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
          className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <motion.div key={service.slug} variants={fadeUp}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group relative flex h-full flex-col gap-4 bg-ink-soft p-7 transition-colors duration-300 hover:bg-surface"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface text-gold transition-all duration-300 group-hover:border-gold/40 group-hover:bg-gold/10">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-cream">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {service.blurb}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
