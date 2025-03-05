"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
// Note: Color values used in this component should match those in @/lib/colors.ts

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  rightIcon?: ReactNode;
}

/**
 * Button component with multiple variants and sizes
 *
 * Colors are hardcoded here but reference the values in lib/colors.ts
 * This is necessary because Tailwind needs static class strings at build time
 */
export const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  rightIcon,
  ...props
}: ButtonProps) => {
  // Base classes
  const baseClasses =
    "font-medium rounded-md transition-all duration-300 inline-flex items-center justify-center cursor-pointer";

  // Size classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Variant classes
  // Values match colors in lib/colors.ts
  const variantClasses = {
    // Using primary.DEFAULT (#5893AB) and primary.dark (#47768D)
    primary: "bg-[#5893AB] hover:bg-[#47768D] text-white",

    // Using gray.light (#F3F4F6), gray.DEFAULT (#E5E7EB), and gray.darkest (#1F2937)
    secondary: "bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#1F2937]",

    // Using primary.DEFAULT (#5893AB) and a very light tint of it
    outline:
      "bg-transparent border border-[#5893AB] text-[#5893AB] hover:bg-[#5893AB] hover:text-[#EEF5F8]",

    // Using gray.lightest (#F9FAFB) and gray.light (#F3F4F6)
    ghost: "bg-transparent hover:bg-[#F3F4F6] text-[#1F2937]",
  };

  // Combine classes
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={`${classes} group`}>
        <span>{children}</span>
        {rightIcon && (
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            {rightIcon}
          </span>
        )}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button className={`${classes} group`} {...props}>
      <span>{children}</span>
      {rightIcon && (
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
          {rightIcon}
        </span>
      )}
    </button>
  );
};
