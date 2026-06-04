import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with HnH Immigration for a free, no-obligation consultation about your pathway to Canada.",
};

const details = [
  { Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    Icon: Phone,
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/[^+\d]/g, "")}`,
  },
  { Icon: MapPin, label: "Office", value: site.address },
  { Icon: Clock, label: "Hours", value: "Mon–Fri · 9:00 – 18:00 (ET)" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your future"
        lede="Book a free assessment or send us a message — we'll respond within one business day."
      />

      <section className="pb-8 pt-4 sm:pb-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            {/* Details */}
            <div className="flex flex-col gap-8">
              <Reveal>
                <h2 className="font-display text-2xl font-light text-cream">
                  Reach us directly
                </h2>
              </Reveal>
              <div className="flex flex-col gap-5">
                {details.map(({ Icon, label, value, href }, i) => (
                  <Reveal key={label} delay={i * 0.06}>
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-gold">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs uppercase tracking-wider text-faint">
                          {label}
                        </span>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm text-cream transition-colors hover:text-gold"
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="text-sm text-cream">{value}</span>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.2}>
                <div className="rounded-2xl border border-line bg-ink-soft p-6">
                  <p className="text-sm leading-relaxed text-muted">
                    {site.license}. Your initial consultation is complimentary
                    and confidential.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
