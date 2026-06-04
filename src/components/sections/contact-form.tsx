"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

const fieldClasses =
  "w-full rounded-xl border border-line bg-surface/60 px-4 py-3 text-sm text-cream placeholder:text-faint outline-none transition-colors duration-300 focus:border-gold/60 focus:bg-surface";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  // Placeholder handler — wire up to an email service / API route later.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-3xl border border-gold/30 bg-ink-soft p-12 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-gold" strokeWidth={1.4} />
        <h3 className="font-display text-2xl font-light text-cream">
          Thank you — we&apos;ve received your message
        </h3>
        <p className="max-w-sm text-sm text-muted">
          A member of our team will be in touch within one business day. For
          urgent matters, please call us directly.
        </p>
        <Button onClick={() => setSent(false)} variant="secondary" size="sm">
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl border border-line bg-ink-soft p-8 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input id="name" name="name" required placeholder="Jane Doe" className={fieldClasses} />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@email.com"
            className={fieldClasses}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            placeholder="+1 (000) 000-0000"
            className={fieldClasses}
          />
        </Field>
        <Field label="Service of interest" htmlFor="service">
          <select id="service" name="service" className={cn(fieldClasses, "appearance-none")} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="other">Not sure / Other</option>
          </select>
        </Field>
      </div>

      <Field label="How can we help?" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us a little about your situation and goals…"
          className={cn(fieldClasses, "resize-none")}
        />
      </Field>

      <Button type="submit" size="lg" className="mt-1 w-full sm:w-auto sm:self-start">
        Send message
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </Button>
      <p className="text-xs text-faint">
        By submitting, you agree to be contacted regarding your enquiry. We
        respect your privacy and never share your information.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-wider text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
