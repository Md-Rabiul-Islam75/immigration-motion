"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionFX } from "@/components/visual/section-fx";
import { process } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Process() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      // Step cards swing in from 3D space as the section enters view.
      gsap.from(".process-step", {
        opacity: 0,
        y: 48,
        rotateY: reduce ? 0 : -32,
        transformPerspective: 900,
        transformOrigin: "left center",
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".process-grid",
          start: "top 78%",
        },
      });

      // The connecting line draws itself as you scroll through the section.
      gsap.fromTo(
        ".process-line-fill",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".process-grid",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        },
      );

      // Number badges pop with a gentle 3D rotation.
      gsap.from(".process-badge", {
        scale: 0.4,
        rotate: reduce ? 0 : -45,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(1.8)",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".process-grid",
          start: "top 78%",
        },
      });
    },
    { scope: root },
  );

  return (
    <section id="process" className="relative overflow-hidden bg-ink-soft py-24 sm:py-32">
      <SectionFX variant="dots" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px divider-x" />
      <Container className="relative">
        <SectionHeading
          eyebrow="How it works"
          title="A clear, four-step path forward"
          lede="No jargon, no surprises — just a structured process designed around you."
        />

        <div ref={root}>
          <ol className="process-grid relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line track + animated gold fill */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block"
            >
              <div className="process-line-fill h-full origin-left bg-linear-to-r from-gold via-gold-bright to-gold" />
            </div>

            {process.map((step, i) => (
              <li
                key={step.title}
                className="process-step relative [transform-style:preserve-3d]"
              >
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <span className="process-badge relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface font-display text-xl text-gold shadow-depth">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-medium tracking-tight text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
