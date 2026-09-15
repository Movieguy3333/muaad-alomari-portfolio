"use client";

import { useEffect, useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data";

const NAV_LINKS = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? "glass-strong border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}
        >
          {/* Left: Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 font-mono text-lg font-bold tracking-tight text-ink"
            aria-label="Back to top"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-flux-400 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-flux-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            </span>
            <span>
              muaad<span className="text-flux-400">.dev</span>
            </span>
          </a>

          {/* Center: Section links (desktop) */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="px-3.5 py-2 text-sm font-medium text-ink-muted hover:text-ink rounded-lg transition-colors hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Contact Links + Resume */}
          <div className="flex gap-1.5 items-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-ink-muted hover:text-flux-400 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Email"
              title={personalInfo.email}
            >
              <Mail size={19} />
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-ink-muted hover:text-flux-400 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="LinkedIn (opens in new tab)"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-ink-muted hover:text-flux-400 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="GitHub (opens in new tab)"
            >
              <Github size={19} />
            </a>
            <a
              href={personalInfo.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block ml-1.5 px-4 py-1.5 text-xs font-semibold text-flux-100 bg-flux-400/10 border border-flux-400/40 rounded-full hover:bg-flux-400/20 hover:border-flux-400/70 hover:shadow-[0_0_18px_-2px_rgba(34,211,238,0.5)] transition-all"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
