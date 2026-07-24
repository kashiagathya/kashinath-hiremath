"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  client: string;
  domain: string;
  technologies: string[];
  duration: string;
  role: string;
  status: string;
  featured?: boolean;
  teamSize?: string;
  github?: string;
  demo?: string;
}

const domainColors: Record<
  string,
  {
    badge: string;
    border: string;
  }
> = {
  Automotive: {
    badge: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
  },
  Banking: {
    badge: "bg-green-100 text-green-700",
    border: "border-green-200",
  },
  Railway: {
    badge: "bg-orange-100 text-orange-700",
    border: "border-orange-200",
  },
};

export default function ProjectCard({
  title,
  description,
  domain,
  technologies,
  client,
  duration,
  role,
  status,
  github,
  demo,
}: ProjectCardProps) {
  const colors =
    domainColors[domain] ?? {
      badge: "bg-slate-100 text-slate-700",
      border: "border-slate-200",
    };

  return (
    <motion.article
      whileHover={{
        y: -8,
        transition: {
          duration: 0.25,
        },
      }}
      className={`group rounded-3xl border bg-white p-7 shadow-sm transition-all hover:shadow-2xl ${colors.border}`}
    >
      {/* Header */}

      <div className="flex items-start justify-between">
        <div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${colors.badge}`}
          >
            {domain}
          </span>

          <h2 className="mt-4 text-2xl font-bold text-slate-900">
            {title}
          </h2>
        </div>

        <span
  className={`rounded-full px-3 py-1 text-xs font-semibold ${status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-slate-100 text-slate-700"
  }`}
>
  {status}
</span>
      </div>

      {/* Description */}

      <p className="mt-5 text-sm leading-7 text-slate-600">
        {description}
      </p>

      {/* Tech Stack */}

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Metadata */}

      <div className="mt-8 space-y-3 border-t pt-6 text-sm text-slate-600">
        <div className="flex items-center gap-3">
          <Calendar size={18} />
          <span>{duration}</span>
        </div>

        <div className="flex items-center gap-3">
          <Users size={18} />
          <span>{client}</span>
        </div>

        <div className="flex items-center gap-3">
          <Briefcase size={18} />
          <span>{role}</span>
        </div>
      </div>

      {/* Footer */}

      {(github || demo) && (
        <div className="mt-8 flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
            >
              GitHub
              <ArrowUpRight size={18} />
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-green-600 hover:text-green-800"
            >
              Live Demo
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}