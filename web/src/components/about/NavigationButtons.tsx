"use client";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/Button";

interface NavigationButtonsProps {
  onSkillsClick: () => void;
  onProjectsClick: () => void;
}

export default function NavigationButtons({
  onSkillsClick,
  onProjectsClick,
}: NavigationButtonsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 md:mt-24">
      <div className="flex justify-center">
        <Button
          onClick={onSkillsClick}
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
          onClick={onProjectsClick}
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
