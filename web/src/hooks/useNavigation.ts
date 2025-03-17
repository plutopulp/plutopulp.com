import { useCallback, useEffect, useState, RefObject } from "react";
import { usePathname } from "next/navigation";

// Define types for navigation
export type NavItemType = "section" | "page" | "external" | "pdf";

// Define valid section IDs
export type SectionId = "hero" | "about" | "skills" | "projects" | "contact";

// Define valid navigation item IDs
export type NavItemId = "home" | "about" | "skills" | "projects" | "contact";

export interface NavItem {
  id: NavItemId;
  label: string;
  path: string;
  type: NavItemType;
  sectionId?: SectionId; // Only for section type
}

// Define a type for section references
export type SectionRefs = {
  [key in SectionId]?: RefObject<HTMLElement | null>;
};

// Type for navigation event handlers
export type NavigationHandler = (e: React.MouseEvent, item: NavItem) => void;

// Navigation items configuration
export const navItems: ReadonlyArray<NavItem> = [
  { id: "home", label: "Home", path: "/", type: "section", sectionId: "hero" },
  {
    id: "about",
    label: "About",
    path: "/about",
    type: "section",
    sectionId: "about",
  },
  {
    id: "skills",
    label: "Skills",
    path: "/skills",
    type: "section",
    sectionId: "skills",
  },
  {
    id: "projects",
    label: "Projects",
    path: "/projects",
    type: "section",
    sectionId: "projects",
  },
  {
    id: "contact",
    label: "Contact",
    path: "/contact",
    type: "section",
    sectionId: "contact",
  },
];

// Type for visibility score calculation
type VisibilityScore = number;

// Calculate section visibility score
const calculateSectionVisibility = (
  rect: DOMRect,
  viewportHeight: number
): VisibilityScore => {
  const visibleTop = Math.max(0, rect.top);
  const visibleBottom = Math.min(viewportHeight, rect.bottom);
  const visibleHeight = Math.max(0, visibleBottom - visibleTop);

  const distanceFromMiddle = Math.abs(
    (visibleTop + visibleBottom) / 2 - viewportHeight / 2
  );
  const normalizedDistance = 1 - distanceFromMiddle / (viewportHeight / 2);

  return visibleHeight * normalizedDistance;
};

// Find most visible section
const findMostVisibleSection = (sectionRefs: SectionRefs): SectionId | null => {
  let bestSection: SectionId | null = null;
  let bestVisibility: VisibilityScore = -1;

  for (const [sectionId, ref] of Object.entries(sectionRefs)) {
    const section = ref?.current;
    if (!section) continue;

    const visibility = calculateSectionVisibility(
      section.getBoundingClientRect(),
      window.innerHeight
    );

    if (visibility > bestVisibility) {
      bestVisibility = visibility;
      bestSection = sectionId as SectionId;
    }
  }

  return bestSection;
};

// Check if page is scrolled past hero section
const checkIfScrolled = (
  aboutRef: RefObject<HTMLElement | null> | undefined
): boolean => {
  if (aboutRef?.current) {
    const aboutRect = aboutRef.current.getBoundingClientRect();
    return aboutRect.top <= 0;
  }
  return window.scrollY > window.innerHeight * 0.8;
};

export interface NavigationResult {
  isHomePage: boolean;
  isScrolled: boolean;
  activeSection: SectionId | null;
  isActive: (item: NavItem) => boolean;
  handleNavigation: NavigationHandler;
  getItemHref: (item: NavItem) => string;
  navItems: ReadonlyArray<NavItem>;
  findNavItem: (itemId: NavItemId) => NavItem | undefined;
}

export function useNavigation(sectionRefs: SectionRefs): NavigationResult {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const isHomePage = pathname === "/";

  // Handle scroll events
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(checkIfScrolled(sectionRefs.about));

      if (isHomePage) {
        const mostVisibleSection = findMostVisibleSection(sectionRefs);
        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, sectionRefs]);

  // Check if nav item is active
  const isActive = useCallback(
    (item: NavItem): boolean => {
      if (!isHomePage) {
        return pathname === item.path;
      }
      return item.type === "section" && item.sectionId === activeSection;
    },
    [pathname, isHomePage, activeSection]
  );

  // Find nav item in navItems array
  const findNavItem = useCallback((itemId: NavItemId): NavItem | undefined => {
    return navItems.find((item) => item.id === itemId);
  }, []);

  // Handle navigation clicks
  const handleNavigation = useCallback<NavigationHandler>(
    (e: React.MouseEvent, item: NavItem) => {
      if (item.type === "section" && isHomePage && item.sectionId) {
        e.preventDefault();
        sectionRefs[item.sectionId]?.current?.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
    [isHomePage, sectionRefs]
  );

  // Get href for nav items
  const getItemHref = useCallback(
    (item: NavItem): string => {
      if (item.type === "section" && isHomePage && item.sectionId) {
        return `#${item.sectionId}`;
      }
      return item.path;
    },
    [isHomePage]
  );

  return {
    isHomePage,
    isScrolled,
    activeSection,
    isActive,
    handleNavigation,
    getItemHref,
    navItems,
    findNavItem,
  };
}
