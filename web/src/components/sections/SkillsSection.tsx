"use client";

import React, { useRef } from "react";
import SectionLayout from "@/components/layout/SectionLayout";
import SkillsSection from "@/components/skills/SkillsSection";
import { motion, useInView } from "framer-motion";
import { skillGroups } from "@/lib/skills";
import { colors } from "@/lib/colors";
import { SectionProps } from "./types";

// Use the predefined skill groups from the skills.ts library and filter for published only
const skillsData = {
  frontend: skillGroups.frontend.filter((skill) => skill.publish),
  backend: skillGroups.backend.filter((skill) => skill.publish),
  devops: skillGroups.devops.filter((skill) => skill.publish),
  other: skillGroups.other.filter((skill) => skill.publish),
};

// Animation variants for individual sections
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

// Generic skill section with position information
interface SkillSectionInfo {
  title: string;
  skills: typeof skillsData.frontend;
  category: "frontend" | "backend" | "devops" | "other";
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const SkillsSectionComponent: React.FC<SectionProps> = ({ sectionRef }) => {
  // Define sections with their positions
  const sections: SkillSectionInfo[] = [
    {
      title: "Backend",
      skills: skillsData.backend,
      category: "backend",
      position: "top-left",
    },
    {
      title: "Frontend",
      skills: skillsData.frontend,
      category: "frontend",
      position: "top-right",
    },
    {
      title: "DevOps",
      skills: skillsData.devops,
      category: "devops",
      position: "bottom-left",
    },
    {
      title: "Other",
      skills: skillsData.other,
      category: "other",
      position: "bottom-right",
    },
  ];

  // Create refs and inView states for each section
  const sectionRefs = {
    frontend: useRef(null),
    backend: useRef(null),
    devops: useRef(null),
    other: useRef(null),
  };

  const sectionInView = {
    frontend: useInView(sectionRefs.frontend, { once: true, amount: 0.2 }),
    backend: useInView(sectionRefs.backend, { once: true, amount: 0.2 }),
    devops: useInView(sectionRefs.devops, { once: true, amount: 0.2 }),
    other: useInView(sectionRefs.other, { once: true, amount: 0.2 }),
  };

  // Get the border class based on position
  const getBorderClass = (position: string) => {
    switch (position) {
      case "top-left":
        return "md:border-r md:border-b border-gray-100";
      case "top-right":
        return "md:border-b border-gray-100";
      case "bottom-left":
        return "md:border-r border-gray-100";
      case "bottom-right":
      default:
        return "";
    }
  };

  return (
    <SectionLayout
      id="skills"
      backgroundColor={colors.sections.skills}
      title="Skills"
      fullHeight={true}
      sectionRef={sectionRef}
    >
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
        {sections.map((section) => (
          <motion.div
            key={section.category}
            ref={sectionRefs[section.category]}
            className={`${getBorderClass(section.position)} p-2 md:p-4`}
            variants={sectionVariants}
            initial="hidden"
            animate={sectionInView[section.category] ? "visible" : "hidden"}
          >
            <SkillsSection
              title={section.title}
              skills={section.skills}
              inView={sectionInView[section.category]}
              category={section.category}
            />
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default SkillsSectionComponent;
