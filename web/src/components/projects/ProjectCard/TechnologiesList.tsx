"use client";
import { useMemo } from "react";
import { skills } from "@/lib/skills";
import SkillCell from "@/components/skills/SkillCell";

interface TechnologiesListProps {
  technologies: string[];
  textColor?: string;
  category?: "backend" | "frontend" | "devops" | "other";
}

export default function TechnologiesList({
  technologies,
  textColor,
  category = "other",
}: TechnologiesListProps) {
  const techSkills = useMemo(() => {
    return technologies
      .map((techId) => {
        // Try to find the skill in the skills object
        return (
          skills[techId] || {
            id: techId,
            name: techId.charAt(0).toUpperCase() + techId.slice(1), // Fallback: capitalize the ID
            icon: "general.svg", // Fallback icon
            publish: true, // Default to showing custom skills
          }
        );
      })
      .filter((skill) => skill.publish); // Only show published skills
  }, [technologies]);

  if (techSkills.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-4">
      {techSkills.map((skill, index) => (
        <div key={index} className="tech-item" style={{ color: textColor }}>
          <SkillCell
            name={skill.name}
            icon={skill.icon}
            link={skill.link}
            index={index}
            inView={true}
            category={category}
          />
        </div>
      ))}
    </div>
  );
}
