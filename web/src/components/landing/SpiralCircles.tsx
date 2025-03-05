"use client";

import React from "react";
import { colors } from "@/lib/colors";
import { SpiralCircle } from "./styles/circles";

/**
 * Configuration for a spiral circle animation
 */
interface SpiralCircleConfig {
  angle: number; // Initial angle in degrees
  color: string; // Initial color in hex format
}

/**
 * Defines the possible twist values for spiral animations
 * Represents the amount of rotation a circle will undergo during animation
 */
type Twist = "180deg" | "360deg" | "540deg" | "720deg" | "900deg" | "1080deg";

/**
 * All twist values used in the animations
 */
const TWISTS: Twist[] = [
  "180deg",
  "360deg",
  "540deg",
  "720deg",
  "900deg",
  "1080deg",
];

/**
 * Configuration with twist property
 */
interface SpiralCircleDynamicProps extends SpiralCircleConfig {
  twist: Twist;
}

/**
 * Initial states for spiral circles
 * Angles distributed evenly with alternating colors
 */
const INITIAL_STATES: SpiralCircleConfig[] = [
  { angle: 0, color: colors.spiral.magenta },
  { angle: 60, color: colors.spiral.blue },
  { angle: 120, color: colors.spiral.purple },
  { angle: 180, color: colors.spiral.magenta },
  { angle: 240, color: colors.spiral.blue },
  { angle: 300, color: colors.spiral.purple },
];

/**
 * All combinations of initial states and twists
 * Creates 36 unique configurations (6 angles × 6 twist values)
 */
const STATIC_SPIRAL_CIRCLE_PROPS: SpiralCircleDynamicProps[] = [];

INITIAL_STATES.forEach((state) => {
  TWISTS.forEach((twist) =>
    STATIC_SPIRAL_CIRCLE_PROPS.push({ ...state, twist })
  );
});

/**
 * Renders animated spiral circles in the center of the container
 * Each circle has unique animation properties based on angle and twist combinations
 */
const SpiralCircles = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    {STATIC_SPIRAL_CIRCLE_PROPS.map((prop, index) => (
      <SpiralCircle
        key={index}
        $initialAngle={prop.angle}
        $twist={prop.twist}
        $diameter="1.618vmin"
        $color={colors.spiral.circleBase}
        $finalColor={prop.color}
        $left="49.2%"
        $top="47%"
      />
    ))}
  </div>
);

export default SpiralCircles;
