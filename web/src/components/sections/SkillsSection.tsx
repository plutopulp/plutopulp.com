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

const SkillsSectionComponent: React.FC<SectionProps> = ({ sectionRef }) => {
  // Individual refs for each section
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const devopsRef = useRef(null);
  const otherRef = useRef(null);

  // Individual inView states for each section
  const frontendInView = useInView(frontendRef, { once: true, amount: 0.2 });
  const backendInView = useInView(backendRef, { once: true, amount: 0.2 });
  const devopsInView = useInView(devopsRef, { once: true, amount: 0.2 });
  const otherInView = useInView(otherRef, { once: true, amount: 0.2 });

  return (
    <SectionLayout
      id="skills"
      backgroundColor={colors.sections.skills}
      title="Skills"
      fullHeight={true}
      sectionRef={sectionRef}
    >
      <div className="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto">
        {/* Frontend Section */}
        <motion.div
          ref={frontendRef}
          className="md:border-r md:border-b border-gray-100"
          variants={sectionVariants}
          initial="hidden"
          animate={frontendInView ? "visible" : "hidden"}
        >
          <SkillsSection
            title="Frontend"
            skills={skillsData.frontend}
            inView={frontendInView}
            category="frontend"
          />
        </motion.div>

        {/* Backend Section */}
        <motion.div
          ref={backendRef}
          className="md:border-b border-gray-100"
          variants={sectionVariants}
          initial="hidden"
          animate={backendInView ? "visible" : "hidden"}
        >
          <SkillsSection
            title="Backend"
            skills={skillsData.backend}
            inView={backendInView}
            category="backend"
          />
        </motion.div>

        {/* DevOps Section */}
        <motion.div
          ref={devopsRef}
          className="md:border-r border-gray-100"
          variants={sectionVariants}
          initial="hidden"
          animate={devopsInView ? "visible" : "hidden"}
        >
          <SkillsSection
            title="DevOps"
            skills={skillsData.devops}
            inView={devopsInView}
            category="devops"
          />
        </motion.div>

        {/* Other Section */}
        <motion.div
          ref={otherRef}
          variants={sectionVariants}
          initial="hidden"
          animate={otherInView ? "visible" : "hidden"}
        >
          <SkillsSection
            title="Other"
            skills={skillsData.other}
            inView={otherInView}
            category="other"
          />
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default SkillsSectionComponent;
