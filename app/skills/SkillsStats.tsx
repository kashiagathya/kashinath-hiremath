"use client";

import { motion } from "framer-motion";

import { SkillCategory } from "./SkillsGrid";

interface SkillsStatsProps {
  categories: SkillCategory[];
  totalSkills: number;
}

export default function SkillsStats({ categories, totalSkills }: SkillsStatsProps) {
  const frontendCount =
    categories.find((category) => category.key === "frontend")?.items.length ?? 0;
  const aiCount =
    categories.find((category) => category.key === "ai")?.items.length ?? 0;
  const cloudCount =
    categories.find((category) => category.key === "cloud")?.items.length ?? 0;
  const architectureCount =
    categories.find((category) => category.key === "architecture")?.items.length ?? 0;

  const stats = [
    {
      label: "Total Skills",
      value: totalSkills,
      description: "Tools, frameworks, and engineering capabilities.",
    },
    {
      label: "Frontend Stack",
      value: frontendCount,
      description: "React, Angular, Next.js, and UI engineering.",
    },
    {
      label: "Cloud + AI",
      value: aiCount + cloudCount,
      description: "Delivery skills spanning cloud platforms and AI tooling.",
    },
    {
      label: "Architecture",
      value: architectureCount,
      description: "System design, performance, and reusable platforms.",
    },
  ];

  return (
    <section className="mt-10">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-3xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm text-slate-500">{stat.label}</p>
            <h2 className="mt-3 text-5xl font-bold text-slate-900">{stat.value}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}