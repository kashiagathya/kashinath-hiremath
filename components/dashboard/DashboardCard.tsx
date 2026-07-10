"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface DashboardCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function DashboardCard({
  title,
  description,
  href,
  icon,
}: DashboardCardProps) {
  return (
    <Link
      href={href || "/"}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
    >
      <div className="flex items-start justify-between">
        <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
          {icon}
        </div>

        <ArrowUpRight
          size={20}
          className="text-slate-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </Link>
  );
}