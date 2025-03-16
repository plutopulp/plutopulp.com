"use client";

import React, { MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/types/ui";

const buttonSizes = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-base",
  lg: "py-3 px-6 text-lg",
};

// Map variants to Tailwind classes
const variantClasses = {
  primary: {
    base: "bg-[#5893AB] text-white border border-transparent",
    hover: "hover:bg-[#47768D] hover:text-white",
  },
  secondary: {
    base: "bg-gray-100 text-gray-800 border border-transparent",
    hover: "hover:bg-gray-200 hover:text-gray-800",
  },
  outline: {
    base: "bg-transparent text-[#5893AB] border border-[#5893AB]",
    hover: "hover:bg-[#5893AB] hover:text-[#EEF5F8]",
  },
  ghost: {
    base: "bg-transparent text-gray-800 border border-transparent",
    hover: "hover:bg-gray-100 hover:text-gray-800",
  },
};

// Extended ButtonProps to include href
interface ExtendedButtonProps extends Omit<ButtonProps, "onClick"> {
  href?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ExtendedButtonProps
>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      type = "button",
      disabled = false,
      leftIcon,
      rightIcon,
      onClick,
      href,
      ...props
    },
    ref
  ) => {
    const sizeClassName = buttonSizes[size];
    const variantStyle = variantClasses[variant];

    const baseClassName = cn(
      // Base button styles
      "group inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 ease-in-out cursor-pointer",
      // Variant specific styles
      variantStyle.base,
      variantStyle.hover,
      // Handle disabled state
      disabled
        ? "opacity-50 cursor-not-allowed"
        : "hover:shadow-md active:transform active:scale-95",
      // Size specific styles
      sizeClassName,
      className
    );

    const content = (
      <>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );

    if (href) {
      return (
        <a
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          className={baseClassName}
          href={href}
          onClick={onClick}
          {...(props as React.HTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        className={baseClassName}
        type={type}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
