"use client";

import { Mail, Github, Linkedin, MapPin, ArrowDown } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Progress from the hero pinned at the top (0) to fully scrolled away (1).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Layered depth: content lifts and fades, the portrait floats up at a
  // different rate, and its halo swells — the speed difference = parallax.
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const haloScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // When reduced motion is requested, pass no scroll-linked style at all.
  const anim = <T,>(value: T): T | undefined => (reduce ? undefined : value);

  return (
    <section
      ref={ref}
      id="home"
      aria-labelledby="hero-heading"
      className="relative pt-36 pb-16 md:pt-48 md:pb-28 overflow-hidden bg-bg"
    >
      {/* Futuristic backdrop: faint grid + ambient accent glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-glow-hero" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left: Name, Title, Links */}
          <motion.div
            style={anim({ y: contentY, opacity: contentOpacity })}
            className="text-center md:text-left flex-1"
          >
            {/* Eyebrow status pill */}
            {/* <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-content-muted">
                <MapPin size={13} aria-hidden="true" className="text-accent" />
                {personalInfo.location}
              </span>
            </div>
 */}
            <h1
              id="hero-heading"
              className="text-5xl md:text-7xl font-bold mb-5 tracking-tight leading-[1.02]"
            >
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-content mb-6 max-w-2xl leading-relaxed">
              Full Stack Web Developer
            </h2>
            <p className="text-content-muted mb-9 max-w-2xl leading-relaxed">
              I&apos;m a full-stack software engineer graduating from Brooklyn
              College, CUNY with a 3.96 GPA and Dean&apos;s Honor Award. I
              specialize in building high-performance, real-time web
              applications, with a strong focus on scalable architecture and
              robust system design. My core stack is React, Next.js, and
              TypeScript.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-bg font-semibold text-sm shadow-lg shadow-accent/25 hover:bg-accent-bright hover:shadow-accent/40 transition-all"
                title={personalInfo.email}
                aria-label="Email"
              >
                <Mail size={18} aria-hidden="true" />
                <span>Get in touch</span>
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface text-content-muted hover:text-accent border border-line hover:border-accent/50 transition-all"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <Linkedin size={18} aria-hidden="true" />
                <span className="text-sm hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface text-content-muted hover:text-accent border border-line hover:border-accent/50 transition-all"
                aria-label="GitHub profile (opens in new tab)"
              >
                <Github size={18} aria-hidden="true" />
                <span className="text-sm hidden sm:inline">GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Profile Image (floats up as you scroll) */}
          <motion.div style={anim({ y: portraitY })} className="flex-shrink-0">
            <div className="relative">
              {/* Accent halo behind the portrait — swells on scroll */}
              <motion.div
                aria-hidden="true"
                style={anim({ scale: haloScale })}
                className="absolute -inset-4 rounded-full bg-accent/20 blur-2xl"
              />
              <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border border-accent/30 ring-1 ring-inset ring-white/5 glow-accent">
                <Image
                  src="/images/muaad.JPG"
                  alt={`${personalInfo.name} headshot`}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue — a drifting chevron that fades out on the first scroll */}
      <motion.a
        href="#terminal"
        aria-label="Scroll to explore"
        style={anim({ opacity: cueOpacity })}
        className="hidden md:flex absolute bottom-7 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-content-faint hover:text-accent transition-colors"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.25em]">
          Scroll
        </span>
        <span className="animate-scroll-cue">
          <ArrowDown size={16} aria-hidden="true" />
        </span>
      </motion.a>
    </section>
  );
}
