"use client";
import AboutSection from "@/components/about/AboutSection";

export default function AboutPage() {
  // Later we'll scroll these to the respective sections
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
    <main className="min-h-screen" style={{ backgroundColor: bgColor }}>
      <AboutSection
        onSkillsClick={handleSkillsClick}
        onProjectsClick={handleProjectsClick}
        bgColor={bgColor}
      />
    </main>
  );
}
