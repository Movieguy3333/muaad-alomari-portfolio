import { personalInfo } from "@/lib/data";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-bg-soft border-t border-line py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-content-faint text-sm" suppressHydrationWarning>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        <div className="flex gap-3 items-center">
          <a
            href={personalInfo.links.github}
            target="_blank"
            className="grid h-9 w-9 place-items-center rounded-lg text-content-muted hover:text-accent hover:bg-surface transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={personalInfo.links.linkedin}
            target="_blank"
            className="grid h-9 w-9 place-items-center rounded-lg text-content-muted hover:text-accent hover:bg-surface transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="grid h-9 w-9 place-items-center rounded-lg text-content-muted hover:text-accent hover:bg-surface transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
