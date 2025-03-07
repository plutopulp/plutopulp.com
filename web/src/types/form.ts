import { UseFormRegisterReturn, FieldError } from "react-hook-form";

/**
 * Base props for form input components
 */
export interface FormFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

/**
 * Props for text input components
 */
export interface FormInputProps extends FormFieldProps {
  type?: "text" | "email" | "password" | "tel" | "url" | "number";
}

/**
 * Props for textarea components
 */
export interface FormTextAreaProps extends FormFieldProps {
  rows?: number;
}

/**
 * Standard form submission statuses
 */
export type SubmissionStatus = "idle" | "submitting" | "success" | "error";

/**
 * Contact form input fields
 */
export interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}
