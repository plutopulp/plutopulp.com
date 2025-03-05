import React from "react";
import { Typography } from "@/components/ui/Typography";
import { colors } from "@/lib/colors";

interface HeroHeaderProps {
  isAnimationActive: boolean;
  name: string;
  subtitle: string;
}

/**
 * Hero header with animated text entry
 */
export const HeroHeader = ({
  isAnimationActive,
  name,
  subtitle,
}: HeroHeaderProps) => {
  return (
    <>
      <Typography
        variant="h1"
        className={`text-white mb-2 relative ${
          isAnimationActive
            ? "opacity-100 translate-y-0 transition-all duration-1000 ease-out"
            : "opacity-0 -translate-y-16 transition-none"
        }`}
      >
        Hello, I&apos;m{" "}
        <span style={{ color: colors.spiral.magenta }}>{name}</span>
      </Typography>

      <Typography
        variant="h3"
        className={`text-white mb-8 relative ${
          isAnimationActive
            ? "opacity-100 translate-x-0 transition-all duration-1000 ease-out delay-300"
            : "opacity-0 -translate-x-16 transition-none"
        }`}
      >
        {subtitle}
      </Typography>
    </>
  );
};
