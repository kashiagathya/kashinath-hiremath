"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, Sparkles } from "lucide-react";

import portfolio from "@/lib/portfolio";

export default function ContactHero() {
  const { personal } = portfolio;

  return (
    <section className="relative overflow-hidden rounded-3xl border bg-linear-to-r from-slate-50 via-white to-cyan-50 p-10 shadow-sm">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />
      <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-800">
          <Sparkles size={16} />
          Let&apos;s Connect
        </span>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
          Contact for Product and Engineering Opportunities
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          {personal.name} is open to discussing lead frontend roles, technical
          consulting, and enterprise product initiatives across automotive,
          banking, and transportation domains.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${personal.contact.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
          >
            <Mail size={18} />
            Email Me
          </a>

          <a
            href={`tel:${personal.contact.phone}`}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-cyan-300 hover:text-cyan-700"
          >
            <Phone size={18} />
            Call Me
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm text-slate-700">
            <MessageCircle size={16} className="text-cyan-700" />
            Usually responds within 24 hours
          </span>
        </div>
      </motion.div>
    </section>
  );
}