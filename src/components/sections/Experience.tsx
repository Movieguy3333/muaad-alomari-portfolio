"use client";

import { experience } from "@/lib/data";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const railRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // The timeline draws itself as the list scrolls through the viewport centre.
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.4,
  });
  // Fade the leading edge in right at the start so the fill never "pops".
  const fillOpacity = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-soft border-t border-line"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3 text-center">
          Journey
        </p>
        <h2
          id="experience-heading"
          className="text-3xl md:text-4xl font-bold text-content mb-16 text-center tracking-tight"
        >
          Relevant Experience
        </h2>

        <div ref={railRef} className="relative">
          {/* Rail track — dim baseline */}
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-3 bottom-3 w-px -translate-x-1/2 rounded-full bg-line"
          />
          {/* Rail fill — draws downward, scrubbed to scroll */}
          <motion.span
            aria-hidden="true"
            style={reduce ? { scaleY: 1 } : { scaleY, opacity: fillOpacity }}
            className="absolute left-[7px] top-3 bottom-3 w-px -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-accent to-accent-2 shadow-[0_0_10px_1px_rgb(var(--accent)/0.55)]"
          />

          <Stagger className="space-y-12">
            {experience.map((item, index) => (
              <StaggerItem key={index}>
                <div className="relative pl-10 group">
                  {/* Node on the rail */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full ring-4 ring-bg-soft"
                  >
                    <span className="h-3.5 w-3.5 rounded-full bg-accent shadow-[0_0_12px_2px_rgb(var(--accent)/0.5)] transition-transform duration-300 group-hover:scale-125" />
                  </span>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8">
                    <div className="sm:w-44 flex-shrink-0 pt-0.5">
                      <span className="inline-block text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-content">
                        {item.role}
                      </h3>
                      <div className="text-lg text-content-muted font-medium mb-4">
                        {item.company}
                      </div>
                      <ul className="space-y-2 list-none">
                        {item.description.map((point, i) => (
                          <li
                            key={i}
                            className="text-content-muted leading-relaxed flex gap-2"
                          >
                            <span
                              className="text-accent flex-shrink-0"
                              aria-hidden="true"
                            >
                              ▹
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
