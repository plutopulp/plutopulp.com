"use client";
import { useHover } from "@uidotdev/usehooks";
import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types/project";
import { Heading2, Paragraph } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ProjectModal } from "./ProjectModal";
import { colors } from "@/lib/colors";

export interface ProjectTileProps {
  project: Project;
}

export default function ProjectTile({ project }: ProjectTileProps) {
  const [ref, isHovered] = useHover();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Common transition classes
  const transitionClasses = "transition-all duration-400 delay-[50ms]";

  // Common absolute positioning classes
  const absoluteClasses = "absolute top-0 w-full h-full z-10";

  // Define styles for the tech stack text
  const techStackStyle = {
    color: `${colors.secondary.DEFAULT}80`, // Using the secondary color with 50% opacity
  };

  return (
    <>
      <div ref={ref} className="relative w-full h-full">
        {/* Title - slides down on hover */}
        <div
          className={cn(
            absoluteClasses,
            transitionClasses,
            isHovered ? "opacity-100" : "opacity-0"
          )}
          style={{
            transform: isHovered ? "translateY(25%)" : "translateY(0%)",
          }}
        >
          <Heading2 className="text-center font-bold text-gray-600">
            {project.title}
          </Heading2>
        </div>

        {/* Tech stack - slides down on hover */}
        <div
          className={cn(
            absoluteClasses,
            transitionClasses,
            isHovered ? "opacity-100" : "opacity-0"
          )}
          style={{
            transform: isHovered ? "translateY(40%)" : "translateY(0%)",
          }}
        >
          <Paragraph
            className="text-center font-semibold"
            style={techStackStyle}
          >
            {project.technologies.brief.join(" - ")}
          </Paragraph>
        </div>

        {/* Image container - fades out on hover */}
        <div
          className={cn(
            "relative",
            transitionClasses,
            isHovered ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Outer card frame */}
          <div
            className="rounded-lg shadow-md overflow-hidden p-3 md:p-4"
            style={{
              backgroundColor: colors.background.light,
              borderColor: colors.gray[100],
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          >
            {/* Inner image container */}
            <div
              className="rounded-md overflow-hidden relative aspect-[4/3]"
              style={{ backgroundColor: colors.gray[50] }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Button - slides up on hover */}
        <div
          className={cn(
            "absolute top-full w-full h-[10%] z-10 flex justify-center",
            transitionClasses,
            isHovered ? "opacity-100" : "opacity-0"
          )}
          style={{
            transform: isHovered ? "translateY(-400%)" : "translateY(0%)",
          }}
        >
          <Button onClick={handleLearnMore} variant="primary" size="md">
            Learn More
          </Button>
        </div>
      </div>

      {/* Project modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={project}
      />
    </>
  );
}
