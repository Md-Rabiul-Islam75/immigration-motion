"use client";

import { useEffect, useRef } from "react";
import lottie, { type AnimationItem } from "lottie-web";
import { cn } from "@/lib/utils";

/**
 * Thin wrapper around lottie-web. Used directly (no React peer-dependency
 * conflicts) and only on the client. Pass parsed Lottie JSON via `data`.
 */
export function LottiePlayer({
  data,
  loop = false,
  autoplay = true,
  speed = 1,
  className,
}: {
  data: unknown;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const anim = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    anim.current = lottie.loadAnimation({
      container: ref.current,
      renderer: "svg",
      loop,
      autoplay,
      animationData: data,
    });
    anim.current.setSpeed(speed);
    return () => {
      anim.current?.destroy();
      anim.current = null;
    };
  }, [data, loop, autoplay, speed]);

  return <div ref={ref} aria-hidden className={cn(className)} />;
}
