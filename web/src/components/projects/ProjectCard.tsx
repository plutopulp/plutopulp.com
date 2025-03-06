import Image from "next/image";
import { Project } from "./types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 h-full transition-all duration-300 hover:shadow-lg">
      <div className="p-4 h-full flex flex-col">
        <div className="relative aspect-[4/3] w-full bg-gray-50 rounded  flex-grow">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="object-contain max-h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
