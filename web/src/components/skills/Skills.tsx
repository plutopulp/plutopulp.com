"use client";

import React from "react";
import SkillsSection from "./SkillsSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Define skills data - organized by category
const skillsData = {
  languages: [
    { name: "Python", icon: "python.svg" },
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "C", icon: "c.svg" },
    { name: "PHP", icon: "php.svg" },
    { name: "BASH", icon: "bash.svg" },
  ],
  backend: [
    { name: "Django", icon: "django.svg" },
    { name: "REST APIs", icon: "restAPI.png" },
    { name: "Docker", icon: "docker.png" },
    { name: "Celery", icon: "celery.svg" },
    { name: "PostgreSQL", icon: "psql.svg" },
    { name: "MySQL", icon: "mySQL.svg" },
  ],
  frontend: [
    { name: "HTML-5", icon: "html5.svg" },
    { name: "CSS-3", icon: "css3.svg" },
    { name: "ReactJS", icon: "react.svg" },
    { name: "Semantic UI", icon: "semanticUI.svg" },
    { name: "Bootstrap", icon: "bootstrap.svg" },
    { name: "ChartJS", icon: "chartjs.svg" },
  ],
  other: [
    { name: "Linux", icon: "linux.svg" },
    { name: "Git", icon: "git.svg" },
    { name: "Heroku", icon: "heroku.svg" },
    { name: "LaTeX", icon: "latex.svg" },
    { name: "Gnuplot", icon: "gnuplot.svg" },
    { name: "Figma", icon: "figma.svg" },
  ],
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

/**
 * Main Skills component that organizes all skill categories
 * Each section animates independently as it comes into viewport
 */
const Skills: React.FC = () => {
  // Individual refs for each section
  const titleRef = useRef(null);
  const languagesRef = useRef(null);
  const backendRef = useRef(null);
  const frontendRef = useRef(null);
  const otherRef = useRef(null);

  // Individual inView states for each section
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const languagesInView = useInView(languagesRef, { once: true, amount: 0.2 });
  const backendInView = useInView(backendRef, { once: true, amount: 0.2 });
  const frontendInView = useInView(frontendRef, { once: true, amount: 0.2 });
  const otherInView = useInView(otherRef, { once: true, amount: 0.2 });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          ref={titleRef}
          className="text-5xl font-extralight mb-16 text-center tracking-wider text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          SKILLS
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-0">
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
      </div>
    </section>
  );
};

export default Skills;
