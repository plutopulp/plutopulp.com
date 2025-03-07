import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using clsx and tailwind-merge
 * Useful for dynamic and conditional className props
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Determines the text color that would provide the best contrast against a background
 * @param bgColor The background color in hexadecimal format (e.g., '#ffffff')
 * @param darkColor The color to use on light backgrounds
 * @param lightColor The color to use on dark backgrounds
 * @returns Either darkColor or lightColor based on the background's luminance
 */
export function getContrastText(
  bgColor: string,
  darkColor = "text-gray-800",
  lightColor = "text-white"
): string {
  // Remove the hash character if it exists
  const hex = bgColor.replace("#", "");

  // Parse the RGB values
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Calculate the relative luminance using the formula from WCAG 2.0
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Return the appropriate text color based on luminance
  // Threshold of 0.5 is used to determine if the background is light or dark
  return luminance > 0.5 ? darkColor : lightColor;
}
