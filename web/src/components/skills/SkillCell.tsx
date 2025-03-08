"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors } from "@/lib/colors";

interface SkillCellProps {
  name: string;
  icon: string;
  link?: string;
  index?: number; // For animation delay calculation
  inView?: boolean; // Whether parent section is in view
  category?: "backend" | "frontend" | "devops" | "other"; // Category for color coding
}

/**
 * SkillCell component that displays a skill icon and its name
 * Includes animation capabilities for staggered reveal
 */
export const SkillCell: React.FC<SkillCellProps> = ({
  name,
  icon,
  link,
  index = 0,
  inView = false,
  category = "other", // Default to "other" if category is not specified
}) => {
  // Animation delay based on index position
  const delay = 0.1 + index * 0.1;

  // Base motion component props
  const motionProps = {
    className:
      "flex flex-col items-center justify-center p-4 group cursor-pointer no-underline",
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: {
      duration: 0.5,
      delay,
      ease: "easeOut",
    },
    whileHover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    whileTap: { scale: 0.95 },
  };

  // Get category colors with different opacities
  const getColorWithOpacity = (opacity: number) => {
    let baseColor = "";

    switch (category) {
      case "backend":
        baseColor = colors.skills.backend;
        break;
      case "frontend":
        baseColor = colors.skills.frontend;
        break;
      case "devops":
        baseColor = colors.skills.devops;
        break;
      case "other":
      default:
        baseColor = colors.skills.other;
        break;
    }

    // If we want full opacity, just return the color
    if (opacity === 1) return baseColor;

    // Otherwise, add opacity value to the hex color
    return `${baseColor}${Math.round(opacity * 255)
      .toString(16)
      .padStart(2, "0")}`;
  };

  // Set the normal and hover color style
  const nameStyle = {
    "--normal-color": getColorWithOpacity(0.7), // 70% opacity for normal state
    "--hover-color": getColorWithOpacity(1), // 100% opacity for hover state
  };

  // Content to render inside the container
  const content = (
    <>
      <div className="w-16 h-16 mb-1 relative flex items-center justify-center">
        <Image
          src={`/icons/${icon}`}
          alt={`${name} icon`}
          width={42}
          height={42}
          className="object-contain transition-transform duration-200 group-hover:scale-110"
        />
      </div>
      <span
        className="text-xs font-normal text-center transition-colors duration-200 text-[var(--normal-color)] group-hover:text-[var(--hover-color)]"
        style={nameStyle as React.CSSProperties}
      >
        {name}
      </span>
    </>
  );

  // If link is provided, render as a link
  if (link) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  // Otherwise render as a div
  return <motion.div {...motionProps}>{content}</motion.div>;
};

export default SkillCell;
