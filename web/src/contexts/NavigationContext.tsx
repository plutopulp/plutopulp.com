"use client";

import React, { createContext, ReactNode, useRef } from "react";
import { useNavigation, NavItem, SectionRefs } from "@/hooks/useNavigation";

// Define the context type
interface NavigationContextType {
  isHomePage: boolean;
  isScrolled: boolean;
  activeSection: string | null;
  isActive: (item: NavItem) => boolean;
  handleNavigation: (e: React.MouseEvent, item: NavItem) => void;
  getItemHref: (item: NavItem) => string;
  navItems: NavItem[];
  sectionRefs: SectionRefs;
}

// Create the context with a default value
export const NavigationContext = createContext<NavigationContextType>(
  {} as NavigationContextType
);

// Provider component
interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  // Create refs for each section
  const sectionRefs: SectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  // Use the navigation hook with our refs
  const navigation = useNavigation(sectionRefs);

  return (
    <NavigationContext.Provider value={{ ...navigation, sectionRefs }}>
      {children}
    </NavigationContext.Provider>
  );
}
