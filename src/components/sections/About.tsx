import { Heart } from "lucide-react";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-flux-400 mb-3">
              About
            </p>
            <h2
              id="about-heading"
              className="text-3xl md:text-5xl font-bold text-ink mb-6 tracking-tight"
            >
              {about.heading}
            </h2>
            {about.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-lg text-ink-muted mb-6 leading-relaxed [&_strong]:text-ink [&_strong]:font-semibold"
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </div>

          <div className="relative">
            {/* Glow behind the panel */}
            <div
              className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-flux-500/15 via-iris-500/10 to-transparent blur-2xl -z-10"
              aria-hidden="true"
            />
            <div className="glass-strong p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-flux-400/10 border border-flux-400/25">
                  <Heart className="text-flux-400 fill-flux-400" size={20} />
                </span>
                <h3 className="text-xl font-bold text-ink">
                  {about.afkHeading}
                </h3>
              </div>
              <ul className="space-y-4">
                {about.hobbies.map((hobby) => (
                  <li key={hobby.title} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-flux-400 mt-2.5 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    <span className="text-ink-muted leading-relaxed">
                      <strong className="text-ink font-semibold">
                        {hobby.title}:
                      </strong>{" "}
                      {hobby.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
