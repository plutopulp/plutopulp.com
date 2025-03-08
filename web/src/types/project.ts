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
    backend: string[]; // Skill IDs for backend technologies
    frontend: string[]; // Skill IDs for frontend technologies
    devops?: string[]; // Skill IDs for devops technologies
    other?: string[]; // Skill IDs for other technologies
  };
  learnings: string[];
  anchors: Anchor[];
  image: string;
  sliderMedia: SliderMedia[];
}

/**
 * Props for project card component
 */
export interface ProjectCardProps {
  project: Project;
}

/**
 * Props for project modal component
 */
export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}
