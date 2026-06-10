"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp } from "@/components/motion/variants";
import { TiltCard, Layer3D } from "@/components/motion/tilt-card";
import { VantaBackground } from "@/components/visual/vanta-background";
import { LottiePlayer } from "@/components/visual/lottie-player";
import orbit from "@/components/visual/lottie/orbit.json";
import { stats } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Blobs drift at different speeds as you scroll — subtle parallax depth.
  const yBack = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      {/* Live 3D WebGL globe — the world your clients are moving toward. */}
      <VantaBackground effect="globe" />

      {/* Ambient parallax ornaments layered over the Vanta field */}
      <motion.div
        aria-hidden
        style={{ opacity: fade }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          style={{ y: yBack }}
          className="absolute left-1/2 top-[-10%] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gold/[0.07] blur-[120px]"
        />
        <motion.div
          style={{ y: yFront }}
          className="absolute right-[-10%] top-1/3 h-[320px] w-[320px] rounded-full bg-gold/[0.05] blur-[100px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--color-ink))] [background-size:100%_100%]" />
      </motion.div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start text-left"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-4 py-1.5 text-xs font-medium text-cream/80 backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                Regulated Canadian Immigration Consultancy
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 max-w-2xl font-display text-5xl font-light leading-[1.04] tracking-tight text-cream sm:text-6xl md:text-[4.25rem]"
            >
              Your trusted pathway to a{" "}
              <span className="text-gold-gradient italic">new life</span> in
              Canada
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
            >
              From your first assessment to landing day, HnH Immigration guides
              individuals, families, and businesses through every step — with
              clarity, care, and proven results.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col items-start gap-3 sm:flex-row"
            >
              <Button href="/contact" size="lg">
                Start your free assessment
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore our services
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex items-center gap-3 text-sm text-muted"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span>Trusted by 600+ successful clients across Canada</span>
            </motion.div>
          </motion.div>

          {/* Director orb — tilts in 3D toward the cursor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative mx-auto hidden w-full max-w-md lg:block"
          >
            <TiltCard intensity={11} lift={26} glare={false} className="relative">
              {/* Looping Lottie orbit halo behind the orb */}
              <LottiePlayer
                data={orbit}
                loop
                className="pointer-events-none absolute -inset-[12%] z-0 opacity-80"
              />

              {/* Rotating conic ring */}
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(217,169,0,0.35),transparent_55%)] blur-[2px]"
              />

              {/* Orb — lifted toward the viewer in 3D space */}
              <Layer3D depth={40} className="relative">
                <div className="relative aspect-square overflow-hidden rounded-full border border-gold/25 bg-ink-soft p-2 shadow-depth-gold">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src="/banner.png"
                      alt="HnH Immigration — your pathway to a new life in Canada"
                      fill
                      priority
                      sizes="(min-width: 1024px) 28rem, 0px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_120%,rgba(6,11,24,0.85),transparent)]" />
                  </div>
                </div>
              </Layer3D>

              {/* Floating approval stat card — highest 3D layer */}
              <Layer3D
                depth={90}
                className="absolute -left-4 bottom-10 z-30"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-3 overflow-hidden rounded-2xl border border-line bg-ink-soft/90 px-5 py-4 shadow-depth backdrop-blur"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <TrendingUp className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-display text-2xl font-light text-gold">
                      {stats[0].value}
                    </div>
                    <div className="text-xs text-muted">{stats[0].label}</div>
                  </div>
                </motion.div>
              </Layer3D>

              {/* Floating clients stat card */}
              <Layer3D depth={70} className="absolute -right-2 top-8 z-30">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="rounded-2xl border border-line bg-ink-soft/90 px-5 py-4 text-center shadow-depth backdrop-blur"
                >
                  <div className="font-display text-2xl font-light text-gold">
                    {stats[2].value}
                  </div>
                  <div className="text-xs text-muted">{stats[2].label}</div>
                </motion.div>
              </Layer3D>
            </TiltCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
