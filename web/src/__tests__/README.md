# Toast Notification System Testing

This directory contains tests for the toast notification system. The tests are organized into the following categories:

## Directory Structure

- `lib/`: Tests for the toast utility functions
- `components/ui/`: Tests for UI components like ToastActions and ToastProvider
- `integration/`: Integration tests that test the system as a whole
- `features/`: Tests for specific features like the closeToast behavior

## Test Categories

### Unit Tests

- `toast.test.tsx`: Tests the toast utility functions
- `ToastActions.test.tsx`: Tests the ToastActions component
- `ToastProvider.test.tsx`: Tests the ToastProvider component

### Integration Tests

- `toast-system.test.tsx`: Tests the entire toast notification system

### Feature Tests

- `closeToast-behavior.test.tsx`: Tests the automatic toast dismissal behavior

## Testing Approach

The testing approach focuses on functionality rather than styling. For each component, we test:

1. **Component Rendering**: Verify components render correctly
2. **Event Handling**: Test user interactions and event handlers
3. **State Management**: Test state changes and updates
4. **Prop Variations**: Test components with different prop values
5. **Edge Cases**: Test specific edge cases like closeToast=false

## Mock Strategy

We use Jest to mock dependencies:

- `sonner`: Mock the toast library functions
- `next-themes`: Mock the theme provider
- `@/lib/toast`: Mock the notify object for component tests

We also provide a helper in the toast utility (`notify.__mock()`) for easier mocking in tests.

## Running Tests

To run tests:

```bash
# Run all tests
yarn test

# Run tests with coverage
yarn test:coverage

# Run tests in watch mode
yarn test:watch

# Run specific tests
yarn test toast-system
```
