"use client";
import { Project } from "@/types/project";
import { Heading2, Heading3, Paragraph } from "@/components/ui/Typography";
import ProjectAnchors from "./ProjectAnchors";
import TechnologiesList from "./TechnologiesList";
import { getCategoryColorWithOpacity } from "@/lib/colorUtils";
import { SkillGroupName } from "@/lib/skills";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const { title, meta, description, anchors, technologies } = project;

  // Prepare all technologies as combined data with their respective categories
  const allTechnologies = [
    ...(technologies.backend?.map((tech) => ({
      tech,
      category: "backend" as SkillGroupName,
    })) || []),
    ...(technologies.frontend?.map((tech) => ({
      tech,
      category: "frontend" as SkillGroupName,
    })) || []),
    ...(technologies.devops?.map((tech) => ({
      tech,
      category: "devops" as SkillGroupName,
    })) || []),
    ...(technologies.other?.map((tech) => ({
      tech,
      category: "other" as SkillGroupName,
    })) || []),
  ];

  return (
    <div className="mt-8">
      {/* Title and anchors */}
      <div className="flex justify-between items-center mb-2">
        <Heading2 className="font-bold text-gray-700">{title}</Heading2>
        <ProjectAnchors anchors={anchors} />
      </div>

      {/* Subtitle with border */}
      <div className="pb-2 mb-6 border-b border-gray-300">
        <Heading3 className="text-gray-600 font-semibold uppercase text-sm">
          {meta}
        </Heading3>
      </div>

      {/* Description */}
      <div className="mb-8">
        <Paragraph className="text-gray-700 leading-relaxed text-lg">
          {description}
        </Paragraph>
      </div>

      {/* Technologies section - now as a single row */}
      {allTechnologies.length > 0 && (
        <div>
          <Heading3 className="font-semibold mb-4 text-gray-500">
            Built With
          </Heading3>

          <div className="flex flex-wrap gap-4">
            {allTechnologies.map(({ tech, category }, index) => {
              // Create CSS variables for normal and hover colors
              const colorStyle = {
                "--normal-color": getCategoryColorWithOpacity(category, 0.7),
                "--hover-color": getCategoryColorWithOpacity(category, 1),
              } as React.CSSProperties;

              return (
                <div
                  key={`${category}-${tech}-${index}`}
                  className="tech-item group"
                  style={colorStyle}
                >
                  <TechnologiesList
                    technologies={[tech]}
                    textColor="var(--normal-color)"
                    category={category}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
