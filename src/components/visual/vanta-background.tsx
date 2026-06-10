"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type VantaEffect = "net" | "globe" | "dots" | "rings" | "waves";

type VantaInstance = { destroy: () => void };

// Vanta removes its own <canvas> on destroy; if React already unmounted the
// host node, removeChild throws. Swallow that — the GL context is gone either way.
function safeDestroy(inst: VantaInstance | null) {
  try {
    inst?.destroy();
  } catch {
    /* host node already detached */
  }
}

const brand = {
  gold: 0xd9a900,
  goldBright: 0xf5c542,
  ink: 0x060b18,
  indigo: 0x6366f1,
};

/**
 * Live 3D WebGL background powered by Vanta.js (three.js under the hood).
 * Loads only on the client, only when the section scrolls near view, and
 * never for users who prefer reduced motion. A CSS `bg-aurora` gradient is
 * always rendered as a graceful fallback beneath it.
 */
export function VantaBackground({
  effect = "net",
  className,
  opacity = 0.7,
}: {
  effect?: VantaEffect;
  className?: string;
  /** Opacity of the live canvas layer (0–1). Lower it behind text. */
  opacity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const instance = useRef<VantaInstance | null>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);

  // Track viewport visibility — we create the WebGL scene only while the
  // section is on screen and tear it down once it scrolls away, so several
  // Vanta sections across a page never keep their GL contexts alive at once.
  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  useEffect(() => {
    if (!active || reduce || !ref.current || instance.current) return;
    let cancelled = false;

    (async () => {
      const THREE = await import("three");
      // Some Vanta effects (e.g. DOTS) reference a global `THREE` instead of the
      // instance passed in options — expose it before the effect module loads.
      (window as unknown as { THREE?: unknown }).THREE = THREE;

      const common = {
        el: ref.current!,
        THREE,
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
      };

      let created: VantaInstance;
      if (effect === "globe") {
        const GLOBE = (await import("vanta/dist/vanta.globe.min")).default;
        created = GLOBE({
          ...common,
          color: brand.gold,
          color2: brand.goldBright,
          backgroundColor: brand.ink,
          size: 1.05,
        });
      } else if (effect === "rings") {
        const RINGS = (await import("vanta/dist/vanta.rings.min")).default;
        created = RINGS({
          ...common,
          color: brand.gold,
          backgroundColor: brand.ink,
          backgroundAlpha: 0,
        });
      } else if (effect === "waves") {
        const WAVES = (await import("vanta/dist/vanta.waves.min")).default;
        created = WAVES({
          ...common,
          color: 0x16243f,
          shininess: 28,
          waveHeight: 14,
          waveSpeed: 0.85,
          zoom: 0.9,
        });
      } else if (effect === "dots") {
        const DOTS = (await import("vanta/dist/vanta.dots.min")).default;
        created = DOTS({
          ...common,
          color: brand.gold,
          color2: brand.indigo,
          backgroundColor: brand.ink,
          size: 3.2,
          spacing: 32,
          showLines: false,
        });
      } else {
        const NET = (await import("vanta/dist/vanta.net.min")).default;
        created = NET({
          ...common,
          color: brand.gold,
          backgroundColor: brand.ink,
          points: 11,
          maxDistance: 22,
          spacing: 17,
          showDots: true,
        });
      }

      if (cancelled) safeDestroy(created);
      else instance.current = created;
    })();

    return () => {
      cancelled = true;
      safeDestroy(instance.current);
      instance.current = null;
    };
  }, [active, effect, reduce]);

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 bg-aurora", className)}
    >
      <div ref={ref} style={{ opacity }} className="absolute inset-0" />
    </div>
  );
}
