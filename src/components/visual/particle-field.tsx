"use client";

import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { cn } from "@/lib/utils";

// Stable engine initialiser — must keep the same reference across the app
// (the tsParticles provider enforces this).
const initEngine = (engine: Engine) => loadSlim(engine);

/**
 * Ambient floating gold particle field built on tsParticles. Renders behind
 * content (CTA, footer ornament). Connects nearby points with faint links and
 * gently grabs them toward the cursor for a tactile, dynamic feel.
 */
export function ParticleField({
  className,
  density = 60,
  interactive = true,
  id = "particles",
  variant = "links",
}: {
  className?: string;
  density?: number;
  interactive?: boolean;
  id?: string;
  /** "links" = gold constellation, "stars" = twinkling star field. */
  variant?: "links" | "stars";
}) {
  const reduce = useReducedMotion();

  const options: ISourceOptions = useMemo(() => {
    const common = {
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      background: { color: "transparent" },
    };

    if (variant === "stars") {
      return {
        ...common,
        particles: {
          number: { value: density, density: { enable: true } },
          color: { value: ["#f5c542", "#f3f5fb", "#d9a900"] },
          opacity: {
            value: { min: 0.1, max: 0.9 },
            animation: { enable: true, speed: 1.4, sync: false },
          },
          size: { value: { min: 0.6, max: 2.4 } },
          links: { enable: false },
          move: {
            enable: true,
            speed: 0.25,
            direction: "none",
            random: true,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: interactive, mode: "bubble" },
            resize: { enable: true },
          },
          modes: {
            bubble: { distance: 140, size: 4, duration: 2, opacity: 1 },
          },
        },
      } satisfies ISourceOptions;
    }

    return {
      ...common,
      particles: {
        number: { value: density, density: { enable: true } },
        color: { value: ["#d9a900", "#f5c542", "#9fa9c0"] },
        opacity: {
          value: { min: 0.15, max: 0.6 },
          animation: { enable: true, speed: 0.6, sync: false },
        },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 130,
          color: "#d9a900",
          opacity: 0.18,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.7,
          direction: "none",
          random: true,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: interactive, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.4 } },
        },
      },
    } satisfies ISourceOptions;
  }, [density, interactive, variant]);

  if (reduce) return null;

  return (
    <ParticlesProvider init={initEngine}>
      <Particles
        id={id}
        options={options}
        className={cn("pointer-events-none absolute inset-0", className)}
      />
    </ParticlesProvider>
  );
}
