"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import portfolio from "@/lib/portfolio";

export interface ResumeDocumentData {
  personal: {
    name: string;
    photo: string;
    tagline: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
  stats: {
    experienceYears: number;
    projectsDelivered: number;
    technologiesKnown: number;
    certifications: number;
  };
  achievements: Array<{
    title: string;
    description: string;
  }>;
  experience: Array<{
    company: string;
    designation: string;
    duration: string;
    location: string;
    summary: string;
    responsibilities: string[];
    technologies: string[];
  }>;
  projects: Array<{
    title: string;
    client: string;
    summary: string;
    technologies: string[];
  }>;
  skills: Array<{
    title: string;
    items: string[];
  }>;
  education: Array<{
    degree: string;
    specialization: string;
    institution: string;
    location: string;
    duration: string;
    description: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    year: string;
  }>;
}

interface ResumeDownloadButtonProps {
  resumeData?: ResumeDocumentData;
  className?: string;
  label?: string;
  loadingLabel?: string;
}

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

export function buildResumeDocumentData(): ResumeDocumentData {
  const {
    personal,
    stats,
    experience,
    projects,
    skills,
    educations,
    certifications,
    achievements,
  } = portfolio;

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

  return {
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
}

export default function ResumeDownloadButton({
  resumeData,
  className,
  label = "Download Resume PDF",
  loadingLabel = "Generating PDF...",
}: ResumeDownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const documentData = resumeData ?? buildResumeDocumentData();

  const handleDownload = async () => {
    setIsGenerating(true);

    try {
      const { jsPDF } = await import("jspdf");
      const document = new jsPDF({
        unit: "pt",
        format: "a4",
      });

      const pageWidth = document.internal.pageSize.getWidth();
      const pageHeight = document.internal.pageSize.getHeight();
      const margin = 48;
      const lineHeight = 16;
      const sectionGap = 14;
      const maxWidth = pageWidth - margin * 2;
      let cursorY = margin;

      const imageToDataUrl = async (source: string) => {
        const response = await fetch(source);
        const blob = await response.blob();

        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(String(reader.result));
          reader.onerror = () => reject(new Error("Unable to convert image to data URL"));
          reader.readAsDataURL(blob);
        });
      };

      const ensureSpace = (requiredHeight = lineHeight) => {
        if (cursorY + requiredHeight <= pageHeight - margin) {
          return;
        }

        document.addPage();
        cursorY = margin;
      };

      const writeTextBlock = (
        text: string,
        options?: {
          fontSize?: number;
          color?: [number, number, number];
          indent?: number;
          gapAfter?: number;
        }
      ) => {
        const fontSize = options?.fontSize ?? 11;
        const color = options?.color ?? [51, 65, 85];
        const indent = options?.indent ?? 0;
        const gapAfter = options?.gapAfter ?? 6;
        const lines = document.splitTextToSize(text, maxWidth - indent);
        const blockHeight = lines.length * (fontSize + 3);

        ensureSpace(blockHeight + gapAfter);

        document.setFontSize(fontSize);
        document.setTextColor(...color);
        document.text(lines, margin + indent, cursorY);
        cursorY += blockHeight + gapAfter;
      };

      const writeSectionTitle = (title: string) => {
        ensureSpace(24);
        document.setFont("helvetica", "bold");
        document.setFontSize(15);
        document.setTextColor(8, 145, 178);
        document.text(title, margin, cursorY);
        cursorY += 18;

        document.setDrawColor(186, 230, 253);
        document.line(margin, cursorY, pageWidth - margin, cursorY);
        cursorY += sectionGap;
        document.setFont("helvetica", "normal");
      };

      const photoSize = {
        width: 88,
        height: 110,
      };
      let headerTextWidth = maxWidth;
      const imageX = pageWidth - margin - photoSize.width;
      const imageY = margin - 2;

      try {
        const photoUrl = new URL(documentData.personal.photo, window.location.origin).toString();
        const photoData = await imageToDataUrl(photoUrl);
        const imageFormat = photoData.includes("image/png") ? "PNG" : "JPEG";

        document.setDrawColor(148, 163, 184);
        document.roundedRect(
          imageX - 2,
          imageY - 2,
          photoSize.width + 4,
          photoSize.height + 4,
          10,
          10
        );
        document.addImage(
          photoData,
          imageFormat,
          imageX,
          imageY,
          photoSize.width,
          photoSize.height,
          undefined,
          "FAST"
        );
        headerTextWidth = maxWidth - photoSize.width - 18;
      } catch {
        headerTextWidth = maxWidth;
      }

      document.setFont("helvetica", "bold");
      document.setFontSize(24);
      document.setTextColor(15, 23, 42);
      document.text(documentData.personal.name, margin, cursorY);
      cursorY += 22;

      document.setFontSize(14);
      document.setTextColor(8, 145, 178);
      document.text(documentData.personal.tagline, margin, cursorY);
      cursorY += 22;

      document.setFont("helvetica", "normal");
      document.setFontSize(10);
      document.setTextColor(71, 85, 105);
      [
        `Email: ${documentData.personal.email}`,
        `Phone: ${documentData.personal.phone}`,
        `Location: ${documentData.personal.location}`,
        `LinkedIn: ${documentData.personal.linkedin}`,
        `GitHub: ${documentData.personal.github}`,
        `Portfolio: ${documentData.personal.portfolio}`,
      ].forEach((line) => {
        const wrapped = document.splitTextToSize(line, headerTextWidth);
        document.text(wrapped, margin, cursorY);
        cursorY += wrapped.length * 12;
      });

      cursorY = Math.max(cursorY + 10, imageY + photoSize.height + 16);

      writeSectionTitle("Professional Summary");
      writeTextBlock(documentData.personal.bio, { fontSize: 11, gapAfter: 10 });
      writeTextBlock(
        `${documentData.stats.experienceYears}+ years experience | ${documentData.stats.projectsDelivered}+ projects | ${documentData.stats.technologiesKnown}+ technologies | ${documentData.stats.certifications} certifications`,
        { color: [15, 23, 42], gapAfter: 2 }
      );

      writeSectionTitle("Career Highlights");
      documentData.achievements.forEach((achievement) => {
        writeTextBlock(`• ${achievement.title}: ${achievement.description}`, {
          gapAfter: 4,
        });
      });

      writeSectionTitle("Professional Experience");
      documentData.experience.forEach((item) => {
        document.setFont("helvetica", "bold");
        writeTextBlock(`${item.designation} | ${item.company}`, {
          fontSize: 12,
          color: [15, 23, 42],
          gapAfter: 2,
        });
        document.setFont("helvetica", "normal");
        writeTextBlock(`${item.duration} | ${item.location}`, {
          fontSize: 10,
          color: [100, 116, 139],
          gapAfter: 4,
        });
        writeTextBlock(item.summary, { gapAfter: 4 });
        item.responsibilities.forEach((responsibility) => {
          writeTextBlock(`• ${responsibility}`, { indent: 10, gapAfter: 2 });
        });
        writeTextBlock(`Technologies: ${item.technologies.join(", ")}`, {
          fontSize: 10,
          color: [71, 85, 105],
          gapAfter: 10,
        });
      });

      writeSectionTitle("Selected Projects");
      documentData.projects.forEach((project) => {
        document.setFont("helvetica", "bold");
        writeTextBlock(`${project.title} | ${project.client}`, {
          fontSize: 12,
          color: [15, 23, 42],
          gapAfter: 2,
        });
        document.setFont("helvetica", "normal");
        writeTextBlock(project.summary, { gapAfter: 3 });
        writeTextBlock(`Technologies: ${project.technologies.join(", ")}`, {
          fontSize: 10,
          color: [71, 85, 105],
          gapAfter: 8,
        });
      });

      writeSectionTitle("Technical Skills");
      documentData.skills.forEach((category) => {
        document.setFont("helvetica", "bold");
        writeTextBlock(category.title, {
          fontSize: 12,
          color: [15, 23, 42],
          gapAfter: 2,
        });
        document.setFont("helvetica", "normal");
        writeTextBlock(category.items.join(", "), {
          gapAfter: 6,
        });
      });

      writeSectionTitle("Education");
      documentData.education.forEach((item) => {
        document.setFont("helvetica", "bold");
        writeTextBlock(`${item.degree} | ${item.specialization}`, {
          fontSize: 12,
          color: [15, 23, 42],
          gapAfter: 2,
        });
        document.setFont("helvetica", "normal");
        writeTextBlock(`${item.institution} | ${item.location} | ${item.duration}`, {
          fontSize: 10,
          color: [100, 116, 139],
          gapAfter: 3,
        });
        writeTextBlock(item.description, { gapAfter: 8 });
      });

      writeSectionTitle("Certifications");
      documentData.certifications.forEach((item) => {
        writeTextBlock(
          `• ${item.name}${item.issuer ? ` | ${item.issuer}` : ""}${item.year ? ` | ${item.year}` : ""}`,
          { gapAfter: 3 }
        );
      });

      document.save(`${documentData.personal.name.replace(/\s+/g, "_")}_Resume.pdf`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={isGenerating}
      className={
        className ??
        "inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-cyan-800 transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
      }
    >
      <Download size={18} />
      {isGenerating ? loadingLabel : label}
    </button>
  );
}