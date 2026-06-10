import type { Metadata } from "next";
import {
  Plane,
  Map,
  Users,
  GraduationCap,
  Briefcase,
  Stamp,
  Building2,
  BadgeCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger } from "@/components/motion/reveal";
import { TiltCard, Layer3D } from "@/components/motion/tilt-card";
import { SectionFX } from "@/components/visual/section-fx";
import { rotateInUp } from "@/components/motion/variants";
import { Cta } from "@/components/sections/cta";
import { services, type Service } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore HnH Immigration's full range of services — Express Entry, PNP, family sponsorship, study and work permits, business immigration, and citizenship.",
};

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

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Every pathway, expertly handled"
        lede="Browse the programs we support. Not sure which fits? A free assessment will point you in the right direction."
        image="/immigration-airport.jpg"
      />

      <section className="relative overflow-hidden py-16 sm:py-20">
        <SectionFX variant="grid" />
        <Container className="relative">
          <Stagger className="grid gap-6 md:grid-cols-2" stagger={0.08}>
            {services.map((service) => {
              const Icon = icons[service.icon];
              return (
                <TiltCard
                  key={service.slug}
                  as="article"
                  variants={rotateInUp}
                  intensity={8}
                  lift={16}
                  className="scroll-mt-28"
                >
                  <div
                    id={service.slug}
                    className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl ring-gradient bg-ink-soft p-8 [transform-style:preserve-3d] transition-shadow duration-300 hover:shadow-depth-gold"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 gloss opacity-0 transition-opacity duration-300 group-hover:animate-sheen group-hover:opacity-100"
                    />
                    <Layer3D depth={45}>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface text-gold transition-all duration-300 group-hover:border-gold/40 group-hover:bg-gold/10">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </div>
                    </Layer3D>
                    <Layer3D depth={25}>
                      <h2 className="text-xl font-medium tracking-tight text-cream">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {service.blurb}
                      </p>
                    </Layer3D>
                    <Button
                      href="/contact"
                      variant="ghost"
                      size="sm"
                      className="mt-auto -ml-4 self-start"
                    >
                      Enquire about {service.title}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </TiltCard>
              );
            })}
          </Stagger>

          <Reveal className="mt-12 text-center">
            <p className="text-sm text-muted">
              Detailed program pages with eligibility criteria are coming soon.
            </p>
          </Reveal>
        </Container>
      </section>

      <Cta />
    </>
  );
}
