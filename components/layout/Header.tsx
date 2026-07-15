"use client";

import portfolio from "@/lib/portfolio";

import {
  Bell,
  Search,
  Download,
} from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Welcome 👋
        </h1>

        <p className="text-sm text-slate-500">
          {portfolio.personal.tagline}
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="rounded-xl border p-3 hover:bg-slate-100">
          <Search size={18} />
        </button>

        <button className="rounded-xl border p-3 hover:bg-slate-100">
          <Bell size={18} />
        </button>

        <a
          href={portfolio.personal.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border px-4 py-3 hover:bg-slate-100"
        >
          GitHub
        </a>

        <a
          href={portfolio.personal.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border px-4 py-3 hover:bg-slate-100"
        >
          LinkedIn
        </a>

        <a href={portfolio.personal.resume.file}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          <Download size={18} />
          Resume
        </a>
      </div>
    </header>
  );
}