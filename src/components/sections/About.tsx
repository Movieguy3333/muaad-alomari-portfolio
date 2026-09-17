import Image from "next/image";
import { Cat, Clapperboard, Swords, type LucideIcon } from "lucide-react";

import { funFacts } from "@/lib/data";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";

// Icon names stored in data.ts resolve to their lucide component here so the
// data layer stays free of JSX imports.
const iconMap: Record<string, LucideIcon> = {
  Swords,
  Cat,
  Clapperboard,
};

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-bg border-t border-line"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header — matches the eyebrow/heading rhythm of the other sections */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
            {funFacts.eyebrow}
          </p>
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-content mb-4 tracking-tight"
          >
            {funFacts.heading}
          </h2>
          <p className="text-lg text-content-muted leading-relaxed">
            {funFacts.intro}
          </p>
        </div>

        {/* Alternating image / copy rows */}
        <Stagger className="space-y-16 lg:space-y-24" stagger={0.15}>
          {funFacts.facts.map((fact, i) => {
            const Icon = iconMap[fact.icon];
            const flip = i % 2 === 1; // swap sides on every other row

            return (
              <StaggerItem key={fact.title}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                  {/* Image */}
                  <div
                    className={`group relative ${flip ? "lg:order-2" : "lg:order-1"}`}
                  >
                    {/* Ambient accent wash behind the frame */}
                    <div
                      aria-hidden="true"
                      className="absolute -inset-3 bg-gradient-to-tr from-accent/10 via-transparent to-accent-2/15 rounded-[2rem] blur-2xl -z-10"
                    />
                    <Parallax speed={flip ? -0.04 : 0.04}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line ring-1 ring-inset ring-white/5 shadow-xl shadow-black/40 w-[75%] mx-auto lg:w-auto">
                        <Image
                          src={fact.image}
                          alt={fact.imageAlt}
                          fill
                          sizes=""
                          className="object-cover object-center transition-transform "
                        />
                        {/* Bottom-up scrim keeps the frame reading as lit and cohesive on the dark ground */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent"
                        />
                      </div>
                    </Parallax>
                  </div>

                  {/* Copy */}
                  <div className={`${flip ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-surface-2 border border-line text-accent shadow-[0_0_18px_-4px_rgb(var(--accent)/0.5)]">
                        {Icon ? <Icon size={22} /> : null}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-content tracking-tight">
                        {fact.title}
                      </h3>
                    </div>
                    <p className="text-lg text-content-muted leading-relaxed">
                      {fact.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
