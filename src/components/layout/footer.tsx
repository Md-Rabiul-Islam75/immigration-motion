import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./social-icons";
import { Container } from "@/components/ui/container";
import { primaryNav, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-line bg-ink-soft">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px divider-x" />
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Logo width={120} height={72} />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            <p className="text-xs uppercase tracking-wider text-faint">
              {site.license}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3">
            <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-cream">
              Explore
            </h3>
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Services */}
          <nav className="flex flex-col gap-3">
            <h3 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-cream">
              Services
            </h3>
            {services.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="text-sm text-muted transition-colors hover:text-gold"
              >
                {s.title}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream">
              Get in touch
            </h3>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-gold"
            >
              <Mail className="h-4 w-4 text-gold" />
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-gold"
            >
              <Phone className="h-4 w-4 text-gold" />
              {site.phone}
            </a>
            <p className="flex items-center gap-3 text-sm text-muted">
              <MapPin className="h-4 w-4 text-gold" />
              {site.address}
            </p>
            <div className="mt-2 flex items-center gap-3">
              {[
                { Icon: FacebookIcon, href: site.social.facebook, label: "Facebook" },
                { Icon: InstagramIcon, href: site.social.instagram, label: "Instagram" },
                { Icon: LinkedinIcon, href: site.social.linkedin, label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-cream/70 transition-all hover:border-gold/50 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line/60 pt-8 text-xs text-faint sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gold">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
