import { keyframes } from "styled-components";

// Helper function to increment the angle
const getIncrementedAngle = (angle: number, step: number): number =>
  angle + step * 60;

/**
 * Creates a spiral animation with the given initial angle and twist amount
 * @param initialAngle The starting angle in degrees (0, 60, 120, etc.)
 * @param twist The twist amount as a string with units ("180deg", "360deg", etc.)
 */
export const spiralAnimation = (
  initialAngle: number,
  twist: string
) => keyframes`
  0% {transform: rotate(${initialAngle}deg) translate(45vmin) rotate(${initialAngle}deg);}
  16.66% {transform: rotate(${twist}) translate(0px) rotate(${twist});}
  33.33% {transform: rotate(${getIncrementedAngle(
    initialAngle,
    1
  )}deg) translate(-45vmin) rotate(${getIncrementedAngle(initialAngle, 1)}deg);}
  50% {transform: rotate(${twist}) translate(0px) rotate(${twist});}
  66.66% {transform: rotate(${getIncrementedAngle(
    initialAngle,
    2
  )}deg) translate(-45vmin) rotate(${getIncrementedAngle(initialAngle, 2)}deg);}
  83.33% {transform: rotate(${twist}) translate(0px) rotate(${twist});}
  100% {transform: rotate(${getIncrementedAngle(
    initialAngle,
    3
  )}deg) translate(-45vmin) rotate(${getIncrementedAngle(initialAngle, 3)}deg);}
`;

/**
 * Creates a color change animation between two colors
 * @param initialColor The initial color (usually semi-transparent white)
 * @param finalColor The final color to transition to
 */
export const colorChange = (
  initialColor: string,
  finalColor: string
) => keyframes`
  0% {background-color: ${finalColor}}
  16.66% {background-color: ${initialColor}}
  33.33% {background-color: ${finalColor}}
  50% {background-color: ${initialColor}}
  66.66% {background-color: ${finalColor}}
  83.33% {background-color: ${initialColor}}
  100% {background-color: ${finalColor}}
`;
