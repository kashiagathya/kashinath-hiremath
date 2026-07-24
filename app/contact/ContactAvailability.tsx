"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Briefcase, Clock3, Globe2 } from "lucide-react";

import portfolio from "@/lib/portfolio";

export default function ContactAvailability() {
  const { personal } = portfolio;

  const points = [
    {
      icon: BadgeCheck,
      title: "Open to New Discussions",
      description: "Architect-level roles, people manager roles, consulting, and product modernization leadership.",
    },
    {
      icon: Clock3,
      title: "Response Time",
      description: "Typically within 24 hours for serious opportunities.",
    },
    {
      icon: Globe2,
      title: "Work Model",
      description: "Remote, hybrid, and distributed international collaboration.",
    },
    {
      icon: Briefcase,
      title: "Current Position",
      description: `${personal.currentRole.designation} at ${personal.currentRole.company}`,
    },
  ];

  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-slate-900">Availability Snapshot</h2>
      <p className="mt-3 text-slate-600">
        Practical details for planning collaboration and engagement.
      </p>

      <div className="mt-8 space-y-4">
        {points.map((point, index) => {
          const Icon = point.icon;

          return (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-2xl bg-slate-50 p-5"
            >
              <div className="flex items-start gap-3">
                <span className="rounded-lg bg-white p-2 text-cyan-700 shadow-sm">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{point.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{point.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}