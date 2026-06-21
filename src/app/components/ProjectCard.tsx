"use client";

import React from "react";
import FakeTerminal from "./FakeTerminal";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  status: string;
  tags: string[];
  terminalOutput?: string[];
  description: string;
  label: string;
  href: string;
  image?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  status,
  tags,
  description,
  terminalOutput,
  label,
  href,
  image,
}) => {
  // Status monochrome
  const statusColor =
    status === "Not Started"
      ? "bg-gray-600"
      : status === "In Progress"
        ? "bg-gray-400"
        : status === "Done"
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
          <div className="mt-5">
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-accent flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-lg backdrop-blur-sm transition-colors hover:text-(--color-card) md:h-12 md:w-12"
              aria-label={label}
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* TERMINAL OUTPUT */}
        {terminalOutput && terminalOutput.length > 0 && <FakeTerminal lines={terminalOutput} />}
        {/* IMAGE OUTPUT */}
        {image && (
          <div className="flex items-center justify-center">
            <Image src={image} alt={title} width={400} height={300} className="rounded-lg" />
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
