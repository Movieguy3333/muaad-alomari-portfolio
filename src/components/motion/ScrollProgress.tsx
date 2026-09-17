"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Top-of-page reading-progress bar, scrubbed to total page scroll.
 * A light spring smooths the raw scrollYProgress so the bar glides rather than
 * tracking every pixel 1:1 — reads intentional, not twitchy. Purely decorative
 * (aria-hidden); the value it mirrors is already conveyed by the content.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-accent via-accent-bright to-accent-2 shadow-[0_0_12px_rgb(var(--accent)/0.6)]"
    />
  );
}
