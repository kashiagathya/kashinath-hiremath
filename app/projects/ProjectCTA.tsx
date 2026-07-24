"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
} from "lucide-react";
import Link from "next/link";
import ResumeDownloadButton from "@/app/resume/ResumeDownloadButton";

export default function ProjectCTA() {
  return (
    <section className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-3xl border bg-linear-to-r from-blue-600 via-indigo-600 to-purple-700 p-10 text-white shadow-xl"
      >
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Let&apos;s Build Something Great
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Looking for a Lead Frontend Engineer?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            I enjoy building scalable frontend platforms, leading engineering
            teams, improving developer experience, and delivering enterprise
            applications used by thousands of users worldwide.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105"
            >
              <Mail size={18} />
              Contact Me
              <ArrowRight size={18} />
            </Link>

            <ResumeDownloadButton
              label="Download Resume"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70"
            />
          </div>

          <div className="mt-10 grid gap-6 border-t border-white/20 pt-8 md:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold">12+</h3>
              <p className="mt-2 text-blue-100">Enterprise Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">3</h3>
              <p className="mt-2 text-blue-100">Business Domains</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">8+</h3>
              <p className="mt-2 text-blue-100">Years Leading Frontend</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}