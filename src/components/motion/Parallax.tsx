"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import React, { useRef } from "react";

/**
 * Scroll-linked parallax wrapper. As the element travels through the viewport,
 * its children translate on the Y axis, so layers at different `speed`s move at
 * different rates and the page gains depth.
 *
 * speed: fraction of the element's travel to offset by. Positive = drifts up
 * (foreground feel); negative = drifts down (recedes). ~0.1–0.3 is tasteful.
 *
 * Honors prefers-reduced-motion: renders a plain, untransformed element.
 */
export default function Parallax({
  children,
  speed = 0.15,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${speed * 100}%`, `${speed * -100}%`],
  );

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
