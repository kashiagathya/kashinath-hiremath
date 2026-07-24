"use client";

import portfolio from "@/lib/portfolio";
import {
  Briefcase,
  Building2,
  FolderGit2,
  BrainCircuit
} from "lucide-react";

export default function ExperienceStats() {

  const stats = [
    {
      title: "Years",
      value: "5+",
      icon: Briefcase,
    },
    {
      title: "Companies",
      value: portfolio.stats.companiesWorked,
      icon: Building2,
    },
    {
      title: "Projects",
      value: portfolio.stats.projectsDelivered,
      icon: FolderGit2,
    },
    {
      title: "Technologies",
      value: portfolio.stats.technologiesKnown,
      icon: BrainCircuit,
    },
  ];

  return (

    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="rounded-3xl bg-white p-8 shadow-sm border"
          >

            <Icon className="text-blue-600"/>

            <h2 className="mt-5 text-4xl font-bold">
              {item.value}
            </h2>

            <p className="text-slate-500 mt-2">
              {item.title}
            </p>

          </div>

        );

      })}

    </section>

  );
}