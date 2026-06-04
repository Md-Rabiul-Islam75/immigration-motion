"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer } from "./variants";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Animation delay in seconds. */
  delay?: number;
  /** Override the default fade-up variant. */
  variants?: Variants;
  /** Render as a different element. */
  as?: "div" | "section" | "li" | "span" | "article";
  /** Re-run the animation each time it scrolls into view. */
  once?: boolean;
};

/**
 * Scroll-triggered entrance. Wraps any block and animates it in
 * when it enters the viewport.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
  as = "div",
  once = true,
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: "div" | "section" | "ul";
  once?: boolean;
};

/**
 * Parent container that staggers the entrance of its direct
 * <Reveal>/motion children. Children should use the `fadeUp`
 * (or compatible) variant with hidden/show states.
 */
export function Stagger({
  children,
  className,
  stagger = 0.12,
  delay = 0,
  as = "div",
  once = true,
}: StaggerProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.15 }}
    >
      {children}
    </MotionTag>
  );
}

/** A single staggered child — use inside <Stagger>. */
export function StaggerItem({
  children,
  className,
  variants = fadeUp,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  as?: "div" | "li" | "article";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag className={cn(className)} variants={variants}>
      {children}
    </MotionTag>
  );
}
