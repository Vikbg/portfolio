import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects.json";

const Projects = () => {
  return (
    <div id="projects">
      {projects.map((project, index) => (
        <React.Fragment key={project.href}>
          <ProjectCard {...project} />
          {index !== projects.length - 1 && (
            <hr className="mx-6 h-px bg-white/20 opacity-25 sm:mx-20 lg:mx-40" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Projects;
