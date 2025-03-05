import React from "react";
import { render } from "../test-utils";
import { notify } from "@/lib/toast";

// Mock Sonner's toast functions
jest.mock("sonner", () => ({
  toast: {
    custom: jest.fn().mockReturnValue("toast-id"),
    dismiss: jest.fn(),
  },
  Toaster: jest
    .fn()
    .mockImplementation(() => <div data-testid="sonner-toaster" />),
}));

// Mock the notify object for testing
jest.mock("@/lib/toast", () => ({
  notify: {
    dismiss: jest.fn(),
    dismissAll: jest.fn(),
    confirm: jest.fn(),
  },
}));

// Import the actual component after mocking
import ToastActions from "@/components/ui/ToastActions";

describe("Toast CloseToast Behavior", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should auto-close toast by default when action is clicked", () => {
    const mockActions = [
      {
        label: "Default Action",
        onClick: jest.fn(),
      },
    ];

    const { getByText } = render(<ToastActions actions={mockActions} />);

    // Click the action button
    getByText("Default Action").click();

    // Verify the action was called
    expect(mockActions[0].onClick).toHaveBeenCalledTimes(1);

    // Verify the toast was dismissed (default behavior)
    expect(notify.dismissAll).toHaveBeenCalledTimes(1);
  });

  it("should not close toast when closeToast is explicitly set to false", () => {
    const mockActions = [
      {
        label: "Keep Open Action",
        onClick: jest.fn(),
        closeToast: false,
      },
    ];

    const { getByText } = render(<ToastActions actions={mockActions} />);

    // Click the action button
    getByText("Keep Open Action").click();

    // Verify the action was called
    expect(mockActions[0].onClick).toHaveBeenCalledTimes(1);

    // Verify the toast was NOT dismissed
    expect(notify.dismissAll).not.toHaveBeenCalled();
    expect(notify.dismiss).not.toHaveBeenCalled();
  });

  it("should close toast when closeToast is explicitly set to true", () => {
    const mockActions = [
      {
        label: "Close Action",
        onClick: jest.fn(),
        closeToast: true,
      },
    ];

    const { getByText } = render(<ToastActions actions={mockActions} />);

    // Click the action button
    getByText("Close Action").click();

    // Verify the action was called
    expect(mockActions[0].onClick).toHaveBeenCalledTimes(1);

    // Verify the toast was dismissed
    expect(notify.dismissAll).toHaveBeenCalledTimes(1);
  });

  it("should dismiss specific toast when toastId is provided", () => {
    const mockActions = [
      {
        label: "Action",
        onClick: jest.fn(),
      },
    ];

    const testToastId = "test-toast-123";

    const { getByText } = render(
      <ToastActions actions={mockActions} toastId={testToastId} />
    );

    // Click the action button
    getByText("Action").click();

    // Verify the action was called
    expect(mockActions[0].onClick).toHaveBeenCalledTimes(1);

    // Verify the specific toast was dismissed
    expect(notify.dismiss).toHaveBeenCalledWith(testToastId);
    expect(notify.dismissAll).not.toHaveBeenCalled();
  });

  it("should handle mixed closeToast settings across multiple actions", () => {
    const mockActions = [
      {
        label: "Close Action",
        onClick: jest.fn(),
        closeToast: true,
      },
      {
        label: "Keep Open Action",
        onClick: jest.fn(),
        closeToast: false,
      },
    ];

    const { getByText } = render(<ToastActions actions={mockActions} />);

    // Click the "Keep Open" action
    getByText("Keep Open Action").click();

    // Verify the action was called
    expect(mockActions[1].onClick).toHaveBeenCalledTimes(1);

    // Verify the toast was NOT dismissed
    expect(notify.dismissAll).not.toHaveBeenCalled();

    // Reset mocks
    jest.clearAllMocks();

    // Click the "Close" action
    getByText("Close Action").click();

    // Verify the action was called
    expect(mockActions[0].onClick).toHaveBeenCalledTimes(1);

    // Verify the toast was dismissed
    expect(notify.dismissAll).toHaveBeenCalledTimes(1);
  });
});
