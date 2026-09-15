import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-center gap-12 md:gap-16">
          {/* Left: Name, Title, Links */}
          <div className="text-center md:text-left flex-1">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 rounded-full glass text-xs font-mono tracking-wide text-ink-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new opportunities
            </div>

            <p className="text-sm font-mono uppercase tracking-[0.3em] text-flux-400 mb-4">
              Full Stack Web Developer
            </p>

            <h1
              id="hero-heading"
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.02]"
            >
              <span className="text-ink">Hi, I&#39;m </span>
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            <p className="text-lg text-ink-muted mb-9 max-w-2xl leading-relaxed">
              A full-stack software engineer graduating from Brooklyn College,
              CUNY with a 3.96 GPA and Dean&#39;s Honor Award. I build
              high-performance, real-time web applications with a focus on
              scalable architecture and robust system design — core stack{" "}
              <span className="text-ink font-medium">React</span>,{" "}
              <span className="text-ink font-medium">Next.js</span>, and{" "}
              <span className="text-ink font-medium">TypeScript</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-night-950 bg-flux-400 hover:bg-flux-300 shadow-[0_0_28px_-6px_rgba(34,211,238,0.7)] hover:shadow-[0_0_36px_-4px_rgba(34,211,238,0.9)] transition-all"
                title={personalInfo.email}
              >
                <Mail size={18} aria-hidden="true" />
                Get in touch
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm text-ink glass hover:border-flux-400/40 hover:text-flux-300 transition-all"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <Linkedin size={18} aria-hidden="true" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm text-ink glass hover:border-flux-400/40 hover:text-flux-300 transition-all"
                aria-label="GitHub profile (opens in new tab)"
              >
                <Github size={18} aria-hidden="true" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Glow halo */}
              <div
                className="absolute -inset-6 rounded-full bg-gradient-to-tr from-flux-500/30 via-iris-500/20 to-transparent blur-2xl"
                aria-hidden="true"
              />
              {/* Rotating conic ring */}
              <div
                className="absolute -inset-1 rounded-full opacity-70"
                style={{
                  background:
                    "conic-gradient(from 180deg, #22D3EE, #8B5CF6, #22D3EE)",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
                }}
                aria-hidden="true"
              />
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/images/muaad.JPG"
                  alt={`${personalInfo.name} headshot`}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
