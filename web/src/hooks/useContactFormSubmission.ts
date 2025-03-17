import { useState } from "react";
import emailjs from "@emailjs/browser";
import { notify } from "@/lib/toast";
import { ContactFormInputs, SubmissionStatus } from "@/types/form";
import { UseFormReset } from "react-hook-form";

// EmailJS configuration constants from environment variables
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";

interface UseContactFormSubmissionProps {
  emailjsInitialized: boolean;
  configError: string | null;
  reset: UseFormReset<ContactFormInputs>;
}

export const useContactFormSubmission = ({
  emailjsInitialized,
  configError,
  reset,
}: UseContactFormSubmissionProps) => {
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const submitForm = async (data: ContactFormInputs) => {
    // Check configuration and initialization
    if (configError) {
      notify.error("Configuration Error", {
        description: configError,
      });
      return;
    }

    if (!emailjsInitialized) {
      notify.error("Service not ready", {
        description:
          "Email service is not initialized yet. Please try again later.",
      });
      return;
    }

    setStatus("submitting");

    // Create a loading toast that we'll update later
    const loadingToast = notify.loading("Sending your message...", {
      description: "Please wait while we process your request",
    });

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        subject: data.subject,
        message: data.message,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        // Update loading toast to success
        loadingToast.success("Message sent successfully!", {
          description: "I'll get back to you soon.",
        });

        // Reset form after successful submission
        reset();
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      handleSubmissionError(error, loadingToast);
    } finally {
      // Always reset status when done
      setStatus("idle");
    }
  };

  return { submitForm, status };
};

// Helper function to handle errors
function handleSubmissionError(
  error: unknown,
  loadingToast: {
    error: (title: string, options: { description: string }) => void;
  }
) {
  // Determine appropriate error message
  let errorMessage =
    "There was a problem sending your message. Please try again.";

  if (error instanceof Error) {
    // Network errors and other specific error messages
    errorMessage = error.message;
  } else if (typeof error === "object" && error !== null) {
    // Handle case where EmailJS returns custom error object
    errorMessage = String(error);
  }

  // Rate limiting detection (common EmailJS error)
  if (
    errorMessage.toLowerCase().includes("rate limit") ||
    errorMessage.toLowerCase().includes("too many requests")
  ) {
    errorMessage = "Too many messages sent. Please try again later.";
  }

  // Update loading toast to error
  loadingToast.error("Failed to send message", {
    description: errorMessage,
  });
}
