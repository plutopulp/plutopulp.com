"use client";

import React from "react";
import SectionLayout from "@/components/layout/SectionLayout";
import { projectsData } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";

const ProjectsSection: React.FC = () => {
  return (
    <SectionLayout id="projects" backgroundColor="#f7f7f7" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default ProjectsSection;
