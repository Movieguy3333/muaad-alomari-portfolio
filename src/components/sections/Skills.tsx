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
      className="py-24 px-4 sm:px-6 lg:px-8 bg-bg border-t border-line"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
          Toolkit
        </p>
        <h2
          id="skills-heading"
          className="text-3xl md:text-4xl font-bold text-content mb-14 tracking-tight"
        >
          Technical Skills
        </h2>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <StaggerItem key={category}>
              <div className="group bg-surface border border-line rounded-2xl p-6 h-full ">
                <h3 className="text-sm font-bold text-accent mb-4 capitalize tracking-wide">
                  {categoryLabels[category] ?? category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1.5 bg-surface-2 border border-line rounded-lg text-sm text-content-muted cursor-default "
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
