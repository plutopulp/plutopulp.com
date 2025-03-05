import "@testing-library/jest-dom";

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      // Add other matchers as needed
    }
  }
}

// This needs to be an actual module
export {};
