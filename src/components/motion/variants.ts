import type { Variants, Transition } from "framer-motion";

export const easeOutExpo: Transition["ease"] = [0.16, 1, 0.3, 1];

/** Fade + rise — the default entrance for most blocks. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: easeOutExpo } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

/** Parent that staggers its children's entrances. */
export const staggerContainer = (stagger = 0.12, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/* ------------------------------------------------------------------ */
/*  3D entrance variants — cards "come by moving" + rotating into place */
/*  transformPerspective is set in both states so each element gets its */
/*  own depth without relying on a perspective ancestor.                */
/* ------------------------------------------------------------------ */

const spring3d: Transition = {
  type: "spring",
  stiffness: 90,
  damping: 16,
  mass: 0.7,
};

/** Tips up from the floor — good for grids of cards. */
export const rotateInUp: Variants = {
  hidden: { opacity: 0, y: 80, rotateX: -55, transformPerspective: 1000 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transformPerspective: 1000,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

/** Swings in from the left, rotating around the Y axis. */
export const flyInLeft: Variants = {
  hidden: { opacity: 0, x: -90, rotateY: 45, transformPerspective: 1000 },
  show: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transformPerspective: 1000,
    transition: spring3d,
  },
};

/** Swings in from the right. */
export const flyInRight: Variants = {
  hidden: { opacity: 0, x: 90, rotateY: -45, transformPerspective: 1000 },
  show: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transformPerspective: 1000,
    transition: spring3d,
  },
};

/** Pendulum swing-in with a little overshoot. */
export const swingIn: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotate: -10,
    rotateX: -25,
    scale: 0.92,
    transformPerspective: 1000,
  },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    rotateX: 0,
    scale: 1,
    transformPerspective: 1000,
    transition: spring3d,
  },
};

/** Zooms forward while un-rotating — punchy hero/feature cards. */
export const zoomRotate: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotate: 8,
    rotateY: -30,
    transformPerspective: 1000,
  },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    rotateY: 0,
    transformPerspective: 1000,
    transition: { type: "spring", stiffness: 110, damping: 14 },
  },
};
