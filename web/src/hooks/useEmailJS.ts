import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// EmailJS configuration constants from environment variables
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export const useEmailJS = () => {
  const [emailjsInitialized, setEmailjsInitialized] = useState(false);
  const [configError, setConfigError] = useState<string | null>(null);

  useEffect(() => {
    // Check if all required environment variables are set
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setConfigError(
        "Email service configuration is incomplete. Please check environment variables."
      );
      return;
    }

    // Initialize EmailJS
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      setEmailjsInitialized(true);
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error);
      setConfigError("Failed to initialize email service.");
    }
  }, []);

  return {
    emailjsInitialized,
    configError,
    serviceId: EMAILJS_SERVICE_ID,
    templateId: EMAILJS_TEMPLATE_ID,
  };
};
