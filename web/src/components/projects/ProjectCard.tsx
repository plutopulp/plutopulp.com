"use client";
import { useHover } from "@uidotdev/usehooks";
import Image from "next/image";
import { Project } from "./types";
import { Heading2, TechStack } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [ref, isHovered] = useHover();

  const handleLearnMore = () => {
    console.log("Learn more clicked for:", project.title);
  };

  // Common style classes
  const transitionClasses = "transition-all duration-400 delay-[50ms]";
  const absoluteClasses = "absolute top-0 w-full h-full z-10";

  // Reusable hover element component
  const HoverElement = ({
    className,
    style,
    children,
  }: {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
  }) => (
    <div
      className={cn(
        absoluteClasses,
        transitionClasses,
        isHovered ? "opacity-100" : "opacity-0",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );

  return (
    <div ref={ref} className="relative w-full h-full">
      {/* Title - slides down on hover */}
      <HoverElement
        style={{
          transform: isHovered ? "translateY(25%)" : "translateY(0%)",
        }}
      >
        <Heading2 className="text-center font-bold">{project.title}</Heading2>
      </HoverElement>

      {/* Tech stack - slides down on hover */}
      <HoverElement
        style={{
          transform: isHovered ? "translateY(40%)" : "translateY(0%)",
        }}
      >
        <TechStack className="text-center text-[#4c4cd580] font-semibold">
          {project.technologies.brief.join(" - ")}
        </TechStack>
      </HoverElement>

      {/* Image container - fades out on hover */}
      <div
        className={cn(
          "relative",
          transitionClasses,
          isHovered ? "opacity-0" : "opacity-100"
        )}
      >
        {/* Outer card frame */}
        <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden p-3 md:p-4">
          {/* Inner image container */}
          <div className="bg-gray-50 aspect-[4/3] rounded-md overflow-hidden relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Button - slides up on hover */}
      <div
        className={cn(
          "absolute top-full w-full h-[10%] z-10 flex justify-center",
          transitionClasses,
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          transform: isHovered ? "translateY(-400%)" : "translateY(0%)",
        }}
      >
        <Button onClick={handleLearnMore} variant="primary" size="md">
          Learn More
        </Button>
      </div>
    </div>
  );
}
