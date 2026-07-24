"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers3 } from "lucide-react";

export interface SkillCategory {
  key: string;
  title: string;
  items: string[];
}

interface SkillsGridProps {
  categories: SkillCategory[];
}

export default function SkillsGrid({ categories }: SkillsGridProps) {
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
            Technical Breadth
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Core Engineering Capabilities
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Frameworks, platforms, and delivery practices used to build
            scalable products, guide teams, and ship production software.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <motion.article
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group rounded-3xl border bg-white p-7 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
                    <Layers3 size={14} />
                    {category.items.length} skills
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <ArrowRight className="text-slate-300 transition group-hover:text-cyan-600" size={20} />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {categories.length === 0 && (
          <div className="mt-14 rounded-3xl border border-dashed bg-slate-50 px-6 py-12 text-center">
            <h3 className="text-2xl font-semibold text-slate-900">No matching skills found</h3>
            <p className="mt-3 text-slate-600">
              Try a broader search term or clear the current category filter.
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}