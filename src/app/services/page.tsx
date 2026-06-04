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
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
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
      />

      <section className="py-16 sm:py-20">
        <Container>
          <Stagger className="grid gap-6 md:grid-cols-2" stagger={0.08}>
            {services.map((service) => {
              const Icon = icons[service.icon];
              return (
                <StaggerItem
                  key={service.slug}
                  as="article"
                  className="scroll-mt-28"
                >
                  <div
                    id={service.slug}
                    className="group flex h-full flex-col gap-5 rounded-3xl border border-line bg-ink-soft p-8 transition-colors duration-300 hover:border-gold/30"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface text-gold transition-all duration-300 group-hover:border-gold/40 group-hover:bg-gold/10">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <h2 className="text-xl font-medium tracking-tight text-cream">
                      {service.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-muted">
                      {service.blurb}
                    </p>
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
                </StaggerItem>
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
