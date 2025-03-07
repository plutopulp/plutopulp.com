"use client";

import React, { useRef } from "react";
import SectionLayout from "@/components/layout/SectionLayout";
import SkillsSection from "@/components/skills/SkillsSection";
import { motion, useInView } from "framer-motion";
import { skillGroups } from "@/lib/skills";

// Use the predefined skill groups from the skills.ts library
const skillsData = {
  languages: skillGroups.languages,
  backend: skillGroups.backend,
  frontend: skillGroups.frontend,
  other: skillGroups.other,
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

const SkillsSectionComponent: React.FC = () => {
  // Individual refs for each section
  const languagesRef = useRef(null);
  const backendRef = useRef(null);
  const frontendRef = useRef(null);
  const otherRef = useRef(null);

  // Individual inView states for each section
  const languagesInView = useInView(languagesRef, { once: true, amount: 0.2 });
  const backendInView = useInView(backendRef, { once: true, amount: 0.2 });
  const frontendInView = useInView(frontendRef, { once: true, amount: 0.2 });
  const otherInView = useInView(otherRef, { once: true, amount: 0.2 });

  return (
    <SectionLayout
      id="skills"
      backgroundColor="#ffffff"
      title="Skills"
      fullHeight={true}
    >
      <div className="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto">
        {/* Languages Section */}
        <motion.div
          ref={languagesRef}
          className="md:border-r md:border-b border-gray-100"
          variants={sectionVariants}
          initial="hidden"
          animate={languagesInView ? "visible" : "hidden"}
        >
          <SkillsSection
            title="Languages"
            skills={skillsData.languages}
            inView={languagesInView}
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
          />
        </motion.div>

        {/* Frontend Section */}
        <motion.div
          ref={frontendRef}
          className="md:border-r border-gray-100"
          variants={sectionVariants}
          initial="hidden"
          animate={frontendInView ? "visible" : "hidden"}
        >
          <SkillsSection
            title="Frontend"
            skills={skillsData.frontend}
            inView={frontendInView}
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
          />
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default SkillsSectionComponent;
