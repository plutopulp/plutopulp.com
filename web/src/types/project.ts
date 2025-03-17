import { SkillId } from "@/lib/skills";

/**
 * Technology used in a project
 */
export interface Technology {
  title: string;
  icon: string;
}

/**
 * External links for projects
 */
export interface Anchor {
  name: string;
  href: string | null;
  type: string;
  color?: string;
}

/**
 * Media for project sliders
 */
export interface SliderMedia {
  source: string;
  type: "image" | "video";
  padding: string;
  caption: string;
}

/**
 * Project data structure
 */
export interface Project {
  id: string;
  title: string;
  meta: string;
  description: string;
  technologies: {
    brief: string[]; // Display names for brief overview
    backend: SkillId[]; // Skill IDs for backend technologies
    frontend: SkillId[]; // Skill IDs for frontend technologies
    devops?: SkillId[]; // Skill IDs for devops technologies
    other?: SkillId[]; // Skill IDs for other technologies
  };
  learnings: string[];
  anchors: Anchor[];
  image: string;
  sliderMedia: SliderMedia[];
}

/**
 * Props for project modal component
 */
export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}
