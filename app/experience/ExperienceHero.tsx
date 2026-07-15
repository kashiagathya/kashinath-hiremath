"use client";

import portfolio from "@/lib/portfolio";
import { Briefcase, Calendar, Building2 } from "lucide-react";

export default function ExperienceHero() {
  const role = portfolio.personal.currentRole;

  return (
    <section className="rounded-3xl bg-linear-to-r from-blue-600 to-indigo-700 p-10 text-white shadow-lg">

      <div className="flex flex-col md:flex-row md:justify-between md:items-center">

        <div>

          <p className="uppercase tracking-widest text-blue-100">
            Professional Journey
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {role.designation}
          </h1>

          <p className="mt-4 max-w-3xl text-blue-100 leading-8">
            Designing scalable enterprise applications, leading engineering
            teams and building modern cloud-native platforms.
          </p>

        </div>

        <div className="mt-8 md:mt-0 space-y-3">

          <div className="flex items-center gap-3">
            <Building2 size={20}/>
            {role.company}
          </div>

          <div className="flex items-center gap-3">
            <Briefcase size={20}/>
            {role.employmentType}
          </div>

          <div className="flex items-center gap-3">
            <Calendar size={20}/>
            {role.startDate}
          </div>

        </div>

      </div>

    </section>
  );
}