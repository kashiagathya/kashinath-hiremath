"use client";

import portfolio from "@/lib/portfolio";
import { User } from "lucide-react";

export default function ProfessionalSummary() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex items-center gap-3">
        <User className="text-blue-600" />
        <h2 className="text-2xl font-bold">
          Professional Summary
        </h2>
      </div>

      <p className="mt-6 leading-8 text-slate-600">
        {portfolio.personal.bio}
      </p>

    </section>
  );
}