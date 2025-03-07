"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/types/ui";
import { colors } from "@/lib/colors";

const buttonSizes = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-base",
  lg: "py-3 px-6 text-lg",
};

// Define TypeScript type for button styles
interface ButtonStyle {
  bg: string;
  hoverBg: string;
  text: string;
  border: string;
  hoverText?: string;
}

// Button style configurations by variant
const buttonStyles: Record<string, ButtonStyle> = {
  primary: {
    bg: colors.button.primary.bg,
    hoverBg: colors.button.primary.hover,
    text: colors.text.inverted,
    border: "transparent",
  },
  secondary: {
    bg: colors.button.secondary.bg,
    hoverBg: colors.button.secondary.hover,
    text: colors.button.secondary.text,
    border: "transparent",
  },
  outline: {
    bg: "transparent",
    hoverBg: colors.button.outline.hover_bg,
    text: colors.button.outline.text,
    hoverText: colors.button.outline.hover_text,
    border: colors.button.outline.border,
  },
  ghost: {
    bg: "transparent",
    hoverBg: colors.button.ghost.hover,
    text: colors.button.ghost.text,
    border: "transparent",
  },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      type = "button",
      disabled = false,
      leftIcon,
      rightIcon,
      onClick,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const styles = buttonStyles[variant];
    const sizeClassName = buttonSizes[size];

    const baseClassName = cn(
      // Base button styles
      "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 ease-in-out cursor-pointer",
      // Handle disabled state
      disabled
        ? "opacity-50 cursor-not-allowed"
        : "hover:shadow-md active:transform active:scale-95",
      // Size specific styles
      sizeClassName,
      className
    );

    const buttonStyle = {
      backgroundColor: isHovered ? styles.hoverBg : styles.bg,
      color: isHovered && styles.hoverText ? styles.hoverText : styles.text,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: styles.border,
    };

    return (
      <button
        ref={ref}
        className={baseClassName}
        type={type}
        style={buttonStyle}
        disabled={disabled}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
