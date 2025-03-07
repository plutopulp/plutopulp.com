"use client";

import React from "react";
import SectionLayout from "@/components/layout/SectionLayout";
import AboutBio from "@/components/about/AboutBio";
import ProfileImage from "@/components/about/ProfileImage";
import NavigationButtons from "@/components/about/NavigationButtons";

const AboutSection: React.FC = () => {
  // Scroll handlers for navigation
  const handleSkillsClick = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Light gray background color from the design
  const bgColor = "#f5f5f5";

  return (
    <SectionLayout
      id="about"
      backgroundColor={bgColor}
      title="About"
      fullHeight={true}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Text content */}
        <div className="md:col-span-7">
          <AboutBio bgColor={bgColor} />
        </div>

        {/* Image */}
        <div className="md:col-span-5">
          <ProfileImage />
        </div>
      </div>

      {/* Buttons */}
      <NavigationButtons
        onSkillsClick={handleSkillsClick}
        onProjectsClick={handleProjectsClick}
      />
    </SectionLayout>
  );
};

export default AboutSection;
