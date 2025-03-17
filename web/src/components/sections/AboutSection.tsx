"use client";

import React, { useRef } from "react";
import SectionLayout from "@/components/layout/SectionLayout";
import AboutBio from "@/components/about/AboutBio";
import ProfileImage from "@/components/about/ProfileImage";
import NavigationButtons from "@/components/about/NavigationButtons";
import { colors } from "@/lib/colors";
import { SectionProps } from "./types";
import { useInView, motion } from "framer-motion";

const AboutSection: React.FC<SectionProps> = ({ sectionRef }: SectionProps) => {
  // Create separate refs for each motion element
  const bioRef = useRef(null);
  const imageRef = useRef(null);
  const buttonsRef = useRef(null);

  // Track in-view state for each element
  const isBioInView = useInView(bioRef, { once: true });
  const isImageInView = useInView(imageRef, { once: true });
  const isButtonsInView = useInView(buttonsRef, { once: true });

  return (
    <SectionLayout
      id="about"
      backgroundColor={colors.sections.about}
      title="About"
      fullHeight={true}
      sectionRef={sectionRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Text content */}
        <motion.div
          ref={bioRef}
          initial={{ opacity: 0, x: -200 }}
          animate={isBioInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="md:col-span-7"
        >
          <AboutBio bgColor={colors.sections.about} />
        </motion.div>

        {/* Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: 200 }}
          animate={
            isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="md:col-span-5"
        >
          <ProfileImage />
        </motion.div>
      </div>

      {/* Buttons */}
      <motion.div
        ref={buttonsRef}
        initial={{ opacity: 0 }}
        animate={isButtonsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <NavigationButtons />
      </motion.div>
    </SectionLayout>
  );
};

export default AboutSection;
