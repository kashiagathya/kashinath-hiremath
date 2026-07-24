"use client";

import { motion } from "framer-motion";

import portfolio from "@/lib/portfolio";

export default function ContactStats() {
  const { stats } = portfolio;

  const tiles = [
    {
      label: "Years Experience",
      value: `${stats.experienceYears}+`,
      description: "Enterprise frontend architecture and product delivery.",
    },
    {
      label: "Projects Delivered",
      value: `${stats.projectsDelivered}+`,
      description: "Applications shipped across multiple industries.",
    },
    {
      label: "Technologies",
      value: `${stats.technologiesKnown}+`,
      description: "Modern web, cloud, API, and AI engineering stack.",
    },
    {
      label: "Certifications",
      value: `${stats.certifications}`,
      description: "Continuous upskilling with industry credentials.",
    },
  ];

  return (
    <section className="mt-10">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {tiles.map((tile, index) => (
          <motion.article
            key={tile.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-3xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm text-slate-500">{tile.label}</p>
            <h2 className="mt-3 text-5xl font-bold text-slate-900">{tile.value}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{tile.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}