/**
 * Toast notification utility
 * Provides a simple interface to the sonner toast library with pre-configured options
 */

import { toast } from "sonner";
import { ReactNode } from "react";

/**
 * Action types that map to our button variants
 */
export type ActionType =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning";

/**
 * Interface for toast action buttons
 */
export interface ToastAction {
  label: string;
  onClick: () => void;
  actionType?: ActionType;
  className?: string;
  /**
   * Whether to automatically close the toast when this action is clicked
   * Defaults to true
   */
  closeToast?: boolean;
}

/**
 * Options for all toast types
 */
export interface ToastOptions {
  duration?: number;
  description?: string | ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: ReactNode;
  id?: string | number;
}

/**
 * Interface for confirmation toast options with required actions
 */
export interface ConfirmToastOptions extends ToastOptions {
  actions: ToastAction[];
}

/**
 * Display a success toast notification
 */
export function successToast(title: string, options?: ToastOptions) {
  const { description, ...rest } = options || {};

  return toast.success(title, {
    description,
    duration: 5000,
    ...rest,
  });
}

/**
 * Display an error toast notification
 */
export function errorToast(title: string, options?: ToastOptions) {
  const { description, ...rest } = options || {};

  return toast.error(title, {
    description,
    duration: 7000, // Errors stay longer
    ...rest,
  });
}

/**
 * Display an informational toast notification
 */
export function infoToast(title: string, options?: ToastOptions) {
  const { description, ...rest } = options || {};

  return toast.info(title, {
    description,
    duration: 5000,
    ...rest,
  });
}

/**
 * Display a warning toast notification
 */
export function warningToast(title: string, options?: ToastOptions) {
  const { description, ...rest } = options || {};

  return toast.warning(title, {
    description,
    duration: 6000, // Warnings stay a bit longer
    ...rest,
  });
}

/**
 * Display a confirmation toast with actions (to be rendered in a custom component)
 */
export function confirmToast(title: string, options: ConfirmToastOptions) {
  const { description, ...rest } = options;

  // Generate a unique ID for this toast
  const id = rest.id || Date.now().toString();

  // For confirmation toasts, we use a custom component that will be rendered in components/ui/ToastActions.tsx
  return toast(title, {
    description,
    duration: 0, // Confirmation toasts don't auto-dismiss
    id,
    ...rest,
  });
}

/**
 * Display a loading toast notification
 * You can use the returned ID to update this toast later
 */
export function loadingToast(title: string, options?: ToastOptions) {
  const { description, ...rest } = options || {};
  const id = rest.id || Date.now().toString();

  toast.loading(title, {
    description,
    id,
    duration: Infinity, // Loading toasts don't auto-dismiss
    ...rest,
  });

  return {
    id,
    // Update the toast to a success state
    success: (newTitle: string, newOptions?: ToastOptions) => {
      return toast.success(newTitle, {
        id,
        description: newOptions?.description,
        ...newOptions,
      });
    },
    // Update the toast to an error state
    error: (newTitle: string, newOptions?: ToastOptions) => {
      return toast.error(newTitle, {
        id,
        description: newOptions?.description,
        ...newOptions,
      });
    },
    // Dismiss the toast
    dismiss: () => {
      toast.dismiss(id);
    },
  };
}

/**
 * Dismiss a specific toast by ID
 */
export function dismissToast(id: string | number) {
  toast.dismiss(id);
}

/**
 * Dismiss all toasts
 */
export function dismissAllToasts() {
  toast.dismiss();
}

/**
 * Simple shorthand object for accessing toast methods
 */
export const notify = {
  success: successToast,
  error: errorToast,
  info: infoToast,
  warning: warningToast,
  loading: loadingToast,
  confirm: confirmToast,
  dismiss: dismissToast,
  dismissAll: dismissAllToasts,
};

/**
 * Testing helpers - only available in test environments
 * These are automatically tree-shaken in production builds
 */
if (process.env.NODE_ENV === "test") {
  Object.assign(notify, {
    /**
     * Mock all toast methods for testing
     */
    __mock: () => {
      const originalNotify = { ...notify };
      const mock = {
        success: jest.fn(),
        error: jest.fn(),
        info: jest.fn(),
        warning: jest.fn(),
        loading: jest.fn().mockReturnValue({
          success: jest.fn(),
          error: jest.fn(),
          dismiss: jest.fn(),
          id: "mock-loading-id",
        }),
        confirm: jest.fn(),
        dismiss: jest.fn(),
        dismissAll: jest.fn(),
      };

      // Replace all methods with mocks
      Object.keys(mock).forEach((key) => {
        // @ts-expect-error - Dynamic mocking for tests
        notify[key] = mock[key];
      });

      return {
        // Restore original methods
        restore: () => {
          Object.keys(originalNotify).forEach((key) => {
            // @ts-expect-error - Dynamic restoration for tests
            notify[key] = originalNotify[key];
          });
        },
      };
    },
  });
}
