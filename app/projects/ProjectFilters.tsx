"use client";

import { Search, Filter, X } from "lucide-react";


interface ProjectFiltersProps {
  searchTerm: string;

  selectedDomain: string;

  onSearchChange: (value: string) => void;

  onDomainChange: (value: string) => void;

  onClear: () => void;
}

const domains = [
  "All",
  "Automotive",
  "Banking",
  "Railway",
];

export default function ProjectFilters({
  searchTerm,
  selectedDomain,
  onSearchChange,
  onDomainChange,
  onClear,
}: ProjectFiltersProps) {
  const hasActiveFilters =
    searchTerm.trim() !== "" || selectedDomain !== "All";

  return (
    <section className="mt-16 rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-xl">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects, technologies, or keywords..."
            className="w-full rounded-2xl border border-slate-200 py-3 pl-12 pr-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            aria-label="Search projects"
          />
        </div>

        {/* Domain Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-slate-600">
            <Filter size={18} />
            <span className="text-sm font-medium">Domain</span>
          </div>

          {domains.map((domain) => {
            const isActive = selectedDomain === domain;

            return (
              <button
                key={domain}
                onClick={() => onDomainChange(domain)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-700"
                }`}
                aria-pressed={isActive}
              >
                {domain}
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

      {/* Active Filter Summary */}
      {hasActiveFilters && (
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t pt-5">
          <span className="text-sm font-medium text-slate-500">
            Active filters:
          </span>

          {searchTerm && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
              Search: &quot;{searchTerm}&quot;
            </span>
          )}

          {selectedDomain !== "All" && (
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
              {selectedDomain}
            </span>
          )}
        </div>
      )}
    </section>
  );
}