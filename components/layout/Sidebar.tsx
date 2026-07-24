"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  BrainCircuit,
  FileText,
  Mail,
  Menu,
  ChevronLeft,
  LucideIcon,
} from "lucide-react";

import portfolio from "@/lib/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Home,
  User,
  Briefcase,
  FolderGit2,
  BrainCircuit,
  FileText,
  Mail,
};

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`sticky top-0 h-screen bg-slate-900 text-white transition-all duration-300 ${
        collapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-700 p-5">
        {!collapsed && (
          <div>
            <h2 className="text-lg font-bold">
              {portfolio.personal.name}
            </h2>

            <p className="text-xs text-slate-400">
              {portfolio.personal.currentRole.designation}
            </p>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-lg p-2 hover:bg-slate-800"
        >
          {collapsed ? (
            <Menu size={20} />
          ) : (
            <ChevronLeft size={20} />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex flex-col gap-2 px-3">
        {portfolio.sidebar.menu.map((item, index) => {
          const Icon = iconMap[item.icon];
          const active = pathname === item.route;

          return (
            <Link
              key={index}
              href={item.route}
              className={`flex items-center rounded-xl px-4 py-3 transition-all duration-300 ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} />

              {!collapsed && (
                <span className="ml-4 font-medium">
                  {item.title}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="absolute bottom-6 left-4 right-4 rounded-xl border border-slate-700 bg-slate-800 p-4">
          <p className="text-xs text-slate-400">
            {portfolio.settings.websiteName}
          </p>

          <p className="mt-1 text-sm font-semibold">
            Version {portfolio.settings.version}
          </p>
        </div>
      )}
    </aside>
  );
}