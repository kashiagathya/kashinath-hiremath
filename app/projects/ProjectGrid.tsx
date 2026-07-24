"use client";

import { motion } from "framer-motion";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";


interface ProjectGridProps {
  projects: ProjectCardProps[];
}


export default function ProjectGrid({ projects, }: ProjectGridProps) {
  return (
    <section className="mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            All Projects
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Enterprise Portfolio
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Enterprise applications delivered across Automotive,
            Banking and Railway industries using modern frontend
            architecture and cloud technologies.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                client={project.client}
                domain={project.domain}
                technologies={project.technologies}
                duration={project.duration}
                role={project.role}
                status={project.status}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}