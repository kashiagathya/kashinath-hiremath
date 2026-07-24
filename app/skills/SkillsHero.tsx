"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cloud, Cpu, LayoutTemplate } from "lucide-react";

import { SkillCategory } from "./SkillsGrid";

interface SkillsHeroProps {
  categories: SkillCategory[];
  totalSkills: number;
}

const spotlightAreas = [
  {
    label: "Frontend Systems",
    icon: LayoutTemplate,
    accent: "text-blue-600",
  },
  {
    label: "Cloud Platforms",
    icon: Cloud,
    accent: "text-emerald-600",
  },
  {
    label: "AI Workflows",
    icon: Cpu,
    accent: "text-amber-600",
  },
];

export default function SkillsHero({ categories, totalSkills }: SkillsHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border bg-linear-to-r from-slate-50 via-white to-cyan-50 p-10 shadow-sm">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />
      <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-800">
          <BrainCircuit size={18} />
          Engineering Skill Set
        </div>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
          Skills Across Frontend, Cloud, AI, and Architecture
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          A practical stack built through enterprise delivery: modern frontend
          frameworks, API integration, cloud deployment, developer tooling, and
          AI-assisted product engineering.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <div className="rounded-2xl border bg-white px-5 py-4 shadow-sm">
            <p className="text-sm text-slate-500">Categories</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">
              {categories.length}
            </p>
          </div>

          <div className="rounded-2xl border bg-white px-5 py-4 shadow-sm">
            <p className="text-sm text-slate-500">Skills Listed</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">
              {totalSkills}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {spotlightAreas.map(({ label, icon: Icon, accent }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border bg-white px-5 py-3 shadow-sm"
            >
              <Icon className={accent} size={18} />
              <span className="font-medium text-slate-800">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}