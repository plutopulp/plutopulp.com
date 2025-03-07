/**
 * Application color palette
 * Centralized color definitions for consistency across the application
 */

// Base colors - raw color values without semantic meaning
export const palette = {
  // Blues
  blue: {
    lighter: "#6AA7BF",
    light: "#5893AB",
    medium: "#47768D",
    dark: "#345667",
    darkest: "#257795", // Backend color
  },

  // Purples
  purple: {
    light: "#a3a3ff",
    medium: "#4C4CD5", // DevOps color
    dark: "#2f303a",
  },

  // Magentas
  magenta: {
    DEFAULT: "#AC2CAC", // Frontend color
  },

  // Orange
  orange: {
    DEFAULT: "#E08A3A", // Other color
  },

  // Grays
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },

  // Other basic colors
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
};

// Semantic color assignments - colors with meaning in the application
export const colors = {
  // Primary brand colors
  primary: {
    light: palette.blue.lighter,
    DEFAULT: palette.blue.light,
    dark: palette.blue.medium,
    darkest: palette.blue.dark,
  },

  // Secondary brand colors
  secondary: {
    light: palette.purple.light,
    DEFAULT: palette.purple.medium,
    dark: palette.purple.dark,
  },

  // Accent colors
  accent: {
    DEFAULT: palette.magenta.DEFAULT,
  },

  // Gray scale
  gray: palette.gray,

  // Text colors
  text: {
    primary: palette.gray[900],
    secondary: palette.gray[500],
    tertiary: palette.gray[400],
    inverted: palette.white,
    accent: palette.blue.light,
    purple: palette.purple.light,
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
    light: palette.white,
    light_gray: "#F2F6F8", // Light blue-gray background for sections
    dark: palette.gray[900],
    darker: palette.purple.dark, // Dark bluish/purplish background
  },

  // Button colors
  button: {
    primary: {
      bg: palette.blue.light,
      text: palette.white,
      hover: palette.blue.medium,
      border: palette.blue.light,
    },
    secondary: {
      bg: palette.gray[100],
      text: palette.gray[800],
      hover: palette.gray[200],
    },
    outline: {
      bg: palette.transparent,
      text: palette.blue.light,
      hover_bg: palette.blue.light,
      hover_text: "#EEF5F8", // Light blue-white
      border: palette.blue.light,
    },
    ghost: {
      bg: palette.transparent,
      text: palette.gray[800],
      hover: palette.gray[100],
    },
  },

  // Form colors
  form: {
    gradient: {
      from: `${palette.blue.light}99`, // 60% opacity
      to: `${palette.magenta.DEFAULT}99`, // 60% opacity
    },
  },

  // Spiral circles animation colors
  spiral: {
    magenta: palette.magenta.DEFAULT,
    blue: palette.blue.darkest,
    purple: palette.purple.medium,
    circleBase: "rgba(255, 255, 255, 0.5)", // Semi-transparent white
  },

  // Section background colors
  sections: {
    hero: palette.purple.dark,
    about: "#F2F6F8", // Light blue-gray
    skills: palette.white,
    projects: "#F2F6F8", // Light blue-gray
    contact: palette.purple.dark,
  },

  // Skill category colors
  skills: {
    backend: palette.blue.darkest, // #257795
    frontend: palette.magenta.DEFAULT, // #AC2CAC
    devops: palette.purple.medium, // #4C4CD5
    other: palette.orange.DEFAULT, // #E08A3A
  },
};
