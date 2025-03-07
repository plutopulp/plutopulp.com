"use client";
import { useMemo } from "react";
import AboutHeader from "./AboutHeader";
import AboutBio from "./AboutBio";
import ProfileImage from "./ProfileImage";
import NavigationButtons from "./NavigationButtons";

interface AboutSectionProps {
  onSkillsClick: () => void;
  onProjectsClick: () => void;
  bgColor?: string;
}

export default function AboutSection({
  onSkillsClick,
  onProjectsClick,
  bgColor = "#ffffff",
}: AboutSectionProps) {
  // Use useMemo to avoid unnecessary re-calculations
  const sectionStyle = useMemo(
    () => ({
      backgroundColor: bgColor,
    }),
    [bgColor]
  );

  return (
    <section
      className="py-20 px-4 md:px-8 max-w-7xl mx-auto"
      id="about"
      style={sectionStyle}
    >
      <AboutHeader bgColor={bgColor} />

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
        onSkillsClick={onSkillsClick}
        onProjectsClick={onProjectsClick}
      />
    </section>
  );
}
