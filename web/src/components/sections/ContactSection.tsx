"use client";

import React from "react";
import SectionLayout from "@/components/layout/SectionLayout";
import ContactForm from "@/components/contact/ContactForm";
import { colors } from "@/lib/colors";
import { SectionProps } from "./types";

const ContactSectionWrapper: React.FC<SectionProps> = ({ sectionRef }) => {
  return (
    <SectionLayout
      id="contact"
      backgroundColor={colors.sections.contact}
      title="Contact"
      fullHeight={true}
      sectionRef={sectionRef}
    >
      <div className="flex justify-center">
        <ContactForm />
      </div>
    </SectionLayout>
  );
};

export default ContactSectionWrapper;
