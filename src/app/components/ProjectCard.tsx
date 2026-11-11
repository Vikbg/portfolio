"use client";

import React from "react";
import FakeTerminal from "./FakeTerminal";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { getImagePath } from "@/lib/paths";

const ProjectCard: React.FC<Project> = ({
  title,
  status,
  tags,
  description,
  terminalOutput,
  label,
  href,
  image,
}) => {
  const githubLink = href?.startsWith("https://github.com/");
  // Status monochrome
  const statusColor =
    status === "Not Started"
      ? "bg-gray-600"
      : status === "In Progress"
        ? "bg-gray-400"
        : status === "Done" || status === "Live"
          ? "bg-gray-200"
          : "bg-gray-500";

  return (
    <article
      className="relative space-y-6 rounded-2xl px-4 py-8 text-white backdrop-blur-sm sm:space-y-10 sm:px-6 sm:py-10"
      role="region"
      aria-label={`Project: ${title}`}
    >
      {/* Title */}
      <h2 className="text-2xl font-light tracking-tight sm:text-6xl">{title}</h2>

      {/* Status + Tags */}
      <div className="grid grid-rows-2 items-center gap-6 text-sm opacity-80 sm:flex">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-base">{status}</span>
          <span className={`h-2.5 w-2.5 rounded-full ${statusColor}`} />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <React.Fragment key={i}>
              <span className="text-[0.6rem] tracking-wide uppercase opacity-70 sm:text-xs">
                {tag}
              </span>

              {i !== tags.length - 1 && <div className="h-4 w-px bg-white/20"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* LAYOUT */}
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        {/* DESCRIPTION */}
        <div>
          <p className="max-w-lg text-sm leading-relaxed opacity-70 sm:text-lg">{description}</p>
          {href && (
            <div className="mt-5">
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:bg-accent inline-flex h-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm transition-colors hover:text-(--color-card) md:h-12 ${githubLink ? "w-10 text-lg md:w-12" : "gap-2 px-4 text-sm"}`}
                aria-label={label}
              >
                {githubLink ? <FaGithub /> : <>{label} <FaExternalLinkAlt aria-hidden="true" /></>}
              </a>
            </div>
          )}
        </div>

        {/* TERMINAL OUTPUT */}
        {terminalOutput && terminalOutput.length > 0 && <FakeTerminal lines={terminalOutput} />}
        {/* IMAGE OUTPUT */}
        {image && (
          <div className="flex items-center justify-center">
            <Image src={getImagePath(image)} alt={title} width={400} height={300} className="rounded-lg" />
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
