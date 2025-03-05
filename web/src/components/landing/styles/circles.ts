import styled from "styled-components";
import { spiralAnimation, colorChange } from "./animations";

// Types for the props used by the circle components
interface CircleProps {
  $diameter?: string;
  $top?: string;
  $left?: string;
  $color?: string;
}

interface SpiralCircleProps extends CircleProps {
  $initialAngle: number;
  $twist: string;
  $finalColor: string;
}

export const Circle = styled.div<CircleProps>`
  width: ${({ $diameter }) => ($diameter ? $diameter : "50px")};
  height: ${({ $diameter }) => ($diameter ? $diameter : "50px")};
  border-radius: 50%;
  position: absolute;
  top: ${({ $top }) => ($top ? $top : "0px")};
  left: ${({ $left }) => ($left ? $left : "0px")};
  background-color: ${({ $color }) => ($color ? $color : "#fff")};
  z-index: 10;
`;

export const SpiralCircle = styled(Circle)<SpiralCircleProps>`
  animation: ${({ $initialAngle, $twist }) =>
        spiralAnimation($initialAngle, $twist)}
      75s 0s ease-in-out both alternate infinite,
    ${({ $color: initialColor, $finalColor }) =>
        colorChange(initialColor || "#ffffff80", $finalColor)}
      75s 0s ease-in-out both infinite;
`;
