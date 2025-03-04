/**
 * Application color palette
 * Centralized color definitions for consistency across the application
 */

// Primary brand colors
export const colors = {
  // Primary teal/blue colors
  primary: {
    light: "#6AA7BF", // Lighter shade for accents
    DEFAULT: "#5893AB", // Main brand color - used for buttons
    dark: "#47768D", // Darker shade for hover states
    darkest: "#345667", // Even darker for active states or text
  },

  // Gray scale
  gray: {
    lightest: "#F9FAFB",
    light: "#F3F4F6",
    DEFAULT: "#E5E7EB",
    medium: "#9CA3AF",
    dark: "#4B5563",
    darkest: "#1F2937",
  },

  // Text colors
  text: {
    primary: "#171717",
    secondary: "#6B7280",
    inverted: "#FFFFFF",
  },

  // Functional colors
  state: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
  },

  // Background colors
  background: {
    light: "#FFFFFF",
    dark: "#0A0A0A",
  },
};
