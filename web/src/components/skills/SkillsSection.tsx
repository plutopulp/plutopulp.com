"use client";

import React from "react";
import SkillCell from "./SkillCell";
import { Skill, SkillGroupName } from "@/lib/skills";
import { colors } from "@/lib/colors";
import { Heading3 } from "../ui/Typography";
import { motion } from "framer-motion";

interface SkillsSectionProps {
  title: string;
  skills: Skill[];
  inView?: boolean;
  category?: SkillGroupName;
}

/**
 * SkillsSection component that displays a category of skills
 * Arranges SkillCells in a responsive grid layout with enhanced visual effects
 */
export const SkillsSection: React.FC<SkillsSectionProps> = ({
  title,
  skills,
  inView = false,
  category = "other", // Default to "other" if no category is provided
}) => {
  // Get category title color with increased opacity for better visibility on dark backgrounds
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

    // Return full opacity color for better visibility on dark backgrounds
    return baseColor;
  };

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Grid container animation variants
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-6 px-3 md:px-6">
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Heading3
          className="mb-6 md:mb-10 text-center font-semibold relative inline-block w-full text-white"
          style={{ color: getCategoryColor() }}
        >
          <span className="relative z-10">{title}</span>
          <span
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-12 rounded-full opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:w-16"
            style={{ backgroundColor: getCategoryColor() }}
          />
        </Heading3>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-5 md:gap-6 lg:gap-8 justify-items-center"
        variants={gridVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
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
      </motion.div>
    </div>
  );
};

export default SkillsSection;
