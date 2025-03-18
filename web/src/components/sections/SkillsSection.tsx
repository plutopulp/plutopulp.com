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
    frontend: useInView(sectionRefs.frontend, { once: true, amount: 0.1 }),
    backend: useInView(sectionRefs.backend, { once: true, amount: 0.1 }),
    devops: useInView(sectionRefs.devops, { once: true, amount: 0.1 }),
    other: useInView(sectionRefs.other, { once: true, amount: 0.1 }),
  };

  // Get the appropriate background and border styles based on position
  const getSectionStyles = (position: string, category: string) => {
    // Base styles all sections will have
    const baseStyles = "rounded-2xl overflow-hidden shadow-lg";

    // Add subtle gradient background based on category color for dark theme
    const colorMap = {
      backend: "from-blue-900/20",
      frontend: "from-pink-900/20",
      devops: "from-indigo-900/20",
      other: "from-amber-900/20",
    };

    // Return combined classes
    return `${baseStyles} bg-gradient-to-br ${
      colorMap[category as keyof typeof colorMap]
    } to-gray-900/5 backdrop-blur-sm`;
  };

  return (
    <SectionLayout
      id="skills"
      backgroundColor={colors.sections.skills}
      title="Skills"
      fullHeight={true}
      sectionRef={sectionRef}
    >
      <div className="grid md:grid-cols-2 gap-4 sm:gap-4 md:gap-4 lg:gap-7 max-w-6xl mx-auto p-2 sm:p-3 md:p-3 lg:p-4">
        {sections.map((section) => (
          <motion.div
            key={section.category}
            ref={sectionRefs[section.category]}
            className={`${getSectionStyles(
              section.position,
              section.category
            )} transition-all duration-500 hover:shadow-xl p-2 sm:p-2 md:p-3 lg:p-5`}
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
