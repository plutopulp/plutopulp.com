"use client";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Slider } from "@/components/ui/Slider";
import { ProjectModalProps } from "@/types/project";
import ProjectDetails from "./ProjectCard/ProjectDetails";
import ProjectCaption from "./ProjectCard/ProjectCaption";

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <div className="flex flex-col max-w-full">
        {/* Slider section */}
        <div className="mb-0">
          <Slider media={project.sliderMedia} onSlideChange={setCurrentSlide} />

          {/* Caption */}
          {project.sliderMedia[currentSlide]?.caption && (
            <ProjectCaption
              caption={project.sliderMedia[currentSlide].caption}
            />
          )}
        </div>

        {/* Project details */}
        <div className="px-6 md:px-10 pb-6">
          <ProjectDetails project={project} />
        </div>
      </div>
    </Modal>
  );
}
