"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { notify, ActionType } from "@/lib/toast";
import ToastActions from "@/components/ui/ToastActions";

export default function ComponentsPage() {
  // State for form clearing example
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
  });

  // Function to demonstrate a loading toast that succeeds
  const showLoadingToast = () => {
    const loadingToast = notify.loading("Processing your request...", {
      description: "This might take a few seconds",
    });

    // After 2 seconds, change to success
    setTimeout(() => {
      loadingToast.success("Operation completed!", {
        description: "Your request was successful",
      });
    }, 2000);
  };

  // Function to demonstrate a loading toast that fails
  const showLoadingErrorToast = () => {
    const loadingToast = notify.loading("Processing your request...", {
      description: "This might take a few seconds",
    });

    // After 2 seconds, change to error
    setTimeout(() => {
      loadingToast.error("Operation failed", {
        description: "There was an error processing your request",
      });
    }, 2000);
  };

  // Function to demonstrate a confirmation toast with action buttons
  const showConfirmToast = () => {
    const handleConfirm = () => {
      notify.success("Action confirmed", {
        description: "You confirmed the action",
      });
      // No need to call notify.dismissAll() - handled automatically
    };

    const handleCancel = () => {
      notify.info("Action cancelled", {
        description: "You cancelled the action",
      });
      // No need to call notify.dismissAll() - handled automatically
    };

    // Define actions only once
    const actions = [
      {
        label: "Confirm",
        onClick: handleConfirm,
        actionType: "primary" as ActionType,
        // Will automatically close the toast (default behavior)
      },
      {
        label: "Cancel",
        onClick: handleCancel,
        actionType: "secondary" as ActionType,
        // Will automatically close the toast (default behavior)
      },
    ];

    notify.confirm("Confirm Action", {
      actions: actions,
      description: (
        <ToastActions
          description="Are you sure you want to proceed with this action?"
          actions={actions}
        />
      ),
    });
  };

  // Function to demonstrate form clearing confirmation
  const clearForm = () => {
    const handleClear = () => {
      setFormData({ name: "", email: "" });
      notify.success("Form cleared", {
        description: "All form data has been cleared",
      });
      // No need to call notify.dismissAll() - handled automatically
    };

    const handleCancel = () => {
      // No need to call notify.dismissAll() - handled automatically
    };

    // Define actions only once
    const actions = [
      {
        label: "Yes, Clear",
        onClick: handleClear,
        actionType: "danger" as ActionType,
        // Will automatically close the toast (default behavior)
      },
      {
        label: "Cancel",
        onClick: handleCancel,
        actionType: "secondary" as ActionType,
        // Will automatically close the toast (default behavior)
      },
    ];

    notify.confirm("Clear Form", {
      actions: actions,
      description: (
        <ToastActions
          description="Are you sure you want to clear all form data? This action cannot be undone."
          actions={actions}
        />
      ),
    });
  };

  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-8">Component Library</h1>

      {/* Toast Notifications Section */}
      <section className="mb-16 p-6 border rounded-lg">
        <h2 className="text-xl font-bold mb-6">Toast Notifications</h2>
        <p className="mb-4">
          Click on any button below to test different types of toast
          notifications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h3 className="font-semibold mb-2">Basic Toast Types</h3>
            <div className="space-y-2">
              <Button
                onClick={() =>
                  notify.success("Success!", {
                    description: "Operation completed successfully",
                  })
                }
              >
                Success Toast
              </Button>
              <Button
                onClick={() =>
                  notify.error("Error!", {
                    description: "Something went wrong",
                  })
                }
                variant="outline"
                className="border-red-500 text-red-500"
              >
                Error Toast
              </Button>
              <Button
                onClick={() =>
                  notify.info("Information", {
                    description: "Here's some information you should know",
                  })
                }
                variant="outline"
              >
                Info Toast
              </Button>
              <Button
                onClick={() =>
                  notify.warning("Warning", {
                    description: "Be careful with this action",
                  })
                }
                variant="outline"
                className="border-amber-500 text-amber-500"
              >
                Warning Toast
              </Button>
            </div>
          </div>

          <div className="p-4 border rounded">
            <h3 className="font-semibold mb-2">Loading and Progress</h3>
            <div className="space-y-2">
              <Button onClick={showLoadingToast}>
                Loading → Success Toast
              </Button>
              <Button
                onClick={showLoadingErrorToast}
                variant="outline"
                className="border-red-500 text-red-500"
              >
                Loading → Error Toast
              </Button>
            </div>
          </div>

          <div className="p-4 border rounded">
            <h3 className="font-semibold mb-2">Toast with Actions</h3>
            <div className="space-y-2">
              <Button onClick={showConfirmToast} variant="outline">
                Confirmation Toast
              </Button>
              <Button
                onClick={clearForm}
                variant="outline"
                className="border-red-500 text-red-500"
              >
                Clear Form Confirmation
              </Button>
            </div>
          </div>

          <div className="p-4 border rounded">
            <h3 className="font-semibold mb-2">Advanced Toast Examples</h3>
            <div className="space-y-2">
              <Button
                onClick={() => {
                  const actions = [
                    {
                      label: "Process",
                      onClick: () => {
                        // Start a long operation
                        const operationToast = notify.loading("Processing...", {
                          description:
                            "Your request is being processed. Please wait...",
                        });

                        // Simulate a long operation
                        setTimeout(() => {
                          operationToast.success("Operation completed!", {
                            description:
                              "Your request was processed successfully.",
                          });
                        }, 3000);
                      },
                      actionType: "primary" as ActionType,
                      closeToast: true, // Explicitly set to close the confirmation toast
                    },
                    {
                      label: "Keep Toast Open",
                      onClick: () => {
                        // This action doesn't close the toast
                        const loadingIndicator = document.createElement("span");
                        loadingIndicator.textContent = " Processing...";
                        loadingIndicator.className =
                          "ml-2 text-sm text-gray-500 animate-pulse";

                        // Add loading indicator to button (simulated here)
                        setTimeout(() => {
                          notify.info("Toast still open", {
                            description:
                              "This toast remains open while processing. Click the X to close.",
                          });
                        }, 800);
                      },
                      actionType: "secondary" as ActionType,
                      closeToast: false, // Explicitly set to NOT close the toast
                    },
                  ];

                  notify.confirm("Advanced Example", {
                    actions: actions,
                    description: (
                      <ToastActions
                        description="This example shows different closeToast behaviors."
                        actions={actions}
                      />
                    ),
                  });
                }}
                variant="outline"
              >
                Advanced Toast Behavior
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 border rounded">
          <h3 className="font-semibold mb-4">Form Clearing Example</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                onClick={clearForm}
                variant="outline"
                className="border-red-500 text-red-500"
              >
                Clear Form
              </Button>
              <Button
                type="button"
                onClick={() =>
                  notify.success("Form Submitted", {
                    description: "Form data has been submitted successfully",
                  })
                }
              >
                Submit
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-8 p-4 border rounded">
          <h3 className="font-semibold mb-2">Utility Controls</h3>
          <div className="space-y-2">
            <Button onClick={() => notify.dismissAll()} variant="secondary">
              Dismiss All Toasts
            </Button>
          </div>
        </div>
      </section>

      <h1 className="text-2xl font-bold mb-8">Button Component</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Button Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary" size="sm">
            Small Button
          </Button>
          <Button variant="primary" size="md">
            Medium Button
          </Button>
          <Button variant="primary" size="lg">
            Large Button
          </Button>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="primary"
            rightIcon={<ArrowRightIcon className="w-5 h-5" />}
          >
            Learn More
          </Button>
          <Button
            variant="secondary"
            rightIcon={<ChevronDownIcon className="w-5 h-5" />}
          >
            Check Out My Skills
          </Button>
          <Button
            variant="outline"
            rightIcon={<ArrowRightIcon className="w-5 h-5" />}
          >
            View Projects
          </Button>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Button as Links</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" href="/portfolio">
            Portfolio
          </Button>
          <Button
            variant="outline"
            href="/about"
            rightIcon={<ArrowRightIcon className="w-5 h-5" />}
          >
            About Me
          </Button>
        </div>
      </section>

      <section className="p-10 bg-gray-100 rounded-lg mb-10">
        <h2 className="text-xl font-semibold mb-4">Learn More Button</h2>
        <div className="flex justify-center">
          <Button variant="learn-more">Learn More</Button>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Color System</h2>
        <p className="mb-4">
          Button colors are defined in{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">
            src/lib/colors.ts
          </code>
          for consistent use across the application.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold mb-2">Primary Colors</h3>
            <div className="flex gap-2 mb-2">
              <div className="w-12 h-12 rounded bg-[#6AA7BF]"></div>
              <div className="w-12 h-12 rounded bg-[#5893AB]"></div>
              <div className="w-12 h-12 rounded bg-[#47768D]"></div>
              <div className="w-12 h-12 rounded bg-[#345667]"></div>
            </div>
            <div className="text-sm text-gray-500">
              Light / Default / Dark / Darkest
            </div>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold mb-2">Gray Scale</h3>
            <div className="flex gap-2 mb-2">
              <div className="w-12 h-12 rounded bg-[#F9FAFB] border"></div>
              <div className="w-12 h-12 rounded bg-[#F3F4F6]"></div>
              <div className="w-12 h-12 rounded bg-[#E5E7EB]"></div>
              <div className="w-12 h-12 rounded bg-[#1F2937]"></div>
            </div>
            <div className="text-sm text-gray-500">
              Lightest / Light / Default / Darkest
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
