"use client";

import { motion } from "framer-motion";
import { FolderKanban, Car, Building2, Train } from "lucide-react";

export default function ProjectHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border bg-linear-to-r from-slate-50 via-white to-blue-50 p-10 shadow-sm">

      {/* Background Blur */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        className="relative z-10"
      >

        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

          <FolderKanban size={18} />

          Enterprise Portfolio

        </div>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">

          Enterprise Projects

        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">

          A collection of enterprise-grade applications delivered across
          Automotive, Banking and Railway domains using modern frontend
          architecture, scalable design systems and cloud-native technologies.

        </p>

        {/* Domain Pills */}

        <div className="mt-8 flex flex-wrap gap-4">

          <div className="flex items-center gap-2 rounded-full border bg-white px-5 py-3 shadow-sm">

            <Car className="text-blue-600" size={18} />

            <span className="font-medium">
              Automotive
            </span>

          </div>

          <div className="flex items-center gap-2 rounded-full border bg-white px-5 py-3 shadow-sm">

            <Building2 className="text-green-600" size={18} />

            <span className="font-medium">
              Banking
            </span>

          </div>

          <div className="flex items-center gap-2 rounded-full border bg-white px-5 py-3 shadow-sm">

            <Train className="text-orange-600" size={18} />

            <span className="font-medium">
              Railway
            </span>

          </div>

        </div>

      </motion.div>

    </section>
  );
}