import { MapPin, Mail, Clock } from "lucide-react";
import { WhatsappIcon } from "./social-icons";
import { site } from "@/lib/site";

/** Slim utility bar above the navbar — address, email, hours, WhatsApp. */
export function TopBar() {
  return (
    <div className="hidden border-b border-line/60 bg-ink-soft/80 text-xs text-muted backdrop-blur md:block">
      <div className="mx-auto flex h-9 max-w-6xl items-center justify-between gap-6 px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            {site.address}
          </span>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-gold"
          >
            <Mail className="h-3.5 w-3.5 text-gold" />
            {site.email}
          </a>
        </div>
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-gold" />
            {site.hours}
          </span>
          <a
            href={site.social.whatsapp}
            aria-label="WhatsApp"
            className="inline-flex h-6 w-6 items-center justify-center rounded-full text-gold transition-colors hover:text-gold-bright"
          >
            <WhatsappIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
