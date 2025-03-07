import { ReactNode } from "react";

/**
 * Common size options for UI components
 */
export type ComponentSize = "sm" | "md" | "lg" | "xl";

/**
 * Common button variants
 */
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

/**
 * Base props for all modal components
 */
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: ComponentSize;
}

/**
 * Common typography variants
 */
export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "body-sm"
  | "caption";

/**
 * Base props for typography components
 */
export interface TypographyProps {
  children: ReactNode;
  variant: TypographyVariant;
  className?: string;
  color?: string;
  as?: React.ElementType;
}

/**
 * Simplified typography props used by the convenience components
 */
export interface SimpleTypographyProps {
  children: ReactNode;
  className?: string;
}
