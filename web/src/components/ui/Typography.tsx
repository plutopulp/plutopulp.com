import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "body-sm"
  | "caption";

interface TypographyProps {
  children: ReactNode;
  variant: TypographyVariant;
  className?: string;
  color?: string;
  as?: React.ElementType;
}

/**
 * Typography component for consistent text styling throughout the application
 */
export const Typography = ({
  children,
  variant,
  className = "",
  color,
  as,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  // Base styles for each variant
  const variantClasses = {
    h1: "text-4xl md:text-5xl font-medium",
    h2: "text-2xl md:text-3xl font-medium",
    h3: "text-xl md:text-2xl font-medium",
    h4: "text-lg md:text-xl font-medium",
    h5: "text-base md:text-lg font-medium",
    body: "text-base",
    "body-sm": "text-sm",
    caption: "text-xs",
  };

  // Default HTML element for each variant
  const defaultElements = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    body: "p",
    "body-sm": "p",
    caption: "span",
  };

  const Component = as || defaultElements[variant];
  const classes = cn(variantClasses[variant], className);
  const styles = color ? { color } : {};

  return (
    <Component className={classes} style={styles} {...props}>
      {children}
    </Component>
  );
};
