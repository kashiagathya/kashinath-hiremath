"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const featuredProjects = [
  {
    title: "Web Widgets",
    description:
      "Developed reusable enterprise widgets for connected vehicle infotainment platforms used across multiple Stellantis brands. Focused on scalability, performance, localization and shared component architecture.",
    domain: "Automotive",
    technologies: [
      "React",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "Jest",
    ],
    duration: "2023 - Present",
    teamSize: "15 Engineers",
    role: "Lead Engineer",
    featured: true,
  },
  {
    title: "Localization Platform",
    description:
      "Designed and enhanced multilingual UI infrastructure supporting global vehicle applications. Built reusable localization workflows and improved translation management across brands.",
    domain: "Automotive",
    technologies: [
      "React",
      "TypeScript",
      "Mustache",
      "JSON",
      "CI/CD",
    ],
    duration: "2022 - Present",
    teamSize: "12 Engineers",
    role: "Lead Engineer",
    featured: true,
  },
  {
    title: "FAST",
    description:
      "Enterprise banking application delivering secure financial workflows with modern frontend architecture and high-performance user interfaces.",
    domain: "Banking",
    technologies: [
      "Angular",
      "JavaScript",
      "REST API",
      "Bootstrap",
    ],
    duration: "2019 - 2021",
    teamSize: "10 Engineers",
    role: "Senior Software Engineer",
    featured: true,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Featured Work
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Flagship Enterprise Projects
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            A selection of high-impact enterprise applications that demonstrate
            frontend architecture, scalability, engineering leadership, and
            cross-functional collaboration.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              domain={project.domain}
              technologies={project.technologies}
              duration={project.duration}
              role={project.role}
              client=""
              status=""
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}