"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Mail } from "lucide-react";

import portfolio from "@/lib/portfolio";

export default function ContactCTA() {
  const { personal } = portfolio;

  return (
    <section className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-3xl border bg-linear-to-r from-cyan-700 via-sky-700 to-blue-800 p-10 text-white shadow-xl"
      >
        <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Start the Conversation
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Ready to discuss your next engineering challenge?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cyan-50">
            Share role details, project scope, or technical challenges and we can
            quickly align on execution approach, architecture direction, and delivery.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${personal.contact.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-cyan-800 transition hover:scale-105"
            >
              <Mail size={18} />
              Send Email
              <ArrowRight size={18} />
            </a>

            <a
              href={`tel:${personal.contact.phone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <CalendarDays size={18} />
              Schedule a Call
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}