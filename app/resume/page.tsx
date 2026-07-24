import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import portfolio from "@/lib/portfolio";
import ResumeDownloadButton, { ResumeDocumentData } from "./ResumeDownloadButton";

function formatDate(value: string) {
  if (value === "Present") {
    return value;
  }

  if (/^\d{4}$/.test(value)) {
    return value;
  }

  return new Date(`${value}-01`).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function formatDuration(from: string, to: string) {
  return `${formatDate(from)} - ${formatDate(to)}`;
}

export default function ResumePage() {
  const { personal, stats, experience, projects, skills, educations, certifications, achievements } =
    portfolio;

  const skillCategories = Object.values(skills).map((category) => ({
    title: category.title,
    items: category.items,
  }));

  const featuredProjects = projects.slice(0, 4).map((project) => ({
    title: project.name,
    client: project.client,
    summary: project.summary,
    technologies: project.technologies,
  }));

  const resumeData: ResumeDocumentData = {
    personal: {
      name: personal.name,
      photo: personal.photo,
      tagline: personal.tagline,
      bio: personal.bio,
      email: personal.contact.email,
      phone: personal.contact.phone,
      location: personal.contact.location,
      linkedin: personal.social.linkedin,
      github: personal.social.github,
      portfolio: personal.social.portfolio,
    },
    stats: {
      experienceYears: stats.experienceYears,
      projectsDelivered: stats.projectsDelivered,
      technologiesKnown: stats.technologiesKnown,
      certifications: stats.certifications,
    },
    achievements: achievements.map((item) => ({
      title: item.title,
      description: item.description,
    })),
    experience: experience.map((item) => ({
      company: item.company,
      designation: item.designation,
      duration: formatDuration(item.duration.from, item.duration.to),
      location: item.location,
      summary: item.summary,
      responsibilities: item.responsibilities,
      technologies: item.technologies,
    })),
    projects: featuredProjects,
    skills: skillCategories,
    education: educations.map((item) => ({
      degree: item.degree,
      specialization: item.specialization,
      institution: item.institution,
      location: item.location,
      duration: formatDuration(item.duration.from, item.duration.to),
      description: item.description,
    })),
    certifications: certifications.map((item) => ({
      name: item.name,
      issuer: item.issuer,
      year: item.year,
    })),
  };

  return (
    <main className="mx-auto max-w-7xl space-y-12 px-6 py-12">
      <section className="relative overflow-hidden rounded-3xl border bg-linear-to-r from-slate-950 via-slate-900 to-cyan-950 p-10 text-white shadow-xl">
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-blue-400/15 blur-3xl" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              <Sparkles size={16} />
              Resume Overview
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight">
              {personal.name}
            </h1>

            <p className="mt-4 text-2xl text-cyan-200">
              {personal.tagline}
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {personal.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
              <a
                href={`mailto:${personal.contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:bg-white/10"
              >
                <Mail size={16} />
                {personal.contact.email}
              </a>
              <a
                href={`tel:${personal.contact.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 underline underline-offset-4 decoration-2 decoration-cyan-200 transition hover:bg-white/10"
              >
                <Phone size={16} />
                {personal.contact.phone}
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                <MapPin size={16} />
                {personal.contact.location}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                <Mail size={18} />
                Contact Me
              </Link>

              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              <div className="relative mx-auto aspect-4/5 w-full max-w-55 overflow-hidden rounded-2xl border border-white/20">
                <Image
                  src={personal.photo}
                  alt={personal.name}
                  fill
                  className="object-cover"
                  sizes="220px"
                  priority
                />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                Current Role
              </p>
              <h2 className="mt-3 text-2xl font-bold">
                {personal.currentRole.designation}
              </h2>
              <p className="mt-2 text-slate-300">
                {personal.currentRole.company}
              </p>
              <p className="mt-1 text-sm text-slate-400">
                {personal.currentRole.department}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                Resume Updated
              </p>
              <h2 className="mt-3 text-2xl font-bold">
                {personal.resume.lastUpdated}
              </h2>
              <p className="mt-2 text-slate-300">
                Data-driven resume generated from portfolio content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            label: "Years Experience",
            value: `${stats.experienceYears}+`,
          },
          {
            label: "Projects Delivered",
            value: `${stats.projectsDelivered}+`,
          },
          {
            label: "Technologies",
            value: `${stats.technologiesKnown}+`,
          },
          {
            label: "Certifications",
            value: `${stats.certifications}`,
          },
        ].map((stat) => (
          <article
            key={stat.label}
            className="rounded-3xl border bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-slate-500">{stat.label}</p>
            <h2 className="mt-3 text-5xl font-bold text-slate-900">
              {stat.value}
            </h2>
          </article>
        ))}
      </section>

      <section className="grid gap-8 xl:grid-cols-[1.35fr_0.65fr]">
        <article className="rounded-3xl border bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <Briefcase className="text-cyan-700" size={20} />
            <h2 className="text-3xl font-bold text-slate-900">Professional Experience</h2>
          </div>

          <div className="mt-8 space-y-8">
            {experience.map((item) => (
              <div key={item.id} className="border-l-2 border-cyan-200 pl-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {item.designation}
                    </h3>
                    <p className="mt-1 text-lg text-cyan-700">{item.company}</p>
                  </div>

                  <div className="text-sm text-slate-500 md:text-right">
                    <p>{formatDuration(item.duration.from, item.duration.to)}</p>
                    <p>{item.location}</p>
                  </div>
                </div>

                <p className="mt-4 leading-7 text-slate-600">{item.summary}</p>

                <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <div className="space-y-8">
          <article className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900">Career Highlights</h2>
            <div className="mt-6 space-y-5">
              {achievements.map((item) => (
                <div key={item.id} className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-cyan-700" size={20} />
              <h2 className="text-3xl font-bold text-slate-900">Education</h2>
            </div>

            <div className="mt-6 space-y-6">
              {educations.map((item) => (
                <div key={item.id}>
                  <h3 className="text-xl font-semibold text-slate-900">{item.degree}</h3>
                  <p className="mt-1 text-cyan-700">{item.specialization}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.institution} • {item.location}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {formatDuration(item.duration.from, item.duration.to)}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="grid gap-8 xl:grid-cols-[1fr_1fr]">
        <article className="rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">Technical Skills</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {skillCategories.map((category) => (
              <section key={category.title}>
                <h3 className="text-lg font-semibold text-cyan-700">{category.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>

        <div className="space-y-8">
          <article className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900">Selected Projects</h2>
            <div className="mt-6 space-y-5">
              {featuredProjects.map((project) => (
                <div key={project.title} className="rounded-2xl border bg-slate-50 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-slate-900">{project.title}</h3>
                      <p className="mt-1 text-sm text-cyan-700">{project.client}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900">Certifications</h2>
            <div className="mt-6 space-y-4">
              {certifications.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-4 rounded-2xl bg-slate-50 p-5"
                >
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {item.issuer || "Independent Learning"}
                    </p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                    {item.year || "Ongoing"}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="rounded-3xl border bg-linear-to-r from-cyan-700 via-sky-700 to-blue-800 p-10 text-white shadow-xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-cyan-50">
              Export Resume
            </span>
            <h2 className="mt-5 text-4xl font-bold">
              Download this same resume data as a PDF
            </h2>
            <p className="mt-4 text-lg leading-8 text-cyan-50/90">
              This download is generated from the same portfolio content shown on
              this page, so the saved PDF stays aligned with the website resume.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <ResumeDownloadButton resumeData={resumeData} />
          </div>
        </div>
      </section>
    </main>
  );
}