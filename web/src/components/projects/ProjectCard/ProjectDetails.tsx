"use client";
import { Project } from "@/types/project";
import { Heading2, Heading3, Paragraph } from "@/components/ui/Typography";
import ProjectAnchors from "./ProjectAnchors";
import TechnologiesList from "./TechnologiesList";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const { title, meta, description, anchors, technologies } = project;

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
        {technologies.backend.length > 0 && (
          <div className="mb-6">
            <TechnologiesList
              technologies={technologies.backend}
              textColor="#257795aa"
            />
          </div>
        )}

        {/* Frontend technologies */}
        {technologies.frontend.length > 0 && (
          <div className="mb-6">
            <TechnologiesList
              technologies={technologies.frontend}
              textColor="#4c4cd5aa"
            />
          </div>
        )}
      </div>
    </div>
  );
}
