"use client";

import { Filter, Search, X } from "lucide-react";

import { SkillCategory } from "./SkillsGrid";

interface SkillsFiltersProps {
  categories: SkillCategory[];
  searchTerm: string;
  selectedCategory: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onClear: () => void;
}

export default function SkillsFilters({
  categories,
  searchTerm,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
  onClear,
}: SkillsFiltersProps) {
  const hasActiveFilters =
    searchTerm.trim() !== "" || selectedCategory !== "All";

  return (
    <section className="mt-16 rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative max-w-xl flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search skills, frameworks, or toolsets..."
            className="w-full rounded-2xl border border-slate-200 py-3 pl-12 pr-4 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
            aria-label="Search skills"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-slate-600">
            <Filter size={18} />
            <span className="text-sm font-medium">Category</span>
          </div>

          {[
            { key: "All", title: "All" },
            ...categories,
          ].map((category) => {
            const isActive = selectedCategory === category.key;

            return (
              <button
                key={category.key}
                onClick={() => onCategoryChange(category.key)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-cyan-600 text-white shadow-md"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-cyan-300 hover:text-cyan-700"
                }`}
                aria-pressed={isActive}
              >
                {category.title}
              </button>
            );
          })}

          {hasActiveFilters && (
            <button
              onClick={onClear}
              className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100"
            >
              <X size={16} />
              Clear
            </button>
          )}
        </div>
      </div>

      {hasActiveFilters && (
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t pt-5">
          <span className="text-sm font-medium text-slate-500">Active filters:</span>

          {searchTerm && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
              Search: &quot;{searchTerm}&quot;
            </span>
          )}

          {selectedCategory !== "All" && (
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
              {
                categories.find((category) => category.key === selectedCategory)
                  ?.title
              }
            </span>
          )}
        </div>
      )}
    </section>
  );
}