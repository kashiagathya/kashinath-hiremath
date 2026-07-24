"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, ExternalLink, Globe } from "lucide-react";

import portfolio from "@/lib/portfolio";

export default function ContactSocial() {
  const { social } = portfolio.personal;

  const profiles = [
    {
      title: "LinkedIn",
      value: social.linkedin,
      icon: Briefcase,
      accent: "bg-blue-100 text-blue-700",
      description: "Professional profile and leadership highlights.",
    },
    {
      title: "GitHub",
      value: social.github,
      icon: Code2,
      accent: "bg-slate-100 text-slate-700",
      description: "Code samples, side projects, and engineering experiments.",
    },
    {
      title: "Portfolio",
      value: social.portfolio,
      icon: Globe,
      accent: "bg-cyan-100 text-cyan-700",
      description: "End-to-end work story with projects and experience.",
    },
  ];

  return (
    <section className="mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <div className="text-center">
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            Professional Profiles
          </span>
          <h2 className="mt-5 text-4xl font-bold text-slate-900">Connect Beyond Email</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Explore detailed experience, open-source work, and project showcases
            through the profiles below.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;

            return (
              <motion.a
                key={profile.title}
                href={profile.value}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group rounded-3xl border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className={`inline-flex rounded-xl p-3 ${profile.accent}`}>
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">{profile.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{profile.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 group-hover:text-cyan-800">
                  Open Profile
                  <ExternalLink size={15} />
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}