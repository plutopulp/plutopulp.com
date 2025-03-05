import React from "react";
import { screen } from "@testing-library/dom";

import { render } from "../test-utils";
import { toast as sonnerToast } from "sonner";
import { notify, ToastAction } from "@/lib/toast";

// Mock sonner's toast library
jest.mock("sonner", () => {
  const originalModule = jest.requireActual("sonner");

  return {
    __esModule: true,
    ...originalModule,
    toast: {
      success: jest.fn().mockReturnValue({ id: "success-id" }),
      error: jest.fn().mockReturnValue({ id: "error-id" }),
      info: jest.fn().mockReturnValue({ id: "info-id" }),
      warning: jest.fn().mockReturnValue({ id: "warning-id" }),
      loading: jest.fn().mockReturnValue({ id: "loading-id" }),
      dismiss: jest.fn(),
      custom: jest.fn().mockReturnValue({ id: "custom-id" }),
    },
    Toaster: jest
      .fn()
      .mockImplementation(() => <div data-testid="sonner-toaster" />),
  };
});

// Basic component to test the toast functions
const ToastTester = () => {
  const showSuccessToast = () =>
    notify.success("Success", { description: "Success description" });
  const showErrorToast = () =>
    notify.error("Error", { description: "Error description" });
  const showInfoToast = () =>
    notify.info("Info", { description: "Info description" });
  const showWarningToast = () =>
    notify.warning("Warning", { description: "Warning description" });
  const showLoadingToast = () =>
    notify.loading("Loading", { description: "Loading description" });

  // Actions for confirmation toast
  const actions: ToastAction[] = [
    {
      label: "Confirm",
      onClick: jest.fn(),
      actionType: "primary",
    },
    {
      label: "Cancel",
      onClick: jest.fn(),
      actionType: "secondary",
    },
  ];

  const showConfirmToast = () =>
    notify.confirm("Confirm", {
      actions,
      description: "Confirm description",
    });

  const dismissAllToasts = () => notify.dismissAll();

  return (
    <div>
      <button onClick={showSuccessToast}>Show Success</button>
      <button onClick={showErrorToast}>Show Error</button>
      <button onClick={showInfoToast}>Show Info</button>
      <button onClick={showWarningToast}>Show Warning</button>
      <button onClick={showLoadingToast}>Show Loading</button>
      <button onClick={showConfirmToast}>Show Confirm</button>
      <button onClick={dismissAllToasts}>Dismiss All</button>
    </div>
  );
};

describe("Toast Utility", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should show success toast with correct parameters", async () => {
    const { user } = render(<ToastTester />);
    await user.click(screen.getByText("Show Success"));

    expect(sonnerToast.success).toHaveBeenCalledWith("Success", {
      description: "Success description",
      duration: 5000,
    });
  });

  it("should show error toast with correct parameters", async () => {
    const { user } = render(<ToastTester />);
    await user.click(screen.getByText("Show Error"));

    expect(sonnerToast.error).toHaveBeenCalledWith("Error", {
      description: "Error description",
      duration: 7000, // Errors stay longer
    });
  });

  it("should show info toast with correct parameters", async () => {
    const { user } = render(<ToastTester />);
    await user.click(screen.getByText("Show Info"));

    expect(sonnerToast.info).toHaveBeenCalledWith("Info", {
      description: "Info description",
      duration: 5000,
    });
  });

  it("should show warning toast with correct parameters", async () => {
    const { user } = render(<ToastTester />);
    await user.click(screen.getByText("Show Warning"));

    expect(sonnerToast.warning).toHaveBeenCalledWith("Warning", {
      description: "Warning description",
      duration: 6000, // Warnings stay a bit longer
    });
  });

  it("should show loading toast with correct parameters", async () => {
    const { user } = render(<ToastTester />);
    await user.click(screen.getByText("Show Loading"));

    expect(sonnerToast.loading).toHaveBeenCalledWith("Loading", {
      description: "Loading description",
      id: expect.any(String),
      duration: Infinity, // Loading toasts don't auto-dismiss
    });
  });

  it("should be able to dismiss all toasts", async () => {
    const { user } = render(<ToastTester />);
    await user.click(screen.getByText("Dismiss All"));

    expect(sonnerToast.dismiss).toHaveBeenCalled();
  });

  it("should return loading toast with update methods", async () => {
    const loadingToast = notify.loading("Test Loading");

    expect(loadingToast).toHaveProperty("id");
    expect(loadingToast).toHaveProperty("success");
    expect(loadingToast).toHaveProperty("error");
    expect(loadingToast).toHaveProperty("dismiss");

    // Test the update methods
    loadingToast.success("Success update");
    expect(sonnerToast.success).toHaveBeenCalledWith("Success update", {
      id: expect.any(String),
      description: undefined,
    });

    loadingToast.error("Error update");
    expect(sonnerToast.error).toHaveBeenCalledWith("Error update", {
      id: expect.any(String),
      description: undefined,
    });

    loadingToast.dismiss();
    expect(sonnerToast.dismiss).toHaveBeenCalledWith(expect.any(String));
  });
});
