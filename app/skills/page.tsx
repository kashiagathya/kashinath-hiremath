"use client";

import { useMemo, useState } from "react";

import portfolio from "@/lib/portfolio";
import SkillsCTA from "./SkillsCTA";
import SkillsFilters from "./SkillsFilters";
import SkillsGrid, { SkillCategory } from "./SkillsGrid";
import SkillsHero from "./SkillsHero";
import SkillsStats from "./SkillsStats";

function toTitleCase(value: string) {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase())
    .trim();
}

export default function SkillsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo<SkillCategory[]>(() => {
    return Object.entries(portfolio.skills).map(([key, category]) => ({
      key,
      title: category.title || toTitleCase(key),
      items: category.items,
    }));
  }, []);

  const filteredCategories = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return categories
      .filter((category) => {
        if (selectedCategory === "All") {
          return true;
        }

        return category.key === selectedCategory;
      })
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => {
          if (search === "") {
            return true;
          }

          return (
            item.toLowerCase().includes(search) ||
            category.title.toLowerCase().includes(search)
          );
        }),
      }))
      .filter((category) => category.items.length > 0);
  }, [categories, searchTerm, selectedCategory]);

  const totalSkills = useMemo(
    () => categories.reduce((count, category) => count + category.items.length, 0),
    [categories]
  );

  return (
    <main className="mx-auto max-w-7xl space-y-24 px-6 py-12">
      <SkillsHero categories={categories} totalSkills={totalSkills} />

      <SkillsStats categories={categories} totalSkills={totalSkills} />

      <SkillsFilters
        categories={categories}
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        onSearchChange={setSearchTerm}
        onCategoryChange={setSelectedCategory}
        onClear={() => {
          setSearchTerm("");
          setSelectedCategory("All");
        }}
      />

      <SkillsGrid categories={filteredCategories} />

      <SkillsCTA />
    </main>
  );
}