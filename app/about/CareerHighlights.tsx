"use client";

import portfolio from "@/lib/portfolio";
import {
  Briefcase,
  FolderGit2,
  Building2,
  Cpu,
} from "lucide-react";

export default function CareerHighlights() {

  const experienceYears = Math.floor(
    (new Date().getFullYear() - new Date(portfolio.personal.currentRole.startDate).getFullYear())
  );

  const stats = [
    {
      title: "Experience",
      value: `${experienceYears}+`,
      icon: Briefcase,
    },
    {
      title: "Projects",
      value: portfolio.stats.projectsDelivered,
      icon: FolderGit2,
    },
    {
      title: "Companies",
      value: portfolio.stats.companiesWorked,
      icon: Building2,
    },
    {
      title: "Technologies",
      value: portfolio.stats.technologiesKnown,
      icon: Cpu,
    },
  ];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold mb-8">
        Career Highlights
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl bg-slate-50 p-6 text-center transition hover:shadow-md"
            >
              <Icon
                size={32}
                className="mx-auto text-blue-600"
              />

              <h3 className="mt-4 text-3xl font-bold">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-500">
                {item.title}
              </p>
            </div>
          );
        })}

      </div>

    </section>
  );
}