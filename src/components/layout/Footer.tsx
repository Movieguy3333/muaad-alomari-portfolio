import { personalInfo } from "@/lib/data";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-14 overflow-hidden">
      {/* Soft glow rising from the base */}
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-radial from-flux-500/10 to-transparent blur-2xl"
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="font-mono font-bold text-ink hover:text-flux-400 transition-colors"
          >
            muaad<span className="text-flux-400">.dev</span>
          </a>
          <p className="text-ink-soft text-sm mt-1" suppressHydrationWarning>
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <a
            href={personalInfo.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-ink-muted hover:text-flux-400 hover:bg-white/5 transition-colors"
            aria-label="GitHub (opens in new tab)"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={personalInfo.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-ink-muted hover:text-flux-400 hover:bg-white/5 transition-colors"
            aria-label="LinkedIn (opens in new tab)"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-lg text-ink-muted hover:text-flux-400 hover:bg-white/5 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
