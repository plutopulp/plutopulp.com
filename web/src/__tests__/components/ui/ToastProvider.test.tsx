import React from "react";
import { render } from "@testing-library/react";
import { useTheme } from "next-themes";
import { ToastProvider } from "@/components/ui/ToastProvider";
import { Toaster } from "sonner";

// Mock the dependencies
jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

jest.mock("sonner", () => ({
  // Use a simpler mock implementation that doesn't define unused parameters
  Toaster: jest
    .fn()
    .mockImplementation(() => <div data-testid="sonner-toaster" />),
}));

describe("ToastProvider Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Toaster component with light theme", () => {
    // Set up the mock return value for useTheme
    (useTheme as jest.Mock).mockReturnValue({ theme: "light" });

    render(<ToastProvider />);

    // Check if Toaster was called with the expected props
    expect(Toaster).toHaveBeenCalledWith(
      expect.objectContaining({
        theme: "light",
        position: "top-right",
        closeButton: true,
        richColors: true,
        expand: true,
        duration: 5000,
      }),
      undefined
    );
  });

  it("renders the Toaster component with dark theme", () => {
    // Set up the mock return value for useTheme
    (useTheme as jest.Mock).mockReturnValue({ theme: "dark" });

    render(<ToastProvider />);

    // Check if Toaster was called with the expected props
    expect(Toaster).toHaveBeenCalledWith(
      expect.objectContaining({
        theme: "dark",
        position: "top-right",
        closeButton: true,
        richColors: true,
        expand: true,
        duration: 5000,
      }),
      undefined
    );
  });

  it("defaults to system theme when useTheme returns undefined", () => {
    // Set up the mock return value for useTheme
    (useTheme as jest.Mock).mockReturnValue(undefined);

    render(<ToastProvider />);

    // Check if Toaster was called with the expected props
    expect(Toaster).toHaveBeenCalledWith(
      expect.objectContaining({
        theme: "system",
        position: "top-right",
        closeButton: true,
        richColors: true,
        expand: true,
        duration: 5000,
      }),
      undefined
    );
  });

  it("passes through custom props to Toaster", () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "light" });

    render(<ToastProvider position="bottom-center" duration={3000} />);

    // Check if custom props are passed through
    expect(Toaster).toHaveBeenCalledWith(
      expect.objectContaining({
        theme: "light",
        position: "bottom-center",
        closeButton: true,
        richColors: true,
        expand: true,
        duration: 3000,
      }),
      undefined
    );
  });
});
