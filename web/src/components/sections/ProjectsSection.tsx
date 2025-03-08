"use client";

import React from "react";
import SectionLayout from "@/components/layout/SectionLayout";
import { projectsData } from "@/lib/projects";
import ProjectTile from "@/components/projects/ProjectTile";
import { colors } from "@/lib/colors";

const ProjectsSection: React.FC = () => {
  return (
    <SectionLayout
      id="projects"
      backgroundColor={colors.sections.projects}
      title="Projects"
      fullHeight={true}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projectsData.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default ProjectsSection;
