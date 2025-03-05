import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using clsx and tailwind-merge
 * Useful for dynamic and conditional className props
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
