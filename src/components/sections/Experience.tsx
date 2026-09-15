import { experience } from "@/lib/data";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import React from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-night-850/40 border-t border-white/[0.06]"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-mono uppercase tracking-[0.2em] text-flux-400 mb-3 text-center">
          Journey
        </p>
        <h2
          id="experience-heading"
          className="text-3xl md:text-5xl font-bold text-ink mb-16 text-center tracking-tight"
        >
          Work Experience
        </h2>

        <Stagger className="space-y-6">
          {experience.map((item, index) => (
            <StaggerItem key={index}>
              <div className="relative pl-8 sm:pl-0 group">
                {/* Timeline Line */}
                <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-flux-400/50 via-white/10 to-transparent -ml-6 md:-ml-12" />

                {/* Dot on Line */}
                <div className="hidden sm:block absolute left-0 top-6 w-3 h-3 bg-flux-400 rounded-full -ml-[30px] md:-ml-[54px] ring-4 ring-night-950 shadow-[0_0_14px_rgba(34,211,238,0.8)] transition-transform group-hover:scale-125" />

                <div className="glass rounded-2xl p-6 md:p-7 transition-all duration-300 hover:border-flux-400/25 hover:bg-white/[0.03]">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                    <div className="sm:w-44 flex-shrink-0">
                      <span className="inline-block text-xs font-mono font-semibold text-flux-300 uppercase tracking-wider bg-flux-400/10 border border-flux-400/20 px-2.5 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-ink">{item.role}</h3>
                      <div className="text-lg text-flux-400 font-medium mb-4">
                        {item.company}
                      </div>
                      <ul className="space-y-2.5 list-none">
                        {item.description.map((point, i) => (
                          <li
                            key={i}
                            className="text-ink-muted leading-relaxed flex gap-3"
                          >
                            <span
                              className="text-flux-400 flex-shrink-0 mt-1"
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
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
