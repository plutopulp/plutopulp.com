export interface Technology {
  title: string;
  icon: string;
}

export interface Anchor {
  name: string;
  href: string | null;
  type: string;
  color?: string;
}

export interface SliderMedia {
  source: string;
  type: "image" | "video";
  padding: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  meta: string;
  description: string;
  technologies: {
    brief: string[]; // Display names for brief overview
    backend: string[]; // Skill IDs for backend technologies
    frontend: string[]; // Skill IDs for frontend technologies
  };
  learnings: string[];
  anchors: Anchor[];
  image: string;
  sliderMedia: SliderMedia[];
}
