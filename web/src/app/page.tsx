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
      <section id="hero" ref={sectionRefs.hero}>
        <HeroSection />
      </section>
      <section id="about" ref={sectionRefs.about}>
        <AboutSection />
      </section>
      <section id="skills" ref={sectionRefs.skills}>
        <SkillsSection />
      </section>
      <section id="projects" ref={sectionRefs.projects}>
        <ProjectsSection />
      </section>
      <section id="contact" ref={sectionRefs.contact}>
        <ContactSectionWrapper />
      </section>
    </main>
  );
}
