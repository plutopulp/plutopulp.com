import React, { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

interface ActionButtonProps {
  href: string;
  isAnimationActive: boolean;
  children: ReactNode;
  icon: ReactNode;
}

/**
 * Action button component with animated entry and rotating icon
 */
export const ActionButton = ({
  href,
  isAnimationActive,
  children,
  icon,
}: ActionButtonProps) => {
  // Create custom icon with rotation instead of translation
  const rotatingIcon = (
    <div className="transition-transform duration-300 group-hover:rotate-90">
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
        href={href}
        rightIcon={rotatingIcon}
        className="border-[#5893AB] text-white hover:text-white"
      >
        {children}
      </Button>
    </div>
  );
};
