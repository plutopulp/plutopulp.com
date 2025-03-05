import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
// Remove ThemeProvider import that's causing issues
// import { ThemeProvider } from "next-themes";
import ToastProvider from "@/components/ui/ToastProvider";

// Mock ThemeProvider component
const MockThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

// Custom render function that includes providers
function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  const AllProviders = ({ children }: { children: React.ReactNode }) => (
    <MockThemeProvider>
      {children}
      <ToastProvider />
    </MockThemeProvider>
  );

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AllProviders, ...options }),
  };
}

// Re-export everything from testing-library
export * from "@testing-library/react";
export { screen, waitFor };

// Override render method
export { customRender as render };

// Add a dummy test to prevent the "Your test suite must contain at least one test" error
test("test-utils is not a test suite", () => {
  expect(true).toBe(true);
});
