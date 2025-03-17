import React, { ReactNode, useContext } from "react";
import { Button } from "@/components/ui/Button";
import { NavigationContext } from "@/contexts/NavigationContext";

interface ActionButtonProps {
  isAnimationActive: boolean;
  children: ReactNode;
  icon: ReactNode;
}

/**
 * Action button component with animated entry and rotating icon
 */
export const ActionButton = ({
  isAnimationActive,
  children,
  icon,
}: ActionButtonProps) => {
  const { handleNavigation, findNavItem } = useContext(NavigationContext);
  const aboutNavItem = findNavItem("about");
  // Create custom icon with rotation to point downwards (90 degrees clockwise)
  const rotatingIcon = (
    <div className="transition-transform duration-200 group-hover:rotate-90">
      {icon}
    </div>
  );

  return (
    <div
      className={`${
        isAnimationActive
          ? "opacity-100 transition-opacity duration-1000 ease-out delay-500"
          : "opacity-0 transition-none"
      }`}
    >
      <Button
        variant="outline"
        onClick={(e) => aboutNavItem && handleNavigation(e, aboutNavItem)}
        rightIcon={rotatingIcon}
        className="border-[#5893AB] text-white hover:text-white"
      >
        {children}
      </Button>
    </div>
  );
};
