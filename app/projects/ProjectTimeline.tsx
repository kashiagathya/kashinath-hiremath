"use client";

import { motion } from "framer-motion";
import {
  Car,
  Building2,
  Train,
  Calendar,
} from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  domain: "Automotive" | "Banking" | "Railway";
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2017 - 2019",
    title: "FAST",
    company: "Morgan Stanley",
    domain: "Banking",
    description:
      "Developed secure enterprise banking applications with Angular and JavaScript, focusing on performance and usability.",
  },
  {
    year: "2019 - 2022",
    title: "FRED",
    company: "CN Rail",
    domain: "Railway",
    description:
      "Built enterprise railway management applications for scheduling, reporting and operational workflows.",
  },
  {
    year: "2022 - Present",
    title: "Web Widgets & Localization",
    company: "Stellantis",
    domain: "Automotive",
    description:
      "Leading frontend architecture for connected vehicle platforms, reusable widgets and multilingual applications.",
  },
];

const icons = {
  Automotive: Car,
  Banking: Building2,
  Railway: Train,
};

const colors = {
  Automotive: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    line: "bg-blue-500",
  },
  Banking: {
    bg: "bg-green-100",
    text: "text-green-700",
    line: "bg-green-500",
  },
  Railway: {
    bg: "bg-orange-100",
    text: "text-orange-700",
    line: "bg-orange-500",
  },
};

export default function ProjectTimeline() {
  return (
    <section className="mt-24">
      <div className="text-center">
        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold">
          Career Journey
        </span>

        <h2 className="mt-5 text-4xl font-bold text-slate-900">
          Project Timeline
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          Enterprise applications delivered across multiple industries while
          growing from software engineer to technical leader.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-5xl">
        <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-slate-200" />

        <div className="space-y-12">
          {timeline.map((item, index) => {
            const Icon = icons[item.domain];
            const color = colors[item.domain];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.45,
                }}
                className="relative flex gap-8"
              >
                <div
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full ${color.bg}`}
                >
                  <Icon className={color.text} size={22} />
                </div>

                <div className="flex-1 rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-slate-500">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm">
                      <Calendar size={16} />
                      {item.year}
                    </div>
                  </div>

                  <span
                    className={`mt-5 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${color.bg} ${color.text}`}
                  >
                    {item.domain}
                  </span>

                  <p className="mt-5 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}