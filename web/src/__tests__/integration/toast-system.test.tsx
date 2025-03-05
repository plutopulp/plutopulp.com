import React from "react";
import { render, screen, waitFor } from "../test-utils";
import { toast } from "sonner";
import { notify } from "@/lib/toast";

// Create a simple test component
const ToastSystemTester = () => {
  const handleSuccessToast = () => {
    notify.success("Success Toast", {
      description: "This is a success message",
    });
  };

  const handleLoadingToast = () => {
    const loadingToast = notify.loading("Loading...");

    // Simulate a successful operation
    setTimeout(() => {
      loadingToast.success("Operation Completed!");
    }, 100);
  };

  const handleErrorAfterLoading = () => {
    const loadingToast = notify.loading("Processing...");

    // Simulate a failed operation
    setTimeout(() => {
      loadingToast.error("Operation Failed!");
    }, 100);
  };

  const handleConfirmToast = () => {
    const confirmAction = jest.fn(() => {
      notify.success("Confirmed!");
    });

    const cancelAction = jest.fn(() => {
      notify.info("Cancelled!");
    });

    notify.confirm("Confirm Action", {
      actions: [
        {
          label: "Confirm",
          onClick: confirmAction,
          actionType: "primary",
        },
        {
          label: "Cancel",
          onClick: cancelAction,
          actionType: "secondary",
        },
      ],
      description: "Are you sure you want to proceed?",
    });

    return { confirmAction, cancelAction };
  };

  const handleKeepOpenToast = () => {
    notify.confirm("Advanced Action", {
      actions: [
        {
          label: "Process",
          onClick: () => {
            notify.loading("Processing...");
          },
          closeToast: true,
        },
        {
          label: "Keep Open",
          onClick: () => {
            // This action shouldn't close the toast
          },
          closeToast: false,
        },
      ],
      description: "Choose an action",
    });
  };

  return (
    <div>
      <button onClick={handleSuccessToast}>Show Success Toast</button>
      <button onClick={handleLoadingToast}>Show Loading → Success</button>
      <button onClick={handleErrorAfterLoading}>Show Loading → Error</button>
      <button onClick={handleConfirmToast}>Show Confirm Toast</button>
      <button onClick={handleKeepOpenToast}>Show Keep-Open Toast</button>
      <button onClick={notify.dismissAll}>Dismiss All</button>
    </div>
  );
};

// Mock Sonner's toast functions
jest.mock("sonner", () => {
  return {
    toast: {
      success: jest.fn(),
      error: jest.fn(),
      info: jest.fn(),
      warning: jest.fn(),
      loading: jest.fn(),
      dismiss: jest.fn(),
      custom: jest.fn(),
    },
    Toaster: jest
      .fn()
      .mockImplementation(() => <div data-testid="sonner-toaster" />),
  };
});

// Increase the default timeout for all tests in this file
jest.setTimeout(10000);

describe("Toast Notification System Integration", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("shows a success toast with proper configuration", async () => {
    const { user } = render(<ToastSystemTester />);

    await user.click(screen.getByText("Show Success Toast"));

    // Add a small delay to ensure the click event has been processed
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith("Success Toast", {
        description: "This is a success message",
        duration: 5000,
      });
    });
  });

  it.skip("handles loading toast that transitions to success", async () => {
    // Mock setTimeout to execute callbacks immediately
    jest.useFakeTimers();

    const mockLoadingToastReturn = { id: "test-loading-id" };
    (toast.loading as jest.Mock).mockReturnValue(mockLoadingToastReturn);

    const { user } = render(<ToastSystemTester />);

    await user.click(screen.getByText("Show Loading → Success"));

    // Verify loading toast was called
    expect(toast.loading).toHaveBeenCalledWith("Loading...", {
      id: expect.any(String),
      duration: Infinity,
    });

    // Fast-forward all timers to trigger the setTimeout callbacks
    jest.runAllTimers();

    // Now verify success toast was called
    expect(toast.success).toHaveBeenCalledWith("Operation Completed!", {
      id: expect.any(String),
      description: undefined,
    });

    jest.useRealTimers();
  }, 30000);

  it.skip("handles loading toast that transitions to error", async () => {
    // Mock setTimeout to execute callbacks immediately
    jest.useFakeTimers();

    const mockLoadingToastReturn = { id: "test-loading-id" };
    (toast.loading as jest.Mock).mockReturnValue(mockLoadingToastReturn);

    const { user } = render(<ToastSystemTester />);

    await user.click(screen.getByText("Show Loading → Error"));

    // Verify loading toast was called
    expect(toast.loading).toHaveBeenCalledWith("Processing...", {
      id: expect.any(String),
      duration: Infinity,
    });

    // Fast-forward all timers to trigger the setTimeout callbacks
    jest.runAllTimers();

    // Now verify error toast was called
    expect(toast.error).toHaveBeenCalledWith("Operation Failed!", {
      id: expect.any(String),
      description: undefined,
    });

    jest.useRealTimers();
  }, 30000);

  it.skip("can dismiss all toasts", async () => {
    const { user } = render(<ToastSystemTester />);

    await user.click(screen.getByText("Dismiss All"));

    // Verify dismiss was called
    expect(toast.dismiss).toHaveBeenCalled();
  }, 30000); // Increased timeout to 30 seconds
});
