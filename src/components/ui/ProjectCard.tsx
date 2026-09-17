import { LucideRadioTower } from "lucide-react";

import { Project } from "@/types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group h-full flex flex-col bg-surface border border-line rounded-2xl overflow-hidden transition-all duration-300  hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/40">
      {/* Top Accent Bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-accent to-accent-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Content Section */}
      <div className="p-6 flex flex-col  gap-y-4">
        <a
          href={project.links.code}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo of ${project.title} (opens in new tab)`}
          className="w-[90%] flex flex-col  self-center"
        >
          <Image
            width={800}
            height={600}
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover object-center rounded-lg border border-line ring-1 ring-inset ring-white/5 transition-all duration-300"
          />
        </a>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-content group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <span className="text-sm text-content-faint font-mono">
              {project.year}
            </span>
          </div>
        </div>

        <p className="text-content-muted mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono bg-surface-2 text-accent border border-line rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links Footer */}
        <div className="flex items-center gap-2 pt-4 border-t border-line">
          <a
            href={project.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-content-muted hover:text-accent transition-colors bg-surface-2 border border-line rounded-full px-4 py-1.5 hover:border-accent/50"
            aria-label={`Live demo of ${project.title} (opens in new tab)`}
          >
            <LucideRadioTower className="h-5 w-5" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
