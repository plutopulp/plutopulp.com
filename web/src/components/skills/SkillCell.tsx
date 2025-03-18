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
 * Includes animation capabilities for staggered reveal and interactive effects
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
  const delay = 0.1 + index * 0.07; // Slightly faster sequence

  // Set the normal and hover color style using our shared utility
  const nameStyle = {
    "--normal-color": getCategoryColorWithOpacity(category, 0.8), // Increased opacity for dark background
    "--hover-color": getCategoryColorWithOpacity(category, 1),
    "--glow-color": getCategoryColorWithOpacity(category, 0.4), // Increased glow opacity for dark background
    "--icon-bg-color": getCategoryColorWithOpacity(category, 0.15), // Very subtle color for icon background
  };

  // Enhanced motion component props with constrained glow effect
  const motionProps = {
    className:
      "flex flex-col items-center justify-center p-3 sm:p-3 md:p-2 lg:p-4 group cursor-pointer no-underline relative rounded-lg transition-all duration-300 hover:shadow-lg isolate overflow-hidden w-full h-full",
    style: {
      background: "rgba(30, 30, 35, 0.3)", // Darker semi-transparent background
      backdropFilter: "blur(8px)",
      ...(nameStyle as React.CSSProperties),
    },
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: {
      duration: 0.5,
      delay,
      ease: [0.23, 1, 0.32, 1], // Cubic bezier for smoother animation
    },
    whileHover: {
      y: -3, // Reduced vertical movement
      boxShadow: `0 4px 12px -4px var(--glow-color)`, // Reduced shadow size
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
    whileTap: {
      scale: 0.98,
      boxShadow: `0 2px 8px -2px var(--glow-color)`, // Reduced shadow size
      y: -1,
    },
  };

  // Icon animation variants
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        delay: delay + 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1, // Slightly reduced scale to prevent overflow
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  // Content to render inside the container
  const content = (
    <>
      {/* Background glow effect - now separated into two parts */}
      {/* Cell background glow */}
      <div className="absolute inset-4 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-b from-[var(--glow-color)] to-transparent rounded-lg" />

      {/* Icon container with circular glow - reduced size at medium breakpoints */}
      <div className="w-11 h-11 sm:w-11 sm:h-11 md:w-9 md:h-9 lg:w-12 lg:h-12 flex items-center justify-center mb-2 md:mb-1 lg:mb-3 relative aspect-square">
        {/* Circular glow for icon specifically - contained within parent */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] aspect-square opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-[3px] md:blur-[2px] lg:blur-[4px]"
          style={{ backgroundColor: "var(--glow-color)" }}
        ></div>

        <motion.div
          className="w-full h-full flex items-center justify-center relative z-10"
          variants={iconVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover="hover"
        >
          {/* Consistent circular background for all icons */}
          <div
            className="absolute inset-[3px] rounded-full backdrop-blur-sm border border-gray-700/30 aspect-square"
            style={{ backgroundColor: "var(--icon-bg-color)" }}
          ></div>

          <Image
            src={`/icons/${icon}`}
            alt={`${name} icon`}
            width={40}
            height={40}
            style={{
              width: "50%",
              height: "50%",
              objectFit: "contain",
              position: "relative",
              zIndex: 1,
            }}
            className="drop-shadow-md"
          />
        </motion.div>
      </div>

      {/* Text container with more space for text */}
      <div className="min-h-[2rem] md:min-h-[1.75rem] lg:min-h-[2.25rem] flex items-center justify-center px-1">
        <span
          className={`text-xs md:text-[11px] lg:text-sm font-medium text-center transition-colors duration-200 relative z-10 text-[var(--normal-color)] group-hover:text-[var(--hover-color)] leading-tight 
            ${
              name.length > 10 && name.includes(" ")
                ? "skill-name-wrap"
                : "whitespace-nowrap"
            }`}
        >
          {name}
        </span>
      </div>
    </>
  );

  // If link is provided, render as a link
  if (link) {
    return (
      <div className="w-full aspect-square">
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          {...motionProps}
        >
          {content}
        </motion.a>
      </div>
    );
  }

  // Otherwise render as a div
  return (
    <div className="w-full aspect-square">
      <motion.div {...motionProps}>{content}</motion.div>
    </div>
  );
};

export default SkillCell;
