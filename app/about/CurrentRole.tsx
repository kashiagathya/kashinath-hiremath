"use client";

import portfolio from "@/lib/portfolio";

export default function CurrentRole() {
  const role = portfolio.personal.currentRole;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold mb-6">
        Current Role
      </h2>

      <div className="space-y-5">

        <div>
          <p className="text-sm text-slate-500">Company</p>
          <p className="font-semibold">{role.company}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Designation</p>
          <p className="font-semibold">{role.designation}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Location</p>
          <p className="font-semibold">{role.location}</p>
        </div>



      </div>

    </section>
  );
}