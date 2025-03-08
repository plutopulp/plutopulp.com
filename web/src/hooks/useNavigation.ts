import { useCallback, useEffect, useState } from "react";
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

// Items can be imported to here or passed into the hook
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
  // Examples commented out for future use
  // { id: 'resume', label: 'Resume', path: '/resume.pdf', type: 'pdf' },
  // { id: 'blog', label: 'Blog', path: '/blog', type: 'page' },
  // { id: 'github', label: 'GitHub', path: 'https://github.com/username', type: 'external' },
];

export function useNavigation() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === "/";

  // Track scroll position for fixed/absolute navbar
  useEffect(() => {
    const handleScroll = () => {
      // Check if about section is visible
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        // If about section is at the top of the viewport or higher
        setIsScrolled(aboutRect.top <= 0);
      } else {
        // Fallback if section not found
        setIsScrolled(window.scrollY > window.innerHeight * 0.8);
      }

      // Determine active section based on scroll position
      if (isHomePage) {
        const sections = ["hero", "about", "skills", "projects", "contact"]
          .map((id) => document.getElementById(id))
          .filter(Boolean);

        for (const section of sections) {
          if (!section) continue;

          const rect = section.getBoundingClientRect();
          // Consider a section active when it's mostly in view
          if (
            rect.top <= window.innerHeight / 3 &&
            rect.bottom >= window.innerHeight / 3
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Determine if a navigation item is active
  const isActive = useCallback(
    (item: NavItem): boolean => {
      if (!isHomePage) {
        // Regular page navigation for non-home pages
        return pathname === item.path;
      }

      // For section links on home page, check the active section
      if (item.type === "section" && item.sectionId) {
        return activeSection === item.sectionId;
      }

      return false;
    },
    [pathname, isHomePage, activeSection]
  );

  // Handle navigation based on link type
  const handleNavigation = useCallback(
    (e: React.MouseEvent, item: NavItem) => {
      if (item.type === "section" && isHomePage && item.sectionId) {
        e.preventDefault();
        const section = document.getElementById(item.sectionId);
        if (section) {
          // Smooth scroll to the section
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
      // For other types, let the Link component handle navigation
    },
    [isHomePage]
  );

  // Get the appropriate href based on item type and current page
  const getItemHref = useCallback(
    (item: NavItem): string => {
      if (item.type === "section" && isHomePage && item.sectionId) {
        return `#${item.sectionId}`;
      }

      if (item.type === "external" || item.type === "pdf") {
        return item.path;
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
