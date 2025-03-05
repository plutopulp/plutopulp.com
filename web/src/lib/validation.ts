/**
 * Validation utility functions and regexes
 */

export const validationPatterns = {
  // Unicode-aware name regex that supports international characters
  // Allows letters from any language, spaces, hyphens, apostrophes, and some special characters
  name: /^[\p{L}\p{M}'\-\s.]+$/u,

  // Comprehensive email validation regex
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const validationRules = {
  name: {
    required: "Name is required",
    minLength: {
      value: 2,
      message: "Name must be at least 2 characters",
    },
    maxLength: {
      value: 50,
      message: "Name must be less than 50 characters",
    },
    pattern: {
      value: validationPatterns.name,
      message: "Please enter a valid name",
    },
  },

  email: {
    required: "Email is required",
    pattern: {
      value: validationPatterns.email,
      message: "Please enter a valid email address",
    },
    maxLength: {
      value: 100,
      message: "Email must be less than 100 characters",
    },
  },

  subject: {
    required: "Subject is required",
    minLength: {
      value: 3,
      message: "Subject must be at least 3 characters",
    },
    maxLength: {
      value: 100,
      message: "Subject must be less than 100 characters",
    },
  },

  message: {
    required: "Message is required",
    minLength: {
      value: 10,
      message: "Message must be at least 10 characters",
    },
    maxLength: {
      value: 1000,
      message: "Message must be less than 1000 characters",
    },
  },
};
