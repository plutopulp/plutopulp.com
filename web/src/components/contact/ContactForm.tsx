"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import { Button } from "@/components/ui/Button";
import { validationRules } from "@/lib/validation";
import { notify } from "@/lib/toast";
import { ContactFormInputs, SubmissionStatus } from "@/types/form";
import { colors } from "@/lib/colors";

export const ContactForm = () => {
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setStatus("submitting");

    // Create a loading toast that we'll update later
    const loadingToast = notify.loading("Sending your message...", {
      description: "Please wait while we process your request",
    });

    try {
      // For now, just log the form data
      console.log("Form data submitted:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Update loading toast to success
      loadingToast.success("Message sent successfully!", {
        description: "We'll get back to you soon.",
      });

      // Reset form after successful submission
      reset();
      setStatus("idle");
    } catch (error) {
      // Update loading toast to error
      loadingToast.error("Failed to send message", {
        description:
          error instanceof Error
            ? error.message
            : "There was a problem sending your message. Please try again.",
      });

      // Reset status but don't clear the form
      setStatus("idle");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl p-8 rounded-lg text-white"
      style={{
        background: `linear-gradient(to bottom, ${colors.form.gradient.from}, ${colors.form.gradient.to})`,
      }}
      noValidate
    >
      <FormInput
        id="name"
        label="Name"
        placeholder="Enter your name"
        required
        register={register("name", validationRules.name)}
        error={errors.name}
      />

      <FormInput
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email address"
        required
        register={register("email", validationRules.email)}
        error={errors.email}
      />

      <FormInput
        id="subject"
        label="Subject"
        placeholder="Enter the subject of your message"
        required
        register={register("subject", validationRules.subject)}
        error={errors.subject}
      />

      <FormTextArea
        id="message"
        label="Message"
        placeholder="Enter your message"
        required
        register={register("message", validationRules.message)}
        error={errors.message}
        rows={6}
      />

      <div className="flex justify-between items-center mt-6">
        <button
          type="button"
          onClick={() => reset()}
          className="text-sm text-gray-300 hover:text-white underline cursor-pointer"
        >
          Clear form
        </button>

        <Button
          type="submit"
          disabled={status === "submitting"}
          variant="outline"
          size="md"
        >
          {status === "submitting" ? "Sending..." : "Send"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
