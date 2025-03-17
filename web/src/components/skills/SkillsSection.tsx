"use client";

import React from "react";
import SkillCell from "./SkillCell";
import { Skill, SkillGroupName } from "@/lib/skills";
import { colors } from "@/lib/colors";
import { Heading3 } from "../ui/Typography";

interface SkillsSectionProps {
  title: string;
  skills: Skill[];
  inView?: boolean;
  category?: SkillGroupName;
}

/**
 * SkillsSection component that displays a category of skills
 * Arranges SkillCells in a responsive grid layout
 */
export const SkillsSection: React.FC<SkillsSectionProps> = ({
  title,
  skills,
  inView = false,
  category = "other", // Default to "other" if no category is provided
}) => {
  // Get category title color with reduced opacity for subtlety
  const getCategoryColor = () => {
    let baseColor = "";

    switch (category) {
      case "backend":
        baseColor = colors.skills.backend;
        break;
      case "frontend":
        baseColor = colors.skills.frontend;
        break;
      case "devops":
        baseColor = colors.skills.devops;
        break;
      case "other":
      default:
        baseColor = colors.skills.other;
        break;
    }

    // Return color with 90% opacity for title
    return `${baseColor}E6`; // E6 is ~90% opacity in hex
  };

  return (
    <div className="py-4 px-2 md:px-4">
      <Heading3
        className="mb-4 md:mb-8 text-center opacity-60"
        style={{ color: getCategoryColor() }}
      >
        {title}
      </Heading3>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <SkillCell
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            link={skill.link}
            index={index}
            inView={inView}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
