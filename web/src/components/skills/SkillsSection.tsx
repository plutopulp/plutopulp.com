"use client";

import React from "react";
import SkillCell from "./SkillCell";
import { Skill } from "@/lib/skills";

interface SkillsSectionProps {
  title: string;
  skills: Skill[];
  inView?: boolean;
}

/**
 * SkillsSection component that displays a category of skills
 * Arranges SkillCells in a responsive grid layout
 */
export const SkillsSection: React.FC<SkillsSectionProps> = ({
  title,
  skills,
  inView = false,
}) => {
  return (
    <div className="py-4 px-4">
      <h3 className="text-2xl font-light mb-8 text-center text-gray-700">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <SkillCell
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            link={skill.link}
            index={index}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
