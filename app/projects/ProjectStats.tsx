"use client";

import { motion } from "framer-motion";
import {
  FolderKanban,
  Building2,
  Users,
  CalendarRange,
  Cpu,
} from "lucide-react";

const stats = [
  {
    icon: FolderKanban,
    value: "12+",
    label: "Enterprise Projects",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Building2,
    value: "3",
    label: "Business Domains",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Users,
    value: "100K+",
    label: "Users Impacted",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: CalendarRange,
    value: "8+",
    label: "Years Experience",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Cpu,
    value: "20+",
    label: "Technologies",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
];

export default function ProjectStats() {
  return (
    <section className="mt-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.2 },
              }}
              className="rounded-3xl border bg-white p-6 shadow-sm transition-all hover:shadow-xl"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <Icon className={item.color} size={26} />
              </div>

              <h2 className="mt-6 text-4xl font-bold text-slate-900">
                {item.value}
              </h2>

              <p className="mt-2 text-sm text-slate-500">{item.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}