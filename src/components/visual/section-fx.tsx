import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type FxVariant =
  | "beams"
  | "grid"
  | "aurora"
  | "dots"
  | "rays"
  | "mesh"
  | "rings"
  | "waves"
  | "spotlight";

/**
 * Decorative, animated section background. Each `variant` is a distinct,
 * GPU-light CSS animation so every section of the site can feel alive in its
 * own way without spinning up a WebGL context per section. All motion is
 * neutralised by the global `prefers-reduced-motion` rule in globals.css.
 *
 * Drop as the first child of a `relative overflow-hidden` section; page
 * content placed after it (with `relative`) paints on top.
 */
export function SectionFX({
  variant,
  className,
}: {
  variant: FxVariant;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {renderers[variant]()}
    </div>
  );
}

const gold = "rgba(217,169,0,";
const indigo = "rgba(99,102,241,";
const cyan = "rgba(56,189,248,";
const purple = "rgba(168,85,247,";

const renderers: Record<FxVariant, () => ReactNode> = {
  // Vertical light beams sweeping across the band.
  beams: () => {
    const beams = [
      { left: "8%", w: 90, delay: "0s", dur: "7s", c: 0.18 },
      { left: "26%", w: 60, delay: "1.6s", dur: "9s", c: 0.12 },
      { left: "48%", w: 120, delay: "0.8s", dur: "8s", c: 0.16 },
      { left: "68%", w: 70, delay: "2.4s", dur: "10s", c: 0.1 },
      { left: "85%", w: 100, delay: "1.1s", dur: "7.5s", c: 0.14 },
    ];
    return (
      <>
        {beams.map((b, i) => (
          <span
            key={i}
            className="absolute top-0 h-full blur-[6px]"
            style={{
              left: b.left,
              width: b.w,
              backgroundImage: `linear-gradient(to bottom, transparent, ${gold}${b.c}) 60%, transparent)`,
              animation: `beam-sweep ${b.dur} ease-in-out ${b.delay} infinite`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(60%_100%_at_50%_50%,rgba(217,169,0,0.05),transparent_70%)]" />
      </>
    );
  },

  // Synthwave perspective floor grid scrolling toward the viewer.
  grid: () => (
    <div className="absolute inset-0 [perspective:600px]">
      <div
        className="absolute -bottom-1/4 left-1/2 h-[120%] w-[200%] -translate-x-1/2 origin-bottom [transform:rotateX(68deg)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_100%,black,transparent)]"
        style={{
          ["--grid-step" as string]: "56px",
          backgroundImage: `linear-gradient(${gold}0.22) 1px, transparent 1px), linear-gradient(90deg, ${gold}0.16) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
          animation: "grid-pan 3.2s linear infinite",
        }}
      />
    </div>
  ),

  // Two slow-rotating conic auroras.
  aurora: () => (
    <>
      <div
        className="absolute -left-1/4 top-[-30%] h-[80%] w-[80%] rounded-full blur-[90px] animate-spin-slow"
        style={{
          backgroundImage: `conic-gradient(from 0deg, ${gold}0.16), ${purple}0.10), ${cyan}0.10), ${gold}0.16))`,
        }}
      />
      <div
        className="absolute -right-1/4 bottom-[-30%] h-[70%] w-[70%] rounded-full blur-[100px]"
        style={{
          backgroundImage: `conic-gradient(from 180deg, ${indigo}0.12), ${gold}0.12), transparent, ${indigo}0.12))`,
          animation: "spin-slow 34s linear infinite reverse",
        }}
      />
    </>
  ),

  // Drifting dotted field.
  dots: () => (
    <div
      className="absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent_75%)]"
      style={{
        backgroundImage: `radial-gradient(${gold}0.35) 1.4px, transparent 1.6px)`,
        backgroundSize: "44px 44px",
        animation: "dot-drift 6s linear infinite",
      }}
    />
  ),

  // Slowly rotating light rays from a point.
  rays: () => (
    <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_50%_30%,black,transparent_70%)]">
      <div
        className="absolute left-1/2 top-[30%] h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-60"
        style={{
          backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, ${gold}0.10) 0deg, transparent 6deg, transparent 12deg, ${gold}0.10) 18deg)`,
        }}
      />
    </div>
  ),

  // Gradient mesh blobs wandering independently.
  mesh: () => {
    const blobs = [
      { c: `${gold}0.16)`, top: "5%", left: "10%", mx: "40px", my: "30px", d: "0s", dur: "16s", s: "42%" },
      { c: `${indigo}0.13)`, top: "40%", left: "70%", mx: "-50px", my: "-30px", d: "2s", dur: "20s", s: "38%" },
      { c: `${cyan}0.10)`, top: "65%", left: "25%", mx: "30px", my: "-40px", d: "4s", dur: "18s", s: "40%" },
    ];
    return (
      <>
        {blobs.map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-[70px]"
            style={{
              top: b.top,
              left: b.left,
              width: b.s,
              height: b.s,
              backgroundColor: b.c,
              ["--mx" as string]: b.mx,
              ["--my" as string]: b.my,
              animation: `mesh-float ${b.dur} ease-in-out ${b.d} infinite`,
            }}
          />
        ))}
      </>
    );
  },

  // Concentric pulsing rings (radar / signal).
  rings: () => (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            borderColor: `${gold}0.18)`,
            animation: `ring-expand 8s ease-out ${i * 2}s infinite`,
          }}
        />
      ))}
    </div>
  ),

  // Soft gold spotlights drifting across a dark surface.
  spotlight: () => {
    const lights = [
      { c: `${gold}0.12)`, top: "-20%", left: "-10%", mx: "70vw", my: "10px", dur: "22s", d: "0s", s: "55%" },
      { c: `${indigo}0.10)`, top: "10%", left: "60%", mx: "-60vw", my: "-20px", dur: "28s", d: "3s", s: "50%" },
    ];
    return (
      <>
        {lights.map((l, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-[90px]"
            style={{
              top: l.top,
              left: l.left,
              width: l.s,
              height: l.s,
              backgroundColor: l.c,
              ["--mx" as string]: l.mx,
              ["--my" as string]: l.my,
              animation: `mesh-float ${l.dur} ease-in-out ${l.d} infinite`,
            }}
          />
        ))}
      </>
    );
  },

  // Layered horizontal waves drifting sideways.
  waves: () => (
    <div className="absolute inset-x-0 bottom-0 h-2/3 [mask-image:linear-gradient(to_top,black,transparent)]">
      {[
        { top: "20%", op: 0.1, dur: "18s" },
        { top: "45%", op: 0.07, dur: "26s" },
      ].map((w, i) => (
        <svg
          key={i}
          className="absolute left-0 w-[200%]"
          style={{ top: w.top, animation: `wave-x ${w.dur} linear infinite` }}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          height="120"
        >
          <path
            d="M0,60 C240,110 480,10 720,60 C960,110 1200,10 1440,60 L1440,120 L0,120 Z"
            fill={`${gold}${w.op})`}
          />
        </svg>
      ))}
    </div>
  ),
};
