import { Metadata } from "next";
import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects | Pluto's Portfolio",
  description: "A collection of my latest projects",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <ProjectsSection />
    </main>
  );
}
