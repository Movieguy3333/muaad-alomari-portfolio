import { LucideRadioTower } from "lucide-react";

import { Project } from "@/types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className=" group h-full flex flex-col bg-cream-50 border border-cream-300 rounded-2xl overflow-hidden transition-all duration-300  hover:shadow-xl hover:shadow-terracotta-500/10 hover:border-terracotta-300 ">
      {/* Top Accent Bar */}
      <div className="h-1 w-full bg-terracotta-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow gap-y-4">
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
            className="w-full h-64 object-cover object-center rounded-lg shadow-lg group-hover:border-terracotta-400 transition-all duration-300"
          />
        </a>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-ink group-hover:text-terracotta-600 transition-colors">
              {project.title}
            </h3>
            <span className="text-sm text-ink-muted font-mono">
              {project.year}
            </span>
          </div>
        </div>

        <p className="text-ink-muted mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono bg-cream-200 text-terracotta-700 border border-cream-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links Footer */}
        <div className="flex items-center gap-2 pt-4 border-t border-cream-300">
          <a
            href={project.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-terracotta-600 transition-colors bg-cream-50 border border-cream-300 rounded-full px-4 py-1.5 hover:bg-cream-100"
            aria-label={`Live demo of ${project.title} (opens in new tab)`}
          >
            <LucideRadioTower className="h-5 w-5" />
            Live Demo
          </a>

          {/*   {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-terracotta-600 transition-colors"
              aria-label={`Live demo of ${project.title} (opens in new tab)`}
            >
              <LucideRadioTower className="h-4 w-4" />
              Live Demo
            </a>
          )} */}
        </div>
      </div>
    </div>
  );
}
