"use client";

import { useMemo, useState } from "react";

import portfolio from "@/lib/portfolio";
import ProjectHero from "./ProjectHero";
import FeaturedProjects from "./FeaturedProjects";
import ProjectCTA from "./ProjectCTA";
import ProjectFilters from "./ProjectFilters";
import ProjectGrid from "./ProjectGrid";
import ProjectStats from "./ProjectStats";
import ProjectTimeline from "./ProjectTimeline";

function formatDuration(from: string, to: string) {
  const fromDate = new Date(`${from}-01`);
  const toDate = to === "Present" ? null : new Date(`${to}-01`);

  const formatMonthYear = (date: Date) =>
    date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

  return `${formatMonthYear(fromDate)} - ${
    toDate ? formatMonthYear(toDate) : "Present"
  }`;
}


export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");

  const filteredProjects = useMemo(() => {
    return portfolio.projects.filter((project) => {
      const matchesDomain =
        selectedDomain === "All" ||
        project.domain === selectedDomain;

      const search = searchTerm.toLowerCase();

      const matchesSearch =
        project.name.toLowerCase().includes(search) ||
        project.summary.toLowerCase().includes(search) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(search)
        );

      return matchesDomain && matchesSearch;
    });
  }, [searchTerm, selectedDomain]);

  return (
    <main className="mx-auto max-w-7xl space-y-24 px-6 py-12">

      <ProjectHero />

      <ProjectStats />

      <FeaturedProjects />

      <ProjectFilters
        searchTerm={searchTerm}
        selectedDomain={selectedDomain}
        onSearchChange={setSearchTerm}
        onDomainChange={setSelectedDomain}
        onClear={() => {
          setSearchTerm("");
          setSelectedDomain("All");
        }}
      />

      <ProjectGrid projects={filteredProjects.map(project => ({
        title: project.name,
        description: project.summary,
        client: project.client,
        domain: project.domain,
        technologies: project.technologies,
        duration: formatDuration(
          project.duration.from,
          project.duration.to
        ),
        role: project.role,
        status: project.status,
      }))} />

      <ProjectTimeline />

      <ProjectCTA />

    </main>
  );
}