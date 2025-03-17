import { colors } from "./colors";
import { SkillGroupName } from "./skills";

/**
 * Gets the base color for a skill category
 */
export const getCategoryBaseColor = (category: SkillGroupName): string => {
  switch (category) {
    case "backend":
      return colors.skills.backend;
    case "frontend":
      return colors.skills.frontend;
    case "devops":
      return colors.skills.devops;
    case "other":
    default:
      return colors.skills.other;
  }
};

/**
 * Gets a color with a specific opacity
 * @param category The skill category
 * @param opacity Opacity value between 0 and 1
 * @returns Color with opacity applied as hex
 */
export const getCategoryColorWithOpacity = (
  category: SkillGroupName,
  opacity: number
): string => {
  const baseColor = getCategoryBaseColor(category);

  // If we want full opacity, just return the color
  if (opacity === 1) return baseColor;

  // Otherwise, add opacity value to the hex color
  return `${baseColor}${Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0")}`;
};
