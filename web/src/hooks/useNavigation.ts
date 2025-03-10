import { useCallback, useEffect, useState, RefObject } from "react";
import { usePathname } from "next/navigation";

// Define types for navigation
export type NavItemType = "section" | "page" | "external" | "pdf";

export interface NavItem {
  id: string;
  label: string;
  path: string;
  type: NavItemType;
  sectionId?: string; // Only for section type
}

// Define a type for section references
export type SectionRefs = {
  [sectionId: string]: RefObject<HTMLElement | null>;
};

// Navigation items configuration
export const navItems: NavItem[] = [
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

// Calculate section visibility score
const calculateSectionVisibility = (rect: DOMRect, viewportHeight: number) => {
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
const findMostVisibleSection = (sectionRefs: SectionRefs): string | null => {
  let bestSection = null;
  let bestVisibility = -1;

  for (const [sectionId, ref] of Object.entries(sectionRefs)) {
    const section = ref.current;
    if (!section) continue;

    const visibility = calculateSectionVisibility(
      section.getBoundingClientRect(),
      window.innerHeight
    );

    if (visibility > bestVisibility) {
      bestVisibility = visibility;
      bestSection = sectionId;
    }
  }

  return bestSection;
};

// Check if page is scrolled past hero section
const checkIfScrolled = (aboutRef: RefObject<HTMLElement | null>) => {
  if (aboutRef?.current) {
    const aboutRect = aboutRef.current.getBoundingClientRect();
    return aboutRect.top <= 0;
  }
  return window.scrollY > window.innerHeight * 0.8;
};

export function useNavigation(sectionRefs: SectionRefs) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === "/";

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
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

  // Handle navigation clicks
  const handleNavigation = useCallback(
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
  };
}
