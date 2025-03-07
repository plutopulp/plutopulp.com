import { Metadata } from "next";
import ContactSectionWrapper from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Pluto Pulp",
  description:
    "Get in touch with me for work inquiries, collaborations, or just to say hello.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactSectionWrapper />
    </main>
  );
}
