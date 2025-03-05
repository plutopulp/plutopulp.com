import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ToastActions from "@/components/ui/ToastActions";
import { notify, ToastAction } from "@/lib/toast";

// Mock the toast notification utility
jest.mock("@/lib/toast", () => {
  return {
    __esModule: true,
    ...jest.requireActual("@/lib/toast"),
    notify: {
      dismiss: jest.fn(),
      dismissAll: jest.fn(),
    },
  };
});

describe("ToastActions Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockActions: ToastAction[] = [
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

  it("renders action buttons correctly", () => {
    render(
      <ToastActions
        actions={mockActions}
        description="Are you sure you want to proceed?"
      />
    );

    // Check if description is rendered
    expect(
      screen.getByText("Are you sure you want to proceed?")
    ).toBeInTheDocument();

    // Check if buttons are rendered
    expect(screen.getByText("Confirm")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("calls the action handler when clicked", () => {
    render(<ToastActions actions={mockActions} />);

    // Click the confirm button
    fireEvent.click(screen.getByText("Confirm"));

    // Check if the onClick handler was called
    expect(mockActions[0].onClick).toHaveBeenCalledTimes(1);

    // Check if dismissAll was called (default behavior)
    expect(notify.dismissAll).toHaveBeenCalledTimes(1);
  });

  it("uses specific toast ID for dismissal when provided", () => {
    const toastId = "test-toast-id";

    render(<ToastActions actions={mockActions} toastId={toastId} />);

    // Click the confirm button
    fireEvent.click(screen.getByText("Confirm"));

    // Check if the specific dismiss was called with the right ID
    expect(notify.dismiss).toHaveBeenCalledWith(toastId);
    expect(notify.dismissAll).not.toHaveBeenCalled();
  });

  it("respects closeToast=false flag and does not dismiss toast", () => {
    const actionsWithCloseToastFlag: ToastAction[] = [
      {
        label: "Keep Open",
        onClick: jest.fn(),
        actionType: "primary",
        closeToast: false,
      },
      {
        label: "Close",
        onClick: jest.fn(),
        actionType: "secondary",
        closeToast: true,
      },
    ];

    render(<ToastActions actions={actionsWithCloseToastFlag} />);

    // Click the "Keep Open" button
    fireEvent.click(screen.getByText("Keep Open"));

    // Check that the action was called
    expect(actionsWithCloseToastFlag[0].onClick).toHaveBeenCalledTimes(1);

    // Check that dismiss was NOT called
    expect(notify.dismissAll).not.toHaveBeenCalled();
    expect(notify.dismiss).not.toHaveBeenCalled();

    // Click the "Close" button
    fireEvent.click(screen.getByText("Close"));

    // Check that the action was called
    expect(actionsWithCloseToastFlag[1].onClick).toHaveBeenCalledTimes(1);

    // Check that dismissAll was called
    expect(notify.dismissAll).toHaveBeenCalledTimes(1);
  });

  it("maps action types to button variants correctly", () => {
    const variedActions: ToastAction[] = [
      { label: "Primary", onClick: jest.fn(), actionType: "primary" },
      { label: "Secondary", onClick: jest.fn(), actionType: "secondary" },
      { label: "Danger", onClick: jest.fn(), actionType: "danger" },
      { label: "Success", onClick: jest.fn(), actionType: "success" },
      { label: "Warning", onClick: jest.fn(), actionType: "warning" },
    ];

    render(<ToastActions actions={variedActions} />);

    // Check if all buttons are rendered
    expect(screen.getByText("Primary")).toBeInTheDocument();
    expect(screen.getByText("Secondary")).toBeInTheDocument();
    expect(screen.getByText("Danger")).toBeInTheDocument();
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("Warning")).toBeInTheDocument();

    // We can't easily test the specific class names in a headless test environment
    // For that we would need a more complex visual testing solution
  });
});
