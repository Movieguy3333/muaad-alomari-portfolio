import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative h-full flex flex-col glass rounded-2xl overflow-hidden transition-all duration-300 hover:border-flux-400/30 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-30px_rgba(34,211,238,0.55)]">
      {/* Image with gradient overlay */}
      <a
        href={project.links.code}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Live demo of ${project.title} (opens in new tab)`}
        className="relative block overflow-hidden"
      >
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            width={800}
            height={600}
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {/* Fade image into the card */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-night-800 via-night-800/20 to-transparent"
            aria-hidden="true"
          />
        </div>
      </a>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow gap-y-4">
        <div className="flex justify-between items-start gap-3">
          <h3 className="text-xl font-bold text-ink group-hover:text-flux-300 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-ink-soft font-mono pt-1.5 flex-shrink-0">
            {project.year}
          </span>
        </div>

        <p className="text-ink-muted flex-grow leading-relaxed text-[0.95rem]">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono text-flux-300 bg-flux-400/[0.08] border border-flux-400/20 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links Footer */}
        <div className="flex items-center gap-2 pt-4 border-t border-white/[0.06]">
          <a
            href={project.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-flux-300 transition-colors"
            aria-label={`Live demo of ${project.title} (opens in new tab)`}
          >
            View live demo
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
