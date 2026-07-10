"use client";

import Image from "next/image";
import Link from "next/link";
import portfolio from "@/lib/portfolio";
import {
  Download,
  Mail,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const profile = portfolio.personal;

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 p-10 text-white shadow-xl">

      {/* Background */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-2">

        {/* Left */}

        <div className="flex flex-col justify-center">

          <span className="mb-4 flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">

            <Sparkles size={16} />

            Available for Opportunities

          </span>

          <h1 className="text-5xl font-bold leading-tight">

            Hi,

            <br />

            I'm {profile.name}

          </h1>

          <h2 className="mt-4 text-2xl font-medium text-blue-300">

            {profile.title}

          </h2>

          <p className="mt-6 max-w-xl text-lg text-slate-300">

            Building scalable enterprise software, AI-powered
            applications and modern automotive platforms with over
            10 years of experience.

          </p>

          <div className="mt-8 flex gap-4">

            <Link
              href="/resume"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
            >
              <Download size={18} />

              Resume
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 hover:bg-white/10"
            >
              <Mail size={18} />

              Contact
            </Link>

          </div>

          <div className="mt-10 flex gap-10">

            <div>
              <h2 className="text-4xl font-bold">10+</h2>
              <p className="text-slate-300">Years Experience</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">20+</h2>
              <p className="text-slate-300">Projects</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">30+</h2>
              <p className="text-slate-300">Technologies</p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-xl">

            <Image
              src="/images/profile.jpg"
              alt={profile.name}
              width={330}
              height={420}
              priority
              className="rounded-2xl object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}