"use client";

import React from "react";
import type { ActionType, ToastAction } from "@/lib/toast";
import { Button } from "@/components/ui/Button";
import { notify } from "@/lib/toast";
import { ButtonVariant } from "@/types/ui";

// Maps action types to Button variants
const getButtonProps = (
  actionType: ActionType = "primary"
): {
  variant: ButtonVariant;
  className?: string;
} => {
  switch (actionType) {
    case "primary":
      return { variant: "primary" };
    case "secondary":
      return { variant: "secondary" };
    case "danger":
      return {
        variant: "outline",
        className: "border-red-500 text-red-500 hover:bg-red-50",
      };
    case "success":
      return {
        variant: "outline",
        className: "border-green-500 text-green-500 hover:bg-green-50",
      };
    case "warning":
      return {
        variant: "outline",
        className: "border-amber-500 text-amber-500 hover:bg-amber-50",
      };
    default:
      return { variant: "primary" };
  }
};

interface ToastActionsProps {
  actions: ToastAction[];
  description?: React.ReactNode;
  className?: string;
  /**
   * Optional toast ID to dismiss when actions with closeToast=true are clicked
   * If not provided, dismiss all toasts
   */
  toastId?: string | number;
}

/**
 * Component for rendering action buttons in toast notifications
 * Uses the application's Button component for consistency
 */
export default function ToastActions({
  actions,
  description,
  className = "",
  toastId,
}: ToastActionsProps) {
  // Wraps the action handler to handle auto-dismissal when specified
  const handleAction = (action: ToastAction) => {
    return () => {
      // Execute the original action
      action.onClick();

      // Auto-dismiss the toast if closeToast is true or undefined (default true)
      if (action.closeToast !== false) {
        if (toastId) {
          notify.dismiss(toastId);
        } else {
          notify.dismissAll();
        }
      }
    };
  };

  return (
    <div className={className}>
      {description && (
        <div className="mb-2 text-sm text-gray-600">{description}</div>
      )}
      <div className="flex gap-2 mt-2">
        {actions.map((action, index) => {
          const { variant, className } = getButtonProps(action.actionType);

          return (
            <Button
              key={index}
              onClick={handleAction(action)}
              variant={variant}
              size="sm"
              className={action.className || className}
            >
              {action.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
