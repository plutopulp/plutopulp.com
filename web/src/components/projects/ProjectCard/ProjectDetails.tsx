"use client";
import { Project } from "@/types/project";
import { Heading2, Heading3, Paragraph } from "@/components/ui/Typography";
import ProjectAnchors from "./ProjectAnchors";
import TechnologiesList from "./TechnologiesList";
import { colors } from "@/lib/colors";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const { title, meta, description, anchors, technologies } = project;

  // Define category colors based on our color system
  const categoryColors = {
    backend: colors.skills.backend + "AA", // 67% opacity
    frontend: colors.skills.frontend + "AA",
    devops: colors.skills.devops + "AA",
    other: colors.skills.other + "AA",
  };

  return (
    <div className="mt-8">
      {/* Title and anchors */}
      <div className="flex justify-between items-center mb-2">
        <Heading2 className="font-bold text-3xl">{title}</Heading2>
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

      {/* Technologies section */}
      <div>
        <Heading3 className="font-semibold mb-4 text-xl">Built With</Heading3>

        {/* Backend technologies */}
        {technologies.backend && technologies.backend.length > 0 && (
          <div className="mb-6">
            <div
              className="text-sm font-semibold mb-2"
              style={{ color: categoryColors.backend }}
            >
              Backend
            </div>
            <TechnologiesList
              technologies={technologies.backend}
              textColor={categoryColors.backend}
              category="backend"
            />
          </div>
        )}

        {/* Frontend technologies */}
        {technologies.frontend && technologies.frontend.length > 0 && (
          <div className="mb-6">
            <div
              className="text-sm font-semibold mb-2"
              style={{ color: categoryColors.frontend }}
            >
              Frontend
            </div>
            <TechnologiesList
              technologies={technologies.frontend}
              textColor={categoryColors.frontend}
              category="frontend"
            />
          </div>
        )}

        {/* DevOps technologies */}
        {technologies.devops && technologies.devops.length > 0 && (
          <div className="mb-6">
            <div
              className="text-sm font-semibold mb-2"
              style={{ color: categoryColors.devops }}
            >
              DevOps
            </div>
            <TechnologiesList
              technologies={technologies.devops}
              textColor={categoryColors.devops}
              category="devops"
            />
          </div>
        )}

        {/* Other technologies */}
        {technologies.other && technologies.other.length > 0 && (
          <div className="mb-6">
            <div
              className="text-sm font-semibold mb-2"
              style={{ color: categoryColors.other }}
            >
              Other
            </div>
            <TechnologiesList
              technologies={technologies.other}
              textColor={categoryColors.other}
              category="other"
            />
          </div>
        )}
      </div>
    </div>
  );
}
