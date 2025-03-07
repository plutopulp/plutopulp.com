"use client";

import React from "react";
import SectionLayout from "@/components/layout/SectionLayout";
import ContactForm from "@/components/contact/ContactForm";

const ContactSectionWrapper: React.FC = () => {
  return (
    <SectionLayout id="contact" backgroundColor="white" title="Contact">
      <div className="flex justify-center">
        <ContactForm />
      </div>
    </SectionLayout>
  );
};

export default ContactSectionWrapper;
