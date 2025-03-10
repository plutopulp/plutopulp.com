"use client";

import React, { useContext } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSectionWrapper from "@/components/sections/ContactSection";
import { NavigationContext } from "@/contexts/NavigationContext";

export default function Home() {
  // Get section refs from context
  const { sectionRefs } = useContext(NavigationContext);

  return (
    <main className="min-h-screen">
      <HeroSection sectionRef={sectionRefs.hero} />
      <AboutSection sectionRef={sectionRefs.about} />
      <SkillsSection sectionRef={sectionRefs.skills} />
      <ProjectsSection sectionRef={sectionRefs.projects} />
      <ContactSectionWrapper sectionRef={sectionRefs.contact} />
    </main>
  );
}
