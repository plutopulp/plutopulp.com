"use client";

import React from "react";
import SectionLayout from "@/components/layout/SectionLayout";
import ContactForm from "@/components/contact/ContactForm";
import { colors } from "@/lib/colors";

const ContactSectionWrapper: React.FC = () => {
  return (
    <SectionLayout
      id="contact"
      backgroundColor={colors.sections.contact}
      title="Contact"
      fullHeight={true}
    >
      <div className="flex justify-center">
        <ContactForm />
      </div>
    </SectionLayout>
  );
};

export default ContactSectionWrapper;
