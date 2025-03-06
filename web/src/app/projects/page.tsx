import { Metadata } from "next";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { Heading1 } from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Projects | Pluto's Portfolio",
  description: "A collection of my latest projects",
};

export default function ProjectsPage() {
  return (
    <main className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Heading1 className="text-center mb-14">PROJECTS</Heading1>
        <ProjectsGrid />
      </div>
    </main>
  );
}
