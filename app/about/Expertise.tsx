"use client";

import portfolio from "@/lib/portfolio";
import { Sparkles } from "lucide-react";

export default function Expertise() {

  const skills = [
    ...portfolio.skills.frontend.items,
    ...portfolio.skills.backend.items,
    ...portfolio.skills.cloud.items,
    ...portfolio.skills.ai.items,
  ];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex items-center gap-3">
        <Sparkles className="text-blue-600" />
        <h2 className="text-2xl font-bold">
          Core Expertise
        </h2>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700"
          >
            {skill}
          </span>
        ))}

      </div>

    </section>
  );
}