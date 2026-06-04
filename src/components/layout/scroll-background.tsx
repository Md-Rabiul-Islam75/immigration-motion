"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
} from "framer-motion";

/**
 * Fixed, page-wide background that shifts color and drifts as you scroll —
 * the mdx.so "every section feels alive" effect. Two soft radial glows track
 * scroll progress: their position, size, and tint all interpolate, so each
 * section of the page sits in its own ambient colour without hard seams.
 */
export function ScrollBackground() {
  const { scrollYProgress } = useScroll();
  // Smooth the raw progress so the colour drift feels fluid, not jumpy.
  const p = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 24,
    restDelta: 0.001,
  });

  // Primary glow — sweeps top-left → right as you descend.
  const x1 = useTransform(p, [0, 0.5, 1], ["15%", "75%", "30%"]);
  const y1 = useTransform(p, [0, 0.5, 1], ["8%", "45%", "85%"]);
  const c1 = useTransform(
    p,
    [0, 0.5, 1],
    ["rgba(217,169,0,0.14)", "rgba(99,102,241,0.10)", "rgba(217,169,0,0.12)"],
  );
  const glow1 = useMotionTemplate`radial-gradient(40% 40% at ${x1} ${y1}, ${c1}, transparent 70%)`;

  // Secondary glow — counter-moves for depth.
  const x2 = useTransform(p, [0, 0.5, 1], ["85%", "20%", "70%"]);
  const y2 = useTransform(p, [0, 0.5, 1], ["30%", "70%", "20%"]);
  const c2 = useTransform(
    p,
    [0, 0.5, 1],
    ["rgba(56,189,248,0.06)", "rgba(217,169,0,0.10)", "rgba(168,85,247,0.07)"],
  );
  const glow2 = useMotionTemplate`radial-gradient(45% 45% at ${x2} ${y2}, ${c2}, transparent 70%)`;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <motion.div className="absolute inset-0" style={{ backgroundImage: glow1 }} />
      <motion.div className="absolute inset-0" style={{ backgroundImage: glow2 }} />
    </div>
  );
}
