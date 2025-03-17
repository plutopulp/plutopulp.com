"use client";

import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import { Button } from "@/components/ui/Button";
import { validationRules } from "@/lib/validation";
import { ContactFormInputs, SubmissionStatus } from "@/types/form";
import { colors } from "@/lib/colors";
import { useEmailJS } from "@/hooks/useEmailJS";
import { useContactFormSubmission } from "@/hooks/useContactFormSubmission";

export const ContactForm = () => {
  const { emailjsInitialized, configError } = useEmailJS();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>();

  const { submitForm, status } = useContactFormSubmission({
    emailjsInitialized,
    configError,
    reset,
  });

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="w-full p-8 rounded-lg text-white"
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

      <FormActions
        status={status}
        reset={reset}
        disabled={
          status === "submitting" || !emailjsInitialized || !!configError
        }
      />

      <FormStatusMessage
        emailjsInitialized={emailjsInitialized}
        configError={configError}
      />
    </form>
  );
};

// Component for form action buttons
interface FormActionsProps {
  status: SubmissionStatus;
  reset: () => void;
  disabled: boolean;
}

const FormActions = ({ status, reset, disabled }: FormActionsProps) => (
  <div className="flex justify-between items-center mt-6">
    <button
      type="button"
      onClick={() => reset()}
      className="text-sm text-gray-300 hover:text-white underline cursor-pointer"
      disabled={status === "submitting"}
    >
      Clear form
    </button>

    <Button type="submit" disabled={disabled} variant="outline" size="md">
      {status === "submitting" ? "Sending..." : "Send"}
    </Button>
  </div>
);

// Component for displaying status messages
interface FormStatusMessageProps {
  emailjsInitialized: boolean;
  configError: string | null;
}

const FormStatusMessage = ({
  emailjsInitialized,
  configError,
}: FormStatusMessageProps) => (
  <>
    {!emailjsInitialized && !configError && (
      <p className="text-yellow-300 text-xs mt-2 text-center">
        Email service is initializing...
      </p>
    )}

    {configError && (
      <p className="text-red-400 text-xs mt-2 text-center">{configError}</p>
    )}
  </>
);

export default ContactForm;
