"use client";
import { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Heading3 } from "@/components/ui/Typography";
import { ModalProps, ComponentSize } from "@/types/ui";

// Size classes for various modal sizes
const SIZE_CLASSES: Record<ComponentSize, string> = {
  sm: "max-w-sm",
  md: "max-w-xl",
  lg: "max-w-3xl",
  xl: "max-w-5xl",
};

// Common transition classes
const TRANSITION_CLASSES = {
  enter: "ease-out duration-300",
  leave: "ease-in duration-200",
};

// Overlay component for the modal background
const ModalOverlay = () => (
  <Transition.Child
    as={Fragment}
    enter={TRANSITION_CLASSES.enter}
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave={TRANSITION_CLASSES.leave}
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="fixed inset-0 bg-black/80" />
  </Transition.Child>
);

// Close button component - styled similarly to Slider navigation buttons
const CloseButton = ({ onClose }: { onClose: () => void }) => (
  <button
    type="button"
    className="cursor-pointer absolute right-4 top-4 z-10 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition-colors focus:outline-none"
    onClick={onClose}
    aria-label="Close modal"
  >
    <XMarkIcon className="h-5 w-5 text-gray-700" aria-hidden="true" />
  </button>
);

// Title component
const ModalTitle = ({ title }: { title?: string }) => {
  if (!title) return null;

  return (
    <Dialog.Title as="div" className="p-6 pb-0">
      <Heading3 className="font-semibold text-gray-900">{title}</Heading3>
    </Dialog.Title>
  );
};

// Modal content wrapper
const ModalContent = ({
  children,
  size,
  onClose,
  title,
}: {
  children: ReactNode;
  size: keyof typeof SIZE_CLASSES;
  onClose: () => void;
  title?: string;
}) => (
  <Transition.Child
    as={Fragment}
    enter={TRANSITION_CLASSES.enter}
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave={TRANSITION_CLASSES.leave}
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >
    <Dialog.Panel
      className={`w-full ${SIZE_CLASSES[size]} transform rounded-md bg-white shadow-xl transition-all max-h-[90vh] overflow-y-auto`}
    >
      <CloseButton onClose={onClose} />
      <ModalTitle title={title} />
      <div className="content-container overflow-y-auto">{children}</div>
    </Dialog.Panel>
  </Transition.Child>
);

export function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = "lg",
}: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <ModalOverlay />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <ModalContent size={size} onClose={onClose} title={title}>
              {children}
            </ModalContent>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
