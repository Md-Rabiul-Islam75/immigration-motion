"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// mdx.so-style sequential loading lines — adapted to the immigration journey.
const lines = [
  "Your journey begins",
  "Mapping your pathway",
  "Preparing your future",
  "Welcome to Canada",
];

export function Preloader() {
  const [done, setDone] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Show only once per browser session. Reading sessionStorage must happen
    // on the client (after mount) to avoid a hydration mismatch, so this is a
    // deliberate external-store sync rather than derived state.
    if (typeof window !== "undefined" && sessionStorage.getItem("hnh-loaded")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDone(true);
      return;
    }

    const stepMs = 1150;
    const interval = setInterval(() => {
      setIndex((i) => {
        if (i >= lines.length - 1) {
          clearInterval(interval);
          return i;
        }
        return i + 1;
      });
    }, stepMs);

    const finish = setTimeout(
      () => {
        sessionStorage.setItem("hnh-loaded", "1");
        setDone(true);
      },
      stepMs * lines.length + 400,
    );

    return () => {
      clearInterval(interval);
      clearTimeout(finish);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.08] blur-[120px]"
          />
          <div className="relative h-12 overflow-hidden text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -28, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-2xl font-light tracking-tight text-cream sm:text-3xl"
              >
                {lines[index]}
                <span className="text-gold">.</span>
              </motion.p>
            </AnimatePresence>
          </div>

          {/* progress hairline */}
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-gold/70"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
