import { skills } from "@/lib/data";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import React from "react";

const categoryLabels: Record<string, string> = {
  ai: "AI Tools",
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono uppercase tracking-[0.2em] text-flux-400 mb-3">
          Toolkit
        </p>
        <h2
          id="skills-heading"
          className="text-3xl md:text-5xl font-bold text-ink mb-14 tracking-tight"
        >
          Technical Skills
        </h2>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <StaggerItem key={category}>
              <div className="group relative h-full glass rounded-2xl p-6 transition-all duration-300 hover:border-flux-400/25 hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(34,211,238,0.5)]">
                <h3 className="flex items-center gap-2 text-sm font-mono font-bold text-flux-300 mb-5 capitalize tracking-wide">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-flux-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                    aria-hidden="true"
                  />
                  {categoryLabels[category] ?? category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-lg text-sm text-ink-muted transition-colors hover:text-ink hover:border-flux-400/30 hover:bg-flux-400/5 cursor-default"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
