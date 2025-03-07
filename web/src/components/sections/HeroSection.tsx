"use client";

import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SpiralCircles from "@/components/landing/SpiralCircles";
import { HeroHeader } from "@/components/landing/HeroHeader";
import { ActionButton } from "@/components/landing/ActionButton";
import { colors } from "@/lib/colors";

const HeroSection: React.FC = () => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  // Activate animations after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationActive(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen">
      <div
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundColor: colors.sections.hero }}
      >
        {/* SpiralCircles background */}
        <div className="absolute inset-0 z-0">
          <SpiralCircles />
        </div>

        {/* Header content with animations */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full max-w-2xl px-4">
          <HeroHeader
            isAnimationActive={isAnimationActive}
            name="Yvan"
            subtitle="a fullstack developer"
          />

          <ActionButton
            href="#about"
            isAnimationActive={isAnimationActive}
            icon={<ArrowRightIcon className="w-5 h-5" />}
          >
            About Me
          </ActionButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
