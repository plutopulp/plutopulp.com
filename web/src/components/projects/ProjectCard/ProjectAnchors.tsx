"use client";
import { Anchor } from "@/types/project";
import { Button } from "@/components/ui/Button";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

interface ProjectAnchorsProps {
  anchors: Anchor[];
}

export default function ProjectAnchors({ anchors }: ProjectAnchorsProps) {
  // Filter out any anchors without href
  const validAnchors = anchors.filter((anchor) => anchor.href);

  if (validAnchors.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {validAnchors.map((anchor, index) => (
        <a
          key={index}
          href={anchor.href!}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <Button
            variant={anchor.type === "globe" ? "primary" : "outline"}
            size="sm"
            className="inline-flex items-center"
            rightIcon={
              anchor.type === "globe" ? (
                <GlobeAltIcon className="w-4 h-4" />
              ) : undefined
            }
          >
            {anchor.name}
          </Button>
        </a>
      ))}
    </div>
  );
}
