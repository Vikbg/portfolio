"use client";

import React from "react";
import FakeTerminal from "./FakeTerminal";
import { FaGithub } from 'react-icons/fa';
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  status: string;
  tags: string[];
  terminalOutput?: string[];
  description: string;
  label: string, 
  href: string,
  image?: string
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  status,
  tags,
  description,
  terminalOutput,
  label,
  href,
  image
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
    <div
      className="
      text-white px-6 py-10 space-y-10 
      rounded-2xl backdrop-blur-sm 
      relative
    "
    >
      {/* Title */}
      <h2 className="sm:text-6xl text-2xl font-light tracking-tight">{title}</h2>

      {/* Status + Tags */}
      <div className="grid grid-rows-2 sm:flex items-center gap-6 text-sm opacity-80">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-base">{status}</span>
          <span className={`w-2.5 h-2.5 rounded-full ${statusColor}`} />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <React.Fragment key={i}>
              <span className="sm:text-xs text-[0.6rem] uppercase tracking-wide opacity-70">
                {tag}
              </span>

              {i !== tags.length - 1 && (
                <div className="w-px h-4 bg-white/20"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* DESCRIPTION */}
        <div>
          <p className="opacity-70 leading-relaxed text-sm sm:text-lg max-w-lg">
            {description}
          </p>
          <div className="mt-5">
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-12 md:h-12 w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-accent hover:text-(--color-card) transition-colors text-lg"
                aria-label={label}
              >
                <FaGithub/>
              </a>
          </div>
        </div>

        {/* TERMINAL OUTPUT */}
        {terminalOutput && terminalOutput.length > 0 && (
          <FakeTerminal lines={terminalOutput} />
        )}
        {/* IMAGE OUTPUT */}
        {image && (
          <div className="flex items-center justify-center">
            <Image src={image} alt={title} width={400} height={300} className="rounded-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
