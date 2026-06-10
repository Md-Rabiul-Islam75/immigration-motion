"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees at the corners. */
  intensity?: number;
  /** Lift toward the viewer on hover, in px. */
  lift?: number;
  /** Show the cursor-tracking gloss highlight. */
  glare?: boolean;
  /** Scroll-entrance variant applied to the outer wrapper. */
  variants?: Variants;
  /** Render the wrapper as a motion element of this tag. */
  as?: "div" | "article" | "li";
  /**
   * Self-animate the entrance on scroll using `variants`. Use for standalone
   * cards; omit when the card sits inside a <Stagger> that drives the states.
   */
  entrance?: boolean;
  /** Entrance delay (seconds) — only with `entrance`. */
  delay?: number;
};

/**
 * A card that tilts in 3D toward the cursor, lifts on hover, and casts a
 * moving gloss highlight. Pointer-driven (mouse/pen only); on touch and for
 * users who prefer reduced motion it degrades to a plain, still card.
 */
export function TiltCard({
  children,
  className,
  intensity = 9,
  lift = 14,
  glare = true,
  variants,
  as = "div",
  entrance = false,
  delay = 0,
}: TiltCardProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Normalised pointer position within the card: -0.5 → 0.5 on each axis.
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const spring = { stiffness: 220, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useMotionValue(0), spring);
  const rotateY = useSpring(useMotionValue(0), spring);
  const z = useSpring(useMotionValue(0), spring);
  const glareOpacity = useSpring(useMotionValue(0), spring);

  // Gloss follows the cursor across the surface.
  const glareBg = useMotionTemplate`radial-gradient(35% 55% at ${useSpring(
    px,
    spring,
  )}% ${useSpring(
    py,
    spring,
  )}%, rgba(255,255,255,0.22), rgba(255,255,255,0) 70%)`;

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType === "touch" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width; // 0 → 1
    const ny = (e.clientY - rect.top) / rect.height; // 0 → 1
    rotateY.set((nx - 0.5) * intensity * 2);
    rotateX.set(-(ny - 0.5) * intensity * 2);
    z.set(lift);
    px.set(nx * 100);
    py.set(ny * 100);
    glareOpacity.set(1);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
    z.set(0);
    glareOpacity.set(0);
  }

  const MotionTag = motion[as];
  const entranceProps = entrance
    ? {
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: { once: true, amount: 0.2 },
        transition: { delay },
      }
    : {};

  return (
    <MotionTag
      className={cn("perspective-[1100px]", className)}
      variants={variants}
      {...entranceProps}
    >
      <motion.div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={{
          rotateX,
          rotateY,
          translateZ: z,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full will-change-transform"
      >
        {children}
        {glare && !reduce && (
          <motion.span
            aria-hidden
            style={{ backgroundImage: glareBg, opacity: glareOpacity }}
            className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] mix-blend-soft-light transform-[translateZ(40px)]"
          />
        )}
      </motion.div>
    </MotionTag>
  );
}

/** Helper to push a child toward the viewer inside a preserve-3d card. */
export function Layer3D({
  depth = 40,
  className,
  children,
}: {
  depth?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{ transform: `translateZ(${depth}px)` }}
      className={cn("[transform-style:preserve-3d]", className)}
    >
      {children}
    </div>
  );
}
