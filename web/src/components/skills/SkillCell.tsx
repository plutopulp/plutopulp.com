"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getCategoryColorWithOpacity } from "@/lib/colorUtils";
import { SkillGroupName } from "@/lib/skills";

interface SkillCellProps {
  name: string;
  icon: string;
  link?: string;
  index?: number; // For animation delay calculation
  inView?: boolean; // Whether parent section is in view
  category?: SkillGroupName; // Category for color coding
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
      "flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 group cursor-pointer no-underline",
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

  // Set the normal and hover color style using our shared utility
  const nameStyle = {
    "--normal-color": getCategoryColorWithOpacity(category, 0.5),
    "--hover-color": getCategoryColorWithOpacity(category, 1),
  };

  // Content to render inside the container
  const content = (
    <>
      {/* Responsive icon container */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-1 relative flex items-center justify-center">
        <Image
          src={`/icons/${icon}`}
          alt={`${name} icon`}
          width={42}
          height={42}
          className="object-contain transition-transform duration-200 group-hover:scale-110"
        />
      </div>
      <span
        className="text-xs sm:text-sm font-normal text-center transition-colors duration-200 text-[var(--normal-color)] group-hover:text-[var(--hover-color)]"
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
