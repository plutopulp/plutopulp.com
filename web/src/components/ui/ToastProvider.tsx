"use client";

import { Toaster, ToasterProps } from "sonner";
import { useTheme } from "next-themes";

/**
 * Toast provider component that wraps the application to provide toast notifications
 * with theme-aware styling
 */
export function ToastProvider({ ...props }: ToasterProps) {
  const { theme } = useTheme() || { theme: "system" };

  return (
    <Toaster
      theme={theme as "light" | "dark" | "system"}
      position="top-right"
      closeButton
      richColors
      expand
      duration={5000}
      {...props}
    />
  );
}

export default ToastProvider;
