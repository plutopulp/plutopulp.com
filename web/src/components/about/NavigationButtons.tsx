"use client";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/Button";
import { NavigationContext } from "@/contexts/NavigationContext";
import { useContext } from "react";

export default function NavigationButtons({}) {
  const { handleNavigation, findNavItem } = useContext(NavigationContext);
  const skillsNavItem = findNavItem("skills");
  const projectsNavItem = findNavItem("projects");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 md:mt-24">
      <div className="flex justify-center">
        <Button
          onClick={(e) => skillsNavItem && handleNavigation(e, skillsNavItem)}
          variant="primary"
          size="lg"
          rightIcon={<ArrowDownIcon className="w-5 h-5 ml-1 animate-bounce" />}
          className="px-8"
        >
          Check Out My Skills
        </Button>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={(e) =>
            projectsNavItem && handleNavigation(e, projectsNavItem)
          }
          variant="outline"
          size="lg"
          rightIcon={<ArrowDownIcon className="w-5 h-5 ml-1 animate-bounce" />}
          className="px-8"
        >
          Check Out My Projects
        </Button>
      </div>
    </div>
  );
}
