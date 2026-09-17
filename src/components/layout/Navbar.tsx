"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data";

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
          ? "bg-bg/80 backdrop-blur-xl border-line shadow-lg shadow-black/40"
          : "bg-bg/40 backdrop-blur-md border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}
        >
          {/* Left: Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 font-bold text-xl tracking-tight"
          >
            <Image
              src="/images/muaad.JPG"
              alt="Muaad Alomari"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg border border-accent/40 object-cover"
            />
            <span className="text-gradient">Muaad Alomari</span>
          </a>

          {/* Right: Contact Links */}
          <div className="flex gap-1 sm:gap-2 items-center">
            <a
              href={`mailto:${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-lg text-content-muted hover:text-accent hover:bg-surface transition-colors"
              aria-label="Email"
              title={personalInfo.email}
            >
              <Mail size={19} />
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-lg text-content-muted hover:text-accent hover:bg-surface transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-lg text-content-muted hover:text-accent hover:bg-surface transition-colors"
              aria-label="GitHub"
            >
              <Github size={19} />
            </a>
            <a
              href={personalInfo.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block ml-2 px-4 py-1.5 text-xs font-semibold text-accent border border-accent/40 rounded-full hover:bg-accent/10 hover:border-accent/70 transition-all"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
