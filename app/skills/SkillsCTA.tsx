"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";

export default function SkillsCTA() {
  return (
    <section className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-3xl border bg-linear-to-r from-cyan-700 via-sky-700 to-emerald-700 p-10 text-white shadow-xl"
      >
        <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Delivery-Ready Skill Set
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Building products with strong frontend leadership
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cyan-50">
            I work across product architecture, frontend systems, cloud-backed
            delivery, and AI-assisted workflows to help teams ship reliable
            software faster.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-cyan-800 transition hover:scale-105"
            >
              <Mail size={18} />
              Contact Me
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Download size={18} />
              View Resume
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}