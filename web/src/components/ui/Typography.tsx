import React from "react";
import { cn } from "@/lib/utils";
import {
  TypographyProps,
  TypographyVariant,
  SimpleTypographyProps,
} from "@/types/ui";

/**
 * Typography component for consistent text styling throughout the application
 */
export const Typography = ({
  children,
  variant,
  className = "",
  color,
  as,
  style,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  // Base styles for each variant
  const variantClasses: Record<TypographyVariant, string> = {
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
  const defaultElements: Record<TypographyVariant, React.ElementType> = {
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
  const mergedStyles = color ? { ...style, color } : style;

  return (
    <Component className={classes} style={mergedStyles} {...props}>
      {children}
    </Component>
  );
};

export function Heading1({
  children,
  className,
  style,
}: SimpleTypographyProps) {
  return (
    <Typography variant="h1" className={className} style={style}>
      {children}
    </Typography>
  );
}

export function Heading2({
  children,
  className,
  style,
}: SimpleTypographyProps) {
  return (
    <Typography variant="h2" className={className} style={style}>
      {children}
    </Typography>
  );
}

export function Heading3({
  children,
  className,
  style,
}: SimpleTypographyProps) {
  return (
    <Typography variant="h3" className={className} style={style}>
      {children}
    </Typography>
  );
}

export function Paragraph({
  children,
  className,
  style,
}: SimpleTypographyProps) {
  return (
    <Typography variant="body" className={className} style={style}>
      {children}
    </Typography>
  );
}

export function Caption({ children, className, style }: SimpleTypographyProps) {
  return (
    <Typography variant="caption" className={className} style={style}>
      {children}
    </Typography>
  );
}

export function TechStack({
  children,
  className,
  style,
}: SimpleTypographyProps) {
  return (
    <Typography
      variant="body"
      className={cn("font-medium", className)}
      style={style}
    >
      {children}
    </Typography>
  );
}
